# ShiinaBot使用文档

## 介绍

这里是ShiinaBot的使用文档，本机器人基于 GitHub oicq 机器人框架进行开发。
你可以在这个文档查找机器人的所有功能，
使用 ctrl+f 可以在该页面中搜索内容，
目前 Bot 处于开发阶段，所以不是实时在线与回复，

有建议的话直接联系我qq：3092514593，我会及时回复。

## 使用注意事项

### 关于指令的示例（重要）

(xxx)表示中括号里的内容是必选参数

[xxx]表示中括号里的内容是可选的

### 关于私信功能

目前由于个人技术原因 ~~其实是我想偷懒了~~
私信现在不对外开放，但是加好友和群邀请功能还是生效的，如果你想邀请 bot 加群也不是不行，就看她什么时候心情好会加就可以了

------

## 功能列表

### 关键词判断
关键词判断只有整条消息符合给定关键词的时候会触发，如群友发送"草"，则回复 "草，一种植物"，回答的都是预设好的内容

### 戳一戳回复
群友在戳机器人的时候会回复，从给定好的回答里随机抽一个回答群友

### 被@回复
在做了在做了（新建文件夹）

### 打招呼服务
当群友发送的消息满足以下正则表达式时触发：
1. `/[早中下晚][午上]好/`
2. `/^\早{1,3}$/`

如果都没匹配到则进行查表，匹配到对应内容后触发打招呼；
打招呼时间是以中国时间 (GMT+8) 进行判断，应该没有群友已经出国留学了吧。。。
以下是时间表：
1. 0:00 ~ 4:59 凌晨
2. 5:00 ~ 10:59 上午
3. 11:00 ~ 13:59 中午
4. 14:00 ~ 18:59 下午
5. 19:00 ~ 23:59 晚上

每个时间段都有不同的打招呼内容。

当打招呼时间为上午时，机器人会自动附上一句一言。关于一言可以到娱乐功能一栏下查看。

### 欢迎新群友
当有新的群友加入时自动@他并回复预设好的内容。

### 疫情查询

格式： `疫情查询 [国家] [省/州] [市]`

当你直接发送 `疫情查询` 时，默认回复中国大陆疫情情况。

使用示例： `疫情查询 中国 广东 广州` 

回复如下：
```
查询地区：广州
总确诊：528
今日确诊：0
今日治愈：暂无
今日死亡：暂无
数据更新时间：2022-03-06 00:00:15
```

### 娱乐项目

#### 今日人品

当群友发送以下词语 `[jrrp, 今日运势, 今日人品]` 时 ，机器人以数字的形式告诉你今天运势如何，下限`0`，上限`100`，每天均固定一个值。凌晨 0 点为人品值刷新时间

注意：这个人品值是 一个 QQ 号 对应一个人品值，即不管你在哪个群，人品值都是一样的   ~~没错就是这么无情~~

当群友发送以下词语 `[人品榜, 运势榜, 今日运势榜, 人品排名, 今日人品榜]` 时 ，机器人会告诉你本群所有计算过运势的群友的运势排名

#### 一言

当群友发送 `一言` 时 ，机器人发送一句一言并附上来源。

一言资源来自：https://hitokoto.cn/

#### 恶臭检测
当群友发送的消息为 114514 时，自动接上 19819810

当群友发送的消息满足 `/哼哼哼?[,，]? ?啊啊啊+/` 正则表达式时 ， 自动回复"臭死了"。

#### 来点二次元

当群友发送的消息为 "来点二次元"， Bot 会从图库里随机抽一张图片发出来，有的图片可能会很大，发送需要一些时间。

为避免刷屏，该功能一分钟内只能使用三次。

图库来源：https://iw233.cn/

#### 投食

使用格式：`(投食关键字) [投食的食物]`

投食关键字有这些： `["投食","投喂","喂食"]` 

单纯的投食机器人会随机增加 1 - 5 点好感度。当投食的食物符合以下列表时增加特定的好感度：

| 食物种类 | 增加的好感度 |
| -------- | ------------ |
| 奶茶     | 10           |
| 巧克力   | 10           |
| 饺子     | 10           |
| 火锅     | 15           |
| 拉面     | 10           |
| 炸鸡     | 20           |
| 小龙虾   | 30           |
| 玉米棒   | 5            |
| 榴莲     | -10          |
| 中药     | -20          |
| 毒药     | -100         |

不在列表内的食物则不增加好感度。

不同的好感度会解锁不同的戳一戳句子，目前句子不是很多捏。
考虑在 @ 的时候也能解锁不同语气的回答。

#### 定型文
用法： `定型文 (对象) [定型文id]`

目前的定型文有如下：

1. 我的手总是忍不住点进billbill。\n总是忍不住在关注动态里寻找着什么。\n是{{ str }}！！！...
2. 我忘不掉{{ str }}了。\n如果不是知道{{ str }}了，说不定我对这个世界已经没有留恋了。...
3. 想和{{ str }}去100个城市来99个拥抱看98场日落要97次接吻拍96张照片买95朵玫瑰去94家餐馆...
4. 我又梦见{{ str }}了\n醒来觉得很空虚，很茫然\n心理学上说\n当你梦到一个人...
5. 我好想做{{ str }}小姐的狗啊！\n我真的好想做{{ str }}小姐的狗啊！...
6. 不看{{ str }}10小时了\n数学分析的课程又有趣了起来\n想通了一个理论力学的问题...
7. {{ str }}依然这么可爱。\n什么都没变，是我没跟上她们。\n城里烟火幢幢，灯光下的人热情相拥...
8. {{ str }}晚安的一吻，吻在了我的灵魂。\n{{ str }}胸口的触感，坚硬却满是幸福。...
8. 有人问我：“{{ str }}是谁？”\n我想了想，该如何形容{{ str }}呢？...
8. 卧槽家人们！你们有没有看这个啊，啊这个{{ str }}！...
8. 我真的想{{ str }}想得要发疯了。我躺在床上会想{{ str }} ...
8. “这么晚了不走吗？”\n{{ str }}摇了摇头\n“我这么多年了一直有个习惯。” ...
8. {{ str }}担心我，要休息，但是没关系，明天不用早起{{ str }}。...

注意：超过150字的小作文会在发出后一分钟撤回，避免刷屏。

欢迎群友投稿自己的小作文。

#### 营销号生成器

用法： `营销号 (对象)`

会生成一个营销号文案

#### 无情的复读机器

当群友复读同一个东西达到4次时触发一次复读

### **以下功能只有 bot 为管理员时可用**

#### 毛子转盘

当群友发送`毛子转盘`时，有 50% 的概率被射中并禁言 2 ~ 5 分钟

#### 禁言抽奖

当群友发送`禁言抽奖`时，bot 会将发送者随机禁言1 ~ 30 分钟

#### 自助禁言

使用格式 `自助禁言 [分钟]` ，效果可以自己试试

### 游戏相关

**目前许多功能仍然在开发中！可能会有 Bug ！**

#### 明日方舟

##### 公招计算

使用格式：`公招 (词条数量)` 使用逗号将词条间隔开来

用例 ： `公招 高级资深干员，削弱，控场`

返回信息如下：

```
查询标签：高级资深干员，削弱，控场

tag：高级资深干员,削弱
  6 - 伊芙利特

tag：高级资深干员,控场
  6 - 莫斯提马  6 - 刻俄柏

tag：高级资深干员
  6 - 能天使  6 - 黑  6 - 伊芙利特  6 - 莫斯提马  6 - 推进之王  6 - 银灰  6 - 赫拉格  6 - 斯卡蒂  6 - 陈  6 - 煌  6 - 星熊  6 - 塞雷娅  6 - 闪灵  6 - 夜莺  6 - 麦哲伦  6 - 刻俄柏  6 - 阿

tag：削弱
  4 - 流星  4 - 夜烟  5 - 陨星  5 - 初雪  5 - 槐琥  6 - 伊芙利特

tag：控场
  5 - 德克萨斯  5 - 梅尔  5 - 格劳克斯  5 - 红  6 - 莫斯提马  6 - 刻俄柏

注意：部分tag如果公招时间拉到 7 小时 40 分钟以上则可以将 3 星以下干员忽略
```

