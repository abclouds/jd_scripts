/*
海尔_欢乐大逃亡
活动地址：https://lzkj-isv.isvjcloud.com/wxgame/activity/1770831?activityId=54f0ddef8de44eab8faafd23520601ac
活动日期：2021-05-07 至 2021-05-31
更新地址：https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/adolf_haier.js
============Quantumultx===============
[task_local]
#海尔_欢乐大逃亡
15 8 7-31 5 * https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/adolf_haier.js, tag=海尔_欢乐大逃亡2021-05-31,  enabled=true
================Loon==============
[Script]
cron "15 8 7-31 5 *" script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/adolf_haier.js,tag=海尔_欢乐大逃亡
===============Surge=================
海尔_欢乐大逃亡 = type=cron,cronexp="15 8 7-31 5 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/adolf_haier.js
============小火箭=========
海尔_欢乐大逃亡 = type=cron,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/adolf_haier.js, cronexpr="15 8 7-31 5 *", timeout=3600, enable=true
*/
const $ = new Env("海尔_欢乐大逃亡");
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
const cp = $.isNode() ? require('child_process') : '';
let cookiesArr = [], cookie = '', message = '';
let helpAuthor = true;//为作者助力的开关
var _0xodN = 'jsjiami.com.v6',
    _0x445a = [_0xodN, 'BMKvfCk=', 'IMOqHyAL', 'wo9eAMO7WMORw5c=', 'w6UnWk3Cpw==', 'TUVkw69Rw74=', 'wqlkEcOjXQ==', 'w5bDmEbDu8KiwpALbT/CicO3d8KD', 'worDl8KORcOBwpg=', 'w7PDvsKVKzh+w5Y=', 'MQLDssOmw7AMw6XDj8Kaw5rCnjc=', 'GMKJewU3wqp/wqvChUw=', 'w6rDpMKieRFWwonCrMOS', 'QxVDGQgmPcOawoAfw7s=', 'wpQhe8KuwoLCjRFKw4LCgA==', 'E8O9wrwhw4vDp8KQwqLCisOZwpU=', 'E8O9wrwhw4vDp8KQwqLCisOZ', 'wqLCnHTCusKf', 'GTI9P8K3w6JXwoDCgg==', 'w5pcAsOhQsORw67DqjMJWg==', 'wrvCoMO7', 'w5jDg8KOS8O6wqnDqsKZIsO9', 'wqDDpMKmDgg=', 'wo1Qw6fCqh1U', 'exLDtcOhw7U=', 'VmNyUlE=', 'OcOzw63CpcK4', 'Fk4DDGM=', 'wpXDu8KrYMO4', 'YcKRwp4yK8Oo', 'WMKWcFcN', 'LsOBKyQaesK8w5HCqF/Cjg==', 'Wl9Fw5VWw7rDucOR', 'ScKWOhB1wr85wq7Dv1Qj', 'K8Omw63Cn8Of', 'w67lvJflpJ/muI3mirI=', 'E8O6w7Ft', 'DhZOOsKcwpU=', 'wqnCrMOrbsKIw6RQ', 'EkVA', 'wql0wpBgw7U=', 'w4UKw7jClsKP', 'w6Qbw7jDozQ=', 'H8KWWARO', 'E2LDr8KoWyU=', 'w70rcl1Uwqh7w5wA', 'w70+clhywqB4w5IADMKvwq7CscKMBsOCJcO4PRnDtsOWw5fDm8OBwrlNw5bDt8O6BAYASGPCtMKjP8OGVWbCkcK6LMOswq5dLBxow5NFTMOzEHbDkAE7CcOn', 'EsOzw5vCksK3wpzDskk7wqo=', 'wofDkEjDtMOy', 'w7ozXUzCrsK0wqDCisOd', 'CkgR', 'A8O+w6xNW8O/fQ==', 'wpFZVA==', 'wrLDr8KMDDA=', 'cALDqcOHw7A=', 'AsOnwqEPw7M=', 'VHTDgnzDiQ==', 'wpxNYXDDnA==', 'w6EGw4UNYRk=', 'bcKfQsKgVsKBw7AJHQ==', 'wqg8dF5FwrVGw5BT', 'wr/DoMKifxtQwozCsMOVw4jCnw==', 'dF3Djw==', 'wofCtUAhwpTCv2fDg3bDpw==', 'HcOew4TCjsOj', 'C8O8w5vCvcKawpvCkcONw5nClMKKQsK1YUY7dg==', 'w5M3fMKiwobCsRBaw6/DmSQ=', 'OMK1SV9q', 'woDDkcKPPcKD', 'KcOLHSYPa8Kew7vCpw==', 'QsO6w7ttXcOgTUbCp2Rk', 'a8KsRA==', 'fsOjw7LCk8OZOcKswqdZRA==', 'f8K1UF0+ThLDk8KAwoTDhGMHw5vDrcKGwpIEw4NqDU0ucMOqc8KLT8K0wox+w6rCsA==', 'Dg1KL8O5w5Fiw4Fgw57Dm8O+w4sYRUrClA==', 'BcOrw6h1W8OxeUfCp283QAIMcm4pORYCw5LClcOhIG/CshXCtwh1IxfCtw==', 'TyFKwrjCrTfDnMKjw73DkV9AXMKnL8OJQsOhw6J3wonDnMKYGQd3TcK0IMO8wqA0w7McF2ltwoTCksO4w5cxcsODw6XDpnkyw797wqlIw6HDqsOswpbDhcOMw4bChMKJfcKHW8OYwoNhw5xfwr0+w5Z/O8OWwprCuHfDusOywqzDo1fCn8Onw7FDw5kowojCmUfCsURZNMOmwqReWMO9wpfDjsOiw7dEw6M8wqMTO8K6CsOIwrgrw5hFT8OSw6TDgxNeBG/CuwlnP8Okw7/DsxHDh3Yow4jCmGjDt8Oewq1+w4Myw43DosO9w78Mw5poIikeETlJwp1pZAsmXMOcwqbDhsOXw4Ziw4BJX8K5w6xfP0rDnWsBwpvDqxbCuUbDr0zCjMKrHcODwp1OwoMQZ8OQIcOSw57DhMKuJcKMScOPwpAlTMOeZEFewqLDrjANwqEdBQRocR3DpjMsDSjCgsKUw7dYw5cTwo7CgCY/EsOuw6zDr8KkwpIqLyjDmMOLPMOFVgJXWkMtRcKMUVDDjDTCqERWesK+w4oWw7/DiDBuC2o+A8KxwpDCjhbDkyprw67Dmg==', 'w5vCqB4nwog=', 'wp1NEcO5RMOAw5rDqzMCCV/CusOYwrQ9', 'wrvCvMOuw4Ysw5nDq8Ojwq5Ww6TCmcKcJcO3w7AgasKAw7nDqsK2wrrDmj4Iwrw4MVE=', 'CgJQK8K6wpxjw5Ypw5XDn8O+w6NNNUHCiMKQ', 'w5bDmEbDu8KiwpALbjHCsMOzK8KbDWnDk3w=', 'LcKvw5XDh1tOw4XCkRPDqGzCsQLDkC0=', 'wp/DmsKwOzU=', '5a+/5oue5Luu5Yu844Cu', 'MMK4w6TDsUM=', 'N8Kvax0q', 'wrNoDsOFVQ==', 'H8Onw5nCj8KW', 'dkzDjCrChxvDq8OaJwMOw47DrHzDmCLChQ==', 'Y3TDjHjDhQ==', 'w5bDmEbDu8KiwpALaDPCqcO/csKBDXHDomdsw73Cq8Kow44=', 'BMOow4jCmsKswpDCqV0LwofCrQTCtQ==', 'wofClE/CvcK2', 'wotFBsO0QMOGwpTDuDsAAl/CvMOewrg4w5nCsCDDtcOb', 'e8KZwqkeMA==', 'w7A4QsOMw6I=', 'aX3DlWnDkA==', 'wqzCh8O9XsKI', 'K8OPwokdw7w=', 'wpjDjgwswrM=', 'w58nQinCkDViw4/Dlz1xw58JwpLDjX8Cw5PDq20Gw5fClcOow6fCuX10Mz3CglnDuQ==', 'Zl7DrwTCpw==', 'HnEPF0Q=', 'w4XCmx7CtVk=', 'NMOsw6rCnMKGBcKqwrgTEB3Cs2xLF8OjCx7CmsOnFng=', 'AsOjMhwea8K+w4DCrF3CnmEXw70=', 'wq/DhCUawqoYFsOPwo1nPcKGw6wTw44kw5puK8OCw4FUwqg5woMiHlAMbGFSwqo=', 'LMOHExc+', 'KTsaKcKD', 'DgZ5KsKU', 'E1YDDF4=', 'NMOdw59Dew==', 'O8KMVcKiRw==', 'wrRdZm/Do3B9LMKHwrsfYnLDp13Ci3nDuxPDoDJawpURwo7CgsO2', 'F8KvYTw=', 'w4UsVT7ChyBRw5LDkA==', 'DRZXPg==', 'QSRfwqk=', 'wr/DqsK1Oi16wp3DoMKLw65yw4M=', 'RAZcwp/CtQ==', 'C0AGE0ULw51s', 'wqrCqMOrWw==', 'w6Iew6MaRSc3dg==', 'BhxBAwQx', 'PsOPCjU=', 'H8Osw53CssKUwps=', 'wrXDlsKCMMKm', 'A8K8ejlZXMKtYMO+cFA=', 'w7Iew6QQ', 'wrBJeH7DhXk=', 'w5IoQi0=', 'ZFvDrQ7CoQ==', 'wr/DqMK8', '5pyy5q+k6I6X5b6m', 'd8KRwoQ3', 'wqnmj7/ooZTmpJjlkpbmrLzvv6w=', 'w4XDgVXDuw==', 'woTCj8OIw6Iy', 'wopZw7LCpQ==', 'w5jCsCfCuGQD', 'w5Q+w5zCvMKp', 'wrfCq8OGdMKp', 'GMOOPcOnH8OU', 'DQVCKMKcwp9gw4tSw4vDisOv', 'J8KCQA==', '5oCH5ZeL6I+p5b+a', 'G0ABGQ==', 'CxJCMQ==', 'w4XCoUcl', 'w5UXBcKMwpvDiS0=', 'wqrDlSEX', 'w60kX0nCgsKuwpbCjA==', 'w5s6a8KnwoXCvAFQ', 'AxULJcKz', 'wpxnwqVew4o=', 'wr7DgSYe', 'wr3DkTsSwo0UA8OSwoJx', 'w4/DgUzDvw==', 'w6ofw7TCo8KuwrDDkcO9', 'SX0Df8O1w5EmwoQm4pamwprojL3lvLkU', 'PsK2w4bDhw==', 'w5jCsCfCuGIGZA4=', 'L+mjg+WlvemQtuaNuDY=', 'wrTDrcKAMC96wp/DsMKqw6VX', 'wrlJeH4=', '5Lme5aW65ZSA77+/', 'woPjgYbkupLkuKLot63ljLc=', 'wpVTBcOwVQ==', 'wrHDr8KAOA==', 'fWDDtWzDiMKBWsKO', 'BDYzKA==', 'woPpo5Dlpajpk4Dmja7Dug==', 'w4DCo0ctwpDCg2bDk0fCqC8=', '5oK65Za06I6i5b6M', 'PsKlw5PDkX9FwozCmQ==', 'CxVNCA==', 'wrc2cA==', '5Zes6YKr5rKf5py35om25Yuw776u', 'LcOWGTUHesOhw7bCpnjCincP', 'w5MTEMKD', 'wpLCsWPCjMKj', 'QkZvanU=', 'PcK9Rydi', 'Bjg5', 'EydDIzY=', 'M8OWwqMPw64=', 'ewzDtg==', 'w5g4M8KvwoI=', 'wrzCgsONw7sI', 'Y8KfwoMi', 'wqpaw5zCgTg=', 'P8Klw4DDiURmwo/ChQHDpG7Duw==', '5LiN5Luc6L+n5Zqa5Lmg5Luq5Lig56uQ5pWi5o60', 'HsOJw71q', 'wqsaw4s=', 'wr4sw7QQfQ==', 'e2BXW20YFWvCm0rDj8OJw73CoMK+S8OqwqfDmQ/Dki/CrsOwfMOJw7XDvQhtw4Q=', 'Ck7Cuw==', 'wqbCvcOrSsKSwrMaSGcJw4clwoLCrEkTccO5w65KwonDihUbwqUhR0vDmMKlMg==', 'HcOCw7XClcKj', 'w5c5RiDCizdgw4/Dlz1xw58UwpPDi2U=', 'UQJ+woLCsw==', 'wrEAfElt', 'w684w5s9Qg==', 'wqTCrcO+SsKRwrJcN2Mcw4IqwpTDvBRQccKiwqYNw5DCh05P', 'wpvDoRwy', 'w5c7w5k1', 'wqLDssK0ewRNwqvCscO9w5zDkgJ2w5/Dj1rDlMOawoZyw641ZMOCN8OKwqZBSBHDs0oZw77Dh1lHTlrCigsIQcOTwoIXw5LDocOGwpjDjQvDncOHw57ClkhCw5vDtg/Cu8O5wptdwr/DrnsqM1/Crj/Cl3d8OXPCusKywp1awofCqsKWwobCix8yw78rw5jDlcOkdQYzWRhWwrNbBkDDj3vDncOMbsOEwqTDrMOfawrClcK/w4Z6b8OsHcKzwrrCnsOsw7jCpMOAwoUwwonCjRPCnFlDw6sKw6rCoxZhaSMMwovCh8Kpw6E5w51ow7hqw77CvsO2w4lTwoLDkMKEw43CsMOaSMOww4rCvsOpwo1Zw4IFccOjLcKIc8OSw6AvJMORFjdTwrFxH8OsARtvecOMbsKpw556esKsY8KoWMOcwoZPIH8mPk9RYRgkwpRLw50ZwqA+eTnDhhnDlzlBwol+L0QSwrbCocKle8Ocw6xLwokyw7QVwo0=', 'H8OEP8OSQMOHw6tdY8KE', 'w5UmcsO8w5M=', 'w5cYw6XCocKTw6vCk8K3wqZBw5PDiRrCh8Oaw4/DgcO4W8KkMMKyNhXClMKuVsO7w4wjwpJjw4/Cvw==', 'T0B/wo9Jwr3DvcOSwpXCsAZb', 'O8O2PC4t', 'wqbCvcOrSsKSwrMaSGNGwoIiwoHCr15LPMO/w7A=', 'wqoFw4ovQA==', 'O8ODw6TCpMKw', 'w6XChVUowr4=', 'AiMqPcKhwqwow4bChDECworCviFYwr7CucKAw6PDkMK1w5jCp8OZwqbDqsKhwozDksOjQcONQFUzLcODV8KdchRswrgHwo5MFWjDrsO+WcKtCMKKCjbCpSgcJMKrScK7X2Aww4VuUwpqwqQGwp8yDsKAHcKBDsOLw6JNw6rDjzFuLETDqMOEW8OtdcK8w4YQfCXDpMOXw6vCgsOUMSF8', 'wqhwNcO6Zw==', 'UcOiNyhfWsKrYsO2bkHCm0hJw6jDgsOpPXrCkMKIwpLCp8OndWlrOzDDt8OfeHo8wotiTsOgwp7Cuw==', 'RnUrPsK3w6RXwoDCjyYWw4XCsjYaw7PCtsKGw6vCkcKjwoTCssOUw7/CiMKrwpnClMOcSsOMZR91BMOhDMKpP1Mtw5tbw5s=', 'w5Myw6gHWQ==', 'w4cdF8KW', 'cVXDmTjCjw==', 'w5ozXSbDjz1yw43CkDtswoYUwoPDiGQSwpjCsnwAw44=', 'dhPDocO+w7AZw63Dj8KKw7zClCVhwpHCkMKs', 'BcOrw6h1W8OxeUfCp283QBBSandyNAQIw5jCjMOjJXHCvxnCt0c6bV3DuQ==', 'w5QJw7TCocONwrDDkMOxwrFU', 'DQBUHRRuR8KAwoUBwq0gw7HDjATCgMO0DgDCqcOKOMO1LcO6wrs7NMKLNMOO', 'ZcKIwo8=', 'MMOiw7XChsOYVsO2w6FRAwXCrytBCMO6UBPDh8OyE3ZdBcOXwozDlMKmw4dKwpo=', 'c33DhwXCjA==', 'dCdnworCmg==', 'wqx0IMO9Qg==', 'GzMTLsKq', 'RsKNekg6', 'w4nCtEc0wpXDkD3ChX7CoCjDiCdrw4bDjMODISLCi8KFMMKDBsKfw6BgLcKeFA==', 'wobCncOTw7I=', 'woQCw7TCpcKXwr7DjsOzw6hGw5PCgR7CksOxw6/CpsOfGw==', 'wr15KMOR', 'w7/CjnvCuMKgwqPDhD/CjwFhIcOuUWg0wrbChsKUKcOITBhowqR2bRFUQRLChgZNwonDu8KMKz3DvcOnC8Otw5vDq8K1w63Csm5VWcKeGcKzMDwVw7rCsDZoF2xKLcOyw7IPwq/ClTfCvFrDv8K6IMKjIWjCjcK2GsOew7hSfsKtw6TCjMOrw7hLwrtfEQ1yDcO4MxPDolkmVypjw5RjByUEccOAw4vCuMOVWVzDnBvDhVplf8KKSErCt8O9dsOnwqMeasOScx7DosK2woEwwpY5wrsUwqnDgzMTc8Kaw4bChHNqw77Cm8OIw5TDjCTChsOuaMOJH8KoHjjDvcOmwqvDvAY3w5fDqsOuckrCsQLDhwbDgsObw4UhwqTCgxJpPMOXIC5yZMKew7rDt8OuKDE8woTCjU15wpXCtCsFw5kZwq3DuztLwqLDicOqw7MoPMKxw4AbMSzDtSZTwrtSaMOUSMOtY0fCv8K9V8O2ZTM=', 'BQcRFMK9', 'wp/DlcKJR8O+wpXDq8KJE8Kyw6Q=', 'LwcHC8Kk', '5Luf5Liw6L6y5Zm/5Lmu56qk5paW5o2j', 'wobDnsKyO8K9', 'wobCj3bCsMKZ', 'KxvCgQ==', 'EMOqSj06d8Khw7zCrAPDmjJTwr/DmsOhw45gOsKWw7jDpmrDh8ObG8K4V8OYej42KcKJw5tYw6kBMUjDmMO/H8O6QcOLag==', 'woxjwqBFw45FZDnCvcKYScKFX8OIXB9fw5lBw5wTwovCnh/CmMKFb1TCjsO6I8O2YCPCvMKLa0ssbsKJw45zw5bDqn4aHMOSQsOnwrFfUcKEw5ohwokh', 'WnbDssKYdg==', 'w4/DhsKqeho=', 'e8K9cVgV', 'IsO+wqzCvsOKAsKqw6N+N1XCtDsZ', 'wqAPw4UaIwTDp8Opw7tMw5TCqMKEw4HCjMOEJA==', 'w6s5WkfDtsOlw4fCocKWw5PCkMOcd8KkwpDCmgUdHBNawrxRFwfCvsKtecOewq3CpH7Cri7CtMO8wr/DhcOUw6/DhzRQw4oVXkLCpsKbwo7DrcOfMTtVACPDqMOEwpjCggpnw7rDo8K9PnHDm8OHwp1lwpzCvGzCkU7DrsKOwpUAwopHw6A4cMOjCCbCvcKMw73DhMOESsKIWsOyIMOVJUPCvjnDrcOpw5HDh8OoOsOfw5pnw5MoOMKAdwoCXcKuSWzCvMOPIcOydibDpMOawppkw6NEw5MnMABFBQg1KgPCihUQwrdNQsOYTsOsw6cDHMKZw7tWREN6worDg8KHRsONY0tWwrvDgyg8KybDiB9lAcOXworCvsO6w47DuE5nDD7Cl8OYw63DssKqwpU7Q8KpMsKcw7jCpAB4wrg=', '5LiF5Lmh6L265Zma5Lu656mc5paX5oy6', 'wp5Xw7XCsA==', 'wrnChcOLw6UO', 'w60ww57Dpjg=', 'w5olRcKRwoE=', 'wrZtJcO+Xg==', 'wpEvw40DWg==', 'w5HCoUE3woM=', 'OcOBGjE=', 'w4jCrS3CqkU=', 'D8KgV8KzZg==', 'DMKcdQA0', 'A00Uw5LCjQ==', 'wqDCg8Ozw5E6', 'woJXw6E=', 'e0xaXWg=', 'wqkcw48BQUXDrsOp', 'F8KDbAcvwqJmwrc=', 'GU0aF3s=', 'a3HDlWPDqw==', 'wpxZw6jCoBFc', 'C8O0w6jCucKw', 'wqvDv8KjEMKfFVzDtsOIw78AwpI9EcOEXQnCkzdkw4Ucw54ywrbCjzBqwqYZWRPCsEAbK2PDtTPDuw==', 'wqk8Z0BBwqJz', 'LMOPw5DCrcKn', 'AU0Iw4XCh8Kz', 'bsKOQkcF', 'LsOBLSAYdsKgw7U=', 'w4sDw4TCocKQwrTDjsObwqZCw58=', '5LiN5Lq86L+15ZmE5LmJ56qP5pWU5o2n', 'wq/CucO2FMKMwqdfAyUQw4Mi', 'w4gNw57DqBVFwoYgw7FXw6/Dl2QXwpUcwpQuZlvCv3MlwpfCqMO9w4xEwrcDG8OcUQ==', 'FMKcYQUn', 'GMOUw7rCqsK9', 'J8Oiw5rCjcK4', 'w6zDssKkeT1Mwr/Cqg==', 'w4IYw4vDtFFHwos9w65d', 'KBtaBAs4CcKAw5xVw7Zqw7TDjCfCnsK1CRbDpMKAGMOJF8KvwrZFP8KLN8KECsOFw4J1XVDDpMK7w5vDpcO+w49twqzDnh/CjsOZw5XCtVnCujczLcObw74dw55vWHnDjFbDvFU3wr89HsODw7fCvMKMwpsew59dVsKUwq/Di8KmwoZieBAywp5YccKFwqBmGcO0cMOgL8KfwptaHTvClkDDvw7Do8OKw6zCh3zCgcKDRjh7ccKVw7PDvcKWCMOLwprDvsKpGMODXi5kw4DCscO/', 'wr9cYWvDvyc3ccOAwrMXcw/Dox7CkXHCsDHDrCs8wpYOwqvCsMK2woHDrXoEw6LDsFDDhcOPw47Cq8OwBcOEPxgGw4cxTMO2wrxmW8OwKcKGd8K/woYV', 'FMK0fC0AH8K9ScOxb0XDjRdHw6rCjMK5', 'AiMqPcKhwqwow4bCgWEBwobDoCISw7rCvsOBw63CkMK6wpbCsMOPwq/DnMKXwpvCmMOOC8ORXRxoWMOPBsKzSCZWwpgQwplXOTfCs8O5ZcKrX8KG', 'HsO1woLCmsKxwpzCqFoWw6DCoA3Ctw==', 'bVLDpSzCpQ==', 'NcKqbTJ5', 'amRNQHQ=', 'w5cfQsOCw5M=', 'w6XColoXwoQ=', 'fsKXwokAIg==', 'XXnDolzDlA==', 'I8KqcMKLcg==', 'w5YCFMKOwrzDnyHCt1rDhMKowpdbw6bDmsOlwoA+AsOfDsKuw7nDp2PDtRDDnllNw5zDlcK7', 'wpY3w5kuWg==', 'CcKmOD5C', 'wrc/w58EaQ==', 'wqHCimTCvsKz', 'wr5zG8ONdQ==', 'NsOJw5VOdg==', 'cAJKwovCtg==', 'McKkU8KZWA==', 'w6AFeW7CkQ==', 'w4MaIcKbwow=', 'w54hI8Kywo8=', 'wrPDo8KyVsOy', 'CcKLfR8k', 'wod4wrBQ', 'wq82fElO', 'wrBNYQ==', 'CQxsDAM=', 'w5klw7/ChMK4', 'w5fCpyPCvwYJbgjDtcOr', 'w4cCYwnCmw==', 'w7gYacKBwrY=', 'N2sCL0A=', 'wpHDjcKsKsKT', 'wr/Cp8O9w7MtwpE=', 'w43Cr1Q=', 'w5LDrEfDqsKN', 'wo/DsxEwwqE=', 'UlNnbXw=', 'AsO/wro7w5g=', 'c1HDnyjChRrCoQ==', 'wqLDrsKuDMK1', 'wokXw6c8aA==', 'woDDlh4gwqQ=', 'wqjDmDoZwrE=', 'wpZ2wrpRw5IS', 'LMKyw5bDs38=', 'wozDk8KJTcOnwpjDug==', 'wr3Dr8KHFi59wrvDu8KQw6dew5UJSQ==', 'CsOOw7lreA==', 'woHDt8KkIRU=', 'wqJbcGnDhXN+MQ==', 'BxVTCC46DsOA', 'wrlBdnDDonx1Ow==', 'wp8KckZ0', 'w5nCkyvChVw=', 'BnwQw5bCig==', 'dMKKwpkmaMKlJQvDi8KOPcKDAURDaGo=', 'Mx5NOA4=', 'wr5JYlLDhQ==', 'e8KEwoQmN8K/bkHDhcOXcsKaSgIHJHtzwrjDsDPDgx/Dq8OwMDRtMTHDksKWXXLDjRDCj8KKXWQ9V2vCr31ud8OudsKOGwfDvcOaw5gVL8ONM21/w4VKUMKkwq3CgcKQw7wyHSzCrmzDtzjCk8OXYVPCk14rw4Yvw6LCj8KGM2M8ecObQMKEJVo9Z8K0wpp0W8K7SsKLYQ==', 'DsOzP8OR', 'ZwLDo8Ohw7w=', 'CyFBHy0=', 'LsObOcOWHA==', 'cmfDpC7Cng==', '5Lqy5LuZ6L+05Zuv5LuR5Lit5LmB56ud5paZ5o6F', 'G8OtwoYnw5nDqw==', 'fAbDqMOh', 'LcKCVcKUQ8KLw7U=', 'FsO+w5k=', 'w5w7w481TAwRRQ==', 'e8KrVg==', 'w6M5w7HDgDlkwrIT', 'w6MMdMO3w74=', 'woNywqBRw5wLKg==', 'w5UQw78aYCs3SMKy', 'wo1Xw6nCrxdU', 'a3fDon7Ds8KcWQ==', 'woxIEsO9', 'dMKVwoQyJcOxIA==', 'w5rDrsKuYB1HwpPCgcKO', 'KsOzw7fCk8OZH8K8', 'GsOqwrw4w47CtMOLw7TCocOYw4nCscOFZH5cwoptw6Eew6rDl8OHwoZgwrPChMKKNTppQ8OZwp7CsBguwq7Dh8KUw4VlDw==', 'wrZreEnDvA==', 'HcOZw4XCgsKo', 'wrvCvMOuw4Ysw5nDq8OjwqNcw6bDncODfsO2w6d3LcKQw6DDrcO6wrzDkWUOw7MpOV03wojDosKPLcOAw7s=', 'wr3DusKAKSopw4TCpsKew6dSwokPAsO+fFFDdxbDhhgrw6kjeMKwwp0JwqpNI8KvP2UiPXM=', 'E8OuwqFmw5DCoMKOwr/DrcOew4fCsg==', 'Qj9CwrjDsSzDkcKWw7PDklBRAsKyIcKfHg==', 'IMKIQsKhD8KJw7EFVsOW', 'OcOmw7HCmsOCD8K4wrpUFgDDqmxbFMOiUlrDgMOhAWEeGsOOwonCk8KrwoQHwp/CoMK+', 'wpTDksKcXsO4w4fDtsKgLsKvw6Ysw5QRw7hGWMKgV8OuQsK+MCDDtXzDlUfDjMKDCkTDv0vDtCwkw4jClsO0w7IlK2vDh8OxNSPDqMKewpHCgcOmwrfDqhfDk8K9bVoMPBrCsU3Dg1fDpzDDjQnDq8KQZsOvZG/DgsObfMKcwqANPcKoWsO7w4dqESVvPXrCn8OqwpI4emPCv8Kiw73CiMKcw5wMTlVedMKrDsK3BS/DrUPDnsKww4HClcOcwpTCrgxuEsOgES3DpMOXwppJw6B3aybCq8K4wqXDjMOYSlTDqcKobjtpw6pzw7/DkD/CoMO4w6grwqfDkcKhw7vDhMOVJAvCryRoI8OUL8OowoIcwoTDsjE8GMKGwphQTjjDtX09aMOtwq3CoxfCjcKMEcOkw5YEO8ODwpXDrRXDmk7DhBDCicKdw61XwqQVwqE/wqTCl8KuVsO6EsKhw7rCpMK1EirCisO7a8KpwqRtesOJM8OZw4rCvcO0wogcw5pGw79uEsK3Kxs6DF3CowAaCsO/w6rChm7Du3owEcK9wqLCuljCpsKWwrbDqMKrHMK3wrXDpQYUc8KDwpNYR8O4TQ==', 'BUlYG2c=', 'VcK/wrwdJg==', 'ZhdKwo3CiQ==', 'VgLDm8OIw5U=', 'w7YYaMOhw6k=', 'w7sew74YfSE=', 'wqnCl2g=', 'w4U9f8KbwrM=', 'w7zDh8KrYwQ=', 'w63DtWvDisK8', 'wpZpFmzil7505b2S5L+b5paI5Ymi6L+G5p6R6YGk55yF6K2Q5piF5LyH5YyT6IGh5Zy35LyQ55aL44Ogw7LDhsOmSGk4EcKqSsO1w4jjgoTpo47nmZzDl07DtcOxw7Pilrhq5aWs5py15L675bmv5rOA5p+S5L6555WN44CnUsOWV8KYw6TDgcKIwo4lwrTCm+OCrumikOeahuS7geaXmeWJoOS5gOi/q+adhua3reaAseivk+ekkOiAquaKhMOvXcKow6DCoOKVr3Pmi7DkuIDll4zmrrfjg44uGCkVw6hLw48xWsOsRuODn+aSl+i8uuaJi+iEk+aehuebg+ihouS5kldPRsORduKVmhTluJ/orL3mmrTmjoXov47ooYLnj67lopLChsKYN1LDj+KUn8OEbcOSf8KVw6nDocKfw75OC8O6w5pmROmDmee+uuaVvuahpSHCq8KoACQTw4HDrcOVG3zCtsKEK1rCn8Ouwq0qw7B+wq3Cv8O2AsKCZsO0acOZwoPCijJlw47DqcKXw6zDl8ONUsKf4pSAwpvpnK3pv53CpnvCmQjCpQ/DpemDm+e9qOaWk+aiq+++pDIuEsORwq8bATgRHMOeLETCtCgaLMOaw6rCrVB7VsOXw5rCjQnDuSPmipozNAtVw5x/woV3W25rw78NwpzDtcOyGOitteiHjeigv+afuuaJo+OBsMKpPD5yQ+KXkErku67mhbPpgLrpnqblpq/lkb7nmbblppbkvLrnmZ/pgqznvrrml53moorDtWrDlS3CrsK5woMtZsOww4vDgQtG6K+L6ISL6KCJ5p6L5om744OVwrHDhsOf', 'CcObDjEYUsKvw7zCoFjChCTkvITopIjmm4Dku7vkuZTlsbnmi5nmi5fnmJTkuYfkvaTkubHlubPph7fli7Hkup4=', 'w5rDrsKuYB1HwqrCj8O4', 'MEMJw4rCgcK7wqxJEw==', 'w5rDrsKuYB1HwpPCgQ==', 'w4DCs1oKwoI=', '5LuI5LqH6L2M5ZuH5Lq056uo5pWo5o2d', 'wofDksKwXMOi', 'wrNjwoNDw7k=', 'wpIXw5YtTQ==', 'wrBARlnDlA==', 'R1BVw53DmMKiw5dxEw==', 'w6hvIRgUw7knwoBfG8OpwrrDoMKaUMOCMMOPPU7DosOSw6TCi8Kew6sUwpDCs8K+BRQ=', 'w7fCmDbDucOjw7TDkCjDvhVwfMK/ODoswqHCg8KbdcKeWysIwpFzIg4HSBvDkg==', 'PMKeHWRfLcKowqDCqkjDnWdQwr/Dm8OnwowsYMOzwqDDqmLCk8KEXcOpK8K8aD0w', 'KcOaF8OpFcObwq5fQcKKR8KSwqk+G8O9JXs1w5HCucKHw6BGw4/Cm8OKwrXCqAZlJw==', 'wrE1CQfDvsKjw4DDlMKFw5XCkcKbMcKrwoPCkFZZHDEcw6xRUVDCucOwNMKYw67Do2k=', 'wp9Kwp3DokQXw5NtwqoJwrbDjzoGwpxCwoE4IF3DtGYyw5HDt8Kkw4NLw7kaB8OK', 'fyrDsivCtcKNCcKHw45jQg7CvsOoHsKRVQNBdcOhZGw9U8OmBsKWw4k9w7rDhg==', 'w6HCusKQampyworDrMKbwq4CwpVJAsK5K0kPJ0DCmQ5ywrtufMK3w5xZw70SdQ==', 'wonDtiDDv08MZwfCu8Oqwr7Cv8Kyw7nCq8OUwqzDuEXDtRHChRUywrvCssONcVd/w6cK', 'woRFGcOtVcObw4PDpyIVHwjCqMOTwqMrw5jCjCrDrMOUZcKrUMKvw5BTSMKSw7QiMMO/wrwgCmzCjTgF', 'P8KdVw0Y', 'FMK5w5jDll4=', '6YGU6KSx5L6Q5pm55LmE56WI56eO5rG6', 'wqPCusO4', 'w4YlTsOKw4s=', 'UVHDmxvCmQ==', 'EEhGwo/DhsO+w4ArAQ4fA8ORahDDpl5+w7/DkMOAVw==', 'woo2w7Ybfg==', 'wqXCgsOww6wG', 'w4wFw57Ci8KR', 'BsOzNsOuOg==', 'DhNxNcK3', 'w7fDj8KsWSQ=', 'wqzDj8KedsOt', 'OhEvK8K/', 'wplJMsOBVQ==', 'By1tAww=', 'w5LDlMK3cR8=', 'w4w8w6IURQ==', 'GsK6RQcO', 'wodHwp5ew7I=', 'w50Sw73DsA5Pwokz', 'dVvDvjvCmhvCtsOxIxwb', 'FgFQCBU=', 'w78Rw7MdfCohcQ==', 'd3zDkMKpXA==', 'w5YbcsKTwoA=', 'FcOiw4rCng==', 'HcOPOcOOGMOCw6JH', 'GsKgdjFZW8K8Xw==', 'YWHDlcK/eA==', 'PCJIPQE=', 'TjXDucOCw78=', 'wot4wqBCw7g=', 'J8KIScK2VsKA', 'w7TDk0TDqMKBwpRJbA==', 'WHDDssKsXQ==', 'w4Qcw5rDpxQ=', 'w58nUinCmg==', 'wrh6XknDuA==', 'w6c/XVXChcKhwp3Chg==', 'w6U5WQ==', 'UMKEVH5ANcOkwrjlv4nlp6fjg7vkuqjkubjotq/ljJg=', 'wrrDqcK/DcKf', 'woBRw6XCrzBQw48W', 'VsKuwpbDtsOdw5TClMKAwrI=', 'esKDwrw5I8OsLw==', 'KcKNZzhg', 'CsOhw7XCusK7', 'w67DqmPDnMKc', 'wr7Cu8O9', 'wrU4ekk=', '44O+5o+o56a844OVHV7DjRh9w57ltanlpb7mlKg=', '5Lq75Lm/6La35Y2l', 'R15yw4Rc', 'b13DiCDCpB/CqcOX', 'JsK9cC9iXsK0SQ==', 'w5/orbnphLnml6nnmKLlvYbojZzljZ/DtcO/T8OTDUPCtjIHD3EYw4UZLMKjZ37Dv8KMAcKmCy/DpTdlaStiw65Qw4xjbjZAwqsTw6/CrHjCgMOb', 'I8KrZQ1f', 'wodLw4jCqxpU', 'EcKuVcK0bg==', 'wqLCqV3Cn8Ko', 'FsKnw5DDoVg=', 'wr7DtMK8', 'QFF7w4Q=', 'bXhAw690', 'wq8Bw5gafB7CrMKjw79Fw5TCssOPwoDCgsOMMh8Gw5t+P8Osw5DClsOdD8OVwpXCtMOEw4M2UMK4wqImwrvDsljDgMK4w5U=', 'w7YIdsOgw5VywoIrN8OU', 'w5ENw7zCtA==', 'woJbcGnDgnx1Ow==', '5Lun5Lux6LSB5Yym', 'EMKEawk5', 'RsKDwpUkCsOkLAs=', 'P+ivpumFi+aVv+eZjuW9jeiNjeWMp8OgdFLCjC/CuQ==', 'w6QlWQ==', 'NsO3w6zCkw==', '5LiY5aWH5Zeg776R', 'C+OApOS4h+S5l+i3jOWOiQ==', 'w78Rw7QUcQ==', 'wqMUw5gL', 'esK3QUYeQxXDiA==', 'wr3CqcO3w5M=', 'RCZfwqHCq2XDgcKKw4DDjF0=', 'MC5QGMKb', 'FcKnw57DnHo=', 'w4jCs3A8wq8=', 'fnfDoA==', 'JcOcw6J6aA==', 'wqHDqMKTKsKV', 'w4U3TVnCrA==', 'NEYNw4LCpQ==', 'w5opw6Apew==', 'wrtHcg==', 'F1UBCHpYwoE3M8KpQcOrw7vDh1lgw6XDo8O+WBJZw6dTb0fDpC/Dv2NDeiPCgQ==', 'cFXDo8KDeQ==', 'w5MkeMKnwpnCuwVXw4/DknfCvsKWBcKaw7xvB1kqQCTDtkU/w6XDuMKGYGkMwol5', 'w4M4bH3Cug==', 'wq/DgSQawqg=', 'G1gSw5HCm8Okw4kiSVxYGsOfchHCpVJlw7fDn8KPQEwsw53DucKqw4BFK8ONw6zDn8KEYx80fzDCvcKqwroxw7DDrzPDnB9tSU7DrMO1ekvDmwIaw7wTTMOQw77DiMOaKcOTBgjDkATCpcKAwovCssO8OHvCicKrwqRkBcO7w6LDh0IZO8KjIcOoQE/DpEDCvVpMwpUURcOww4w+w6M5', 'w5pKAMOsEMKTwp3DszQKWlbCvMOKwq9uwobChzvDsMKRO8KmRsKIw4lZVcKLwrE=', 'wqfDg8K3CcKX', 'FVkIw4LCnMK3woljaA1LFMKEbCXDuVhpw7/CssKUdF0sw4PCm8Khw5YOCMKVw6LCjsOKNDEWPQPCucKlwpwGwqDCsEM=', 'wqdHZm8=', 'wp5FwrFG', 'a1txQlc=', 'wqzCpVbCoMK0', 'w5PDscKPWww=', 'JMOnwqYmw7A=', 'wqJ2wpJbw7E=', 'XsKzwqonNQ==', 'JcO0w5x0UA==', 'PcOHDCY9', 'I8KSeD0r', 'AMO/wqYsw5LDow==', 'wr0jw6EQYQ==', 'C8Orw6zCv8KO', 'wqNHRm/DvnR2OQ==', 'LsK4w6HDkkRCwoTCkQ==', 'ZwzDosOm', 'wqLCrMOxXcKVw6E=', 'w402BcKWwrQ=', 'ZVXDnyo=', 'woTDssKcWsOp', 'w5Y1fMKq', 'w7ccw6QCQAo=', 'w7gRTnjCvg==', 'PMKMTsKl', 'Z3TDtQ==', 'w6gXesKuwrw=', 'NsO+w6s=', 'OMKZRsKlV8Kb', 'JcKMSsK0', 'L8OlEQ47', 'wrfCmGDCrMKewqPDgiLCqAg=', 'wpJcDMOw', 'w7rCmjzCvmY=', 'w6kCfw==', 'wqZZwptTw68=', 'EhVJGQ==', 'Ql9x', 'YkbDtcK6eQ==', 'wr/DtxEVwrA=', 'wr4Rw6EYZQ==', 'w7PDt3DDtsKV', 'fsKRwoQ1LA==', 'BBZXPMK9', 'TCtPwq3CpQ==', 'wq3CjkLCp8K3wqXDmA==', 'NMK+w5HDjXhKwofCkw==', 'NsK4w5U=', 'w5YCw7XCtMKY', 'BD49JsKcw7dqwow=', 'wqlOBMOnY8OCw5bDug==', 'VsKuwpbDtsOdw5TClMKAwpLDsw==', 'w5XCsQrCoEwBbA==', 'W3DDq8Kq', '44Ki5o6E56Sy44OawpPCtwtIw4/DmOW3q+WmoOaWpg==', '5Lm/5LuU6La85Y2B', 'wrrCpsO+w5Mn', 'd3vDt3DDj8KOUcKE', 'woPorqHph7Pmlo7nmrDlvpXojYfljLXCucKJw5bDnXXCu8KPwocYWkozEcKgDBxfw6jDq27DhcKww7g5w7gOw7XDvMKgw5bDmMOrwqMzR8OZQxlQwrPChcKEw67Dng==', 'CMOzw7HCpsOY', 'HcOSFMONCcOD', 'w6EcRh3CmA==', 'Ghs4HcK2', 'wqV3OcOgZA==', 'wrTCrcOuw5I+wpfCpQ==', 'A8KvZy5J', 'EcOlw4w=', 'CTgxJsK7w7M=', 'ZQbDp8O3w6sJw6k=', 'wrTCiH3CoA==', 'woLCjsO2dcKA', 'FMKrYTlNS8K4', 'URTDm8Onw50=', 'w7ozUFrChcKvwoTCisOVwpg=', 'w5AefcO2w5V8wpsn', '5Lq/5Lus6LeW5Y6h', 'GsKgcThU', 'YOiuoOmGk+aXveeaqeW/g+iOsOWMv8KPa0PCjMO5Lg==', 'wqXDscKUG8KL', 'EDBtHcK2', 'w48OeA7CgQ==', 'wp5TwrVBw5w=', 'w5kcw5zDtxk=', 'woLCvcOqw54l', 'bWlzw4BA', 'wrw8Yw==', 'AMO5w6DCocKw', 'w4IAe8Kfwrw=', 'aVxEQ3w=', 'w5jDgWjDnMKl', 'MMKXcDxI', 'w40gAcKR', 'w6nDoMKzeBE=', 'MxlbFsKj', 'CWgHw5XCiQ==', 'wqPDpsKpG8KC', 'w5DCrSE=', 'I8KZU8KhUcOSwrJDQcODHcKLw7B1QsKraS48wojCr8OSwrkXw4nDgcOYwq/DulB0fE4N', 'FyZMITA=', 'HcO0w4zCsMKewp3Dn8Oew5HClsKBQsK+OFA+dcKQwqXDpcKaOMKcCCwiCsKNwofCgcKUw7DCjw==', 'w4DDqMKIQCU=', 'MUgBw7LChQ==', 'wrMtY1xTw7s5wpZVTcOzwrbDusOABcKJMsOEM1nDpsOSw6fDn8ODwpYZw5vCqsOVBFUUAiPCvsKEasOlQGLCsMKcM8K0wohtYEscw6BJAMO4FlXDpSk8AsKOw5HCoMOvwrZdwrYIVzTCp8KmDTDCmRTDq0zDnMKkYsO/w7E1w61eB3rDo31PwpLDnsOwfXjDtsKLfsKFw7g7BjnDnsK+NA==', 'wpA+VzXDn2Qnw5fDkDUiw5YSwoHDkDZBwo/DtXtSwoXChcOWw53Cqnx+PEk=', 'wr5+w7fCohM=', 'XsKowp7CqcKEwpvDjMOkw5nClMKKT8O8NwVlIMObwqzDpsKEOsOGLjYhH8OBw57Dn8OcwrfCmMKYw4fCtMOXwqVacQ==', 'KMO5w7LCgg==', 'T0PDo8K8', 'wqdJZ2jDqQ==', 'wqvCvsO7bcKO', 'w4cHLMK0wpw=', 'CycuIcK7w7Vmwp3ChWtCw4jDujhTw74=', 'bcKxUlg5ShrDgcKQ', '6YK56KW35L6d5piB5LqI56Sx56SQ5rOk', 'w7k5TUo=', 'wrbDkMKKK8KN', 'NMOPEzE=', 'acK0wpEiJQ==', 'wqjCmGDCr8KkwqQ=', 'IXQ/w6XCgQ==', 'CsOOw5jCssOC', 'JHsVw5TCpA==', 'w5sXCsKFwqHDlA==', 'BcKlf8KTag==', 'w54cw4fDsA==', 'wqzDk8KO', 'woB9ZUrDtg==', 'AMOkw47Cj8K0woY=', 'BMOQwo0mw40=', 'VHLDssK8fFw=', 'w4Uow7DCpcKB', 'EsKtYRRo', 'P8KCTMK0TA==', 'Qy1xwr/ChQ==', 'D8KNw7XDqUw=', 'HE4Sw7DCrQ==', 'w5olw7nDhzc=', 'AVg+w5nCkA==', 'wpLCh0DCisKC', 'fMKReEAb', 'D0RHbMOiwpdlwpZjw5TDmMOvwppQXRvDn8OFw7bCpBXDkMODw5nCgMO/LcKRPSLCgcO+', 'w4UwclXCig==', 'YMO1wrDDhsONW8Ovw7kEGA/CoDJNS8OtRknDl8K1G3QCX8OAwovDi8O2wp5Fw5DDqQ==', 'VMKxblwR', 'GMKSRwkM', 'BMOmHsOoAw==', 'HcOnw4jCtcKBwpfDisOTw7HCnQ==', 'UMKrcUM+', 'w5jDhcKITw==', 'wrp8w4TCvA0=', 'M8KVX8KpWsKQw6UUDcOLDMOdw6V2UMK3PzV+wp3DuMOJwq1Tw5TDl8OUw7nDo0t4bVkbeMK/', 'YETDj8KL', 'w4PCglwvwo0=', 'CMKjbMKmbg==', 'AcKvezlDUsKaQ8OzZg==', 'w6IXw6IUYQ==', 'woxjwqBFw45FZDnCsMKSS8OBH8KPRQ1fw5Ndw4dWwovCnhnCiMKPNRnCgMO0eMOodyrDosKAewouecKUw4hrw7bDujpc', 'w7cMdsOgw7RwwrUtNcOI', 'GiRIwrzCtHrDnMKHw6zDt1UY', 'w6LCkWDCr8Otw7zCmHvDvkEhfcK7J2Usw63Ci8Kfb8KZD30Iw4QnMk0NHkfDgQBswpXDisKfN3PDsA==', 'w7w5eBzCmg==', 'd8K8RVw8', 'wp5YAMO7', 'T1JHw6RO', 'ZRrDmMOmw5s=', 'fcKZwpM9CsOkLAs=', 'w7ciNTvCrD04fsKI4peIWuiOoeW+tsKu', 'w6szX1A=', 'KsK2w4DDlVM=', 'D8ODw7HCp8OR', 'w50Sw4XDoRI=', 'w5XDj0rDv8Kh', 'BRhE', 'DcKCw4LDt0w=', 'wrrCnMO1bMKX', 'woDCp8O1SsKJ', 'w4E7w5MDRQ==', 'wqnDssK+XMOE', 'clHDhS/CpBHCsMObJBY=', 'd3PDuX4=', 'eOe5keS6rumCteaakuW4l+mEqOWGlui3uuS+neWFkuaeuueZrwPlu4nlnJ7DjivDtgXDt8KLwp/DjC7CqcKFwpQ5cmplw5nCkcKKBHXCvMOQ', 'w7UCa8Ow', 'woxcE8OmSA==', 'w5HCsSE=', 'wqDCqMOyXw==', 'AhFUJQghGsOc', 'dHFXb39WXw==', 'wr3CrMOxXsKvw6ZBDm0K', '5q2s5Lmy6Iqx5b6v5Lq27760', 'OsOpw6HCnsKR', 'wpzDt8K6PAk=', 'EMOrw5s=', 'bEfDjA==', '5Lm45aW95pin5Luh6YS96KWZ55ug5peG5a+27768', 'w7oQw7c=', 'dsO35aaD6LaDFwvljbXlmJZIwqU=', 'wrPDp8KaODV/wpI=', 'PsK4w5zDgw==', 'BcKof8KwQQ==', 'CnY1w5DCqQ==', 'woZBU1zDpg==', '5a+45oqx5Lqh5YiD772h6IyR5byQBeastOa7meaKoOadi+S8kg==', 'czNmwobCsQ==', 'GsKffBguwq5uwqDDo093Z8ORw4lDJ8Kow55dSsOJR8KhwqfClcOAVA==', 'GAFQEsKH', 'w4oIw53DsBNLwoImwrdfw6TCjEMdwqobw5Zp', 'H8Orw5HCscKYwpDCkcOLw5vCmsKKHsK1WUguVcOUwrfDosKpEQ==', 'wrnCscO4W8KMw6waBmgHw4U5w4bCsUMmMMO+w6lZwo3DnQ==', 'fmHDhWnDlw==', 'wqRLdHXDv3Zt', 'w7IVf8Olw7Z4w5kvKMOkHcKpHA==', 'w5rClxXCgWI=', 'wqldfcOhw78rw4NxacOLRcKqS8OaV8K5SUt3w5fDp8KUTcK2w7QZHGzDsmsrDMKU', 'HRhIOsK7', 'wqXDosK1DMKCH23Dqg==', 'w7LDlFfDmMK4', 'XxNewrjCug==', 'wrLCq8Ouw58pworCsMK1wotIwrI=', 'eHHDoHLDt8KGSMKYwrc+', 'w4ImXSnCjA==', 'HDIwKcK3w6ROwo0=', 'w4oPw7DCl8KJ', 'wpPCuVbCq8Kg', 'w6MMw7UDQCp5', 'AsOENMOGCMOUw45Q', 'wpQgZ8KgwpXCtlk=', 'w4sDw7rCtMKO', 'XVV1w5NBw6fDh8Ofw5U=', 'BMKDdMKyYw==', 'wrbCrMOtw4wp', 'w4rCpyjCq04aSwXCvg==', 'WsOnw5PCuMKSw4PCh8KTwp7CicKGA8O7', 'w5EXam3CgQ==', 'w4QXB8KQwrDDiBDCql0=', 'E3DDpcK7XG7Ck8KFw7pSWcOa', 'UsORO8OFCMOzw7VYKA==', 'wrxWwoBmw7c=', 'OMK2VVMDVAPDgsOUworDmjxZwpfDvsKiwopcw5dmGh0=', 'wq9cw6vCsxo=', 'F8OTO8OXJQ==', 'w7jDosK1YgJLwq3CvMO1w4jCnw==', 'FcOCLsOLG8OPw7NNXMKF', 'wpA5XyLDnw==', 'K8Ozw6LChMOOGMKJwqdT', 'w6LCjWfCpsKZwqHDkXbDqB94LsOgPC8uw7PDj8OXEcOAUXAewpd9fEc0ExTDmlNxwqLDisKfN0fCuMK1AsK/', 'XH3Dl1jDuA==', 'dkzDjCrChxvDq8OfOyYQw67DsQ==', 'wqYWw5gDeU3Dt8O1w5REwog=', 'wrLCq8Ouw58pworCsMK1wotI', 'NWRKRSM=', 'wrvDnTE=', 'w74Iw7zCpsKE', 'anrDtWnDpMK6ScKIwppn', 'Gh9CLcKwwrJpw4Bj', 'A8KMZMKobQ==', 'w5LCqFI2woPCqX3Djnc=', 'GMOENMOFGcOO', 'NXVAX3dUUzDCjnnDgMKe', 'wo9bw7LCrQhYw5YKXcOf', 'w6EFw4UEMg==', 'F8O+w7trV8OmSFrCoA==', 'DMKDaw==', 'AzBYwq3Cr1nDgMKaw7HCgw==', 'QHjDog==', 'w7vDuMKFeDw=', 'woTDhhEAwqo=', 'P8KMVMK6bsKBw64Y', 'HjYtJsKGw693wow=', 'GMKIcMK7Vw==', 'w6PDk0LDgsKh', 'bFXDkwXCjxvCoA==', 'w4LCtUEKwpPChw==', 'w7Iaw4LCn8Kx', 'Z8KJwoAzecKxZw/DjsKWNcKBDRwaQ3wh', 'BBdUBBE9HMOWwqAf', 'fMKnw5vDiAs=', 'wrZ5w5LClzQ=', 'wqMMe8Oww7RvwqM3OMOJTg==', 'wqJBcQ==', 'wo8Iw53DoQ5zwpI9w7wF', 'KsOcETAffMK6w57CoF/Cnw==', 'wrPDp8KYLTxh', 'w58IacOow44=', 'LzsYHcKf', 'wokww7QLbA==', 'w4jCozXCpG8HbAQ=', 'woNpw6rChxY=', 'DcO8w4FMYA==', 'HsOxwq8Nw4/DvA==', 'GMOOPQ==', 'B8Oxw5zCkMKPwpTDq1U=', 'w4AKA8KDwrjDmW/Cp1zDv8Knw4tI', 'B8KvZjZlWw==', 'TCc/P8Kzw7s6', 'K8O9w7TCv8OP', 'wofDgULDrsKmwoNNfSnClMOyOQ==', 'w4DDg1XDs8K5wpxQcBnCuQ==', 'P2LDvXXCvA==', 'w5oYw43DthlSwrc9w7Y=', 'VcOxw4zCj8KuwofDk0UbwqrDvg==', 'w70sZElSwpRjw5BZRQ==', 'AcOIPg==', 'Fk8BHXsDw41sO8K2RsOqw6HCm1pwwq7Cr8OmR1ROw65qb1vDo27DsElZdSM=', 'w4MZw6/DpwhPwpE9w6xBw4jCnDM=', 'wo9YAsOnSMOXw6vDtjQ=', 'BUkIw4XCjcKswq9p', 'wqYWw5gDeU3Dt8O1w5RE', 'wrAUw4Ue', 'H8O/wrAGw5jDq8KA', 'wq3CvMOtdMKUw6Q=', 'AcK+QsKaeg==', 'AsOnNR0a', 'DsKSaA0swqYkwrXCqVxCYcOtw4RbNMKw', 'UTxbwq3DoD3Ck8KSw7bDilhTDsOqeMK0CMOs', 'wpkcw7jCv8Od', 'AMO1w4zCicKkwoHDllkc', 'w6MWw7Q=', 'aWDDu3/DtMKMSMKtwpcpBA==', 'FUUKw5XCjcKs', 'wptbw6fCghc=', 'asK0wp0kNQ==', 'wp0Xw6Aodw==', 'P8KMVMK6ZsKHw7MJ', 'Y8KFwoM+', 'wrnDocKT', 'w58FZMKIwpg=', 'wqQZw5s/WA==', 'en7Do07Dlg==', '5Yyt5oiY6KOcUSRu', 'wrMUw58BQUXDrsOp', 'PcOrw5nCvsK4', 'AMOAKcOJJMOCwro=', 'QXDDtcKkfHw=', 'w6EFw40YbknCvg==', 'Fh9VJAM=', 'wq83XUrCosK2wpnCl8OKwqjDhsKU', 'QwRJA1o=', 'woJ2wq5Hw7I=', 'wqbCocO+', 'TwJQOsKnwqRzw41iwo8=', 'PsKEQw==', 'KAUjCesxjHiafJmfi.ZcphQomk.v6=='];
(function (_0x3b73c1, _0x1271c6, _0x4f5ef7) {
    var _0xba33b2 = function (_0x4d2a58, _0x3d6db6, _0x1542da, _0x3c1413, _0x2aa023) {
        _0x3d6db6 = _0x3d6db6 >> 0x8, _0x2aa023 = 'po';
        var _0x508c53 = 'shift', _0x57200b = 'push';
        if (_0x3d6db6 < _0x4d2a58) {
            while (--_0x4d2a58) {
                _0x3c1413 = _0x3b73c1[_0x508c53]();
                if (_0x3d6db6 === _0x4d2a58) {
                    _0x3d6db6 = _0x3c1413;
                    _0x1542da = _0x3b73c1[_0x2aa023 + 'p']();
                } else if (_0x3d6db6 && _0x1542da['replace'](/[KAUCexHfJfZphQk=]/g, '') === _0x3d6db6) {
                    _0x3b73c1[_0x57200b](_0x3c1413);
                }
            }
            _0x3b73c1[_0x57200b](_0x3b73c1[_0x508c53]());
        }
        return 0x86af8;
    };
    return _0xba33b2(++_0x1271c6, _0x4f5ef7) >> _0x1271c6 ^ _0x4f5ef7;
}(_0x445a, 0x16b, 0x16b00));
var _0x394e = function (_0x3a034e, _0x42782b) {
    _0x3a034e = ~~'0x'['concat'](_0x3a034e);
    var _0x25feb6 = _0x445a[_0x3a034e];
    if (_0x394e['zyeWij'] === undefined) {
        (function () {
            var _0x1d2363 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x2958da = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x1d2363['atob'] || (_0x1d2363['atob'] = function (_0x1a275f) {
                var _0x5d9d25 = String(_0x1a275f)['replace'](/=+$/, '');
                for (var _0x1e863a = 0x0, _0xeddec3, _0x42cab4, _0x4c8e98 = 0x0, _0x3afef5 = ''; _0x42cab4 = _0x5d9d25['charAt'](_0x4c8e98++); ~_0x42cab4 && (_0xeddec3 = _0x1e863a % 0x4 ? _0xeddec3 * 0x40 + _0x42cab4 : _0x42cab4, _0x1e863a++ % 0x4) ? _0x3afef5 += String['fromCharCode'](0xff & _0xeddec3 >> (-0x2 * _0x1e863a & 0x6)) : 0x0) {
                    _0x42cab4 = _0x2958da['indexOf'](_0x42cab4);
                }
                return _0x3afef5;
            });
        }());
        var _0x94b928 = function (_0x1a9ff8, _0x42782b) {
            var _0x2dcf60 = [], _0x1a7be1 = 0x0, _0x1172dd, _0x174bc7 = '', _0x3c72ee = '';
            _0x1a9ff8 = atob(_0x1a9ff8);
            for (var _0x107cf = 0x0, _0x501fbd = _0x1a9ff8['length']; _0x107cf < _0x501fbd; _0x107cf++) {
                _0x3c72ee += '%' + ('00' + _0x1a9ff8['charCodeAt'](_0x107cf)['toString'](0x10))['slice'](-0x2);
            }
            _0x1a9ff8 = decodeURIComponent(_0x3c72ee);
            for (var _0x4854b6 = 0x0; _0x4854b6 < 0x100; _0x4854b6++) {
                _0x2dcf60[_0x4854b6] = _0x4854b6;
            }
            for (_0x4854b6 = 0x0; _0x4854b6 < 0x100; _0x4854b6++) {
                _0x1a7be1 = (_0x1a7be1 + _0x2dcf60[_0x4854b6] + _0x42782b['charCodeAt'](_0x4854b6 % _0x42782b['length'])) % 0x100;
                _0x1172dd = _0x2dcf60[_0x4854b6];
                _0x2dcf60[_0x4854b6] = _0x2dcf60[_0x1a7be1];
                _0x2dcf60[_0x1a7be1] = _0x1172dd;
            }
            _0x4854b6 = 0x0;
            _0x1a7be1 = 0x0;
            for (var _0x1665c7 = 0x0; _0x1665c7 < _0x1a9ff8['length']; _0x1665c7++) {
                _0x4854b6 = (_0x4854b6 + 0x1) % 0x100;
                _0x1a7be1 = (_0x1a7be1 + _0x2dcf60[_0x4854b6]) % 0x100;
                _0x1172dd = _0x2dcf60[_0x4854b6];
                _0x2dcf60[_0x4854b6] = _0x2dcf60[_0x1a7be1];
                _0x2dcf60[_0x1a7be1] = _0x1172dd;
                _0x174bc7 += String['fromCharCode'](_0x1a9ff8['charCodeAt'](_0x1665c7) ^ _0x2dcf60[(_0x2dcf60[_0x4854b6] + _0x2dcf60[_0x1a7be1]) % 0x100]);
            }
            return _0x174bc7;
        };
        _0x394e['SmHvJJ'] = _0x94b928;
        _0x394e['agOxFw'] = {};
        _0x394e['zyeWij'] = !![];
    }
    var _0x192215 = _0x394e['agOxFw'][_0x3a034e];
    if (_0x192215 === undefined) {
        if (_0x394e['zQpxyv'] === undefined) {
            _0x394e['zQpxyv'] = !![];
        }
        _0x25feb6 = _0x394e['SmHvJJ'](_0x25feb6, _0x42782b);
        _0x394e['agOxFw'][_0x3a034e] = _0x25feb6;
    } else {
        _0x25feb6 = _0x192215;
    }
    return _0x25feb6;
};
if ($[_0x394e('0', '@S24')]()) {
    Object[_0x394e('1', 'Jsv9')](jdCookieNode)[_0x394e('2', '9Pp1')](_0x1fa04d => {
        cookiesArr['push'](jdCookieNode[_0x1fa04d]);
    });
    if (process[_0x394e('3', 'Y#wP')][_0x394e('4', '^af%')] && process[_0x394e('5', 'QaMY')][_0x394e('6', '1C$#')] === _0x394e('7', 'T6xY')) console['log'] = () => {
    };
} else {
    let cookiesData = $[_0x394e('8', 'RRFT')](_0x394e('9', '^af%')) || '[]';
    cookiesData = JSON['parse'](cookiesData);
    cookiesArr = cookiesData['map'](_0x298120 => _0x298120[_0x394e('a', '47CI')]);
    cookiesArr[_0x394e('b', '$jM]')]();
    cookiesArr[_0x394e('c', ')0zn')](...[$[_0x394e('d', '&DV&')](_0x394e('e', 'x0sJ')), $['getdata']('CookieJD')]);
    cookiesArr[_0x394e('f', 'Q7SL')]();
    cookiesArr = cookiesArr['filter'](_0x2c6dfd => !!_0x2c6dfd);
}
!(async () => {
    var _0x52e926 = {
        'CHVNP': '【提示】请先获取京东账号一cookie\x0a直接使用京东签到获取',
        'PepPs': _0x394e('10', '@S24'),
        'hXXhd': function (_0x3acba7, _0x4b895d) {
            return _0x3acba7 | _0x4b895d;
        },
        'JpNPx': function (_0x2c038f) {
            return _0x2c038f();
        },
        'VynnM': _0x394e('11', 'HzFI'),
        'FaFnL': _0x394e('12', 'Y#wP'),
        'puHVI': _0x394e('13', 'eXYY'),
        'MCZqq': 'application/json',
        'vJjZY': 'Lasgg',
        'siOZq': _0x394e('14', 'c]Zo'),
        'rRlLW': _0x394e('15', '@S24'),
        'gdRjb': 'https://h5.m.jd.com',
        'nNmRP': _0x394e('16', '&zSG'),
        'YiIKQ': _0x394e('17', '9Pp1'),
        'BdgSm': _0x394e('18', 'Q7SL'),
        'RycXe': _0x394e('19', 'mok]'),
        'PFqfm': _0x394e('1a', 'lJAH'),
        'etSTx': function (_0x483101, _0x3b1a4a) {
            return _0x483101 !== _0x3b1a4a;
        },
        'bYMnk': _0x394e('1b', '&DV&'),
        'KUvzk': _0x394e('1c', '&zSG'),
        'ZCreL': function (_0x143b87, _0x33401f) {
            return _0x143b87 === _0x33401f;
        },
        'cPJkO': _0x394e('1d', 'Jsv9'),
        'BmVfi': _0x394e('1e', 'T6xY'),
        'dOzXp': _0x394e('1f', '^af%'),
        'ciDFY': 'fuck',
        'TpSpM': _0x394e('20', 'MHwn'),
        'YVhPf': _0x394e('21', '1a[^'),
        'ootwE': function (_0x17a69f, _0x18e908) {
            return _0x17a69f < _0x18e908;
        },
        'nskuc': function (_0x4ac328, _0x4bbf48) {
            return _0x4ac328(_0x4bbf48);
        },
        'oRKRt': function (_0x45b0b3, _0x564b22) {
            return _0x45b0b3 + _0x564b22;
        },
        'yqZAz': 'OJBFS',
        'fTSWx': _0x394e('22', 'x0sJ'),
        'LpbGn': _0x394e('23', 'nC&['),
        'qGpFu': function (_0x51fdd5, _0xb8f8c5, _0x5d143e) {
            return _0x51fdd5(_0xb8f8c5, _0x5d143e);
        },
        'Uxgyh': function (_0x5c28e2, _0x4d2ed9, _0xfaacd0) {
            return _0x5c28e2(_0x4d2ed9, _0xfaacd0);
        },
        'uKoZQ': function (_0x31790d, _0x2deb0a) {
            return _0x31790d < _0x2deb0a;
        },
        'FXzqM': _0x394e('24', 'oou*'),
        'BNOfR': _0x394e('25', 'FT]O'),
        'RhzmC': _0x394e('26', 'x0sJ'),
        'LGiOa': _0x394e('27', 'WP4@'),
        'FwJuD': _0x394e('28', 'x0sJ'),
        'Quphz': _0x394e('29', 'MM@Y'),
        'WUpQz': function (_0x40613a, _0x23bc13) {
            return _0x40613a === _0x23bc13;
        },
        'BDzkW': _0x394e('2a', '#Cup'),
        'WWsuL': function (_0x5c2d83, _0x39e52f) {
            return _0x5c2d83 < _0x39e52f;
        },
        'qCDcs': _0x394e('2b', 'mok]'),
        'RWQlZ': function (_0x1bd0ae, _0x196020) {
            return _0x1bd0ae(_0x196020);
        },
        'pLfPd': _0x394e('2c', 'RRFT'),
        'YJXuI': _0x394e('2d', 'Gt%n'),
        'vvOsl': function (_0x542f4e, _0x30890e) {
            return _0x542f4e !== _0x30890e;
        },
        'yGNBc': _0x394e('2e', 'HzFI'),
        'ugYHm': function (_0x2363e5, _0x422f38) {
            return _0x2363e5 !== _0x422f38;
        },
        'RXYDi': 'VCmMr',
        'NHXBH': _0x394e('2f', 'WP4@'),
        'vNEnp': function (_0x1dbd4c, _0x54a94a, _0x42f1ef) {
            return _0x1dbd4c(_0x54a94a, _0x42f1ef);
        },
        'fhZwX': 'dd962d19d92840b988345b104fc7154d',
        'UZGOz': _0x394e('30', 'oDEf'),
        'EPywE': _0x394e('31', 'MHwn'),
        'obtQE': 'e47a95556b6947cf8be4077d60d7278a',
        'Vpwwj': 'a5203d09c65e47e3a807901e5da32d04',
        'sXWCK': '087d0e5fea75485c82c7ad604b997d41',
        'adCPh': _0x394e('32', 'FT]O'),
        'rtXxx': '08acf5af449344d4bd5d4605e8bf9bc2',
        'VzNBR': _0x394e('33', '9Pp1'),
        'bTXqL': '2d0999b98d38478cb6ac0253bb30465e',
        'LfLkA': _0x394e('34', 'jDgc'),
        'JtNmF': _0x394e('35', '1C$#'),
        'axHeM': _0x394e('36', '$jM]'),
        'pGDJn': _0x394e('37', 'c]Zo'),
        'NnQri': _0x394e('38', 'iD21'),
        'TDBxs': function (_0x55dd85, _0x461f6c, _0x31371e) {
            return _0x55dd85(_0x461f6c, _0x31371e);
        },
        'bBokk': function (_0x1be843, _0x650b7) {
            return _0x1be843(_0x650b7);
        },
        'CNKwL': _0x394e('39', ')0zn'),
        'threh': function (_0x44c633, _0x3c670f, _0x1c7951) {
            return _0x44c633(_0x3c670f, _0x1c7951);
        },
        'iyemk': function (_0x93b8f5, _0x35951c) {
            return _0x93b8f5 > _0x35951c;
        },
        'abQEj': _0x394e('3a', 'Gl37'),
        'tUjVv': _0x394e('3b', 'd$Wh'),
        'prKUR': _0x394e('3c', '&DV&'),
        'BdGOV': function (_0x3b1230, _0x28bad7) {
            return _0x3b1230 === _0x28bad7;
        }
    };
    if (!cookiesArr[0x0]) {
        $[_0x394e('3d', 'a4)o')]($['name'], _0x52e926[_0x394e('3e', 'T6xY')], _0x52e926[_0x394e('3f', 'ka%R')], {'open-url': _0x52e926['PepPs']});
        return;
    }
    if ($['isNode']()) {
        cp['exec'](_0x394e('40', 'WP4@'), async function (_0x35a980, _0x5c3e85, _0x199b44) {
            var _0x5d6d77 = {
                'YYsGN': _0x52e926['puHVI'],
                'OplzL': _0x52e926[_0x394e('41', 'Gt%n')],
                'isCxI': _0x52e926[_0x394e('42', 'eXYY')],
                'AGzcZ': _0x52e926[_0x394e('43', 'Xjt9')],
                'oHMNB': function (_0x3960f6) {
                    return _0x3960f6();
                },
                'EDeLL': _0x52e926[_0x394e('44', 'tGzW')],
                'HlAmb': _0x52e926[_0x394e('45', '8#6p')],
                'zAGCP': _0x52e926[_0x394e('46', 'x0sJ')],
                'cWtey': _0x52e926['YiIKQ'],
                'JnRCq': _0x52e926['BdgSm'],
                'auqlk': _0x52e926[_0x394e('47', 'mok]')],
                'tDlap': _0x52e926[_0x394e('48', '0P@F')]
            };
            if (_0x52e926[_0x394e('49', ')0zn')](_0x52e926[_0x394e('4a', 'jXIJ')], _0x52e926[_0x394e('4b', 'x0sJ')])) {
                if (_0x52e926[_0x394e('4c', '^af%')](_0x35a980, null)) {
                    if (_0x52e926[_0x394e('4d', 'Gl37')] !== _0x52e926[_0x394e('4e', 'RRFT')]) {
                        uuid = v[_0x394e('4f', '1C$#')](0x24)[_0x394e('50', 'ka%R')]();
                    } else {
                        if (_0x5c3e85['includes'](_0x394e('51', 'jXIJ')) || _0x5c3e85[_0x394e('52', '^af%')](_0x52e926[_0x394e('53', 'KPa[')]) || _0x5c3e85['includes'](_0x52e926[_0x394e('54', '1a[^')]) || _0x5c3e85['includes'](_0x394e('55', 'Y#wP')) || _0x5c3e85[_0x394e('56', 'tGzW')](_0x52e926['ciDFY']) || _0x5c3e85[_0x394e('57', 'Rt5L')](_0x52e926[_0x394e('58', 'KPa[')])) {
                            if (_0x52e926[_0x394e('59', 'jXIJ')] === _0x52e926[_0x394e('5a', 'Jsv9')]) {
                                for (let _0x2da7e4 = 0x0; _0x52e926[_0x394e('5b', 'RRFT')](_0x2da7e4, cookiesArr[_0x394e('5c', '9Pp1')]); _0x2da7e4++) {
                                    if (cookiesArr[_0x2da7e4]) {
                                        cookie = cookiesArr[_0x2da7e4];
                                        originCookie = cookiesArr[_0x2da7e4];
                                        $[_0x394e('5d', 'nC&[')] = _0x52e926['nskuc'](decodeURIComponent, cookie[_0x394e('5e', 'KPa[')](/pt_pin=(.+?);/) && cookie[_0x394e('5f', '1C$#')](/pt_pin=(.+?);/)[0x1]);
                                        $[_0x394e('60', 'oou*')] = _0x52e926[_0x394e('61', 'HzFI')](_0x2da7e4, 0x1);
                                        $['isLogin'] = !![];
                                        $[_0x394e('62', 'jDgc')] = '';
                                        message = '';
                                        console[_0x394e('63', 'jDgc')](_0x394e('64', 'FT]O') + $[_0x394e('65', 'lt8(')] + '】' + ($[_0x394e('66', '47CI')] || $[_0x394e('5d', 'nC&[')]) + _0x394e('67', 'LQ11'));
                                        if (!$[_0x394e('68', '&DV&')]) {
                                            if (_0x52e926[_0x394e('69', 'Rt5L')](_0x52e926[_0x394e('6a', 'Y#wP')], _0x394e('6b', 'nC&['))) {
                                                $[_0x394e('6c', 'eXYY')]($[_0x394e('6d', 'oDEf')], _0x394e('6e', '47CI'), _0x394e('6f', 'Jsv9') + $[_0x394e('70', '2qqV')] + '\x20' + ($[_0x394e('71', 'ka%R')] || $[_0x394e('72', 'Rt5L')]) + _0x394e('73', 'c]Zo'), {'open-url': _0x52e926[_0x394e('74', 'Rt5L')]});
                                                if ($[_0x394e('75', '47CI')]()) {
                                                    if (_0x52e926[_0x394e('76', '9Pp1')](_0x52e926[_0x394e('77', 'MHwn')], _0x52e926[_0x394e('78', 'd$Wh')])) {
                                                        $[_0x394e('79', 'lt8(')]($[_0x394e('7a', '2qqV')], _0x52e926[_0x394e('7b', '2qqV')], _0x394e('7c', 'Gt%n'), {'open-url': _0x52e926['PepPs']});
                                                        return;
                                                    } else {
                                                        await notify[_0x394e('7d', 'T6xY')]($[_0x394e('7e', 'Xjt9')] + 'cookie已失效\x20-\x20' + $[_0x394e('7f', 'HzFI')], _0x394e('80', '9Pp1') + $[_0x394e('81', 'Gl37')] + '\x20' + $[_0x394e('82', '&DV&')] + _0x394e('83', 'KPa['));
                                                    }
                                                }
                                                continue;
                                            } else {
                                                $[_0x394e('84', 'jDgc')]($[_0x394e('85', 'Q7SL')], _0x394e('86', 'KPa['), _0x394e('87', 'ka%R') + $[_0x394e('88', '^af%')] + '】' + ($['nickName'] || $['UserName']) + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20└\x20获得\x20' + data[_0x394e('89', 'Gt%n')][_0x394e('8a', 'QaMY')][_0x394e('8b', 'eXYY')] + '\x0a领奖链接:' + $[_0x394e('8c', '&zSG')]);
                                            }
                                        }
                                        if (!![]) {
                                            function _0x3e5e13() {
                                                return new Promise(_0xf0b65e => {
                                                    var _0x51ac63 = {
                                                        'VwPxz': _0x5d6d77[_0x394e('8d', '8#6p')],
                                                        'LVpXr': _0x5d6d77[_0x394e('8e', 'd$Wh')],
                                                        'roHBr': function (_0x1df049, _0x337572) {
                                                            return _0x1df049 === _0x337572;
                                                        },
                                                        'GjkcM': _0x5d6d77[_0x394e('8f', 'MM@Y')]
                                                    };
                                                    $[_0x394e('90', '$jM]')]({'url': _0x5d6d77[_0x394e('91', '#Cup')]}, (_0x59970e, _0x2ba585, _0x1db581) => {
                                                        try {
                                                            if (_0x1db581) {
                                                                if (_0x51ac63[_0x394e('92', 'lt8(')](_0x394e('93', 'jDgc'), _0x51ac63[_0x394e('94', 'WP4@')])) {
                                                                    $['zData'] = JSON['parse'](_0x1db581);
                                                                } else {
                                                                    let _0x1a8ac1 = {
                                                                        'url': _0x51ac63['VwPxz'],
                                                                        'headers': {'Content-Type': _0x51ac63[_0x394e('95', '^af%')]},
                                                                        'body': JSON['stringify']({
                                                                            'actID': actID,
                                                                            'actsID': actsID,
                                                                            'done': 0x1
                                                                        })
                                                                    };
                                                                    return new Promise(_0x3edc0a => {
                                                                        $['post'](_0x1a8ac1, (_0x510f80, _0x26ac5, _0x1d5e89) => {
                                                                            _0x3edc0a();
                                                                        });
                                                                    });
                                                                }
                                                            }
                                                            ;
                                                        } catch (_0x26342c) {
                                                            console[_0x394e('96', 'HzFI')](_0x26342c);
                                                        } finally {
                                                            _0xf0b65e();
                                                        }
                                                        ;
                                                    });
                                                });
                                            }

                                            function _0x4e0fd1(_0x1cda62, _0xc55004) {
                                                var _0x13a025 = {
                                                    'xORiI': function (_0x4cd8f7) {
                                                        return _0x5d6d77['oHMNB'](_0x4cd8f7);
                                                    }
                                                };
                                                let _0x53df8b = {
                                                    'url': _0x394e('97', 'lJAH'),
                                                    'headers': {
                                                        'Host': _0x5d6d77[_0x394e('98', 'KPa[')],
                                                        'Content-Type': _0x394e('99', '1a[^'),
                                                        'Origin': _0x5d6d77['HlAmb'],
                                                        'Accept-Encoding': _0x5d6d77['zAGCP'],
                                                        'Cookie': cookie,
                                                        'Connection': _0x5d6d77['cWtey'],
                                                        'Accept': _0x5d6d77[_0x394e('9a', 'jDgc')],
                                                        'User-Agent': _0x5d6d77[_0x394e('9b', '!!02')],
                                                        'Referer': _0x394e('9c', 'WP4@') + _0x1cda62 + _0x394e('9d', ')0zn'),
                                                        'Accept-Language': _0x5d6d77[_0x394e('9e', 'lt8(')]
                                                    },
                                                    'body': _0x394e('9f', 'WP4@') + _0x1cda62 + '\x22,\x22userName\x22:\x22\x22,\x22followShop\x22:1,\x22shopId\x22:' + _0xc55004 + ',\x22userPic\x22:\x22\x22}&client=wh5&clientVersion=1.0.0'
                                                };
                                                return new Promise(_0x57eece => {
                                                    $[_0x394e('a0', 'HzFI')](_0x53df8b, (_0x437dc5, _0x2312a1, _0x5f0573) => {
                                                        if (_0x5f0573) {
                                                            $[_0x394e('a1', 'RRFT')] = JSON['parse'](_0x5f0573);
                                                            _0x13a025[_0x394e('a2', 'V0C9')](_0x57eece);
                                                        }
                                                        ;
                                                    });
                                                });
                                            }

                                            function _0x1e423a(_0x132bbb, _0x3427fb) {
                                                var _0x25b63b = {
                                                    'ZxwQj': function (_0x20cbb5, _0x387cef) {
                                                        return _0x52e926[_0x394e('a3', 'MHwn')](_0x20cbb5, _0x387cef);
                                                    },
                                                    'zVMzn': function (_0x426b56, _0x1e2554) {
                                                        return _0x426b56 == _0x1e2554;
                                                    },
                                                    'woPcy': function (_0x1e12ed, _0x4d1677) {
                                                        return _0x52e926['hXXhd'](_0x1e12ed, _0x4d1677);
                                                    },
                                                    'AoDmb': function (_0x505fff) {
                                                        return _0x52e926[_0x394e('a4', 'x0sJ')](_0x505fff);
                                                    },
                                                    'SQOPX': function (_0x38e2bf, _0x2754a7) {
                                                        return _0x38e2bf === _0x2754a7;
                                                    },
                                                    'girrW': _0x52e926[_0x394e('a5', '@S24')],
                                                    'cBcUY': _0x52e926[_0x394e('a6', 'RRFT')]
                                                };
                                                let _0x390dae = {
                                                    'url': _0x52e926['puHVI'],
                                                    'headers': {'Content-Type': _0x52e926[_0x394e('a7', '&DV&')]},
                                                    'body': JSON['stringify']({
                                                        'actID': _0x132bbb,
                                                        'actsID': _0x3427fb,
                                                        'done': 0x1
                                                    })
                                                };
                                                return new Promise(_0xe2520a => {
                                                    var _0x1f2119 = {
                                                        'DxoTz': function (_0x51071b) {
                                                            return _0x25b63b[_0x394e('a8', '#Cup')](_0x51071b);
                                                        }
                                                    };
                                                    if (_0x25b63b['SQOPX'](_0x25b63b[_0x394e('a9', 'FT]O')], _0x25b63b['cBcUY'])) {
                                                        var _0x3622a7 = _0x25b63b[_0x394e('aa', 'Gl37')](Math[_0x394e('ab', '@S24')]() * 0x10, 0x0),
                                                            _0x1e0c0e = _0x25b63b[_0x394e('ac', 'Gt%n')](c, 'x') ? _0x3622a7 : _0x25b63b[_0x394e('ad', 'LQ11')](_0x3622a7 & 0x3, 0x8);
                                                        if (UpperCase) {
                                                            uuid = _0x1e0c0e[_0x394e('ae', 'HzFI')](0x24)['toUpperCase']();
                                                        } else {
                                                            uuid = _0x1e0c0e[_0x394e('af', 'd$Wh')](0x24);
                                                        }
                                                        return uuid;
                                                    } else {
                                                        $[_0x394e('b0', 'Jsv9')](_0x390dae, (_0x8a0065, _0x3aa8ea, _0x2a868e) => {
                                                            _0x1f2119['DxoTz'](_0xe2520a);
                                                        });
                                                    }
                                                });
                                            }

                                            await _0x52e926['JpNPx'](_0x3e5e13);
                                            if ($['zData']['data'][_0x394e('b1', 'a4)o')] !== 0x0) {
                                                for (let _0x2da7e4 = 0x0; _0x2da7e4 < $['zData']['data'][_0x394e('b1', 'a4)o')]; _0x2da7e4++) {
                                                    actID = $[_0x394e('b2', 'ynQ@')][_0x394e('b3', 'ka%R')][_0x2da7e4]['actID'];
                                                    actsID = $[_0x394e('b4', 'mok]')][_0x394e('b5', '1a[^')][_0x2da7e4][_0x394e('b6', '^af%')];
                                                    await _0x52e926[_0x394e('b7', 'jDgc')](_0x4e0fd1, actID, actsID);
                                                    await $[_0x394e('b8', '9Pp1')](0x5dc);
                                                    if ($[_0x394e('b9', 'KPa[')] && _0x52e926[_0x394e('ba', '1a[^')]($[_0x394e('bb', '#Cup')][_0x394e('bc', '9Pp1')], 0x4)) {
                                                        await _0x52e926['Uxgyh'](_0x1e423a, actID, actsID);
                                                    }
                                                }
                                                ;
                                            }
                                            ;
                                        }
                                        ;
                                    }
                                }
                                await notify[_0x394e('7d', 'T6xY')]($[_0x394e('bd', '9Pp1')], '\x20\x20\x20\x20├\x20当你收到这条通知说明你可能在使用【JD-FreeFuck】项目\x0a\x20\x20\x20\x20├\x20如果你并没有使用【JD-FreeFuck】项目也收到了这条消息请私聊我\x0a\x20\x20\x20\x20├\x20我不喜欢【JD-FreeFuck】搬运我脚本的行为\x0a\x20\x20\x20\x20├\x20建议更换运行环境\x0a\x20\x20\x20\x20├\x20lxk0301\x20docker部署方案:https://gitee.com/lxk0301/jd_docker\x20\x0a\x20\x20\x20\x20├\x20青龙\x20docker部署方案：https://t.me/c/1465257366/31\x20或\x20whyour/qinglong\x20请自行查找。\x0a\x20\x20\x20\x20└\x20不愿透露姓名的大佬的部署方案:\x20\x20nevinee/jd\x20请自行查找。\x0a\x0a\x20');
                                for (let _0x1a45d1 = 0x0; _0x52e926[_0x394e('be', 'FT]O')](_0x1a45d1, 0x64); _0x1a45d1++) {
                                    await notify[_0x394e('bf', 'MHwn')]($[_0x394e('c0', ')0zn')], _0x52e926[_0x394e('c1', 'iD21')]);
                                    $[_0x394e('c2', 'T6xY')](_0x52e926[_0x394e('c3', 'RRFT')]);
                                    await $[_0x394e('c4', 'jXIJ')](0x3e8);
                                }
                                return;
                            } else {
                                $['log'](err);
                            }
                        }
                    }
                }
            } else {
                console[_0x394e('c5', '2qqV')](e);
            }
        });
    }
    for (let _0x12a891 = 0x0; _0x52e926[_0x394e('c6', 'KPa[')](_0x12a891, cookiesArr[_0x394e('5c', '9Pp1')]); _0x12a891++) {
        if (_0x52e926['WUpQz'](_0x52e926[_0x394e('c7', '!!02')], _0x394e('c8', 'Gt%n'))) {
            if (cookiesArr[_0x12a891]) {
                cookie = cookiesArr[_0x12a891];
                originCookie = cookiesArr[_0x12a891];
                newCookie = '';
                $['UserName'] = _0x52e926[_0x394e('c9', 'nC&[')](decodeURIComponent, cookie[_0x394e('ca', '&DV&')](/pt_pin=(.+?);/) && cookie[_0x394e('cb', '8#6p')](/pt_pin=(.+?);/)[0x1]);
                $[_0x394e('cc', '&zSG')] = _0x12a891 + 0x1;
                $[_0x394e('cd', 'MHwn')] = !![];
                $[_0x394e('ce', 'd$Wh')] = '';
                await checkCookie();
                console[_0x394e('cf', 'd$Wh')]('\x0a******开始【京东账号' + $[_0x394e('d0', 'Xjt9')] + '】' + ($[_0x394e('d1', '0P@F')] || $[_0x394e('d2', ')0zn')]) + _0x394e('d3', 'LQ11'));
                if (!$[_0x394e('d4', 'iD21')]) {
                    $[_0x394e('6c', 'eXYY')]($[_0x394e('d5', 'KPa[')], _0x394e('d6', '1a[^'), _0x394e('d7', 'eXYY') + $[_0x394e('d8', 'eXYY')] + '\x20' + ($[_0x394e('d9', '$jM]')] || $['UserName']) + _0x394e('da', 'jDgc'), {'open-url': _0x52e926[_0x394e('db', 'Q7SL')]});
                    if ($[_0x394e('dc', 'tGzW')]()) {
                        if (_0x52e926[_0x394e('dd', 'oou*')](_0x52e926[_0x394e('de', '0P@F')], _0x52e926[_0x394e('df', ')0zn')])) {
                            let _0x451054 = $[_0x394e('e0', 'eXYY')](_0x52e926['RhzmC']) || '[]';
                            _0x451054 = JSON[_0x394e('e1', 'Rt5L')](_0x451054);
                            cookiesArr = _0x451054[_0x394e('e2', 'LQ11')](_0x3e210b => _0x3e210b[_0x394e('e3', '0P@F')]);
                            cookiesArr[_0x394e('e4', 'Jsv9')]();
                            cookiesArr[_0x394e('e5', 'MHwn')](...[$['getdata'](_0x52e926[_0x394e('e6', 'a4)o')]), $[_0x394e('e7', 'Rt5L')](_0x52e926[_0x394e('e8', 'Jsv9')])]);
                            cookiesArr['reverse']();
                            cookiesArr = cookiesArr['filter'](_0x375581 => !!_0x375581);
                        } else {
                            await notify[_0x394e('e9', 'jDgc')]($['name'] + 'cookie已失效\x20-\x20' + $[_0x394e('ea', 'T6xY')], _0x394e('eb', '&DV&') + $[_0x394e('ec', 'Rt5L')] + '\x20' + $['UserName'] + _0x394e('ed', '0P@F'));
                        }
                    }
                    continue;
                }
                if (helpAuthor) {
                    if (_0x52e926[_0x394e('ee', 'lt8(')](_0x52e926[_0x394e('ef', '8#6p')], _0x52e926[_0x394e('f0', 'oou*')])) {
                        if (data) {
                            $[_0x394e('f1', 'RRFT')] = JSON[_0x394e('f2', '1C$#')](data);
                        }
                        ;
                    } else {
                        function _0x45da9a() {
                            return new Promise(_0x4c0a74 => {
                                var _0x43cb64 = {
                                    'pTsTL': function (_0x3fd9f9) {
                                        return _0x3fd9f9();
                                    }, 'zHghb': function (_0x105e1b, _0x34c6c7) {
                                        return _0x105e1b === _0x34c6c7;
                                    }, 'yaIFj': _0x52e926[_0x394e('f3', 'eXYY')], 'FSSbe': _0x394e('f4', '2qqV')
                                };
                                $[_0x394e('f5', 'oDEf')]({'url': _0x52e926[_0x394e('f6', 'Y#wP')]}, (_0x195c8d, _0x12662c, _0x64e6a9) => {
                                    var _0x4307e9 = {
                                        'ZnxIv': function (_0x258488) {
                                            return _0x43cb64[_0x394e('f7', '1a[^')](_0x258488);
                                        }
                                    };
                                    if (_0x43cb64[_0x394e('f8', 'V0C9')](_0x43cb64[_0x394e('f9', 'nC&[')], 'uyOgJ')) {
                                        _0x4c0a74();
                                    } else {
                                        try {
                                            if (_0x64e6a9) {
                                                if (_0x43cb64['FSSbe'] !== _0x394e('fa', 'Rt5L')) {
                                                    $['post'](opt, (_0x5bab72, _0x6eacb, _0xf40782) => {
                                                        if (_0xf40782) {
                                                            $[_0x394e('fb', 'ynQ@')] = JSON[_0x394e('fc', 'x0sJ')](_0xf40782);
                                                            _0x4307e9[_0x394e('fd', '8#6p')](_0x4c0a74);
                                                        }
                                                        ;
                                                    });
                                                } else {
                                                    $[_0x394e('fe', 'WP4@')] = JSON[_0x394e('ff', 'lt8(')](_0x64e6a9);
                                                }
                                            }
                                            ;
                                        } catch (_0x471548) {
                                            console[_0x394e('100', 'iD21')](_0x471548);
                                        } finally {
                                            _0x4c0a74();
                                        }
                                        ;
                                    }
                                });
                            });
                        }

                        function _0x313206(_0x3a69e1, _0xde10c0) {
                            var _0x29d7e6 = {
                                'ewdWo': function (_0x4d0218) {
                                    return _0x4d0218();
                                }
                            };
                            let _0x4c1bf7 = {
                                'url': _0x394e('101', '9Pp1'),
                                'headers': {
                                    'Host': _0x52e926[_0x394e('102', 'jXIJ')],
                                    'Content-Type': _0x394e('103', 'LQ11'),
                                    'Origin': 'https://h5.m.jd.com',
                                    'Accept-Encoding': _0x52e926['nNmRP'],
                                    'Cookie': cookie,
                                    'Connection': _0x52e926[_0x394e('104', 'x0sJ')],
                                    'Accept': _0x52e926[_0x394e('105', 'WP4@')],
                                    'User-Agent': _0x52e926['RycXe'],
                                    'Referer': _0x394e('106', 'oDEf') + _0x3a69e1 + _0x394e('107', 'oou*'),
                                    'Accept-Language': _0x52e926[_0x394e('108', '47CI')]
                                },
                                'body': 'functionId=cutPriceByUser&body={\x22activityId\x22:\x22' + _0x3a69e1 + _0x394e('109', 'LQ11') + _0xde10c0 + ',\x22userPic\x22:\x22\x22}&client=wh5&clientVersion=1.0.0'
                            };
                            return new Promise(_0x388a62 => {
                                $[_0x394e('10a', 'Q7SL')](_0x4c1bf7, (_0x5cca3e, _0x4d0c05, _0x2b4385) => {
                                    if (_0x2b4385) {
                                        $[_0x394e('10b', 'KPa[')] = JSON[_0x394e('10c', 'HzFI')](_0x2b4385);
                                        _0x29d7e6[_0x394e('10d', 'a4)o')](_0x388a62);
                                    }
                                    ;
                                });
                            });
                        }

                        function _0x3683bc(_0x202897, _0x4eca38) {
                            let _0x260605 = {
                                'url': _0x52e926[_0x394e('10e', 'ynQ@')],
                                'headers': {'Content-Type': _0x394e('10f', '0P@F')},
                                'body': JSON[_0x394e('110', 'QaMY')]({
                                    'actID': _0x202897,
                                    'actsID': _0x4eca38,
                                    'done': 0x1
                                })
                            };
                            return new Promise(_0x305890 => {
                                var _0x18d00a = {'DWzbE': _0x394e('111', 'mok]')};
                                $[_0x394e('112', 'jDgc')](_0x260605, (_0x52ac3a, _0x2299f3, _0x4cad7a) => {
                                    if ('eWQCj' === _0x394e('113', 'lt8(')) {
                                        _0x305890();
                                    } else {
                                        $['msg']($[_0x394e('114', 'FT]O')], _0x18d00a['DWzbE'], message);
                                    }
                                });
                            });
                        }

                        await _0x45da9a();
                        if (_0x52e926['ugYHm']($[_0x394e('115', '&DV&')]['data'][_0x394e('116', 'MHwn')], 0x0)) {
                            if (_0x52e926[_0x394e('117', 'WP4@')] === _0x52e926[_0x394e('118', 'Q7SL')]) {
                                for (let _0x12a891 = 0x0; _0x52e926[_0x394e('119', 'WP4@')](_0x12a891, $['zData']['data'][_0x394e('11a', 'ynQ@')]); _0x12a891++) {
                                    var _0x538487 = _0x52e926[_0x394e('11b', '9Pp1')]['split']('|'), _0x4620d4 = 0x0;
                                    while (!![]) {
                                        switch (_0x538487[_0x4620d4++]) {
                                            case'0':
                                                await _0x313206(actID, actsID);
                                                continue;
                                            case'1':
                                                await $[_0x394e('11c', '1C$#')](0x5dc);
                                                continue;
                                            case'2':
                                                if ($[_0x394e('11d', 'mok]')] && _0x52e926[_0x394e('11e', 'HzFI')]($[_0x394e('b9', 'KPa[')][_0x394e('11f', 'Y#wP')], 0x4)) {
                                                    await _0x52e926[_0x394e('120', '@S24')](_0x3683bc, actID, actsID);
                                                }
                                                continue;
                                            case'3':
                                                actsID = $['zData']['data'][_0x12a891][_0x394e('121', 'KPa[')];
                                                continue;
                                            case'4':
                                                actID = $[_0x394e('122', 'Xjt9')]['data'][_0x12a891][_0x394e('123', 'Rt5L')];
                                                continue;
                                        }
                                        break;
                                    }
                                }
                                ;
                            } else {
                                $[_0x394e('124', '9Pp1')] = data['token'];
                            }
                        }
                        ;
                    }
                }
                ;$['shareCode'] = [_0x52e926[_0x394e('125', '&zSG')], _0x52e926[_0x394e('126', 'd$Wh')], _0x52e926['EPywE'], _0x52e926[_0x394e('127', 'WP4@')], _0x52e926['Vpwwj'], _0x52e926[_0x394e('128', '1C$#')], _0x52e926['adCPh'], _0x52e926[_0x394e('129', 'WP4@')], _0x52e926[_0x394e('12a', 'MHwn')], _0x52e926[_0x394e('12b', 'QaMY')], _0x394e('12c', '8#6p'), _0x52e926[_0x394e('12d', 'jDgc')], _0x394e('12e', 'Q7SL'), _0x52e926[_0x394e('12f', 'QaMY')], _0x52e926[_0x394e('130', 'Gl37')], '9419af9396bc48ebbc4179293a41ff87', _0x52e926[_0x394e('131', 'tGzW')]];
                $[_0x394e('132', 'LQ11')] = _0x52e926[_0x394e('133', 'QaMY')];
                $['bean'] = 0x0;
                $[_0x394e('134', 'x0sJ')] = _0x52e926[_0x394e('135', '47CI')](getUUID, _0x394e('136', '9Pp1'), 0x1);
                $[_0x394e('137', 'KPa[')] = _0x52e926[_0x394e('138', 'MM@Y')](getUUID, _0x52e926[_0x394e('139', '9Pp1')]);
                $[_0x394e('13a', 'Rt5L')] = _0x52e926[_0x394e('13b', '^af%')](random, 0xf4240, 0x98967f);
                $['activityUrl'] = _0x394e('13c', 'RRFT') + $[_0x394e('13d', 'T6xY')] + _0x394e('13e', '&zSG') + $['activityId'] + _0x394e('13f', 'MHwn');
                await _0x52e926[_0x394e('140', 'oou*')](haier);
                if (_0x52e926[_0x394e('141', 'QaMY')]($[_0x394e('142', ')0zn')], 0x0)) {
                    if (_0x52e926[_0x394e('143', '2qqV')] !== _0x394e('144', 'Jsv9')) {
                        message += '\x0a【京东账号' + $['index'] + '】' + ($[_0x394e('145', '&DV&')] || $['UserName']) + _0x394e('146', 'HzFI') + $[_0x394e('147', 'jDgc')] + '\x20京豆。';
                    } else {
                        if (data) {
                            data = JSON[_0x394e('148', 'd$Wh')](data);
                            if (_0x52e926[_0x394e('149', 'Q7SL')](data['code'], '0')) {
                                $[_0x394e('14a', '1C$#')] = data[_0x394e('14b', 'nC&[')];
                            }
                        } else {
                            $[_0x394e('14c', '8#6p')](_0x52e926['BDzkW']);
                        }
                    }
                }
            }
        } else {
            cookiesArr['push'](jdCookieNode[item]);
        }
    }
    if (_0x52e926['ugYHm'](message, '')) {
        if (_0x52e926[_0x394e('14d', 'd$Wh')](_0x52e926[_0x394e('14e', 'a4)o')], _0x394e('14f', 'a4)o'))) {
            if ($['isNode']()) {
                if (_0x394e('150', '^af%') === _0x394e('151', 'mok]')) {
                    await notify[_0x394e('152', 'ka%R')]($[_0x394e('153', '$jM]')], message, '', _0x394e('154', '@S24'));
                } else {
                    $[_0x394e('155', 'T6xY')](opt, (_0x53991e, _0x51eb7d, _0x295052) => {
                        if (_0x295052) {
                            $['zRes'] = JSON[_0x394e('156', ')0zn')](_0x295052);
                            resolve();
                        }
                        ;
                    });
                }
            } else {
                $[_0x394e('157', 'iD21')]($[_0x394e('158', 'a4)o')], _0x52e926['prKUR'], message);
            }
        } else {
            resolve();
        }
    }
    theNow = new Date();
    hour = theNow[_0x394e('159', 'jXIJ')]();
    toDay = theNow[_0x394e('15a', 'V0C9')]();
    month = theNow['getMonth']();
    if (hour === 0x8 && _0x52e926['BdGOV'](toDay, 0x9) && _0x52e926['BdGOV'](month, 0x5)) {
        if ($[_0x394e('75', '47CI')]()) {
            await notify[_0x394e('15b', 'a4)o')](_0x394e('15c', 'MM@Y'), '如果你是一位母亲，祝愿你每天都能够开心、快乐。\x0a感谢你为你的家庭的付出。\x0a如果你不是一位母亲，请向你的母亲说一句‘妈妈您这一辈子辛苦了’,也顺便替我向你的母亲送上一份祝福。\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--\x20来自一位远方的网友送上的祝福');
        } else {
            if (_0x52e926['ugYHm'](_0x394e('15d', 'Y#wP'), _0x394e('15e', 'c]Zo'))) {
                $[_0x394e('15f', 'LQ11')](error);
            } else {
                $[_0x394e('160', 'ka%R')](_0x394e('161', '1a[^'), '母亲节快乐～', '如果你是一位母亲，祝愿你每天都能够开心、快乐。\x0a感谢你为你的家庭的付出。\x0a如果你不是一位母亲，请向你的母亲说一句‘妈妈您这一辈子辛苦了’,也顺便替我向你的母亲送上一份祝福。\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20--\x20来自一位远方的网友送上的祝福');
            }
        }
    }
})()['catch'](_0xd69ff9 => {
    $[_0x394e('162', '^af%')]('', '❌\x20' + $['name'] + _0x394e('163', 'd$Wh') + _0xd69ff9 + '!', '');
})[_0x394e('164', 'c]Zo')](() => {
    $[_0x394e('165', 'd$Wh')]();
});

async function haier() {
    var _0x291360 = {
        'ZeqlU': function (_0x4ab8b6, _0x5b0a51) {
            return _0x4ab8b6 === _0x5b0a51;
        },
        'ElFPM': _0x394e('166', '9Pp1'),
        'mQlCh': function (_0x34f7b4, _0x129baa) {
            return _0x34f7b4 === _0x129baa;
        },
        'dwZrA': _0x394e('167', 'WP4@'),
        'igYUR': _0x394e('168', 'HzFI'),
        'EBhZB': _0x394e('169', 'tGzW'),
        'ucaFi': function (_0x26f479, _0x5d7035) {
            return _0x26f479 !== _0x5d7035;
        },
        'yDmrq': _0x394e('16a', '&zSG'),
        'ZbLBx': 'fyiBv',
        'PnJSj': function (_0xf268ad, _0x2b870a) {
            return _0xf268ad * _0x2b870a;
        },
        'iovtj': function (_0x4b35ba, _0x55ea62) {
            return _0x4b35ba == _0x55ea62;
        },
        'KuHkF': function (_0x42cf61) {
            return _0x42cf61();
        },
        'StvBw': function (_0x5501f4, _0x5d72cf, _0x598bb3) {
            return _0x5501f4(_0x5d72cf, _0x598bb3);
        },
        'zVupg': _0x394e('16b', 'Gl37'),
        'WDXcp': _0x394e('16c', '8#6p'),
        'OnScA': function (_0x5324b9, _0x2ff024, _0x34b22f) {
            return _0x5324b9(_0x2ff024, _0x34b22f);
        },
        'RNiwg': _0x394e('16d', '1C$#'),
        'edwzv': _0x394e('16e', 'LQ11'),
        'XATSJ': function (_0x498fa4, _0x440ee4) {
            return _0x498fa4(_0x440ee4);
        },
        'Admwd': function (_0x2a1661, _0xfbedfd, _0x3e0fa7) {
            return _0x2a1661(_0xfbedfd, _0x3e0fa7);
        },
        'crauH': _0x394e('16f', 'a4)o'),
        'EoCCy': function (_0x5e51a6, _0x46ae7f, _0x12a314, _0x3fe7e3) {
            return _0x5e51a6(_0x46ae7f, _0x12a314, _0x3fe7e3);
        },
        'mmUfX': 'wxgame/helpFriend',
        'HaCyO': function (_0x1169c5, _0x11ce37, _0x5b1620) {
            return _0x1169c5(_0x11ce37, _0x5b1620);
        },
        'byDsH': 'yvNdW',
        'JrDvi': _0x394e('170', '$jM]'),
        'SeWju': _0x394e('171', 'HzFI'),
        'BscXn': function (_0x42844e, _0x401f2f) {
            return _0x42844e - _0x401f2f;
        },
        'MvSNQ': 'wxgame/getProduct',
        'tYdgx': function (_0x51397a, _0x167b05) {
            return _0x51397a < _0x167b05;
        },
        'uQtir': function (_0x25d6a4, _0x5dcf45, _0x3c6e21) {
            return _0x25d6a4(_0x5dcf45, _0x3c6e21);
        },
        'qtNXf': function (_0x45f11e, _0x451e0f, _0xb11ffd) {
            return _0x45f11e(_0x451e0f, _0xb11ffd);
        },
        'yzyWQ': 'add2cart',
        'JSeKX': function (_0x2a5481, _0x1002ce) {
            return _0x2a5481 > _0x1002ce;
        },
        'XIKIp': function (_0x30175d, _0x9769c3, _0x5edc8f, _0x3e0926) {
            return _0x30175d(_0x9769c3, _0x5edc8f, _0x3e0926);
        },
        'kNLSN': function (_0x4a693e, _0x2ccad0) {
            return _0x4a693e < _0x2ccad0;
        },
        'clwUW': 'BwkFM',
        'AoebO': 'wxgame/doTask',
        'fazrO': function (_0x144db8, _0x4aa066) {
            return _0x144db8(_0x4aa066);
        },
        'lqdsl': function (_0x119b1a, _0x4a51d1) {
            return _0x119b1a !== _0x4a51d1;
        },
        'UYpvp': function (_0x57c532, _0x66ee56, _0x3c535f) {
            return _0x57c532(_0x66ee56, _0x3c535f);
        },
        'fHpda': function (_0x2afd21, _0x455548, _0x3490b4, _0x56beef) {
            return _0x2afd21(_0x455548, _0x3490b4, _0x56beef);
        },
        'bXHDD': _0x394e('172', 'T6xY'),
        'ujRWQ': function (_0x534d27, _0x73bfdf) {
            return _0x534d27 < _0x73bfdf;
        },
        'EwQyO': _0x394e('173', 'iD21'),
        'McDUH': function (_0xee4b0e, _0x5f3f04) {
            return _0xee4b0e + _0x5f3f04;
        },
        'hMToZ': function (_0xcd432, _0x580784) {
            return _0xcd432 + _0x580784;
        },
        'zfiGo': function (_0x20bf0e, _0x2689eb) {
            return _0x20bf0e + _0x2689eb;
        },
        'MfVgH': _0x394e('174', 'T6xY'),
        'lXMYb': function (_0x41d70c, _0x1d9388, _0x2831dc, _0x3ecc19) {
            return _0x41d70c(_0x1d9388, _0x2831dc, _0x3ecc19);
        },
        'mfnSi': 'wxgame/game/end',
        'gaxUi': function (_0x5978d9, _0x4b35db) {
            return _0x5978d9 + _0x4b35db;
        },
        'pyiGN': function (_0x1b84b5, _0x13c2d5) {
            return _0x1b84b5 + _0x13c2d5;
        },
        'xSZYS': function (_0x41465f, _0x24de53, _0x3438e6) {
            return _0x41465f(_0x24de53, _0x3438e6);
        },
        'KetkP': 'wxgame/game/luckyDraw',
        'lOEeQ': function (_0x1c4dcd, _0x5ad12d) {
            return _0x1c4dcd(_0x5ad12d);
        },
        'EHExH': function (_0x3c43dc, _0x350a20, _0x3361a2, _0x1934d4) {
            return _0x3c43dc(_0x350a20, _0x3361a2, _0x1934d4);
        },
        'SVTUd': function (_0x387c6f, _0x1f57c0) {
            return _0x387c6f(_0x1f57c0);
        }
    };
    $[_0x394e('175', '8#6p')] = null;
    $[_0x394e('176', 'lt8(')] = null;
    await _0x291360['KuHkF'](getToken);
    await _0x291360[_0x394e('177', 'nC&[')](task, _0x291360[_0x394e('178', '&zSG')], _0x394e('179', 'eXYY') + $[_0x394e('17a', '$jM]')]);
    if ($[_0x394e('17b', 'oou*')] && $[_0x394e('17c', '0P@F')]) {
        if (_0x291360[_0x394e('17d', 'Xjt9')](_0x291360[_0x394e('17e', 'MHwn')], _0x291360['WDXcp'])) {
            $[_0x394e('63', 'jDgc')]('啥都没有抽到～');
        } else {
            await _0x291360['OnScA'](task, _0x291360['RNiwg'], _0x394e('17f', '^af%') + $[_0x394e('180', 'tGzW')] + _0x394e('181', '1a[^') + $[_0x394e('182', 'Xjt9')] + '&fromType=APP');
            if ($[_0x394e('183', '2qqV')]) {
                await _0x291360[_0x394e('184', '9Pp1')](task, _0x291360[_0x394e('185', 'eXYY')], _0x394e('186', 'iD21') + $['venderId'] + _0x394e('187', 'LQ11') + _0x291360[_0x394e('188', 'jDgc')](encodeURIComponent, $[_0x394e('189', 'ynQ@')]) + _0x394e('18a', 'KPa[') + $[_0x394e('17a', '$jM]')] + _0x394e('18b', 'tGzW') + _0x291360[_0x394e('18c', 'RRFT')](encodeURIComponent, $['activityUrl']) + _0x394e('18d', 'QaMY'));
                await _0x291360[_0x394e('18e', '47CI')](task, _0x291360[_0x394e('18f', 'tGzW')], _0x394e('190', 'x0sJ') + $[_0x394e('191', 'tGzW')] + _0x394e('192', 'oou*') + encodeURIComponent($[_0x394e('193', 'Q7SL')]) + _0x394e('194', 'MHwn'));
                if ($['uid']) {
                    await _0x291360[_0x394e('195', '$jM]')](task, _0x394e('196', 'ka%R'), _0x394e('197', 'Gt%n') + $[_0x394e('198', 'eXYY')] + _0x394e('199', 'V0C9') + _0x291360['XATSJ'](encodeURIComponent, $['secretPin']) + '&actorUuid=' + $['uid'] + '&userUuid=' + $[_0x394e('19a', '!!02')], 0x1);
                    await _0x291360[_0x394e('19b', 'Xjt9')](task, _0x291360['mmUfX'], _0x394e('19c', '$jM]') + $[_0x394e('19d', '8#6p')][_0x291360[_0x394e('19e', '9Pp1')](random, 0x0, $[_0x394e('19f', 'MM@Y')][_0x394e('1a0', 'tGzW')])] + _0x394e('1a1', 'V0C9') + $[_0x394e('1a2', '47CI')] + _0x394e('1a3', 'Gt%n') + _0x291360['XATSJ'](encodeURIComponent, $[_0x394e('1a4', '#Cup')]) + '&actorUuid=' + $[_0x394e('1a5', 'Gl37')] + _0x394e('1a6', '&zSG') + $[_0x394e('1a7', 'KPa[')]);
                    if ($['taskList']) {
                        if (_0x291360[_0x394e('1a8', 'x0sJ')] === _0x291360[_0x394e('1a9', '!!02')]) {
                            $['log'](error);
                        } else {
                            for (const _0x4a4c58 of $[_0x394e('1aa', '9Pp1')]) {
                                switch (_0x4a4c58[_0x394e('1ab', '0P@F')]) {
                                    case _0x291360[_0x394e('1ac', '9Pp1')]:
                                        need = _0x291360[_0x394e('1ad', 'nC&[')](_0x4a4c58[_0x394e('1ae', 'ka%R')], _0x4a4c58[_0x394e('1af', 'MM@Y')]);
                                        if (need > 0x0) {
                                            await task(_0x291360[_0x394e('1b0', 'Xjt9')], _0x394e('1b1', '&DV&') + $[_0x394e('1b2', 'jXIJ')] + _0x394e('1b3', 'd$Wh') + _0x291360[_0x394e('1b4', '47CI')](encodeURIComponent, $['secretPin']) + _0x394e('1b5', 'T6xY') + $[_0x394e('1b6', 'HzFI')] + _0x394e('1b7', '1C$#') + $['uid'], 0x1);
                                            t = [];
                                            $[_0x394e('1b8', 'FT]O')][_0x394e('1b9', 'c]Zo')](_0x14eced => {
                                                if (_0x291360[_0x394e('1ba', 'T6xY')](_0x291360[_0x394e('1bb', '0P@F')], _0x394e('1bc', 'Gt%n'))) {
                                                    if (!_0x14eced[_0x394e('1bd', 'iD21')]) {
                                                        if (_0x291360[_0x394e('1be', '47CI')](_0x291360['dwZrA'], _0x291360[_0x394e('1bf', '#Cup')])) {
                                                            uuid = v['toString'](0x24);
                                                        } else {
                                                            t['push'](_0x14eced);
                                                        }
                                                    }
                                                } else {
                                                    $[_0x394e('1c0', '@S24')](err);
                                                }
                                            });
                                            for (let _0x22d5b8 = 0x0; _0x291360['tYdgx'](_0x22d5b8, need); _0x22d5b8++) {
                                                $[_0x394e('1c1', 'tGzW')]('去执行\x20-\x20' + _0x4a4c58[_0x394e('1c2', 'Y#wP')]);
                                                await _0x291360['uQtir'](task, _0x394e('1c3', 'ynQ@'), 'taskId=' + _0x4a4c58[_0x394e('1c4', 'Rt5L')] + _0x394e('1c5', '0P@F') + t[_0x22d5b8][_0x394e('1c6', 'Q7SL')] + _0x394e('1c7', 'nC&[') + $[_0x394e('1c8', 'nC&[')] + _0x394e('1c9', '$jM]') + encodeURIComponent($[_0x394e('1ca', '1C$#')]) + _0x394e('1cb', 'Y#wP') + $['uid'] + _0x394e('1cc', 'oDEf') + $[_0x394e('1cd', 'tGzW')]);
                                                await _0x291360['qtNXf'](task, _0x394e('1ce', 'lJAH'), _0x394e('1cf', '1C$#') + $['jdActivityId'] + '&pin=' + encodeURIComponent($[_0x394e('1d0', ')0zn')]) + '&actionType=5&venderId=' + $[_0x394e('1d1', 'WP4@')] + '&activityId=' + $[_0x394e('1d2', 'Gt%n')]);
                                                await $[_0x394e('1d3', 'Gt%n')](0x7d0);
                                            }
                                        }
                                        break;
                                    case _0x291360['yzyWQ']:
                                        need = _0x4a4c58[_0x394e('1d4', '@S24')] - _0x4a4c58[_0x394e('1d5', 'a4)o')];
                                        if (_0x291360[_0x394e('1d6', '9Pp1')](need, 0x0)) {
                                            await _0x291360[_0x394e('1d7', 'FT]O')](task, _0x394e('1d8', 'Gl37'), _0x394e('1d9', '&zSG') + $['activityId'] + _0x394e('1da', 'Xjt9') + _0x291360['XATSJ'](encodeURIComponent, $[_0x394e('1db', 'Y#wP')]) + '&actorUuid=' + $[_0x394e('1dc', '^af%')] + '&userUuid=' + $['uid'], 0x1);
                                            t = [];
                                            $[_0x394e('1dd', '$jM]')][_0x394e('1de', 'WP4@')](_0x2e024e => {
                                                if (_0x291360[_0x394e('1df', '47CI')](_0x291360[_0x394e('1e0', '&DV&')], _0x291360[_0x394e('1e1', 'Gt%n')])) {
                                                    if (!_0x2e024e[_0x394e('1e2', '9Pp1')]) {
                                                        t[_0x394e('1e3', '&DV&')](_0x2e024e);
                                                    }
                                                } else {
                                                    $[_0x394e('1e4', 'c]Zo')](_0x291360['EBhZB']);
                                                }
                                            });
                                            for (let _0x2d647f = 0x0; _0x291360['kNLSN'](_0x2d647f, need); _0x2d647f++) {
                                                if (_0x291360[_0x394e('1e5', '1a[^')](_0x291360[_0x394e('1e6', 'Gt%n')], _0x291360[_0x394e('1e7', '$jM]')])) {
                                                    $['log'](_0x394e('1e8', '^af%') + _0x4a4c58[_0x394e('1e9', 'Gt%n')]);
                                                    await _0x291360['qtNXf'](task, _0x291360[_0x394e('1ea', 'LQ11')], _0x394e('1eb', 'tGzW') + _0x4a4c58[_0x394e('1ec', 'KPa[')] + _0x394e('1ed', 'Gt%n') + t[_0x2d647f][_0x394e('1ee', 'jXIJ')] + _0x394e('1ef', 'jDgc') + $['activityId'] + _0x394e('1f0', 'jXIJ') + _0x291360[_0x394e('1f1', 'RRFT')](encodeURIComponent, $['secretPin']) + '&actorUuid=' + $[_0x394e('1f2', 'eXYY')] + _0x394e('1f3', '8#6p') + $[_0x394e('1f4', '9Pp1')]);
                                                    await $[_0x394e('1f5', 'Rt5L')](0x7d0);
                                                } else {
                                                    $[_0x394e('1f6', 'FT]O')] = JSON['parse'](data);
                                                }
                                            }
                                        }
                                        break;
                                    case _0x394e('1f7', ')0zn'):
                                        if (_0x291360[_0x394e('1f8', 'jDgc')](_0x4a4c58['maxNeed'], _0x4a4c58[_0x394e('1f9', '2qqV')])) {
                                            await _0x291360[_0x394e('1fa', ')0zn')](task, _0x394e('1fb', 'nC&['), 'taskId=' + _0x4a4c58[_0x394e('1fc', 'mok]')] + _0x394e('1fd', 'c]Zo') + _0x4a4c58['id'] + _0x394e('1fe', 'Jsv9') + $[_0x394e('1ff', 'Gl37')] + '&pin=' + encodeURIComponent($[_0x394e('200', 'x0sJ')]) + _0x394e('201', 'jXIJ') + $['uid'] + _0x394e('202', '1a[^') + $['uid']);
                                        }
                                    default:
                                        break;
                                }
                            }
                        }
                    }
                    await _0x291360['fHpda'](task, _0x291360['bXHDD'], _0x394e('203', '@S24') + $[_0x394e('204', '@S24')] + '&pin=' + _0x291360[_0x394e('205', 'MHwn')](encodeURIComponent, $[_0x394e('206', '0P@F')]) + _0x394e('207', ')0zn') + $[_0x394e('208', 'a4)o')] + _0x394e('209', 'mok]') + $[_0x394e('1b6', 'HzFI')], 0x1);
                    $['log']('\x0a当前可参与游戏次数：' + $['chance']);
                    for (let _0x1ce14f = 0x0; _0x291360[_0x394e('20a', 'c]Zo')](_0x1ce14f, $[_0x394e('20b', '47CI')]); _0x1ce14f++) {
                        if (_0x291360[_0x394e('20c', 'Jsv9')](_0x291360[_0x394e('20d', 'V0C9')], _0x291360[_0x394e('20e', 'LQ11')])) {
                            var _0x37c846 = {
                                'kMVNp': function (_0x3360ed, _0x4fc942) {
                                    return _0x3360ed | _0x4fc942;
                                }, 'Bqjha': function (_0x4dfebb, _0x53beb1) {
                                    return _0x291360['PnJSj'](_0x4dfebb, _0x53beb1);
                                }, 'FSPfZ': function (_0x8a63cf, _0x13c1ee) {
                                    return _0x291360[_0x394e('20f', 'lJAH')](_0x8a63cf, _0x13c1ee);
                                }
                            };
                            return format['replace'](/[xy]/g, function (_0x33184b) {
                                var _0x4122f0 = _0x37c846[_0x394e('210', 'mok]')](_0x37c846['Bqjha'](Math[_0x394e('211', '&DV&')](), 0x10), 0x0),
                                    _0x2d8788 = _0x37c846[_0x394e('212', 'QaMY')](_0x33184b, 'x') ? _0x4122f0 : _0x37c846['kMVNp'](_0x4122f0 & 0x3, 0x8);
                                if (UpperCase) {
                                    uuid = _0x2d8788['toString'](0x24)[_0x394e('213', 'FT]O')]();
                                } else {
                                    uuid = _0x2d8788[_0x394e('214', '2qqV')](0x24);
                                }
                                return uuid;
                            });
                        } else {
                            var _0x228c2e = _0x394e('215', 'Gl37')[_0x394e('216', 'Q7SL')]('|'), _0x29f87b = 0x0;
                            while (!![]) {
                                switch (_0x228c2e[_0x29f87b++]) {
                                    case'0':
                                        $[_0x394e('100', 'iD21')](_0x394e('217', 'RRFT'));
                                        continue;
                                    case'1':
                                        await $[_0x394e('218', '#Cup')](0xbb8);
                                        continue;
                                    case'2':
                                        await $['wait'](0x3a98);
                                        continue;
                                    case'3':
                                        if ($[_0x394e('219', '8#6p')]) {
                                            score = await random(0x64, 0x258);
                                            gameId = $['gameId'];
                                            reqtime = new Date()[_0x394e('21a', 'a4)o')]();
                                            sign = $[_0x394e('21b', 'lJAH')](_0x291360[_0x394e('21c', 'RRFT')](_0x291360['hMToZ'](_0x291360[_0x394e('21d', 'Xjt9')](_0x291360['zfiGo'](gameId, ','), reqtime), ','), score) + _0x291360[_0x394e('21e', '1C$#')]);
                                            await _0x291360[_0x394e('21f', 'Rt5L')](task, _0x291360['mfnSi'], 'gameId=' + gameId + '&score=' + score + _0x394e('220', 'KPa[') + sign + _0x394e('221', 'oDEf') + reqtime + _0x394e('222', 'oDEf') + $[_0x394e('223', 'Y#wP')] + _0x394e('224', 'nC&[') + encodeURIComponent($[_0x394e('225', 'jDgc')]) + _0x394e('1cb', 'Y#wP') + $[_0x394e('226', 'lJAH')] + '&userUuid=' + $['uid'], 0x1);
                                            reqtime = new Date()[_0x394e('227', '#Cup')]();
                                            sign = $[_0x394e('228', ')0zn')](_0x291360[_0x394e('229', 'c]Zo')](_0x291360[_0x394e('22a', 'Jsv9')](_0x291360[_0x394e('22b', '@S24')](gameId, ','), reqtime), _0x291360[_0x394e('22c', '$jM]')]));
                                            await _0x291360['xSZYS'](task, _0x291360[_0x394e('22d', 'HzFI')], 'gameId=' + gameId + _0x394e('22e', 'Gt%n') + sign + _0x394e('22f', '9Pp1') + reqtime + '&activityId=' + $['activityId'] + _0x394e('1c9', '$jM]') + _0x291360['lOEeQ'](encodeURIComponent, $[_0x394e('230', 'oDEf')]) + _0x394e('231', 'x0sJ') + $[_0x394e('232', 'ka%R')] + _0x394e('233', 'MM@Y') + $['uid']);
                                        }
                                        continue;
                                    case'4':
                                        await _0x291360[_0x394e('234', 'Q7SL')](task, _0x394e('235', 'LQ11'), _0x394e('236', '1a[^') + $[_0x394e('1b2', 'jXIJ')] + _0x394e('237', 'QaMY') + _0x291360[_0x394e('238', 'lt8(')](encodeURIComponent, $[_0x394e('239', 'FT]O')]) + _0x394e('23a', '#Cup') + $[_0x394e('23b', 'QaMY')] + _0x394e('23c', 'Q7SL') + $['uid'], 0x1);
                                        continue;
                                    case'5':
                                        $['gameId'] = null;
                                        continue;
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
}

function task(_0x161fd6, _0x721683, _0x4ffb18 = ![]) {
    var _0x3e7952 = {
        'PKjxH': function (_0x9fcf8a) {
            return _0x9fcf8a();
        },
        'aXBzG': _0x394e('23d', 'QaMY'),
        'lAmhu': _0x394e('23e', '8#6p'),
        'mpfEO': 'keep-alive',
        'GGXxG': _0x394e('23f', '#Cup'),
        'DEflX': _0x394e('240', '&zSG'),
        'TMToJ': _0x394e('241', 'MM@Y'),
        'auhIf': _0x394e('242', ')0zn'),
        'kUdpg': function (_0x172b25) {
            return _0x172b25();
        },
        'OUoPx': _0x394e('243', 'eXYY'),
        'bNbdi': function (_0xd9e4fd, _0x2892a5) {
            return _0xd9e4fd === _0x2892a5;
        },
        'zfXcD': _0x394e('244', '8#6p'),
        'yUiWx': _0x394e('245', 'nC&['),
        'CiAuf': _0x394e('246', 'd$Wh'),
        'hiYHt': function (_0x3d8f9d, _0x2f177d) {
            return _0x3d8f9d !== _0x2f177d;
        },
        'uUZHy': _0x394e('247', 'c]Zo'),
        'poArQ': 'SfSxi',
        'VzYZp': _0x394e('248', 'Rt5L'),
        'gjDOM': _0x394e('249', 'd$Wh'),
        'aPzoM': _0x394e('24a', 'Gl37'),
        'nCKgJ': function (_0x374c55, _0x20dd9f, _0x4b0a0e, _0xd77d85) {
            return _0x374c55(_0x20dd9f, _0x4b0a0e, _0xd77d85);
        }
    };
    return new Promise(_0x707e06 => {
        var _0x190abb = {
            'mqROo': _0x3e7952['auhIf'],
            'yYXzr': function (_0x67a59b) {
                return _0x3e7952['kUdpg'](_0x67a59b);
            },
            'vimCT': _0x3e7952[_0x394e('24b', ')0zn')],
            'ClDdQ': function (_0x3b2e1e, _0x214dca) {
                return _0x3b2e1e === _0x214dca;
            },
            'gqZuA': _0x394e('24c', 'Y#wP'),
            'mmTSa': function (_0x3c3a4c, _0x3dedad) {
                return _0x3e7952['bNbdi'](_0x3c3a4c, _0x3dedad);
            },
            'PFGZI': 'WXiaE',
            'wckcW': _0x394e('24d', 'ka%R'),
            'pbSaO': _0x3e7952[_0x394e('24e', '$jM]')],
            'oqytx': _0x394e('24f', 'nC&['),
            'aCwWh': _0x394e('250', 'Y#wP'),
            'fQYXA': 'wxgame/getProduct',
            'NZdSu': _0x3e7952['yUiWx'],
            'eoFEK': _0x3e7952[_0x394e('251', 'MHwn')],
            'WGRTm': _0x394e('252', ')0zn'),
            'kRMmI': function (_0x5ca256, _0x20f8bb) {
                return _0x3e7952[_0x394e('253', '&DV&')](_0x5ca256, _0x20f8bb);
            },
            'ybYNH': _0x3e7952[_0x394e('254', 'T6xY')],
            'iBUha': _0x3e7952[_0x394e('255', '$jM]')],
            'VLmDs': function (_0x5df119, _0x5b8b61) {
                return _0x3e7952[_0x394e('256', 'a4)o')](_0x5df119, _0x5b8b61);
            },
            'wKSwS': _0x394e('257', '@S24'),
            'vScNQ': _0x3e7952[_0x394e('258', '!!02')],
            'AHkGS': _0x394e('259', 'oou*')
        };
        if (_0x3e7952[_0x394e('25a', 'ka%R')] !== _0x3e7952[_0x394e('25b', 'lJAH')]) {
            $['post'](_0x3e7952['nCKgJ'](postUrl, _0x161fd6, _0x721683, _0x4ffb18), (_0x51d4fe, _0x2f260e, _0x152e96) => {
                var _0x3bddb7 = {
                    'NsRzN': function (_0x22229b) {
                        return _0x190abb[_0x394e('25c', 'iD21')](_0x22229b);
                    },
                    'nRZnb': _0x394e('25d', 'Q7SL'),
                    'tGUJn': _0x394e('25e', 'FT]O'),
                    'jYkeM': _0x394e('25f', '!!02'),
                    'yGKLK': _0x190abb[_0x394e('260', 'FT]O')]
                };
                if (_0x190abb[_0x394e('261', '0P@F')](_0x190abb[_0x394e('262', '8#6p')], _0x394e('263', 'lJAH'))) {
                    try {
                        if (_0x51d4fe) {
                            $[_0x394e('1e4', 'c]Zo')](_0x51d4fe);
                        } else {
                            if (_0x190abb['mmTSa']('WXiaE', _0x190abb[_0x394e('264', '#Cup')])) {
                                if (_0x152e96) {
                                    _0x152e96 = JSON[_0x394e('265', '9Pp1')](_0x152e96);
                                    if (_0x152e96['result']) {
                                        switch (_0x161fd6) {
                                            case _0x190abb['wckcW']:
                                                break;
                                            case _0x394e('266', 'HzFI'):
                                                $['venderId'] = _0x152e96['data']['venderId'];
                                                break;
                                            case _0x190abb['pbSaO']:
                                                $['secretPin'] = _0x152e96[_0x394e('267', 'Rt5L')][_0x394e('268', 'oou*')];
                                                break;
                                            case _0x190abb['oqytx']:
                                                $['uid'] = _0x152e96[_0x394e('269', '8#6p')]['uid'];
                                                $['jdActivityId'] = _0x152e96[_0x394e('26a', '&zSG')][_0x394e('26b', 'c]Zo')];
                                                break;
                                            case _0x190abb[_0x394e('26c', '&zSG')]:
                                                $[_0x394e('26d', 'lJAH')] = _0x152e96[_0x394e('26e', 'a4)o')][_0x394e('26f', '^af%')];
                                                $[_0x394e('270', 'jXIJ')] = _0x152e96[_0x394e('271', 'FT]O')][_0x394e('272', 'LQ11')];
                                                break;
                                            case _0x190abb[_0x394e('273', 'lt8(')]:
                                                $[_0x394e('274', 'Rt5L')] = _0x152e96[_0x394e('275', '^af%')];
                                                break;
                                            case _0x190abb['NZdSu']:
                                                $[_0x394e('276', 'HzFI')] = _0x152e96[_0x394e('277', 'oou*')];
                                                break;
                                            case _0x190abb[_0x394e('278', 'ka%R')]:
                                                $[_0x394e('279', 'lt8(')](_0x394e('27a', 'QaMY') + _0x152e96[_0x394e('27b', '&DV&')]['score'] + _0x394e('27c', 'T6xY') + _0x152e96[_0x394e('27d', 'nC&[')]['scoreRank']);
                                                break;
                                            case _0x190abb[_0x394e('27e', 'eXYY')]:
                                                if (_0x152e96[_0x394e('27f', '47CI')][_0x394e('280', 'iD21')]) {
                                                    if (_0x190abb[_0x394e('281', 'Xjt9')](_0x190abb['ybYNH'], _0x190abb[_0x394e('282', 'a4)o')])) {
                                                        $[_0x394e('283', 'tGzW')](e);
                                                    } else {
                                                        switch (_0x152e96[_0x394e('267', 'Rt5L')][_0x394e('284', '8#6p')]) {
                                                            case 0x6:
                                                                $[_0x394e('285', '9Pp1')](_0x394e('286', '0P@F') + _0x152e96[_0x394e('287', 'lJAH')]['drawInfo']['name']);
                                                                $[_0x394e('288', '8#6p')] += _0x152e96[_0x394e('289', 'MM@Y')]['drawInfo'][_0x394e('28a', 'ynQ@')];
                                                                break;
                                                            default:
                                                                if (_0x152e96[_0x394e('28b', '!!02')][_0x394e('28c', 'jDgc')]['name'][_0x394e('28d', '1a[^')]('海尔')) {
                                                                    if (_0x190abb['mmTSa'](_0x190abb[_0x394e('28e', '0P@F')], _0x394e('28f', 'RRFT'))) {
                                                                        t[_0x394e('290', '!!02')](x);
                                                                    } else {
                                                                        if ($['isNode']()) {
                                                                            notify[_0x394e('291', '!!02')]($[_0x394e('292', 'nC&[')], '\x0a【京东账号' + $[_0x394e('60', 'oou*')] + '】' + ($['nickName'] || $[_0x394e('293', 'Xjt9')]) + _0x394e('294', '8#6p') + _0x152e96[_0x394e('295', 'd$Wh')][_0x394e('296', 'iD21')]['name'] + _0x394e('297', '&zSG') + $[_0x394e('298', 'c]Zo')]);
                                                                        } else {
                                                                            $[_0x394e('160', 'ka%R')]($[_0x394e('299', 'HzFI')], _0x394e('29a', 'WP4@'), _0x394e('29b', 'jDgc') + $[_0x394e('29c', ')0zn')] + '】' + ($['nickName'] || $[_0x394e('ea', 'T6xY')]) + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20└\x20获得\x20' + _0x152e96[_0x394e('29d', 'c]Zo')][_0x394e('29e', '$jM]')][_0x394e('29f', '0P@F')] + _0x394e('2a0', 'jDgc') + $[_0x394e('2a1', 'MM@Y')]);
                                                                        }
                                                                    }
                                                                }
                                                                $[_0x394e('cf', 'd$Wh')](_0x394e('2a2', 'HzFI') + _0x152e96[_0x394e('b5', '1a[^')][_0x394e('2a3', 'd$Wh')][_0x394e('2a4', 'jXIJ')]);
                                                                break;
                                                        }
                                                    }
                                                } else {
                                                    $[_0x394e('2a5', 'oDEf')](_0x394e('2a6', 'jDgc'));
                                                }
                                                break;
                                            case _0x394e('2a7', 'FT]O'):
                                                if (_0x152e96[_0x394e('2a8', 'ynQ@')]) {
                                                    if (_0x190abb[_0x394e('2a9', 'MHwn')](_0x190abb['wKSwS'], _0x394e('2aa', 'V0C9'))) {
                                                        _0x3bddb7[_0x394e('2ab', 'Rt5L')](_0x707e06);
                                                    } else {
                                                        $[_0x394e('2ac', '0P@F')]('完成任务，获得1次游戏机会');
                                                    }
                                                } else {
                                                    $['log'](_0x190abb[_0x394e('2ad', 'jXIJ')]);
                                                }
                                                break;
                                            case _0x190abb[_0x394e('2ae', '@S24')]:
                                                break;
                                            default:
                                                $[_0x394e('2af', 'Jsv9')](JSON['stringify'](_0x152e96));
                                                break;
                                        }
                                    } else {
                                        if (_0x190abb['kRMmI'](_0x394e('2b0', 'ynQ@'), _0x394e('2b1', 'eXYY'))) {
                                            let _0x20fd82 = {
                                                'url': 'https://api.r2ray.com/jd.bargain/done',
                                                'headers': {'Content-Type': _0x190abb['mqROo']},
                                                'body': JSON['stringify']({
                                                    'actID': actID,
                                                    'actsID': actsID,
                                                    'done': 0x1
                                                })
                                            };
                                            return new Promise(_0x12decc => {
                                                var _0x409c1f = {
                                                    'DbZEF': function (_0xcb2572) {
                                                        return _0xcb2572();
                                                    }
                                                };
                                                $[_0x394e('2b2', '&DV&')](_0x20fd82, (_0x39be68, _0x2b5a93, _0xd35b4c) => {
                                                    _0x409c1f[_0x394e('2b3', '47CI')](_0x12decc);
                                                });
                                            });
                                        } else {
                                            $[_0x394e('162', '^af%')](_0x152e96[_0x394e('2b4', 'd$Wh')]);
                                        }
                                    }
                                } else {
                                    $['log'](_0x394e('2b5', 'MM@Y'));
                                }
                            } else {
                                $[_0x394e('2b6', '#Cup')] = JSON['parse'](_0x152e96);
                                _0x707e06();
                            }
                        }
                    } catch (_0x130964) {
                        $[_0x394e('2b7', 'Gt%n')](_0x130964);
                    } finally {
                        _0x190abb[_0x394e('2b8', 'Gt%n')](_0x707e06);
                    }
                } else {
                    return {
                        'url': _0x4ffb18 ? _0x394e('2b9', 'V0C9') + _0x161fd6 + _0x394e('2ba', 'KPa[') + new Date() : _0x394e('2bb', 'a4)o') + _0x161fd6,
                        'headers': {
                            'Host': _0x3bddb7[_0x394e('2bc', 'Y#wP')],
                            'Accept': _0x394e('2bd', 'oou*'),
                            'X-Requested-With': _0x3bddb7[_0x394e('2be', '&zSG')],
                            'Accept-Language': 'zh-cn',
                            'Accept-Encoding': 'gzip,\x20deflate,\x20br',
                            'Content-Type': _0x3bddb7[_0x394e('2bf', 'oDEf')],
                            'Origin': _0x3bddb7[_0x394e('2c0', '^af%')],
                            'User-Agent': _0x394e('2c1', 'a4)o') + $[_0x394e('2c2', '!!02')] + ';network/wifi;ADID/' + $[_0x394e('2c3', '^af%')] + _0x394e('2c4', 'x0sJ'),
                            'Connection': _0x394e('2c5', 'tGzW'),
                            'Referer': '' + $['activityUrl']
                        },
                        'body': _0x721683
                    };
                }
            });
        } else {
            var _0x1fc039 = {
                'EMxvP': function (_0x5e7c97) {
                    return _0x3e7952[_0x394e('2c6', 'T6xY')](_0x5e7c97);
                }
            };
            let _0x588fec = {
                'url': _0x394e('2c7', 'Xjt9'),
                'headers': {
                    'Host': _0x394e('2c8', '2qqV'),
                    'Content-Type': _0x3e7952[_0x394e('2c9', 'FT]O')],
                    'Origin': _0x394e('2ca', 'a4)o'),
                    'Accept-Encoding': _0x3e7952['lAmhu'],
                    'Cookie': cookie,
                    'Connection': _0x3e7952[_0x394e('2cb', 'Gt%n')],
                    'Accept': _0x3e7952[_0x394e('2cc', 'LQ11')],
                    'User-Agent': _0x3e7952[_0x394e('2cd', 'MM@Y')],
                    'Referer': _0x394e('2ce', '0P@F') + actID + '&way=0&lng=&lat=&sid=&un_area=',
                    'Accept-Language': _0x3e7952[_0x394e('2cf', ')0zn')]
                },
                'body': 'functionId=cutPriceByUser&body={\x22activityId\x22:\x22' + actID + _0x394e('2d0', 'Rt5L') + actsID + _0x394e('2d1', '0P@F')
            };
            return new Promise(_0xebf1b9 => {
                var _0x97ee43 = {
                    'cYxUJ': function (_0x165210) {
                        return _0x1fc039[_0x394e('2d2', '^af%')](_0x165210);
                    }
                };
                $[_0x394e('2d3', 'ynQ@')](_0x588fec, (_0x11ea1c, _0xeba3fa, _0x2c5947) => {
                    if (_0x2c5947) {
                        $[_0x394e('10b', 'KPa[')] = JSON[_0x394e('2d4', 'ka%R')](_0x2c5947);
                        _0x97ee43['cYxUJ'](_0xebf1b9);
                    }
                    ;
                });
            });
        }
    });
}

function postUrl(_0x5cb2fb, _0x476be1, _0x174bba = ![]) {
    var _0x12b289 = {
        'rIlNf': _0x394e('2d5', 'oou*'),
        'ozgUm': _0x394e('2d6', 'Jsv9'),
        'QbLBG': 'XMLHttpRequest',
        'PIAho': 'zh-cn',
        'qdMcx': 'gzip,\x20deflate,\x20br',
        'XHZym': _0x394e('2d7', '#Cup'),
        'oPOYo': _0x394e('2d8', 'Xjt9')
    };
    return {
        'url': _0x174bba ? _0x394e('2d9', 'jXIJ') + _0x5cb2fb + _0x394e('2da', 'd$Wh') + new Date() : _0x394e('2db', 'Q7SL') + _0x5cb2fb,
        'headers': {
            'Host': _0x12b289[_0x394e('2dc', 'ka%R')],
            'Accept': _0x12b289['ozgUm'],
            'X-Requested-With': _0x12b289[_0x394e('2dd', '&zSG')],
            'Accept-Language': _0x12b289[_0x394e('2de', ')0zn')],
            'Accept-Encoding': _0x12b289[_0x394e('2df', '0P@F')],
            'Content-Type': _0x12b289[_0x394e('2e0', 'QaMY')],
            'Origin': _0x394e('2e1', 'MM@Y'),
            'User-Agent': 'jdapp;iPhone;9.5.2;13.7;' + $[_0x394e('2e2', 'eXYY')] + _0x394e('2e3', 'Xjt9') + $[_0x394e('2e4', ')0zn')] + _0x394e('2e5', 'MHwn'),
            'Connection': _0x12b289[_0x394e('2e6', '0P@F')],
            'Referer': '' + $[_0x394e('2e7', 'mok]')]
        },
        'body': _0x476be1
    };
}

function getToken() {
    var _0x46719f = {
        'jMQSQ': function (_0x1f9b6d) {
            return _0x1f9b6d();
        },
        'DMpbD': function (_0x1e83c7, _0x19211d) {
            return _0x1e83c7 !== _0x19211d;
        },
        'NZjYP': 'wUSkr',
        'VZaiU': 'JPDks',
        'uvzlu': _0x394e('2e8', '0P@F'),
        'sKige': _0x394e('2e9', 'WP4@'),
        'RsZXq': _0x394e('2ea', 'lt8('),
        'hXyvv': _0x394e('2eb', 'MHwn'),
        'ogtWC': 'api.m.jd.com',
        'fXlpj': _0x394e('2ec', 'ka%R'),
        'VGkqn': 'keep-alive',
        'exQiB': _0x394e('2ed', 'FT]O')
    };
    let _0x2b06cd = {
        'url': _0x394e('2ee', 'RRFT'),
        'headers': {
            'Host': _0x46719f[_0x394e('2ef', 'KPa[')],
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': _0x46719f['fXlpj'],
            'Connection': _0x46719f[_0x394e('2f0', 'x0sJ')],
            'Cookie': cookie,
            'User-Agent': _0x46719f[_0x394e('2f1', 'QaMY')],
            'Accept-Language': _0x394e('2f2', 'Q7SL'),
            'Accept-Encoding': _0x394e('2f3', 'Gt%n')
        },
        'body': _0x394e('2f4', 'jDgc')
    };
    return new Promise(_0x57c4ba => {
        var _0xf42a18 = {'MoRsG': _0x394e('2f5', '1C$#')};
        $[_0x394e('2f6', '47CI')](_0x2b06cd, (_0x2946de, _0x4e02ad, _0x44bac1) => {
            var _0x2edf77 = {
                'hqMZq': function (_0x25a0b8) {
                    return _0x46719f[_0x394e('2f7', 'eXYY')](_0x25a0b8);
                }
            };
            try {
                if (_0x2946de) {
                    if (_0x46719f[_0x394e('2f8', '1C$#')](_0x46719f['NZjYP'], _0x46719f['NZjYP'])) {
                        _0x2edf77[_0x394e('2f9', '1a[^')](_0x57c4ba);
                    } else {
                        $['log'](_0x2946de);
                    }
                } else {
                    if (_0x394e('2fa', ')0zn') === _0x46719f[_0x394e('2fb', 'Gt%n')]) {
                        if (_0x44bac1) {
                            _0x44bac1 = JSON[_0x394e('2fc', 'MM@Y')](_0x44bac1);
                            if (_0x44bac1[_0x394e('2fd', 'FT]O')] === '0') {
                                $['token'] = _0x44bac1[_0x394e('2fe', 'iD21')];
                            }
                        } else {
                            if (_0x46719f[_0x394e('2ff', '9Pp1')](_0x46719f[_0x394e('300', 'Gl37')], 'EPYFv')) {
                                $['zRes'] = JSON[_0x394e('301', 'WP4@')](_0x44bac1);
                                _0x57c4ba();
                            } else {
                                $['log'](_0x46719f[_0x394e('302', 'eXYY')]);
                            }
                        }
                    } else {
                        $['log'](_0xf42a18['MoRsG']);
                    }
                }
            } catch (_0x22b3e7) {
                $[_0x394e('303', '47CI')](_0x22b3e7);
            } finally {
                if (_0x46719f['RsZXq'] === _0x46719f[_0x394e('304', 'V0C9')]) {
                    $[_0x394e('305', 'Gt%n')] = _0x44bac1['data']['userInfo']['baseInfo'][_0x394e('306', 'Gl37')];
                } else {
                    _0x57c4ba();
                }
            }
        });
    });
}

function random(_0x23e2b7, _0x153670) {
    var _0x10a9ae = {
        'rcAxj': function (_0x3299ef, _0x2c05d8) {
            return _0x3299ef * _0x2c05d8;
        }, 'wpTeG': function (_0x29ca18, _0x3ab22b) {
            return _0x29ca18 - _0x3ab22b;
        }
    };
    return Math[_0x394e('307', 'lJAH')](_0x10a9ae[_0x394e('308', '$jM]')](Math[_0x394e('309', '47CI')](), _0x10a9ae[_0x394e('30a', 'LQ11')](_0x153670, _0x23e2b7))) + _0x23e2b7;
}

function getUUID(_0x67e16d = _0x394e('30b', 'lt8('), _0x39d26b = 0x0) {
    var _0x2c9007 = {
        'PKlqP': function (_0x3162e5, _0x112715) {
            return _0x3162e5 | _0x112715;
        }, 'pKbvR': function (_0x155e40, _0x293c39) {
            return _0x155e40 == _0x293c39;
        }, 'uNZMl': function (_0x8516dd, _0x1faf22) {
            return _0x8516dd | _0x1faf22;
        }
    };
    return _0x67e16d[_0x394e('30c', 'oDEf')](/[xy]/g, function (_0x50d82c) {
        var _0xba2f90 = _0x2c9007[_0x394e('30d', 'LQ11')](Math[_0x394e('30e', 'WP4@')]() * 0x10, 0x0),
            _0x143864 = _0x2c9007[_0x394e('30f', 'QaMY')](_0x50d82c, 'x') ? _0xba2f90 : _0x2c9007['uNZMl'](_0xba2f90 & 0x3, 0x8);
        if (_0x39d26b) {
            uuid = _0x143864[_0x394e('310', 'FT]O')](0x24)[_0x394e('311', 'Xjt9')]();
        } else {
            uuid = _0x143864['toString'](0x24);
        }
        return uuid;
    });
}

function checkCookie() {
    var _0x9b4df8 = {
        'mgyVf': function (_0xb4d7ff, _0x4dc67c) {
            return _0xb4d7ff === _0x4dc67c;
        },
        'DkvGU': _0x394e('312', 'nC&['),
        'hGWZP': function (_0x1c2797) {
            return _0x1c2797();
        },
        'Bctyl': _0x394e('313', 'a4)o'),
        'QBuDU': _0x394e('314', '1C$#'),
        'hHKks': 'jdapp;iPhone;9.4.0;14.3;;network/wifi;ADID/;supportApplePay/0;hasUPPay/0;hasOCPay/0;model/iPhone10,3;addressid/;supportBestPay/0;appBuild/167541;jdSupportDarkMode/0;Mozilla/5.0\x20(iPhone;\x20CPU\x20iPhone\x20OS\x2014_3\x20like\x20Mac\x20OS\x20X)\x20AppleWebKit/605.1.15\x20(KHTML,\x20like\x20Gecko)\x20Mobile/15E148;supportJDSHWK/1',
        'pJsnf': _0x394e('315', 'Gl37'),
        'ewjvc': _0x394e('316', 'LQ11'),
        'RRMWD': function (_0x362304, _0x328c6b) {
            return _0x362304 === _0x328c6b;
        },
        'VrTLE': _0x394e('317', 'Y#wP'),
        'UGaCk': function (_0x2f08ee, _0x6c4d96) {
            return _0x2f08ee === _0x6c4d96;
        },
        'zItHz': _0x394e('318', 'x0sJ'),
        'iSGPZ': function (_0x29509a, _0x12e130) {
            return _0x29509a !== _0x12e130;
        },
        'thEyY': 'sSOet',
        'MUOxz': 'LpUxs',
        'lfNgO': '*/*',
        'FdxoU': _0x394e('319', '1C$#'),
        'jfsea': _0x394e('31a', 'jXIJ'),
        'ypnkj': 'zh-cn',
        'RrZFH': _0x394e('31b', 'HzFI'),
        'DbiSb': _0x394e('31c', 'Rt5L')
    };
    const _0x2aa483 = {
        'url': _0x394e('31d', '0P@F'),
        'headers': {
            'Host': _0x394e('31e', 'Y#wP'),
            'Accept': _0x9b4df8[_0x394e('31f', 'ka%R')],
            'Connection': _0x9b4df8[_0x394e('320', 'Rt5L')],
            'Cookie': cookie,
            'User-Agent': _0x9b4df8['jfsea'],
            'Accept-Language': _0x9b4df8[_0x394e('321', 'V0C9')],
            'Referer': _0x9b4df8[_0x394e('322', 'T6xY')],
            'Accept-Encoding': _0x9b4df8[_0x394e('323', 'MM@Y')]
        }
    };
    return new Promise(_0x3cebc5 => {
        var _0x3bba44 = {
            'Ntnxk': function (_0x540186, _0x24d7aa) {
                return _0x9b4df8[_0x394e('324', '&DV&')](_0x540186, _0x24d7aa);
            },
            'lxLad': _0x9b4df8[_0x394e('325', '$jM]')],
            'UpqUX': function (_0x29a019) {
                return _0x9b4df8[_0x394e('326', '9Pp1')](_0x29a019);
            },
            'SkiYD': _0x9b4df8['Bctyl'],
            'fInUX': _0x394e('327', 'ynQ@'),
            'qKUEy': _0x9b4df8[_0x394e('328', 'Gt%n')],
            'TAPcB': _0x9b4df8['hHKks'],
            'VflYa': _0x394e('329', 'Rt5L'),
            'JLaJF': function (_0x314623, _0x1ad3f2) {
                return _0x314623 !== _0x1ad3f2;
            },
            'HJwWI': _0x9b4df8[_0x394e('32a', 'Gt%n')],
            'BJwBt': _0x9b4df8[_0x394e('32b', 'MHwn')],
            'AGDFb': _0x394e('32c', ')0zn'),
            'qiudR': function (_0x1f80ef, _0x8121d0) {
                return _0x9b4df8[_0x394e('32d', '#Cup')](_0x1f80ef, _0x8121d0);
            },
            'NbKVg': _0x9b4df8['VrTLE'],
            'QIqhm': function (_0x383ada, _0x3ab52b) {
                return _0x9b4df8[_0x394e('32e', '&zSG')](_0x383ada, _0x3ab52b);
            },
            'QFVWf': _0x9b4df8[_0x394e('32f', '9Pp1')],
            'nUarJ': function (_0x1b8b51, _0x39cf80) {
                return _0x9b4df8[_0x394e('330', 'jDgc')](_0x1b8b51, _0x39cf80);
            },
            'Zzctq': _0x9b4df8[_0x394e('331', 'ynQ@')]
        };
        if (_0x9b4df8[_0x394e('332', 'ynQ@')](_0x9b4df8[_0x394e('333', 'mok]')], _0x9b4df8['MUOxz'])) {
            data = JSON[_0x394e('334', 'Gl37')](data);
            if (_0x3bba44['Ntnxk'](data[_0x394e('335', 'RRFT')], '0')) {
                $[_0x394e('2fe', 'iD21')] = data[_0x394e('336', 'oDEf')];
            }
        } else {
            $[_0x394e('337', 'HzFI')](_0x2aa483, (_0x4cb684, _0x3e0cd3, _0xd15ca9) => {
                var _0x31b49e = {
                    'sLfpB': _0x3bba44[_0x394e('338', 'jXIJ')],
                    'vedUI': function (_0x3010e9, _0xe442e7) {
                        return _0x3010e9 - _0xe442e7;
                    },
                    'DSejT': function (_0x2cb451) {
                        return _0x3bba44['UpqUX'](_0x2cb451);
                    },
                    'eQmJw': _0x3bba44['SkiYD'],
                    'uPvwb': _0x3bba44[_0x394e('339', 'Xjt9')],
                    'VjmUi': _0x394e('33a', 'iD21'),
                    'HazAT': _0x3bba44[_0x394e('33b', 'oou*')],
                    'iawII': _0x3bba44['TAPcB'],
                    'mpZGH': _0x3bba44['VflYa']
                };
                try {
                    if (_0x4cb684) {
                        if (_0x3bba44[_0x394e('33c', '1a[^')](_0x3bba44[_0x394e('33d', 'lJAH')], _0x3bba44[_0x394e('33e', 'lt8(')])) {
                            $[_0x394e('33f', 'eXYY')](_0x4cb684);
                        } else {
                            $[_0x394e('340', 'MM@Y')](_0x31b49e[_0x394e('341', 'nC&[')]);
                        }
                    } else {
                        if (_0xd15ca9) {
                            if (_0x3bba44['Ntnxk'](_0x3bba44[_0x394e('342', '!!02')], _0x3bba44[_0x394e('343', 'V0C9')])) {
                                _0xd15ca9 = JSON[_0x394e('344', '@S24')](_0xd15ca9);
                                if (_0x3bba44['qiudR'](_0xd15ca9[_0x394e('345', 'ka%R')], '1001')) {
                                    if (_0x3bba44[_0x394e('346', 'lt8(')](_0x3bba44[_0x394e('347', 'Gt%n')], _0x3bba44[_0x394e('348', '!!02')])) {
                                        $['isLogin'] = ![];
                                        return;
                                    } else {
                                        return Math[_0x394e('349', '!!02')](Math[_0x394e('34a', 'RRFT')]() * _0x31b49e[_0x394e('34b', 'd$Wh')](max, min)) + min;
                                    }
                                }
                                if (_0x3bba44['QIqhm'](_0xd15ca9[_0x394e('34c', 'mok]')], '0') && _0xd15ca9[_0x394e('26e', 'a4)o')][_0x394e('34d', 'c]Zo')](_0x3bba44['QFVWf'])) {
                                    if (_0x3bba44[_0x394e('34e', '#Cup')]('TyPxL', _0x394e('34f', 'c]Zo'))) {
                                        console['log'](e);
                                    } else {
                                        $['nickName'] = _0xd15ca9['data'][_0x394e('350', 'HzFI')][_0x394e('351', 'jXIJ')][_0x394e('352', 'HzFI')];
                                    }
                                }
                            } else {
                                var _0x18a07f = {
                                    'OGdVv': function (_0xe14cb2) {
                                        return _0x31b49e[_0x394e('353', 'oDEf')](_0xe14cb2);
                                    }
                                };
                                let _0x2beadc = {
                                    'url': 'https://api.m.jd.com/client.action',
                                    'headers': {
                                        'Host': _0x31b49e[_0x394e('354', 'iD21')],
                                        'Content-Type': _0x31b49e[_0x394e('355', 'WP4@')],
                                        'Origin': 'https://h5.m.jd.com',
                                        'Accept-Encoding': _0x394e('356', '&DV&'),
                                        'Cookie': cookie,
                                        'Connection': _0x31b49e[_0x394e('357', 'jXIJ')],
                                        'Accept': _0x31b49e['HazAT'],
                                        'User-Agent': _0x31b49e[_0x394e('358', 'HzFI')],
                                        'Referer': _0x394e('359', '&DV&') + actID + '&way=0&lng=&lat=&sid=&un_area=',
                                        'Accept-Language': _0x31b49e['mpZGH']
                                    },
                                    'body': 'functionId=cutPriceByUser&body={\x22activityId\x22:\x22' + actID + '\x22,\x22userName\x22:\x22\x22,\x22followShop\x22:1,\x22shopId\x22:' + actsID + ',\x22userPic\x22:\x22\x22}&client=wh5&clientVersion=1.0.0'
                                };
                                return new Promise(_0x442a7d => {
                                    $['post'](_0x2beadc, (_0x125f67, _0x4f22bd, _0x45e30c) => {
                                        if (_0x45e30c) {
                                            $[_0x394e('35a', 'tGzW')] = JSON[_0x394e('35b', 'Jsv9')](_0x45e30c);
                                            _0x18a07f['OGdVv'](_0x442a7d);
                                        }
                                        ;
                                    });
                                });
                            }
                        } else {
                            $['log'](_0x3bba44['lxLad']);
                        }
                    }
                } catch (_0x190ce9) {
                    $['logErr'](_0x190ce9);
                } finally {
                    if (_0x3bba44[_0x394e('35c', 'jXIJ')](_0x3bba44[_0x394e('35d', 'tGzW')], _0x394e('35e', 'ka%R'))) {
                        $['log'](_0x394e('35f', 'QaMY'));
                    } else {
                        _0x3cebc5();
                    }
                }
            });
        }
    });
};_0xodN = 'jsjiami.com.v6';
// prettier-ignore
!function (n) {
    "use strict";

    function t(n, t) {
        var r = (65535 & n) + (65535 & t);
        return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
    }

    function r(n, t) {
        return n << t | n >>> 32 - t
    }

    function e(n, e, o, u, c, f) {
        return t(r(t(t(e, n), t(u, f)), c), o)
    }

    function o(n, t, r, o, u, c, f) {
        return e(t & r | ~t & o, n, t, u, c, f)
    }

    function u(n, t, r, o, u, c, f) {
        return e(t & o | r & ~o, n, t, u, c, f)
    }

    function c(n, t, r, o, u, c, f) {
        return e(t ^ r ^ o, n, t, u, c, f)
    }

    function f(n, t, r, o, u, c, f) {
        return e(r ^ (t | ~o), n, t, u, c, f)
    }

    function i(n, r) {
        n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r;
        var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878;
        for (e = 0; e < n.length; e += 16) i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h);
        return [l, g, v, m]
    }

    function a(n) {
        var t, r = "", e = 32 * n.length;
        for (t = 0; t < e; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
        return r
    }

    function d(n) {
        var t, r = [];
        for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
        var e = 8 * n.length;
        for (t = 0; t < e; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
        return r
    }

    function h(n) {
        return a(i(d(n), 8 * n.length))
    }

    function l(n, t) {
        var r, e, o = d(n), u = [], c = [];
        for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
        return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640))
    }

    function g(n) {
        var t, r, e = "";
        for (r = 0; r < n.length; r += 1) t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
        return e
    }

    function v(n) {
        return unescape(encodeURIComponent(n))
    }

    function m(n) {
        return h(v(n))
    }

    function p(n) {
        return g(m(n))
    }

    function s(n, t) {
        return l(v(n), v(t))
    }

    function C(n, t) {
        return g(s(n, t))
    }

    function A(n, t, r) {
        return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n)
    }

    $.md5 = A
}(this);

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
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
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
