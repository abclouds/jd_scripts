/*

东东健康社区
更新时间：2021-4-22
活动入口：京东APP首页搜索 "玩一玩"即可

脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
===================quantumultx================
[task_local]
#东东健康社区
13 1,6,22 * * * https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_health.js, tag=东东健康社区, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

=====================Loon================
[Script]
cron "13 1,6,22 * * *" script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_health.js, tag=东东健康社区

====================Surge================
东东健康社区 = type=cron,cronexp="13 1,6,22 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_health.js

============小火箭=========
东东健康社区 = type=cron,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_health.js, cronexpr="13 1,6,22 * * *", timeout=3600, enable=true
 */
const _0x27df=['reduce','开始获取','setCookieSync','@chavy_boxjs_userCfgs.httpapi','getjson','==============📣系统通知📣==============','https://api.m.jd.com/client.action','taskId','&body=','false','cktough','finally','37529wluNUw','set-cookie','indexOf','个京东账号将要助力的好友','string','ckjar','taskToken','logErr','getMinutes','log','length','840535wBltli','cwd','任务领取结果：','open-url','split','CookieJD','opts','earn','object',',\x20错误!','exit','7769Hiubtr','bizCode','call','setval','url','cron','path','助力码\x0a','existsSync','statusCode','userScore','bizMsg','post','maxTimes','getMonth','Content-Type','任务完成成功，获得：','abs','wait','getHours','CookiesJD','name','keys','writedata','JD_DEBUG','done','isArray','exec','concat','exports','390311AeKshH','dataFile','Cookie','includes','POST','resolve','mediaUrl','个京东账号\x0a','msg','catch','headers','如果出现提示\x20?.data.\x20错误，请升级nodejs版本(进入容器后，apk\x20add\x20nodejs-current)','http','produceScore','T0225KkcRkwZ_FDScRv8lPYJfACjVfnoaW5kRrbA@T0225KkcRBce813VIh-mlPZfIACjVfnoaW5kRrbA@T0157awtFFdKqQuSdFkCjVfnoaW5kRrbA@','index','../USER_AGENTS','undefined','data','map','个账号的','../jdCookie.js','push','score','logs','USER_AGENT','startTime','getTime','京东服务器访问数据为空，请检查自身设备网络情况','replace','forEach','好友互助码】','stringify','lodash_set','toObj','productInfoVos','tough-cookie','/v1/scripting/evaluate','797429CyOoCe','getval','getdata','readFileSync','then','assign','floor','loaddata','1cxkJwc','taskType','assistTaskDetailVo','jdhealth_getTaskDetail','env','writeFileSync','match','send','shareCodesArr','times','get','method','toString','filter','Content-Length','https://bean.m.jd.com/','lodash_get','body','JDUA','null','getMilliseconds','read','setjson','isMuteLog','京东账号',',\x20开始!','4119347VdytBl','去助力好友','jdhealth_collectProduceScore','shoppingActivityVos','isNeedRewrite','stack','trim','isLoon','substr','toStr','健康值\x0a','.$1','534387wdEkJW','initGotEnv','/client.action?functionId=','application/x-www-form-urlencoded','join','任务，完成次数：','任务完成失败：','isQuanX','taskVos','openUrl','canDo','http://','getSeconds','isSurge','simpleRecordInfoVo',',\x20结束!\x20🕛\x20','cookieJar','isMute','\x20health/read\x20API请求失败，请检查网路重试','UserName','61IiShax','newShareCodes','runScript','redirect','status','JD_USER_AGENT','健康值，累计','\x0a【京东账号','getFullYear','got','setdata','result','*********\x0a','valueForKey','parse','taskName','media-url','【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取','@chavy_boxjs_userCfgs.httpapi_timeout','getScript','test','4MCoOSP','JDHEALTH_SHARECODES','cookie','isNode','setValueForKey','fetch'];const _0x442e9d=_0x46e7;(function(_0x553ba8,_0x56ae4c){const _0x347da4=_0x46e7;while(!![]){try{const _0x4ab66a=parseInt(_0x347da4(0x1ee))*parseInt(_0x347da4(0x274))+-parseInt(_0x347da4(0x29b))+-parseInt(_0x347da4(0x260))+-parseInt(_0x347da4(0x20c))*parseInt(_0x347da4(0x289))+-parseInt(_0x347da4(0x232))+parseInt(_0x347da4(0x23a))*-parseInt(_0x347da4(0x2a6))+parseInt(_0x347da4(0x254));if(_0x4ab66a===_0x56ae4c)break;else _0x553ba8['push'](_0x553ba8['shift']());}catch(_0x23d3c6){_0x553ba8['push'](_0x553ba8['shift']());}}}(_0x27df,0xc8b74));const $=new Env('东东健康社区'),jdCookieNode=$[_0x442e9d(0x28c)]()?require(_0x442e9d(0x221)):'';let cookiesArr=[],cookie='',message;function _0x46e7(_0x4b1c2b,_0x258303){_0x4b1c2b=_0x4b1c2b-0x1ec;let _0x27df76=_0x27df[_0x4b1c2b];return _0x27df76;}const inviteCodes=[_0x442e9d(0x21a)],randomCount=$['isNode']()?0x14:0x5;if($[_0x442e9d(0x28c)]()){Object[_0x442e9d(0x204)](jdCookieNode)[_0x442e9d(0x22a)](_0x421ba5=>{const _0x5602a8=_0x442e9d;cookiesArr[_0x5602a8(0x222)](jdCookieNode[_0x421ba5]);}),console['log'](_0x442e9d(0x217));if(process['env'][_0x442e9d(0x206)]&&process[_0x442e9d(0x23e)][_0x442e9d(0x206)]===_0x442e9d(0x298))console[_0x442e9d(0x2a4)]=()=>{};}else cookiesArr=[$[_0x442e9d(0x234)](_0x442e9d(0x2ab)),$['getdata']('CookieJD2'),...$[_0x442e9d(0x22e)]($[_0x442e9d(0x234)](_0x442e9d(0x202))||'[]')[_0x442e9d(0x21f)](_0x34e84e=>_0x34e84e[_0x442e9d(0x28b)])][_0x442e9d(0x247)](_0x30fca7=>!!_0x30fca7);const JD_API_HOST=_0x442e9d(0x295);!(async()=>{const _0x1fe7d8=_0x442e9d;if(!cookiesArr[0x0]){$[_0x1fe7d8(0x214)]($['name'],_0x1fe7d8(0x285),_0x1fe7d8(0x249),{'open-url':_0x1fe7d8(0x249)});return;}await requireConfig();for(let _0x57abd2=0x0;_0x57abd2<cookiesArr['length'];_0x57abd2++){cookiesArr[_0x57abd2]&&(cookie=cookiesArr[_0x57abd2],$[_0x1fe7d8(0x273)]=decodeURIComponent(cookie[_0x1fe7d8(0x240)](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x1fe7d8(0x240)](/pt_pin=([^; ]+)(?=;?)/)[0x1]),$[_0x1fe7d8(0x21b)]=_0x57abd2+0x1,message='',console[_0x1fe7d8(0x2a4)]('\x0a******开始【京东账号'+$[_0x1fe7d8(0x21b)]+'】'+$[_0x1fe7d8(0x273)]+_0x1fe7d8(0x280)),await shareCodesFormat(),await main(),await showMsg());}})()[_0x442e9d(0x215)](_0x27e342=>{const _0x202c5d=_0x442e9d;$[_0x202c5d(0x2a4)]('','❌\x20'+$[_0x202c5d(0x203)]+',\x20失败!\x20原因:\x20'+_0x27e342+'!','');})[_0x442e9d(0x29a)](()=>{const _0xa8f8f8=_0x442e9d;$[_0xa8f8f8(0x207)]();});async function main(){const _0x4ced25=_0x442e9d;try{$[_0x4ced25(0x223)]=0x0,$[_0x4ced25(0x2ad)]=![],await getTaskDetail(-0x1),await getTaskDetail(0x10),await getTaskDetail(0x6);for(let _0x244c3=0x0;_0x244c3<0x5;++_0x244c3){$[_0x4ced25(0x26a)]=![],await getTaskDetail();if(!$[_0x4ced25(0x26a)])break;await $[_0x4ced25(0x200)](0x3e8);}await collectScore(),await helpFriends(),await getTaskDetail(0x16),await getTaskDetail(-0x1);}catch(_0x45854e){$[_0x4ced25(0x2a2)](_0x45854e);}}async function helpFriends(){const _0x300815=_0x442e9d;for(let _0x58ec9c of $['newShareCodes']){if(!_0x58ec9c)continue;console[_0x300815(0x2a4)](_0x300815(0x255)+_0x58ec9c);let _0x25bff5=await doTask(_0x58ec9c,0x6);if([0x6c,-0x3e9][_0x300815(0x20f)](_0x25bff5?.[_0x300815(0x21e)]?.['bizCode'])){console[_0x300815(0x2a4)]('助力次数已满，跳出');break;}await $['wait'](0x3e8);}}function showMsg(){return new Promise(async _0x3937a9=>{const _0x36a740=_0x46e7;message+='本次获得'+$['earn']+_0x36a740(0x27a)+$[_0x36a740(0x223)]+_0x36a740(0x25e),$[_0x36a740(0x214)]($[_0x36a740(0x203)],'',_0x36a740(0x252)+$[_0x36a740(0x21b)]+'\x20'+$[_0x36a740(0x273)]+'\x0a'+message),_0x3937a9();});}function getTaskDetail(_0x498b36=''){return new Promise(_0x5c21ab=>{const _0x2a865c=_0x46e7;$[_0x2a865c(0x244)](taskUrl(_0x2a865c(0x23d),{'buildingId':'','taskId':_0x498b36===-0x1?'':_0x498b36,'channelId':0x1}),async(_0x3c8e85,_0x4b0441,_0x2fba74)=>{const _0x2b2878=_0x2a865c;try{if(safeGet(_0x2fba74)){_0x2fba74=$[_0x2b2878(0x22e)](_0x2fba74);if(_0x498b36===-0x1){let _0x48b702=parseInt(parseFloat(_0x2fba74?.[_0x2b2878(0x21e)]?.['result']?.[_0x2b2878(0x1f8)]??'0'));!$['earn']?($['score']=_0x48b702,$['earn']=0x1):($[_0x2b2878(0x2ad)]=_0x48b702-$[_0x2b2878(0x223)],$['score']=_0x48b702);}else{if(_0x498b36===0x6)_0x2fba74?.[_0x2b2878(0x21e)]?.[_0x2b2878(0x27f)]?.['taskVos']&&console[_0x2b2878(0x2a4)](_0x2b2878(0x27b)+$[_0x2b2878(0x21b)]+'（'+$[_0x2b2878(0x273)]+'）的'+$[_0x2b2878(0x203)]+_0x2b2878(0x22b)+_0x2fba74?.['data']?.[_0x2b2878(0x27f)]?.[_0x2b2878(0x268)][0x0][_0x2b2878(0x23c)][_0x2b2878(0x2a1)]+'\x0a');else{if(_0x498b36===0x16){console[_0x2b2878(0x2a4)](_0x2fba74?.[_0x2b2878(0x21e)]?.[_0x2b2878(0x27f)]?.[_0x2b2878(0x268)][0x0]?.[_0x2b2878(0x283)]+_0x2b2878(0x265)+_0x2fba74?.[_0x2b2878(0x21e)]?.[_0x2b2878(0x27f)]?.[_0x2b2878(0x268)][0x0]?.[_0x2b2878(0x243)]+'/'+_0x2fba74?.[_0x2b2878(0x21e)]?.[_0x2b2878(0x27f)]?.[_0x2b2878(0x268)][0x0]?.[_0x2b2878(0x1fb)]);if(_0x2fba74?.[_0x2b2878(0x21e)]?.['result']?.[_0x2b2878(0x268)][0x0]?.[_0x2b2878(0x243)]===_0x2fba74?.[_0x2b2878(0x21e)]?.[_0x2b2878(0x27f)]?.['taskVos'][0x0]?.[_0x2b2878(0x1fb)])return;await doTask(_0x2fba74?.['data']?.[_0x2b2878(0x27f)]?.[_0x2b2878(0x268)][0x0]['shoppingActivityVos'][0x0]?.[_0x2b2878(0x2a1)],0x16,0x1),await $[_0x2b2878(0x200)](0x3e8*(_0x2fba74?.[_0x2b2878(0x21e)]?.[_0x2b2878(0x27f)]?.[_0x2b2878(0x268)][0x0]?.['waitDuration']||0x3)),await doTask(_0x2fba74?.[_0x2b2878(0x21e)]?.[_0x2b2878(0x27f)]?.[_0x2b2878(0x268)][0x0][_0x2b2878(0x257)][0x0]?.[_0x2b2878(0x2a1)],0x16,0x0);}else for(let _0x34b3b8 of _0x2fba74?.[_0x2b2878(0x21e)]?.[_0x2b2878(0x27f)]?.[_0x2b2878(0x268)]['filter'](_0x35cb0f=>_0x35cb0f[_0x2b2878(0x23b)]!==0x13)??[]){console[_0x2b2878(0x2a4)](_0x34b3b8['taskName']+_0x2b2878(0x265)+_0x34b3b8[_0x2b2878(0x243)]+'/'+_0x34b3b8[_0x2b2878(0x1fb)]);for(let _0x31825c=_0x34b3b8[_0x2b2878(0x243)];_0x31825c<_0x34b3b8[_0x2b2878(0x1fb)];++_0x31825c){console[_0x2b2878(0x2a4)]('去完成'+_0x34b3b8[_0x2b2878(0x283)]+'任务');if(_0x34b3b8[_0x2b2878(0x23b)]===0xd)await doTask(_0x34b3b8[_0x2b2878(0x26e)]?.[_0x2b2878(0x2a1)],_0x34b3b8?.[_0x2b2878(0x296)]);else{if(_0x34b3b8[_0x2b2878(0x23b)]===0x8)await doTask(_0x34b3b8['productInfoVos'][_0x31825c]?.['taskToken'],_0x34b3b8?.[_0x2b2878(0x296)],0x1),await $['wait'](0x3e8*0xa),await doTask(_0x34b3b8[_0x2b2878(0x22f)][_0x31825c]?.['taskToken'],_0x34b3b8?.[_0x2b2878(0x296)],0x0);else{if(_0x34b3b8[_0x2b2878(0x23b)]===0x9)await doTask(_0x34b3b8['shoppingActivityVos'][0x0]?.[_0x2b2878(0x2a1)],_0x34b3b8?.[_0x2b2878(0x296)],0x1),await $[_0x2b2878(0x200)](0x3e8*0xa),await doTask(_0x34b3b8[_0x2b2878(0x257)][0x0]?.[_0x2b2878(0x2a1)],_0x34b3b8?.['taskId'],0x0);else{if(_0x34b3b8['taskType']===0xa)await doTask(_0x34b3b8['threeMealInfoVos'][0x0]?.[_0x2b2878(0x2a1)],_0x34b3b8?.[_0x2b2878(0x296)]);else(_0x34b3b8[_0x2b2878(0x23b)]===0x1a||_0x34b3b8['taskType']===0x3)&&await doTask(_0x34b3b8['shoppingActivityVos'][0x0]?.[_0x2b2878(0x2a1)],_0x34b3b8?.[_0x2b2878(0x296)]);}}}}}}}}}catch(_0x2f2d05){console[_0x2b2878(0x2a4)](_0x2f2d05);}finally{_0x5c21ab();}});});}function doTask(_0x52b98d,_0x1256d2,_0x272ce9=0x0){return new Promise(_0x1127ab=>{const _0x1d2481=taskUrl('jdhealth_collectScore',{'taskToken':_0x52b98d,'taskId':_0x1256d2,'actionType':_0x272ce9});$['get'](_0x1d2481,(_0x3ed664,_0x53edde,_0x2cddfa)=>{const _0x1f353a=_0x46e7;try{if(safeGet(_0x2cddfa)){_0x2cddfa=$[_0x1f353a(0x22e)](_0x2cddfa);if([0x0,0x1][_0x1f353a(0x20f)](_0x2cddfa?.[_0x1f353a(0x21e)]?.['bizCode']??-0x1)){$[_0x1f353a(0x26a)]=!![];if(_0x2cddfa?.[_0x1f353a(0x21e)]?.[_0x1f353a(0x27f)]?.[_0x1f353a(0x223)])console['log'](_0x1f353a(0x1fe)+(_0x2cddfa?.[_0x1f353a(0x21e)]?.[_0x1f353a(0x27f)]?.['score']??'未知')+'能量');else console['log'](_0x1f353a(0x2a8)+(_0x2cddfa?.[_0x1f353a(0x21e)]?.[_0x1f353a(0x1f9)]??JSON[_0x1f353a(0x22c)](_0x2cddfa)));}else console[_0x1f353a(0x2a4)]('任务完成失败：'+(_0x2cddfa?.[_0x1f353a(0x21e)]?.[_0x1f353a(0x1f9)]??JSON[_0x1f353a(0x22c)](_0x2cddfa)));}}catch(_0x288f65){console[_0x1f353a(0x2a4)](_0x288f65);}finally{_0x1127ab(_0x2cddfa);}});});}function collectScore(){return new Promise(_0x13f626=>{const _0xc78b9f=_0x46e7;$[_0xc78b9f(0x244)](taskUrl(_0xc78b9f(0x256),{}),(_0x45a7b2,_0x337a39,_0x32b7c7)=>{const _0x2490db=_0xc78b9f;try{if(safeGet(_0x32b7c7)){_0x32b7c7=$[_0x2490db(0x22e)](_0x32b7c7);if(_0x32b7c7?.[_0x2490db(0x21e)]?.[_0x2490db(0x1ef)]===0x0){if(_0x32b7c7?.[_0x2490db(0x21e)]?.['result']?.[_0x2490db(0x219)])console[_0x2490db(0x2a4)]('任务完成成功，获得：'+(_0x32b7c7?.[_0x2490db(0x21e)]?.[_0x2490db(0x27f)]?.['produceScore']??'未知')+'能量');else console[_0x2490db(0x2a4)](_0x2490db(0x2a8)+(_0x32b7c7?.['data']?.['bizMsg']??JSON[_0x2490db(0x22c)](_0x32b7c7)));}else console[_0x2490db(0x2a4)](_0x2490db(0x266)+(_0x32b7c7?.[_0x2490db(0x21e)]?.[_0x2490db(0x1f9)]??JSON['stringify'](_0x32b7c7)));}}catch(_0x1c93e4){console[_0x2490db(0x2a4)](_0x1c93e4);}finally{_0x13f626();}});});}function taskUrl(_0x2de6df,_0xa00492={}){const _0x5c9228=_0x442e9d;return{'url':JD_API_HOST+_0x5c9228(0x262)+_0x2de6df+_0x5c9228(0x297)+escape(JSON[_0x5c9228(0x22c)](_0xa00492))+'&client=wh5&clientVersion=1.0.0','headers':{'Cookie':cookie,'origin':'https://h5.m.jd.com','referer':'https://h5.m.jd.com/','Content-Type':_0x5c9228(0x263),'User-Agent':$['isNode']()?process[_0x5c9228(0x23e)][_0x5c9228(0x279)]?process[_0x5c9228(0x23e)][_0x5c9228(0x279)]:require(_0x5c9228(0x21c))[_0x5c9228(0x225)]:$[_0x5c9228(0x234)](_0x5c9228(0x24c))?$['getdata'](_0x5c9228(0x24c)):'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1'}};}function safeGet(_0x91100a){const _0x10dade=_0x442e9d;try{if(typeof JSON[_0x10dade(0x282)](_0x91100a)==_0x10dade(0x2ae))return!![];}catch(_0x141a59){return console[_0x10dade(0x2a4)](_0x141a59),console[_0x10dade(0x2a4)](_0x10dade(0x228)),![];}}function readShareCode(){const _0x3193b5=_0x442e9d;return console[_0x3193b5(0x2a4)]('开始'),new Promise(async _0x1cfe4a=>{const _0x3f6ebb=_0x3193b5;$[_0x3f6ebb(0x244)]({'url':'http://share.turinglabs.net/api/v3/health/query/'+randomCount+'/','timeout':0x2710},(_0x2c2b34,_0x15230a,_0x4d9698)=>{const _0x1ba9a8=_0x3f6ebb;try{_0x2c2b34?(console[_0x1ba9a8(0x2a4)](''+JSON[_0x1ba9a8(0x22c)](_0x2c2b34)),console[_0x1ba9a8(0x2a4)]($[_0x1ba9a8(0x203)]+_0x1ba9a8(0x272))):_0x4d9698&&(console[_0x1ba9a8(0x2a4)]('随机取'+randomCount+'个码放到您固定的互助码后面(不影响已有固定互助)'),_0x4d9698=JSON[_0x1ba9a8(0x282)](_0x4d9698));}catch(_0x5fb164){$[_0x1ba9a8(0x2a2)](_0x5fb164,_0x15230a);}finally{_0x1cfe4a(_0x4d9698);}}),await $[_0x3f6ebb(0x200)](0x2710),_0x1cfe4a();});}function shareCodesFormat(){return new Promise(async _0x4628dd=>{const _0x5c8150=_0x46e7;$[_0x5c8150(0x275)]=[];if($[_0x5c8150(0x242)][$['index']-0x1])$[_0x5c8150(0x275)]=$[_0x5c8150(0x242)][$[_0x5c8150(0x21b)]-0x1]['split']('@');else{console[_0x5c8150(0x2a4)]('由于您第'+$[_0x5c8150(0x21b)]+'个京东账号未提供shareCode,将采纳本脚本自带的助力码\x0a');const _0x57a160=$[_0x5c8150(0x21b)]>inviteCodes[_0x5c8150(0x2a5)]?inviteCodes[_0x5c8150(0x2a5)]-0x1:$[_0x5c8150(0x21b)]-0x1;}console[_0x5c8150(0x2a4)]('第'+$['index']+_0x5c8150(0x29e)+JSON[_0x5c8150(0x22c)]($[_0x5c8150(0x275)])),_0x4628dd();});}function requireConfig(){return new Promise(_0x5b12b2=>{const _0x43a387=_0x46e7;console['log'](_0x43a387(0x290)+$['name']+'配置文件\x0a');let _0x50a244=[];$['isNode']()&&(process['env'][_0x43a387(0x28a)]&&(process[_0x43a387(0x23e)][_0x43a387(0x28a)]['indexOf']('\x0a')>-0x1?_0x50a244=process['env'][_0x43a387(0x28a)]['split']('\x0a'):_0x50a244=process['env'][_0x43a387(0x28a)]['split']('&'))),console[_0x43a387(0x2a4)]('共'+cookiesArr[_0x43a387(0x2a5)]+_0x43a387(0x213)),$['shareCodesArr']=[],$['isNode']()&&Object['keys'](_0x50a244)['forEach'](_0xceb729=>{const _0x22176c=_0x43a387;_0x50a244[_0xceb729]&&$[_0x22176c(0x242)]['push'](_0x50a244[_0xceb729]);}),console['log']('您提供了'+$[_0x43a387(0x242)][_0x43a387(0x2a5)]+_0x43a387(0x220)+$['name']+_0x43a387(0x1f5)),_0x5b12b2();});}function Env(_0x177309,_0x1c65f8){const _0x3a62bd=_0x442e9d;_0x3a62bd(0x21d)!=typeof process&&JSON[_0x3a62bd(0x22c)](process[_0x3a62bd(0x23e)])[_0x3a62bd(0x29d)]('GITHUB')>-0x1&&process[_0x3a62bd(0x1ed)](0x0);class _0xfc250c{constructor(_0x253d3e){const _0x76411e=_0x3a62bd;this[_0x76411e(0x23e)]=_0x253d3e;}[_0x3a62bd(0x241)](_0x436065,_0x5047a1='GET'){const _0x3753e9=_0x3a62bd;_0x436065=_0x3753e9(0x29f)==typeof _0x436065?{'url':_0x436065}:_0x436065;let _0x3dcd74=this[_0x3753e9(0x244)];return _0x3753e9(0x210)===_0x5047a1&&(_0x3dcd74=this[_0x3753e9(0x1fa)]),new Promise((_0x5112de,_0x5d11f0)=>{_0x3dcd74['call'](this,_0x436065,(_0x4227f9,_0x442d2a,_0x557b81)=>{_0x4227f9?_0x5d11f0(_0x4227f9):_0x5112de(_0x442d2a);});});}['get'](_0xb0c309){const _0x41884f=_0x3a62bd;return this['send'][_0x41884f(0x1f0)](this[_0x41884f(0x23e)],_0xb0c309);}['post'](_0xb10174){const _0x35014b=_0x3a62bd;return this['send'][_0x35014b(0x1f0)](this[_0x35014b(0x23e)],_0xb10174,_0x35014b(0x210));}}return new class{constructor(_0x59c121,_0x2564ac){const _0x5ce89f=_0x3a62bd;this[_0x5ce89f(0x203)]=_0x59c121,this[_0x5ce89f(0x218)]=new _0xfc250c(this),this[_0x5ce89f(0x21e)]=null,this[_0x5ce89f(0x20d)]='box.dat',this[_0x5ce89f(0x224)]=[],this[_0x5ce89f(0x271)]=!0x1,this['isNeedRewrite']=!0x1,this['logSeparator']='\x0a',this['startTime']=new Date()[_0x5ce89f(0x227)](),Object[_0x5ce89f(0x237)](this,_0x2564ac),this['log']('','🔔'+this[_0x5ce89f(0x203)]+_0x5ce89f(0x253));}[_0x3a62bd(0x28c)](){const _0x5a6094=_0x3a62bd;return _0x5a6094(0x21d)!=typeof module&&!!module[_0x5a6094(0x20b)];}[_0x3a62bd(0x267)](){const _0x44b23b=_0x3a62bd;return _0x44b23b(0x21d)!=typeof $task;}['isSurge'](){const _0x1aee50=_0x3a62bd;return'undefined'!=typeof $httpClient&&_0x1aee50(0x21d)==typeof $loon;}[_0x3a62bd(0x25b)](){const _0x2c2ef1=_0x3a62bd;return _0x2c2ef1(0x21d)!=typeof $loon;}[_0x3a62bd(0x22e)](_0x5b561b,_0x153b84=null){const _0x53780c=_0x3a62bd;try{return JSON[_0x53780c(0x282)](_0x5b561b);}catch{return _0x153b84;}}[_0x3a62bd(0x25d)](_0x52d73c,_0x2a60f9=null){const _0x545413=_0x3a62bd;try{return JSON[_0x545413(0x22c)](_0x52d73c);}catch{return _0x2a60f9;}}[_0x3a62bd(0x293)](_0x1db84d,_0x1a4483){const _0x37b384=_0x3a62bd;let _0x5373ac=_0x1a4483;const _0x82ed2b=this[_0x37b384(0x234)](_0x1db84d);if(_0x82ed2b)try{_0x5373ac=JSON[_0x37b384(0x282)](this[_0x37b384(0x234)](_0x1db84d));}catch{}return _0x5373ac;}[_0x3a62bd(0x250)](_0x4dc098,_0x6893fe){const _0x483ab5=_0x3a62bd;try{return this[_0x483ab5(0x27e)](JSON[_0x483ab5(0x22c)](_0x4dc098),_0x6893fe);}catch{return!0x1;}}[_0x3a62bd(0x287)](_0x3bdcb9){return new Promise(_0x4de75c=>{const _0x29a6c3=_0x46e7;this[_0x29a6c3(0x244)]({'url':_0x3bdcb9},(_0x39f291,_0x41e336,_0x44de0c)=>_0x4de75c(_0x44de0c));});}[_0x3a62bd(0x276)](_0x4ead32,_0x25c82e){const _0x4f2cec=_0x3a62bd;return new Promise(_0x59d3c5=>{const _0x20c5e6=_0x46e7;let _0x4821dc=this[_0x20c5e6(0x234)](_0x20c5e6(0x292));_0x4821dc=_0x4821dc?_0x4821dc[_0x20c5e6(0x229)](/\n/g,'')[_0x20c5e6(0x25a)]():_0x4821dc;let _0x58d468=this[_0x20c5e6(0x234)](_0x20c5e6(0x286));_0x58d468=_0x58d468?0x1*_0x58d468:0x14,_0x58d468=_0x25c82e&&_0x25c82e['timeout']?_0x25c82e['timeout']:_0x58d468;const [_0x1cd279,_0x9d3ef3]=_0x4821dc['split']('@'),_0x1ae151={'url':_0x20c5e6(0x26b)+_0x9d3ef3+_0x20c5e6(0x231),'body':{'script_text':_0x4ead32,'mock_type':_0x20c5e6(0x1f3),'timeout':_0x58d468},'headers':{'X-Key':_0x1cd279,'Accept':'*/*'}};this[_0x20c5e6(0x1fa)](_0x1ae151,(_0x51835b,_0x551385,_0x895aab)=>_0x59d3c5(_0x895aab));})[_0x4f2cec(0x215)](_0x24d3de=>this['logErr'](_0x24d3de));}[_0x3a62bd(0x239)](){const _0x5548fa=_0x3a62bd;if(!this[_0x5548fa(0x28c)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x5548fa(0x1f4)]=this[_0x5548fa(0x1f4)]?this[_0x5548fa(0x1f4)]:require(_0x5548fa(0x1f4));const _0x410711=this[_0x5548fa(0x1f4)][_0x5548fa(0x211)](this[_0x5548fa(0x20d)]),_0x2b0443=this['path']['resolve'](process[_0x5548fa(0x2a7)](),this['dataFile']),_0x554983=this['fs'][_0x5548fa(0x1f6)](_0x410711),_0x240a1c=!_0x554983&&this['fs'][_0x5548fa(0x1f6)](_0x2b0443);if(!_0x554983&&!_0x240a1c)return{};{const _0x288818=_0x554983?_0x410711:_0x2b0443;try{return JSON['parse'](this['fs'][_0x5548fa(0x235)](_0x288818));}catch(_0x147e6c){return{};}}}}[_0x3a62bd(0x205)](){const _0x30f1e4=_0x3a62bd;if(this[_0x30f1e4(0x28c)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x30f1e4(0x1f4)]=this[_0x30f1e4(0x1f4)]?this[_0x30f1e4(0x1f4)]:require('path');const _0x483efa=this[_0x30f1e4(0x1f4)]['resolve'](this[_0x30f1e4(0x20d)]),_0x1bf121=this[_0x30f1e4(0x1f4)][_0x30f1e4(0x211)](process['cwd'](),this[_0x30f1e4(0x20d)]),_0x591256=this['fs']['existsSync'](_0x483efa),_0x51ffa3=!_0x591256&&this['fs'][_0x30f1e4(0x1f6)](_0x1bf121),_0x2d8634=JSON[_0x30f1e4(0x22c)](this[_0x30f1e4(0x21e)]);_0x591256?this['fs'][_0x30f1e4(0x23f)](_0x483efa,_0x2d8634):_0x51ffa3?this['fs']['writeFileSync'](_0x1bf121,_0x2d8634):this['fs'][_0x30f1e4(0x23f)](_0x483efa,_0x2d8634);}}['lodash_get'](_0xbf25f8,_0x193e8b,_0x135bc2){const _0x254377=_0x3a62bd,_0x343c45=_0x193e8b[_0x254377(0x229)](/\[(\d+)\]/g,_0x254377(0x25f))[_0x254377(0x2aa)]('.');let _0x270b04=_0xbf25f8;for(const _0x4b13bb of _0x343c45)if(_0x270b04=Object(_0x270b04)[_0x4b13bb],void 0x0===_0x270b04)return _0x135bc2;return _0x270b04;}['lodash_set'](_0xe160c7,_0x6f57f9,_0x3c1e39){const _0x5d3bd2=_0x3a62bd;return Object(_0xe160c7)!==_0xe160c7?_0xe160c7:(Array[_0x5d3bd2(0x208)](_0x6f57f9)||(_0x6f57f9=_0x6f57f9[_0x5d3bd2(0x246)]()[_0x5d3bd2(0x240)](/[^.[\]]+/g)||[]),_0x6f57f9['slice'](0x0,-0x1)[_0x5d3bd2(0x28f)]((_0x240c9e,_0x417742,_0x53525b)=>Object(_0x240c9e[_0x417742])===_0x240c9e[_0x417742]?_0x240c9e[_0x417742]:_0x240c9e[_0x417742]=Math[_0x5d3bd2(0x1ff)](_0x6f57f9[_0x53525b+0x1])>>0x0==+_0x6f57f9[_0x53525b+0x1]?[]:{},_0xe160c7)[_0x6f57f9[_0x6f57f9['length']-0x1]]=_0x3c1e39,_0xe160c7);}['getdata'](_0x4938ad){const _0xf09d8d=_0x3a62bd;let _0x1bd77a=this['getval'](_0x4938ad);if(/^@/[_0xf09d8d(0x288)](_0x4938ad)){const [,_0x2c8b4d,_0x5b361a]=/^@(.*?)\.(.*?)$/[_0xf09d8d(0x209)](_0x4938ad),_0x10829a=_0x2c8b4d?this[_0xf09d8d(0x233)](_0x2c8b4d):'';if(_0x10829a)try{const _0x7dabac=JSON[_0xf09d8d(0x282)](_0x10829a);_0x1bd77a=_0x7dabac?this[_0xf09d8d(0x24a)](_0x7dabac,_0x5b361a,''):_0x1bd77a;}catch(_0xadf1b){_0x1bd77a='';}}return _0x1bd77a;}[_0x3a62bd(0x27e)](_0x238eeb,_0x3bf2c9){const _0x1eb506=_0x3a62bd;let _0x36b266=!0x1;if(/^@/[_0x1eb506(0x288)](_0x3bf2c9)){const [,_0x14b869,_0x1e169a]=/^@(.*?)\.(.*?)$/['exec'](_0x3bf2c9),_0x426af9=this[_0x1eb506(0x233)](_0x14b869),_0xeb7611=_0x14b869?_0x1eb506(0x24d)===_0x426af9?null:_0x426af9||'{}':'{}';try{const _0x38ea3a=JSON['parse'](_0xeb7611);this['lodash_set'](_0x38ea3a,_0x1e169a,_0x238eeb),_0x36b266=this['setval'](JSON[_0x1eb506(0x22c)](_0x38ea3a),_0x14b869);}catch(_0x3cccd0){const _0x176d45={};this[_0x1eb506(0x22d)](_0x176d45,_0x1e169a,_0x238eeb),_0x36b266=this[_0x1eb506(0x1f1)](JSON[_0x1eb506(0x22c)](_0x176d45),_0x14b869);}}else _0x36b266=this[_0x1eb506(0x1f1)](_0x238eeb,_0x3bf2c9);return _0x36b266;}[_0x3a62bd(0x233)](_0x36ec6b){const _0x102533=_0x3a62bd;return this[_0x102533(0x26d)]()||this[_0x102533(0x25b)]()?$persistentStore[_0x102533(0x24f)](_0x36ec6b):this[_0x102533(0x267)]()?$prefs[_0x102533(0x281)](_0x36ec6b):this[_0x102533(0x28c)]()?(this[_0x102533(0x21e)]=this[_0x102533(0x239)](),this[_0x102533(0x21e)][_0x36ec6b]):this['data']&&this[_0x102533(0x21e)][_0x36ec6b]||null;}[_0x3a62bd(0x1f1)](_0x369179,_0x3a773f){const _0x6bf7d0=_0x3a62bd;return this[_0x6bf7d0(0x26d)]()||this[_0x6bf7d0(0x25b)]()?$persistentStore['write'](_0x369179,_0x3a773f):this[_0x6bf7d0(0x267)]()?$prefs[_0x6bf7d0(0x28d)](_0x369179,_0x3a773f):this[_0x6bf7d0(0x28c)]()?(this['data']=this['loaddata'](),this[_0x6bf7d0(0x21e)][_0x3a773f]=_0x369179,this[_0x6bf7d0(0x205)](),!0x0):this[_0x6bf7d0(0x21e)]&&this[_0x6bf7d0(0x21e)][_0x3a773f]||null;}['initGotEnv'](_0x13f3b1){const _0x362cb2=_0x3a62bd;this['got']=this['got']?this[_0x362cb2(0x27d)]:require('got'),this[_0x362cb2(0x299)]=this[_0x362cb2(0x299)]?this[_0x362cb2(0x299)]:require(_0x362cb2(0x230)),this[_0x362cb2(0x2a0)]=this['ckjar']?this['ckjar']:new this['cktough']['CookieJar'](),_0x13f3b1&&(_0x13f3b1[_0x362cb2(0x216)]=_0x13f3b1[_0x362cb2(0x216)]?_0x13f3b1['headers']:{},void 0x0===_0x13f3b1[_0x362cb2(0x216)][_0x362cb2(0x20e)]&&void 0x0===_0x13f3b1[_0x362cb2(0x270)]&&(_0x13f3b1[_0x362cb2(0x270)]=this[_0x362cb2(0x2a0)]));}[_0x3a62bd(0x244)](_0x559d6f,_0x142206=()=>{}){const _0x7de459=_0x3a62bd;_0x559d6f[_0x7de459(0x216)]&&(delete _0x559d6f[_0x7de459(0x216)][_0x7de459(0x1fd)],delete _0x559d6f['headers'][_0x7de459(0x248)]),this[_0x7de459(0x26d)]()||this[_0x7de459(0x25b)]()?(this['isSurge']()&&this[_0x7de459(0x258)]&&(_0x559d6f[_0x7de459(0x216)]=_0x559d6f[_0x7de459(0x216)]||{},Object[_0x7de459(0x237)](_0x559d6f[_0x7de459(0x216)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x7de459(0x244)](_0x559d6f,(_0x15a23d,_0x2ae878,_0x529acc)=>{const _0x4189f4=_0x7de459;!_0x15a23d&&_0x2ae878&&(_0x2ae878[_0x4189f4(0x24b)]=_0x529acc,_0x2ae878[_0x4189f4(0x1f7)]=_0x2ae878[_0x4189f4(0x278)]),_0x142206(_0x15a23d,_0x2ae878,_0x529acc);})):this[_0x7de459(0x267)]()?(this[_0x7de459(0x258)]&&(_0x559d6f['opts']=_0x559d6f[_0x7de459(0x2ac)]||{},Object[_0x7de459(0x237)](_0x559d6f[_0x7de459(0x2ac)],{'hints':!0x1})),$task[_0x7de459(0x28e)](_0x559d6f)[_0x7de459(0x236)](_0x507851=>{const {statusCode:_0x438a53,statusCode:_0x126a0e,headers:_0x4b20bf,body:_0x462d6b}=_0x507851;_0x142206(null,{'status':_0x438a53,'statusCode':_0x126a0e,'headers':_0x4b20bf,'body':_0x462d6b},_0x462d6b);},_0x1c1a97=>_0x142206(_0x1c1a97))):this['isNode']()&&(this['initGotEnv'](_0x559d6f),this['got'](_0x559d6f)['on'](_0x7de459(0x277),(_0x44cba3,_0x52e6e3)=>{const _0x6bb65a=_0x7de459;try{if(_0x44cba3[_0x6bb65a(0x216)][_0x6bb65a(0x29c)]){const _0x1b5595=_0x44cba3['headers'][_0x6bb65a(0x29c)]['map'](this[_0x6bb65a(0x299)][_0x6bb65a(0x20e)][_0x6bb65a(0x282)])[_0x6bb65a(0x246)]();_0x1b5595&&this[_0x6bb65a(0x2a0)][_0x6bb65a(0x291)](_0x1b5595,null),_0x52e6e3[_0x6bb65a(0x270)]=this[_0x6bb65a(0x2a0)];}}catch(_0x7c1e9){this[_0x6bb65a(0x2a2)](_0x7c1e9);}})[_0x7de459(0x236)](_0x3f4d27=>{const {statusCode:_0x3422b5,statusCode:_0x3fa841,headers:_0x111477,body:_0x99e811}=_0x3f4d27;_0x142206(null,{'status':_0x3422b5,'statusCode':_0x3fa841,'headers':_0x111477,'body':_0x99e811},_0x99e811);},_0x45f5fa=>{const _0x2bed5d=_0x7de459,{message:_0x44a8b9,response:_0x20062f}=_0x45f5fa;_0x142206(_0x44a8b9,_0x20062f,_0x20062f&&_0x20062f[_0x2bed5d(0x24b)]);}));}[_0x3a62bd(0x1fa)](_0x288ce9,_0x3f47da=()=>{}){const _0x59751c=_0x3a62bd;if(_0x288ce9[_0x59751c(0x24b)]&&_0x288ce9[_0x59751c(0x216)]&&!_0x288ce9[_0x59751c(0x216)]['Content-Type']&&(_0x288ce9[_0x59751c(0x216)][_0x59751c(0x1fd)]=_0x59751c(0x263)),_0x288ce9[_0x59751c(0x216)]&&delete _0x288ce9[_0x59751c(0x216)]['Content-Length'],this['isSurge']()||this['isLoon']())this['isSurge']()&&this[_0x59751c(0x258)]&&(_0x288ce9['headers']=_0x288ce9[_0x59751c(0x216)]||{},Object[_0x59751c(0x237)](_0x288ce9[_0x59751c(0x216)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x59751c(0x1fa)](_0x288ce9,(_0x5cc9c5,_0x4efde7,_0x20d131)=>{const _0x46c5d5=_0x59751c;!_0x5cc9c5&&_0x4efde7&&(_0x4efde7[_0x46c5d5(0x24b)]=_0x20d131,_0x4efde7['statusCode']=_0x4efde7[_0x46c5d5(0x278)]),_0x3f47da(_0x5cc9c5,_0x4efde7,_0x20d131);});else{if(this[_0x59751c(0x267)]())_0x288ce9[_0x59751c(0x245)]=_0x59751c(0x210),this['isNeedRewrite']&&(_0x288ce9[_0x59751c(0x2ac)]=_0x288ce9[_0x59751c(0x2ac)]||{},Object[_0x59751c(0x237)](_0x288ce9[_0x59751c(0x2ac)],{'hints':!0x1})),$task[_0x59751c(0x28e)](_0x288ce9)['then'](_0x415470=>{const {statusCode:_0x24490d,statusCode:_0x4db2a9,headers:_0x14dbe1,body:_0x24a39d}=_0x415470;_0x3f47da(null,{'status':_0x24490d,'statusCode':_0x4db2a9,'headers':_0x14dbe1,'body':_0x24a39d},_0x24a39d);},_0x387cf5=>_0x3f47da(_0x387cf5));else{if(this['isNode']()){this[_0x59751c(0x261)](_0x288ce9);const {url:_0x45965b,..._0x10cf59}=_0x288ce9;this[_0x59751c(0x27d)][_0x59751c(0x1fa)](_0x45965b,_0x10cf59)[_0x59751c(0x236)](_0x4553ed=>{const {statusCode:_0x26925b,statusCode:_0x215a9c,headers:_0x237ef0,body:_0x5cdaf4}=_0x4553ed;_0x3f47da(null,{'status':_0x26925b,'statusCode':_0x215a9c,'headers':_0x237ef0,'body':_0x5cdaf4},_0x5cdaf4);},_0x4841f7=>{const _0x3b7235=_0x59751c,{message:_0x42b2ca,response:_0x255e88}=_0x4841f7;_0x3f47da(_0x42b2ca,_0x255e88,_0x255e88&&_0x255e88[_0x3b7235(0x24b)]);});}}}}['time'](_0x1b31cb,_0x1fa582=null){const _0x2f17c9=_0x3a62bd,_0x8476bf=_0x1fa582?new Date(_0x1fa582):new Date();let _0x4e941f={'M+':_0x8476bf['getMonth']()+0x1,'d+':_0x8476bf['getDate'](),'H+':_0x8476bf[_0x2f17c9(0x201)](),'m+':_0x8476bf[_0x2f17c9(0x2a3)](),'s+':_0x8476bf[_0x2f17c9(0x26c)](),'q+':Math[_0x2f17c9(0x238)]((_0x8476bf[_0x2f17c9(0x1fc)]()+0x3)/0x3),'S':_0x8476bf[_0x2f17c9(0x24e)]()};/(y+)/[_0x2f17c9(0x288)](_0x1b31cb)&&(_0x1b31cb=_0x1b31cb['replace'](RegExp['$1'],(_0x8476bf[_0x2f17c9(0x27c)]()+'')[_0x2f17c9(0x25c)](0x4-RegExp['$1'][_0x2f17c9(0x2a5)])));for(let _0x208b17 in _0x4e941f)new RegExp('('+_0x208b17+')')[_0x2f17c9(0x288)](_0x1b31cb)&&(_0x1b31cb=_0x1b31cb[_0x2f17c9(0x229)](RegExp['$1'],0x1==RegExp['$1'][_0x2f17c9(0x2a5)]?_0x4e941f[_0x208b17]:('00'+_0x4e941f[_0x208b17])[_0x2f17c9(0x25c)]((''+_0x4e941f[_0x208b17])[_0x2f17c9(0x2a5)])));return _0x1b31cb;}[_0x3a62bd(0x214)](_0x20f717=_0x177309,_0xd178dc='',_0x577d1b='',_0x388e29){const _0x560dd4=_0x3a62bd,_0x2b6fd9=_0x5d8288=>{const _0x169481=_0x46e7;if(!_0x5d8288)return _0x5d8288;if(_0x169481(0x29f)==typeof _0x5d8288)return this['isLoon']()?_0x5d8288:this[_0x169481(0x267)]()?{'open-url':_0x5d8288}:this[_0x169481(0x26d)]()?{'url':_0x5d8288}:void 0x0;if('object'==typeof _0x5d8288){if(this[_0x169481(0x25b)]()){let _0x27bcc2=_0x5d8288[_0x169481(0x269)]||_0x5d8288[_0x169481(0x1f2)]||_0x5d8288['open-url'],_0x4817e7=_0x5d8288['mediaUrl']||_0x5d8288[_0x169481(0x284)];return{'openUrl':_0x27bcc2,'mediaUrl':_0x4817e7};}if(this['isQuanX']()){let _0x1de594=_0x5d8288[_0x169481(0x2a9)]||_0x5d8288[_0x169481(0x1f2)]||_0x5d8288[_0x169481(0x269)],_0x2befef=_0x5d8288[_0x169481(0x284)]||_0x5d8288[_0x169481(0x212)];return{'open-url':_0x1de594,'media-url':_0x2befef};}if(this[_0x169481(0x26d)]()){let _0x185529=_0x5d8288[_0x169481(0x1f2)]||_0x5d8288[_0x169481(0x269)]||_0x5d8288[_0x169481(0x2a9)];return{'url':_0x185529};}}};if(this['isMute']||(this[_0x560dd4(0x26d)]()||this[_0x560dd4(0x25b)]()?$notification[_0x560dd4(0x1fa)](_0x20f717,_0xd178dc,_0x577d1b,_0x2b6fd9(_0x388e29)):this[_0x560dd4(0x267)]()&&$notify(_0x20f717,_0xd178dc,_0x577d1b,_0x2b6fd9(_0x388e29))),!this[_0x560dd4(0x251)]){let _0x170907=['',_0x560dd4(0x294)];_0x170907[_0x560dd4(0x222)](_0x20f717),_0xd178dc&&_0x170907[_0x560dd4(0x222)](_0xd178dc),_0x577d1b&&_0x170907[_0x560dd4(0x222)](_0x577d1b),console[_0x560dd4(0x2a4)](_0x170907[_0x560dd4(0x264)]('\x0a')),this[_0x560dd4(0x224)]=this['logs'][_0x560dd4(0x20a)](_0x170907);}}[_0x3a62bd(0x2a4)](..._0x3dca9b){const _0x32718c=_0x3a62bd;_0x3dca9b[_0x32718c(0x2a5)]>0x0&&(this[_0x32718c(0x224)]=[...this['logs'],..._0x3dca9b]),console[_0x32718c(0x2a4)](_0x3dca9b[_0x32718c(0x264)](this['logSeparator']));}[_0x3a62bd(0x2a2)](_0x57dc3f,_0x50c669){const _0x362f5a=_0x3a62bd,_0x24bd7a=!this[_0x362f5a(0x26d)]()&&!this[_0x362f5a(0x267)]()&&!this[_0x362f5a(0x25b)]();_0x24bd7a?this[_0x362f5a(0x2a4)]('','❗️'+this[_0x362f5a(0x203)]+_0x362f5a(0x1ec),_0x57dc3f[_0x362f5a(0x259)]):this['log']('','❗️'+this[_0x362f5a(0x203)]+_0x362f5a(0x1ec),_0x57dc3f);}[_0x3a62bd(0x200)](_0x594d53){return new Promise(_0x1edd55=>setTimeout(_0x1edd55,_0x594d53));}['done'](_0x56cf74={}){const _0x44deeb=_0x3a62bd,_0x53bb31=new Date()[_0x44deeb(0x227)](),_0x270dc5=(_0x53bb31-this[_0x44deeb(0x226)])/0x3e8;this[_0x44deeb(0x2a4)]('','🔔'+this[_0x44deeb(0x203)]+_0x44deeb(0x26f)+_0x270dc5+'\x20秒'),this[_0x44deeb(0x2a4)](),(this[_0x44deeb(0x26d)]()||this[_0x44deeb(0x267)]()||this[_0x44deeb(0x25b)]())&&$done(_0x56cf74);}}(_0x177309,_0x1c65f8);}
