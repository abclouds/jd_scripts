/*
东东超市兑换奖品 脚本地址：https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_blueCoin.js
更新时间：2021-3-2
活动入口：京东APP我的-更多工具-东东超市
支持京东多个账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============QuantumultX==============
[task_local]
#东东超市兑换奖品
0 0 0 * * * https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_blueCoin.js, tag=东东超市兑换奖品, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jxc.png, enabled=true

====================Loon=================
[Script]
cron "0 0 0 * * *" script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_blueCoin.js,tag=东东超市兑换奖品

===================Surge==================
东东超市兑换奖品 = type=cron,cronexp="0 0 0 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_blueCoin.js

============小火箭=========
东东超市兑换奖品 = type=cron,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_blueCoin.js, cronexpr="0 0 0 * * *", timeout=3600, enable=true
 */
const _0x57bc=['JD_DEBUG','bizMsg','@chavy_boxjs_userCfgs.httpapi_timeout','==============📣系统通知📣==============','base','redirect','京东服务器返回空数据','getHours','api.m.jd.com','open-url','setValueForKey','lodash_set','lodash_get','debug\x20兑换京豆活动火爆次数:','cookieJar','resolve','成功，数量：','getFullYear','isArray','【提示】cookie已失效','dataFile',',\x20开始!','result','https://jdsupermarket.jd.com','isNode','isNeedRewrite','失败，您输入设置的','setCookieSync','logSeparator','path','concat','兑换失败,您目前蓝币','retcode','POST','【总蓝币】','589934XogWRQ','targetNum','totalGold','url','查询换','&t=','zh-cn','index','东东超市兑换奖品','http','keys','coincount','GITHUB','application/json,text/plain,\x20*/*','****\x0a','indexOf','&functionId=','https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2','领光了，请明天再来','beanerr','兑换结果:','beanscount','https://bean.m.jd.com/bean/signIndex.action','286963bNDrqP','../jdCookie.js','\x0a****开始【京东账号','beanType','replace','errBizCodeCount','test','\x0a\x0a温馨提示：需兑换商品的名称设置请尽量与其他商品有区分度，否则可能会兑换成其他类似商品\x0a\x0a','./USER_AGENTS','exports','push','UserName','stringify','slice','timeout','\x0a东东超市兑换奖品:\x20API查询请求失败\x20‼️‼️','查询换万能的京豆ID失败','toObj','logErr','wait','msg','&functionId=smtg_materialPrizeIndex&clientVersion=8.0.0&client=m&body=%7B%22channel%22:%221%22%7D&t=',',\x20错误!','totalBlue','ID成功，ID:','time','send','done','media-url','log','cwd','MARKET_REWARD_NOTIFY','valueForKey','forEach','application/x-www-form-urlencoded','finally','object','CookieJar','coinToBeans','coinerr','read','京东服务器访问数据为空，请检查自身设备网络情况','Cookie','isMute','setdata','GET','cookie','floor','东哥今天不给换','getval','split','blueCost','inStock','existsSync','529xcIbsO','reduce','nickName','https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2','match','false','cktough','map','getDate','.$1','533NcDSib','失败，1000京豆领光了，请明天再来','status','runScript','body','opts','&functionId=smtg_queryPrize&clientVersion=8.0.0&client=m&body=%7B%7D&t=','奖品兑换列表[','京东账号','nickname','startTime','writeFileSync','isLogin','join','setval','fetch','exchangeNum','1000','all','104045CdESuz','https://jdsupermarket.jd.com/game/?tt=1597540727225',',\x20结束!\x20🕛\x20','env','个,不足以兑换','719257JzZoWP','keep-alive','isSurge','请勿随意在BoxJs输入框修改内容\x0a建议通过脚本去获取cookie','filter','materialPrizeIndex','initGotEnv','toStr','12487XbTKob','finishNum','getSeconds','【提示】请先获取cookie','cron','now','substr','bizCode','length','isLoon','JDUA','smtg_obtainPrize','type','blue','post','catch','undefined','openUrl','assign','isQuanX','【京东账号','gzip,\x20deflate,\x20br','jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1','\x0a【京东账号','https://jdsupermarket.jd.com/game','data','JD_USER_AGENT','abs','10684dhxKnU','set-cookie','CookieJD2','prizes','CookieJD','您设置的是不兑换奖品','application/json,\x20text/plain,\x20*/*','prizeId','ctrTemp','5mxaLXP','ckjar','MARKET_COIN_TO_BEANS','string','29FVRiht','\x0a请重新登录获取\x0ahttps://bean.m.jd.com/bean/signIndex.action','loaddata','\x0a请重新登录获取cookie','queryPrizeData','Content-Length','tough-cookie','Bean','USER_AGENT','prizeList','getdata','*/*','then','null','sendNotify','exec','got','title','box.dat','mediaUrl','所需的','&clientVersion=8.0.0&client=m&body=','logs','Content-Type','../sendNotify','parse','CookiesJD','BeanPackage','call','headers','getMonth','subTitle','name','【兑换','toString','get'];const _0x1a4fad=_0x239b;(function(_0x444a98,_0x234bb6){const _0xea5a93=_0x239b;while(!![]){try{const _0x55b513=-parseInt(_0xea5a93(0x247))+parseInt(_0xea5a93(0x21d))*-parseInt(_0xea5a93(0x227))+-parseInt(_0xea5a93(0x23a))*-parseInt(_0xea5a93(0x26c))+-parseInt(_0xea5a93(0x1d0))+parseInt(_0xea5a93(0x1e7))+parseInt(_0xea5a93(0x263))*-parseInt(_0xea5a93(0x270))+parseInt(_0xea5a93(0x23f));if(_0x55b513===_0x234bb6)break;else _0x444a98['push'](_0x444a98['shift']());}catch(_0x130d97){_0x444a98['push'](_0x444a98['shift']());}}}(_0x57bc,0x511c7));const $=new Env(_0x1a4fad(0x1d8)),notify=$[_0x1a4fad(0x1c5)]()?require(_0x1a4fad(0x288)):'';let allMessage='';const jdCookieNode=$[_0x1a4fad(0x1c5)]()?require(_0x1a4fad(0x1e8)):'';let coinToBeans=$[_0x1a4fad(0x27a)](_0x1a4fad(0x20d))||0x0,jdNotify=![],cookiesArr=[],cookie='';if($[_0x1a4fad(0x1c5)]()){Object[_0x1a4fad(0x1da)](jdCookieNode)[_0x1a4fad(0x208)](_0x365977=>{cookiesArr['push'](jdCookieNode[_0x365977]);});if(process[_0x1a4fad(0x23d)][_0x1a4fad(0x294)]&&process[_0x1a4fad(0x23d)][_0x1a4fad(0x294)]===_0x1a4fad(0x222))console[_0x1a4fad(0x204)]=()=>{};}else cookiesArr=[$[_0x1a4fad(0x27a)](_0x1a4fad(0x267)),$[_0x1a4fad(0x27a)](_0x1a4fad(0x265)),...jsonParse($[_0x1a4fad(0x27a)](_0x1a4fad(0x28a))||'[]')[_0x1a4fad(0x224)](_0x27d2d7=>_0x27d2d7[_0x1a4fad(0x215)])][_0x1a4fad(0x243)](_0x7845e7=>!!_0x7845e7);const JD_API_HOST='https://api.m.jd.com/api?appid=jdsupermarket';!(async()=>{const _0x10bb87=_0x1a4fad;if(!cookiesArr[0x0]){$[_0x10bb87(0x1fb)]($['name'],_0x10bb87(0x24a),_0x10bb87(0x1e6),{'open-url':_0x10bb87(0x1e6)});return;}for(let _0x13d0b5=0x0;_0x13d0b5<cookiesArr[_0x10bb87(0x24f)];_0x13d0b5++){cookie=cookiesArr[_0x13d0b5];if(cookie){$[_0x10bb87(0x1f2)]=decodeURIComponent(cookie[_0x10bb87(0x221)](/pt_pin=([^; ]+)(?=;?)/)&&cookie[_0x10bb87(0x221)](/pt_pin=([^; ]+)(?=;?)/)[0x1]),$[_0x10bb87(0x1d7)]=_0x13d0b5+0x1,$['data']={},$[_0x10bb87(0x1db)]=0x0,$['beanscount']=0x0,$[_0x10bb87(0x21a)]=0x0,$[_0x10bb87(0x1ec)]=0x0,$[_0x10bb87(0x20e)]='',$[_0x10bb87(0x1e3)]='',$[_0x10bb87(0x281)]='',$[_0x10bb87(0x233)]=!![],$['nickName']='',console[_0x10bb87(0x204)](_0x10bb87(0x1e9)+$[_0x10bb87(0x1d7)]+'】'+($[_0x10bb87(0x21f)]||$[_0x10bb87(0x1f2)])+_0x10bb87(0x1de));if(!$[_0x10bb87(0x233)]){$[_0x10bb87(0x1fb)]($['name'],_0x10bb87(0x1c0),'京东账号'+$[_0x10bb87(0x1d7)]+'\x20'+($[_0x10bb87(0x21f)]||$[_0x10bb87(0x1f2)])+_0x10bb87(0x271),{'open-url':'https://bean.m.jd.com/bean/signIndex.action'});$['isNode']()&&await notify[_0x10bb87(0x27e)]($[_0x10bb87(0x290)]+'cookie已失效\x20-\x20'+$[_0x10bb87(0x1f2)],_0x10bb87(0x22f)+$['index']+'\x20'+($[_0x10bb87(0x1f2)]||$[_0x10bb87(0x1f2)])+_0x10bb87(0x273));continue;}$[_0x10bb87(0x1c5)]()&&(process[_0x10bb87(0x23d)][_0x10bb87(0x26e)]&&(coinToBeans=process['env']['MARKET_COIN_TO_BEANS']));try{''+coinToBeans!=='0'?(await smtgHome(),await PrizeIndex()):console[_0x10bb87(0x204)]('查询到您设置的是不兑换京豆选项，现在为您跳过兑换京豆。如需兑换，请去BoxJs设置或者修改脚本coinToBeans或设置环境变量MARKET_COIN_TO_BEANS\x0a'),await msgShow();}catch(_0x2f394c){$['logErr'](_0x2f394c);}}}$[_0x10bb87(0x1c5)]()&&allMessage&&$['ctrTemp']&&await notify['sendNotify'](''+$[_0x10bb87(0x290)],''+allMessage);})()[_0x1a4fad(0x256)](_0x2b9903=>$['logErr'](_0x2b9903))[_0x1a4fad(0x20a)](()=>$[_0x1a4fad(0x202)]());async function PrizeIndex(){const _0x1a5652=_0x1a4fad;await Promise[_0x1a5652(0x239)]([smtg_queryPrize(),smtg_materialPrizeIndex()]);const _0x3c2576=[...$[_0x1a5652(0x274)],...$[_0x1a5652(0x244)]];if(_0x3c2576&&_0x3c2576[_0x1a5652(0x24f)]){if(''+coinToBeans===_0x1a5652(0x238)){if(_0x3c2576[0x1]&&_0x3c2576[0x1]['beanType']===_0x1a5652(0x28b))console[_0x1a5652(0x204)](_0x1a5652(0x1d4)+_0x3c2576[0x1][_0x1a5652(0x281)]+'ID成功，ID:'+_0x3c2576[0x1][_0x1a5652(0x26a)]),$[_0x1a5652(0x281)]=_0x3c2576[0x1][_0x1a5652(0x281)],$[_0x1a5652(0x21a)]=_0x3c2576[0x1][_0x1a5652(0x21a)];else{console[_0x1a5652(0x204)]('查询换1000京豆ID失败'),$[_0x1a5652(0x1e3)]=_0x1a5652(0x217);return;}if(_0x3c2576[0x1]&&_0x3c2576[0x1][_0x1a5652(0x21b)]===0x1fa){$[_0x1a5652(0x1e3)]=_0x1a5652(0x228);return;}if(_0x3c2576[0x1]&&_0x3c2576[0x1][_0x1a5652(0x1d1)]===_0x3c2576[0x1]&&_0x3c2576[0x1][_0x1a5652(0x248)]){$[_0x1a5652(0x1e3)]=''+_0x3c2576[0x1][_0x1a5652(0x28f)];return;}$[_0x1a5652(0x1fe)]>$[_0x1a5652(0x21a)]?await smtg_obtainPrize(_0x3c2576[0x1][_0x1a5652(0x26a)]):(console[_0x1a5652(0x204)](_0x1a5652(0x1cc)+$[_0x1a5652(0x1fe)]+_0x1a5652(0x23e)+$[_0x1a5652(0x281)]+_0x1a5652(0x284)+$['blueCost']+'个'),$['beanerr']=_0x1a5652(0x1cc)+$[_0x1a5652(0x1fe)]+_0x1a5652(0x23e)+$[_0x1a5652(0x281)]+_0x1a5652(0x284)+$[_0x1a5652(0x21a)]+'个');}else{if(''+coinToBeans==='20'){if(_0x3c2576[0x0]&&_0x3c2576[0x0][_0x1a5652(0x1ea)]===_0x1a5652(0x277))console['log'](_0x1a5652(0x1d4)+_0x3c2576[0x0][_0x1a5652(0x281)]+_0x1a5652(0x1ff)+_0x3c2576[0x0][_0x1a5652(0x26a)]),$[_0x1a5652(0x281)]=_0x3c2576[0x0][_0x1a5652(0x281)],$[_0x1a5652(0x21a)]=_0x3c2576[0x0]['blueCost'];else{console[_0x1a5652(0x204)](_0x1a5652(0x1f7)),$[_0x1a5652(0x1e3)]=_0x1a5652(0x217);return;}if(_0x3c2576[0x0]&&_0x3c2576[0x0][_0x1a5652(0x21b)]===0x1fa){console['log']('失败，万能的京豆领光了，请明天再来'),$[_0x1a5652(0x1e3)]='失败，万能的京豆领光了，请明天再来';return;}if((_0x3c2576[0x0]&&_0x3c2576[0x0][_0x1a5652(0x1d1)])===(_0x3c2576[0x0]&&_0x3c2576[0x0][_0x1a5652(0x248)])){$['beanerr']=''+_0x3c2576[0x0]['subTitle'];return;}$[_0x1a5652(0x1fe)]>$['blueCost']?await smtg_obtainPrize(_0x3c2576[0x0]['prizeId'],0x3e8):(console[_0x1a5652(0x204)](_0x1a5652(0x1cc)+$['totalBlue']+_0x1a5652(0x23e)+$[_0x1a5652(0x281)]+_0x1a5652(0x284)+$['blueCost']+'个'),$[_0x1a5652(0x1e3)]=_0x1a5652(0x1cc)+$[_0x1a5652(0x1fe)]+_0x1a5652(0x23e)+$[_0x1a5652(0x281)]+_0x1a5652(0x284)+$['blueCost']+'个');}else{console[_0x1a5652(0x204)](_0x1a5652(0x1ee));let _0x3fb346='',_0x19493e;for(let _0x524dca=0x0;_0x524dca<_0x3c2576[_0x1a5652(0x24f)];_0x524dca++){_0x3c2576[_0x524dca][_0x1a5652(0x281)][_0x1a5652(0x1df)](coinToBeans)>-0x1&&(_0x3fb346=_0x3c2576[_0x524dca][_0x1a5652(0x26a)],_0x19493e=_0x524dca,$[_0x1a5652(0x281)]=_0x3c2576[_0x524dca][_0x1a5652(0x281)],$[_0x1a5652(0x21a)]=_0x3c2576[_0x524dca][_0x1a5652(0x21a)],$[_0x1a5652(0x253)]=_0x3c2576[_0x524dca][_0x1a5652(0x253)],$['beanType']=_0x3c2576[_0x524dca]['hasOwnProperty'](_0x1a5652(0x1ea)));}if(_0x3fb346){if(_0x3c2576[_0x19493e]['inStock']===0x1fa||_0x3c2576[_0x19493e][_0x1a5652(0x21b)]===-0x1){console[_0x1a5652(0x204)](_0x1a5652(0x1c7)+coinToBeans+_0x1a5652(0x1e2)),$[_0x1a5652(0x1e3)]=_0x1a5652(0x1c7)+coinToBeans+_0x1a5652(0x1e2);return;}if(_0x3c2576[_0x19493e][_0x1a5652(0x1d1)]&&_0x3c2576[_0x19493e][_0x1a5652(0x1d1)]===_0x3c2576[_0x19493e][_0x1a5652(0x248)]){$['beanerr']=''+_0x3c2576[0x0]['subTitle'];return;}$['totalBlue']>$['blueCost']?$['type']===0x4&&!$[_0x1a5652(0x1ea)]?await smtg_obtainPrize(_0x3fb346,0x0,'smtg_lockMaterialPrize'):await smtg_obtainPrize(_0x3fb346):(console[_0x1a5652(0x204)](_0x1a5652(0x1cc)+$[_0x1a5652(0x1fe)]+_0x1a5652(0x23e)+$[_0x1a5652(0x281)]+_0x1a5652(0x284)+$['blueCost']+'个'),$[_0x1a5652(0x1e3)]=_0x1a5652(0x1cc)+$[_0x1a5652(0x1fe)]+_0x1a5652(0x23e)+$[_0x1a5652(0x281)]+'所需的'+$[_0x1a5652(0x21a)]+'个');}else console[_0x1a5652(0x204)]('奖品兑换列表['+coinToBeans+']已下架，请检查活动页面是否存在此商品，如存在请检查您的输入是否正确'),$[_0x1a5652(0x1e3)]=_0x1a5652(0x22e)+coinToBeans+']已下架';}}}}function smtg_materialPrizeIndex(_0x287074=0x0){return $['materialPrizeIndex']=[],new Promise(_0x53a2ae=>{setTimeout(()=>{const _0x627e7c=_0x239b;let _0xead227={'url':JD_API_HOST+_0x627e7c(0x1fc)+Date[_0x627e7c(0x24c)](),'headers':{'Origin':_0x627e7c(0x1c4),'Cookie':cookie,'Connection':_0x627e7c(0x240),'Accept':'application/json,\x20text/plain,\x20*/*','Referer':_0x627e7c(0x23b),'Host':_0x627e7c(0x29c),'Accept-Encoding':_0x627e7c(0x25c),'Accept-Language':_0x627e7c(0x1d6)}};$['post'](_0xead227,async(_0x18417d,_0x549d0c,_0x4173d1)=>{const _0x1c29c1=_0x627e7c;try{if(safeGet(_0x4173d1)){_0x4173d1=JSON[_0x1c29c1(0x289)](_0x4173d1);if(_0x4173d1['data'][_0x1c29c1(0x24e)]!==0x0){$[_0x1c29c1(0x1e3)]=''+_0x4173d1['data']['bizMsg'];return;}$[_0x1c29c1(0x244)]=_0x4173d1[_0x1c29c1(0x260)][_0x1c29c1(0x1c3)][_0x1c29c1(0x266)]||[];}}catch(_0x39e3ef){$[_0x1c29c1(0x1f9)](_0x39e3ef,_0x549d0c);}finally{_0x53a2ae();}});},_0x287074);});}function smtg_queryPrize(_0x15a1ae=0x0){return $['queryPrizeData']=[],new Promise(_0x4c2566=>{setTimeout(()=>{const _0x4bafca=_0x239b;let _0x2bba57={'url':JD_API_HOST+_0x4bafca(0x22d)+Date['now'](),'headers':{'Origin':_0x4bafca(0x1c4),'Cookie':cookie,'Connection':_0x4bafca(0x240),'Accept':_0x4bafca(0x269),'Referer':'https://jdsupermarket.jd.com/game/?tt=1597540727225','Host':_0x4bafca(0x29c),'Accept-Encoding':_0x4bafca(0x25c),'Accept-Language':_0x4bafca(0x1d6)}};$[_0x4bafca(0x255)](_0x2bba57,async(_0x633312,_0x1fb71c,_0x27d0d1)=>{const _0x178f5a=_0x4bafca;try{if(safeGet(_0x27d0d1)){_0x27d0d1=JSON['parse'](_0x27d0d1);if(_0x27d0d1[_0x178f5a(0x260)][_0x178f5a(0x24e)]!==0x0){console[_0x178f5a(0x204)](_0x27d0d1['data'][_0x178f5a(0x295)]+'\x0a'),$[_0x178f5a(0x1e3)]=''+_0x27d0d1[_0x178f5a(0x260)][_0x178f5a(0x295)];return;}if(_0x27d0d1[_0x178f5a(0x260)][_0x178f5a(0x24e)]===0x0){const {prizeList:_0x8183ad}=_0x27d0d1[_0x178f5a(0x260)][_0x178f5a(0x1c3)];$[_0x178f5a(0x274)]=_0x27d0d1[_0x178f5a(0x260)][_0x178f5a(0x1c3)][_0x178f5a(0x279)]||[];}}}catch(_0x587b4f){$['logErr'](_0x587b4f,_0x1fb71c);}finally{_0x4c2566();}});},_0x15a1ae);});}function smtg_obtainPrize(_0x453a82,_0x3fc966=0x0,_0x3e26b7=_0x1a4fad(0x252)){const _0x334da8={'prizeId':_0x453a82,'channel':'1'};return new Promise(_0x62c2fa=>{setTimeout(()=>{const _0x4ac653=_0x239b;let _0xdbb04c={'url':JD_API_HOST+_0x4ac653(0x1e0)+_0x3e26b7+_0x4ac653(0x285)+encodeURIComponent(JSON[_0x4ac653(0x1f3)](_0x334da8))+_0x4ac653(0x1d5)+Date[_0x4ac653(0x24c)](),'headers':{'Origin':_0x4ac653(0x1c4),'Cookie':cookie,'Connection':_0x4ac653(0x240),'Accept':'application/json,\x20text/plain,\x20*/*','Referer':_0x4ac653(0x23b),'Host':_0x4ac653(0x29c),'Accept-Encoding':'gzip,\x20deflate,\x20br','Accept-Language':_0x4ac653(0x1d6)}};$['post'](_0xdbb04c,async(_0x2d14fd,_0x49de19,_0xa2787b)=>{const _0x3a1a63=_0x4ac653;try{console[_0x3a1a63(0x204)](_0x3a1a63(0x1e4)+_0xa2787b);if(safeGet(_0xa2787b)){_0xa2787b=JSON[_0x3a1a63(0x289)](_0xa2787b),$[_0x3a1a63(0x260)]=_0xa2787b;if($[_0x3a1a63(0x260)][_0x3a1a63(0x260)][_0x3a1a63(0x24e)]!==0x0&&$[_0x3a1a63(0x260)]['data'][_0x3a1a63(0x24e)]!==0x6a){$[_0x3a1a63(0x1e3)]=''+$['data']['data'][_0x3a1a63(0x295)];return;}if($[_0x3a1a63(0x260)][_0x3a1a63(0x260)][_0x3a1a63(0x24e)]===0x6a){$['errBizCodeCount']++,console[_0x3a1a63(0x204)](_0x3a1a63(0x2a1)+$[_0x3a1a63(0x1ec)]);if($[_0x3a1a63(0x1ec)]>=0x14)return;}if($['data'][_0x3a1a63(0x260)][_0x3a1a63(0x24e)]===0x0){if(''+coinToBeans===_0x3a1a63(0x238)){$[_0x3a1a63(0x1e5)]++,console[_0x3a1a63(0x204)](_0x3a1a63(0x25b)+$[_0x3a1a63(0x1d7)]+'】'+($[_0x3a1a63(0x21f)]||$[_0x3a1a63(0x1f2)])+'\x20第'+$['data'][_0x3a1a63(0x260)][_0x3a1a63(0x1c3)]['exchangeNum']+'次换'+$['title']+'成功');if($['beanscount']===0x1)return;}else{if(''+coinToBeans==='20'){$[_0x3a1a63(0x1e5)]++,console[_0x3a1a63(0x204)]('【京东账号'+$[_0x3a1a63(0x1d7)]+'】'+($[_0x3a1a63(0x21f)]||$[_0x3a1a63(0x1f2)])+'\x20第'+$[_0x3a1a63(0x260)][_0x3a1a63(0x260)][_0x3a1a63(0x1c3)]['exchangeNum']+'次换'+$[_0x3a1a63(0x281)]+'成功');if($[_0x3a1a63(0x260)][_0x3a1a63(0x260)][_0x3a1a63(0x1c3)][_0x3a1a63(0x237)]===0x14||$[_0x3a1a63(0x1e5)]===coinToBeans||$[_0x3a1a63(0x260)][_0x3a1a63(0x260)][_0x3a1a63(0x1c3)][_0x3a1a63(0x254)]<0x1f4)return;}else{$[_0x3a1a63(0x1e5)]++,console['log'](_0x3a1a63(0x25b)+$[_0x3a1a63(0x1d7)]+'】'+($['nickName']||$['UserName'])+'\x20第'+$[_0x3a1a63(0x260)][_0x3a1a63(0x260)][_0x3a1a63(0x1c3)]['exchangeNum']+'次换'+$[_0x3a1a63(0x281)]+'成功');if($[_0x3a1a63(0x1e5)]===0x1)return;}}}}await smtg_obtainPrize(_0x453a82,0xbb8);}catch(_0x35af47){$[_0x3a1a63(0x1f9)](_0x35af47,_0x49de19);}finally{_0x62c2fa();}});},_0x3fc966);});}function smtgHome(){return new Promise(_0x3c4186=>{$['get'](taskUrl('smtg_home'),(_0x28a10a,_0x39baf5,_0x266d23)=>{const _0x2b494d=_0x239b;try{if(_0x28a10a)console[_0x2b494d(0x204)](_0x2b494d(0x1f6)),console[_0x2b494d(0x204)](JSON['stringify'](_0x28a10a));else{if(safeGet(_0x266d23)){_0x266d23=JSON[_0x2b494d(0x289)](_0x266d23);if(_0x266d23[_0x2b494d(0x260)]['bizCode']===0x0){const {result:_0x46cbc3}=_0x266d23['data'];$[_0x2b494d(0x1d2)]=_0x46cbc3['totalGold'],$[_0x2b494d(0x1fe)]=_0x46cbc3[_0x2b494d(0x1fe)],console['log'](_0x2b494d(0x1cf)+$[_0x2b494d(0x1fe)]+'个\x0a');}}}}catch(_0x3b1c4c){$[_0x2b494d(0x1f9)](_0x3b1c4c,_0x39baf5);}finally{_0x3c4186();}});});}function msgShow(){return new Promise(async _0x54e4f4=>{const _0xddb48b=_0x239b;$['log'](_0xddb48b(0x25e)+$[_0xddb48b(0x1d7)]+'】'+($[_0xddb48b(0x21f)]||$[_0xddb48b(0x1f2)])+'\x0a'+(coinToBeans?'【兑换'+$['title']+'】'+($[_0xddb48b(0x1e5)]?'成功':$[_0xddb48b(0x1e3)]):_0xddb48b(0x268))+'\x0a');if($[_0xddb48b(0x1c5)]()&&process['env'][_0xddb48b(0x206)])$[_0xddb48b(0x26b)]=''+process[_0xddb48b(0x23d)][_0xddb48b(0x206)]===_0xddb48b(0x222);else $['getdata']('jdSuperMarketRewardNotify')?$[_0xddb48b(0x26b)]=$[_0xddb48b(0x27a)]('jdSuperMarketRewardNotify')===_0xddb48b(0x222):$[_0xddb48b(0x26b)]=''+jdNotify===_0xddb48b(0x222);$[_0xddb48b(0x1e5)]&&$[_0xddb48b(0x26b)]&&($[_0xddb48b(0x1fb)]($[_0xddb48b(0x290)],'',_0xddb48b(0x25b)+$[_0xddb48b(0x1d7)]+'】'+($[_0xddb48b(0x21f)]||$[_0xddb48b(0x1f2)])+'\x0a'+(coinToBeans?_0xddb48b(0x291)+$[_0xddb48b(0x281)]+'】'+($['beanscount']?_0xddb48b(0x1bd)+$[_0xddb48b(0x1e5)]+'个':$[_0xddb48b(0x1e3)]):'您设置的是不兑换奖品')),allMessage+=_0xddb48b(0x25b)+$['index']+'】'+($['nickName']||$[_0xddb48b(0x1f2)])+'\x0a'+(coinToBeans?_0xddb48b(0x291)+$['title']+'】'+($[_0xddb48b(0x1e5)]?_0xddb48b(0x1bd)+$[_0xddb48b(0x1e5)]+'个':$['beanerr']):_0xddb48b(0x268))+($[_0xddb48b(0x1d7)]!==cookiesArr['length']?'\x0a\x0a':'')),_0x54e4f4();});}function TotalBean(){return new Promise(async _0x3287a2=>{const _0x5a015b=_0x239b,_0x5d5a3f={'url':_0x5a015b(0x220),'headers':{'Accept':_0x5a015b(0x1dd),'Content-Type':_0x5a015b(0x209),'Accept-Encoding':_0x5a015b(0x25c),'Accept-Language':_0x5a015b(0x1d6),'Connection':_0x5a015b(0x240),'Cookie':cookie,'Referer':_0x5a015b(0x1e1),'User-Agent':$['isNode']()?process[_0x5a015b(0x23d)][_0x5a015b(0x261)]?process[_0x5a015b(0x23d)][_0x5a015b(0x261)]:require(_0x5a015b(0x1ef))['USER_AGENT']:$[_0x5a015b(0x27a)]('JDUA')?$[_0x5a015b(0x27a)]('JDUA'):_0x5a015b(0x25d)}};$[_0x5a015b(0x255)](_0x5d5a3f,(_0x1b6c74,_0x482387,_0x4e6e25)=>{const _0x547f7a=_0x5a015b;try{if(_0x1b6c74)console['log'](''+JSON[_0x547f7a(0x1f3)](_0x1b6c74)),console[_0x547f7a(0x204)]($[_0x547f7a(0x290)]+'\x20API请求失败，请检查网路重试');else{if(_0x4e6e25){_0x4e6e25=JSON[_0x547f7a(0x289)](_0x4e6e25);if(_0x4e6e25[_0x547f7a(0x1cd)]===0xd){$[_0x547f7a(0x233)]=![];return;}_0x4e6e25[_0x547f7a(0x1cd)]===0x0?$[_0x547f7a(0x21f)]=_0x4e6e25[_0x547f7a(0x298)]&&_0x4e6e25[_0x547f7a(0x298)][_0x547f7a(0x230)]||$[_0x547f7a(0x1f2)]:$['nickName']=$[_0x547f7a(0x1f2)];}else console[_0x547f7a(0x204)](_0x547f7a(0x29a));}}catch(_0x47ed14){$[_0x547f7a(0x1f9)](_0x47ed14,_0x482387);}finally{_0x3287a2();}});});}function _0x239b(_0x2a51ec,_0x2ee0d8){_0x2a51ec=_0x2a51ec-0x1bb;let _0x57bc14=_0x57bc[_0x2a51ec];return _0x57bc14;}function safeGet(_0x3caac8){const _0x5c596b=_0x1a4fad;try{if(typeof JSON['parse'](_0x3caac8)==_0x5c596b(0x20b))return!![];}catch(_0x2076bf){return console[_0x5c596b(0x204)](_0x2076bf),console[_0x5c596b(0x204)](_0x5c596b(0x210)),![];}}function taskUrl(_0x4be01d,_0x4c48af={}){const _0xa2bb97=_0x1a4fad;return{'url':JD_API_HOST+_0xa2bb97(0x1e0)+_0x4be01d+_0xa2bb97(0x285)+escape(JSON[_0xa2bb97(0x1f3)](_0x4c48af))+_0xa2bb97(0x1d5)+Date[_0xa2bb97(0x24c)](),'headers':{'User-Agent':$[_0xa2bb97(0x1c5)]()?process[_0xa2bb97(0x23d)][_0xa2bb97(0x261)]?process[_0xa2bb97(0x23d)]['JD_USER_AGENT']:require(_0xa2bb97(0x1ef))[_0xa2bb97(0x278)]:$[_0xa2bb97(0x27a)](_0xa2bb97(0x251))?$[_0xa2bb97(0x27a)]('JDUA'):'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1','Host':_0xa2bb97(0x29c),'Cookie':cookie,'Referer':_0xa2bb97(0x25f),'Origin':_0xa2bb97(0x1c4)}};}function jsonParse(_0x295a74){const _0x56f613=_0x1a4fad;if(typeof _0x295a74==_0x56f613(0x26f))try{return JSON['parse'](_0x295a74);}catch(_0x17c6e1){return console[_0x56f613(0x204)](_0x17c6e1),$[_0x56f613(0x1fb)]($[_0x56f613(0x290)],'',_0x56f613(0x242)),[];}}function Env(_0x541095,_0x407ec3){const _0x1ce9ee=_0x1a4fad;'undefined'!=typeof process&&JSON[_0x1ce9ee(0x1f3)](process[_0x1ce9ee(0x23d)])[_0x1ce9ee(0x1df)](_0x1ce9ee(0x1dc))>-0x1&&process['exit'](0x0);class _0xd1688b{constructor(_0x20ca33){this['env']=_0x20ca33;}[_0x1ce9ee(0x201)](_0x28258b,_0x1c775f=_0x1ce9ee(0x214)){const _0x4f07c9=_0x1ce9ee;_0x28258b=_0x4f07c9(0x26f)==typeof _0x28258b?{'url':_0x28258b}:_0x28258b;let _0x4a8b2d=this[_0x4f07c9(0x293)];return _0x4f07c9(0x1ce)===_0x1c775f&&(_0x4a8b2d=this[_0x4f07c9(0x255)]),new Promise((_0x567999,_0x35a7e2)=>{const _0x224b62=_0x4f07c9;_0x4a8b2d[_0x224b62(0x28c)](this,_0x28258b,(_0x1d7e4c,_0x4131c3,_0x1286ce)=>{_0x1d7e4c?_0x35a7e2(_0x1d7e4c):_0x567999(_0x4131c3);});});}[_0x1ce9ee(0x293)](_0x334194){const _0x4f3144=_0x1ce9ee;return this[_0x4f3144(0x201)][_0x4f3144(0x28c)](this[_0x4f3144(0x23d)],_0x334194);}[_0x1ce9ee(0x255)](_0x3c9683){const _0x453e88=_0x1ce9ee;return this[_0x453e88(0x201)]['call'](this['env'],_0x3c9683,_0x453e88(0x1ce));}}return new class{constructor(_0x53d784,_0x40c230){const _0x5cdc99=_0x1ce9ee;this['name']=_0x53d784,this[_0x5cdc99(0x1d9)]=new _0xd1688b(this),this[_0x5cdc99(0x260)]=null,this[_0x5cdc99(0x1c1)]=_0x5cdc99(0x282),this[_0x5cdc99(0x286)]=[],this[_0x5cdc99(0x212)]=!0x1,this['isNeedRewrite']=!0x1,this[_0x5cdc99(0x1c9)]='\x0a',this[_0x5cdc99(0x231)]=new Date()['getTime'](),Object[_0x5cdc99(0x259)](this,_0x40c230),this[_0x5cdc99(0x204)]('','🔔'+this[_0x5cdc99(0x290)]+_0x5cdc99(0x1c2));}[_0x1ce9ee(0x1c5)](){const _0x49a7eb=_0x1ce9ee;return'undefined'!=typeof module&&!!module[_0x49a7eb(0x1f0)];}[_0x1ce9ee(0x25a)](){const _0x258be1=_0x1ce9ee;return _0x258be1(0x257)!=typeof $task;}[_0x1ce9ee(0x241)](){const _0x40b76e=_0x1ce9ee;return'undefined'!=typeof $httpClient&&_0x40b76e(0x257)==typeof $loon;}[_0x1ce9ee(0x250)](){return'undefined'!=typeof $loon;}[_0x1ce9ee(0x1f8)](_0x2ce95d,_0x25df63=null){try{return JSON['parse'](_0x2ce95d);}catch{return _0x25df63;}}[_0x1ce9ee(0x246)](_0x4c6cff,_0x20dd2a=null){const _0xf77fb1=_0x1ce9ee;try{return JSON[_0xf77fb1(0x1f3)](_0x4c6cff);}catch{return _0x20dd2a;}}['getjson'](_0x3e1d25,_0x357e65){const _0x115e0d=_0x1ce9ee;let _0x2d7980=_0x357e65;const _0x2d9dcb=this[_0x115e0d(0x27a)](_0x3e1d25);if(_0x2d9dcb)try{_0x2d7980=JSON['parse'](this[_0x115e0d(0x27a)](_0x3e1d25));}catch{}return _0x2d7980;}['setjson'](_0x307a14,_0x110e76){const _0x14f746=_0x1ce9ee;try{return this[_0x14f746(0x213)](JSON[_0x14f746(0x1f3)](_0x307a14),_0x110e76);}catch{return!0x1;}}['getScript'](_0x4570ce){return new Promise(_0x4d850a=>{this['get']({'url':_0x4570ce},(_0x35e9b6,_0x3f4f29,_0x2af719)=>_0x4d850a(_0x2af719));});}[_0x1ce9ee(0x22a)](_0x5a62df,_0x53d040){const _0x1516f8=_0x1ce9ee;return new Promise(_0x23cff4=>{const _0x36e369=_0x239b;let _0x4deb06=this[_0x36e369(0x27a)]('@chavy_boxjs_userCfgs.httpapi');_0x4deb06=_0x4deb06?_0x4deb06['replace'](/\n/g,'')['trim']():_0x4deb06;let _0x4a2517=this[_0x36e369(0x27a)](_0x36e369(0x296));_0x4a2517=_0x4a2517?0x1*_0x4a2517:0x14,_0x4a2517=_0x53d040&&_0x53d040[_0x36e369(0x1f5)]?_0x53d040[_0x36e369(0x1f5)]:_0x4a2517;const [_0x554887,_0x2c5848]=_0x4deb06['split']('@'),_0x5aad26={'url':'http://'+_0x2c5848+'/v1/scripting/evaluate','body':{'script_text':_0x5a62df,'mock_type':_0x36e369(0x24b),'timeout':_0x4a2517},'headers':{'X-Key':_0x554887,'Accept':_0x36e369(0x27b)}};this[_0x36e369(0x255)](_0x5aad26,(_0x24b25e,_0x19335b,_0x1839fa)=>_0x23cff4(_0x1839fa));})[_0x1516f8(0x256)](_0xdc5cc3=>this[_0x1516f8(0x1f9)](_0xdc5cc3));}['loaddata'](){const _0x577ee2=_0x1ce9ee;if(!this[_0x577ee2(0x1c5)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x577ee2(0x1ca)]=this[_0x577ee2(0x1ca)]?this[_0x577ee2(0x1ca)]:require('path');const _0x42c6f3=this[_0x577ee2(0x1ca)][_0x577ee2(0x1bc)](this[_0x577ee2(0x1c1)]),_0x1a3cfa=this[_0x577ee2(0x1ca)][_0x577ee2(0x1bc)](process[_0x577ee2(0x205)](),this['dataFile']),_0x101794=this['fs'][_0x577ee2(0x21c)](_0x42c6f3),_0x1e3fc0=!_0x101794&&this['fs'][_0x577ee2(0x21c)](_0x1a3cfa);if(!_0x101794&&!_0x1e3fc0)return{};{const _0x276ea3=_0x101794?_0x42c6f3:_0x1a3cfa;try{return JSON[_0x577ee2(0x289)](this['fs']['readFileSync'](_0x276ea3));}catch(_0x4c0680){return{};}}}}['writedata'](){const _0x3e4a28=_0x1ce9ee;if(this[_0x3e4a28(0x1c5)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x3e4a28(0x1ca)]=this[_0x3e4a28(0x1ca)]?this[_0x3e4a28(0x1ca)]:require(_0x3e4a28(0x1ca));const _0x1d828e=this[_0x3e4a28(0x1ca)]['resolve'](this[_0x3e4a28(0x1c1)]),_0x32c084=this['path']['resolve'](process['cwd'](),this[_0x3e4a28(0x1c1)]),_0x5307f6=this['fs'][_0x3e4a28(0x21c)](_0x1d828e),_0x5f3116=!_0x5307f6&&this['fs'][_0x3e4a28(0x21c)](_0x32c084),_0x49ad81=JSON[_0x3e4a28(0x1f3)](this[_0x3e4a28(0x260)]);_0x5307f6?this['fs'][_0x3e4a28(0x232)](_0x1d828e,_0x49ad81):_0x5f3116?this['fs']['writeFileSync'](_0x32c084,_0x49ad81):this['fs']['writeFileSync'](_0x1d828e,_0x49ad81);}}['lodash_get'](_0x694daa,_0x437be2,_0x4dbd80){const _0x2ead8a=_0x1ce9ee,_0x345ef8=_0x437be2[_0x2ead8a(0x1eb)](/\[(\d+)\]/g,_0x2ead8a(0x226))[_0x2ead8a(0x219)]('.');let _0x1272b4=_0x694daa;for(const _0xc1b453 of _0x345ef8)if(_0x1272b4=Object(_0x1272b4)[_0xc1b453],void 0x0===_0x1272b4)return _0x4dbd80;return _0x1272b4;}[_0x1ce9ee(0x29f)](_0x24002d,_0x405756,_0x1e232a){const _0x39c756=_0x1ce9ee;return Object(_0x24002d)!==_0x24002d?_0x24002d:(Array[_0x39c756(0x1bf)](_0x405756)||(_0x405756=_0x405756[_0x39c756(0x292)]()['match'](/[^.[\]]+/g)||[]),_0x405756[_0x39c756(0x1f4)](0x0,-0x1)[_0x39c756(0x21e)]((_0x1ce08c,_0x34a9ea,_0xe4278f)=>Object(_0x1ce08c[_0x34a9ea])===_0x1ce08c[_0x34a9ea]?_0x1ce08c[_0x34a9ea]:_0x1ce08c[_0x34a9ea]=Math[_0x39c756(0x262)](_0x405756[_0xe4278f+0x1])>>0x0==+_0x405756[_0xe4278f+0x1]?[]:{},_0x24002d)[_0x405756[_0x405756[_0x39c756(0x24f)]-0x1]]=_0x1e232a,_0x24002d);}[_0x1ce9ee(0x27a)](_0x1368d1){const _0x43a1a0=_0x1ce9ee;let _0x31f512=this[_0x43a1a0(0x218)](_0x1368d1);if(/^@/['test'](_0x1368d1)){const [,_0x477d24,_0x3752cd]=/^@(.*?)\.(.*?)$/[_0x43a1a0(0x27f)](_0x1368d1),_0x32d9bc=_0x477d24?this[_0x43a1a0(0x218)](_0x477d24):'';if(_0x32d9bc)try{const _0xfc0128=JSON[_0x43a1a0(0x289)](_0x32d9bc);_0x31f512=_0xfc0128?this[_0x43a1a0(0x2a0)](_0xfc0128,_0x3752cd,''):_0x31f512;}catch(_0xdc7f15){_0x31f512='';}}return _0x31f512;}[_0x1ce9ee(0x213)](_0x2c8f3f,_0x1165ef){const _0x27dc8f=_0x1ce9ee;let _0xb95a88=!0x1;if(/^@/[_0x27dc8f(0x1ed)](_0x1165ef)){const [,_0x2b5c54,_0x396d67]=/^@(.*?)\.(.*?)$/[_0x27dc8f(0x27f)](_0x1165ef),_0x156f26=this[_0x27dc8f(0x218)](_0x2b5c54),_0x598fce=_0x2b5c54?_0x27dc8f(0x27d)===_0x156f26?null:_0x156f26||'{}':'{}';try{const _0x13aed0=JSON[_0x27dc8f(0x289)](_0x598fce);this[_0x27dc8f(0x29f)](_0x13aed0,_0x396d67,_0x2c8f3f),_0xb95a88=this['setval'](JSON[_0x27dc8f(0x1f3)](_0x13aed0),_0x2b5c54);}catch(_0x5e95bc){const _0x281e6f={};this[_0x27dc8f(0x29f)](_0x281e6f,_0x396d67,_0x2c8f3f),_0xb95a88=this[_0x27dc8f(0x235)](JSON[_0x27dc8f(0x1f3)](_0x281e6f),_0x2b5c54);}}else _0xb95a88=this[_0x27dc8f(0x235)](_0x2c8f3f,_0x1165ef);return _0xb95a88;}[_0x1ce9ee(0x218)](_0x2f2d57){const _0x48cb3a=_0x1ce9ee;return this[_0x48cb3a(0x241)]()||this[_0x48cb3a(0x250)]()?$persistentStore[_0x48cb3a(0x20f)](_0x2f2d57):this[_0x48cb3a(0x25a)]()?$prefs[_0x48cb3a(0x207)](_0x2f2d57):this[_0x48cb3a(0x1c5)]()?(this[_0x48cb3a(0x260)]=this[_0x48cb3a(0x272)](),this[_0x48cb3a(0x260)][_0x2f2d57]):this[_0x48cb3a(0x260)]&&this[_0x48cb3a(0x260)][_0x2f2d57]||null;}[_0x1ce9ee(0x235)](_0xcafdf8,_0x1dba58){const _0x22173f=_0x1ce9ee;return this[_0x22173f(0x241)]()||this[_0x22173f(0x250)]()?$persistentStore['write'](_0xcafdf8,_0x1dba58):this[_0x22173f(0x25a)]()?$prefs[_0x22173f(0x29e)](_0xcafdf8,_0x1dba58):this['isNode']()?(this[_0x22173f(0x260)]=this[_0x22173f(0x272)](),this[_0x22173f(0x260)][_0x1dba58]=_0xcafdf8,this['writedata'](),!0x0):this[_0x22173f(0x260)]&&this[_0x22173f(0x260)][_0x1dba58]||null;}['initGotEnv'](_0x1881b2){const _0x47d9be=_0x1ce9ee;this['got']=this['got']?this[_0x47d9be(0x280)]:require(_0x47d9be(0x280)),this[_0x47d9be(0x223)]=this[_0x47d9be(0x223)]?this[_0x47d9be(0x223)]:require(_0x47d9be(0x276)),this[_0x47d9be(0x26d)]=this[_0x47d9be(0x26d)]?this[_0x47d9be(0x26d)]:new this[(_0x47d9be(0x223))][(_0x47d9be(0x20c))](),_0x1881b2&&(_0x1881b2['headers']=_0x1881b2['headers']?_0x1881b2[_0x47d9be(0x28d)]:{},void 0x0===_0x1881b2[_0x47d9be(0x28d)][_0x47d9be(0x211)]&&void 0x0===_0x1881b2[_0x47d9be(0x1bb)]&&(_0x1881b2[_0x47d9be(0x1bb)]=this['ckjar']));}[_0x1ce9ee(0x293)](_0x1a982c,_0x32a9be=()=>{}){const _0x5f1af8=_0x1ce9ee;_0x1a982c[_0x5f1af8(0x28d)]&&(delete _0x1a982c[_0x5f1af8(0x28d)][_0x5f1af8(0x287)],delete _0x1a982c['headers'][_0x5f1af8(0x275)]),this[_0x5f1af8(0x241)]()||this[_0x5f1af8(0x250)]()?(this['isSurge']()&&this[_0x5f1af8(0x1c6)]&&(_0x1a982c[_0x5f1af8(0x28d)]=_0x1a982c[_0x5f1af8(0x28d)]||{},Object[_0x5f1af8(0x259)](_0x1a982c[_0x5f1af8(0x28d)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x5f1af8(0x293)](_0x1a982c,(_0x2f928d,_0x267825,_0x7a7782)=>{const _0x456eeb=_0x5f1af8;!_0x2f928d&&_0x267825&&(_0x267825[_0x456eeb(0x22b)]=_0x7a7782,_0x267825['statusCode']=_0x267825[_0x456eeb(0x229)]),_0x32a9be(_0x2f928d,_0x267825,_0x7a7782);})):this['isQuanX']()?(this[_0x5f1af8(0x1c6)]&&(_0x1a982c[_0x5f1af8(0x22c)]=_0x1a982c[_0x5f1af8(0x22c)]||{},Object[_0x5f1af8(0x259)](_0x1a982c['opts'],{'hints':!0x1})),$task['fetch'](_0x1a982c)[_0x5f1af8(0x27c)](_0x5b82e3=>{const {statusCode:_0x26f986,statusCode:_0x47b2fc,headers:_0x109aed,body:_0x2465b6}=_0x5b82e3;_0x32a9be(null,{'status':_0x26f986,'statusCode':_0x47b2fc,'headers':_0x109aed,'body':_0x2465b6},_0x2465b6);},_0x4270ba=>_0x32a9be(_0x4270ba))):this[_0x5f1af8(0x1c5)]()&&(this[_0x5f1af8(0x245)](_0x1a982c),this['got'](_0x1a982c)['on'](_0x5f1af8(0x299),(_0x49ea84,_0x433b56)=>{const _0xf7898f=_0x5f1af8;try{if(_0x49ea84[_0xf7898f(0x28d)][_0xf7898f(0x264)]){const _0x6ba2c1=_0x49ea84[_0xf7898f(0x28d)][_0xf7898f(0x264)]['map'](this['cktough'][_0xf7898f(0x211)][_0xf7898f(0x289)])[_0xf7898f(0x292)]();_0x6ba2c1&&this[_0xf7898f(0x26d)][_0xf7898f(0x1c8)](_0x6ba2c1,null),_0x433b56[_0xf7898f(0x1bb)]=this[_0xf7898f(0x26d)];}}catch(_0x2a5285){this[_0xf7898f(0x1f9)](_0x2a5285);}})[_0x5f1af8(0x27c)](_0x3f83ec=>{const {statusCode:_0x29cbee,statusCode:_0x3211bd,headers:_0x234ed8,body:_0x435cc7}=_0x3f83ec;_0x32a9be(null,{'status':_0x29cbee,'statusCode':_0x3211bd,'headers':_0x234ed8,'body':_0x435cc7},_0x435cc7);},_0x597b26=>{const _0x40ceac=_0x5f1af8,{message:_0x1cae8f,response:_0x46216a}=_0x597b26;_0x32a9be(_0x1cae8f,_0x46216a,_0x46216a&&_0x46216a[_0x40ceac(0x22b)]);}));}[_0x1ce9ee(0x255)](_0x3d5444,_0x152d75=()=>{}){const _0x42c568=_0x1ce9ee;if(_0x3d5444[_0x42c568(0x22b)]&&_0x3d5444[_0x42c568(0x28d)]&&!_0x3d5444[_0x42c568(0x28d)][_0x42c568(0x287)]&&(_0x3d5444[_0x42c568(0x28d)][_0x42c568(0x287)]='application/x-www-form-urlencoded'),_0x3d5444[_0x42c568(0x28d)]&&delete _0x3d5444[_0x42c568(0x28d)][_0x42c568(0x275)],this[_0x42c568(0x241)]()||this[_0x42c568(0x250)]())this[_0x42c568(0x241)]()&&this['isNeedRewrite']&&(_0x3d5444[_0x42c568(0x28d)]=_0x3d5444[_0x42c568(0x28d)]||{},Object[_0x42c568(0x259)](_0x3d5444['headers'],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x42c568(0x255)](_0x3d5444,(_0x267cbd,_0x5f181f,_0x5b4044)=>{const _0x5e33b0=_0x42c568;!_0x267cbd&&_0x5f181f&&(_0x5f181f[_0x5e33b0(0x22b)]=_0x5b4044,_0x5f181f['statusCode']=_0x5f181f[_0x5e33b0(0x229)]),_0x152d75(_0x267cbd,_0x5f181f,_0x5b4044);});else{if(this[_0x42c568(0x25a)]())_0x3d5444['method']=_0x42c568(0x1ce),this[_0x42c568(0x1c6)]&&(_0x3d5444[_0x42c568(0x22c)]=_0x3d5444[_0x42c568(0x22c)]||{},Object['assign'](_0x3d5444[_0x42c568(0x22c)],{'hints':!0x1})),$task[_0x42c568(0x236)](_0x3d5444)[_0x42c568(0x27c)](_0x163a38=>{const {statusCode:_0x5982f9,statusCode:_0x334027,headers:_0x178c72,body:_0x31e3b8}=_0x163a38;_0x152d75(null,{'status':_0x5982f9,'statusCode':_0x334027,'headers':_0x178c72,'body':_0x31e3b8},_0x31e3b8);},_0x1d0c10=>_0x152d75(_0x1d0c10));else{if(this[_0x42c568(0x1c5)]()){this[_0x42c568(0x245)](_0x3d5444);const {url:_0x1d1b99,..._0x3d69f8}=_0x3d5444;this['got']['post'](_0x1d1b99,_0x3d69f8)[_0x42c568(0x27c)](_0x1ace1a=>{const {statusCode:_0x3b5e83,statusCode:_0x160bc2,headers:_0x396b02,body:_0x47a302}=_0x1ace1a;_0x152d75(null,{'status':_0x3b5e83,'statusCode':_0x160bc2,'headers':_0x396b02,'body':_0x47a302},_0x47a302);},_0x4d265a=>{const _0xa927da=_0x42c568,{message:_0x469255,response:_0x3c5b74}=_0x4d265a;_0x152d75(_0x469255,_0x3c5b74,_0x3c5b74&&_0x3c5b74[_0xa927da(0x22b)]);});}}}}[_0x1ce9ee(0x200)](_0x1f1581,_0x514fd8=null){const _0x503591=_0x1ce9ee,_0x1e5412=_0x514fd8?new Date(_0x514fd8):new Date();let _0x302f51={'M+':_0x1e5412[_0x503591(0x28e)]()+0x1,'d+':_0x1e5412[_0x503591(0x225)](),'H+':_0x1e5412[_0x503591(0x29b)](),'m+':_0x1e5412['getMinutes'](),'s+':_0x1e5412[_0x503591(0x249)](),'q+':Math[_0x503591(0x216)]((_0x1e5412[_0x503591(0x28e)]()+0x3)/0x3),'S':_0x1e5412['getMilliseconds']()};/(y+)/[_0x503591(0x1ed)](_0x1f1581)&&(_0x1f1581=_0x1f1581[_0x503591(0x1eb)](RegExp['$1'],(_0x1e5412[_0x503591(0x1be)]()+'')[_0x503591(0x24d)](0x4-RegExp['$1'][_0x503591(0x24f)])));for(let _0x4695c6 in _0x302f51)new RegExp('('+_0x4695c6+')')[_0x503591(0x1ed)](_0x1f1581)&&(_0x1f1581=_0x1f1581[_0x503591(0x1eb)](RegExp['$1'],0x1==RegExp['$1'][_0x503591(0x24f)]?_0x302f51[_0x4695c6]:('00'+_0x302f51[_0x4695c6])[_0x503591(0x24d)]((''+_0x302f51[_0x4695c6])[_0x503591(0x24f)])));return _0x1f1581;}[_0x1ce9ee(0x1fb)](_0xf842c1=_0x541095,_0x13bf08='',_0xffa500='',_0xdcd7a5){const _0x33bf85=_0x1ce9ee,_0x30fcb0=_0xdd571a=>{const _0x263053=_0x239b;if(!_0xdd571a)return _0xdd571a;if('string'==typeof _0xdd571a)return this[_0x263053(0x250)]()?_0xdd571a:this['isQuanX']()?{'open-url':_0xdd571a}:this[_0x263053(0x241)]()?{'url':_0xdd571a}:void 0x0;if('object'==typeof _0xdd571a){if(this[_0x263053(0x250)]()){let _0xcac1d7=_0xdd571a[_0x263053(0x258)]||_0xdd571a['url']||_0xdd571a[_0x263053(0x29d)],_0x13ea97=_0xdd571a[_0x263053(0x283)]||_0xdd571a[_0x263053(0x203)];return{'openUrl':_0xcac1d7,'mediaUrl':_0x13ea97};}if(this[_0x263053(0x25a)]()){let _0x485d53=_0xdd571a['open-url']||_0xdd571a[_0x263053(0x1d3)]||_0xdd571a[_0x263053(0x258)],_0x2c2dc9=_0xdd571a[_0x263053(0x203)]||_0xdd571a['mediaUrl'];return{'open-url':_0x485d53,'media-url':_0x2c2dc9};}if(this['isSurge']()){let _0x119499=_0xdd571a[_0x263053(0x1d3)]||_0xdd571a['openUrl']||_0xdd571a[_0x263053(0x29d)];return{'url':_0x119499};}}};if(this[_0x33bf85(0x212)]||(this[_0x33bf85(0x241)]()||this[_0x33bf85(0x250)]()?$notification[_0x33bf85(0x255)](_0xf842c1,_0x13bf08,_0xffa500,_0x30fcb0(_0xdcd7a5)):this[_0x33bf85(0x25a)]()&&$notify(_0xf842c1,_0x13bf08,_0xffa500,_0x30fcb0(_0xdcd7a5))),!this['isMuteLog']){let _0x5390c5=['',_0x33bf85(0x297)];_0x5390c5[_0x33bf85(0x1f1)](_0xf842c1),_0x13bf08&&_0x5390c5[_0x33bf85(0x1f1)](_0x13bf08),_0xffa500&&_0x5390c5[_0x33bf85(0x1f1)](_0xffa500),console['log'](_0x5390c5[_0x33bf85(0x234)]('\x0a')),this[_0x33bf85(0x286)]=this[_0x33bf85(0x286)][_0x33bf85(0x1cb)](_0x5390c5);}}['log'](..._0x2922ca){const _0x452fd3=_0x1ce9ee;_0x2922ca['length']>0x0&&(this[_0x452fd3(0x286)]=[...this[_0x452fd3(0x286)],..._0x2922ca]),console['log'](_0x2922ca[_0x452fd3(0x234)](this[_0x452fd3(0x1c9)]));}[_0x1ce9ee(0x1f9)](_0x385708,_0x8af656){const _0x42cecf=_0x1ce9ee,_0x4bf326=!this['isSurge']()&&!this['isQuanX']()&&!this[_0x42cecf(0x250)]();_0x4bf326?this[_0x42cecf(0x204)]('','❗️'+this[_0x42cecf(0x290)]+_0x42cecf(0x1fd),_0x385708['stack']):this[_0x42cecf(0x204)]('','❗️'+this[_0x42cecf(0x290)]+_0x42cecf(0x1fd),_0x385708);}[_0x1ce9ee(0x1fa)](_0x519b3a){return new Promise(_0x4fe959=>setTimeout(_0x4fe959,_0x519b3a));}['done'](_0x1771c8={}){const _0x41f8ac=_0x1ce9ee,_0x52d68a=new Date()['getTime'](),_0x538e87=(_0x52d68a-this[_0x41f8ac(0x231)])/0x3e8;this[_0x41f8ac(0x204)]('','🔔'+this[_0x41f8ac(0x290)]+_0x41f8ac(0x23c)+_0x538e87+'\x20秒'),this[_0x41f8ac(0x204)](),(this[_0x41f8ac(0x241)]()||this[_0x41f8ac(0x25a)]()||this[_0x41f8ac(0x250)]())&&$done(_0x1771c8);}}(_0x541095,_0x407ec3);}