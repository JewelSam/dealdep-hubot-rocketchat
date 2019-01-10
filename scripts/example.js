// Description:
//    An example script, tells you the hello. See below on how documentation works.
//    https://github.com/hubotio/hubot/blob/master/docs/scripting.md#documenting-scripts
//
// Commands:
//    something - Says hello
//
module.exports = (robot) => {
  robot.hear(/./, (res) => {
    res.reply('hello')
  })
}