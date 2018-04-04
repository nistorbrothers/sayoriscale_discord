const commando = require('discord.js-commando');
const Jimp = require("jimp");

class depressingqualityPfp extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'depressing',
      group: 'GROUPNAME',
      memberName: 'depressing',
      description: 'DESCRIPTION'
    });
  }

async run(message, args) {
  var avatarImage = message.author.avatarURL
    Jimp.read(avatarImage, function (err, image) {
      image.color([
          { apply: "desaturate", params: [ 60 ] },
          { apply: "darken", params: [ 30 ] }
      ])
      image.write("image.jpeg");
        message.channel.sendMessage("This is your depressed avatar",{
    file: "image.jpeg"
});
});

}}

module.exports = depressingqualityPfp;
