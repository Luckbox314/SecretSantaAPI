const KoaRouter = require('koa-router');
const pkg = require('../../package.json');
const one_circle = require('../selection_methods/one_circle');

const router = new KoaRouter();

function sendEmail(mail, message){
  console.log("Email enviado", mail, message);
}
function sendEmails(result) {
  result.forEach((pair) => {
    sendEmail(pair.sender.email, pair.receiver.username);
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
  const { users }= ctx.request.body;
  const result = one_circle(users);
  sendEmails(result);
  ctx.body = {"success": true, result: result};
});

module.exports = router;
