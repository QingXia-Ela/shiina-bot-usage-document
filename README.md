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

### 欢迎新群友
当有新的群友加入时自动@他并回复预设好的内容。

### 娱乐项目

#### 恶臭检测
当群友发送的消息为 114514 时，自动街上 19819810
当群友发送的消息满足 `/哼哼哼?[,，]? ?啊啊啊+/` 正则表达式时 ， 自动回复"臭死了"。

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

欢迎群友投稿自己的小作文。

### 无情的复读机器
当群友复读同一个东西达到4次时触发一次复读