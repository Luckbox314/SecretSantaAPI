const KoaRouter = require('koa-router');
const pkg = require('../../package.json');
const sendSecretEmail = require("../mailers/secret")
const one_circle = require('../selection_methods/one_circle');


const router = new KoaRouter();

const methods = {
  one_circle: one_circle
}
function sendEmails(result, ctx) {
  result.forEach((pair) => {
    sendSecretEmail(ctx, pair.sender.email, pair.receiver.username);
  })
}


router.get('/', async (ctx) => {
  await ctx.render('index', { appVersion: pkg.version });
});

// users are like
// [
//  {username: username, email: useremail},
//  {username: username, email: useremail},
//  {username: username, email: useremail}
// ]

router.post('/', async (ctx) => {
  let { users, method }= ctx.request.body;
  if (!method) {method = 'one_circle'}
  try {
    const result = methods[method](users);
    sendEmails(result, ctx);
    ctx.body = {"success": true, result: result};
  } catch (error) {
    ctx.body = {"success": false};
  }

});

module.exports = router;
