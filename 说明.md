## 特别声明: 

* 本仓库发布的项目中涉及的任何解锁和解密分析脚本，仅用于测试和学习研究，禁止用于商业用途，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断.

* 本项目内所有资源文件，禁止任何公众号、自媒体进行任何形式的转载、发布。

* abclouds作者对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害.

* 间接使用脚本的任何用户，包括但不限于建立VPS或在某些行为违反国家/地区法律或相关法规的情况下进行传播, abclouds作者对于由此引起的任何隐私泄漏或其他后果概不负责.

* 请勿将项目的任何内容用于商业或非法目的，否则后果自负.

* 如果任何单位或个人认为该项目的脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明，所有权证明，我们将在收到认证文件后删除相关脚本.

* 任何以任何方式查看此项目的人或直接或间接使用该项目的任何脚本的使用者都应仔细阅读此声明。abclouds作者保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或项目的规则，则视为您已接受此免责声明.

 **您必须在下载后的24小时内从计算机或手机中完全删除以上内容.**  </br>
> ***您使用或者复制了本仓库且本人制作的任何脚本，则视为`已接受`此声明，请仔细阅读*** 

## 项目脚本列表
脚本兼容: QuantumultX, Surge, Loon, 小火箭, JSBox, Node.js

#### 1、获取cookie
  + [浏览器获取京东cookie教程](GetJdCookie.md)
    
  + [插件获取京东cookie教程](GetJdCookie2.md)
    
  + 京东APP扫码获取cookie(此种方式获取的cookie有效期为30天)(执行`node getJDCookie.js`即可,前提已配置好node环境,在当前工程下npm i下载好依赖包,本项目已下载好所以直接运行就可以)
  
  + iOS代理软件获取cookie请查看下面配置


#### 2、配置cookie与task脚本订阅

  ##### 2.1、iOS代理软件（QuantumultX、Surge、Loon、小火箭、BoxJs）
  
  + QuantumultX： 
    + cookie(重写)订阅链接：https://github.com/abclouds/jd_scripts/raw/master/QuantumultX/abclouds_cookies.conf
    + task脚本订阅地址: https://github.com/abclouds/jd_scripts/raw/master/QuantumultX/abclouds_gallery.json

  + Surge：cookie与task脚本订阅模块地址: https://github.com/abclouds/jd_scripts/raw/master/Surge/abclouds_Task.sgmodule.sgmodule

  + Loon：cookie与task脚本订阅订阅地址: https://github.com/abclouds/jd_scripts/raw/master/Loon/abclouds_LoonTask.conf
  
  + BoxJs订阅地址(要配置上面QX等代理软件使用,代理软件获取cookie成功就会自动填充到BoxJs)：https://github.com/abclouds/jd_scripts/raw/master/BoxJs/abclouds.boxjs.json
  

  + 使用方式：在代理软件配置好下方配置后，复制 https://home.m.jd.com/myJd/newhome.action 到浏览器打开(没登录的就登录后再访问) ，在个人中心自动获取 cookie，若弹出成功则正常使用。否则继续再此页面继续刷新一下试试。


  
  ##### 2.2、Docker

 + [部署方法](docker/Readme.md)

 + [环境变量集合](env.md)
 

#### 3、执行脚本
 以字母排序。

<!-- 这是隐藏信息，用来给 update_list.sh 脚本提供标记信息的，用于自动生成下面的脚本清单，请勿删除这里的标记信息。 -->
<!-- 此表格由 update_list.sh 脚本自动生成，请不要人工修改。 -->
<!-- 清单标记开始 -->
| 序号 | 文件 | 名称 | 活动入口 |
| :-: | - | - | - |
|1|[jd_bean_change.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_bean_change.js)|京东资产变动通知||
|2|[jd_bean_home.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_bean_home.js)|领京豆额外奖励|京东APP首页-领京豆|
|3|[jd_bean_sign.js-bak](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_bean_sign.js)|京东多合一签到|各处的签到汇总|
|4|[jd_beauty.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_beauty.js)|美丽研究院|京东app首页-美妆馆-底部中间按钮|
|5|[jd_blueCoin.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_blueCoin.js)|东东超市兑换奖品|京东APP我的-更多工具-东东超市|
|6|[jd_bookshop.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_bookshop.js)|口袋书店|京东app首页-京东图书-右侧口袋书店|
|7|[jd_car.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_car.js)|京东汽车|京东APP首页-京东汽车-屏幕右中部，车主福利|
|8|[jd_car_exchange.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_car_exchange.js)|京东汽车兑换|京东APP首页-京东汽车-屏幕右中部，车主福利|
|9|[jd_carnivalcity.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_carnivalcity.js)|京东手机狂欢城|暂无 [活动地址](https://carnivalcity.m.jd.com/)|
|10|[jd_cash.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_cash.js)|签到领现金|京东APP搜索领现金进入|
|11|[jd_cfd.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_cfd.js)|京喜财富岛|京喜APP-我的-京喜财富岛|
|12|[jd_club_lottery.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_club_lottery.js)|摇京豆|京东APP首页-领京豆-摇京豆/京东APP首页-我的-京东会员-摇京豆|
|13|[jd_crazy_joy.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_crazy_joy.js)|crazyJoy任务|京东APP我的-更多工具-疯狂的JOY|
|14|[jd_crazy_joy_bonus.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js**/jd_crazy_joy_bonus.js)|监控crazyJoy分红|京东APP我的-更多工具-疯狂的JOY|
|15|[jd_crazy_joy_coin.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_crazy_joy_coin.js)|crazyJoy挂机|京东APP我的-更多工具-疯狂的JOY|
|16|[jd_daily_egg.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_daily_egg.js)|天天提鹅|京东金融-天天提鹅|
|17|[jd_delCoupon.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_delCoupon.js)|删除优惠券|京东APP我的-优惠券|
|18|[jd_dreamFactory.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_dreamFactory.js)|京喜工厂|京东APP-游戏与互动-查看更多-京喜工厂|
|19|[jd_family.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_family.js)|京东家庭号|玩一玩-家庭号|
|20|[jd_fruit.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_fruit.js)|东东农场|京东APP我的-更多工具-东东农场|
|21|[jd_get_share_code.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_get_share_code.js)|获取互助码||
|22|[jd_jdfactory.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_jdfactory.js)|东东工厂|京东APP首页-数码电器-东东工厂|
|23|[jd_jdzz.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_jdzz.js)|京东赚赚|京东赚赚小程序|
|24|[jd_joy.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_joy.js)|宠汪汪|京东APP我的-更多工具-宠汪汪|
|25|[jd_joy_feedPets.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_joy_feedPets.js)|宠汪汪🐕喂食|京东APP我的-更多工具-宠汪汪|
|26|[jd_joy_help.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_joy_help.js)|宠汪汪强制为别人助力|京东APP我的-更多工具-宠汪汪|
|27|[jd_joy_reward.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_joy_reward.js)|宠汪汪积分兑换奖品|京东APP我的-更多工具-宠汪汪|
|28|[jd_joy_run.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_joy_run.js)|宠汪汪赛跑|京东APP我的-更多工具-宠汪汪|
|29|[jd_jxd.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_jxd.js)|京小兑|微信搜索小程序-京小兑|
|30|[jd_jxnc.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_jxnc.js)|京喜农场|京喜APP我的-京喜农场|
|31|[jd_kd.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_kd.js)|京东快递签到|[活动地址](https://jingcai-h5.jd.com/#/)|
|32|[jd_live.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_live.js)|京东直播|京东APP首页-京东直播|
|33|[jd_live_redrain.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_live_redrain.js)|超级直播间红包雨||
|34|[jd_lotteryMachine.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_lotteryMachine.js)|京东抽奖机|京东APP中各种抽奖活动的汇总|
|35|[jd_mohe.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_mohe.js)|5G超级盲盒|[活动地址](https://isp5g.m.jd.com)|
|36|[jd_moneyTree.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_moneyTree.js)|京东摇钱树|京东APP我的-更多工具-摇钱树|
|37|[jd_ms.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_ms.js)|京东秒秒币|京东app-京东秒杀-签到领红包|
|38|[jd_necklace.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_necklace.js)|点点券|京东APP-领券中心/券后9.9-领点点券 [活动地址](https://h5.m.jd.com/babelDiy/Zeus/41Lkp7DumXYCFmPYtU3LTcnTTXTX/index.html)|
|39|[jd_pet.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_pet.js)|东东萌宠|京东APP我的-更多工具-东东萌宠|
|40|[jd_pigPet.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_pigPet.js)|金融养猪|京东金融养猪猪|
|41|[jd_plantBean.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_plantBean.js)|京东种豆得豆|京东APP我的-更多工具-种豆得豆|
|42|[jd_price.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_price.js)|京东保价|京东保价|
|43|[jd_rankingList.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_rankingList.js)|京东排行榜|京东APP首页-更多频道-排行榜-悬浮按钮|
|44|[jd_redPacket.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_redPacket.js)|京东全民开红包|京东APP首页-领券-锦鲤红包。[活动地址](https://happy.m.jd.com/babelDiy/zjyw/3ugedFa7yA6NhxLN5gw2L3PF9sQC/index.html)|
|45|[jd_sgmh.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_sgmh.js)|闪购盲盒|京东APP首页-闪购-闪购盲盒|
|46|[jd_shop.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_shop.js)|进店领豆|京东APP首页-领京豆-进店领豆|
|47|[jd_sign.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_sign.js)|京东卡包签到||
|48|[jd_small_home.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_small_home.js)|东东小窝|京东APP我的-游戏与更多-东东小窝|
|49|[jd_speed.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_speed.js)|✈️天天加速|京东APP我的-更多工具-天天加速|
|50|[jd_speed_redpocke.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_speed_redpocke.js)|京东极速版红包|京东极速版-领红包|
|51|[jd_speed_sign.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_speed_sign.js)|京东极速版|京东极速版app-现金签到|
|52|[jd_superMarket.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_superMarket.js)|东东超市|京东APP首页-京东超市-底部东东超市|
|53|[jd_syj.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_syj.js)|赚京豆|赚京豆(微信小程序)-赚京豆-签到领京豆|
|54|[jd_unsubscribe.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_unsubscribe.js)|取关京东店铺和商品||
|55|[jx_sign.js](https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jx_sign.js)|京喜签到||
<!-- 清单标记结束 -->
<!-- 此表格由 update_list.sh 脚本自动生成，请不要人工修改。 -->
<!-- 这是隐藏信息，用来给 update_list.sh 脚本提供标记信息的，用于自动生成上面的脚本清单，请勿删除这里的标记信息。 -->
