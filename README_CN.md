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
  + [浏览器获取cookie教程](GetJdCookie.md)
    
  + [插件获取cookie教程](GetJdCookie2.md)
    
  + APP扫码获取cookie(此种方式获取的cookie有效期为30天)(执行`node getJDCookie.js`即可,前提已配置好node环境,在当前工程下npm i下载好依赖包,本项目已下载好所以直接运行就可以)
  
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
 

