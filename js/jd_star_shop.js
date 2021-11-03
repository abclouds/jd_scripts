
/*
明星小店(星店长)
助力逻辑：每个ck随机获取一个明星，然后会先内部助力，然后再助力内置助力码
抽奖：是否中奖没判断，需自行查看
更新时间：2021-06-06
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
=================================Quantumultx=========================
[task_local]
#明星小店
0 1,21 * * * https://gitee.com/lxk0301/jd_scripts/raw/master/jd_star_shop.js, tag=明星小店, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

=================================Loon===================================
[Script]
cron "0 1,21 * * *" script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_star_shop.js,tag=明星小店

===================================Surge================================
明星小店 = type=cron,cronexp="0 1,21 * * *",wake-system=1,timeout=3600,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_star_shop.js

====================================小火箭=============================
明星小店 = type=cron,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_star_shop.js, cronexpr="0 1,21 * * *", timeout=3600, enable=true
 */

