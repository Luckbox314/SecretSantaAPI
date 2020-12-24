
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

function one_circle(users){
  shuffle(users);
  const first = users[0];
  const n = users.length
  const result = [];
  users.forEach((user, i) => {
    if (i < n-1) {
      result.push({
        sender: user,
        receiver: users[i+1]
      })
    } else {
      result.push({
        sender: user,
        receiver: first
      })
    }
  })
  return result;
}

module.exports = one_circle;
