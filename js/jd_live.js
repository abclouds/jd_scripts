/*
京东直播任务
活动结束时间未知
活动入口：京东APP首页-京东直播
地址：https://h5.m.jd.com/babelDiy/Zeus/2zwQnu4WHRNfqMSdv69UPgpZMnE2/index.html/
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京东直播
10-20/5 12 * * * https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_live.js, tag=京东直播, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/jd.png, enabled=true

================Loon==============
[Script]
cron "10-20/5 12 * * *" script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_live.js,tag=京东直播

===============Surge=================
京东直播 = type=cron,cronexp="10-20/5 12 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_live.js

============小火箭=========
京东直播 = type=cron,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_live.js, cronexpr="10-20/5 12 * * *", timeout=3600, enable=true
 */

const _0x3eb9=['%22%2C%22liveId%22%3A%222942545%22%7D&v=','cookie已失效\x20-\x20','sendNotify','method','isLoon','\x20API请求失败，请检查网路重试','https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2','exec','liveChannelReportDataV912','去做分享直播间任务','isMute','retcode','subCode','@chavy_boxjs_userCfgs.httpapi','writedata','Content-Type','exit','cron','bean','msg','任务领奖失败，','cookie','253254wfBOuK','168211BwHWkD','cktough','initGotEnv','split','path',',\x20结束!\x20🕛\x20','isMuteLog','sum','isNode','startTime','去做浏览直播间任务','name','GITHUB','京东服务器访问数据为空，请检查自身设备网络情况','toString','got','isNeedRewrite','https://h5.m.jd.com','test','mediaUrl','getDate','https://bean.m.jd.com/bean/signIndex.action','slice','replace','body','247029yCWdcb','【提示】cookie已失效','stack','isArray','media-url','lodash_set','loaddata','http','fetch','env','任务领奖成功，获得\x20','getdata','length','exports','CookieJar','\x0a******开始【京东账号','7ljdPav','join','openUrl','../jdCookie.js','call','match','push','getScript',',\x20开始!','221WCHitA','nickname','JD_USER_AGENT','UserName','undefined','set-cookie','body=%7B%22liveId%22%3A%223019486%22%2C%22type%22%3A%22viewTask%22%2C%22authorId%22%3A%22681523%22%2C%22extra%22%3A%7B%22time%22%3A200%7D%7D&build=167454&client=apple&clientVersion=9.3.0&d_brand=apple&d_model=iPhone10%2C2&eid=eidIF3CF0112RTIyQTVGQTEtRDVCQy00Qg%3D%3D6HAJa9%2B/4Vedgo62xKQRoAb47%2Bpyu1EQs/6971aUvk0BQAsZLyQAYeid%2BPgbJ9BQoY1RFtkLCLP5OMqU&isBackground=N&joycious=194&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2&osVersion=14.2&partner=apple&rfs=0000&scope=01&screen=1242%2A2208&sign=68c0d87a5de62711bab9e6e796c08170&st=1607778652966&sv=100&uts=0f31TVRjBSsySvX9aqk89gHBMqz5E28EYCqc3cRu/4%2Bv0EzRuStHwMI1R5P9RqeizLow/pAquaX1v5IJQGVxUzSfExCFmfO0L7BEMvXnkeCZhKEsmSkbQm54W7ig8aRsmHiXp7YT/SOV7sEKxXauv59O/SAAFkr1egGgKev7Uj81nJRFDnNRSomlrOj2jQzH6iddCTSpydcSYRnDyDcodA%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D','trim','base','JD_DEBUG','existsSync','tough-cookie','签到领奖成功，获得\x20','map','status','functionId=getChannelTaskRewardToM&appid=h5-live&body=%7B%22type%22%3A%22','object','url','data','getMilliseconds','getval','https://api.m.jd.com/api','\x20京豆\x0a','\x20京豆','send','943TgrxHn','logSeparator','jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1','setValueForKey','headers','readFileSync','cookieJar','getHours','&appid=h5-live&body=','USER_AGENT','commonViewTask','CookiesJD','get','body=%7B%22liveId%22%3A%222995233%22%2C%22type%22%3A%22shareTask%22%2C%22authorId%22%3A%22682780%22%2C%22extra%22%3A%7B%22num%22%3A1%7D%7D&build=167408&client=apple&clientVersion=9.2.0&eid=eidIF3CF0112RTIyQTVGQTEtRDVCQy00Qg%3D%3D6HAJa9%2B/4Vedgo62xKQRoAb47%2Bpyu1EQs/6971aUvk0BQAsZLyQAYeid%2BPgbJ9BQoY1RFtkLCLP5OMqU&isBackground=Y&joycious=194&lang=zh_CN&networkType=wifi&networklibtype=JDNetworkBaseAF&openudid=53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2&osVersion=14.2&partner=TF&rfs=0000&scope=01&screen=1242%2A2208&sign=457d557a0902f43cbdf9fb735d2bcd64&st=1607559819969&sv=110&uts=0f31TVRjBSsxGLJHVBkddxFxBqY/8qFkrfEYLL0gkhB/JVGyEYIoD8r5rLvootZziQYAUyvIPogdJpesEuOMmvlisDx6AR2SEsfp381xPoggwvq8XaMYlOnHUV66TZiSfC%2BSgcLpB2v9cy/0Z41tT%2BuLheoEwBwDDYzANkZjncUI9PDCWpCg5/i0A14XfnsUTfQHbMqa3vwsY6QtsbNsgA%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D','210829mTCdjF','京东账号','statusCode','application/x-www-form-urlencoded','getMonth','forEach','.$1','1XKLHEH','isQuanX','stringify','starViewTask','getTimezoneOffset','CookieJD','dataFile','resolve','getChannelTaskRewardToM','getMinutes','POST','setval','done','application/json,text/plain,\x20*/*','gzip,\x20deflate,\x20br','../USER_AGENTS','isSurge','abs','?functionId=','getTime',',\x20错误!','JDUA','string','Cookie','setCookieSync','then','index','【提示】请先获取京东账号一cookie\x0a直接使用京东签到获取','parse','nickName','京东直播任务','http://','ckjar','post','1wNTHpj','substr','https://api.m.jd.com/client.action','wait','lodash_get','signTask','assign','*/*','redirect','951cNNDvL','catch','../sendNotify','109353CDKvDn','write','https://h5.m.jd.com/','logs','time','*********\x0a','box.dat','open-url','finally','writeFileSync','log','cwd','opts','logErr','null','false','@chavy_boxjs_userCfgs.httpapi_timeout','领奖完成，共计获得\x20','isLogin','read','keys'];const _0x16d666=_0x4d86;(function(_0x1e1432,_0x8b69ee){const _0x141376=_0x4d86;while(!![]){try{const _0x32e192=parseInt(_0x141376(0x16d))*-parseInt(_0x141376(0x115))+parseInt(_0x141376(0x143))+-parseInt(_0x141376(0x118))+-parseInt(_0x141376(0x15d))*-parseInt(_0x141376(0xea))+-parseInt(_0x141376(0x144))*-parseInt(_0x141376(0x10c))+-parseInt(_0x141376(0xbc))*parseInt(_0x141376(0xd5))+-parseInt(_0x141376(0xe3));if(_0x32e192===_0x8b69ee)break;else _0x1e1432['push'](_0x1e1432['shift']());}catch(_0x54a44d){_0x1e1432['push'](_0x1e1432['shift']());}}}(_0x3eb9,0x20884));const $=new Env(_0x16d666(0x108)),notify=$[_0x16d666(0x14c)]()?require(_0x16d666(0x117)):'',jdCookieNode=$['isNode']()?require(_0x16d666(0x170)):'';let jdNotify=!![],cookiesArr=[],cookie='',message;if($['isNode']()){Object[_0x16d666(0x12c)](jdCookieNode)[_0x16d666(0xe8)](_0x209f10=>{cookiesArr['push'](jdCookieNode[_0x209f10]);});if(process[_0x16d666(0x166)][_0x16d666(0xc5)]&&process[_0x16d666(0x166)][_0x16d666(0xc5)]===_0x16d666(0x127))console[_0x16d666(0x122)]=()=>{};}else cookiesArr=[$[_0x16d666(0x168)](_0x16d666(0xef)),$[_0x16d666(0x168)]('CookieJD2'),...jsonParse($[_0x16d666(0x168)](_0x16d666(0xe0))||'[]')[_0x16d666(0xc9)](_0x2f84f5=>_0x2f84f5[_0x16d666(0x142)])]['filter'](_0x4a2e3c=>!!_0x4a2e3c);const JD_API_HOST=_0x16d666(0x10e);!(async()=>{const _0x3e9d89=_0x16d666;if(!cookiesArr[0x0]){$['msg']($[_0x3e9d89(0x14f)],_0x3e9d89(0x105),_0x3e9d89(0x159),{'open-url':_0x3e9d89(0x159)});return;}for(let _0x9063e6=0x0;_0x9063e6<cookiesArr['length'];_0x9063e6++){if(cookiesArr[_0x9063e6]){cookie=cookiesArr[_0x9063e6],$['UserName']=decodeURIComponent(cookie[_0x3e9d89(0xb8)](/pt_pin=([^; ]+)(?=;?)/)&&cookie['match'](/pt_pin=([^; ]+)(?=;?)/)[0x1]),$[_0x3e9d89(0x104)]=_0x9063e6+0x1,$[_0x3e9d89(0x12a)]=!![],$['nickName']='',message='',await TotalBean(),console[_0x3e9d89(0x122)](_0x3e9d89(0x16c)+$[_0x3e9d89(0x104)]+'】'+($['nickName']||$[_0x3e9d89(0xbf)])+_0x3e9d89(0x11d));if(!$[_0x3e9d89(0x12a)]){$[_0x3e9d89(0x140)]($[_0x3e9d89(0x14f)],_0x3e9d89(0x15e),_0x3e9d89(0xe4)+$[_0x3e9d89(0x104)]+'\x20'+($[_0x3e9d89(0x107)]||$[_0x3e9d89(0xbf)])+'\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action',{'open-url':_0x3e9d89(0x159)});$[_0x3e9d89(0x14c)]()&&await notify[_0x3e9d89(0x12f)]($[_0x3e9d89(0x14f)]+_0x3e9d89(0x12e)+$[_0x3e9d89(0xbf)],_0x3e9d89(0xe4)+$[_0x3e9d89(0x104)]+'\x20'+$[_0x3e9d89(0xbf)]+'\x0a请重新登录获取cookie');continue;}await jdHealth();}}})()[_0x16d666(0x116)](_0x241fb4=>{const _0x54b5b5=_0x16d666;$[_0x54b5b5(0x122)]('','❌\x20'+$['name']+',\x20失败!\x20原因:\x20'+_0x241fb4+'!','');})[_0x16d666(0x120)](()=>{$['done']();});async function jdHealth(){const _0x33fa3b=_0x16d666;$[_0x33fa3b(0x13f)]=0x0,await getTaskList(),await sign(),message+=_0x33fa3b(0x129)+$[_0x33fa3b(0x13f)]+_0x33fa3b(0xd2),await showMsg();}function getTs(){const _0x4d217f=_0x16d666;return new Date()[_0x4d217f(0xfd)]()+new Date()[_0x4d217f(0xee)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8;}function showMsg(){return new Promise(_0xd2a227=>{const _0x17420e=_0x4d86;!jdNotify?$[_0x17420e(0x140)]($[_0x17420e(0x14f)],'',''+message):$[_0x17420e(0x122)](_0x17420e(0xe4)+$[_0x17420e(0x104)]+$[_0x17420e(0x107)]+'\x0a'+message),_0xd2a227();});}function getTaskList(){const _0x54e582=_0x16d666;let _0x43eccf={'timestamp':new Date()['getTime']()+new Date()[_0x54e582(0xee)]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8};return new Promise(_0x1e275b=>{$['get'](taskUrl('liveChannelTaskListToM',_0x43eccf),async(_0x598e18,_0x26fef3,_0x296958)=>{const _0x4b8477=_0x4d86;try{_0x598e18?(console[_0x4b8477(0x122)](''+JSON[_0x4b8477(0xec)](_0x598e18)),console[_0x4b8477(0x122)]($[_0x4b8477(0x14f)]+'\x20API请求失败，请检查网路重试')):safeGet(_0x296958)&&(_0x296958=JSON[_0x4b8477(0x106)](_0x296958),await superTask(),await awardTask(_0x4b8477(0xed)),console[_0x4b8477(0x122)](_0x4b8477(0x136)),await shareTask(),await awardTask(),console[_0x4b8477(0x122)](_0x4b8477(0x14e)),await viewTask(),await awardTask(_0x4b8477(0xdf)));}catch(_0x252ac6){$[_0x4b8477(0x125)](_0x252ac6,_0x26fef3);}finally{_0x1e275b(_0x296958);}});});}function superTask(){const _0xa8e07=_0x16d666;let _0x1f0e16=_0xa8e07(0xc2);return new Promise(_0x14b060=>{const _0x3476f7=_0xa8e07;$[_0x3476f7(0x10b)](taskPostUrl('liveChannelReportDataV912',_0x1f0e16),async(_0x889622,_0x5386ab,_0x51fe8d)=>{const _0xa940de=_0x3476f7;try{_0x889622?(console['log'](''+JSON[_0xa940de(0xec)](_0x889622)),console[_0xa940de(0x122)]($['name']+_0xa940de(0x132))):safeGet(_0x51fe8d)&&(_0x51fe8d=JSON[_0xa940de(0x106)](_0x51fe8d));}catch(_0x1566d8){$['logErr'](_0x1566d8,_0x5386ab);}finally{_0x14b060(_0x51fe8d);}});});}function viewTask(){let _0x15a4a2='body=%7B%22liveId%22%3A%223008300%22%2C%22type%22%3A%22viewTask%22%2C%22authorId%22%3A%22644894%22%2C%22extra%22%3A%7B%22time%22%3A120%7D%7D&build=167408&client=apple&clientVersion=9.2.0&eid=eidIF3CF0112RTIyQTVGQTEtRDVCQy00Qg%3D%3D6HAJa9%2B/4Vedgo62xKQRoAb47%2Bpyu1EQs/6971aUvk0BQAsZLyQAYeid%2BPgbJ9BQoY1RFtkLCLP5OMqU&isBackground=N&joycious=194&openudid=53f4d9c70c1c81f1c8769d2fe2fef0190a3f60d2&osVersion=14.2&partner=TF&rfs=0000&scope=01&sign=90e14adc21c4bf31232a1ded5f4ba40e&st=1607561111999&sv=111&uts=0f31TVRjBSsxGLJHVBkddxFxBqY/8qFkrfEYLL0gkhB/JVGyEYIoD8r5rLvootZziQYAUyvIPogdJpesEuOMmvlisDx6AR2SEsfp381xPoggwvq8XaMYlOnHUV66TZiSfC%2BSgcLpB2v9cy/0Z41tT%2BuLheoEwBwDDYzANkZjncUI9PDCWpCg5/i0A14XfnsUTfQHbMqa3vwsY6QtsbNsgA%3D%3D&uuid=hjudwgohxzVu96krv/T6Hg%3D%3D';return new Promise(_0x4a8f58=>{const _0x1d46dd=_0x4d86;$[_0x1d46dd(0x10b)](taskPostUrl(_0x1d46dd(0x135),_0x15a4a2),async(_0x420818,_0x1aa44a,_0x13c85e)=>{const _0x49d612=_0x1d46dd;try{_0x420818?(console[_0x49d612(0x122)](''+JSON[_0x49d612(0xec)](_0x420818)),console[_0x49d612(0x122)]($['name']+_0x49d612(0x132))):safeGet(_0x13c85e)&&(_0x13c85e=JSON[_0x49d612(0x106)](_0x13c85e));}catch(_0x190abb){$[_0x49d612(0x125)](_0x190abb,_0x1aa44a);}finally{_0x4a8f58(_0x13c85e);}});});}function shareTask(){const _0x3d9720=_0x16d666;let _0x5709bd=_0x3d9720(0xe2);return new Promise(_0x5b320d=>{const _0xeaa983=_0x3d9720;$[_0xeaa983(0x10b)](taskPostUrl(_0xeaa983(0x135),_0x5709bd),async(_0x260045,_0x3f8c6d,_0x5c9c7f)=>{const _0x5d37ec=_0xeaa983;try{_0x260045?(console['log'](''+JSON[_0x5d37ec(0xec)](_0x260045)),console[_0x5d37ec(0x122)]($[_0x5d37ec(0x14f)]+'\x20API请求失败，请检查网路重试')):safeGet(_0x5c9c7f)&&(_0x5c9c7f=JSON[_0x5d37ec(0x106)](_0x5c9c7f));}catch(_0x517c5b){$[_0x5d37ec(0x125)](_0x517c5b,_0x3f8c6d);}finally{_0x5b320d(_0x5c9c7f);}});});}function awardTask(_0x429c9f='shareTask'){const _0x1c851a=_0x16d666;let _0x213c45=_0x1c851a(0xcb)+_0x429c9f+_0x1c851a(0x12d)+getTs();return new Promise(_0x1b76d2=>{const _0x17caad=_0x1c851a;$[_0x17caad(0x10b)](taskPostUrl(null,_0x213c45,_0x17caad(0xd1)),async(_0x50b147,_0x7d7d1d,_0x41b436)=>{const _0xbaf385=_0x17caad;try{_0x50b147?(console[_0xbaf385(0x122)](''+JSON[_0xbaf385(0xec)](_0x50b147)),console[_0xbaf385(0x122)]($[_0xbaf385(0x14f)]+_0xbaf385(0x132))):safeGet(_0x41b436)&&(_0x41b436=JSON['parse'](_0x41b436),_0x41b436['subCode']==='0'?($[_0xbaf385(0x13f)]+=_0x41b436['sum'],console[_0xbaf385(0x122)]('任务领奖成功，获得\x20'+_0x41b436[_0xbaf385(0x14b)]+_0xbaf385(0xd3)),message+=_0xbaf385(0x167)+_0x41b436[_0xbaf385(0x14b)]+_0xbaf385(0xd2)):console[_0xbaf385(0x122)]('任务领奖失败，'+_0x41b436[_0xbaf385(0x140)]));}catch(_0x1cd214){$[_0xbaf385(0x125)](_0x1cd214,_0x7d7d1d);}finally{_0x1b76d2(_0x41b436);}});});}function sign(){return new Promise(_0x8207c2=>{const _0x18573b=_0x4d86;$['get'](taskUrl(_0x18573b(0xf2),{'type':_0x18573b(0x111),'itemId':'1'}),async(_0x1e09e5,_0x579c99,_0x500dea)=>{const _0xcf2c39=_0x18573b;try{_0x1e09e5?(console['log'](''+JSON[_0xcf2c39(0xec)](_0x1e09e5)),console[_0xcf2c39(0x122)]($['name']+_0xcf2c39(0x132))):safeGet(_0x500dea)&&(_0x500dea=JSON[_0xcf2c39(0x106)](_0x500dea),_0x500dea[_0xcf2c39(0x139)]==='0'?($[_0xcf2c39(0x13f)]+=_0x500dea['sum'],console[_0xcf2c39(0x122)](_0xcf2c39(0xc8)+_0x500dea[_0xcf2c39(0x14b)]+_0xcf2c39(0xd3)),message+=_0xcf2c39(0x167)+_0x500dea['sum']+'\x20京豆\x0a'):console['log'](_0xcf2c39(0x141)+_0x500dea[_0xcf2c39(0x140)]));}catch(_0x33c8ef){$[_0xcf2c39(0x125)](_0x33c8ef,_0x579c99);}finally{_0x8207c2(_0x500dea);}});});}function taskPostUrl(_0x5bf093,_0x56b714={},_0x373456=null){const _0x24ec01=_0x16d666;if(!_0x373456)_0x373456=JD_API_HOST+_0x24ec01(0xfc)+_0x5bf093;return{'url':_0x373456,'body':_0x56b714,'headers':{'Cookie':cookie,'origin':_0x24ec01(0x155),'referer':_0x24ec01(0x11a),'Content-Type':_0x24ec01(0xe6),'User-Agent':$[_0x24ec01(0x14c)]()?process[_0x24ec01(0x166)][_0x24ec01(0xbe)]?process[_0x24ec01(0x166)]['JD_USER_AGENT']:require(_0x24ec01(0xf9))[_0x24ec01(0xde)]:$[_0x24ec01(0x168)](_0x24ec01(0xff))?$[_0x24ec01(0x168)](_0x24ec01(0xff)):_0x24ec01(0xd7)}};}function _0x4d86(_0x6414eb,_0x550e79){_0x6414eb=_0x6414eb-0xb7;let _0x3eb96c=_0x3eb9[_0x6414eb];return _0x3eb96c;}function taskUrl(_0x19ca45,_0x39943a={}){const _0x23b132=_0x16d666;return{'url':JD_API_HOST+_0x23b132(0xfc)+_0x19ca45+_0x23b132(0xdd)+escape(JSON[_0x23b132(0xec)](_0x39943a))+'&v='+(new Date()[_0x23b132(0xfd)]()+new Date()['getTimezoneOffset']()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8),'headers':{'Cookie':cookie,'origin':'https://h5.m.jd.com','referer':_0x23b132(0x11a),'Content-Type':_0x23b132(0xe6),'User-Agent':$[_0x23b132(0x14c)]()?process[_0x23b132(0x166)]['JD_USER_AGENT']?process[_0x23b132(0x166)][_0x23b132(0xbe)]:require('../USER_AGENTS')[_0x23b132(0xde)]:$['getdata'](_0x23b132(0xff))?$[_0x23b132(0x168)](_0x23b132(0xff)):'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1'}};}function TotalBean(){return new Promise(async _0x64ae6e=>{const _0x3a7d0f=_0x4d86,_0x11254a={'url':'https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2','headers':{'Accept':_0x3a7d0f(0xf7),'Content-Type':_0x3a7d0f(0xe6),'Accept-Encoding':_0x3a7d0f(0xf8),'Accept-Language':'zh-cn','Connection':'keep-alive','Cookie':cookie,'Referer':_0x3a7d0f(0x133),'User-Agent':$['isNode']()?process['env'][_0x3a7d0f(0xbe)]?process['env'][_0x3a7d0f(0xbe)]:require('../USER_AGENTS')['USER_AGENT']:$[_0x3a7d0f(0x168)](_0x3a7d0f(0xff))?$[_0x3a7d0f(0x168)]('JDUA'):'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1'}};$[_0x3a7d0f(0x10b)](_0x11254a,(_0x43dfcf,_0x2cc10e,_0x2960e5)=>{const _0xa8640e=_0x3a7d0f;try{if(_0x43dfcf)console[_0xa8640e(0x122)](''+JSON['stringify'](_0x43dfcf)),console[_0xa8640e(0x122)]($[_0xa8640e(0x14f)]+_0xa8640e(0x132));else{if(_0x2960e5){_0x2960e5=JSON[_0xa8640e(0x106)](_0x2960e5);if(_0x2960e5[_0xa8640e(0x138)]===0xd){$[_0xa8640e(0x12a)]=![];return;}_0x2960e5[_0xa8640e(0x138)]===0x0?$[_0xa8640e(0x107)]=_0x2960e5['base']&&_0x2960e5[_0xa8640e(0xc4)][_0xa8640e(0xbd)]||$[_0xa8640e(0xbf)]:$['nickName']=$[_0xa8640e(0xbf)];}else console[_0xa8640e(0x122)]('京东服务器返回空数据');}}catch(_0x52920f){$[_0xa8640e(0x125)](_0x52920f,_0x2cc10e);}finally{_0x64ae6e();}});});}function safeGet(_0x15f1a8){const _0x321742=_0x16d666;try{if(typeof JSON[_0x321742(0x106)](_0x15f1a8)==_0x321742(0xcc))return!![];}catch(_0x249d19){return console[_0x321742(0x122)](_0x249d19),console['log'](_0x321742(0x151)),![];}}function jsonParse(_0x2e950e){const _0x87db92=_0x16d666;if(typeof _0x2e950e==_0x87db92(0x100))try{return JSON['parse'](_0x2e950e);}catch(_0x1ca4cc){return console[_0x87db92(0x122)](_0x1ca4cc),$['msg']($[_0x87db92(0x14f)],'','请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie'),[];}}function Env(_0x5c814c,_0x4db379){const _0x4b6829=_0x16d666;_0x4b6829(0xc0)!=typeof process&&JSON[_0x4b6829(0xec)](process['env'])['indexOf'](_0x4b6829(0x150))>-0x1&&process[_0x4b6829(0x13d)](0x0);class _0x56236c{constructor(_0x14bb97){const _0x50915c=_0x4b6829;this[_0x50915c(0x166)]=_0x14bb97;}[_0x4b6829(0xd4)](_0x4994d1,_0x91acba='GET'){const _0xa5a51b=_0x4b6829;_0x4994d1=_0xa5a51b(0x100)==typeof _0x4994d1?{'url':_0x4994d1}:_0x4994d1;let _0x2b9401=this['get'];return _0xa5a51b(0xf4)===_0x91acba&&(_0x2b9401=this[_0xa5a51b(0x10b)]),new Promise((_0x2c8ca7,_0x132a3e)=>{_0x2b9401['call'](this,_0x4994d1,(_0x2b6d74,_0x4df80b,_0xf7ab15)=>{_0x2b6d74?_0x132a3e(_0x2b6d74):_0x2c8ca7(_0x4df80b);});});}[_0x4b6829(0xe1)](_0x9f63a4){const _0x18175a=_0x4b6829;return this['send']['call'](this[_0x18175a(0x166)],_0x9f63a4);}['post'](_0x199239){const _0x3e2e32=_0x4b6829;return this['send'][_0x3e2e32(0xb7)](this[_0x3e2e32(0x166)],_0x199239,_0x3e2e32(0xf4));}}return new class{constructor(_0x1407f2,_0x24d2f4){const _0x92546f=_0x4b6829;this['name']=_0x1407f2,this[_0x92546f(0x164)]=new _0x56236c(this),this[_0x92546f(0xce)]=null,this[_0x92546f(0xf0)]=_0x92546f(0x11e),this['logs']=[],this['isMute']=!0x1,this[_0x92546f(0x154)]=!0x1,this[_0x92546f(0xd6)]='\x0a',this[_0x92546f(0x14d)]=new Date()[_0x92546f(0xfd)](),Object['assign'](this,_0x24d2f4),this[_0x92546f(0x122)]('','🔔'+this[_0x92546f(0x14f)]+_0x92546f(0xbb));}[_0x4b6829(0x14c)](){const _0x4d53be=_0x4b6829;return _0x4d53be(0xc0)!=typeof module&&!!module[_0x4d53be(0x16a)];}['isQuanX'](){const _0x32440b=_0x4b6829;return _0x32440b(0xc0)!=typeof $task;}[_0x4b6829(0xfa)](){const _0x22212c=_0x4b6829;return _0x22212c(0xc0)!=typeof $httpClient&&'undefined'==typeof $loon;}[_0x4b6829(0x131)](){const _0x5e2c68=_0x4b6829;return _0x5e2c68(0xc0)!=typeof $loon;}['toObj'](_0x272570,_0x1c4081=null){const _0x43e94a=_0x4b6829;try{return JSON[_0x43e94a(0x106)](_0x272570);}catch{return _0x1c4081;}}['toStr'](_0x527344,_0x4d0432=null){const _0xad7c1=_0x4b6829;try{return JSON[_0xad7c1(0xec)](_0x527344);}catch{return _0x4d0432;}}['getjson'](_0x24762b,_0x2d8a20){const _0xd057e5=_0x4b6829;let _0x37c458=_0x2d8a20;const _0x10b009=this[_0xd057e5(0x168)](_0x24762b);if(_0x10b009)try{_0x37c458=JSON[_0xd057e5(0x106)](this['getdata'](_0x24762b));}catch{}return _0x37c458;}['setjson'](_0x5975c5,_0x40784b){try{return this['setdata'](JSON['stringify'](_0x5975c5),_0x40784b);}catch{return!0x1;}}[_0x4b6829(0xba)](_0x44ec21){return new Promise(_0x31b3cd=>{this['get']({'url':_0x44ec21},(_0x83d5d6,_0x5580b1,_0x65a15c)=>_0x31b3cd(_0x65a15c));});}['runScript'](_0x28b1cc,_0x344acc){const _0x6c3c69=_0x4b6829;return new Promise(_0x5a6d49=>{const _0x303db8=_0x4d86;let _0x3a7e61=this[_0x303db8(0x168)](_0x303db8(0x13a));_0x3a7e61=_0x3a7e61?_0x3a7e61[_0x303db8(0x15b)](/\n/g,'')[_0x303db8(0xc3)]():_0x3a7e61;let _0x4192a2=this[_0x303db8(0x168)](_0x303db8(0x128));_0x4192a2=_0x4192a2?0x1*_0x4192a2:0x14,_0x4192a2=_0x344acc&&_0x344acc['timeout']?_0x344acc['timeout']:_0x4192a2;const [_0x1a6651,_0x16f638]=_0x3a7e61[_0x303db8(0x147)]('@'),_0x5b6adb={'url':_0x303db8(0x109)+_0x16f638+'/v1/scripting/evaluate','body':{'script_text':_0x28b1cc,'mock_type':_0x303db8(0x13e),'timeout':_0x4192a2},'headers':{'X-Key':_0x1a6651,'Accept':_0x303db8(0x113)}};this[_0x303db8(0x10b)](_0x5b6adb,(_0x5beefb,_0x1a35d6,_0xf76a8e)=>_0x5a6d49(_0xf76a8e));})[_0x6c3c69(0x116)](_0x19942a=>this[_0x6c3c69(0x125)](_0x19942a));}[_0x4b6829(0x163)](){const _0x35ea9e=_0x4b6829;if(!this[_0x35ea9e(0x14c)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x35ea9e(0x148)]=this[_0x35ea9e(0x148)]?this['path']:require(_0x35ea9e(0x148));const _0x430050=this[_0x35ea9e(0x148)][_0x35ea9e(0xf1)](this[_0x35ea9e(0xf0)]),_0x3212c4=this[_0x35ea9e(0x148)][_0x35ea9e(0xf1)](process[_0x35ea9e(0x123)](),this[_0x35ea9e(0xf0)]),_0x2ca5d7=this['fs'][_0x35ea9e(0xc6)](_0x430050),_0x291c4c=!_0x2ca5d7&&this['fs']['existsSync'](_0x3212c4);if(!_0x2ca5d7&&!_0x291c4c)return{};{const _0x4399c8=_0x2ca5d7?_0x430050:_0x3212c4;try{return JSON[_0x35ea9e(0x106)](this['fs'][_0x35ea9e(0xda)](_0x4399c8));}catch(_0x24750f){return{};}}}}['writedata'](){const _0x2bc432=_0x4b6829;if(this[_0x2bc432(0x14c)]()){this['fs']=this['fs']?this['fs']:require('fs'),this['path']=this['path']?this[_0x2bc432(0x148)]:require(_0x2bc432(0x148));const _0x4bb8f5=this[_0x2bc432(0x148)][_0x2bc432(0xf1)](this[_0x2bc432(0xf0)]),_0x38b5cd=this['path'][_0x2bc432(0xf1)](process[_0x2bc432(0x123)](),this[_0x2bc432(0xf0)]),_0x516de0=this['fs'][_0x2bc432(0xc6)](_0x4bb8f5),_0x2fe4db=!_0x516de0&&this['fs']['existsSync'](_0x38b5cd),_0x34f6f9=JSON[_0x2bc432(0xec)](this[_0x2bc432(0xce)]);_0x516de0?this['fs'][_0x2bc432(0x121)](_0x4bb8f5,_0x34f6f9):_0x2fe4db?this['fs'][_0x2bc432(0x121)](_0x38b5cd,_0x34f6f9):this['fs']['writeFileSync'](_0x4bb8f5,_0x34f6f9);}}[_0x4b6829(0x110)](_0x150a6c,_0x5e46f5,_0x558f0a){const _0x4010e0=_0x4b6829,_0x242c6b=_0x5e46f5['replace'](/\[(\d+)\]/g,_0x4010e0(0xe9))[_0x4010e0(0x147)]('.');let _0x39155a=_0x150a6c;for(const _0x549ebe of _0x242c6b)if(_0x39155a=Object(_0x39155a)[_0x549ebe],void 0x0===_0x39155a)return _0x558f0a;return _0x39155a;}[_0x4b6829(0x162)](_0x280e6c,_0x4a1c1c,_0x3a721d){const _0x41fae1=_0x4b6829;return Object(_0x280e6c)!==_0x280e6c?_0x280e6c:(Array[_0x41fae1(0x160)](_0x4a1c1c)||(_0x4a1c1c=_0x4a1c1c[_0x41fae1(0x152)]()[_0x41fae1(0xb8)](/[^.[\]]+/g)||[]),_0x4a1c1c[_0x41fae1(0x15a)](0x0,-0x1)['reduce']((_0x19c53e,_0xdafa9f,_0x462701)=>Object(_0x19c53e[_0xdafa9f])===_0x19c53e[_0xdafa9f]?_0x19c53e[_0xdafa9f]:_0x19c53e[_0xdafa9f]=Math[_0x41fae1(0xfb)](_0x4a1c1c[_0x462701+0x1])>>0x0==+_0x4a1c1c[_0x462701+0x1]?[]:{},_0x280e6c)[_0x4a1c1c[_0x4a1c1c[_0x41fae1(0x169)]-0x1]]=_0x3a721d,_0x280e6c);}[_0x4b6829(0x168)](_0x28d8dd){const _0x2c7512=_0x4b6829;let _0x553523=this[_0x2c7512(0xd0)](_0x28d8dd);if(/^@/[_0x2c7512(0x156)](_0x28d8dd)){const [,_0x53299b,_0x9f61ee]=/^@(.*?)\.(.*?)$/[_0x2c7512(0x134)](_0x28d8dd),_0x73d974=_0x53299b?this['getval'](_0x53299b):'';if(_0x73d974)try{const _0x55a024=JSON[_0x2c7512(0x106)](_0x73d974);_0x553523=_0x55a024?this[_0x2c7512(0x110)](_0x55a024,_0x9f61ee,''):_0x553523;}catch(_0x423be0){_0x553523='';}}return _0x553523;}['setdata'](_0x2c0106,_0x4dc44c){const _0x356471=_0x4b6829;let _0x20ebdb=!0x1;if(/^@/[_0x356471(0x156)](_0x4dc44c)){const [,_0x5a34ba,_0x5f3e79]=/^@(.*?)\.(.*?)$/[_0x356471(0x134)](_0x4dc44c),_0x476dfe=this[_0x356471(0xd0)](_0x5a34ba),_0x5579ad=_0x5a34ba?_0x356471(0x126)===_0x476dfe?null:_0x476dfe||'{}':'{}';try{const _0x9aeece=JSON[_0x356471(0x106)](_0x5579ad);this[_0x356471(0x162)](_0x9aeece,_0x5f3e79,_0x2c0106),_0x20ebdb=this[_0x356471(0xf5)](JSON[_0x356471(0xec)](_0x9aeece),_0x5a34ba);}catch(_0x3716fc){const _0x19879b={};this[_0x356471(0x162)](_0x19879b,_0x5f3e79,_0x2c0106),_0x20ebdb=this[_0x356471(0xf5)](JSON[_0x356471(0xec)](_0x19879b),_0x5a34ba);}}else _0x20ebdb=this[_0x356471(0xf5)](_0x2c0106,_0x4dc44c);return _0x20ebdb;}[_0x4b6829(0xd0)](_0x4cea5a){const _0x4fa967=_0x4b6829;return this[_0x4fa967(0xfa)]()||this[_0x4fa967(0x131)]()?$persistentStore[_0x4fa967(0x12b)](_0x4cea5a):this[_0x4fa967(0xeb)]()?$prefs['valueForKey'](_0x4cea5a):this[_0x4fa967(0x14c)]()?(this[_0x4fa967(0xce)]=this[_0x4fa967(0x163)](),this[_0x4fa967(0xce)][_0x4cea5a]):this['data']&&this['data'][_0x4cea5a]||null;}[_0x4b6829(0xf5)](_0x490c3a,_0x4a21e3){const _0x1769b6=_0x4b6829;return this['isSurge']()||this[_0x1769b6(0x131)]()?$persistentStore[_0x1769b6(0x119)](_0x490c3a,_0x4a21e3):this[_0x1769b6(0xeb)]()?$prefs[_0x1769b6(0xd8)](_0x490c3a,_0x4a21e3):this[_0x1769b6(0x14c)]()?(this['data']=this[_0x1769b6(0x163)](),this[_0x1769b6(0xce)][_0x4a21e3]=_0x490c3a,this[_0x1769b6(0x13b)](),!0x0):this[_0x1769b6(0xce)]&&this['data'][_0x4a21e3]||null;}[_0x4b6829(0x146)](_0x5d920d){const _0xc402ed=_0x4b6829;this['got']=this[_0xc402ed(0x153)]?this['got']:require(_0xc402ed(0x153)),this[_0xc402ed(0x145)]=this[_0xc402ed(0x145)]?this[_0xc402ed(0x145)]:require(_0xc402ed(0xc7)),this[_0xc402ed(0x10a)]=this[_0xc402ed(0x10a)]?this[_0xc402ed(0x10a)]:new this['cktough'][(_0xc402ed(0x16b))](),_0x5d920d&&(_0x5d920d['headers']=_0x5d920d['headers']?_0x5d920d[_0xc402ed(0xd9)]:{},void 0x0===_0x5d920d[_0xc402ed(0xd9)][_0xc402ed(0x101)]&&void 0x0===_0x5d920d[_0xc402ed(0xdb)]&&(_0x5d920d[_0xc402ed(0xdb)]=this['ckjar']));}[_0x4b6829(0xe1)](_0x25908d,_0x2744d9=()=>{}){const _0x5892b8=_0x4b6829;_0x25908d[_0x5892b8(0xd9)]&&(delete _0x25908d[_0x5892b8(0xd9)][_0x5892b8(0x13c)],delete _0x25908d[_0x5892b8(0xd9)]['Content-Length']),this[_0x5892b8(0xfa)]()||this[_0x5892b8(0x131)]()?(this[_0x5892b8(0xfa)]()&&this['isNeedRewrite']&&(_0x25908d[_0x5892b8(0xd9)]=_0x25908d['headers']||{},Object[_0x5892b8(0x112)](_0x25908d[_0x5892b8(0xd9)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x5892b8(0xe1)](_0x25908d,(_0x392d13,_0x4c3ca3,_0x2835af)=>{const _0x2b0a6f=_0x5892b8;!_0x392d13&&_0x4c3ca3&&(_0x4c3ca3[_0x2b0a6f(0x15c)]=_0x2835af,_0x4c3ca3[_0x2b0a6f(0xe5)]=_0x4c3ca3[_0x2b0a6f(0xca)]),_0x2744d9(_0x392d13,_0x4c3ca3,_0x2835af);})):this[_0x5892b8(0xeb)]()?(this[_0x5892b8(0x154)]&&(_0x25908d[_0x5892b8(0x124)]=_0x25908d[_0x5892b8(0x124)]||{},Object[_0x5892b8(0x112)](_0x25908d[_0x5892b8(0x124)],{'hints':!0x1})),$task[_0x5892b8(0x165)](_0x25908d)[_0x5892b8(0x103)](_0x320992=>{const {statusCode:_0x10c737,statusCode:_0x346108,headers:_0x42be6d,body:_0x5dcfb0}=_0x320992;_0x2744d9(null,{'status':_0x10c737,'statusCode':_0x346108,'headers':_0x42be6d,'body':_0x5dcfb0},_0x5dcfb0);},_0x1eb06c=>_0x2744d9(_0x1eb06c))):this['isNode']()&&(this[_0x5892b8(0x146)](_0x25908d),this[_0x5892b8(0x153)](_0x25908d)['on'](_0x5892b8(0x114),(_0x3ee53b,_0x389b05)=>{const _0x2085b1=_0x5892b8;try{if(_0x3ee53b[_0x2085b1(0xd9)]['set-cookie']){const _0xa533a3=_0x3ee53b[_0x2085b1(0xd9)][_0x2085b1(0xc1)][_0x2085b1(0xc9)](this['cktough']['Cookie']['parse'])[_0x2085b1(0x152)]();_0xa533a3&&this['ckjar'][_0x2085b1(0x102)](_0xa533a3,null),_0x389b05[_0x2085b1(0xdb)]=this[_0x2085b1(0x10a)];}}catch(_0x619921){this[_0x2085b1(0x125)](_0x619921);}})[_0x5892b8(0x103)](_0x55e71d=>{const {statusCode:_0x1e4925,statusCode:_0x2a7dbd,headers:_0x5e8bb8,body:_0x281cfa}=_0x55e71d;_0x2744d9(null,{'status':_0x1e4925,'statusCode':_0x2a7dbd,'headers':_0x5e8bb8,'body':_0x281cfa},_0x281cfa);},_0x41f2fa=>{const {message:_0x26cc10,response:_0x2ca44b}=_0x41f2fa;_0x2744d9(_0x26cc10,_0x2ca44b,_0x2ca44b&&_0x2ca44b['body']);}));}['post'](_0x5f093c,_0x37ce23=()=>{}){const _0xf632b3=_0x4b6829;if(_0x5f093c[_0xf632b3(0x15c)]&&_0x5f093c['headers']&&!_0x5f093c[_0xf632b3(0xd9)][_0xf632b3(0x13c)]&&(_0x5f093c[_0xf632b3(0xd9)][_0xf632b3(0x13c)]=_0xf632b3(0xe6)),_0x5f093c[_0xf632b3(0xd9)]&&delete _0x5f093c[_0xf632b3(0xd9)]['Content-Length'],this[_0xf632b3(0xfa)]()||this[_0xf632b3(0x131)]())this[_0xf632b3(0xfa)]()&&this[_0xf632b3(0x154)]&&(_0x5f093c['headers']=_0x5f093c[_0xf632b3(0xd9)]||{},Object['assign'](_0x5f093c['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0xf632b3(0x10b)](_0x5f093c,(_0x24bdfe,_0x3e1411,_0x292971)=>{const _0x4434e9=_0xf632b3;!_0x24bdfe&&_0x3e1411&&(_0x3e1411['body']=_0x292971,_0x3e1411[_0x4434e9(0xe5)]=_0x3e1411['status']),_0x37ce23(_0x24bdfe,_0x3e1411,_0x292971);});else{if(this['isQuanX']())_0x5f093c[_0xf632b3(0x130)]=_0xf632b3(0xf4),this[_0xf632b3(0x154)]&&(_0x5f093c[_0xf632b3(0x124)]=_0x5f093c[_0xf632b3(0x124)]||{},Object[_0xf632b3(0x112)](_0x5f093c[_0xf632b3(0x124)],{'hints':!0x1})),$task[_0xf632b3(0x165)](_0x5f093c)[_0xf632b3(0x103)](_0x4537ff=>{const {statusCode:_0x55c484,statusCode:_0x50f969,headers:_0x4d0d89,body:_0x382208}=_0x4537ff;_0x37ce23(null,{'status':_0x55c484,'statusCode':_0x50f969,'headers':_0x4d0d89,'body':_0x382208},_0x382208);},_0x4b6101=>_0x37ce23(_0x4b6101));else{if(this[_0xf632b3(0x14c)]()){this[_0xf632b3(0x146)](_0x5f093c);const {url:_0x56c951,..._0x4efbcb}=_0x5f093c;this[_0xf632b3(0x153)][_0xf632b3(0x10b)](_0x56c951,_0x4efbcb)['then'](_0x426b4d=>{const {statusCode:_0x5f3c51,statusCode:_0x4e46b2,headers:_0x5c285e,body:_0x6662a3}=_0x426b4d;_0x37ce23(null,{'status':_0x5f3c51,'statusCode':_0x4e46b2,'headers':_0x5c285e,'body':_0x6662a3},_0x6662a3);},_0x3a747e=>{const _0x273f25=_0xf632b3,{message:_0x3bee88,response:_0x12ec2b}=_0x3a747e;_0x37ce23(_0x3bee88,_0x12ec2b,_0x12ec2b&&_0x12ec2b[_0x273f25(0x15c)]);});}}}}[_0x4b6829(0x11c)](_0x4daa28,_0x36a59c=null){const _0x3bfc89=_0x4b6829,_0x1b97ae=_0x36a59c?new Date(_0x36a59c):new Date();let _0x27c574={'M+':_0x1b97ae['getMonth']()+0x1,'d+':_0x1b97ae[_0x3bfc89(0x158)](),'H+':_0x1b97ae[_0x3bfc89(0xdc)](),'m+':_0x1b97ae[_0x3bfc89(0xf3)](),'s+':_0x1b97ae['getSeconds'](),'q+':Math['floor']((_0x1b97ae[_0x3bfc89(0xe7)]()+0x3)/0x3),'S':_0x1b97ae[_0x3bfc89(0xcf)]()};/(y+)/[_0x3bfc89(0x156)](_0x4daa28)&&(_0x4daa28=_0x4daa28[_0x3bfc89(0x15b)](RegExp['$1'],(_0x1b97ae['getFullYear']()+'')[_0x3bfc89(0x10d)](0x4-RegExp['$1'][_0x3bfc89(0x169)])));for(let _0x3660f5 in _0x27c574)new RegExp('('+_0x3660f5+')')[_0x3bfc89(0x156)](_0x4daa28)&&(_0x4daa28=_0x4daa28[_0x3bfc89(0x15b)](RegExp['$1'],0x1==RegExp['$1'][_0x3bfc89(0x169)]?_0x27c574[_0x3660f5]:('00'+_0x27c574[_0x3660f5])[_0x3bfc89(0x10d)]((''+_0x27c574[_0x3660f5])['length'])));return _0x4daa28;}[_0x4b6829(0x140)](_0x4df55f=_0x5c814c,_0x553d23='',_0x5a183a='',_0x42966a){const _0x3a02cc=_0x4b6829,_0xd41e37=_0x5c9e51=>{const _0x473793=_0x4d86;if(!_0x5c9e51)return _0x5c9e51;if(_0x473793(0x100)==typeof _0x5c9e51)return this[_0x473793(0x131)]()?_0x5c9e51:this[_0x473793(0xeb)]()?{'open-url':_0x5c9e51}:this['isSurge']()?{'url':_0x5c9e51}:void 0x0;if(_0x473793(0xcc)==typeof _0x5c9e51){if(this[_0x473793(0x131)]()){let _0x1535ea=_0x5c9e51[_0x473793(0x16f)]||_0x5c9e51[_0x473793(0xcd)]||_0x5c9e51[_0x473793(0x11f)],_0x562fce=_0x5c9e51['mediaUrl']||_0x5c9e51[_0x473793(0x161)];return{'openUrl':_0x1535ea,'mediaUrl':_0x562fce};}if(this['isQuanX']()){let _0x12ff8f=_0x5c9e51[_0x473793(0x11f)]||_0x5c9e51[_0x473793(0xcd)]||_0x5c9e51['openUrl'],_0x27d576=_0x5c9e51['media-url']||_0x5c9e51[_0x473793(0x157)];return{'open-url':_0x12ff8f,'media-url':_0x27d576};}if(this[_0x473793(0xfa)]()){let _0x3ec7f1=_0x5c9e51[_0x473793(0xcd)]||_0x5c9e51['openUrl']||_0x5c9e51[_0x473793(0x11f)];return{'url':_0x3ec7f1};}}};if(this[_0x3a02cc(0x137)]||(this[_0x3a02cc(0xfa)]()||this[_0x3a02cc(0x131)]()?$notification['post'](_0x4df55f,_0x553d23,_0x5a183a,_0xd41e37(_0x42966a)):this[_0x3a02cc(0xeb)]()&&$notify(_0x4df55f,_0x553d23,_0x5a183a,_0xd41e37(_0x42966a))),!this[_0x3a02cc(0x14a)]){let _0x1d7faf=['','==============📣系统通知📣=============='];_0x1d7faf[_0x3a02cc(0xb9)](_0x4df55f),_0x553d23&&_0x1d7faf[_0x3a02cc(0xb9)](_0x553d23),_0x5a183a&&_0x1d7faf[_0x3a02cc(0xb9)](_0x5a183a),console[_0x3a02cc(0x122)](_0x1d7faf[_0x3a02cc(0x16e)]('\x0a')),this[_0x3a02cc(0x11b)]=this[_0x3a02cc(0x11b)]['concat'](_0x1d7faf);}}[_0x4b6829(0x122)](..._0x15e828){const _0x50ab7e=_0x4b6829;_0x15e828[_0x50ab7e(0x169)]>0x0&&(this[_0x50ab7e(0x11b)]=[...this[_0x50ab7e(0x11b)],..._0x15e828]),console['log'](_0x15e828[_0x50ab7e(0x16e)](this[_0x50ab7e(0xd6)]));}[_0x4b6829(0x125)](_0x17b32c,_0x54b3ca){const _0x1a4240=_0x4b6829,_0x38b796=!this[_0x1a4240(0xfa)]()&&!this[_0x1a4240(0xeb)]()&&!this[_0x1a4240(0x131)]();_0x38b796?this[_0x1a4240(0x122)]('','❗️'+this[_0x1a4240(0x14f)]+',\x20错误!',_0x17b32c[_0x1a4240(0x15f)]):this[_0x1a4240(0x122)]('','❗️'+this[_0x1a4240(0x14f)]+_0x1a4240(0xfe),_0x17b32c);}[_0x4b6829(0x10f)](_0x186be4){return new Promise(_0x232e32=>setTimeout(_0x232e32,_0x186be4));}[_0x4b6829(0xf6)](_0x2dc14e={}){const _0x21c073=_0x4b6829,_0x50da57=new Date()[_0x21c073(0xfd)](),_0x150b51=(_0x50da57-this[_0x21c073(0x14d)])/0x3e8;this[_0x21c073(0x122)]('','🔔'+this[_0x21c073(0x14f)]+_0x21c073(0x149)+_0x150b51+'\x20秒'),this[_0x21c073(0x122)](),(this[_0x21c073(0xfa)]()||this[_0x21c073(0xeb)]()||this[_0x21c073(0x131)]())&&$done(_0x2dc14e);}}(_0x5c814c,_0x4db379);}

