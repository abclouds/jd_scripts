/*
活动入口：京东APP我的-优惠券
脚本：删除优惠券
更新时间：2021-01-21
说明：1、删除优惠券名称中不含“京东”、“超市”、“生鲜”关键字的券；2、删除优惠券名称中含“XX旗舰店”的券；3、已删除的券可以在回收站中还原
============Quantumultx===============
[task_local]
#删除优惠券
10 * * * * https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jjd_delCoupon.js, tag=删除优惠券, img-url=https://github.com/58xinian/icon/raw/master/jdgc.png, enabled=true

================Loon==============
[Script]
cron "10 * * * *" script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jjd_delCoupon.js,tag=删除优惠券

===============Surge=================
删除优惠券 = type=cron,cronexp="10 * * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jjd_delCoupon.js

============小火箭=========
删除优惠券 = type=cron,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jjd_delCoupon.js, cronexpr="10 * * * *", timeout=3600, enable=true

 */
const _0x3439=['set-cookie','loaddata','concat','【提示】cookie已失效','*/*','https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2','logSeparator','JDUA','trim','&wxadd=1&filterswitch=1&_=','dataFile','toString','284815CmiKJq','path','index','readFileSync','string','/v1/scripting/evaluate','删除优惠券','276247NjZlAZ','【京东账号一】删除优惠券失败','retcode','writeFileSync','env','exit','exports','删除优惠券---','fetch','isQuanX',',\x20结束!\x20🕛\x20','method','../USER_AGENTS','reduce','setValueForKey','undefined','Cookie','cktough','Content-Type','statusCode','jdUnsubscribePageSize','../jdCookie.js','length','got','jdUnsubscribeNotify','wq.jd.com','toObj','cron','forEach','1504806YNjkAf','getval','match','existsSync','getDate','catch','USER_AGENT','1WOubUO','getHours','旗舰店','now','coupon','POST','open-url','log',',0,0','headers','isMute','isArray','https://wq.jd.com/activeapi/deletecouponlistwithfinance?couponinfolist=','getTime','map','\x0a开始【京东账号','isMuteLog','isSurge','59gxzUvn','substr','base','zh-cn','京东账号','\x0a请重新登录获取cookie','call','&sceneval=2&g_login_type=1&callback=jsonpCBKB&g_ty=ls','isNode','used','https://wq.jd.com/activeapi/queryjdcouponlistwithfinance?state=','time','https://wqs.jd.com/','CookieJD','https://bean.m.jd.com/bean/signIndex.action','18782XSNTGy','push','post','null','logs','【京东账号','exec','==============📣系统通知📣==============','【提示】请先获取京东账号一cookie\x0a直接使用京东签到获取','indexOf','\x0a【京东账号',',1,0','@chavy_boxjs_userCfgs.httpapi','openUrl','keep-alive','jdUnsubscribeShopPageSize','then','floor','跳过删除:','cwd','.$1','body','请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie','mediaUrl','UserName','get','write','张\x0a【跳过含关键词】','stringify','zh-CN,zh;q=0.9,en;q=0.8','isLoon','sendNotify','setdata','expired','couponTitle','getdata','jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1','jdUnsubscribeStopShop','----成功\x0a','opts','resolve','setval','getScript','http','couponid','logErr','useable','CookieJar','false','filter','data','getMonth','cookieJar',',\x20开始!','slice','CookieJD2','isLogin','https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2','isNeedRewrite','\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action','keys','stack','parse','runScript','429286MmQWdV','done','&sceneval=2&g_login_type=1&callback=jsonpCBKC&g_ty=ls','JD_USER_AGENT','京东服务器返回空数据','436653YKjmWJ','CookiesJD','test','getMilliseconds','lodash_set','status','application/x-www-form-urlencoded',',\x20失败!\x20原因:\x20','JD_DEBUG','http://','toStr',',\x20错误!','split','media-url','replace','cookie','timeout','nickName','\x0a【已删除优惠券】','startTime','writedata','box.dat','name','lodash_get','672058foFkOc','ckjar','msg','assign','url','GITHUB','send','jdUnsubscribeStopGoods'];const _0x43c5b9=_0x389e;(function(_0x14ff05,_0x16f872){const _0x2f79d4=_0x389e;while(!![]){try{const _0x3a8f60=-parseInt(_0x2f79d4(0x24c))+-parseInt(_0x2f79d4(0x260))*parseInt(_0x2f79d4(0x1ce))+parseInt(_0x2f79d4(0x234))+parseInt(_0x2f79d4(0x1e0))*-parseInt(_0x2f79d4(0x1ef))+parseInt(_0x2f79d4(0x267))+parseInt(_0x2f79d4(0x22f))+parseInt(_0x2f79d4(0x1c7));if(_0x3a8f60===_0x16f872)break;else _0x14ff05['push'](_0x14ff05['shift']());}catch(_0x1f583f){_0x14ff05['push'](_0x14ff05['shift']());}}}(_0x3439,0x8e15d));function _0x389e(_0x189ac2,_0x4cadda){_0x189ac2=_0x189ac2-0x1c1;let _0x3439d6=_0x3439[_0x189ac2];return _0x3439d6;}const $=new Env(_0x43c5b9(0x266)),jdCookieNode=$['isNode']()?require(_0x43c5b9(0x27c)):'',notify=$[_0x43c5b9(0x1e8)]()?require('../sendNotify'):'';let cookiesArr=[],cookie='';if($['isNode']()){Object[_0x43c5b9(0x22b)](jdCookieNode)[_0x43c5b9(0x1c6)](_0x1e2f2a=>{cookiesArr['push'](jdCookieNode[_0x1e2f2a]);});if(process['env'][_0x43c5b9(0x23c)]&&process[_0x43c5b9(0x26b)]['JD_DEBUG']===_0x43c5b9(0x21f))console[_0x43c5b9(0x1d5)]=()=>{};}else cookiesArr=[$[_0x43c5b9(0x212)](_0x43c5b9(0x1ed)),$['getdata'](_0x43c5b9(0x226)),...jsonParse($[_0x43c5b9(0x212)](_0x43c5b9(0x235))||'[]')[_0x43c5b9(0x1dc)](_0x347448=>_0x347448[_0x43c5b9(0x243)])][_0x43c5b9(0x220)](_0x447d92=>!!_0x447d92);const jdNotify=$[_0x43c5b9(0x212)](_0x43c5b9(0x1c2));let goodPageSize=$['getdata'](_0x43c5b9(0x27b))||0x14,shopPageSize=$['getdata'](_0x43c5b9(0x1fe))||0x14,stopGoods=$[_0x43c5b9(0x212)](_0x43c5b9(0x253))||'',stopShop=$[_0x43c5b9(0x212)](_0x43c5b9(0x214))||'',delCount=0x0,hasKeyword=0x0;const JD_API_HOST='https://wq.jd.com/';!(async()=>{const _0x464a1e=_0x43c5b9;!cookiesArr[0x0]&&$[_0x464a1e(0x24e)](_0x464a1e(0x268),_0x464a1e(0x1f7),_0x464a1e(0x1ee),{'open-url':_0x464a1e(0x1ee)});for(let _0x2463e9=0x0;_0x2463e9<cookiesArr[_0x464a1e(0x27d)];_0x2463e9++){if(cookiesArr[_0x2463e9]){cookie=cookiesArr[_0x2463e9],$[_0x464a1e(0x207)]=decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/)&&cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]),$[_0x464a1e(0x262)]=_0x2463e9+0x1,$['isLogin']=!![],$['nickName']='',await TotalBean(),console[_0x464a1e(0x1d5)](_0x464a1e(0x1dd)+$['index']+'】'+($['nickName']||$[_0x464a1e(0x207)])+'\x0a');if(!$[_0x464a1e(0x227)]){$[_0x464a1e(0x24e)]($[_0x464a1e(0x24a)],_0x464a1e(0x257),_0x464a1e(0x1e4)+$[_0x464a1e(0x262)]+'\x20'+($[_0x464a1e(0x245)]||$['UserName'])+_0x464a1e(0x22a),{'open-url':_0x464a1e(0x1ee)});$[_0x464a1e(0x1e8)]()&&await notify[_0x464a1e(0x20e)]($[_0x464a1e(0x24a)]+'cookie已失效\x20-\x20'+$[_0x464a1e(0x207)],_0x464a1e(0x1e4)+$[_0x464a1e(0x262)]+'\x20'+$[_0x464a1e(0x207)]+_0x464a1e(0x1e5));continue;}await getCoupon(),await showMsg();}}})()[_0x43c5b9(0x1cc)](_0x3ed5e6=>{const _0x492430=_0x43c5b9;$[_0x492430(0x1d5)]('','❌\x20'+$[_0x492430(0x24a)]+_0x492430(0x23b)+_0x3ed5e6+'!','');})['finally'](()=>{const _0xbdf8fc=_0x43c5b9;$[_0xbdf8fc(0x230)]();});function delCoupon(_0x3cd66d,_0x38a716){return new Promise(_0xcdecd1=>{const _0x425b73=_0x389e,_0x16997a={'url':_0x425b73(0x1da)+_0x3cd66d+'&_='+Date['now']()+_0x425b73(0x231),'headers':{'authority':_0x425b73(0x1c3),'User-Agent':$[_0x425b73(0x1e8)]()?process['env'][_0x425b73(0x232)]?process[_0x425b73(0x26b)][_0x425b73(0x232)]:require('../USER_AGENTS')[_0x425b73(0x1cd)]:$['getdata'](_0x425b73(0x25b))?$['getdata']('JDUA'):_0x425b73(0x213),'accept':_0x425b73(0x258),'referer':_0x425b73(0x1ec),'accept-language':_0x425b73(0x20c),'cookie':cookie}};$[_0x425b73(0x208)](_0x16997a,(_0xef8dec,_0x1e64d1,_0x265368)=>{const _0x50e73c=_0x425b73;try{_0x265368=JSON['parse'](_0x265368['match'](new RegExp(/jsonpCBK.?\((.*);*/))[0x1]),_0x265368[_0x50e73c(0x269)]===0x0&&(console[_0x50e73c(0x1d5)](_0x50e73c(0x26e)+_0x38a716+_0x50e73c(0x215)),delCount++);}catch(_0x50ea98){$[_0x50e73c(0x21c)](_0x50ea98,_0x1e64d1);}finally{_0xcdecd1();}});});}function getCoupon(){return new Promise(_0x3dab2d=>{const _0x5b4c19=_0x389e;let _0x9a798=['1','6'];for(let _0xae4699=0x0;_0xae4699<_0x9a798['length'];_0xae4699++){let _0x54f081={'url':_0x5b4c19(0x1ea)+_0x9a798[_0xae4699]+_0x5b4c19(0x25d)+Date[_0x5b4c19(0x1d1)]()+_0x5b4c19(0x1e7),'headers':{'authority':_0x5b4c19(0x1c3),'User-Agent':$[_0x5b4c19(0x1e8)]()?process[_0x5b4c19(0x26b)][_0x5b4c19(0x232)]?process[_0x5b4c19(0x26b)]['JD_USER_AGENT']:require('../USER_AGENTS')[_0x5b4c19(0x1cd)]:$[_0x5b4c19(0x212)](_0x5b4c19(0x25b))?$['getdata']('JDUA'):_0x5b4c19(0x213),'accept':_0x5b4c19(0x258),'referer':_0x5b4c19(0x1ec),'accept-language':_0x5b4c19(0x20c),'cookie':cookie}};$[_0x5b4c19(0x208)](_0x54f081,async(_0x393656,_0x633197,_0x31a150)=>{const _0x4e5e03=_0x5b4c19;try{_0x31a150=JSON[_0x4e5e03(0x22d)](_0x31a150['match'](new RegExp(/jsonpCBK.?\((.*);*/))[0x1]);let _0x420d52='',_0x494951='';if(_0x9a798[_0xae4699]==='6'){let _0x29ca87=_0x31a150[_0x4e5e03(0x1d2)][_0x4e5e03(0x210)];for(let _0x5c3ea7=0x0;_0x5c3ea7<_0x29ca87['length'];_0x5c3ea7++){_0x420d52=_0x29ca87[_0x5c3ea7][_0x4e5e03(0x211)],_0x494951=escape(_0x29ca87[_0x5c3ea7][_0x4e5e03(0x21b)]+_0x4e5e03(0x1fa)),await delCoupon(_0x494951,_0x420d52);}let _0x53c707=_0x31a150['coupon'][_0x4e5e03(0x1e9)];for(let _0x23533c=0x0;_0x23533c<_0x53c707[_0x4e5e03(0x27d)];_0x23533c++){_0x420d52=_0x53c707[_0x23533c]['couponTitle'],_0x494951=escape(_0x53c707[_0x23533c]['couponid']+_0x4e5e03(0x1d6)),await delCoupon(_0x494951,_0x420d52);}}else{if(_0x9a798[_0xae4699]==='1'){let _0x9dfb7=_0x31a150[_0x4e5e03(0x1d2)][_0x4e5e03(0x21d)];for(let _0x5be51d=0x0;_0x5be51d<_0x9dfb7['length'];_0x5be51d++){_0x420d52=_0x9dfb7[_0x5be51d]['limitStr'],_0x494951=escape(_0x9dfb7[_0x5be51d]['couponid']+_0x4e5e03(0x1fa)),!isJDCoupon(_0x420d52)?await delCoupon(_0x494951,_0x420d52):($[_0x4e5e03(0x1d5)](_0x4e5e03(0x201)+_0x420d52),hasKeyword++);}}}}catch(_0x3b77f9){$[_0x4e5e03(0x21c)](_0x3b77f9,_0x633197);}finally{_0x3dab2d();}});}});}function isJDCoupon(_0x3eb596){const _0x292065=_0x43c5b9;if(_0x3eb596[_0x292065(0x1f8)]('京东')>-0x1)return!![];else{if(_0x3eb596[_0x292065(0x1f8)]('超市')>-0x1)return!![];else{if(_0x3eb596[_0x292065(0x1f8)]('京贴')>-0x1)return!![];else{if(_0x3eb596[_0x292065(0x1f8)]('全品类')>-0x1)return!![];else{if(_0x3eb596['indexOf']('话费')>-0x1)return!![];else{if(_0x3eb596[_0x292065(0x1f8)]('小鸽有礼')>-0x1)return!![];else{if(_0x3eb596['indexOf'](_0x292065(0x1d0))>-0x1)return![];else{if(_0x3eb596[_0x292065(0x1f8)]('生鲜')>-0x1)return!![];else return![];}}}}}}}}function showMsg(){const _0x58526d=_0x43c5b9;!jdNotify||jdNotify===_0x58526d(0x21f)?$[_0x58526d(0x24e)]($[_0x58526d(0x24a)],'',_0x58526d(0x1f4)+$[_0x58526d(0x262)]+'】'+$[_0x58526d(0x245)]+_0x58526d(0x246)+delCount+_0x58526d(0x20a)+hasKeyword+'张'):$[_0x58526d(0x1d5)](_0x58526d(0x1f9)+$[_0x58526d(0x262)]+'】'+$[_0x58526d(0x245)]+_0x58526d(0x246)+delCount+_0x58526d(0x20a)+hasKeyword+'张');}function TotalBean(){return new Promise(async _0x5432db=>{const _0x60ee3c=_0x389e,_0x65ab18={'url':_0x60ee3c(0x228),'headers':{'Accept':'application/json,text/plain,\x20*/*','Content-Type':_0x60ee3c(0x23a),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':_0x60ee3c(0x1e3),'Connection':_0x60ee3c(0x1fd),'Cookie':cookie,'Referer':_0x60ee3c(0x259),'User-Agent':$[_0x60ee3c(0x1e8)]()?process['env'][_0x60ee3c(0x232)]?process[_0x60ee3c(0x26b)][_0x60ee3c(0x232)]:require(_0x60ee3c(0x273))[_0x60ee3c(0x1cd)]:$['getdata'](_0x60ee3c(0x25b))?$[_0x60ee3c(0x212)](_0x60ee3c(0x25b)):_0x60ee3c(0x213)}};$[_0x60ee3c(0x1f1)](_0x65ab18,(_0x311b87,_0x305591,_0x4ac7b0)=>{const _0x17796a=_0x60ee3c;try{if(_0x311b87)console['log'](''+JSON[_0x17796a(0x20b)](_0x311b87)),console['log']($[_0x17796a(0x24a)]+'\x20API请求失败，请检查网路重试');else{if(_0x4ac7b0){_0x4ac7b0=JSON[_0x17796a(0x22d)](_0x4ac7b0);if(_0x4ac7b0[_0x17796a(0x269)]===0xd){$[_0x17796a(0x227)]=![];return;}_0x4ac7b0['retcode']===0x0?$[_0x17796a(0x245)]=_0x4ac7b0[_0x17796a(0x1e2)]&&_0x4ac7b0['base']['nickname']||$[_0x17796a(0x207)]:$[_0x17796a(0x245)]=$['UserName'];}else console[_0x17796a(0x1d5)](_0x17796a(0x233));}}catch(_0x466114){$[_0x17796a(0x21c)](_0x466114,_0x305591);}finally{_0x5432db();}});});}function jsonParse(_0x46c405){const _0x2b103a=_0x43c5b9;if(typeof _0x46c405=='string')try{return JSON[_0x2b103a(0x22d)](_0x46c405);}catch(_0x223c22){return console[_0x2b103a(0x1d5)](_0x223c22),$[_0x2b103a(0x24e)]($['name'],'',_0x2b103a(0x205)),[];}}function Env(_0x35aeb4,_0x29ded8){const _0x274543=_0x43c5b9;_0x274543(0x276)!=typeof process&&JSON['stringify'](process['env'])[_0x274543(0x1f8)](_0x274543(0x251))>-0x1&&process[_0x274543(0x26c)](0x0);class _0x1aaeae{constructor(_0x3a755c){const _0x357d57=_0x274543;this[_0x357d57(0x26b)]=_0x3a755c;}[_0x274543(0x252)](_0x4f2384,_0x5833a9='GET'){const _0x5f55b3=_0x274543;_0x4f2384=_0x5f55b3(0x264)==typeof _0x4f2384?{'url':_0x4f2384}:_0x4f2384;let _0x2a2c75=this['get'];return'POST'===_0x5833a9&&(_0x2a2c75=this[_0x5f55b3(0x1f1)]),new Promise((_0x2d7deb,_0x122cf6)=>{const _0xf0d8aa=_0x5f55b3;_0x2a2c75[_0xf0d8aa(0x1e6)](this,_0x4f2384,(_0x122ef3,_0xa78026,_0x1c13aa)=>{_0x122ef3?_0x122cf6(_0x122ef3):_0x2d7deb(_0xa78026);});});}[_0x274543(0x208)](_0x213acd){const _0x3c68ee=_0x274543;return this['send'][_0x3c68ee(0x1e6)](this[_0x3c68ee(0x26b)],_0x213acd);}['post'](_0x1498a1){const _0x204437=_0x274543;return this[_0x204437(0x252)][_0x204437(0x1e6)](this[_0x204437(0x26b)],_0x1498a1,_0x204437(0x1d3));}}return new class{constructor(_0x4636e0,_0x9fe266){const _0x13851d=_0x274543;this[_0x13851d(0x24a)]=_0x4636e0,this[_0x13851d(0x21a)]=new _0x1aaeae(this),this[_0x13851d(0x221)]=null,this[_0x13851d(0x25e)]=_0x13851d(0x249),this[_0x13851d(0x1f3)]=[],this[_0x13851d(0x1d8)]=!0x1,this[_0x13851d(0x229)]=!0x1,this[_0x13851d(0x25a)]='\x0a',this['startTime']=new Date()[_0x13851d(0x1db)](),Object[_0x13851d(0x24f)](this,_0x9fe266),this[_0x13851d(0x1d5)]('','🔔'+this[_0x13851d(0x24a)]+_0x13851d(0x224));}['isNode'](){const _0x34dbf0=_0x274543;return _0x34dbf0(0x276)!=typeof module&&!!module[_0x34dbf0(0x26d)];}[_0x274543(0x270)](){const _0x48840a=_0x274543;return _0x48840a(0x276)!=typeof $task;}[_0x274543(0x1df)](){const _0x1d00a7=_0x274543;return _0x1d00a7(0x276)!=typeof $httpClient&&'undefined'==typeof $loon;}[_0x274543(0x20d)](){const _0x4a0e48=_0x274543;return _0x4a0e48(0x276)!=typeof $loon;}[_0x274543(0x1c4)](_0x1bb958,_0x302012=null){const _0x335ce9=_0x274543;try{return JSON[_0x335ce9(0x22d)](_0x1bb958);}catch{return _0x302012;}}[_0x274543(0x23e)](_0x5733ea,_0x39cb87=null){const _0x297748=_0x274543;try{return JSON[_0x297748(0x20b)](_0x5733ea);}catch{return _0x39cb87;}}['getjson'](_0x564ab5,_0x4efd65){const _0x3e9531=_0x274543;let _0x208412=_0x4efd65;const _0xab9316=this['getdata'](_0x564ab5);if(_0xab9316)try{_0x208412=JSON[_0x3e9531(0x22d)](this['getdata'](_0x564ab5));}catch{}return _0x208412;}['setjson'](_0x490424,_0x2a88c5){const _0x4240e5=_0x274543;try{return this[_0x4240e5(0x20f)](JSON['stringify'](_0x490424),_0x2a88c5);}catch{return!0x1;}}[_0x274543(0x219)](_0x490f28){return new Promise(_0x150a03=>{this['get']({'url':_0x490f28},(_0x3e7c2f,_0x28a2ee,_0x1846ce)=>_0x150a03(_0x1846ce));});}[_0x274543(0x22e)](_0x28b4d8,_0x102a25){const _0x1c410e=_0x274543;return new Promise(_0x40f8ec=>{const _0xaf5fd5=_0x389e;let _0x251cf4=this[_0xaf5fd5(0x212)](_0xaf5fd5(0x1fb));_0x251cf4=_0x251cf4?_0x251cf4[_0xaf5fd5(0x242)](/\n/g,'')[_0xaf5fd5(0x25c)]():_0x251cf4;let _0x13e040=this[_0xaf5fd5(0x212)]('@chavy_boxjs_userCfgs.httpapi_timeout');_0x13e040=_0x13e040?0x1*_0x13e040:0x14,_0x13e040=_0x102a25&&_0x102a25[_0xaf5fd5(0x244)]?_0x102a25[_0xaf5fd5(0x244)]:_0x13e040;const [_0x4baa98,_0xc13024]=_0x251cf4[_0xaf5fd5(0x240)]('@'),_0xf42c44={'url':_0xaf5fd5(0x23d)+_0xc13024+_0xaf5fd5(0x265),'body':{'script_text':_0x28b4d8,'mock_type':_0xaf5fd5(0x1c5),'timeout':_0x13e040},'headers':{'X-Key':_0x4baa98,'Accept':_0xaf5fd5(0x258)}};this['post'](_0xf42c44,(_0x11338e,_0x14e8b8,_0x854a74)=>_0x40f8ec(_0x854a74));})[_0x1c410e(0x1cc)](_0x161bf4=>this[_0x1c410e(0x21c)](_0x161bf4));}[_0x274543(0x255)](){const _0x407967=_0x274543;if(!this[_0x407967(0x1e8)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x407967(0x261)]=this[_0x407967(0x261)]?this[_0x407967(0x261)]:require(_0x407967(0x261));const _0x10b263=this[_0x407967(0x261)][_0x407967(0x217)](this[_0x407967(0x25e)]),_0x51bfbc=this['path'][_0x407967(0x217)](process[_0x407967(0x202)](),this[_0x407967(0x25e)]),_0x3d7100=this['fs'][_0x407967(0x1ca)](_0x10b263),_0x23bc34=!_0x3d7100&&this['fs'][_0x407967(0x1ca)](_0x51bfbc);if(!_0x3d7100&&!_0x23bc34)return{};{const _0x530752=_0x3d7100?_0x10b263:_0x51bfbc;try{return JSON[_0x407967(0x22d)](this['fs'][_0x407967(0x263)](_0x530752));}catch(_0x3c5f12){return{};}}}}[_0x274543(0x248)](){const _0x1ad48f=_0x274543;if(this[_0x1ad48f(0x1e8)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x1ad48f(0x261)]=this[_0x1ad48f(0x261)]?this[_0x1ad48f(0x261)]:require(_0x1ad48f(0x261));const _0x2acc5b=this['path'][_0x1ad48f(0x217)](this[_0x1ad48f(0x25e)]),_0x2c0a08=this[_0x1ad48f(0x261)][_0x1ad48f(0x217)](process[_0x1ad48f(0x202)](),this['dataFile']),_0x12466b=this['fs'][_0x1ad48f(0x1ca)](_0x2acc5b),_0x3de754=!_0x12466b&&this['fs']['existsSync'](_0x2c0a08),_0x59b74d=JSON[_0x1ad48f(0x20b)](this['data']);_0x12466b?this['fs'][_0x1ad48f(0x26a)](_0x2acc5b,_0x59b74d):_0x3de754?this['fs'][_0x1ad48f(0x26a)](_0x2c0a08,_0x59b74d):this['fs']['writeFileSync'](_0x2acc5b,_0x59b74d);}}[_0x274543(0x24b)](_0x42bef9,_0x45e273,_0x4df277){const _0x3be22d=_0x274543,_0x482982=_0x45e273[_0x3be22d(0x242)](/\[(\d+)\]/g,_0x3be22d(0x203))[_0x3be22d(0x240)]('.');let _0xf7ddb4=_0x42bef9;for(const _0x205b69 of _0x482982)if(_0xf7ddb4=Object(_0xf7ddb4)[_0x205b69],void 0x0===_0xf7ddb4)return _0x4df277;return _0xf7ddb4;}[_0x274543(0x238)](_0x47671d,_0x31a541,_0x1483c2){const _0x32a881=_0x274543;return Object(_0x47671d)!==_0x47671d?_0x47671d:(Array[_0x32a881(0x1d9)](_0x31a541)||(_0x31a541=_0x31a541[_0x32a881(0x25f)]()[_0x32a881(0x1c9)](/[^.[\]]+/g)||[]),_0x31a541[_0x32a881(0x225)](0x0,-0x1)[_0x32a881(0x274)]((_0x51cdee,_0x11259a,_0x4ba38f)=>Object(_0x51cdee[_0x11259a])===_0x51cdee[_0x11259a]?_0x51cdee[_0x11259a]:_0x51cdee[_0x11259a]=Math['abs'](_0x31a541[_0x4ba38f+0x1])>>0x0==+_0x31a541[_0x4ba38f+0x1]?[]:{},_0x47671d)[_0x31a541[_0x31a541[_0x32a881(0x27d)]-0x1]]=_0x1483c2,_0x47671d);}[_0x274543(0x212)](_0x2cf408){const _0xd3d06=_0x274543;let _0x49dd61=this[_0xd3d06(0x1c8)](_0x2cf408);if(/^@/['test'](_0x2cf408)){const [,_0x4a5a52,_0x402075]=/^@(.*?)\.(.*?)$/['exec'](_0x2cf408),_0x305d09=_0x4a5a52?this['getval'](_0x4a5a52):'';if(_0x305d09)try{const _0x246bff=JSON[_0xd3d06(0x22d)](_0x305d09);_0x49dd61=_0x246bff?this['lodash_get'](_0x246bff,_0x402075,''):_0x49dd61;}catch(_0x478f1f){_0x49dd61='';}}return _0x49dd61;}[_0x274543(0x20f)](_0x176f1e,_0x1b4d29){const _0x39bb91=_0x274543;let _0x40abc5=!0x1;if(/^@/['test'](_0x1b4d29)){const [,_0x5718fa,_0x39b03a]=/^@(.*?)\.(.*?)$/[_0x39bb91(0x1f5)](_0x1b4d29),_0x241bed=this['getval'](_0x5718fa),_0x10a3c3=_0x5718fa?_0x39bb91(0x1f2)===_0x241bed?null:_0x241bed||'{}':'{}';try{const _0x5cfd1c=JSON['parse'](_0x10a3c3);this[_0x39bb91(0x238)](_0x5cfd1c,_0x39b03a,_0x176f1e),_0x40abc5=this[_0x39bb91(0x218)](JSON[_0x39bb91(0x20b)](_0x5cfd1c),_0x5718fa);}catch(_0x25753f){const _0x54909b={};this[_0x39bb91(0x238)](_0x54909b,_0x39b03a,_0x176f1e),_0x40abc5=this[_0x39bb91(0x218)](JSON[_0x39bb91(0x20b)](_0x54909b),_0x5718fa);}}else _0x40abc5=this['setval'](_0x176f1e,_0x1b4d29);return _0x40abc5;}[_0x274543(0x1c8)](_0x4f5ace){const _0x14f6bd=_0x274543;return this['isSurge']()||this[_0x14f6bd(0x20d)]()?$persistentStore['read'](_0x4f5ace):this['isQuanX']()?$prefs['valueForKey'](_0x4f5ace):this[_0x14f6bd(0x1e8)]()?(this[_0x14f6bd(0x221)]=this['loaddata'](),this['data'][_0x4f5ace]):this['data']&&this[_0x14f6bd(0x221)][_0x4f5ace]||null;}[_0x274543(0x218)](_0x5927f2,_0x51509b){const _0x479a5a=_0x274543;return this['isSurge']()||this[_0x479a5a(0x20d)]()?$persistentStore[_0x479a5a(0x209)](_0x5927f2,_0x51509b):this['isQuanX']()?$prefs[_0x479a5a(0x275)](_0x5927f2,_0x51509b):this['isNode']()?(this[_0x479a5a(0x221)]=this[_0x479a5a(0x255)](),this[_0x479a5a(0x221)][_0x51509b]=_0x5927f2,this[_0x479a5a(0x248)](),!0x0):this['data']&&this['data'][_0x51509b]||null;}['initGotEnv'](_0x206a4f){const _0x54ffc0=_0x274543;this['got']=this[_0x54ffc0(0x1c1)]?this['got']:require(_0x54ffc0(0x1c1)),this[_0x54ffc0(0x278)]=this['cktough']?this[_0x54ffc0(0x278)]:require('tough-cookie'),this['ckjar']=this['ckjar']?this[_0x54ffc0(0x24d)]:new this['cktough'][(_0x54ffc0(0x21e))](),_0x206a4f&&(_0x206a4f[_0x54ffc0(0x1d7)]=_0x206a4f[_0x54ffc0(0x1d7)]?_0x206a4f[_0x54ffc0(0x1d7)]:{},void 0x0===_0x206a4f[_0x54ffc0(0x1d7)][_0x54ffc0(0x277)]&&void 0x0===_0x206a4f['cookieJar']&&(_0x206a4f[_0x54ffc0(0x223)]=this['ckjar']));}[_0x274543(0x208)](_0x410ffa,_0x2b6ebe=()=>{}){const _0x48808e=_0x274543;_0x410ffa[_0x48808e(0x1d7)]&&(delete _0x410ffa[_0x48808e(0x1d7)][_0x48808e(0x279)],delete _0x410ffa[_0x48808e(0x1d7)]['Content-Length']),this[_0x48808e(0x1df)]()||this['isLoon']()?(this[_0x48808e(0x1df)]()&&this[_0x48808e(0x229)]&&(_0x410ffa['headers']=_0x410ffa[_0x48808e(0x1d7)]||{},Object[_0x48808e(0x24f)](_0x410ffa[_0x48808e(0x1d7)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x48808e(0x208)](_0x410ffa,(_0x1c37c4,_0x2d9edc,_0xbbeeaa)=>{const _0x183390=_0x48808e;!_0x1c37c4&&_0x2d9edc&&(_0x2d9edc[_0x183390(0x204)]=_0xbbeeaa,_0x2d9edc['statusCode']=_0x2d9edc[_0x183390(0x239)]),_0x2b6ebe(_0x1c37c4,_0x2d9edc,_0xbbeeaa);})):this['isQuanX']()?(this[_0x48808e(0x229)]&&(_0x410ffa[_0x48808e(0x216)]=_0x410ffa[_0x48808e(0x216)]||{},Object[_0x48808e(0x24f)](_0x410ffa[_0x48808e(0x216)],{'hints':!0x1})),$task[_0x48808e(0x26f)](_0x410ffa)['then'](_0x542d09=>{const {statusCode:_0xd07432,statusCode:_0x4392ef,headers:_0x2a06e2,body:_0x244b78}=_0x542d09;_0x2b6ebe(null,{'status':_0xd07432,'statusCode':_0x4392ef,'headers':_0x2a06e2,'body':_0x244b78},_0x244b78);},_0x395f37=>_0x2b6ebe(_0x395f37))):this[_0x48808e(0x1e8)]()&&(this['initGotEnv'](_0x410ffa),this['got'](_0x410ffa)['on']('redirect',(_0x397fa2,_0x456735)=>{const _0x9e68d7=_0x48808e;try{if(_0x397fa2[_0x9e68d7(0x1d7)][_0x9e68d7(0x254)]){const _0x15d479=_0x397fa2[_0x9e68d7(0x1d7)][_0x9e68d7(0x254)]['map'](this[_0x9e68d7(0x278)][_0x9e68d7(0x277)]['parse'])[_0x9e68d7(0x25f)]();_0x15d479&&this[_0x9e68d7(0x24d)]['setCookieSync'](_0x15d479,null),_0x456735[_0x9e68d7(0x223)]=this[_0x9e68d7(0x24d)];}}catch(_0x51e8b3){this[_0x9e68d7(0x21c)](_0x51e8b3);}})[_0x48808e(0x1ff)](_0x35164f=>{const {statusCode:_0x46a962,statusCode:_0x32e091,headers:_0x1f91ed,body:_0x112a11}=_0x35164f;_0x2b6ebe(null,{'status':_0x46a962,'statusCode':_0x32e091,'headers':_0x1f91ed,'body':_0x112a11},_0x112a11);},_0x5a646b=>{const {message:_0x5bc267,response:_0x1cd050}=_0x5a646b;_0x2b6ebe(_0x5bc267,_0x1cd050,_0x1cd050&&_0x1cd050['body']);}));}[_0x274543(0x1f1)](_0x44492d,_0x57a3ee=()=>{}){const _0x56d544=_0x274543;if(_0x44492d[_0x56d544(0x204)]&&_0x44492d['headers']&&!_0x44492d[_0x56d544(0x1d7)][_0x56d544(0x279)]&&(_0x44492d[_0x56d544(0x1d7)][_0x56d544(0x279)]=_0x56d544(0x23a)),_0x44492d[_0x56d544(0x1d7)]&&delete _0x44492d[_0x56d544(0x1d7)]['Content-Length'],this[_0x56d544(0x1df)]()||this[_0x56d544(0x20d)]())this['isSurge']()&&this[_0x56d544(0x229)]&&(_0x44492d[_0x56d544(0x1d7)]=_0x44492d['headers']||{},Object[_0x56d544(0x24f)](_0x44492d['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x56d544(0x1f1)](_0x44492d,(_0x1b3f98,_0x1c61a8,_0x2748a5)=>{const _0x1b8ed2=_0x56d544;!_0x1b3f98&&_0x1c61a8&&(_0x1c61a8['body']=_0x2748a5,_0x1c61a8[_0x1b8ed2(0x27a)]=_0x1c61a8[_0x1b8ed2(0x239)]),_0x57a3ee(_0x1b3f98,_0x1c61a8,_0x2748a5);});else{if(this[_0x56d544(0x270)]())_0x44492d[_0x56d544(0x272)]=_0x56d544(0x1d3),this[_0x56d544(0x229)]&&(_0x44492d[_0x56d544(0x216)]=_0x44492d[_0x56d544(0x216)]||{},Object[_0x56d544(0x24f)](_0x44492d[_0x56d544(0x216)],{'hints':!0x1})),$task[_0x56d544(0x26f)](_0x44492d)[_0x56d544(0x1ff)](_0x34f3d3=>{const {statusCode:_0x5037eb,statusCode:_0x33835a,headers:_0x462c05,body:_0x44cf49}=_0x34f3d3;_0x57a3ee(null,{'status':_0x5037eb,'statusCode':_0x33835a,'headers':_0x462c05,'body':_0x44cf49},_0x44cf49);},_0x29229f=>_0x57a3ee(_0x29229f));else{if(this[_0x56d544(0x1e8)]()){this['initGotEnv'](_0x44492d);const {url:_0x4add06,..._0x1e8175}=_0x44492d;this[_0x56d544(0x1c1)][_0x56d544(0x1f1)](_0x4add06,_0x1e8175)[_0x56d544(0x1ff)](_0x12f203=>{const {statusCode:_0x4bf312,statusCode:_0xb76161,headers:_0x895ee3,body:_0x25ec33}=_0x12f203;_0x57a3ee(null,{'status':_0x4bf312,'statusCode':_0xb76161,'headers':_0x895ee3,'body':_0x25ec33},_0x25ec33);},_0x33f117=>{const _0x2364c9=_0x56d544,{message:_0x98fe22,response:_0x5812f8}=_0x33f117;_0x57a3ee(_0x98fe22,_0x5812f8,_0x5812f8&&_0x5812f8[_0x2364c9(0x204)]);});}}}}[_0x274543(0x1eb)](_0x2155e5,_0x4e80b4=null){const _0x58addc=_0x274543,_0x326176=_0x4e80b4?new Date(_0x4e80b4):new Date();let _0x1d1681={'M+':_0x326176[_0x58addc(0x222)]()+0x1,'d+':_0x326176[_0x58addc(0x1cb)](),'H+':_0x326176[_0x58addc(0x1cf)](),'m+':_0x326176['getMinutes'](),'s+':_0x326176['getSeconds'](),'q+':Math[_0x58addc(0x200)]((_0x326176[_0x58addc(0x222)]()+0x3)/0x3),'S':_0x326176[_0x58addc(0x237)]()};/(y+)/[_0x58addc(0x236)](_0x2155e5)&&(_0x2155e5=_0x2155e5[_0x58addc(0x242)](RegExp['$1'],(_0x326176['getFullYear']()+'')[_0x58addc(0x1e1)](0x4-RegExp['$1'][_0x58addc(0x27d)])));for(let _0x37b8bf in _0x1d1681)new RegExp('('+_0x37b8bf+')')[_0x58addc(0x236)](_0x2155e5)&&(_0x2155e5=_0x2155e5[_0x58addc(0x242)](RegExp['$1'],0x1==RegExp['$1']['length']?_0x1d1681[_0x37b8bf]:('00'+_0x1d1681[_0x37b8bf])['substr']((''+_0x1d1681[_0x37b8bf])['length'])));return _0x2155e5;}['msg'](_0x12b785=_0x35aeb4,_0x2ae667='',_0x2179f7='',_0x9341f5){const _0x3e20f7=_0x274543,_0x54d892=_0x5a36ee=>{const _0x3a530e=_0x389e;if(!_0x5a36ee)return _0x5a36ee;if(_0x3a530e(0x264)==typeof _0x5a36ee)return this['isLoon']()?_0x5a36ee:this[_0x3a530e(0x270)]()?{'open-url':_0x5a36ee}:this['isSurge']()?{'url':_0x5a36ee}:void 0x0;if('object'==typeof _0x5a36ee){if(this[_0x3a530e(0x20d)]()){let _0x4a886b=_0x5a36ee[_0x3a530e(0x1fc)]||_0x5a36ee[_0x3a530e(0x250)]||_0x5a36ee[_0x3a530e(0x1d4)],_0x4fde30=_0x5a36ee[_0x3a530e(0x206)]||_0x5a36ee[_0x3a530e(0x241)];return{'openUrl':_0x4a886b,'mediaUrl':_0x4fde30};}if(this['isQuanX']()){let _0x2038f1=_0x5a36ee[_0x3a530e(0x1d4)]||_0x5a36ee[_0x3a530e(0x250)]||_0x5a36ee[_0x3a530e(0x1fc)],_0x29ba6d=_0x5a36ee[_0x3a530e(0x241)]||_0x5a36ee[_0x3a530e(0x206)];return{'open-url':_0x2038f1,'media-url':_0x29ba6d};}if(this[_0x3a530e(0x1df)]()){let _0x1c1cea=_0x5a36ee[_0x3a530e(0x250)]||_0x5a36ee[_0x3a530e(0x1fc)]||_0x5a36ee['open-url'];return{'url':_0x1c1cea};}}};if(this[_0x3e20f7(0x1d8)]||(this[_0x3e20f7(0x1df)]()||this[_0x3e20f7(0x20d)]()?$notification[_0x3e20f7(0x1f1)](_0x12b785,_0x2ae667,_0x2179f7,_0x54d892(_0x9341f5)):this['isQuanX']()&&$notify(_0x12b785,_0x2ae667,_0x2179f7,_0x54d892(_0x9341f5))),!this[_0x3e20f7(0x1de)]){let _0x2f83e3=['',_0x3e20f7(0x1f6)];_0x2f83e3[_0x3e20f7(0x1f0)](_0x12b785),_0x2ae667&&_0x2f83e3['push'](_0x2ae667),_0x2179f7&&_0x2f83e3[_0x3e20f7(0x1f0)](_0x2179f7),console[_0x3e20f7(0x1d5)](_0x2f83e3['join']('\x0a')),this[_0x3e20f7(0x1f3)]=this['logs'][_0x3e20f7(0x256)](_0x2f83e3);}}['log'](..._0x365d1e){const _0x2df828=_0x274543;_0x365d1e['length']>0x0&&(this[_0x2df828(0x1f3)]=[...this[_0x2df828(0x1f3)],..._0x365d1e]),console[_0x2df828(0x1d5)](_0x365d1e['join'](this[_0x2df828(0x25a)]));}['logErr'](_0x1c9a41,_0x1b8894){const _0x11ddbb=_0x274543,_0x2451c7=!this[_0x11ddbb(0x1df)]()&&!this[_0x11ddbb(0x270)]()&&!this['isLoon']();_0x2451c7?this['log']('','❗️'+this[_0x11ddbb(0x24a)]+_0x11ddbb(0x23f),_0x1c9a41[_0x11ddbb(0x22c)]):this[_0x11ddbb(0x1d5)]('','❗️'+this[_0x11ddbb(0x24a)]+',\x20错误!',_0x1c9a41);}['wait'](_0x282b1a){return new Promise(_0xe3366b=>setTimeout(_0xe3366b,_0x282b1a));}['done'](_0x3d9c4d={}){const _0x598dcf=_0x274543,_0x530e09=new Date()[_0x598dcf(0x1db)](),_0x367780=(_0x530e09-this[_0x598dcf(0x247)])/0x3e8;this[_0x598dcf(0x1d5)]('','🔔'+this[_0x598dcf(0x24a)]+_0x598dcf(0x271)+_0x367780+'\x20秒'),this[_0x598dcf(0x1d5)](),(this[_0x598dcf(0x1df)]()||this['isQuanX']()||this[_0x598dcf(0x20d)]())&&$done(_0x3d9c4d);}}(_0x35aeb4,_0x29ded8);}