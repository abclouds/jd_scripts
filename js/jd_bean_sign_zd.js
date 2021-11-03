/*************************
 京东-升级赚豆任务

 更新时间: 2021-05-24
 脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
 如果转载: 请注明出处

 *************************

 开启抓包app后, Safari浏览器登录 https://bean.m.jd.com/bean/signIndex.action 点击签到并且出现签到日历后, 返回抓包app搜索关键字 functionId=signBean 复制请求头Cookie填入以下Key处的单引号内即可

 =================================Quantumultx=========================
 [task_local]
 #升级赚豆
 30 0 * * * https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_bean_sign_zd.js, tag=升级赚豆, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jdmc.png, enabled=true

 =================================Loon===================================
 [Script]
 cron " 30 0 * * *" script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_bean_sign_zd.js,tag=升级赚豆

 ===================================Surge================================
 升级赚豆 = type=cron,cronexp=" 30 0 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_bean_sign_zd.js

 ====================================小火箭=============================
 升级赚豆 = type=cron,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/jd_bean_sign_zd.js, cronexpr=" 30 0 * * *", timeout=3600, enable=true


 */

//定义变量
const $ = new Env('升级赚豆');
const notify = $.isNode() ? require('../sendNotify') : '';
const jdCookieNode = $.isNode() ? require('../jdCookie.js') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
let cookiesArr = [], cookie = '', message;

//获取cookie
if ($.isNode()) {
    Object.keys(jdCookieNode).forEach((item) => {
        cookiesArr.push(jdCookieNode[item])
    })
    if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
    };
} else {
    cookiesArr = [$.getdata('CookieJD'), $.getdata('CookieJD2'), ...jsonParse($.getdata('CookiesJD') || "[]").map(item => item.cookie)].filter(item => !!item);
}


//开始任务
!(async () => {
    if (!cookiesArr[0]) {
        $.msg($.name, '【提示】请先获取京东账号一cookie', 'https://bean.m.jd.com/', {"open-url": "https://bean.m.jd.com/"});
        return;
    }

    //获取配置文件
    await requireConfig()
    for (let i = 0; i < cookiesArr.length; i++) {
        if (cookiesArr[i]) {
            cookie = cookiesArr[i];
            $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1])
            $.index = i + 1;
            $.isLogin = true;
            $.nickName = '';
            message = '';
            $.exit = false;
            console.log(`\n******开始【京东账号${$.index}】${$.nickName || $.UserName}*********\n`);
            if (!$.isLogin) {
                $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/`, {"open-url": "https://bean.m.jd.com/"});
                if ($.isNode()) {
                    await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
                }
                continue
            }
            //获取任务
            $.taskInfos = await beanTaskList();
            for (let item of $.taskInfos) {
                console.log(`任务[${item.taskName}]开始`);
                var taskToken = item.subTaskVOS[0].taskToken;
                var skuId = item.subTaskVOS[0].skuId;
                for (let j = 0; j < item.maxTimes; j++) {
                    if (item.times === item.maxTimes) {
                        console.log(`[${item.taskName}]已完成`);
                        continue;
                    }
                    //开始任务
                    if (item.taskId === 7) {
                        await beanDoTask(1, taskToken);
                    }
                    await task(item.taskId,skuId);
                    //任务返回结果
                    $.msg = await beanDoTask(0, taskToken);
                    console.log(`[${item.taskName}]${$.msg}`);
                    if (item.maxTimes > 1) {
                        var taskList = await beanTaskList();
                        for (let items of taskList) {
                            if (items.taskId === item.taskId) {
                                taskToken = items.subTaskVOS[0].taskToken;
                                skuId = items.subTaskVOS[0].skuId
                                break;
                            }
                        }
                    }
                }
            }
            //领好券
            await task(0,null);
            //任务返回结果
            $.msg = await beanDoTask(0, taskToken);
            console.log(`[领好券]${$.msg}`);
        }
    }
})().catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
}).finally(() => {
    $.done();
})


function requireConfig() {
    return new Promise(resolve => {
        console.log(`开始获取${$.name}配置文件\n`);
        //Node.js用户请在jdCookie.js处填写京东ck;
        console.log(`共${cookiesArr.length}个京东账号\n`);
        resolve()
    })
}

//查询任务
function beanTaskList() {
    return new Promise(resolve => {
        const requestUrl = {
            url: 'https://api.m.jd.com/client.action?functionId=beanTaskList&appid=ld',
            headers: {
                Cookie: cookie
            },
            body: '{}'
        };
        $.post(requestUrl, async (error, response, data) => {
            try {
                if (error) {
                    console.log(`${$.name} API请求失败，请检查网路重试`);
                    return;
                }
                //console.log(`返回数据【${data}】`)
                if (safeGet(data)) {
                    data = JSON.parse(data);
                    data = data.data.taskInfos;
                }
            } catch (e) {
                $.logErr(e, response)
            } finally {
                resolve(data);
            }
        });
    });
}


function task(taskId) {
    return new Promise(resolve => {
        const requestUrl = {
            url: 'https://api.m.jd.com/client.action?functionId=' + functionId(taskId) + '&appid=ld',
            headers: {
                Cookie: cookie
            },
            body: '{}'
        };
        $.post(requestUrl, async (error, response, data) => {
            try {
                if (error) {
                    console.log(`${$.name} API请求失败，请检查网路重试`);
                    return;
                }
                //console.log(`返回数据【${data}】`)
                if (safeGet(data)) {
                    data = JSON.parse(data);
                }
                if (taskId === 7) {
                    console.log(`等5秒`);
                    // console.log(`请求数据[${JSON.stringify(requestUrl)}]`);
                    // console.log(`返回数据[${JSON.stringify(data)}]`);
                    await $.wait(5000);
                }else{
                    await $.wait(1000);
                }
            } catch (e) {
                $.logErr(e, response)
            } finally {
                resolve(data);
            }
        });
    });
}

// JingDongShake//1双签领豆
// plantBeanIndex//2种豆得豆
// sceneGetCoupon//领好券
// JingDongStore//4鱼跃大牌闪购日
// JingRongSteel//5一加手机 "process": "0/4",
// JingDongTurn//6关注好店 "process": "0/5",
// wareBusiness//7猜你喜欢的商品 "process": "0/20", 等5秒
// JingDongCash//8惊喜福利 "process": "0/2",
// JDMagicCube//9边玩边赚
// JingDongGetCash//10下单返京豆
// JingDongSubsidy//11兑权益
// genToken//12热爱狂欢趴
function functionId(taskId) {
    if (taskId === 1) {
        return 'JingDongShake';
    }
    if (taskId === 2) {
        return 'plantBeanIndex';
    }
    if (taskId === 4) {
        return 'JingDongStore';
    }
    if (taskId === 5) {
        return 'JingRongSteel';
    }
    if (taskId === 6) {
        return 'JingDongTurn';
    }
    if (taskId === 7) {
        return 'wareBusiness';
    }
    if (taskId === 8) {
        return 'JingDongCash';
    }
    if (taskId === 9) {
        return 'JDMagicCube';
    }
    if (taskId === 10) {
        return 'JingDongGetCash';
    }
    if (taskId === 11) {
        return 'JingDongSubsidy';
    }
    if (taskId === 12) {
        return 'genToken';
    }
    return 'sceneGetCoupon';
}


function beanDoTask(actionType, taskToken) {
    return new Promise(resolve => {
        const requestUrl = {
            url: 'https://api.m.jd.com/client.action?functionId=beanDoTask&appid=ld',
            headers: {
                Cookie: cookie
            },
            body: `body={"actionType":${actionType},"taskToken":"${taskToken}"}`
        };
        $.post(requestUrl, async (error, response, data) => {
            try {
                if (error) {
                    console.log(`${$.name} API请求失败，请检查网路重试`);
                    return;
                }
                // console.log(`beanDoTask-->返回数据【${data}】`)
                if (safeGet(data)) {
                    data = JSON.parse(data);
                    if (data.errorCode) {
                        data = data.errorMessage;
                    } else {
                        data = data.data.bizMsg;
                    }
                }
                await $.wait(1000);
            } catch (e) {
                $.logErr(e, response)
            } finally {
                resolve(data);
            }
        });
    });
}


//公共
function safeGet(data) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        }
    } catch (e) {
        console.log(e);
        console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
}


// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@abclouds_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@abclouds_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
