const { app, fs, path } = require('../core');

const getDate = require('./lib/getDate');
const { normalRandom ,randomNum } = require('./lib/randomNum');

/*
* 存储格式：
* {
*   "3092514593":{ date: "2021-10-16", value: 114514 },
* }
*
*/

function todayFortune(event) {
  if (event.raw_message == "jrrp" || event.raw_message == "今日人品" || event.raw_message == "今日运势") {

      let config = JSON.parse(fs.readFileSync(path.join(__dirname, './config', path.basename(__filename, '.js') + '.json'), 'utf-8'));
    // 进入判断
    let time = getDate();
    if (!config[event.user_id] || config[event.user_id].date !== time) {

      let num = randomNum(1, 100);
      num = num.toFixed(0);

      config[event.user_id] = { date: time, value: num };

      fs.writeFile(path.join(__dirname, './config', path.basename(__filename, '.js') + '.json'), JSON.stringify(config), "utf-8", (err) => {
        if (err) {
          app.sendGroupMsg(event.group_id, "工口发生，请检查后台日志");
        } else {
          app.sendGroupMsg(event.group_id, event.sender.nickname + "今日的人品为：" + config[event.user_id].value);
        }
      })
    } else {
      app.sendGroupMsg(event.group_id, event.sender.nickname + "今日的人品为：" + config[event.user_id].value);
    }
    return true;
  } else if (event.raw_message == "人品榜" || event.raw_message == "运势榜" || event.raw_message == "人品排名" ||event.raw_message == "今日人品榜" || event.raw_message == "今日运势榜") {

    let time = getDate();
    let config = JSON.parse(fs.readFileSync(path.join(__dirname, './config', path.basename(__filename, '.js') + '.json'), 'utf-8'));
    let rank = [];
    app.getGroupMemberList(event.group_id).then((res) => {
      res.data.forEach((e) => {
        if (config[e.user_id] && config[e.user_id].date == time) {
          rank.push({ name: e.nickname, value: config[e.user_id].value });
        }
      });
      rank.sort(function (a, b) {
        return b.value - a.value;
      })
      let str = '本群今日人品榜：\n'
      for (let i = 0; i < rank.length; i++) {
        const item = rank[i];
        str += `${i + 1}. ${item.name}: ${item.value}`
        if (i != rank.length - 1) str += '\n';
      }
      app.sendGroupMsg(event.group_id, str).then(() => { }, (err) => {
        console.log(err);
        app.sendGroupMsg(event.group_id, "工口发生，请检查后台日志");
      })

    }, (err) => {
      console.log(err);
      app.sendGroupMsg(event.group_id, "工口发生，请检查后台日志");
    })

    return true;
  }
  return false;
}

module.exports = todayFortune;