/*

跳跳乐瓜分京豆脚本
更新时间：2021-05-21
活动入口：来客有礼(微信小程序)=>跳跳乐或京东APP=》首页=》母婴馆=》底部中间
注：默认不做添加物品至购物车任务，守护京东APP最后一片净土。
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
================QuantumultX==================
[task_local]
#跳跳乐瓜分京豆
1 0,11,21 * * * https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_jump.js, tag=跳跳乐瓜分京豆, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true
===================Loon==============
[Script]
cron "1 0,11,21 * * *" script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_jump.js, tag=跳跳乐瓜分京豆
===============Surge===============
[Script]
跳跳乐瓜分京豆 = type=cron,cronexp="1 0,11,21 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_jump.js
====================================小火箭=============================
跳跳乐瓜分京豆 = type=cron,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_jump.js, cronexpr="1 0,11,21 * * *", timeout=3600, enable=true
*/
const _0x3c7c=['headers','294464QKitJg','dataFile','sendNotify','join_member','gridType','gridTaskDone','getSeconds',',\x20结束!\x20🕛\x20','cron','env','getdata','openUrl','readFileSync','Cookie','https://me-api.jd.com/user_new/info/GetJDUserInfoUnion','valueForKey','getBeanRewards','【提示】cookie已失效','@chavy_boxjs_userCfgs.httpapi','lodash_set','received','go_back','setValueForKey','cookie已失效\x20-\x20','开始执行活动：','jumpId',',\x20失败!\x20原因:\x20','catch','rewards','isSurge','activityId','datas','path','getGameList','isMuteLog','&reqSource=h5','../USER_AGENTS','JD_USER_AGENT','startTime','nowTime','的活动详情失败','GITHUB','logs','success','USER_AGENT','indexOf','jumpName','runScript','gzip,\x20deflate,\x20br','resolve','call','msg','object','trim','CookieJar','cookie','filter','baseInfo','https://jdjoy.jd.com/dist/taro/index.html/','getHomeInfo','sku','{\x22activityId\x22:\x22','375080xmvmuK','https://jdjoy.jd.com','CookieJD2','getTools','then','slice','length','\x0a*****开始【京东账号','join','isArray','set-cookie','keep-alive','addCart','到达终点','post','，活动时间：','diceLeft','substr','*/*',',活动已结束，已参与瓜分','gridTask','timeout','unreceive','assign','isQuanX','京豆\x0a','】\x20任务','getMonth','ckjar','userInfo','pageSize=8&pageNum=1','https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&','isMute','Content-Length','follow_channel','getMinutes','loaddata','/v1/scripting/evaluate','open-url','lodash_get','任务执行成功','taskList','\x20之后','\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action','执行骰子任务','toString','map','index','535776faWoji','endTime','done','add_cart','send','toLocaleString','stringify','fetch','nickName','cktough','408945UQOtia','mediaUrl','exports','setjson','initGotEnv','me-api.jd.com','获取ID为','push','exit',',活动已结束','keys','existsSync','不做：【','state','throwDice','setdata','.$1','京豆,共获得','complete','boom','9dzxPyp','time',',已到达终点，等待瓜分，瓜分时间：','401947NoJOvg','body','瓜分获得',',瓜分京豆','undefined','wait','logSeparator','concat','split','exec','get','getjson','statusCode','nickname','replace','setval','writedata','got','https://bean.m.jd.com/bean/signIndex.action','isLogin','https://jdjoy.jd.com/jump/','jumpList','getHours','getval','parse','getDate','getScript','jdjoy.jd.com','zh-cn','getTime','==============📣系统通知📣==============','已获得京豆：','go_ahead','JD_DEBUG','229352miVyKF','未判断情况',',\x20开始!','null','logErr','jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1','media-url','GET','opts','&fp=&eid=','name','isLoon','gridInfo','cart_bean','content','log','oneJumpInfo','write','finally','rewardList','follow_shop','stack','unfinish','Content-Type','getMilliseconds','开始执行任务：','match','isNeedRewrite','abs','writeFileSync','20567RjrBzS','userState','获取活动列表失败，请等待下一期活动\x0a','1001','UserName','丢骰子','test','string','http://','\x22,\x22skuList\x22:','redirect','CookiesJD','【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取','getFullYear','floor','application/x-www-form-urlencoded','activityId=','empty','\x0a请重新登录获取cookie','doTask','JDUA','road_block','method','cookieJar','注：脚本默认不做添加物品至购物车任务，守护京东APP最后一片净土。\x0a','retcode','goodsInfo','hasOwnProperty','jumpActivityDetail','tough-cookie','POST','data','isNode','@chavy_boxjs_userCfgs.httpapi_timeout','shareBean','give_dice','arrow','url',',\x20错误!'];const _0x1030cb=_0x4f9b;(function(_0x59584a,_0x2e0b0e){const _0xd6fe8a=_0x4f9b;while(!![]){try{const _0x662342=-parseInt(_0xd6fe8a(0x193))+parseInt(_0xd6fe8a(0x16e))*parseInt(_0xd6fe8a(0x1b1))+-parseInt(_0xd6fe8a(0x150))+-parseInt(_0xd6fe8a(0xe2))+parseInt(_0xd6fe8a(0x15a))+parseInt(_0xd6fe8a(0x120))+parseInt(_0xd6fe8a(0x171));if(_0x662342===_0x2e0b0e)break;else _0x59584a['push'](_0x59584a['shift']());}catch(_0x268f4d){_0x59584a['push'](_0x59584a['shift']());}}}(_0x3c7c,0x4c0bb));const $=new Env('跳跳乐瓜分京豆'),notify=$['isNode']()?require('../sendNotify'):'',jdCookieNode=$[_0x1030cb(0x1d1)]()?require('../jdCookie.js'):'';let cookiesArr=[],cookie='';if($[_0x1030cb(0x1d1)]()){Object[_0x1030cb(0x164)](jdCookieNode)['forEach'](_0x1b2043=>{cookiesArr['push'](jdCookieNode[_0x1b2043]);});if(process['env'][_0x1030cb(0x192)]&&process[_0x1030cb(0xeb)][_0x1030cb(0x192)]==='false')console[_0x1030cb(0x1a2)]=()=>{};}else cookiesArr=[$[_0x1030cb(0xec)]('CookieJD'),$['getdata'](_0x1030cb(0x122)),...$['toObj']($['getdata'](_0x1030cb(0x1bc))||'[]')[_0x1030cb(0x14e)](_0xaeead5=>_0xaeead5[_0x1030cb(0x119)])][_0x1030cb(0x11a)](_0x163fef=>!!_0x163fef);!(async()=>{const _0x485b7f=_0x1030cb;if(!cookiesArr[0x0]){$[_0x485b7f(0x115)]($[_0x485b7f(0x19d)],_0x485b7f(0x1bd),_0x485b7f(0x183),{'open-url':_0x485b7f(0x183)});return;}console[_0x485b7f(0x1a2)](_0x485b7f(0x1c9));for(let _0x3658a1=0x0;_0x3658a1<cookiesArr[_0x485b7f(0x126)];_0x3658a1++){if(cookiesArr[_0x3658a1]){cookie=cookiesArr[_0x3658a1],$['UserName']=decodeURIComponent(cookie[_0x485b7f(0x1ad)](/pt_pin=(.+?);/)&&cookie[_0x485b7f(0x1ad)](/pt_pin=(.+?);/)[0x1]),$[_0x485b7f(0x14f)]=_0x3658a1+0x1,$['isLogin']=!![],$[_0x485b7f(0x158)]=$[_0x485b7f(0x1b5)],await TotalBean(),console[_0x485b7f(0x1a2)](_0x485b7f(0x127)+$['index']+'】'+($[_0x485b7f(0x158)]||$[_0x485b7f(0x1b5)])+'*****\x0a');if(!$[_0x485b7f(0x184)]){$[_0x485b7f(0x115)]($['name'],_0x485b7f(0xf3),'京东账号'+$[_0x485b7f(0x14f)]+'\x20'+($[_0x485b7f(0x158)]||$[_0x485b7f(0x1b5)])+_0x485b7f(0x14b),{'open-url':'https://bean.m.jd.com/bean/signIndex.action'});$[_0x485b7f(0x1d1)]()&&await notify[_0x485b7f(0xe4)]($[_0x485b7f(0x19d)]+_0x485b7f(0xf9)+$[_0x485b7f(0x1b5)],'京东账号'+$[_0x485b7f(0x14f)]+'\x20'+$['UserName']+_0x485b7f(0x1c3));continue;}await jump();}}})()[_0x1030cb(0xfd)](_0x5dac26=>{const _0x55a73d=_0x1030cb;$['log']('','❌\x20'+$[_0x55a73d(0x19d)]+_0x55a73d(0xfc)+_0x5dac26+'!','');})[_0x1030cb(0x1a5)](()=>{const _0x269fd2=_0x1030cb;$[_0x269fd2(0x152)]();});async function jump(){const _0x5871ea=_0x1030cb;$['nowTime']=new Date()['getTime']()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8,$[_0x5871ea(0x186)]=[],await getGameList();if($[_0x5871ea(0x186)][_0x5871ea(0x126)]===0x0){console[_0x5871ea(0x1a2)](_0x5871ea(0x1b3));return;}await $['wait'](0x3e8);for(let _0x53c047=0x0;_0x53c047<$[_0x5871ea(0x186)][_0x5871ea(0x126)];_0x53c047++){$['jumpId']=$[_0x5871ea(0x186)][_0x53c047]['id'],$[_0x5871ea(0x1a3)]={},$[_0x5871ea(0x1a6)]=[];let _0x4d7d87=0x0,_0xa112d4=0x0;await getOneJumpInfo();if(JSON['stringify']($[_0x5871ea(0x1a3)])==='{}'){console['log'](_0x5871ea(0x160)+$['jumpId']+_0x5871ea(0x10a));continue;}$[_0x5871ea(0x110)]=$['oneJumpInfo']['jumpActivityDetail'][_0x5871ea(0x19d)];if($[_0x5871ea(0x1a3)]['userInfo'][_0x5871ea(0x1b2)]===_0x5871ea(0xf6)){console[_0x5871ea(0x1a2)]($[_0x5871ea(0x110)]+_0x5871ea(0x133)),console['log']('\x0a');continue;}else{if($['oneJumpInfo'][_0x5871ea(0x13d)][_0x5871ea(0x1b2)]===_0x5871ea(0x136)){$[_0x5871ea(0x1d3)]=0x0,console[_0x5871ea(0x1a2)]($[_0x5871ea(0x110)]+_0x5871ea(0x174)),await receive(),await $[_0x5871ea(0x176)](0x7d0),await rewards(),console[_0x5871ea(0x1a2)](_0x5871ea(0x173)+$[_0x5871ea(0x1d3)]+_0x5871ea(0x139));continue;}else{if($[_0x5871ea(0x109)]>$[_0x5871ea(0x1a3)][_0x5871ea(0x1cd)][_0x5871ea(0x151)]){console[_0x5871ea(0x1a2)]($[_0x5871ea(0x110)]+_0x5871ea(0x163)),console[_0x5871ea(0x1a2)]('\x0a');continue;}else{if($[_0x5871ea(0x1a3)][_0x5871ea(0x13d)][_0x5871ea(0x1b2)]===_0x5871ea(0x16c)){console[_0x5871ea(0x1a2)]($['jumpName']+_0x5871ea(0x170)+new Date($[_0x5871ea(0x1a3)][_0x5871ea(0x1cd)][_0x5871ea(0x151)])+_0x5871ea(0x14a)),console['log']('\x0a');break;}else{if($[_0x5871ea(0x1a3)][_0x5871ea(0x13d)][_0x5871ea(0x1b2)]==='playing')console[_0x5871ea(0x1a2)](_0x5871ea(0xfa)+$[_0x5871ea(0x110)]+_0x5871ea(0x12f)+new Date($[_0x5871ea(0x1a3)][_0x5871ea(0x1cd)]['startTime'])[_0x5871ea(0x155)]()+'至'+new Date($['oneJumpInfo'][_0x5871ea(0x1cd)][_0x5871ea(0x151)])['toLocaleString']());else{console[_0x5871ea(0x1a2)]('异常');continue;}}}}}await $[_0x5871ea(0x176)](0x3e8),await getBeanRewards(),_0x4d7d87=await getReward(),console[_0x5871ea(0x1a2)](_0x5871ea(0x190)+_0x4d7d87),await $[_0x5871ea(0x176)](0x3e8),$[_0x5871ea(0x149)]=[],await getTaskList(),await $['wait'](0x3e8),await doTask();$[_0x5871ea(0x1a3)][_0x5871ea(0x13d)][_0x5871ea(0xe7)]===![]&&await domission();await $[_0x5871ea(0x176)](0x3e8),await getOneJumpInfo();let _0xe1613=!![];$[_0x5871ea(0x1a3)]['userInfo'][_0x5871ea(0x130)]===0x0&&console[_0x5871ea(0x1a2)]('骰子数量为0');let _0x1946c5=0x0;while($['oneJumpInfo'][_0x5871ea(0x13d)][_0x5871ea(0x130)]>0x0&&_0xe1613&&_0x1946c5<0xa){await throwDice();if($[_0x5871ea(0xe6)]&&($[_0x5871ea(0xe6)]===_0x5871ea(0x16d)||$[_0x5871ea(0xe6)]===_0x5871ea(0x1c6)||$['gridType']===_0x5871ea(0xe5)||$[_0x5871ea(0xe6)]===_0x5871ea(0x153)))break;await $[_0x5871ea(0x176)](0xbb8);switch($['gridType']){case _0x5871ea(0x1d4):case _0x5871ea(0x1c2):case'lose_dice':case _0x5871ea(0x1a0):case _0x5871ea(0x1d5):break;case _0x5871ea(0xf7):case _0x5871ea(0x191):await throwDice(),await $['wait'](0x7d0),await getOneJumpInfo();$[_0x5871ea(0x1a3)][_0x5871ea(0x13d)][_0x5871ea(0xe7)]===![]&&await domission();break;case _0x5871ea(0x142):case'scan_good':case _0x5871ea(0x153):case'join_member':case _0x5871ea(0x16d):case _0x5871ea(0x1c6):case _0x5871ea(0x1a7):await domission();break;case'destination':_0xe1613=![],console[_0x5871ea(0x1a2)](_0x5871ea(0x12d));break;default:_0xe1613=![],console['log'](_0x5871ea(0x194));}await $[_0x5871ea(0x176)](0x7d0),await getOneJumpInfo(),_0x1946c5++;}_0xa112d4=await getReward(),console[_0x5871ea(0x1a2)]('执行结束,本次执行获得'+(_0xa112d4-_0x4d7d87)+_0x5871ea(0x16b)+_0xa112d4+'京豆'),console[_0x5871ea(0x1a2)]('\x0a'),await $[_0x5871ea(0x176)](0x7d0);}}function _0x4f9b(_0x4f439e,_0x49ad8d){_0x4f439e=_0x4f439e-0xe2;let _0x3c7c53=_0x3c7c[_0x4f439e];return _0x3c7c53;}async function rewards(){const _0xb864a3=_0x1030cb,_0x527e71=getGetRequest(_0xb864a3(0xfe),_0xb864a3(0x1c1)+$[_0xb864a3(0xfb)]);return new Promise(async _0xf30fb=>{const _0x4d2600=_0xb864a3;$[_0x4d2600(0x17b)](_0x527e71,(_0xbadc41,_0x341799,_0x216247)=>{const _0x20345e=_0x4d2600;try{if(_0x216247){_0x216247=JSON['parse'](_0x216247);if(_0x216247[_0x20345e(0x10d)]===!![]){let _0x5e53e9=_0x216247[_0x20345e(0x101)];for(let _0xfdeaff=0x0;_0xfdeaff<_0x5e53e9[_0x20345e(0x126)];_0xfdeaff++){_0x5e53e9[_0xfdeaff][_0x20345e(0x100)]===$[_0x20345e(0xfb)]&&($[_0x20345e(0x1d3)]=_0x5e53e9[_0xfdeaff][_0x20345e(0x1d3)]);}}}}catch(_0x497fbd){$['logErr'](_0x497fbd,_0x341799);}finally{_0xf30fb();}});});}async function getReward(){const _0x2a033b=_0x1030cb;await getBeanRewards();let _0x1e71f2=0x0;for(let _0x4e0607=0x0;_0x4e0607<$[_0x2a033b(0x1a6)][_0x2a033b(0x126)];_0x4e0607++){_0x1e71f2+=Number($[_0x2a033b(0x1a6)][_0x4e0607]['value']);}return _0x1e71f2;}async function domission(){const _0x27b53e=_0x1030cb;console[_0x27b53e(0x1a2)](_0x27b53e(0x14c));const _0x14a764=getGetRequest(_0x27b53e(0x1c4),'activityId='+$[_0x27b53e(0xfb)]);return new Promise(async _0x1dd9b6=>{const _0x34fe6e=_0x27b53e;$[_0x34fe6e(0x17b)](_0x14a764,(_0x41846b,_0x4d242e,_0x52f585)=>{const _0x125304=_0x34fe6e;try{}catch(_0x39d397){$[_0x125304(0x197)](_0x39d397,_0x4d242e);}finally{_0x1dd9b6();}});});}async function throwDice(){const _0x38ec50=_0x1030cb;console[_0x38ec50(0x1a2)](_0x38ec50(0x1b6));const _0x1c84b2=getGetRequest(_0x38ec50(0x168),_0x38ec50(0x1c1)+$['jumpId']+_0x38ec50(0x19c));return new Promise(async _0x1234db=>{$['get'](_0x1c84b2,(_0xd756f2,_0x4e532d,_0x4caf49)=>{const _0x52dbbb=_0x4f9b;try{_0x4caf49&&(_0x4caf49=JSON[_0x52dbbb(0x189)](_0x4caf49),$[_0x52dbbb(0xe6)]=_0x4caf49[_0x52dbbb(0x1d0)][_0x52dbbb(0x19f)]&&_0x4caf49[_0x52dbbb(0x1d0)]['gridInfo'][_0x52dbbb(0xe6)],console[_0x52dbbb(0x1a2)]('丢骰子结果：'+$[_0x52dbbb(0xe6)]));}catch(_0xc75bc3){$[_0x52dbbb(0x197)](_0xc75bc3,_0x4e532d);}finally{_0x1234db($['gridType']);}});});}async function getBeanRewards(){const _0x296594=_0x1030cb,_0x3287d8=getGetRequest(_0x296594(0xf2),_0x296594(0x1c1)+$[_0x296594(0xfb)]);return new Promise(async _0x5eb602=>{$['get'](_0x3287d8,(_0xf84eff,_0x33590e,_0x2b0fd9)=>{const _0x59406a=_0x4f9b;try{_0x2b0fd9&&(_0x2b0fd9=JSON[_0x59406a(0x189)](_0x2b0fd9),$['rewardList']=_0x2b0fd9[_0x59406a(0x101)]);}catch(_0x57c430){$['logErr'](_0x57c430,_0x33590e);}finally{_0x5eb602();}});});}async function doTask(){const _0x4c1591=_0x1030cb;let _0x236888=!![];for(let _0x597443=0x0;_0x597443<$['taskList'][_0x4c1591(0x126)];_0x597443++){let _0x16fdbd=$[_0x4c1591(0x149)][_0x597443];if(_0x16fdbd[_0x4c1591(0x167)]==='finished'){console[_0x4c1591(0x1a2)](_0x16fdbd[_0x4c1591(0x1a1)]+',已完成');continue;}if(_0x16fdbd[_0x4c1591(0x134)]===_0x4c1591(0x153)&&_0x16fdbd[_0x4c1591(0x167)]===_0x4c1591(0x1a9)&&_0x236888){if(_0x16fdbd[_0x4c1591(0x134)]==='add_cart'){console[_0x4c1591(0x1a2)](_0x4c1591(0x166)+_0x16fdbd['content']+_0x4c1591(0x13a));continue;}console[_0x4c1591(0x1a2)](_0x4c1591(0x1ac)+_0x16fdbd[_0x4c1591(0x1a1)]);let _0x4d19c8=[];for(let _0x425526=0x0;_0x425526<_0x16fdbd[_0x4c1591(0x1cb)]['length'];_0x425526++){_0x4d19c8[_0x4c1591(0x161)](_0x16fdbd[_0x4c1591(0x1cb)][_0x425526][_0x4c1591(0x11e)]);}_0x4d19c8['sort'](sortNumber),await addCart(_0x4d19c8),_0x236888=![];}}}async function addCart(_0x41395e){const _0x3080f2=_0x1030cb;let _0x3a049f=_0x3080f2(0x11f)+$[_0x3080f2(0xfb)]+_0x3080f2(0x1ba)+JSON[_0x3080f2(0x156)](_0x41395e)+'}';const _0x40b3fd=getPostRequest(_0x3080f2(0x12c),_0x3a049f);return new Promise(async _0x2210dc=>{$['post'](_0x40b3fd,(_0x13e48a,_0x5d290b,_0x45c418)=>{const _0x9e9102=_0x4f9b;try{_0x45c418&&(_0x45c418=JSON[_0x9e9102(0x189)](_0x45c418),_0x45c418['success']===!![]&&console['log'](_0x9e9102(0x148)));}catch(_0x5e3be0){$[_0x9e9102(0x197)](_0x5e3be0,_0x5d290b);}finally{_0x2210dc();}});});}async function getTaskList(){const _0x3dba1d=_0x1030cb,_0x432a03=getGetRequest(_0x3dba1d(0x123),'activityId='+$['jumpId']+_0x3dba1d(0x105));return new Promise(async _0x1f3f87=>{const _0x1026a3=_0x3dba1d;$[_0x1026a3(0x17b)](_0x432a03,(_0x441efc,_0x5838f8,_0x37be6b)=>{const _0x5a5ea9=_0x1026a3;try{_0x37be6b&&(_0x37be6b=JSON[_0x5a5ea9(0x189)](_0x37be6b),_0x37be6b['success']===!![]&&($[_0x5a5ea9(0x149)]=_0x37be6b['datas']));}catch(_0x592af3){$[_0x5a5ea9(0x197)](_0x592af3,_0x5838f8);}finally{_0x1f3f87();}});});}async function receive(){const _0x4cd88c=_0x1030cb,_0x4d94e3=getGetRequest('receive',_0x4cd88c(0x1c1)+$[_0x4cd88c(0xfb)]);return new Promise(async _0x25654a=>{$['get'](_0x4d94e3,(_0x337585,_0x460b1e,_0x57c275)=>{const _0x1d2000=_0x4f9b;try{_0x57c275&&(_0x57c275=JSON[_0x1d2000(0x189)](_0x57c275),_0x57c275['success']===!![]&&console[_0x1d2000(0x1a2)]('瓜分成功'));}catch(_0x3def34){$[_0x1d2000(0x197)](_0x3def34,_0x460b1e);}finally{_0x25654a();}});});}async function getOneJumpInfo(){const _0x2353be=_0x1030cb,_0x30b362=getGetRequest(_0x2353be(0x11d),'activityId='+$['jumpId']);return new Promise(async _0x2fbdf8=>{const _0x2913e1=_0x2353be;$[_0x2913e1(0x17b)](_0x30b362,(_0x16e540,_0x7052c7,_0x55141c)=>{const _0x336617=_0x2913e1;try{_0x55141c&&(_0x55141c=JSON[_0x336617(0x189)](_0x55141c),_0x55141c['success']===!![]&&($[_0x336617(0x1a3)]=_0x55141c[_0x336617(0x1d0)]));}catch(_0x5be1a7){$[_0x336617(0x197)](_0x5be1a7,_0x7052c7);}finally{_0x2fbdf8();}});});}async function getGameList(){const _0x153627=_0x1030cb,_0x937467=getGetRequest(_0x153627(0x103),_0x153627(0x13e));return new Promise(async _0x9e241f=>{const _0x291fe8=_0x153627;$[_0x291fe8(0x17b)](_0x937467,(_0x4060ee,_0x2c554e,_0x22c227)=>{const _0x4154bd=_0x291fe8;try{_0x22c227&&(_0x22c227=JSON[_0x4154bd(0x189)](_0x22c227),_0x22c227['success']===!![]&&($[_0x4154bd(0x186)]=_0x22c227[_0x4154bd(0x101)]));}catch(_0x11b87b){$[_0x4154bd(0x197)](_0x11b87b,_0x2c554e);}finally{_0x9e241f();}});});}function getGetRequest(_0x45fd38,_0x5e4576){const _0x1a46c2=_0x1030cb,_0x2040c1='https://jdjoy.jd.com/jump/'+_0x45fd38+'?'+_0x5e4576,_0x482dcb=_0x1a46c2(0x19a),_0x111725={'Cookie':cookie,'Accept':_0x1a46c2(0x132),'Connection':_0x1a46c2(0x12b),'Referer':'https://jdjoy.jd.com/dist/taro/index.html/','Accept-Encoding':_0x1a46c2(0x112),'Host':'jdjoy.jd.com','User-Agent':$[_0x1a46c2(0x1d1)]()?process['env'][_0x1a46c2(0x107)]?process['env'][_0x1a46c2(0x107)]:require(_0x1a46c2(0x106))[_0x1a46c2(0x10e)]:$[_0x1a46c2(0xec)](_0x1a46c2(0x1c5))?$[_0x1a46c2(0xec)](_0x1a46c2(0x1c5)):_0x1a46c2(0x198),'Accept-Language':_0x1a46c2(0x18d)};return{'url':_0x2040c1,'method':_0x482dcb,'headers':_0x111725};}function getPostRequest(_0x5524e6,_0x308a1e){const _0x42af9e=_0x1030cb,_0x225716=_0x42af9e(0x185)+_0x5524e6,_0xa57a0a=_0x42af9e(0x1cf),_0x167b37={'Accept':_0x42af9e(0x132),'Origin':_0x42af9e(0x121),'Accept-Encoding':_0x42af9e(0x112),'Cookie':cookie,'Content-Type':'application/json','Host':_0x42af9e(0x18c),'Connection':'keep-alive','User-Agent':$[_0x42af9e(0x1d1)]()?process[_0x42af9e(0xeb)][_0x42af9e(0x107)]?process[_0x42af9e(0xeb)][_0x42af9e(0x107)]:require('../USER_AGENTS')[_0x42af9e(0x10e)]:$[_0x42af9e(0xec)](_0x42af9e(0x1c5))?$[_0x42af9e(0xec)](_0x42af9e(0x1c5)):_0x42af9e(0x198),'Referer':_0x42af9e(0x11c),'Accept-Language':_0x42af9e(0x18d)};return myRequest={'url':_0x225716,'method':_0xa57a0a,'headers':_0x167b37,'body':_0x308a1e};}function sortNumber(_0x249105,_0x428343){return _0x249105-_0x428343;}function TotalBean(){return new Promise(async _0x520ca0=>{const _0xd87c54=_0x4f9b,_0x4727bc={'url':_0xd87c54(0xf0),'headers':{'Host':_0xd87c54(0x15f),'Accept':_0xd87c54(0x132),'Connection':_0xd87c54(0x12b),'Cookie':cookie,'User-Agent':$[_0xd87c54(0x1d1)]()?process[_0xd87c54(0xeb)][_0xd87c54(0x107)]?process[_0xd87c54(0xeb)][_0xd87c54(0x107)]:require(_0xd87c54(0x106))[_0xd87c54(0x10e)]:$[_0xd87c54(0xec)](_0xd87c54(0x1c5))?$[_0xd87c54(0xec)](_0xd87c54(0x1c5)):_0xd87c54(0x198),'Accept-Language':'zh-cn','Referer':_0xd87c54(0x13f),'Accept-Encoding':_0xd87c54(0x112)}};$[_0xd87c54(0x17b)](_0x4727bc,(_0x55020c,_0x2e5801,_0x1505ce)=>{const _0x5f0d58=_0xd87c54;try{if(_0x55020c)$[_0x5f0d58(0x197)](_0x55020c);else{if(_0x1505ce){_0x1505ce=JSON['parse'](_0x1505ce);if(_0x1505ce[_0x5f0d58(0x1ca)]===_0x5f0d58(0x1b4)){$[_0x5f0d58(0x184)]=![];return;}_0x1505ce[_0x5f0d58(0x1ca)]==='0'&&_0x1505ce[_0x5f0d58(0x1d0)]&&_0x1505ce['data'][_0x5f0d58(0x1cc)]('userInfo')&&($[_0x5f0d58(0x158)]=_0x1505ce[_0x5f0d58(0x1d0)][_0x5f0d58(0x13d)][_0x5f0d58(0x11b)][_0x5f0d58(0x17e)]);}else $[_0x5f0d58(0x1a2)]('京东服务器返回空数据');}}catch(_0x45564d){$[_0x5f0d58(0x197)](_0x45564d);}finally{_0x520ca0();}});});}function Env(_0x50c83f,_0x224ce9){const _0x55de8a=_0x1030cb;_0x55de8a(0x175)!=typeof process&&JSON[_0x55de8a(0x156)](process['env'])[_0x55de8a(0x10f)](_0x55de8a(0x10b))>-0x1&&process[_0x55de8a(0x162)](0x0);class _0x29c371{constructor(_0x774d9d){const _0x5bef3f=_0x55de8a;this[_0x5bef3f(0xeb)]=_0x774d9d;}['send'](_0x4ce42b,_0x26327a=_0x55de8a(0x19a)){const _0x46eceb=_0x55de8a;_0x4ce42b=_0x46eceb(0x1b8)==typeof _0x4ce42b?{'url':_0x4ce42b}:_0x4ce42b;let _0x586006=this['get'];return _0x46eceb(0x1cf)===_0x26327a&&(_0x586006=this[_0x46eceb(0x12e)]),new Promise((_0x18f85f,_0x44b8a7)=>{const _0x2eff10=_0x46eceb;_0x586006[_0x2eff10(0x114)](this,_0x4ce42b,(_0x41f772,_0x1604d6,_0x50f91b)=>{_0x41f772?_0x44b8a7(_0x41f772):_0x18f85f(_0x1604d6);});});}[_0x55de8a(0x17b)](_0x246c35){const _0x5c8388=_0x55de8a;return this[_0x5c8388(0x154)][_0x5c8388(0x114)](this['env'],_0x246c35);}[_0x55de8a(0x12e)](_0x271920){const _0x27b522=_0x55de8a;return this[_0x27b522(0x154)][_0x27b522(0x114)](this['env'],_0x271920,_0x27b522(0x1cf));}}return new class{constructor(_0x4e71a7,_0x2c39aa){const _0x45132d=_0x55de8a;this[_0x45132d(0x19d)]=_0x4e71a7,this['http']=new _0x29c371(this),this[_0x45132d(0x1d0)]=null,this[_0x45132d(0xe3)]='box.dat',this['logs']=[],this[_0x45132d(0x140)]=!0x1,this[_0x45132d(0x1ae)]=!0x1,this[_0x45132d(0x177)]='\x0a',this['startTime']=new Date()[_0x45132d(0x18e)](),Object[_0x45132d(0x137)](this,_0x2c39aa),this['log']('','🔔'+this['name']+_0x45132d(0x195));}[_0x55de8a(0x1d1)](){const _0x14150b=_0x55de8a;return _0x14150b(0x175)!=typeof module&&!!module[_0x14150b(0x15c)];}[_0x55de8a(0x138)](){const _0x5cf374=_0x55de8a;return _0x5cf374(0x175)!=typeof $task;}[_0x55de8a(0xff)](){const _0x39d520=_0x55de8a;return _0x39d520(0x175)!=typeof $httpClient&&'undefined'==typeof $loon;}['isLoon'](){const _0x402501=_0x55de8a;return _0x402501(0x175)!=typeof $loon;}['toObj'](_0x343edc,_0x31ef0a=null){try{return JSON['parse'](_0x343edc);}catch{return _0x31ef0a;}}['toStr'](_0x2aa649,_0x4173e1=null){const _0x333cc0=_0x55de8a;try{return JSON[_0x333cc0(0x156)](_0x2aa649);}catch{return _0x4173e1;}}[_0x55de8a(0x17c)](_0x3b3af6,_0x4d369c){const _0x4dccc7=_0x55de8a;let _0xf3af99=_0x4d369c;const _0x3316f1=this['getdata'](_0x3b3af6);if(_0x3316f1)try{_0xf3af99=JSON[_0x4dccc7(0x189)](this[_0x4dccc7(0xec)](_0x3b3af6));}catch{}return _0xf3af99;}[_0x55de8a(0x15d)](_0x3abf97,_0x51d07a){const _0x4d48d0=_0x55de8a;try{return this[_0x4d48d0(0x169)](JSON['stringify'](_0x3abf97),_0x51d07a);}catch{return!0x1;}}[_0x55de8a(0x18b)](_0x4e19a5){return new Promise(_0x1d1782=>{const _0x3abbd1=_0x4f9b;this[_0x3abbd1(0x17b)]({'url':_0x4e19a5},(_0x5529b1,_0x20e3f2,_0x1548d6)=>_0x1d1782(_0x1548d6));});}[_0x55de8a(0x111)](_0x4071eb,_0x15a80f){const _0x23a325=_0x55de8a;return new Promise(_0x5174f8=>{const _0x77950c=_0x4f9b;let _0x156886=this[_0x77950c(0xec)](_0x77950c(0xf4));_0x156886=_0x156886?_0x156886['replace'](/\n/g,'')[_0x77950c(0x117)]():_0x156886;let _0x3c9dee=this[_0x77950c(0xec)](_0x77950c(0x1d2));_0x3c9dee=_0x3c9dee?0x1*_0x3c9dee:0x14,_0x3c9dee=_0x15a80f&&_0x15a80f['timeout']?_0x15a80f[_0x77950c(0x135)]:_0x3c9dee;const [_0x583fae,_0x468c41]=_0x156886[_0x77950c(0x179)]('@'),_0x57b6ce={'url':_0x77950c(0x1b9)+_0x468c41+_0x77950c(0x145),'body':{'script_text':_0x4071eb,'mock_type':_0x77950c(0xea),'timeout':_0x3c9dee},'headers':{'X-Key':_0x583fae,'Accept':_0x77950c(0x132)}};this[_0x77950c(0x12e)](_0x57b6ce,(_0x2c2ae9,_0x46a3f6,_0x511fb1)=>_0x5174f8(_0x511fb1));})[_0x23a325(0xfd)](_0x2a4ba8=>this['logErr'](_0x2a4ba8));}['loaddata'](){const _0x5d97b0=_0x55de8a;if(!this[_0x5d97b0(0x1d1)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x5d97b0(0x102)]=this[_0x5d97b0(0x102)]?this[_0x5d97b0(0x102)]:require(_0x5d97b0(0x102));const _0x3d43fd=this[_0x5d97b0(0x102)][_0x5d97b0(0x113)](this[_0x5d97b0(0xe3)]),_0xbde90e=this['path'][_0x5d97b0(0x113)](process['cwd'](),this[_0x5d97b0(0xe3)]),_0xfd9760=this['fs'][_0x5d97b0(0x165)](_0x3d43fd),_0x5594c2=!_0xfd9760&&this['fs'][_0x5d97b0(0x165)](_0xbde90e);if(!_0xfd9760&&!_0x5594c2)return{};{const _0x550a8e=_0xfd9760?_0x3d43fd:_0xbde90e;try{return JSON[_0x5d97b0(0x189)](this['fs'][_0x5d97b0(0xee)](_0x550a8e));}catch(_0x589ff8){return{};}}}}[_0x55de8a(0x181)](){const _0x1bf613=_0x55de8a;if(this[_0x1bf613(0x1d1)]()){this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this[_0x1bf613(0x102)]?this[_0x1bf613(0x102)]:require('path');const _0xb76282=this[_0x1bf613(0x102)][_0x1bf613(0x113)](this[_0x1bf613(0xe3)]),_0x577e84=this[_0x1bf613(0x102)]['resolve'](process['cwd'](),this[_0x1bf613(0xe3)]),_0x2efef6=this['fs'][_0x1bf613(0x165)](_0xb76282),_0x57ef7b=!_0x2efef6&&this['fs']['existsSync'](_0x577e84),_0x3a4af0=JSON[_0x1bf613(0x156)](this['data']);_0x2efef6?this['fs'][_0x1bf613(0x1b0)](_0xb76282,_0x3a4af0):_0x57ef7b?this['fs'][_0x1bf613(0x1b0)](_0x577e84,_0x3a4af0):this['fs'][_0x1bf613(0x1b0)](_0xb76282,_0x3a4af0);}}[_0x55de8a(0x147)](_0x37ae81,_0x7cf6cd,_0x4a8d08){const _0x6b5e6=_0x55de8a,_0x3fd1d8=_0x7cf6cd['replace'](/\[(\d+)\]/g,_0x6b5e6(0x16a))[_0x6b5e6(0x179)]('.');let _0x23052e=_0x37ae81;for(const _0x50b3d7 of _0x3fd1d8)if(_0x23052e=Object(_0x23052e)[_0x50b3d7],void 0x0===_0x23052e)return _0x4a8d08;return _0x23052e;}[_0x55de8a(0xf5)](_0x32a83b,_0x438f71,_0x3b3cd3){const _0x5380de=_0x55de8a;return Object(_0x32a83b)!==_0x32a83b?_0x32a83b:(Array[_0x5380de(0x129)](_0x438f71)||(_0x438f71=_0x438f71[_0x5380de(0x14d)]()['match'](/[^.[\]]+/g)||[]),_0x438f71[_0x5380de(0x125)](0x0,-0x1)['reduce']((_0x2127a0,_0x510e8d,_0x24d89b)=>Object(_0x2127a0[_0x510e8d])===_0x2127a0[_0x510e8d]?_0x2127a0[_0x510e8d]:_0x2127a0[_0x510e8d]=Math[_0x5380de(0x1af)](_0x438f71[_0x24d89b+0x1])>>0x0==+_0x438f71[_0x24d89b+0x1]?[]:{},_0x32a83b)[_0x438f71[_0x438f71[_0x5380de(0x126)]-0x1]]=_0x3b3cd3,_0x32a83b);}[_0x55de8a(0xec)](_0x38581a){const _0x3e53a9=_0x55de8a;let _0x17f2c9=this[_0x3e53a9(0x188)](_0x38581a);if(/^@/[_0x3e53a9(0x1b7)](_0x38581a)){const [,_0x514ffb,_0x1e084c]=/^@(.*?)\.(.*?)$/['exec'](_0x38581a),_0x5999ee=_0x514ffb?this[_0x3e53a9(0x188)](_0x514ffb):'';if(_0x5999ee)try{const _0x189600=JSON['parse'](_0x5999ee);_0x17f2c9=_0x189600?this[_0x3e53a9(0x147)](_0x189600,_0x1e084c,''):_0x17f2c9;}catch(_0x523206){_0x17f2c9='';}}return _0x17f2c9;}[_0x55de8a(0x169)](_0x4d7844,_0x5586c0){const _0x3a0461=_0x55de8a;let _0x3ed623=!0x1;if(/^@/[_0x3a0461(0x1b7)](_0x5586c0)){const [,_0x5a657c,_0xde8515]=/^@(.*?)\.(.*?)$/[_0x3a0461(0x17a)](_0x5586c0),_0x42928b=this['getval'](_0x5a657c),_0x19c458=_0x5a657c?_0x3a0461(0x196)===_0x42928b?null:_0x42928b||'{}':'{}';try{const _0x37bdea=JSON['parse'](_0x19c458);this['lodash_set'](_0x37bdea,_0xde8515,_0x4d7844),_0x3ed623=this['setval'](JSON[_0x3a0461(0x156)](_0x37bdea),_0x5a657c);}catch(_0x448ae4){const _0x2a176c={};this[_0x3a0461(0xf5)](_0x2a176c,_0xde8515,_0x4d7844),_0x3ed623=this[_0x3a0461(0x180)](JSON[_0x3a0461(0x156)](_0x2a176c),_0x5a657c);}}else _0x3ed623=this[_0x3a0461(0x180)](_0x4d7844,_0x5586c0);return _0x3ed623;}['getval'](_0x5a4a26){const _0x4e4f2f=_0x55de8a;return this[_0x4e4f2f(0xff)]()||this[_0x4e4f2f(0x19e)]()?$persistentStore['read'](_0x5a4a26):this['isQuanX']()?$prefs[_0x4e4f2f(0xf1)](_0x5a4a26):this['isNode']()?(this[_0x4e4f2f(0x1d0)]=this['loaddata'](),this['data'][_0x5a4a26]):this[_0x4e4f2f(0x1d0)]&&this['data'][_0x5a4a26]||null;}['setval'](_0x1836f2,_0x5bb2a7){const _0x80cee9=_0x55de8a;return this['isSurge']()||this[_0x80cee9(0x19e)]()?$persistentStore[_0x80cee9(0x1a4)](_0x1836f2,_0x5bb2a7):this[_0x80cee9(0x138)]()?$prefs[_0x80cee9(0xf8)](_0x1836f2,_0x5bb2a7):this['isNode']()?(this[_0x80cee9(0x1d0)]=this[_0x80cee9(0x144)](),this[_0x80cee9(0x1d0)][_0x5bb2a7]=_0x1836f2,this[_0x80cee9(0x181)](),!0x0):this[_0x80cee9(0x1d0)]&&this['data'][_0x5bb2a7]||null;}[_0x55de8a(0x15e)](_0x31dc05){const _0x167ef3=_0x55de8a;this[_0x167ef3(0x182)]=this[_0x167ef3(0x182)]?this[_0x167ef3(0x182)]:require(_0x167ef3(0x182)),this[_0x167ef3(0x159)]=this[_0x167ef3(0x159)]?this[_0x167ef3(0x159)]:require(_0x167ef3(0x1ce)),this['ckjar']=this['ckjar']?this[_0x167ef3(0x13c)]:new this[(_0x167ef3(0x159))][(_0x167ef3(0x118))](),_0x31dc05&&(_0x31dc05[_0x167ef3(0x1d8)]=_0x31dc05['headers']?_0x31dc05[_0x167ef3(0x1d8)]:{},void 0x0===_0x31dc05[_0x167ef3(0x1d8)][_0x167ef3(0xef)]&&void 0x0===_0x31dc05[_0x167ef3(0x1c8)]&&(_0x31dc05[_0x167ef3(0x1c8)]=this[_0x167ef3(0x13c)]));}['get'](_0x42c40d,_0x3bbe4c=()=>{}){const _0x3c9ac4=_0x55de8a;_0x42c40d[_0x3c9ac4(0x1d8)]&&(delete _0x42c40d[_0x3c9ac4(0x1d8)][_0x3c9ac4(0x1aa)],delete _0x42c40d[_0x3c9ac4(0x1d8)][_0x3c9ac4(0x141)]),this['isSurge']()||this[_0x3c9ac4(0x19e)]()?(this['isSurge']()&&this[_0x3c9ac4(0x1ae)]&&(_0x42c40d[_0x3c9ac4(0x1d8)]=_0x42c40d[_0x3c9ac4(0x1d8)]||{},Object['assign'](_0x42c40d['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x3c9ac4(0x17b)](_0x42c40d,(_0x95ab05,_0x853155,_0x2cc71c)=>{const _0x57cfdd=_0x3c9ac4;!_0x95ab05&&_0x853155&&(_0x853155[_0x57cfdd(0x172)]=_0x2cc71c,_0x853155[_0x57cfdd(0x17d)]=_0x853155['status']),_0x3bbe4c(_0x95ab05,_0x853155,_0x2cc71c);})):this[_0x3c9ac4(0x138)]()?(this[_0x3c9ac4(0x1ae)]&&(_0x42c40d[_0x3c9ac4(0x19b)]=_0x42c40d[_0x3c9ac4(0x19b)]||{},Object[_0x3c9ac4(0x137)](_0x42c40d[_0x3c9ac4(0x19b)],{'hints':!0x1})),$task[_0x3c9ac4(0x157)](_0x42c40d)[_0x3c9ac4(0x124)](_0xd3e13a=>{const {statusCode:_0x1b64ea,statusCode:_0x1838bc,headers:_0x3c5723,body:_0x29bd67}=_0xd3e13a;_0x3bbe4c(null,{'status':_0x1b64ea,'statusCode':_0x1838bc,'headers':_0x3c5723,'body':_0x29bd67},_0x29bd67);},_0xca21e1=>_0x3bbe4c(_0xca21e1))):this[_0x3c9ac4(0x1d1)]()&&(this['initGotEnv'](_0x42c40d),this[_0x3c9ac4(0x182)](_0x42c40d)['on'](_0x3c9ac4(0x1bb),(_0x3b2f3d,_0xcd3281)=>{const _0x1bbbe5=_0x3c9ac4;try{if(_0x3b2f3d[_0x1bbbe5(0x1d8)][_0x1bbbe5(0x12a)]){const _0x96ac5a=_0x3b2f3d['headers']['set-cookie'][_0x1bbbe5(0x14e)](this['cktough'][_0x1bbbe5(0xef)][_0x1bbbe5(0x189)])['toString']();_0x96ac5a&&this[_0x1bbbe5(0x13c)]['setCookieSync'](_0x96ac5a,null),_0xcd3281[_0x1bbbe5(0x1c8)]=this[_0x1bbbe5(0x13c)];}}catch(_0x1ecc8c){this[_0x1bbbe5(0x197)](_0x1ecc8c);}})[_0x3c9ac4(0x124)](_0x26842f=>{const {statusCode:_0x14db15,statusCode:_0x3997f0,headers:_0x26f9ee,body:_0x4c47fc}=_0x26842f;_0x3bbe4c(null,{'status':_0x14db15,'statusCode':_0x3997f0,'headers':_0x26f9ee,'body':_0x4c47fc},_0x4c47fc);},_0x17585b=>{const _0x592cf8=_0x3c9ac4,{message:_0x572a0d,response:_0x1e7357}=_0x17585b;_0x3bbe4c(_0x572a0d,_0x1e7357,_0x1e7357&&_0x1e7357[_0x592cf8(0x172)]);}));}[_0x55de8a(0x12e)](_0x3d9b54,_0x575aaf=()=>{}){const _0x790216=_0x55de8a;if(_0x3d9b54['body']&&_0x3d9b54[_0x790216(0x1d8)]&&!_0x3d9b54['headers']['Content-Type']&&(_0x3d9b54[_0x790216(0x1d8)][_0x790216(0x1aa)]=_0x790216(0x1c0)),_0x3d9b54[_0x790216(0x1d8)]&&delete _0x3d9b54[_0x790216(0x1d8)]['Content-Length'],this['isSurge']()||this[_0x790216(0x19e)]())this[_0x790216(0xff)]()&&this['isNeedRewrite']&&(_0x3d9b54[_0x790216(0x1d8)]=_0x3d9b54['headers']||{},Object[_0x790216(0x137)](_0x3d9b54[_0x790216(0x1d8)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['post'](_0x3d9b54,(_0x1d337e,_0x1e571e,_0x3b2b3c)=>{const _0x28f81c=_0x790216;!_0x1d337e&&_0x1e571e&&(_0x1e571e['body']=_0x3b2b3c,_0x1e571e[_0x28f81c(0x17d)]=_0x1e571e['status']),_0x575aaf(_0x1d337e,_0x1e571e,_0x3b2b3c);});else{if(this[_0x790216(0x138)]())_0x3d9b54[_0x790216(0x1c7)]=_0x790216(0x1cf),this['isNeedRewrite']&&(_0x3d9b54[_0x790216(0x19b)]=_0x3d9b54[_0x790216(0x19b)]||{},Object['assign'](_0x3d9b54[_0x790216(0x19b)],{'hints':!0x1})),$task[_0x790216(0x157)](_0x3d9b54)['then'](_0x445c93=>{const {statusCode:_0x4b625a,statusCode:_0x3ded5a,headers:_0x4e21ec,body:_0x49ba9b}=_0x445c93;_0x575aaf(null,{'status':_0x4b625a,'statusCode':_0x3ded5a,'headers':_0x4e21ec,'body':_0x49ba9b},_0x49ba9b);},_0x3496e3=>_0x575aaf(_0x3496e3));else{if(this[_0x790216(0x1d1)]()){this[_0x790216(0x15e)](_0x3d9b54);const {url:_0xf102c8,..._0x293ce4}=_0x3d9b54;this[_0x790216(0x182)][_0x790216(0x12e)](_0xf102c8,_0x293ce4)[_0x790216(0x124)](_0x90fb8d=>{const {statusCode:_0x24878d,statusCode:_0x28e4f7,headers:_0x2dd038,body:_0x3aff7a}=_0x90fb8d;_0x575aaf(null,{'status':_0x24878d,'statusCode':_0x28e4f7,'headers':_0x2dd038,'body':_0x3aff7a},_0x3aff7a);},_0x2ae13c=>{const {message:_0x30296d,response:_0x9b800d}=_0x2ae13c;_0x575aaf(_0x30296d,_0x9b800d,_0x9b800d&&_0x9b800d['body']);});}}}}[_0x55de8a(0x16f)](_0xd92840,_0x266313=null){const _0x123712=_0x55de8a,_0x1be01e=_0x266313?new Date(_0x266313):new Date();let _0x41f968={'M+':_0x1be01e[_0x123712(0x13b)]()+0x1,'d+':_0x1be01e[_0x123712(0x18a)](),'H+':_0x1be01e[_0x123712(0x187)](),'m+':_0x1be01e[_0x123712(0x143)](),'s+':_0x1be01e[_0x123712(0xe8)](),'q+':Math[_0x123712(0x1bf)]((_0x1be01e[_0x123712(0x13b)]()+0x3)/0x3),'S':_0x1be01e[_0x123712(0x1ab)]()};/(y+)/[_0x123712(0x1b7)](_0xd92840)&&(_0xd92840=_0xd92840[_0x123712(0x17f)](RegExp['$1'],(_0x1be01e[_0x123712(0x1be)]()+'')['substr'](0x4-RegExp['$1'][_0x123712(0x126)])));for(let _0x2c7126 in _0x41f968)new RegExp('('+_0x2c7126+')')['test'](_0xd92840)&&(_0xd92840=_0xd92840[_0x123712(0x17f)](RegExp['$1'],0x1==RegExp['$1']['length']?_0x41f968[_0x2c7126]:('00'+_0x41f968[_0x2c7126])[_0x123712(0x131)]((''+_0x41f968[_0x2c7126])[_0x123712(0x126)])));return _0xd92840;}[_0x55de8a(0x115)](_0x3310e8=_0x50c83f,_0x5b9f34='',_0x30dfa4='',_0x2dc906){const _0x45fb84=_0x55de8a,_0x5f4a18=_0x609fa6=>{const _0x48177c=_0x4f9b;if(!_0x609fa6)return _0x609fa6;if(_0x48177c(0x1b8)==typeof _0x609fa6)return this[_0x48177c(0x19e)]()?_0x609fa6:this[_0x48177c(0x138)]()?{'open-url':_0x609fa6}:this[_0x48177c(0xff)]()?{'url':_0x609fa6}:void 0x0;if(_0x48177c(0x116)==typeof _0x609fa6){if(this[_0x48177c(0x19e)]()){let _0x5e55bd=_0x609fa6[_0x48177c(0xed)]||_0x609fa6[_0x48177c(0x1d6)]||_0x609fa6[_0x48177c(0x146)],_0x2a8e50=_0x609fa6[_0x48177c(0x15b)]||_0x609fa6[_0x48177c(0x199)];return{'openUrl':_0x5e55bd,'mediaUrl':_0x2a8e50};}if(this[_0x48177c(0x138)]()){let _0x32ff1e=_0x609fa6[_0x48177c(0x146)]||_0x609fa6['url']||_0x609fa6[_0x48177c(0xed)],_0x12160e=_0x609fa6[_0x48177c(0x199)]||_0x609fa6['mediaUrl'];return{'open-url':_0x32ff1e,'media-url':_0x12160e};}if(this[_0x48177c(0xff)]()){let _0x543661=_0x609fa6[_0x48177c(0x1d6)]||_0x609fa6[_0x48177c(0xed)]||_0x609fa6['open-url'];return{'url':_0x543661};}}};if(this[_0x45fb84(0x140)]||(this[_0x45fb84(0xff)]()||this[_0x45fb84(0x19e)]()?$notification[_0x45fb84(0x12e)](_0x3310e8,_0x5b9f34,_0x30dfa4,_0x5f4a18(_0x2dc906)):this['isQuanX']()&&$notify(_0x3310e8,_0x5b9f34,_0x30dfa4,_0x5f4a18(_0x2dc906))),!this[_0x45fb84(0x104)]){let _0x51ac3c=['',_0x45fb84(0x18f)];_0x51ac3c[_0x45fb84(0x161)](_0x3310e8),_0x5b9f34&&_0x51ac3c[_0x45fb84(0x161)](_0x5b9f34),_0x30dfa4&&_0x51ac3c[_0x45fb84(0x161)](_0x30dfa4),console[_0x45fb84(0x1a2)](_0x51ac3c[_0x45fb84(0x128)]('\x0a')),this['logs']=this['logs'][_0x45fb84(0x178)](_0x51ac3c);}}['log'](..._0x36e440){const _0x5e1586=_0x55de8a;_0x36e440[_0x5e1586(0x126)]>0x0&&(this[_0x5e1586(0x10c)]=[...this[_0x5e1586(0x10c)],..._0x36e440]),console[_0x5e1586(0x1a2)](_0x36e440[_0x5e1586(0x128)](this[_0x5e1586(0x177)]));}[_0x55de8a(0x197)](_0x22e3a1,_0x4468a1){const _0x4b8666=_0x55de8a,_0x53a8eb=!this['isSurge']()&&!this[_0x4b8666(0x138)]()&&!this[_0x4b8666(0x19e)]();_0x53a8eb?this['log']('','❗️'+this[_0x4b8666(0x19d)]+_0x4b8666(0x1d7),_0x22e3a1[_0x4b8666(0x1a8)]):this[_0x4b8666(0x1a2)]('','❗️'+this[_0x4b8666(0x19d)]+',\x20错误!',_0x22e3a1);}[_0x55de8a(0x176)](_0x288944){return new Promise(_0x57eecf=>setTimeout(_0x57eecf,_0x288944));}[_0x55de8a(0x152)](_0x26422c={}){const _0xd615d2=_0x55de8a,_0x1c26d0=new Date()[_0xd615d2(0x18e)](),_0x436bcb=(_0x1c26d0-this[_0xd615d2(0x108)])/0x3e8;this['log']('','🔔'+this['name']+_0xd615d2(0xe9)+_0x436bcb+'\x20秒'),this[_0xd615d2(0x1a2)](),(this[_0xd615d2(0xff)]()||this[_0xd615d2(0x138)]()||this[_0xd615d2(0x19e)]())&&$done(_0x26422c);}}(_0x50c83f,_0x224ce9);}
