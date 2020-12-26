module.exports = function sendSecretEmail(ctx, email, message) {
  // you can get all the additional data needed by using the provided one plus ctx
  console.log("Enviando ", message, " a ", email);
  return ctx.sendMail('secret-santa', { to: email, subject: '[SantaSecretoAPI]'}, { message });
};
