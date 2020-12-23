const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function sendMessage(mail, message){
  console.log("Email enviado", mail, message);
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
  console.log(users);
  shuffle(users);
  console.log(users);
  const first = users[0];
  const n = users.length
  users.forEach((user, i) => {
    if (i < n-1) {
      sendMessage(user.email, users[i+1].username)
    } else {
      sendMessage(user.email, first.username)
    }
  })
  ctx.body = {"success": true};
});

module.exports = router;
