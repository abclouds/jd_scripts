/*
宠汪汪强制为别人助力（助力一个好友你自己可以获得30积分，一天上限是帮助3个好友，自己获得90积分，不管助力是否成功，对方都会成为你的好友）
更新时间：2021-1-21
活动入口：京东APP我的-更多工具-宠汪汪
目前提供了30309位好友的friendPin供使用。脚本随机从里面获取一个，助力成功后，退出小程序重新点击进去开始助力新的好友
欢迎大家使用 https://jdjoy.jd.com/pet/getFriends?itemsPerPage=20&currentPage=1 (currentPage=1表示第一页好友，=2表示第二页好友)
提供各自账号列表的friendPin给我
如果想设置固定好友，那下载下来放到本地使用，可以修改friendPin换好友(助力一好友后，更换一次friendPin里面的内容)
使用方法：
①设置好相应软件的重写
②从京东APP宠汪汪->领狗粮->邀请好友助力，分享给你小号微信或者微信的文件传输助手。 自己再打开刚才的分享，助力成功后，返回到此小程序首页重新进去宠汪汪即可助力下一位好友
③如提示好友人气旺，说明此好友已满了三人助力，需重新进出小程序，重新进入来客有礼-宠汪汪。
new Env('宠汪汪强制为别人助力');//此处忽略即可，为自动生成iOS端软件配置文件所需
[MITM]
hostname = draw.jdfcloud.com
======================Surge=====================
[Script]
宠汪汪强制为别人助力= type=http-request,pattern=^https:\/\/draw\.jdfcloud\.com\/\/common\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin,requires-body=1,max-size=0,script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_joy_help.js

===================Quantumult X=====================
[rewrite_local]
^https:\/\/draw\.jdfcloud\.com\/\/common\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin url script-request-header https://gitee.com/lxk0301/jd_scripts/raw/master/jd_joy_help.js

=====================Loon=====================
[Script]
http-request ^https:\/\/draw\.jdfcloud\.com\/\/common\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin script-path=https://gitee.com/lxk0301/jd_scripts/raw/master/jd_joy_help.js, requires-body=true, timeout=3600, tag=宠汪汪强制为别人助力


你也可从下面链接拿好友的friendPin(复制链接到有京东ck的浏览器打开即可)

https://jdjoy.jd.com/pet/getFriends?itemsPerPage=20&currentPage=1
*/

const _0x4f09=['11199fwBigq','jd_54154982c707f','jd_5fdcdcb183d7d','jd_4fe620f72fa7c','5317123-63418293','13654075776_p','jd_6dce98c07a644','sjw3000','yhr_19820404','yygt1158','jd_4e68b48d16f7b','jd_461e384274c34','jd_610b3d00928e5','278172fsryDo','jwl19690905','jd_SmPxpudoGYOb','hellohuhua','jd_vVhhkdUpTkJQ','wdjQkAbFobMTyo','jd_5279d593e7803','jd_53df36eb204a0','390823571-784974','jd_ewYCRdmukzQH','jd_558ed75f52d39','jd_JmGCpqgpCtqG','13348822441_p','17CKcMAD','4349小丢丢','iamkgbfox','candyclouds','zyjyc9998','jd_7277d200aa1ac','jd_67ded5748c3ab','pet_virtual_friend_特兰克斯','夏海东12315','ququkoko','沧海不轮回','jd_DUtPtiiDamDr','lmpbjs1988','jd_437b4f3fa5d83','wdZuirGekSHKmF','tommy_he1','jd_4e59841cae4f9','18923155789_p','杉雨2011','jd_5bf29dffa62ea','夏革平','wonghe','wdNRUvbJItetlvB','jd_4fd63de4a6033','jd_63423cd594e8b','wBm1TsDy3p_m','jd_59d962a076126','jd_67ab629be7e61','random','jd_6f5b49bb757cb','qazmcl1230','zhouhuayh','168876810-159969','jd_71e77d9235cf5','1231PauWAq','692620136落','jd_525d6e7a57e7c','338379384-148135','352834026-406289','13981372001_p','fdxwb','明子溪','jd_49769225b01ed','dreamscometrue5120','jd_62e335d785872','jd_RVMXldNSQNOP','zdj8341','jd_73751adc04afd','carola82','134795344-89911673','jd_529a0a309d418','832qvLZPq','lanye1545','jd_64e37854e713f','yinlang46','jd_42764f5ea2341','jd_4d4def8b59787','elbereth1122','529577509-275616','jd_74332d1d62a97','jd_4f7cd5b108733','match','pet_virtual_friend_1314爱澳','陌上花开花又落','13682627696_p','30101hwjtcX','snzh2013','jd_573c9832d8989','luffy-314_m','jd_462f9229c20e4','getTime','jd_76763ba485c5e','jd_6b0945a180138','wdGefYCBlyOuvz','145391572-102667','llbai11','pet_virtual_friend_乔治桑','jd_7b6d6e7dc98f1','url:','jd_758f5224ee957','jd_76dd04e844d63','voxb','36453197-121619','shin_dynasty','302990512-553401','cocoty','jd_78f0d6524a1dc','ningbormb','chamy99','jd_NgNWXMVkJIvk','小鹿Jenny','jd_5862fd8834680','jd_5213fd3fd5e09','jd_7f7eabc5caf7d','jd_54a4260ca986c','jd_74e60dbcae365','jd_596fd9fea411f','jd_uGzohbhFpRuz','wangyneu','MisterGlasses','sara35424','inviteTimeStamp=','ky252571504','invitePin=','jd_7ced325aba4fd','gary388jingdong','花开花花落','wuyaoxin2012','你要醒来','jd_62ce2385bb364','url','jd_59a9823f35496','248358330-645106','frank818','44787591-640051','jd_582eecf8d27a9','davidharry','95581245-627991','13916051043','jd_LOEWgvNwQIWD','jd_6f1f0722f8365','replace','jd_akYbyiXqrIDC','jd_5fafb631c98af','ypqian','李纪红','247466310','jd_BCXgLlmxHdiS','13209558123_p','jd_77a82b603c6c3','klhzdx','jd_725e17effb6a9','jd_AOhLSBLdSnux','13656692651_phz','jd_485c757b79422','min','pet_virtual_friend_绿茶sama','jadonglin','jd_493918e314b50','13887490621_p','jd_47ba82eb392a5','suyugen','jd_4078f69a72873','yjbonny','1PdPyvi','xiaojingang_0','夏雨的爱情','jd_47f49f22f1dc3','思绪随风2011','jd_7dbe4f8a40a7d','3aWrWvr','jd_72b940be8c0f4','chensue','wzywolfgang','jd_54130a3e282ea','pet_virtual_friend_路遇狗与少年','zb19881021','jd_7eb0de64eb25a','qq6924309','jd_6e348ece13e20','log','13976911784_p','sun5025','我手机号码','00数字方程式','jd_sIhNpDXJehOr','jd_4e4d9825e5fb1','L1518235423','jd_444f5c020f31c','15555448319_p','jd_49acdb02e8514','jd_627171efb7c0a','勇敢的小泪','jd_5fbda9be54d5b','jd_42d9ce3001acd','mztvip','刘凤苓','1smDfBt','15868005933_p','jd_6bfe51f915c90','jd_4915949b7bfa1','jd_4cba35cfa8220','jd_6f9b9a6769afb','jd_4e0d529ba3c35','pet_virtual_friend_胡皋三','jd_6edb943cacbfb','15230573701_p','15809290902_p','liangxuejingdong','xyyshy1983','jd_iFnquhpWWAzO','hlcx86021','弑神X','13681610268_p','jd_51f0d43d78900','pet_virtual_friend_Ainio','墨明棋妙陈','yanglan0409','jd_4b8a70f3b06c3','408208nUTvpm','jd_60d497271825b','jd_611e082213c89','85192cool','jd_6f53253d117c5','jd_57650a30ef6eb','荷舞弄清影88','chenzhiyun2002','MLHK7288','pet_virtual_friend_Talon','jd_6711f97ee4dfe','jd_428d930ca56a5','ss836580793','congcong炒葱葱','469MFycrN','jd_5f94da0265e0d','jd_FfAnqFVEoBul','jd_51a64a9da6b94','143798682-947527','jd_4e97fe5ca4003','jd_QEVVkkDTQAlJ','1307976-34738981','mwb1992062_m','jd_620ceca400151','18027486801_p','244265hJxHIt','339dnAQSx','jd_5851f32d4a083','MARYMY88','13775208986_p','15207695569_p','jd_53bf7cb6fb8e6','jd_6777ee65f9fcc','蜜糖向日葵','jd_75e1da74980ab','jd_412f7eb363cd8','jd_56b7a4e092e85','wdgOGLtOJjjbnp','13008094886_p','jd_5ff306cf94512','jd_7be92b11b7e8f','琳琅满目cbb','wdkplHVQlgowTW','jd_4481f68984466','friendPin='];const _0x490f29=_0x5c6e;(function(_0x4093ca,_0x2343ae){const _0xc22dd=_0x5c6e;while(!![]){try{const _0x5bfe03=-parseInt(_0xc22dd(0x296))*-parseInt(_0xc22dd(0x2d7))+-parseInt(_0xc22dd(0x268))*parseInt(_0xc22dd(0x218))+-parseInt(_0xc22dd(0x289))+-parseInt(_0xc22dd(0x27c))*parseInt(_0xc22dd(0x21e))+-parseInt(_0xc22dd(0x24f))*parseInt(_0xc22dd(0x239))+parseInt(_0xc22dd(0x269))*parseInt(_0xc22dd(0x25d))+-parseInt(_0xc22dd(0x2b8))*-parseInt(_0xc22dd(0x2c9));if(_0x5bfe03===_0x2343ae)break;else _0x4093ca['push'](_0x4093ca['shift']());}catch(_0x59fafa){_0x4093ca['push'](_0x4093ca['shift']());}}}(_0x4f09,0xb2622));const friendsArr=[_0x490f29(0x2de),_0x490f29(0x2c0),'%E5%8F%AB%E4%BB%80%E4%B9%88%E5%A5%BD%E5%91%A28370',_0x490f29(0x299),'jd_66f5cecc1efcd',_0x490f29(0x22d),_0x490f29(0x26a),_0x490f29(0x284),_0x490f29(0x275),'13966269193_p',_0x490f29(0x22e),_0x490f29(0x276),_0x490f29(0x29f),_0x490f29(0x1f7),_0x490f29(0x2d0),_0x490f29(0x2a7),'jd_455da88071d1e',_0x490f29(0x2c1),'蒋周南19620607',_0x490f29(0x266),_0x490f29(0x2a8),_0x490f29(0x26b),_0x490f29(0x2d6),_0x490f29(0x26f),_0x490f29(0x29e),_0x490f29(0x2a3),_0x490f29(0x29a),'meoygua',_0x490f29(0x257),_0x490f29(0x236),_0x490f29(0x254),'jd_44ca1016e0f96',_0x490f29(0x2d1),_0x490f29(0x21d),'jd_4fa238e4e3039',_0x490f29(0x2cf),'jd_4d9be23908e41',_0x490f29(0x24a),'13588108107_p','123by456','09niuniuma',_0x490f29(0x261),'jd_560c6f30e6951','jd_54ddb8af5374a',_0x490f29(0x2aa),_0x490f29(0x206),'wang2011',_0x490f29(0x220),'1362245003-624122',_0x490f29(0x2df),_0x490f29(0x272),'18311575050_p',_0x490f29(0x264),_0x490f29(0x274),_0x490f29(0x20a),_0x490f29(0x27e),_0x490f29(0x2f1),_0x490f29(0x260),_0x490f29(0x2ea),_0x490f29(0x216),_0x490f29(0x292),_0x490f29(0x295),_0x490f29(0x247),_0x490f29(0x291),'jd_79af2bc7a56a3','15053231812_p',_0x490f29(0x253),_0x490f29(0x2a9),'jd_47a1c4ad02103',_0x490f29(0x238),_0x490f29(0x2e0),_0x490f29(0x24d),_0x490f29(0x24e),_0x490f29(0x248),_0x490f29(0x2b0),_0x490f29(0x283),_0x490f29(0x2ce),_0x490f29(0x22f),'jd_579b891fbea9b',_0x490f29(0x1f9),_0x490f29(0x28c),'jd_4cf1918577871',_0x490f29(0x202),_0x490f29(0x205),_0x490f29(0x2f4),_0x490f29(0x23d),_0x490f29(0x281),_0x490f29(0x1fe),_0x490f29(0x23e),_0x490f29(0x298),_0x490f29(0x235),_0x490f29(0x2dd),_0x490f29(0x20e),_0x490f29(0x219),_0x490f29(0x2ca),_0x490f29(0x256),_0x490f29(0x2a2),_0x490f29(0x28b),_0x490f29(0x28a),_0x490f29(0x255),'jd_750d6a9734717',_0x490f29(0x2cb),_0x490f29(0x2d9),_0x490f29(0x279),'wwk232323',_0x490f29(0x23b),_0x490f29(0x22b),_0x490f29(0x249),_0x490f29(0x25b),_0x490f29(0x23a),'zooooo58',_0x490f29(0x2d5),'jd_701f52f8badbb',_0x490f29(0x2db),'jd_42193689987a0','jd_7dc5829121bcc',_0x490f29(0x20d),_0x490f29(0x21b),'handechun959',_0x490f29(0x26c),'guoyizhang','jd_677dd20bf2749',_0x490f29(0x25f),_0x490f29(0x2a6),_0x490f29(0x28f),_0x490f29(0x21c),_0x490f29(0x2c2),_0x490f29(0x215),_0x490f29(0x286),_0x490f29(0x273),_0x490f29(0x2eb),_0x490f29(0x2e3),_0x490f29(0x2ae),'greatyunyun',_0x490f29(0x297),_0x490f29(0x267),_0x490f29(0x26d),_0x490f29(0x2e1),_0x490f29(0x2ac),_0x490f29(0x27d),_0x490f29(0x252),_0x490f29(0x250),'greatyunyun9320',_0x490f29(0x2fc),_0x490f29(0x2f5),'wdiicnSbYSHWwE',_0x490f29(0x2c8),_0x490f29(0x277),'13486659225_p',_0x490f29(0x246),_0x490f29(0x227),_0x490f29(0x2b3),'znz传奇','418001066_m',_0x490f29(0x29c),'361372-27819972',_0x490f29(0x203),_0x490f29(0x2e6),_0x490f29(0x2f0),_0x490f29(0x22c),_0x490f29(0x209),_0x490f29(0x234),_0x490f29(0x27a),_0x490f29(0x2e5),_0x490f29(0x265),'15975229552_p',_0x490f29(0x2c4),_0x490f29(0x240),_0x490f29(0x210),_0x490f29(0x24b),_0x490f29(0x23c),'jd_7ca74ed9224ef',_0x490f29(0x2cd),_0x490f29(0x280),'jd_40a2d9485cbdb',_0x490f29(0x2b4),_0x490f29(0x2fe),'jd_402fe7425fcaf',_0x490f29(0x1fd),_0x490f29(0x2da),_0x490f29(0x207),_0x490f29(0x288),_0x490f29(0x1f4),_0x490f29(0x2bb),_0x490f29(0x2e2),_0x490f29(0x222),'jd_6169b3411ed5b',_0x490f29(0x25a),_0x490f29(0x226),_0x490f29(0x223),'jd_712bd3bfd55d6',_0x490f29(0x262),_0x490f29(0x2a5),_0x490f29(0x2bd),'129867657-673064',_0x490f29(0x2ba),_0x490f29(0x2a4),_0x490f29(0x271),_0x490f29(0x2c3),_0x490f29(0x25e),_0x490f29(0x2b1),_0x490f29(0x213),_0x490f29(0x23f),_0x490f29(0x212),'jd_71a220104187a',_0x490f29(0x28d),_0x490f29(0x1f1),_0x490f29(0x28e),'cloud_kim',_0x490f29(0x293),_0x490f29(0x231),'wdhxZuEvXhhvCf',_0x490f29(0x21f),_0x490f29(0x25c),_0x490f29(0x225),_0x490f29(0x208),_0x490f29(0x26e),_0x490f29(0x27f),_0x490f29(0x21a),_0x490f29(0x214),'jd_LXnFHXoJwXkW','62160785-578856','醒醒该睡了',_0x490f29(0x1ff),'xiiirww',_0x490f29(0x29d),_0x490f29(0x258),_0x490f29(0x2d2),_0x490f29(0x2ef),_0x490f29(0x211),'玩家卫弈',_0x490f29(0x244),_0x490f29(0x233),'jd_53bc7a14f64d6',_0x490f29(0x243),'jd_65a2ab73d9aa5',_0x490f29(0x241),_0x490f29(0x2f3),_0x490f29(0x20b),'蔡辉煌',_0x490f29(0x2e7),'gdxx_hhw_m',_0x490f29(0x2ec),'jd_sDtnONLeHwfG',_0x490f29(0x245),_0x490f29(0x2cc),_0x490f29(0x204),'15817094457_p',_0x490f29(0x2be),_0x490f29(0x1f3),_0x490f29(0x2bf),'henry1927_m',_0x490f29(0x2ee),_0x490f29(0x287),_0x490f29(0x1f8),_0x490f29(0x2ad),_0x490f29(0x270),_0x490f29(0x2ab),_0x490f29(0x2e8),_0x490f29(0x278),'jd_5b7cc9e532426',_0x490f29(0x2c7),'15211488203_p',_0x490f29(0x200),_0x490f29(0x294),_0x490f29(0x24c),_0x490f29(0x2d4),'1209815-33190621',_0x490f29(0x2b5),'jd_6d3cbb8b0751a','jd_6e00e826f939b',_0x490f29(0x237),_0x490f29(0x1fc),_0x490f29(0x2fa),_0x490f29(0x22a),_0x490f29(0x1f5),_0x490f29(0x2bc),'pet_virtual_friend_丁座的真爱粉',_0x490f29(0x1fb),_0x490f29(0x232),_0x490f29(0x229),_0x490f29(0x2f7),_0x490f29(0x221),_0x490f29(0x217),_0x490f29(0x2a0),'649297742_327799447','倚兰椒','琳琳8796',_0x490f29(0x2d8),_0x490f29(0x2c5),'wdNnlMzPGJJKgqI',_0x490f29(0x285),_0x490f29(0x290),_0x490f29(0x1f2),_0x490f29(0x251),_0x490f29(0x2b7),_0x490f29(0x2f6),_0x490f29(0x29b),_0x490f29(0x242),_0x490f29(0x224),_0x490f29(0x2b9),_0x490f29(0x2b6),'zhushidan100','上自习的猪','15602231009_p',_0x490f29(0x2f2),_0x490f29(0x259),_0x490f29(0x1fa),_0x490f29(0x2f9),'jd_7b22bbfe1e7e5','138555963-81748582',_0x490f29(0x263),'4932713-24535180',_0x490f29(0x282),_0x490f29(0x2a1),_0x490f29(0x2f8),_0x490f29(0x2af),'jd_6acd3a6cc79cc',_0x490f29(0x230),'jd_71caf6b3ec4cb',_0x490f29(0x2e9),_0x490f29(0x2c6),_0x490f29(0x20c),_0x490f29(0x2ed)];let newUrl,url=$request[_0x490f29(0x1f6)];function _0x5c6e(_0x43e798,_0x47b809){_0x43e798=_0x43e798-0x1f1;let _0x4f0971=_0x4f09[_0x43e798];return _0x4f0971;}function randomNumber(_0x3b0504=0x0,_0x1e13b1=0x64){const _0x19d43f=_0x490f29;return Math[_0x19d43f(0x20f)](Math['floor'](_0x3b0504+Math[_0x19d43f(0x2b2)]()*(_0x1e13b1-_0x3b0504)),_0x1e13b1);}try{console['log'](_0x490f29(0x2e4)+url);let friendPin=encodeURI(friendsArr[randomNumber(0x0,friendsArr['length'])]);const timestamp=new Date()[_0x490f29(0x2dc)](),lks=url[_0x490f29(0x2d3)](/lks=.*?$/g)[0x0];newUrl=url[_0x490f29(0x201)](/friendPin=.*?$/i,_0x490f29(0x27b)+friendPin)[_0x490f29(0x201)](/invitePin=.*?$/i,_0x490f29(0x2fd)+friendPin)[_0x490f29(0x201)](/inviteTimeStamp=.*?$/i,_0x490f29(0x2fb)+timestamp+'&'),newUrl+='&'+lks,console[_0x490f29(0x228)]('newUrl:'+newUrl);}catch(_0x4be9b6){console['log'](_0x4be9b6);}finally{$done({'url':newUrl});}
