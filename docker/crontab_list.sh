
# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
#收集助力码
30 * * * * sh +x /scripts/docker/auto_help.sh collect |ts >> /scripts/logs/auto_help_collect.log 2>&1


######################################################################短期活动######################################################################
#手机狂欢城
0 0,12,18,21 * * * node /scripts/js/jd_carnivalcity.js |ts >> /scripts/logs/jd_carnivalcity.log 2>&1
#每日抽奖(活动时间：2021-05-01至2021-05-31)
#13 1,22,23 * * * node /scripts/js/jd_daily_lottery.js |ts >> /scripts/logs/jd_daily_lottery.log 2>&1
#金榜创造营 活动时间：2021-05-21至2021-12-31
0 1,22 * * * node /scripts/js/jd_gold_creator.js |ts >> /scripts/logs/jd_gold_creator.log 2>&1
#主会场红包雨
1 20 1-18 6 * node /scripts/js/jd_hby_lottery.js |ts >> /scripts/logs/jd_hby_lottery.log 2>&1


#飞利浦电视成长记2021-06-18
15 9 * 5,6 * node /scripts/js/jd_flp.js |ts >> /scripts/logs/jd_flp.log 2>&1

#京喜领88元红包(6.31到期)
30 1,6,12,21 * * * node /scripts/js/jd_jxlhb.js |ts >> /scripts/logs/jd_jxlhb.log 2>&1
#京喜阶梯红包2021-06-30
15 9 * 5,6 * node /scripts/js/jd_jxhb.js |ts >> /scripts/logs/jd_jxhb.log 2>&1


#超级直播间红包雨(活动时间不定期，出现异常提示请忽略。红包雨期间会正常)
#1,31 0-23/1 * * * node /scripts/js/jd_live_redrain.js |ts >> /scripts/logs/jd_live_redrain.log 2>&1
#新潮品牌狂欢（6.18过期）
20 1,21 * * * node /scripts/js/jd_mcxhd.js |ts >> /scripts/logs/jd_mcxhd.log 2>&1
#5G超级盲盒(活动时间：2021-06-2到2021-07-31)
0 0-23/4 * * * node /scripts/js/jd_mohe.js |ts >> /scripts/logs/jd_mohe.log 2>&1
#女装盲盒 活动时间：2021-05-24到2021-06-22
35 1,22 * * * node /scripts/js/jd_nzmh.js |ts >> /scripts/logs/jd_nzmh.log 2>&1

#赢一加新品手机2021-06-20
25 9 * 5,6 * node /scripts/js/jd_oneplus.js |ts >> /scripts/logs/jd_oneplus.log 2>&1

#京东极速版红包(活动时间：2021-5-5至2021-5-31)
45 0,23 * * * node /scripts/js/jd_speed_redpocke.js |ts >> /scripts/logs/jd_speed_redpocke.log 2>&1
#明星小店(星店长，2021-06-10)
0 1,21 * * * node /scripts/js/jd_star_shop.js |ts >> /scripts/logs/jd_star_shop.log 2>&1
#家电星推官 活动时间：2021年5月27日 00:00:00-2021年6月18日 23:59:59
0 0 * * * node /scripts/js/jd_xtg.js |ts >> /scripts/logs/jd_xtg.log 2>&1
#家电星推官好友互助 活动时间：2021年5月27日 00:00:00-2021年6月18日 23:59:59
0 0 * * * node /scripts/js/jd_xtg_help.js |ts >> /scripts/logs/jd_xtg_help.log 2>&1
#618动物联萌
33 0,6-23/2 * * * node /scripts/js/jd_zoo.js |ts >> /scripts/logs/jd_zoo.log 2>&1
#618动物联萌专门收集金币(每小时的第30分运行一次)
0-59/30 * * * * node /scripts/js/jd_zooCollect.js |ts >> /scripts/logs/jd_zooCollect.log 2>&1



######################################################################长期活动######################################################################

# 京豆变动通知
#20 10 * * * node /scripts/js/jd_bean_change.js |ts >> /scripts/logs/jd_bean_change.log 2>&1

# 领京豆额外奖励(每日可获得3京豆)
23 1,12,22 * * * node /scripts/js/jd_bean_home.js |ts >> /scripts/logs/jd_bean_home.log 2>&1
# 多合一签到(jd_bean_sign、jd_bean_sign_all)
7 0,17 * * * node /scripts/js/jd_bean_sign_all.js |ts >> /scripts/logs/jd_bean_sign_all.log 2>&1
# 签到赚豆
0 9 * * * node /scripts/js/jd_bean_sign_zd.js >> /scripts/logs/jd_bean_sign_zd.log 2>&1
#美丽研究院
41 7,12,19 * * * node /scripts/js/jd_beauty.js |ts >> /scripts/logs/jd_beauty.log 2>&1
#省钱大赢家之翻翻乐
20 * * * * node /scripts/js/jd_big_winner.js |ts >> /scripts/logs/jd_big_winner.log 2>&1
# 东东超市兑换奖品
0,30 0 * * * node /scripts/js/jd_blueCoin.js |ts >> /scripts/logs/jd_blueCoin.log 2>&1
# 口袋书店
38 8,12,18 * * * node /scripts/js/jd_bookshop.js |ts >> /scripts/logs/jd_bookshop.log 2>&1
# 京东汽车(签到满500赛点可兑换500京豆)
0 0 * * * node /scripts/js/jd_car.js |ts >> /scripts/logs/jd_car.log 2>&1
# 京东汽车旅程赛点兑换金豆
0 0 * * * node /scripts/js/jd_car_exchange.js |ts >> /scripts/logs/jd_car_exchange.log 2>&1
# 签到领现金
10 */4 * * * node /scripts/js/jd_cash.js |ts >> /scripts/logs/jd_cash.log 2>&1
#京喜财富岛
5 7,12,18 * * * node /scripts/js/jd_cfd.js |ts >> /scripts/logs/jd_cfd.log 2>&1
# 摇京豆
6 0,23 * * * node /scripts/js/jd_club_lottery.js |ts >> /scripts/logs/jd_club_lottery.log 2>&1
# crazyJoy自动每日任务
30 7,23 * * * node /scripts/js/jd_crazy_joy.js |ts >> /scripts/logs/jd_crazy_joy.log 2>&1
#监控crazyJoy分红
10 12 * * * node /scripts/js/jd_crazy_joy_bonus.js |ts >> /scripts/logs/jd_crazy_joy_bonus.log 2>&1
# 天天提鹅
28 * * * * node /scripts/js/jd_daily_egg.js |ts >> /scripts/logs/jd_daily_egg.log 2>&1


# 删除优惠券(默认注释，如需要自己开启，如有误删，已删除的券可以在回收站中还原，慎用)
#20 9 * * 6 node /scripts/js/jd_delCoupon.js |ts >> /scripts/logs/jd_delCoupon.log 2>&1

# 京喜工厂
50 * * * * node /scripts/js/jd_dreamFactory.js |ts >> /scripts/logs/jd_dreamFactory.log 2>&1
#家庭号
10 6,7 * * * node /scripts/js/jd_family.js |ts >> /scripts/logs/jd_family.log 2>&1


#joy总动员
#0 9 * * * node /scripts/js/jd_friend.js |ts >> /scripts/logs/jd_friend.log 2>&1

# 东东农场
15 6-18/6 * * * node /scripts/js/jd_fruit.js |ts >> /scripts/logs/jd_fruit.log 2>&1
# 导到所有互助码
23 7 * * * node /scripts/js/jd_get_share_code.js |ts >> /scripts/logs/jd_get_share_code.log 2>&1
#京东健康社区
13 1,6,22 * * * node /scripts/js/jd_health.js |ts >> /scripts/logs/jd_health.log 2>&1
#京东健康社区收集健康能量
5-45/20 * * * * node /scripts/js/jd_health_collect.js |ts >> /scripts/logs/jd_health_collect.log 2>&1
# 东东工厂
26 * * * * node /scripts/js/jd_jdfactory.js |ts >> /scripts/logs/jd_jdfactory.log 2>&1
# 微信小程序京东赚赚
10,15 0 * * * node /scripts/js/jd_jdzz.js |ts >> /scripts/logs/jd_jdzz.log 2>&1
# 领金贴
5 0 * * * node /scripts/js/jd_jin_tie.js |ts >> /scripts/logs/jd_jin_tie.log 2>&1
# 宠汪汪
45 */2,23 * * * node /scripts/js/jd_joy.js |ts >> /scripts/logs/jd_joy.log 2>&1
# 宠汪汪喂食
15 0-23/1 * * * node /scripts/js/jd_joy_feedPets.js |ts >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 宠汪汪积分兑换京豆
0 0-16/8 * * * node /scripts/js/jd_joy_reward.js |ts >> /scripts/logs/jd_joy_reward.log 2>&1
# 宠汪汪邀请助力
10 13-20/1 * * * node /scripts/js/jd_joy_run.js |ts >> /scripts/logs/jd_joy_run.log 2>&1
#宠汪汪偷好友积分与狗粮
10 0-21/3 * * * node /scripts/js/jd_joy_steal.js |ts >> /scripts/logs/jd_joy_steal.log 2>&1
# 跳跳乐瓜分京豆
15 0,12,22 * * * node /scripts/js/jd_jump.js |ts >> /scripts/logs/jd_jump.log 2>&1
#京小兑
30 8,16,20 * * * node /scripts/js/jd_jxd.js |ts >> /scripts/logs/jd_jxd.log 2>&1
#惊喜牧场
20 0-23/3 * * * node /scripts/js/jd_jxmc.js |ts >> /scripts/logs/jd_jxmc.log 2>&1

# 京喜农场
30 9,12,18 * * * node /scripts/js/jd_jxnc.js |ts >> /scripts/logs/jd_jxnc.log 2>&1

# 京东快递签到
47 1 * * * node /scripts/js/jd_kd.js |ts >> /scripts/logs/jd_kd.log 2>&1
#京东直播（又回来了）
30-50/5 12,23 * * * node /scripts/js/jd_live.js |ts >> /scripts/logs/jd_live.log 2>&1
# 京东抽奖机
0 0,12,23 * * * node /scripts/js/jd_lotteryMachine.js |ts >> /scripts/logs/jd_lotteryMachine.log 2>&1
# 幸运大转盘
10 10,23 * * * node /scripts/js/jd_market_lottery.js |ts >> /scripts/logs/jd_market_lottery.log 2>&1
# 摇钱树
23 */2 * * * node /scripts/js/jd_moneyTree.js |ts >> /scripts/logs/jd_moneyTree.log 2>&1
# 京东秒秒币
10 6,21 * * * node /scripts/js/jd_ms.js |ts >> /scripts/logs/jd_ms.log 2>&1
# 点点券
40 0,20 * * * node /scripts/js/jd_necklace.js |ts >> /scripts/logs/jd_necklace.log 2>&1
# 东东萌宠
35 6-18/6 * * * node /scripts/js/jd_pet.js |ts >> /scripts/logs/jd_pet.log 2>&1


# 金融养猪
#32 0-23/6 * * * node /scripts/js/jd_pigPet.js |ts >> /scripts/logs/jd_pigPet.log 2>&1

# 京东种豆得豆
10 7-22/1 * * * node /scripts/js/jd_plantBean.js |ts >> /scripts/logs/jd_plantBean.log 2>&1


#京东保价
#41 0,23 * * * node /scripts/js/jd_price.js |ts >> /scripts/logs/jd_price.log 2>&1

# 京东排行榜
21 9 * * * node /scripts/js/jd_rankingList.js |ts >> /scripts/logs/jd_rankingList.log 2>&1
# 京东全民开红包
12 0-23/4 * * * node /scripts/js/jd_redPacket.js |ts >> /scripts/logs/jd_redPacket.log 2>&1
# 闪购盲盒
47 8,22 * * * node /scripts/js/jd_sgmh.js |ts >> /scripts/logs/jd_sgmh.log 2>&1
# 进店领豆
6 0 * * * node /scripts/js/jd_shop.js |ts >> /scripts/logs/jd_shop.log 2>&1
# 东东小窝
46 6,23 * * * node /scripts/js/jd_small_home.js |ts >> /scripts/logs/jd_small_home.log 2>&1
#天天加速
8 0-23/3 * * * node /scripts/js/jd_speed.js |ts >> /scripts/logs/jd_speed.log 2>&1
#京东极速版签到+赚现金任务
21 1,6 * * * node /scripts/js/jd_speed_sign.js |ts >> /scripts/logs/jd_speed_sign.log 2>&1
# 京东超级盒子
20 7 * * * node /scripts/js/jd_super_box.js |ts >> /scripts/logs/jd_super_box.log 2>&1
# 东东超市
31 0,1-23/2 * * * node /scripts/js/jd_superMarket.js |ts >> /scripts/logs/jd_superMarket.log 2>&1
# 赚京豆(微信小程序)
12 0 * * * node /scripts/js/jd_syj.js |ts >> /scripts/logs/jd_syj.log 2>&1
# 取关京东店铺商品
45 23 * * * node /scripts/js/jd_unsubscribe.js |ts >> /scripts/logs/jd_unsubscribe.log 2>&1
#小鸽有礼2
30 7 * * * node /scripts/js/jd_xgyl.js |ts >> /scripts/logs/jd_xgyl.log 2>&1

#京喜签到
5 0 * * * node /scripts/js/jx_sign.js |ts >> /scripts/logs/jx_sign.log 2>&1





############################################################################################################################################
# 必须要的默认定时任务请勿删除
36 7 * * * docker_entrypoint.sh |ts >> /scripts/logs/default_task.log 2>&1
