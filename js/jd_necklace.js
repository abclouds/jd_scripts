/*
 * @Author: abclouds https://github.com/abclouds
 * @Date: 2021-05-28 11:42:03
 * @Last Modified by: abclouds
 * @Last Modified time: 2021-4-25 12:27:14
 */
/*
点点券，可以兑换无门槛红包（1元，5元，10元，100元，部分红包需抢购）
活动入口：京东APP-领券中心/券后9.9-领点点券 [活动地址](https://h5.m.jd.com/babelDiy/Zeus/41Lkp7DumXYCFmPYtU3LTcnTTXTX/index.html)
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
===============Quantumultx===============
[task_local]
#点点券
10 0,20 * * * https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_necklace.js, tag=点点券, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

================Loon==============
[Script]
cron "10 0,20 * * *" script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_necklace.js,tag=点点券

===============Surge=================
点点券 = type=cron,cronexp="10 0,20 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_necklace.js

============小火箭=========
点点券 = type=cron,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_necklace.js, cronexpr="10 0,20 * * *", timeout=3600, enable=true
 */
const _0x2ce9=['getMinutes','valueForKey','result','https://h5.m.jd.com/','cookie已失效\x20-\x20','getTime','length','isQuanX','openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d','nickname','toStr','getDate','call','string','existsSync','https://h5.m.jd.com','cktough','19916VOGBqn','元\x0a(京东APP->领券->左上角点点券.注：此红包具有时效性)','&appid=coupon-necklace&loginType=2&client=coupon-necklace&t=','openUrl','application/json,text/plain,\x20*/*','getScript','getFullYear','【提示】请先获取京东账号一cookie\x0a直接使用NobyDa的京东签到获取','点点券','sendNotify','base','Content-Type','initGotEnv','got','status','\x20API请求失败，请检查网路重试','JD_DEBUG','env','wait','totalScore','bubbles','POST','个\x0a可兑换无门槛红包：','assign','需等待15秒','../USER_AGENTS','time','nickName','write','==============📣系统通知📣==============','元兑换成功\x0a','undefined','&body=','setjson','reduce','https://api.m.jd.com/api','36179UztHJa','lodash_get','需等待30秒','exchangeGiftConfigs','concat','isNode','box.dat','点击首页领券图标(进入领券中心浏览15s)任务:','necklace_reportTask','open-url','JDUA','】\x20任务已领取但未完成,开始完成此任务','redpacketTitle','exports','application/x-www-form-urlencoded','slice','isLogin','false','match','ckjar','substr','stringify','cookie','headers','http','object','test','京东服务器访问数据为空，请检查自身设备网络情况','\x0a开始【京东账号','get','isMute','trim','reportCcTask','openjd://virtual?params=%7B%20%22category%22:%20%22jump%22,%20%22des%22:%20%22m%22,%20%22url%22:%20%22https://h5.m.jd.com/babelDiy/Zeus/41Lkp7DumXYCFmPYtU3LTcnTTXTX/index.html%22%20%7D','media-url','\x0a当前','toObj','../jdCookie.js','https://api.m.jd.com/client.action?functionId=','taskConfigVos','opts','*/*','getval','京东账号','redirect','necklace_homePage','签到成功，时间：','cwd','method','JD_USER_AGENT','https://bean.m.jd.com/bean/signIndex.action','api.m.jd.com','京东服务器返回空数据','lodash_set','?functionId=','CookieJar','msg','readFileSync','】\x20任务领取成功,开始完成此任务','tough-cookie','empty','replace','getdata','runScript','929151tBcHqK','biz_code','奖励已领取','】\x20任务已做完,奖励未领取','浏览精选活动\x20【','Content-Length','todayCurrentSceneSignStatus','cors','\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action','/v1/scripting/evaluate','jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1','filter','then','stack','statusCode','retcode','taskName','join','read','GITHUB','370515LHoFbM','setval','catch','759662HtBHAr','done','setdata','exit','mediaUrl','%3A','setValueForKey','http://','getSeconds','exec','log','1989079pwKNqS','same-site','\x0a通知：京东已在领取任务、签到、领取点点券三个添加了log做了校验，暂时无可解决\x0a','keep-alive','getHours','necklace_exchangeGift','logs','signInfo','send','endTime','getMilliseconds','setCookieSync','isArray','taskStage','点击“券后9.9”任务:','getMonth','请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie','&uuid=88732f840b77821b345bf07fd71f609e6ff12f43','name','CouponCenter','taskItems','necklace_','zh-cn','url','split','set-cookie','writeFileSync','做任务结果','path','zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6','13wQhVKW','@chavy_boxjs_userCfgs.httpapi','taskType','isMuteLog','getTimezoneOffset','loaddata','dataFile','timeout','isLoon','data','CookieJD2','necklace_chargeScores','gzip,\x20deflate,\x20br','\x0a请重新登录获取cookie','logSeparator','push','body','https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2','necklace_getTask','lastRequestTime','\x0a↓↓↓\x20\x0a\x0a\x20\x22https://h5.m.jd.com/babelDiy/Zeus/41Lkp7DumXYCFmPYtU3LTcnTTXTX/index.html\x22\x20\x0a\x0a\x20↑↑↑',',\x20错误!','cookieJar','map','toLocaleString','.$1','itemId','https://h5.m.jd.com/babelDiy/Zeus/4ZK4ZpvoSreRB92RRo8bpJAQNoTq/index.html','getCcTaskList','toString','isSurge','startTime','Cookie','parse','necklace_sign','necklace_startTask','post','rtn_code','UserName','1LobqJd','floor','logErr','resolve','isNeedRewrite','DDQ_NOTIFY_CONTROL','index','writedata','CookiesJD','&uuid=8888888&client=apple&clientVersion=9.4.1&st=1622193986049&sign=f5abd9fd7b9b8abaa25b34088f9e8a54&sv=102','领取任务结果','695033nmLOuT'];const _0x59b17e=_0x5233;(function(_0x1efb09,_0x2b2edc){const _0x2310fd=_0x5233;while(!![]){try{const _0x3695e1=parseInt(_0x2310fd(0x1dd))*parseInt(_0x2310fd(0x18d))+-parseInt(_0x2310fd(0x21e))+parseInt(_0x2310fd(0x1e8))+parseInt(_0x2310fd(0x18a))+-parseInt(_0x2310fd(0x1b6))*parseInt(_0x2310fd(0x1fa))+parseInt(_0x2310fd(0x176))+-parseInt(_0x2310fd(0x198));if(_0x3695e1===_0x2b2edc)break;else _0x1efb09['push'](_0x1efb09['shift']());}catch(_0x57a135){_0x1efb09['push'](_0x1efb09['shift']());}}}(_0x2ce9,0x72cb3));const $=new Env(_0x59b17e(0x202));let allMessage='';const notify=$['isNode']()?require('../sendNotify'):'',jdCookieNode=$[_0x59b17e(0x223)]()?require(_0x59b17e(0x15b)):'',openUrl=_0x59b17e(0x157);let message='',nowTimes=new Date(new Date()[_0x59b17e(0x1ee)]()+new Date()[_0x59b17e(0x1ba)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8),cookiesArr=[],cookie='';if($[_0x59b17e(0x223)]()){Object['keys'](jdCookieNode)['forEach'](_0x17ed06=>{cookiesArr['push'](jdCookieNode[_0x17ed06]);});if(process[_0x59b17e(0x20b)][_0x59b17e(0x20a)]&&process[_0x59b17e(0x20b)][_0x59b17e(0x20a)]===_0x59b17e(0x147))console[_0x59b17e(0x197)]=()=>{};}else cookiesArr=[$[_0x59b17e(0x174)]('CookieJD'),$[_0x59b17e(0x174)](_0x59b17e(0x1c0)),...jsonParse($[_0x59b17e(0x174)](_0x59b17e(0x1e5))||'[]')['map'](_0x4adbf4=>_0x4adbf4[_0x59b17e(0x14c)])][_0x59b17e(0x181)](_0xd1babb=>!!_0xd1babb);const JD_API_HOST=_0x59b17e(0x21d);!(async()=>{const _0x4759e5=_0x59b17e;if(!cookiesArr[0x0]){$['msg']($[_0x4759e5(0x1aa)],_0x4759e5(0x201),_0x4759e5(0x168),{'open-url':_0x4759e5(0x168)});return;}console['log'](_0x4759e5(0x19a));for(let _0x2a1f38=0x0;_0x2a1f38<cookiesArr[_0x4759e5(0x1ef)];_0x2a1f38++){if(cookiesArr[_0x2a1f38]){cookie=cookiesArr[_0x2a1f38],$['UserName']=decodeURIComponent(cookie['match'](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x4759e5(0x148)](/pt_pin=([^; ]+)(?=;?)/)[0x1]),$[_0x4759e5(0x1e3)]=_0x2a1f38+0x1,$['isLogin']=!![],$['nickName']='',message='',await TotalBean(),console[_0x4759e5(0x197)](_0x4759e5(0x152)+$[_0x4759e5(0x1e3)]+'】'+($['nickName']||$['UserName'])+'\x0a');if(!$['isLogin']){$[_0x4759e5(0x16e)]($[_0x4759e5(0x1aa)],'【提示】cookie已失效','京东账号'+$['index']+'\x20'+($['nickName']||$[_0x4759e5(0x1dc)])+_0x4759e5(0x17e),{'open-url':'https://bean.m.jd.com/bean/signIndex.action'});$[_0x4759e5(0x223)]()&&await notify[_0x4759e5(0x203)]($[_0x4759e5(0x1aa)]+_0x4759e5(0x1ed)+$[_0x4759e5(0x1dc)],'京东账号'+$[_0x4759e5(0x1e3)]+'\x20'+$['UserName']+_0x4759e5(0x1c3));continue;}await jd_necklace();}}$[_0x4759e5(0x223)]()&&allMessage&&await notify[_0x4759e5(0x203)](''+$['name'],''+allMessage,{'url':openUrl});})()['catch'](_0x27ac0b=>{const _0x2bf3d3=_0x59b17e;$[_0x2bf3d3(0x197)]('','❌\x20'+$[_0x2bf3d3(0x1aa)]+',\x20失败!\x20原因:\x20'+_0x27ac0b+'!','');})['finally'](()=>{const _0x2c34fe=_0x59b17e;$[_0x2c34fe(0x18e)]();});async function jd_necklace(){const _0x522670=_0x59b17e;try{await necklace_homePage(),await doTask(),await sign(),await necklace_homePage(),await receiveBubbles(),await necklace_homePage(),await showMsg();}catch(_0x5105e8){$[_0x522670(0x1df)](_0x5105e8);}}function showMsg(){return new Promise(async _0x2f4f27=>{const _0x425e56=_0x5233;nowTimes[_0x425e56(0x19c)]()>=0x14&&$[_0x425e56(0x16e)]($[_0x425e56(0x1aa)],'',_0x425e56(0x161)+$[_0x425e56(0x1e3)]+'\x20'+$['nickName']+_0x425e56(0x159)+$['name']+'：'+$[_0x425e56(0x20d)]+_0x425e56(0x210)+$[_0x425e56(0x20d)]/0x3e8+'元\x0a点击弹窗即可去兑换(注：此红包具有时效性)',{'open-url':openUrl}),$[_0x425e56(0x223)]()&&nowTimes[_0x425e56(0x19c)]()>=0x14&&(process[_0x425e56(0x20b)][_0x425e56(0x1e2)]?process[_0x425e56(0x20b)][_0x425e56(0x1e2)]==='false':!!0x1)&&(allMessage+=_0x425e56(0x161)+$['index']+'\x20'+$[_0x425e56(0x215)]+_0x425e56(0x159)+$[_0x425e56(0x1aa)]+'：'+$[_0x425e56(0x20d)]+_0x425e56(0x210)+$[_0x425e56(0x20d)]/0x3e8+_0x425e56(0x1fb)+($[_0x425e56(0x1e3)]!==cookiesArr[_0x425e56(0x1ef)]?'\x0a\x0a':_0x425e56(0x1ca))),_0x2f4f27();});}async function doTask(){const _0x50fe3b=_0x59b17e;for(let _0xedf4b6 of $[_0x50fe3b(0x15d)]){if(_0xedf4b6[_0x50fe3b(0x1a5)]===0x0)console[_0x50fe3b(0x197)]('【'+_0xedf4b6[_0x50fe3b(0x186)]+'】\x20任务未领取,开始领取此任务'),await necklace_startTask(_0xedf4b6['id']),console[_0x50fe3b(0x197)]('【'+_0xedf4b6[_0x50fe3b(0x186)]+_0x50fe3b(0x170)),await $[_0x50fe3b(0x20c)](0x3e8),await reportTask(_0xedf4b6);else{if(_0xedf4b6[_0x50fe3b(0x1a5)]===0x2)console[_0x50fe3b(0x197)]('【'+_0xedf4b6[_0x50fe3b(0x186)]+_0x50fe3b(0x179));else{if(_0xedf4b6[_0x50fe3b(0x1a5)]===0x3)console[_0x50fe3b(0x197)](_0xedf4b6[_0x50fe3b(0x186)]+_0x50fe3b(0x178));else _0xedf4b6[_0x50fe3b(0x1a5)]===0x1&&(console[_0x50fe3b(0x197)]('\x0a【'+_0xedf4b6[_0x50fe3b(0x186)]+_0x50fe3b(0x229)),await reportTask(_0xedf4b6));}}}}async function receiveBubbles(){const _0x319d55=_0x59b17e;for(let _0x52835d of $[_0x319d55(0x20e)]){console['log']('\x0a开始领取点点券'),await necklace_chargeScores(_0x52835d['id']);}}async function sign(){const _0x18e469=_0x59b17e;$['signInfo'][_0x18e469(0x17c)]===0x1?(console[_0x18e469(0x197)]('\x0a开始每日签到'),await necklace_sign()):console[_0x18e469(0x197)]('当前'+new Date(new Date()[_0x18e469(0x1ee)]()+new Date()[_0x18e469(0x1ba)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x18e469(0x1ce)]()+'已签到');}async function reportTask(_0x1d867f={}){const _0x40002c=_0x59b17e;if(_0x1d867f['taskType']===0x2)await necklace_startTask(_0x1d867f['id'],'necklace_reportTask');if(_0x1d867f[_0x40002c(0x1b8)]===0x6||_0x1d867f[_0x40002c(0x1b8)]===0x8||_0x1d867f[_0x40002c(0x1b8)]===0x5||_0x1d867f[_0x40002c(0x1b8)]===0x9){await necklace_getTask(_0x1d867f['id']),$[_0x40002c(0x1ac)]=$[_0x40002c(0x1ac)][_0x40002c(0x181)](_0x30966c=>!!_0x30966c&&_0x30966c[_0x40002c(0x208)]===0x0);for(let _0x8c1a5f of $['taskItems']){console[_0x40002c(0x197)](_0x40002c(0x17a)+_0x8c1a5f['title']+'】'),await necklace_startTask(_0x1d867f['id'],_0x40002c(0x226),_0x8c1a5f['id']);}}if(_0x1d867f[_0x40002c(0x1b8)]===0x3)await doAppTask('3',_0x1d867f['id']);if(_0x1d867f[_0x40002c(0x1b8)]===0x4)await doAppTask('4',_0x1d867f['id']);}function necklace_sign(){return new Promise(_0x539f59=>{const _0x3c8342=_0x5233,_0x3d4b06={'currentDate':$[_0x3c8342(0x1c9)][_0x3c8342(0x173)](/:/g,_0x3c8342(0x192))};$[_0x3c8342(0x1da)](taskPostUrl(_0x3c8342(0x1d8),_0x3d4b06),async(_0x635147,_0x39abd7,_0x570a48)=>{const _0x1fdce6=_0x3c8342;try{_0x635147?(console['log'](''+JSON[_0x1fdce6(0x14b)](_0x635147)),console['log']($['name']+'\x20API请求失败，请检查网路重试')):safeGet(_0x570a48)&&(_0x570a48=JSON[_0x1fdce6(0x1d7)](_0x570a48),_0x570a48['rtn_code']===0x0?_0x570a48['data']['biz_code']===0x0&&console['log'](_0x1fdce6(0x164)+new Date(new Date()[_0x1fdce6(0x1ee)]()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x1fdce6(0x1ce)]()):console[_0x1fdce6(0x197)]('每日签到失败：'+JSON[_0x1fdce6(0x14b)](_0x570a48)+'\x0a'));}catch(_0x4b0991){$[_0x1fdce6(0x1df)](_0x4b0991,_0x39abd7);}finally{_0x539f59(_0x570a48);}});});}function necklace_exchangeGift(_0x1769db){return new Promise(_0x17115a=>{const _0x26e04c=_0x5233,_0x1f86df={'scoreNums':_0x1769db,'giftConfigId':0x1f,'currentDate':$[_0x26e04c(0x1c9)]['replace'](/:/g,_0x26e04c(0x192))};$[_0x26e04c(0x1da)](taskPostUrl(_0x26e04c(0x19d),_0x1f86df),async(_0x5a42f5,_0x582df7,_0x53fcde)=>{const _0xd3d14d=_0x26e04c;try{if(_0x5a42f5)console[_0xd3d14d(0x197)](''+JSON[_0xd3d14d(0x14b)](_0x5a42f5)),console['log']($[_0xd3d14d(0x1aa)]+'\x20API请求失败，请检查网路重试');else{if(safeGet(_0x53fcde)){_0x53fcde=JSON[_0xd3d14d(0x1d7)](_0x53fcde);if(_0x53fcde[_0xd3d14d(0x1db)]===0x0){if(_0x53fcde[_0xd3d14d(0x1bf)][_0xd3d14d(0x177)]===0x0){const {result:_0xf201b3}=_0x53fcde[_0xd3d14d(0x1bf)];message+=_0xf201b3[_0xd3d14d(0x22a)]+'：'+_0xf201b3['redpacketAmount']+_0xd3d14d(0x218),message+='红包有效期：'+new Date(_0xf201b3[_0xd3d14d(0x1a1)]+new Date()[_0xd3d14d(0x1ba)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0xd3d14d(0x1ce)]('zh',{'hour12':![]}),console[_0xd3d14d(0x197)](message);}}}}}catch(_0x25581c){$['logErr'](_0x25581c,_0x582df7);}finally{_0x17115a(_0x53fcde);}});});}function necklace_chargeScores(_0x1f6987){return new Promise(_0x2f4f93=>{const _0x45c109=_0x5233,_0x21663e={'bubleId':_0x1f6987,'currentDate':$[_0x45c109(0x1c9)]['replace'](/:/g,_0x45c109(0x192))};$['post'](taskPostUrl(_0x45c109(0x1c1),_0x21663e),async(_0x579f8a,_0x38f84d,_0x25289d)=>{const _0x119ddc=_0x45c109;try{if(_0x579f8a)console[_0x119ddc(0x197)](''+JSON['stringify'](_0x579f8a)),console[_0x119ddc(0x197)]($[_0x119ddc(0x1aa)]+_0x119ddc(0x209));else{if(safeGet(_0x25289d)){_0x25289d=JSON[_0x119ddc(0x1d7)](_0x25289d);if(_0x25289d[_0x119ddc(0x1db)]===0x0){if(_0x25289d[_0x119ddc(0x1bf)][_0x119ddc(0x177)]===0x0){}}else console[_0x119ddc(0x197)]('领取点点券失败：'+JSON[_0x119ddc(0x14b)](_0x25289d)+'\x0a');}}}catch(_0x2b0892){$[_0x119ddc(0x1df)](_0x2b0892,_0x38f84d);}finally{_0x2f4f93(_0x25289d);}});});}function _0x5233(_0x2ad33a,_0x245933){_0x2ad33a=_0x2ad33a-0x147;let _0x2ce985=_0x2ce9[_0x2ad33a];return _0x2ce985;}function necklace_startTask(_0x52dc40,_0x59c642=_0x59b17e(0x1d9),_0x4c74a6=''){return new Promise(_0x4f0f3f=>{const _0x4b6f72=_0x5233;let _0x1a1bc9={'taskId':_0x52dc40,'currentDate':$[_0x4b6f72(0x1c9)][_0x4b6f72(0x173)](/:/g,_0x4b6f72(0x192))};if(_0x4c74a6)_0x1a1bc9[_0x4b6f72(0x1d0)]=_0x4c74a6;$[_0x4b6f72(0x1da)](taskPostUrl(_0x59c642,_0x1a1bc9),async(_0x42d913,_0x49189c,_0x342acb)=>{const _0x410e46=_0x4b6f72;try{if(_0x42d913)console[_0x410e46(0x197)](''+JSON[_0x410e46(0x14b)](_0x42d913)),console[_0x410e46(0x197)]($[_0x410e46(0x1aa)]+'\x20API请求失败，请检查网路重试');else{console[_0x410e46(0x197)]((_0x59c642==='necklace_startTask'?_0x410e46(0x1e7):_0x410e46(0x1b3))+'：'+_0x342acb);if(safeGet(_0x342acb)){_0x342acb=JSON['parse'](_0x342acb);if(_0x342acb[_0x410e46(0x1db)]===0x0){if(_0x342acb[_0x410e46(0x1bf)][_0x410e46(0x177)]===0x0){}}}}}catch(_0x2c0c1d){$['logErr'](_0x2c0c1d,_0x49189c);}finally{_0x4f0f3f();}});});}function necklace_getTask(_0x3b4df4){return new Promise(_0x17e467=>{const _0x2cbfa3=_0x5233,_0x197e07={'taskId':_0x3b4df4,'currentDate':$['lastRequestTime']['replace'](/:/g,_0x2cbfa3(0x192))};$[_0x2cbfa3(0x1ac)]=[],$[_0x2cbfa3(0x1da)](taskPostUrl(_0x2cbfa3(0x1c8),_0x197e07),async(_0x495056,_0x132ea8,_0xd1d41a)=>{const _0x64041c=_0x2cbfa3;try{_0x495056?(console[_0x64041c(0x197)](''+JSON['stringify'](_0x495056)),console[_0x64041c(0x197)]($[_0x64041c(0x1aa)]+_0x64041c(0x209))):safeGet(_0xd1d41a)&&(_0xd1d41a=JSON[_0x64041c(0x1d7)](_0xd1d41a),_0xd1d41a[_0x64041c(0x1db)]===0x0&&(_0xd1d41a[_0x64041c(0x1bf)][_0x64041c(0x177)]===0x0&&($['taskItems']=_0xd1d41a['data'][_0x64041c(0x1eb)]&&_0xd1d41a[_0x64041c(0x1bf)][_0x64041c(0x1eb)][_0x64041c(0x1ac)])));}catch(_0x4714bf){$[_0x64041c(0x1df)](_0x4714bf,_0x132ea8);}finally{_0x17e467();}});});}function necklace_homePage(){const _0x587ce1=_0x59b17e;return $[_0x587ce1(0x15d)]=[],$[_0x587ce1(0x20e)]=[],$[_0x587ce1(0x19f)]={},new Promise(_0x145370=>{const _0x115044=_0x587ce1;$[_0x115044(0x1da)](taskPostUrl(_0x115044(0x163)),async(_0x5d0e6c,_0x5a14a5,_0x1e6ed4)=>{const _0x168b27=_0x115044;try{_0x5d0e6c?(console[_0x168b27(0x197)](''+JSON['stringify'](_0x5d0e6c)),console['log']($['name']+'\x20API请求失败，请检查网路重试')):safeGet(_0x1e6ed4)&&(_0x1e6ed4=JSON[_0x168b27(0x1d7)](_0x1e6ed4),_0x1e6ed4['rtn_code']===0x0&&(_0x1e6ed4[_0x168b27(0x1bf)][_0x168b27(0x177)]===0x0&&($[_0x168b27(0x15d)]=_0x1e6ed4[_0x168b27(0x1bf)]['result'][_0x168b27(0x15d)],$[_0x168b27(0x221)]=_0x1e6ed4['data'][_0x168b27(0x1eb)][_0x168b27(0x221)],$[_0x168b27(0x1c9)]=_0x1e6ed4['data'][_0x168b27(0x1eb)][_0x168b27(0x1c9)],$[_0x168b27(0x20e)]=_0x1e6ed4['data'][_0x168b27(0x1eb)][_0x168b27(0x20e)],$['signInfo']=_0x1e6ed4[_0x168b27(0x1bf)][_0x168b27(0x1eb)][_0x168b27(0x19f)],$[_0x168b27(0x20d)]=_0x1e6ed4[_0x168b27(0x1bf)][_0x168b27(0x1eb)]['totalScore'])));}catch(_0x4c9e9b){$[_0x168b27(0x1df)](_0x4c9e9b,_0x5a14a5);}finally{_0x145370();}});});}async function doAppTask(_0x4ebed2='3',_0x568c10){const _0x325db9=_0x59b17e;let _0x2b280e={'pageClickKey':_0x325db9(0x1ab),'childActivityUrl':_0x325db9(0x1f1),'lat':'','globalLat':'','lng':'','globalLng':''};await getCcTaskList(_0x325db9(0x1d2),_0x2b280e,_0x4ebed2),_0x2b280e={'globalLng':'','globalLat':'','monitorSource':'ccgroup_ios_index_task','monitorRefer':'','taskType':'2','childActivityUrl':'openapp.jdmobile%3a%2f%2fvirtual%3fparams%3d%7b%5c%22category%5c%22%3a%5c%22jump%5c%22%2c%5c%22des%5c%22%3a%5c%22couponCenter%5c%22%7d','pageClickKey':'CouponCenter','lat':'','taskId':_0x325db9(0x1ad)+_0x568c10,'lng':''},_0x4ebed2==='4'?(console[_0x325db9(0x197)](_0x325db9(0x220)),await $['wait'](0x3a98)):console['log'](_0x325db9(0x212)),await $['wait'](0x3c8c),await getCcTaskList(_0x325db9(0x156),_0x2b280e,_0x4ebed2);}function getCcTaskList(_0x18c660,_0x2c40e3,_0x32bf68='3'){let _0x3e2a92='';return new Promise(_0x18af58=>{const _0xb7f3ca=_0x5233;_0x18c660===_0xb7f3ca(0x1d2)&&(_0x3e2a92='https://api.m.jd.com/client.action?functionId='+_0x18c660+_0xb7f3ca(0x21a)+escape(JSON[_0xb7f3ca(0x14b)](_0x2c40e3))+'&uuid=8888888&client=apple&clientVersion=9.4.1&st=1614320848090&sign=d3259c0c19f6c792883485ae65f8991c&sv=111');if(_0x32bf68==='3'&&_0x18c660===_0xb7f3ca(0x156))_0x3e2a92='https://api.m.jd.com/client.action?functionId='+_0x18c660+_0xb7f3ca(0x21a)+escape(JSON['stringify'](_0x2c40e3))+'&uuid=8888888&client=apple&clientVersion=9.4.1&st=1622194121039&sign=d565c4594b8e05645f1fe9a495ac7a7d&sv=122';if(_0x32bf68==='4'&&_0x18c660===_0xb7f3ca(0x156))_0x3e2a92=_0xb7f3ca(0x15c)+_0x18c660+_0xb7f3ca(0x21a)+escape(JSON[_0xb7f3ca(0x14b)](_0x2c40e3))+_0xb7f3ca(0x1e6);const _0x1eee4d={'url':_0x3e2a92,'body':'body='+escape(JSON['stringify'](_0x2c40e3)),'headers':{'Accept':'application/json,\x20text/plain,\x20*/*','Accept-Encoding':_0xb7f3ca(0x1c2),'Accept-Language':_0xb7f3ca(0x1ae),'Connection':_0xb7f3ca(0x19b),'Content-Length':'63','Content-Type':_0xb7f3ca(0x22c),'Host':_0xb7f3ca(0x169),'Origin':_0xb7f3ca(0x1f8),'Cookie':cookie,'Referer':_0xb7f3ca(0x1d1),'User-Agent':$['isNode']()?process[_0xb7f3ca(0x20b)]['JD_USER_AGENT']?process[_0xb7f3ca(0x20b)]['JD_USER_AGENT']:require(_0xb7f3ca(0x213))['USER_AGENT']:$[_0xb7f3ca(0x174)](_0xb7f3ca(0x228))?$[_0xb7f3ca(0x174)](_0xb7f3ca(0x228)):_0xb7f3ca(0x180)}};$['post'](_0x1eee4d,async(_0x55a840,_0x4c514f,_0x2a6cb9)=>{const _0x430e5d=_0xb7f3ca;try{if(_0x55a840)console[_0x430e5d(0x197)](''+JSON[_0x430e5d(0x14b)](_0x55a840)),console[_0x430e5d(0x197)]($[_0x430e5d(0x1aa)]+'\x20API请求失败，请检查网路重试');else{if(safeGet(_0x2a6cb9)){if(_0x32bf68==='3'&&_0x18c660===_0x430e5d(0x156))console[_0x430e5d(0x197)](_0x430e5d(0x225)+_0x2a6cb9);if(_0x32bf68==='4'&&_0x18c660===_0x430e5d(0x156))console[_0x430e5d(0x197)](_0x430e5d(0x1a6)+_0x2a6cb9);}}}catch(_0x1985a0){$[_0x430e5d(0x1df)](_0x1985a0,_0x4c514f);}finally{_0x18af58();}});});}function taskPostUrl(_0x54a230,_0x444c8c={}){const _0x22dc08=_0x59b17e,_0x46762d=new Date()[_0x22dc08(0x1ee)]()+new Date()[_0x22dc08(0x1ba)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8;return{'url':JD_API_HOST+_0x22dc08(0x16c)+_0x54a230+_0x22dc08(0x1fc)+_0x46762d+_0x22dc08(0x21a)+escape(JSON[_0x22dc08(0x14b)](_0x444c8c))+_0x22dc08(0x1a9),'headers':{'accept':_0x22dc08(0x15f),'accept-encoding':'gzip,\x20deflate,\x20br','accept-language':_0x22dc08(0x1b5),'content-length':'0','cookie':cookie,'origin':_0x22dc08(0x1f8),'referer':_0x22dc08(0x1ec),'sec-fetch-dest':_0x22dc08(0x172),'sec-fetch-mode':_0x22dc08(0x17d),'sec-fetch-site':_0x22dc08(0x199),'user-agent':$[_0x22dc08(0x223)]()?process[_0x22dc08(0x20b)][_0x22dc08(0x167)]?process[_0x22dc08(0x20b)][_0x22dc08(0x167)]:require('../USER_AGENTS')['USER_AGENT']:$['getdata']('JDUA')?$[_0x22dc08(0x174)]('JDUA'):_0x22dc08(0x180)}};}function TotalBean(){return new Promise(async _0x21980a=>{const _0x3f5c0d=_0x5233,_0x248aec={'url':'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2','headers':{'Accept':_0x3f5c0d(0x1fe),'Content-Type':_0x3f5c0d(0x22c),'Accept-Encoding':_0x3f5c0d(0x1c2),'Accept-Language':'zh-cn','Connection':_0x3f5c0d(0x19b),'Cookie':cookie,'Referer':_0x3f5c0d(0x1c7),'User-Agent':$[_0x3f5c0d(0x223)]()?process['env'][_0x3f5c0d(0x167)]?process[_0x3f5c0d(0x20b)][_0x3f5c0d(0x167)]:require(_0x3f5c0d(0x213))['USER_AGENT']:$[_0x3f5c0d(0x174)](_0x3f5c0d(0x228))?$[_0x3f5c0d(0x174)]('JDUA'):'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1'}};$[_0x3f5c0d(0x1da)](_0x248aec,(_0x63a6ea,_0x39fcc8,_0x1d2db1)=>{const _0x47a7cd=_0x3f5c0d;try{if(_0x63a6ea)console[_0x47a7cd(0x197)](''+JSON[_0x47a7cd(0x14b)](_0x63a6ea)),console[_0x47a7cd(0x197)]($['name']+_0x47a7cd(0x209));else{if(_0x1d2db1){_0x1d2db1=JSON[_0x47a7cd(0x1d7)](_0x1d2db1);if(_0x1d2db1['retcode']===0xd){$[_0x47a7cd(0x22e)]=![];return;}_0x1d2db1[_0x47a7cd(0x185)]===0x0?$[_0x47a7cd(0x215)]=_0x1d2db1['base']&&_0x1d2db1[_0x47a7cd(0x204)][_0x47a7cd(0x1f2)]||$[_0x47a7cd(0x1dc)]:$[_0x47a7cd(0x215)]=$['UserName'];}else console[_0x47a7cd(0x197)](_0x47a7cd(0x16a));}}catch(_0x4891c4){$[_0x47a7cd(0x1df)](_0x4891c4,_0x39fcc8);}finally{_0x21980a();}});});}function safeGet(_0x35dc9e){const _0x1b7f74=_0x59b17e;try{if(typeof JSON[_0x1b7f74(0x1d7)](_0x35dc9e)==_0x1b7f74(0x14f))return!![];}catch(_0x102408){return console[_0x1b7f74(0x197)](_0x102408),console[_0x1b7f74(0x197)](_0x1b7f74(0x151)),![];}}function jsonParse(_0x7f5590){const _0x1f65b5=_0x59b17e;if(typeof _0x7f5590==_0x1f65b5(0x1f6))try{return JSON[_0x1f65b5(0x1d7)](_0x7f5590);}catch(_0x1f9048){return console[_0x1f65b5(0x197)](_0x1f9048),$[_0x1f65b5(0x16e)]($['name'],'',_0x1f65b5(0x1a8)),[];}}function Env(_0x1ccd08,_0x4be116){const _0x1d82e4=_0x59b17e;_0x1d82e4(0x219)!=typeof process&&JSON[_0x1d82e4(0x14b)](process[_0x1d82e4(0x20b)])['indexOf'](_0x1d82e4(0x189))>-0x1&&process[_0x1d82e4(0x190)](0x0);class _0x273612{constructor(_0xb43355){const _0x563faf=_0x1d82e4;this[_0x563faf(0x20b)]=_0xb43355;}['send'](_0x599bb6,_0x553ac8='GET'){const _0x4cfc41=_0x1d82e4;_0x599bb6=_0x4cfc41(0x1f6)==typeof _0x599bb6?{'url':_0x599bb6}:_0x599bb6;let _0x11199d=this['get'];return _0x4cfc41(0x20f)===_0x553ac8&&(_0x11199d=this[_0x4cfc41(0x1da)]),new Promise((_0x43c5cf,_0x783b1f)=>{const _0x3b1901=_0x4cfc41;_0x11199d[_0x3b1901(0x1f5)](this,_0x599bb6,(_0x1c7a90,_0x387505,_0xca6f6c)=>{_0x1c7a90?_0x783b1f(_0x1c7a90):_0x43c5cf(_0x387505);});});}[_0x1d82e4(0x153)](_0x3f4b12){const _0x27ffa2=_0x1d82e4;return this[_0x27ffa2(0x1a0)]['call'](this[_0x27ffa2(0x20b)],_0x3f4b12);}['post'](_0x3e8174){const _0x2ccd70=_0x1d82e4;return this[_0x2ccd70(0x1a0)][_0x2ccd70(0x1f5)](this[_0x2ccd70(0x20b)],_0x3e8174,'POST');}}return new class{constructor(_0x2b140e,_0x3414b5){const _0x28d988=_0x1d82e4;this['name']=_0x2b140e,this[_0x28d988(0x14e)]=new _0x273612(this),this[_0x28d988(0x1bf)]=null,this[_0x28d988(0x1bc)]=_0x28d988(0x224),this[_0x28d988(0x19e)]=[],this[_0x28d988(0x154)]=!0x1,this[_0x28d988(0x1e1)]=!0x1,this[_0x28d988(0x1c4)]='\x0a',this[_0x28d988(0x1d5)]=new Date()[_0x28d988(0x1ee)](),Object[_0x28d988(0x211)](this,_0x3414b5),this[_0x28d988(0x197)]('','🔔'+this[_0x28d988(0x1aa)]+',\x20开始!');}[_0x1d82e4(0x223)](){const _0x417fb=_0x1d82e4;return _0x417fb(0x219)!=typeof module&&!!module[_0x417fb(0x22b)];}[_0x1d82e4(0x1f0)](){return'undefined'!=typeof $task;}[_0x1d82e4(0x1d4)](){const _0x1f6ea3=_0x1d82e4;return'undefined'!=typeof $httpClient&&_0x1f6ea3(0x219)==typeof $loon;}[_0x1d82e4(0x1be)](){return'undefined'!=typeof $loon;}[_0x1d82e4(0x15a)](_0x4c077a,_0x129ce2=null){const _0x1170b7=_0x1d82e4;try{return JSON[_0x1170b7(0x1d7)](_0x4c077a);}catch{return _0x129ce2;}}[_0x1d82e4(0x1f3)](_0x29cafc,_0x115fad=null){const _0x4c0111=_0x1d82e4;try{return JSON[_0x4c0111(0x14b)](_0x29cafc);}catch{return _0x115fad;}}['getjson'](_0x4a9a39,_0x418d79){const _0x16674f=_0x1d82e4;let _0x2b60d7=_0x418d79;const _0x2886d9=this[_0x16674f(0x174)](_0x4a9a39);if(_0x2886d9)try{_0x2b60d7=JSON['parse'](this[_0x16674f(0x174)](_0x4a9a39));}catch{}return _0x2b60d7;}[_0x1d82e4(0x21b)](_0x1b7c20,_0x12baeb){const _0x368ef0=_0x1d82e4;try{return this[_0x368ef0(0x18f)](JSON['stringify'](_0x1b7c20),_0x12baeb);}catch{return!0x1;}}[_0x1d82e4(0x1ff)](_0xfba1b7){return new Promise(_0x2b357a=>{const _0x1062bd=_0x5233;this[_0x1062bd(0x153)]({'url':_0xfba1b7},(_0x4eff36,_0x4ad7d1,_0x4a4fc8)=>_0x2b357a(_0x4a4fc8));});}[_0x1d82e4(0x175)](_0x19af65,_0x1c8eb8){const _0x57d94f=_0x1d82e4;return new Promise(_0x3b1b69=>{const _0x3a5494=_0x5233;let _0x1b5a17=this['getdata'](_0x3a5494(0x1b7));_0x1b5a17=_0x1b5a17?_0x1b5a17[_0x3a5494(0x173)](/\n/g,'')[_0x3a5494(0x155)]():_0x1b5a17;let _0x32da38=this[_0x3a5494(0x174)]('@chavy_boxjs_userCfgs.httpapi_timeout');_0x32da38=_0x32da38?0x1*_0x32da38:0x14,_0x32da38=_0x1c8eb8&&_0x1c8eb8[_0x3a5494(0x1bd)]?_0x1c8eb8[_0x3a5494(0x1bd)]:_0x32da38;const [_0x43d730,_0x1bc528]=_0x1b5a17['split']('@'),_0x5ca374={'url':_0x3a5494(0x194)+_0x1bc528+_0x3a5494(0x17f),'body':{'script_text':_0x19af65,'mock_type':'cron','timeout':_0x32da38},'headers':{'X-Key':_0x43d730,'Accept':_0x3a5494(0x15f)}};this[_0x3a5494(0x1da)](_0x5ca374,(_0x15b5c8,_0x14bff3,_0x3d4399)=>_0x3b1b69(_0x3d4399));})[_0x57d94f(0x18c)](_0x258dd9=>this[_0x57d94f(0x1df)](_0x258dd9));}[_0x1d82e4(0x1bb)](){const _0x5640ba=_0x1d82e4;if(!this[_0x5640ba(0x223)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x5640ba(0x1b4)]=this[_0x5640ba(0x1b4)]?this['path']:require(_0x5640ba(0x1b4));const _0x16fa8e=this[_0x5640ba(0x1b4)][_0x5640ba(0x1e0)](this[_0x5640ba(0x1bc)]),_0x5d504b=this['path'][_0x5640ba(0x1e0)](process[_0x5640ba(0x165)](),this[_0x5640ba(0x1bc)]),_0xa0a355=this['fs'][_0x5640ba(0x1f7)](_0x16fa8e),_0x5e4da9=!_0xa0a355&&this['fs']['existsSync'](_0x5d504b);if(!_0xa0a355&&!_0x5e4da9)return{};{const _0x3f5cd3=_0xa0a355?_0x16fa8e:_0x5d504b;try{return JSON[_0x5640ba(0x1d7)](this['fs'][_0x5640ba(0x16f)](_0x3f5cd3));}catch(_0x365cba){return{};}}}}[_0x1d82e4(0x1e4)](){const _0x47d672=_0x1d82e4;if(this[_0x47d672(0x223)]()){this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this[_0x47d672(0x1b4)]?this[_0x47d672(0x1b4)]:require('path');const _0x16f370=this[_0x47d672(0x1b4)][_0x47d672(0x1e0)](this[_0x47d672(0x1bc)]),_0x22f9c5=this[_0x47d672(0x1b4)][_0x47d672(0x1e0)](process[_0x47d672(0x165)](),this['dataFile']),_0x23318a=this['fs']['existsSync'](_0x16f370),_0x1d3a2c=!_0x23318a&&this['fs'][_0x47d672(0x1f7)](_0x22f9c5),_0xac5e59=JSON[_0x47d672(0x14b)](this[_0x47d672(0x1bf)]);_0x23318a?this['fs'][_0x47d672(0x1b2)](_0x16f370,_0xac5e59):_0x1d3a2c?this['fs'][_0x47d672(0x1b2)](_0x22f9c5,_0xac5e59):this['fs']['writeFileSync'](_0x16f370,_0xac5e59);}}[_0x1d82e4(0x21f)](_0x167ab2,_0x444864,_0x40b684){const _0x43d995=_0x1d82e4,_0x3daf50=_0x444864[_0x43d995(0x173)](/\[(\d+)\]/g,_0x43d995(0x1cf))[_0x43d995(0x1b0)]('.');let _0x58626b=_0x167ab2;for(const _0x2e25f4 of _0x3daf50)if(_0x58626b=Object(_0x58626b)[_0x2e25f4],void 0x0===_0x58626b)return _0x40b684;return _0x58626b;}[_0x1d82e4(0x16b)](_0x5a22d1,_0x4044b3,_0x4ee808){const _0x33ee91=_0x1d82e4;return Object(_0x5a22d1)!==_0x5a22d1?_0x5a22d1:(Array[_0x33ee91(0x1a4)](_0x4044b3)||(_0x4044b3=_0x4044b3[_0x33ee91(0x1d3)]()[_0x33ee91(0x148)](/[^.[\]]+/g)||[]),_0x4044b3[_0x33ee91(0x22d)](0x0,-0x1)[_0x33ee91(0x21c)]((_0x33b91c,_0x497d2c,_0x417fab)=>Object(_0x33b91c[_0x497d2c])===_0x33b91c[_0x497d2c]?_0x33b91c[_0x497d2c]:_0x33b91c[_0x497d2c]=Math['abs'](_0x4044b3[_0x417fab+0x1])>>0x0==+_0x4044b3[_0x417fab+0x1]?[]:{},_0x5a22d1)[_0x4044b3[_0x4044b3['length']-0x1]]=_0x4ee808,_0x5a22d1);}['getdata'](_0x2c3e6f){const _0x272493=_0x1d82e4;let _0x2d942b=this['getval'](_0x2c3e6f);if(/^@/['test'](_0x2c3e6f)){const [,_0x53d28c,_0x48cb1b]=/^@(.*?)\.(.*?)$/[_0x272493(0x196)](_0x2c3e6f),_0xa9c714=_0x53d28c?this[_0x272493(0x160)](_0x53d28c):'';if(_0xa9c714)try{const _0x18eacc=JSON[_0x272493(0x1d7)](_0xa9c714);_0x2d942b=_0x18eacc?this['lodash_get'](_0x18eacc,_0x48cb1b,''):_0x2d942b;}catch(_0x5306c9){_0x2d942b='';}}return _0x2d942b;}['setdata'](_0xf709d0,_0x33ef72){const _0x5e4e6c=_0x1d82e4;let _0x22d5f5=!0x1;if(/^@/['test'](_0x33ef72)){const [,_0x3221ef,_0xc5fb92]=/^@(.*?)\.(.*?)$/[_0x5e4e6c(0x196)](_0x33ef72),_0x34d690=this[_0x5e4e6c(0x160)](_0x3221ef),_0x405ecc=_0x3221ef?'null'===_0x34d690?null:_0x34d690||'{}':'{}';try{const _0x11f5eb=JSON[_0x5e4e6c(0x1d7)](_0x405ecc);this[_0x5e4e6c(0x16b)](_0x11f5eb,_0xc5fb92,_0xf709d0),_0x22d5f5=this[_0x5e4e6c(0x18b)](JSON[_0x5e4e6c(0x14b)](_0x11f5eb),_0x3221ef);}catch(_0x147c54){const _0x2703e8={};this[_0x5e4e6c(0x16b)](_0x2703e8,_0xc5fb92,_0xf709d0),_0x22d5f5=this[_0x5e4e6c(0x18b)](JSON['stringify'](_0x2703e8),_0x3221ef);}}else _0x22d5f5=this[_0x5e4e6c(0x18b)](_0xf709d0,_0x33ef72);return _0x22d5f5;}['getval'](_0x499e7e){const _0x360081=_0x1d82e4;return this['isSurge']()||this[_0x360081(0x1be)]()?$persistentStore[_0x360081(0x188)](_0x499e7e):this[_0x360081(0x1f0)]()?$prefs[_0x360081(0x1ea)](_0x499e7e):this[_0x360081(0x223)]()?(this[_0x360081(0x1bf)]=this[_0x360081(0x1bb)](),this[_0x360081(0x1bf)][_0x499e7e]):this[_0x360081(0x1bf)]&&this['data'][_0x499e7e]||null;}[_0x1d82e4(0x18b)](_0x46733f,_0x5cde2d){const _0x1c78ea=_0x1d82e4;return this[_0x1c78ea(0x1d4)]()||this[_0x1c78ea(0x1be)]()?$persistentStore[_0x1c78ea(0x216)](_0x46733f,_0x5cde2d):this[_0x1c78ea(0x1f0)]()?$prefs[_0x1c78ea(0x193)](_0x46733f,_0x5cde2d):this['isNode']()?(this[_0x1c78ea(0x1bf)]=this[_0x1c78ea(0x1bb)](),this['data'][_0x5cde2d]=_0x46733f,this[_0x1c78ea(0x1e4)](),!0x0):this['data']&&this[_0x1c78ea(0x1bf)][_0x5cde2d]||null;}[_0x1d82e4(0x206)](_0x1b2e53){const _0x498090=_0x1d82e4;this['got']=this[_0x498090(0x207)]?this[_0x498090(0x207)]:require(_0x498090(0x207)),this[_0x498090(0x1f9)]=this[_0x498090(0x1f9)]?this[_0x498090(0x1f9)]:require(_0x498090(0x171)),this['ckjar']=this['ckjar']?this[_0x498090(0x149)]:new this[(_0x498090(0x1f9))][(_0x498090(0x16d))](),_0x1b2e53&&(_0x1b2e53[_0x498090(0x14d)]=_0x1b2e53[_0x498090(0x14d)]?_0x1b2e53['headers']:{},void 0x0===_0x1b2e53[_0x498090(0x14d)][_0x498090(0x1d6)]&&void 0x0===_0x1b2e53[_0x498090(0x1cc)]&&(_0x1b2e53[_0x498090(0x1cc)]=this['ckjar']));}[_0x1d82e4(0x153)](_0x1b4862,_0x44cdfb=()=>{}){const _0x35e48d=_0x1d82e4;_0x1b4862[_0x35e48d(0x14d)]&&(delete _0x1b4862['headers'][_0x35e48d(0x205)],delete _0x1b4862[_0x35e48d(0x14d)][_0x35e48d(0x17b)]),this['isSurge']()||this[_0x35e48d(0x1be)]()?(this[_0x35e48d(0x1d4)]()&&this[_0x35e48d(0x1e1)]&&(_0x1b4862[_0x35e48d(0x14d)]=_0x1b4862[_0x35e48d(0x14d)]||{},Object['assign'](_0x1b4862['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient['get'](_0x1b4862,(_0x1a4105,_0x4f681d,_0x1eb788)=>{const _0x4a0c22=_0x35e48d;!_0x1a4105&&_0x4f681d&&(_0x4f681d['body']=_0x1eb788,_0x4f681d[_0x4a0c22(0x184)]=_0x4f681d[_0x4a0c22(0x208)]),_0x44cdfb(_0x1a4105,_0x4f681d,_0x1eb788);})):this[_0x35e48d(0x1f0)]()?(this[_0x35e48d(0x1e1)]&&(_0x1b4862[_0x35e48d(0x15e)]=_0x1b4862[_0x35e48d(0x15e)]||{},Object[_0x35e48d(0x211)](_0x1b4862[_0x35e48d(0x15e)],{'hints':!0x1})),$task['fetch'](_0x1b4862)[_0x35e48d(0x182)](_0x549d27=>{const {statusCode:_0x489cbc,statusCode:_0x3e79b4,headers:_0x4831b4,body:_0x55021f}=_0x549d27;_0x44cdfb(null,{'status':_0x489cbc,'statusCode':_0x3e79b4,'headers':_0x4831b4,'body':_0x55021f},_0x55021f);},_0x563ef2=>_0x44cdfb(_0x563ef2))):this[_0x35e48d(0x223)]()&&(this[_0x35e48d(0x206)](_0x1b4862),this[_0x35e48d(0x207)](_0x1b4862)['on'](_0x35e48d(0x162),(_0x493cf4,_0x5360b4)=>{const _0x482faf=_0x35e48d;try{if(_0x493cf4['headers'][_0x482faf(0x1b1)]){const _0x453833=_0x493cf4[_0x482faf(0x14d)][_0x482faf(0x1b1)][_0x482faf(0x1cd)](this[_0x482faf(0x1f9)][_0x482faf(0x1d6)][_0x482faf(0x1d7)])[_0x482faf(0x1d3)]();_0x453833&&this[_0x482faf(0x149)][_0x482faf(0x1a3)](_0x453833,null),_0x5360b4[_0x482faf(0x1cc)]=this[_0x482faf(0x149)];}}catch(_0x252e96){this['logErr'](_0x252e96);}})[_0x35e48d(0x182)](_0x53e707=>{const {statusCode:_0x524be5,statusCode:_0x522087,headers:_0x80ca77,body:_0x30b2c5}=_0x53e707;_0x44cdfb(null,{'status':_0x524be5,'statusCode':_0x522087,'headers':_0x80ca77,'body':_0x30b2c5},_0x30b2c5);},_0x25282b=>{const _0x3b5c52=_0x35e48d,{message:_0x1438d4,response:_0x1d0e96}=_0x25282b;_0x44cdfb(_0x1438d4,_0x1d0e96,_0x1d0e96&&_0x1d0e96[_0x3b5c52(0x1c6)]);}));}[_0x1d82e4(0x1da)](_0x4088d2,_0x2ebdfa=()=>{}){const _0x417bf6=_0x1d82e4;if(_0x4088d2['body']&&_0x4088d2[_0x417bf6(0x14d)]&&!_0x4088d2[_0x417bf6(0x14d)][_0x417bf6(0x205)]&&(_0x4088d2[_0x417bf6(0x14d)][_0x417bf6(0x205)]=_0x417bf6(0x22c)),_0x4088d2[_0x417bf6(0x14d)]&&delete _0x4088d2[_0x417bf6(0x14d)][_0x417bf6(0x17b)],this[_0x417bf6(0x1d4)]()||this[_0x417bf6(0x1be)]())this[_0x417bf6(0x1d4)]()&&this[_0x417bf6(0x1e1)]&&(_0x4088d2['headers']=_0x4088d2[_0x417bf6(0x14d)]||{},Object[_0x417bf6(0x211)](_0x4088d2[_0x417bf6(0x14d)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x417bf6(0x1da)](_0x4088d2,(_0x39d7ca,_0x2d5492,_0x360fce)=>{const _0x2de9c6=_0x417bf6;!_0x39d7ca&&_0x2d5492&&(_0x2d5492[_0x2de9c6(0x1c6)]=_0x360fce,_0x2d5492['statusCode']=_0x2d5492[_0x2de9c6(0x208)]),_0x2ebdfa(_0x39d7ca,_0x2d5492,_0x360fce);});else{if(this[_0x417bf6(0x1f0)]())_0x4088d2[_0x417bf6(0x166)]=_0x417bf6(0x20f),this[_0x417bf6(0x1e1)]&&(_0x4088d2['opts']=_0x4088d2[_0x417bf6(0x15e)]||{},Object['assign'](_0x4088d2['opts'],{'hints':!0x1})),$task['fetch'](_0x4088d2)[_0x417bf6(0x182)](_0x4de525=>{const {statusCode:_0x2654de,statusCode:_0x49e547,headers:_0x4498e3,body:_0x296221}=_0x4de525;_0x2ebdfa(null,{'status':_0x2654de,'statusCode':_0x49e547,'headers':_0x4498e3,'body':_0x296221},_0x296221);},_0x4bd38d=>_0x2ebdfa(_0x4bd38d));else{if(this[_0x417bf6(0x223)]()){this[_0x417bf6(0x206)](_0x4088d2);const {url:_0x5edf15,..._0x3fe888}=_0x4088d2;this[_0x417bf6(0x207)][_0x417bf6(0x1da)](_0x5edf15,_0x3fe888)['then'](_0x2c11b1=>{const {statusCode:_0xb106cb,statusCode:_0x21a184,headers:_0x60ee32,body:_0xd8dfa0}=_0x2c11b1;_0x2ebdfa(null,{'status':_0xb106cb,'statusCode':_0x21a184,'headers':_0x60ee32,'body':_0xd8dfa0},_0xd8dfa0);},_0x45b1e9=>{const {message:_0x193bd9,response:_0x202f62}=_0x45b1e9;_0x2ebdfa(_0x193bd9,_0x202f62,_0x202f62&&_0x202f62['body']);});}}}}[_0x1d82e4(0x214)](_0x1dae98,_0x4b8b7d=null){const _0x46ccda=_0x1d82e4,_0x183c86=_0x4b8b7d?new Date(_0x4b8b7d):new Date();let _0x2a0c5f={'M+':_0x183c86[_0x46ccda(0x1a7)]()+0x1,'d+':_0x183c86[_0x46ccda(0x1f4)](),'H+':_0x183c86[_0x46ccda(0x19c)](),'m+':_0x183c86[_0x46ccda(0x1e9)](),'s+':_0x183c86[_0x46ccda(0x195)](),'q+':Math[_0x46ccda(0x1de)]((_0x183c86[_0x46ccda(0x1a7)]()+0x3)/0x3),'S':_0x183c86[_0x46ccda(0x1a2)]()};/(y+)/[_0x46ccda(0x150)](_0x1dae98)&&(_0x1dae98=_0x1dae98['replace'](RegExp['$1'],(_0x183c86[_0x46ccda(0x200)]()+'')[_0x46ccda(0x14a)](0x4-RegExp['$1'][_0x46ccda(0x1ef)])));for(let _0xb26100 in _0x2a0c5f)new RegExp('('+_0xb26100+')')[_0x46ccda(0x150)](_0x1dae98)&&(_0x1dae98=_0x1dae98['replace'](RegExp['$1'],0x1==RegExp['$1'][_0x46ccda(0x1ef)]?_0x2a0c5f[_0xb26100]:('00'+_0x2a0c5f[_0xb26100])[_0x46ccda(0x14a)]((''+_0x2a0c5f[_0xb26100])[_0x46ccda(0x1ef)])));return _0x1dae98;}[_0x1d82e4(0x16e)](_0x277fa2=_0x1ccd08,_0x5d28e1='',_0x4b5ba4='',_0x556b75){const _0x12422f=_0x1d82e4,_0x257e59=_0x349260=>{const _0x58a85d=_0x5233;if(!_0x349260)return _0x349260;if(_0x58a85d(0x1f6)==typeof _0x349260)return this[_0x58a85d(0x1be)]()?_0x349260:this[_0x58a85d(0x1f0)]()?{'open-url':_0x349260}:this['isSurge']()?{'url':_0x349260}:void 0x0;if(_0x58a85d(0x14f)==typeof _0x349260){if(this[_0x58a85d(0x1be)]()){let _0x2fca3d=_0x349260[_0x58a85d(0x1fd)]||_0x349260['url']||_0x349260[_0x58a85d(0x227)],_0x26046=_0x349260[_0x58a85d(0x191)]||_0x349260['media-url'];return{'openUrl':_0x2fca3d,'mediaUrl':_0x26046};}if(this[_0x58a85d(0x1f0)]()){let _0x1810d3=_0x349260['open-url']||_0x349260['url']||_0x349260[_0x58a85d(0x1fd)],_0x22846b=_0x349260[_0x58a85d(0x158)]||_0x349260[_0x58a85d(0x191)];return{'open-url':_0x1810d3,'media-url':_0x22846b};}if(this['isSurge']()){let _0xec221=_0x349260[_0x58a85d(0x1af)]||_0x349260[_0x58a85d(0x1fd)]||_0x349260[_0x58a85d(0x227)];return{'url':_0xec221};}}};if(this[_0x12422f(0x154)]||(this[_0x12422f(0x1d4)]()||this[_0x12422f(0x1be)]()?$notification[_0x12422f(0x1da)](_0x277fa2,_0x5d28e1,_0x4b5ba4,_0x257e59(_0x556b75)):this[_0x12422f(0x1f0)]()&&$notify(_0x277fa2,_0x5d28e1,_0x4b5ba4,_0x257e59(_0x556b75))),!this[_0x12422f(0x1b9)]){let _0x590e92=['',_0x12422f(0x217)];_0x590e92['push'](_0x277fa2),_0x5d28e1&&_0x590e92[_0x12422f(0x1c5)](_0x5d28e1),_0x4b5ba4&&_0x590e92[_0x12422f(0x1c5)](_0x4b5ba4),console[_0x12422f(0x197)](_0x590e92['join']('\x0a')),this['logs']=this['logs'][_0x12422f(0x222)](_0x590e92);}}['log'](..._0x1cf6a1){const _0x111074=_0x1d82e4;_0x1cf6a1[_0x111074(0x1ef)]>0x0&&(this['logs']=[...this['logs'],..._0x1cf6a1]),console[_0x111074(0x197)](_0x1cf6a1[_0x111074(0x187)](this[_0x111074(0x1c4)]));}['logErr'](_0x20fc75,_0x3bcf4a){const _0x19f64b=_0x1d82e4,_0x15a47f=!this[_0x19f64b(0x1d4)]()&&!this['isQuanX']()&&!this[_0x19f64b(0x1be)]();_0x15a47f?this['log']('','❗️'+this['name']+_0x19f64b(0x1cb),_0x20fc75[_0x19f64b(0x183)]):this['log']('','❗️'+this[_0x19f64b(0x1aa)]+',\x20错误!',_0x20fc75);}['wait'](_0x309115){return new Promise(_0x3dba86=>setTimeout(_0x3dba86,_0x309115));}[_0x1d82e4(0x18e)](_0x31305b={}){const _0x4b1f31=_0x1d82e4,_0x46b2b5=new Date()[_0x4b1f31(0x1ee)](),_0x5c56b2=(_0x46b2b5-this[_0x4b1f31(0x1d5)])/0x3e8;this[_0x4b1f31(0x197)]('','🔔'+this['name']+',\x20结束!\x20🕛\x20'+_0x5c56b2+'\x20秒'),this[_0x4b1f31(0x197)](),(this[_0x4b1f31(0x1d4)]()||this[_0x4b1f31(0x1f0)]()||this[_0x4b1f31(0x1be)]())&&$done(_0x31305b);}}(_0x1ccd08,_0x4be116);}
