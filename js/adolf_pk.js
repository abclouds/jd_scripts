/*
京享值PK
活动地址：京东app-搜索 京享值PK
活动日期：2021-05-07 至 2021-05-31
更新地址：https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/adolf_pk.js
============Quantumultx===============
[task_local]
#京享值PK
15 8,13,18 17-31 5 * https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/adolf_pk.js, tag=京享值PK,  enabled=true
================Loon==============
[Script]
cron "15 8,13,18 17-31 5 *" script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/adolf_pk.js,tag=京享值PK
===============Surge=================
京享值PK = type=cron,cronexp="15 8,13,18 17-31 5 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/adolf_pk.js
============小火箭=========
京享值PK = type=cron,script-path=https://raw.githubusercontent.com/abclouds/jd_scripts/master/js/adolf_pk.js, cronexpr="15 8,13,18 17-31 5 *", timeout=3600, enable=true
*/

const $ = new Env("京享值PK");
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';
let cookiesArr = [], cookie = '', message = '';
var _0xodK = 'jsjiami.com.v6',
    _0x2275 = [_0xodK, 'w4PDusKawrgBw5t7T8KudMOuwpJewr3DvFU=', 'WcKBMlVywrLCiA==', 'woQKwqoOwoBZADfCug==', 'w7/CucKIFcKlwrfDtcKO', 'wo9xcFwS', 'aMKzwqzDhsK2', 'G1Mfw7fDsg==', 'wp7DlMKpHcOjw4HCj8OfRg==', 'T8KUwozDkcKm', 'G8Opw41wZw==', 'wphqesKuwr3CrS7CiRQ=', 'w6ctw54=', 'woPClcOJwqw+', 'fsK/w4HCsmrDmhVdw7w=', 'Tks2w5Yiwp3CqsKWw57CgTzDk3vDjg==', 'Z8Kpw4rCp03DkQ==', 'wr3DoMKDK8O4', 'wq5cTsKIwpc=', 'woA1w7Z8VA==', 'FsOEQgfDpg==', 'V8OvO8KTGw==', 'albDiTLClw==', 'w73Cs8KlGsKwwrE=', 'DnY6w4U=', 'w6XCtMOj', 'EsKuw5PDqzM=', 'wpjCmcKIWsOo', 'w602w57DmMO2wqvDicOVwoTDoB0=', 'XcK6w6/Cgw==', 'wqzDmMOMG8OMw7Z0woQMwpls', 'NTXDgiQ=', 'MMKlw7fDqzw=', 'GcO8wr5EPQ==', 'KcKTNzQ7HBrCjRc6dQ==', 'w6gtw50w', 'w7oxRQ==', 'wr/CusKRV8OJ', 'wofDgsKiCMODw4Y=', 'WsKrMA8A', 'KGQAw6rDiw==', 'wqRPw65gdg==', 'W8KCwpXDnMKt', 'Xz/Dh0d5GcOWwpg=', 'SMOEwr7DrcKcbw==', 'w6HDj8KlwrAe', 'wpTCklM9JHZow4o=', 'aMKjw4DCpQ==', 'T8O+w53DvibDvCA=', 'wrLCn8O5wrU3', 'wprCnsOMNMKv', 'Tnorw404', 'w5Urw44=', 'woHChMOMwqg2', 'e8KLFQMT', 'L25yw7/DnA==', 'UsO9LMKSLjzCqg==', 'ZMOQSyrDjjnCrMOqRgp9', 'w4fDsMKKwp8=', 'wpbCvSzDvA==', 'wpshwqkZwpk=', 'w4fCriDDq8KCw5IlfH3CvXM=', 'w6nDhcONEsOhw6tuwp8=', 'w4/DgsKyYQ==', 'woLDr1LDuMKfwpzDmg==', 'wrgCw67DlMO4', 'wpHCqTbDoA==', 'w7E7VljCpsOtwqE=', 'wrs3wooZwrk=', 'QQjDrcKMBsOEwqU=', 'bMKoJDQn', 'w7nCjMKMPCY=', 'IMOdw7xaZw==', 'wrsAFA==', 'wo3CsyI=', '5rOj5p2d5oq75YuP6I2l5Y+/5Yup5aSq5Y2H5Yi86KGB44Gb6LW76L6u5o+N5omr5Lii5Ym/', 'w6/CtMKIKSs=', 'w5kbw6A0Ug==', 'wrjCuMO5FMKLexgQ', 'woXCmFQ9AWl+w7zDscOeNHHCkw==', 'OnJuw7/DmMK6LsKiw78LEw0wwptdDg==', '5Yyq6aGQ5aad5ZK8', 'ASLDsz7CnA==', 'FsK+ecOR', 'KWEWw4rDqQ==', 'woIZPcOzAg==', 'YMKDJktw', 'aMKsw6PCjC8=', '5Y+v6Lai5oqb5Ym5', 'AcOnPcKUw58=', 'Wit/esKI', 'w5Niwr3Cl8Kt', 'BFRew4nDhQ==', 'JcOxwoxoOw==', 'cDLDhkFP', 'woPCmMKPdsOo', 'w7Q0TF3CqQ==', 'N8OWw6M=', 'ZXfDmHjCoA==', 'w7g3w6o8w4o=', 'wofDiMKr', 'wrINwqwawr4=', 'woEYwr0PwrE=', 'w5fDqsKNwpkLw5Ba', 'JTHDnwPCsUbCqzI=', 'wrPChMObwp0=', 'wpwXMcOKBA==', 'wp3CocKRdcOQ', 'wr9zZ00=', 'XEojw4oo', 'w4jDsMKJ', 'czPDqTrDoA==', 'JjXDnzE=', 'wqQbEsOvJQ==', 'bidEcsKzXAxLfQ==', 'ZsKPMTsnCBbCmw==', 'ZMKGNE5P', 'wrMSw5TDkMOz', 'w4PClsOOwoFA', 'TcOMw4nDoSU=', 'w7I/Vl0=', 'X3fDq33CgQ==', 'Pnoiw6/DsA==', 'w63CusOwwro=', 'w6HCvcKZGMK3wqzDvsKf', 'OXZuw5w=', 'w6Y1cFnCtMOswqzDgg==', 'w6IxcV/CqMOrwqU=', 'WDHDl0M=', 'LsONSQ==', 'Dx5iwp5tw4/DieKXrcKa5o+15omo6Lyp5LqOwpblvoHliKrlhqfojLflvI/ogrvliYI=', 'wpoaw7JjUWAlwqU=', 'eyFZdsKKUgtjccKU', 'w43DmsK3dsKvfA==', 'eTJCeg==', 'woTCkVTCrhw=', 'QMKXOUBWwrM=', 'fA/DigXDkA==', 'w5XDh8KHwqML', 'XsOsw4zDrQ==', 'wp/DiMK4DsObw7nCjcOUWw==', 'RATDtcKa', 'bXnDkRbCjA==', 'I18Yw43Dlw==', 'wp1zw65rcxvCh8OPUnoaCnI=', 'AsOyPcKkw4wiFg==', 'wq0ww5wiQyLCsRTDtMKGHkIbwpNtw7c=', 'c8OjJcKrKQ==', 'fhbDhBHDsg==', 'wqfCocO3EMKQ', 'w48cw5sFw4w=', 'WRpYUcK/', 'w5rCusO1wqxY', 'fcKEJjQ9CBY=', 'wpgKwoMTwrNfBQ==', 'bzZCeMKyXwA=', 'woHDq1LDvQ==', 'RGLDuUbCk14vw5hZEsKHwpjCiMKc', 'wpFEY3kI', 'wqUtw5jDkMORwrrDjcOV', 'wptlw6V9eBrCmcOy', 'TV8xw5sEwoHCj8KW', 'T3jDhT7Cj2h5w7o=', 'wr3Cj8OEwooq', 'wrnCssOsAw==', 'wrpDw6Vpaw==', 'ZMOvwpDCn10HSeKXv8OJ5oqh5YuI6aCr5Y27', 'wqkhw5rDlcORwq7DjQ==', 'wqkhw5rDlQ==', 'TmbDq2fCqkUS', 'w4DDgsKx', 'X3fDuGDCilcWw4xP', 'w73CucKs', 'N8K7w4LDlhNAAMKNwpA=', '5Lim5Lq25rCI5p2+6L255Zmc5pWt5o6F', 'wrd9dA==', 'S8OhLg==', 'wr5sVsKbwpg=', '5p2j54Ku5YWx5paS6IyQ', 'QMK2MwU8', 'H8O1LMKmw69xV8OTU8KQwr0Yw4FQX8OvUHcfUcKaw5B6McOoDkkCw5cuCMOWTzjDrMKD', 'J1xsw5nDhA==', 'EsOUwqhNGcOSNRZQEsO9e8KgTAzDmQ==', 'w4wkw6sTVQ==', 'YDzDhhTDsg==', 'aEfDpw3Chg==', 'w57CgcKqL8Kq', 'woJkXGcq', 'MsONXT0=', 'wrDClsO6wrES', 'w6rCjcKDKw==', 'woYew4c=', 'w7DDnBjil7E=', 'UD/DhGdHAg==', 'VsKewoLDjMKw', 'YsKSNQ==', 'VMOsw5XDqQ==', 'wqMww4/Di8Osw6HCj8KfwovDpEnClkrCmcK1IDfDp8OdS8OGw444w4A9w7DCvF4sYFvCginCuQ==', 'VsOow6LDizw=', 'aArDglRF', 'w5Y0w5oBw7o=', 'PsKqw7HDmyw=', 'wrwIw4ZFZA==', 'wrHDoU7DjcK8', 'cxnDvwbDow==', 'wp/CiUMoGyU0wpHDscOaKTPChMOHwoplwq1BwoRDw7XDssO3w5lvZHPCmHwpZUlRCg3DqcOTalvCtC4P', 'wp5YccKqwr8=', 'w6dgwok=', 'woPDk8K4H8OEwpTDi8KVSUpjwobDjVbCnMOWUDRLw6PCl8KtwoPCi8ORJMO6wqYJCVvDocKs', 'FMObSArDoQ==', 'w5NWwr7Cu8Kr', 'w7fCmMKRMMKe', 'OnJu', 'XwLDvA==', 'wpPDgcKGKcO1', 'w4PCr8K9CBM=', 'w4XDlsKPwpAe', 'wonDpUE=', 'wprCgcKSa8Om', 'wrLCpcKEc8OQ', 'IMKuw4TDng==', 'M8Ocw7NNSMK6WWE=', 'Vxp4XMKCeSBsSg==', 'b37DhDzCrQ==', 'worCuMO0NsKR', 'wrwlw4/DmsOa', 'wptKdcK0wpg=', 'wo3ChcKU', 'wqMww4/Di8Osw6HCj8KfwovDpEnClkrCmcK1IDfDp8OdS8OGw444w4A9w7DCvF44ZQDCkD7CszHDmwE=', 'w5zDqMORG8OY', 'wot4c8Kvwos=', 'w6bDhcOO', 'AMKDw6TDmzA=', 'w7zCjMKrPws=', 'IMKuw4TDng4=', 'w5jDlMKmYQ==', 'w4TCu8KAE8KP', 'wrLCmVnCiwV5eQ==', '5LiZ5LuB6LOd', 'eBLDkR4=', 'wo98fsKywqDCuyw=', 'wosEw5RuTWcKwr7DrEjCmMOab8Oc', 'Q8KzOgcE', 'w6BVWx3Crg==', 'wowew5JDQ3Yh', 'wqDCiUvCjQ==', 'w65hwpg=', 'ZXodw7oIwq3CvMK+', 'w7bCmcKFM8Kc', 'TX7DgQ==', 'BsOXwr1TX8OFOwlcEw==', 'w7l2WCrCncK+wrUMPE4Mfw==', 'fRnDsSTDjw==', 'W8KqMAQG', 'A8OFEcKcw7E=', 'w4pIRyDCocKkwpILF1kMaW97wq4Jci95wqbDm0TDrcK1Hmp6BMKuV8O5wrtnwqpQw4UtwpTCqcOSSMO3Vw==', 'w7DCpsK7EcKtwrrDs8KfHcKZU8ONwpR9f8K+wofCh8KnwqlkQE9HLVh2Qm/Co3pywp8=', 'w7PCisOKLSs=', 'WyrDilIZUMOBwokiP8KuB8Kzw4JHwpDDqQ==', 'RHfDvnnClwpQwoVcBsKIwoXChcOLwpx6R8KVTglbworChCXCnMKdYcOzMz44wo5lwoEuwoY=', 'JRbDgADDiBPDrHlow45pD1/Di8OpBcOGw57Cv8KiNH/CnDXDrHXClnJswpp/w7jDmyfCjH0BFcKa', 'wqfCr8O2CcK7OxQbw6MAw4DCsw==', 'WxnDr8KZB8KNw6/DhGXDpcOgwoIAWUjDqcKLwo3Cq8Kvw48BMQ==', 'w4LDtcKTUsK+', 'woEUw4V2D3QlwrjDvkg=', 'w7k0UlDCow==', 'wr0LEsOrMEtKISvDksKZXB8TwodEwqVtw4g3Z8KxXsKv', 'wr8kw6lC', 'w6vCkl3CkTxjZsO+YsONwogtKMKtw73DuMK1w604', 'A8OmZw0=', 'Bz3DjEZQHMKKwoUUO8KgHcKzw59Xw57CqEjDtcKgw5DCuMKhwoAbDSzDnHZ2wqwbHVfCv27CpBfCvkTDisKlc39Nw59ZwpvCsgE1K8ORwpLDlmNSw7pAw6jDgMOtwq4bwoDDuMKsw5Jjw75bwpvCnB7DpsK6w7/DpGhiIMOlciTCskzDkSlfEg7DlMOzZMKiFyvDry4oCWTClcKFw7fDkCp1w6bCjR0mwptlw5jCjgHCvMOga8Kcw6PDpcO2KsOETWYie8Ocw69obcKueHDCtDdIDRpqCcOzw4IVN8KswpEFwqrCqEkIQHI+BsOoHMKJCMO5w4JId8KGwqM2woTCocKQw6/DlDc3w7XCmBRYw5fDvcKiIS3CuMOZC043', 'ScK7Gk5Q', 'WxnDr8KZB8KNw6/DhGXDpcOgwoIAWUjDqcKLwo3Cq8Kvw48BMcOYUMKxw6wDw4prw7HDksO6KipuwqvCpAQKw7hHwpfCnMOEIMOdw5TCrlAfORnDlHDClMKdO8K3eW/Co8O8wovDtEfDolsWDHFfw5fCnSzCln0hwot8QsOYaExPMMO5CMOldSUaw5hsw5cLfsKHNMKtWiVHMTfCo8O3wpJdw4tkOMKew751BRjCrCcSwqzDk8OsC3QaPEgZWmXCqcOPfAUKD8OmP8KYDijDgGlVwos3wr5JeyzDumDCq8OGH8O3RMK6N8KKwrhuc8K9LsOvL1w0w6HDmRLCp8KbwrTCl1IhXcKmd8OHTMOCwrNcwqkew5JQwrBywo81d8KYw6E6w5XCjcOXOsOOwqjCsGrCqsKXwpLColzCsj0=', 'wpVWZFop', 'w7svw5EmZw==', 'fGbDumjCjA==', 'B8O8w5tvYQ==', 'wqDCmMKYdcOa', 'w5fCuBrCrsOs', 'w7stw4oh', 'wo81w5VPWw==', 'b8O8GcKwEA==', 'wpg+w5dwSQ==', 'S182w58=', 'w4DCtT/CvsOBFsOrwqISwrxNdsKUwok=', 'wpkEw4NlR2Y6', 'WT7DgFBMAMORw4M0OsKh', 'wqHCpMO7', 'wo/CjsKDasO3FMOiw77CnMKH77yS', 'H2Qrw5bDt1kk', 'wpUYwrsd', 'w63CkcKtNBY=', 'Y8KONQ==', 'w6TCpcKuD8KQwrbDucKOGg==', 'w73Du8OaGMOf', 'CWFIw5nDkQ==', 'wq/CtwfDsMK7', 'woDCqTHDoMKEw5APdnfCrALDvcKHFw==', 'E8OgLMK3', 'wo7CgcKUeQ==', 'w44Vw5ogw7I=', 'w4nDo8OjB8Oq', 'Xhp8a8Ka', 'cTxR', 'w7g2w4s8TDfCvDHDog==', 'w6LCosK5FMKqwr7Du8KNDQ==', 'J8Oiw6RHdg==', 'wpjCj0/CrCY=', 'w7E3w54Gw60=', 'woPCrj/DhMKF', 'wq7CkGAsPA==', 'G8OuPw==', 'wozCjcO2JMOrLynilI4N5oqM5Yib6aG85Yy8', 'w7dyTCrCsMKjwpo=', '5Lqj5LmO6LKh', 'w6lqwo/CnQ==', 'wpXCmFY2Jmp2', 'Z8KVJichVlzDhwkrJnDCtkB7wpMCw7zDj27Cv3zCkQJGflnDu8Oaw5FIwoJUwrJEwoTCjQ==', 'w7nCosK/DcK3w6PCvcOEHsKSE8KPwpF2ecK3w4rDisK2w6J/Wk9bKFJ6RjvDuX8=', 'KiDDnyDCoRPDtnjDq0pEPMKlCsK4HcO3wrPDmsK7bjfCvcKHwpkBw5nCqw==', 'VcKww67ClnbCv2TCjcKAwpM=', 'N8OJw75YKMOzTnBBYMKgE8KgOcKDwo/Dtw==', 'WBXDtlNR', 'bMObwrjDpcKu', 'b8OSw7RcTcK3FyEBbcKxF8KMccKewonDpMO6XXvDm8OYcFMfBXDCllZ3Z8KWImhCHsKoTWMfwrEsw5dVw5zDkcOVAsKLwrDCmsOXWcKvMg==', 'w6zDgcOkL8Og', 'w4DCsDvCusOHB8OJwrkfwrZvMMKNwo4FYg==', 'wofDqHHDpcK2', 'FsORw7B9Yg==', 'HHrCjAg=', 'wrrDssKaBsO+', 'wqPCisO7wqke', 'w7vCg8KJKirCvw==', 'A8ODw7lGSg==', 'Em82w5zDn0gyC1TDpSJxwrg2FsKmw5nDvjVtPjPCsMOyIRA1w5s1w7Nhw40fw5nDoMKXZ8KdPMOT', 'wqLDoVXDhsKp', 'w5vDnsOnD8Or', 'w7UTw7slw6Q=', 'w50Gw5U6Zg==', 'wp0ZC8ONEw==', 'w4E0w4EDcQ==', 'GMOkWS7DjA==', 'wq1hw5FFfw==', 'w6fCtMKDOw8=', 'a8O5w7bDtDA=', 'w79gwr3Ch8K1Wltj', 'wq99RlwLwrhJWMKmHcKM', 'w6DCqMOIwrRmwqUF', 'BMOuLMKQw7g=', 'L8OuL8Kaw7Q=', 'w77DhcO6A8Ofw6tzwow=', 'aTl5S8KU', 'w7zCkcKCPAzCvBoG', '5Luu5LmI6L2/5ZqO5LmU56mT5pap5oy5', 'wp/CiUMoGyU0wpHDvcOPbXzChsKcw5ZuwrBBwoRDw7XDssOow44kZkfDmXgrI05bCRrDucOnbEDCjA9nAMKsIRXCv8KcQXcyw5vDgcKX', 'wojDrwvDvcKOwoHClcKZw6TDjcKVwrU+', 'woDCpMOmD8KueR9Qw7hNwp/DvnDCvsOxdTDDvXpAw4vCkcOOPjjCiBdWKsKtwoJUS8KYwpvCl8KYGytVN3XDtCNcDH9Jwr/DrVA+KnoXWmPDqxYcNx/Du3cPw7ZmPcKneSpPWMKRPhLDgcOowpLDvcK3w4rDi8KiccK8VMKMEsKGSsKpw5jDgAvDnBjCuMOVw5gvwprDsnFKw69XeCVcaMKfYF1dQsKVXcKuwp9zfMKcwqgRQsOZETQAfMO9wqMiXsOpw5M=', 'ODzChjPCvA==', 'LyLDnCbClA==', 'KsO9w7pibg==', 'SWvDtyLCqA==', 'V1ckw5wr', 'WhxCXsKW', 'w6zCjsK2KCg=', 'w7vChcKoDR8=', 'wr4zwqM5wpA=', 'QMOdOMKnGA==', 'QCDDmsK6Iw==', 'PkQNw7XDrA==', 'RiPDncKQIg==', 'wpDCmEM=', 'w4PCocK7OsKR', 'acKyFB4L', 'wrtmw5dacA==', 'wql3Y0Aawr5e', 'YXXDv0fClg==', 'wrYpPsOvNg==', 'wqlzfUgUwrA=', 'wq0Uw7V1Ww==', 'w4HDvMKJwqAb', 'NsONeznDlyzCt8OMSQ0l', 'SsK6w5jCkinCt2bCgw==', 'wrjDtsKdDMOd', 'MsODXDrDgg==', 'w6Ixw7U6RTnCuw==', 'w7vCvsOwwrhuwqgO', 'wo4Qw5Rn', 'TMOAwqPDhcKfacKPTcKewpRIwrsrwqM=', 'dSvDtMK6Gg==', 'w68jw400', 'w47DjMKlYcKCYW91', 'QmLDp2w=', '44OA5oys56SC44O06K685YWE6I6j5Y2D5Luh5Lqm6LeH5Y685LmBw7XDk8OTwpfDgHIV55us5o+j5L+655WUw70mw67CmXtO55uh5Lu35Liy562h5YmI6I6T5Yyg', 'w6M2w40lUWrDunjDucKNGUVSwrcnwqAjwrJrCcKlC8Knw47DnMODYVDDgsOmwpbCm286w7UuIVrCiwYmwpTCpw==', 'BU4Kw4nDrQ==', 'woJ5w6dKQwY=', 'W3vDhDfCtg==', 'wodlw45gVRE=', 'HsKHw7XDoDxy', 'ZsKSHDg2CQ==', 'w7rCs8KyDg==', 'w7fCucK5OMKlwrrDug==', 'wo8fw5Y=', 'w59TcgDCu8KUwqIq', 'wq4qw40=', 'NsOSw7tbYQ==', 'WzXDl0ZUBMOE', 'wogrw5TDkMO2wr7Dk8O6wq4=', 'VMOAwqLDucKN', 'R8OOwr/DocKBYg==', 'B8O0K8K+', 'w5LCucKkFsKtwrzDmMKv', 'w5bDusKYwp8cw5BM', 'EcOoNMKiw7k5', 'wpw7PsOMJw==', '44O65oyw56ea44CJ6K205YSs6Iys5Y245LmZ5Lu16LSu5Y+m5Lu5TWkQwpZKWcOb55uG5o2l5LyT55WfczHDrG3CnkbnmoLkuJrkuZnnr4vli6HojKvljLA=', 'w4zDq8KawoodwpkGBcK7cMO9wpg5wr7CtFDDl8O6woALZ0cKwo3Do8OzcMO9bcO5wq9fwp/Ck8KaHUxHP8OCw6TDhUg=', 'wrTCnk7ClhM=', 'w7XDj8KJwq4P', 'U8K+woTDo8Kn', 'wpnCpD3DsMKTw5o0YT7CsTbDrMKMTlzDrsOUw7/DnMOPX8KdLQbDrCnChcOhw49Qw7sWw7XCi8K/Xg==', 'wpIJw5h+Wm0xwqnDsFXCrMOLZMOQGsO8woh7OTsbKcKQwoJ+XiEHVEtow6vDlUDCukfDkMOFwpTDvA==', '5p6l54CU5Yep5pSy6I28', 'SsKXwoTDscKj', 'akXDqwLChg==', 'w5JxbC3CuQ==', 'QXDDrQ==', 'wrYtBsOJLA==', 'woZiw7R/Qk7DkMKyVWgaFjjCiMOMYnvDi8KbccOUwoRGw6vCkwvDiko7IcOpwpjCvcKcw6PCuMKdekATZMOPw5g=', 'agLDgxg=', 'wo3CuSvDr8Kfw4o=', 'bBjDsm9Z', 'NcOWw7BBSQ==', 'w73jg63kupvkuYTotY7lj6g=', 'XQTDuMKCOsOWwq3Cjg==', 'woHkuazosI3jg5Q=', 'w4TCpcKuD8KKwrjDv8KO', 'MHZuw57Dnw==', 'wobDhsK4DMOf', 'w44qw64ycg==', 'cwTDvB/Dph7Cvw==', 'KsKmw5PDlDNGBMKO', 'wrjCvMOCwrQ3', 'woFowpN/CHrDv+W9l+WlkOODuOS7lOS4t+i1muWMrQ==', 'w6JhworClsK/', 'w4HCjcOmRcKdwoTDjsKQAjA=', 'A2QCw4vDgFkk', 'McOdw6FmfQ==', 'TsKhwoQ=', 'w4/CoSbCsw==', '44Cs5o6A56aZ44CzVh/DisKHLTbltL3lpYLmlp4=', '5LmB5LiF6LS55Yyr', 'w7g3QVfCicO4wq3Dkw==', 'w6vorKvphojmlLjnmpDlv7foj7vlj48ZwqE6w6DChBAewrnCg8OlwpTDlknDizgFw741w5PDusOYRcKsDMOowpLCqQlzIcOcw4QPwpQ4w7ZEfChYRsOIw4fCtw==', 'AMOdwq5qPA==', 'w4LChMKfKsKM', 'woFbR0gS', 'JcOAw7JaTcK9THo=', 'bcKAITIbAhXChw==', 'w5/DiMK4YMKFYH1zS8Ol', 'wrnChMOCwpk=', 'w7Z4Qi/Cl8Kz5bSF5aWc5pSAGk06', 'eXDDr3vCqlESw48=', '5Lil5Lu+6LeB5Y65', 'wrJ8d0kD', 'wpzorqnph6/mloznmrzlv4zojbfljaAEwpDCu8O7w6PCrw==', 'w6vCh8KGIA==', 'f8KRw4LCog==', 'BTHDggjCtQ==', 'w7U2anrCrw==', 'w55awqfCtw==', 'w5/DgsKFasKS', 'UwnDjmp6', 'NHl+w5jDjw==', 'JsOXwr1TPsOQOQc=', 'w7fDr8KPw5xYC3zCt3jil75A6Iyv5byUwro=', 'wqvkuqPosqjjg7E=', 'KsKow6TDswo=', 'wqQ7wpoYwpk=', 'AMOBwrZFPsOeIAtfBA==', 'wpJcRW0w', 'RsKvBBYZ', 'UsK6w6w=', 'QcKBMA==', 'wqPCqsOxAw==', 'FsOXwo1LAw==', 'w5otY3PCjw==', 'w6fCg8KKKw==', 'wqdi5aaI6LWwA3DljYrlmrfCocOI', 'DH4gw4XDi1wz', 'NMOuN8K9w7UuMsK4AA==', 'wqnCj8KPc8OqAcORw6o=', 'w6MtR07DqMOtwq/DnQLCkQ==', 'NcOdw7RafcKjXjpXZcKv', 'w67Ch8KTHSbCvQ4M', 'VzHDgWBw', 'VsOsw43DohXDvQw+ARbCg8Ky', 'w6PCs8KoGMKtwq/Dt8KpFcKCScKOwps=', 'cR7DlcKnGA==', 'PsORLcKcw74=', 'w6jDmcKCwoA/', 'wqHDgsKbGcOi', 'jsjiamiV.comyyq.vI6LWWRnZwbF=='];
(function (_0x103ec1, _0x2d90c9, _0x425528) {
    var _0x360afd = function (_0x309109, _0x4b1995, _0x59eb17, _0x33478f, _0x529532) {
        _0x4b1995 = _0x4b1995 >> 0x8, _0x529532 = 'po';
        var _0x302219 = 'shift', _0x39f55d = 'push';
        if (_0x4b1995 < _0x309109) {
            while (--_0x309109) {
                _0x33478f = _0x103ec1[_0x302219]();
                if (_0x4b1995 === _0x309109) {
                    _0x4b1995 = _0x33478f;
                    _0x59eb17 = _0x103ec1[_0x529532 + 'p']();
                } else if (_0x4b1995 && _0x59eb17['replace'](/[VyyqILWWRnZwbF=]/g, '') === _0x4b1995) {
                    _0x103ec1[_0x39f55d](_0x33478f);
                }
            }
            _0x103ec1[_0x39f55d](_0x103ec1[_0x302219]());
        }
        return 0x886ea;
    };
    return _0x360afd(++_0x2d90c9, _0x425528) >> _0x2d90c9 ^ _0x425528;
}(_0x2275, 0x18c, 0x18c00));
var _0x5853 = function (_0x294f72, _0x5a20ed) {
    _0x294f72 = ~~'0x'['concat'](_0x294f72);
    var _0x127d1e = _0x2275[_0x294f72];
    if (_0x5853['iHHQSZ'] === undefined) {
        (function () {
            var _0x13e251 = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x4eb9cf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x13e251['atob'] || (_0x13e251['atob'] = function (_0x15863f) {
                var _0x17c850 = String(_0x15863f)['replace'](/=+$/, '');
                for (var _0x34524c = 0x0, _0x1d6adf, _0x3c11de, _0x13f404 = 0x0, _0x58b1c8 = ''; _0x3c11de = _0x17c850['charAt'](_0x13f404++); ~_0x3c11de && (_0x1d6adf = _0x34524c % 0x4 ? _0x1d6adf * 0x40 + _0x3c11de : _0x3c11de, _0x34524c++ % 0x4) ? _0x58b1c8 += String['fromCharCode'](0xff & _0x1d6adf >> (-0x2 * _0x34524c & 0x6)) : 0x0) {
                    _0x3c11de = _0x4eb9cf['indexOf'](_0x3c11de);
                }
                return _0x58b1c8;
            });
        }());
        var _0x141ed0 = function (_0x54b13d, _0x5a20ed) {
            var _0x1f2436 = [], _0x1abed2 = 0x0, _0x3e72b5, _0x11c216 = '', _0xc241de = '';
            _0x54b13d = atob(_0x54b13d);
            for (var _0x4d2c62 = 0x0, _0x37227d = _0x54b13d['length']; _0x4d2c62 < _0x37227d; _0x4d2c62++) {
                _0xc241de += '%' + ('00' + _0x54b13d['charCodeAt'](_0x4d2c62)['toString'](0x10))['slice'](-0x2);
            }
            _0x54b13d = decodeURIComponent(_0xc241de);
            for (var _0x397f02 = 0x0; _0x397f02 < 0x100; _0x397f02++) {
                _0x1f2436[_0x397f02] = _0x397f02;
            }
            for (_0x397f02 = 0x0; _0x397f02 < 0x100; _0x397f02++) {
                _0x1abed2 = (_0x1abed2 + _0x1f2436[_0x397f02] + _0x5a20ed['charCodeAt'](_0x397f02 % _0x5a20ed['length'])) % 0x100;
                _0x3e72b5 = _0x1f2436[_0x397f02];
                _0x1f2436[_0x397f02] = _0x1f2436[_0x1abed2];
                _0x1f2436[_0x1abed2] = _0x3e72b5;
            }
            _0x397f02 = 0x0;
            _0x1abed2 = 0x0;
            for (var _0x5767d1 = 0x0; _0x5767d1 < _0x54b13d['length']; _0x5767d1++) {
                _0x397f02 = (_0x397f02 + 0x1) % 0x100;
                _0x1abed2 = (_0x1abed2 + _0x1f2436[_0x397f02]) % 0x100;
                _0x3e72b5 = _0x1f2436[_0x397f02];
                _0x1f2436[_0x397f02] = _0x1f2436[_0x1abed2];
                _0x1f2436[_0x1abed2] = _0x3e72b5;
                _0x11c216 += String['fromCharCode'](_0x54b13d['charCodeAt'](_0x5767d1) ^ _0x1f2436[(_0x1f2436[_0x397f02] + _0x1f2436[_0x1abed2]) % 0x100]);
            }
            return _0x11c216;
        };
        _0x5853['ReFvYT'] = _0x141ed0;
        _0x5853['DEcnqw'] = {};
        _0x5853['iHHQSZ'] = !![];
    }
    var _0x36aa64 = _0x5853['DEcnqw'][_0x294f72];
    if (_0x36aa64 === undefined) {
        if (_0x5853['BgpFIG'] === undefined) {
            _0x5853['BgpFIG'] = !![];
        }
        _0x127d1e = _0x5853['ReFvYT'](_0x127d1e, _0x5a20ed);
        _0x5853['DEcnqw'][_0x294f72] = _0x127d1e;
    } else {
        _0x127d1e = _0x36aa64;
    }
    return _0x127d1e;
};
const au = $[_0x5853('0', '8CR[')]() ? process[_0x5853('1', 'aaXB')] || '' : '';
if ($[_0x5853('2', 'xBOf')]()) {
    Object[_0x5853('3', 'QmNE')](jdCookieNode)[_0x5853('4', 'QmNE')](_0x2cf526 => {
        cookiesArr['push'](jdCookieNode[_0x2cf526]);
    });
    if (process[_0x5853('5', '18i!')][_0x5853('6', 'R@!i')] && process[_0x5853('7', 'aYw#')]['JD_DEBUG'] === _0x5853('8', 'hOfm')) console['log'] = () => {
    };
} else {
    let cookiesData = $[_0x5853('9', '3aH5')](_0x5853('a', 'aYw#')) || '[]';
    cookiesData = JSON[_0x5853('b', 'ywpN')](cookiesData);
    cookiesArr = cookiesData['map'](_0x563246 => _0x563246[_0x5853('c', 'ywpN')]);
    cookiesArr['reverse']();
    cookiesArr[_0x5853('d', 'u6y]')](...[$['getdata']('CookieJD2'), $['getdata'](_0x5853('e', 'QmNE'))]);
    cookiesArr[_0x5853('f', 'n@*7')]();
    cookiesArr = cookiesArr[_0x5853('10', 'u6y]')](_0x357570 => !!_0x357570);
}
!(async () => {
    var _0x12c29c = {
        'DVLmg': function (_0x3d400f, _0x56dba2) {
            return _0x3d400f === _0x56dba2;
        },
        'RuLNa': '发起成功',
        'LsAOH': function (_0x57ca38) {
            return _0x57ca38();
        },
        'iEgzC': function (_0x1fa2fa, _0x315ed6) {
            return _0x1fa2fa === _0x315ed6;
        },
        'GfAiG': _0x5853('11', '3ovi'),
        'vBCca': _0x5853('12', 'pr@U'),
        'aBuRl': _0x5853('13', 'n@*7'),
        'PHQMl': function (_0x263e06, _0x140a70) {
            return _0x263e06 === _0x140a70;
        },
        'eegiM': _0x5853('14', 'YgEB'),
        'JFovN': _0x5853('15', 'n@*7'),
        'xbyVx': function (_0x1e3647, _0x2d0413) {
            return _0x1e3647(_0x2d0413);
        },
        'EhWgP': function (_0x45b547, _0x41f737) {
            return _0x45b547 + _0x41f737;
        },
        'oYmHO': function (_0x3f6a79) {
            return _0x3f6a79();
        },
        'anvNy': 'wFTXj',
        'syvKL': function (_0x487d8e, _0x387637) {
            return _0x487d8e === _0x387637;
        },
        'SRTWH': _0x5853('16', 'suSI'),
        'GeiXg': function (_0x236f2f, _0x599e78, _0x56613f) {
            return _0x236f2f(_0x599e78, _0x56613f);
        },
        'chHFh': _0x5853('17', '6*mD'),
        'soSnY': function (_0x24db1a, _0x5a751c) {
            return _0x24db1a(_0x5a751c);
        },
        'WZUnR': _0x5853('18', '18i!'),
        'arYDj': function (_0x44afc1, _0x4034db) {
            return _0x44afc1 > _0x4034db;
        },
        'ngTLw': function (_0x2666df, _0x20a956) {
            return _0x2666df !== _0x20a956;
        },
        'UBUdM': 'FkoQP',
        'EBYdg': 'PKLHZ',
        'iTUmI': function (_0x37d7ce, _0x1423c8) {
            return _0x37d7ce !== _0x1423c8;
        },
        'INVAK': 'kqLPX',
        'esUjs': _0x5853('19', 'iXc(')
    };
    if (!cookiesArr[0x0]) {
        if (_0x12c29c[_0x5853('1a', 'suSI')](_0x5853('1b', 'slhw'), _0x12c29c[_0x5853('1c', 'R@!i')])) {
            $[_0x5853('1d', 'jOae')]($['name'], _0x12c29c['vBCca'], _0x12c29c[_0x5853('1e', '3ovi')], {'open-url': _0x5853('1f', '8CR[')});
            return;
        } else {
            if (_0x12c29c['DVLmg'](x['received'], 0x0)) {
                list[_0x5853('20', '%9]O')](x);
            }
        }
    }
    for (let _0x44eab8 = 0x0; _0x44eab8 < cookiesArr[_0x5853('21', '6*mD')]; _0x44eab8++) {
        if (cookiesArr[_0x44eab8]) {
            if (_0x12c29c[_0x5853('22', '3aH5')](_0x12c29c[_0x5853('23', 'hOfm')], _0x12c29c['JFovN'])) {
                message += _0x5853('24', 'S%tm') + $['index'] + '】' + ($[_0x5853('25', ')Q@K')] || $['UserName']) + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20└\x20获得\x20' + $['bean'] + _0x5853('26', '@0nQ');
            } else {
                cookie = cookiesArr[_0x44eab8];
                originCookie = cookiesArr[_0x44eab8];
                newCookie = '';
                $[_0x5853('27', 'QmNE')] = _0x12c29c['xbyVx'](decodeURIComponent, cookie[_0x5853('28', 'N4zy')](/pt_pin=(.+?);/) && cookie[_0x5853('29', '6]Jc')](/pt_pin=(.+?);/)[0x1]);
                $['index'] = _0x12c29c[_0x5853('2a', '^XAk')](_0x44eab8, 0x1);
                $[_0x5853('2b', '%9]O')] = !![];
                $[_0x5853('2c', 'aaXB')] = '';
                await _0x12c29c[_0x5853('2d', 'eneF')](checkCookie);
                console['log'](_0x5853('2e', '^XAk') + $[_0x5853('2f', 'aaCy')] + '】' + ($['nickName'] || $['UserName']) + _0x5853('30', '6]Jc'));
                if (!$[_0x5853('31', 'j%MH')]) {
                    if (_0x12c29c[_0x5853('32', 'hOfm')] === 'OsSFp') {
                        $['noChange'] = !![];
                    } else {
                        $[_0x5853('33', 'suSI')]($[_0x5853('34', '@0nQ')], _0x5853('35', '3aH5'), _0x5853('36', 'gt@$') + $['index'] + '\x20' + ($[_0x5853('37', '*NiB')] || $['UserName']) + _0x5853('38', '6*mD'), {'open-url': _0x12c29c['aBuRl']});
                        if ($['isNode']()) {
                            if (_0x12c29c[_0x5853('39', 'X1Fw')](_0x12c29c[_0x5853('3a', 'QmNE')], _0x5853('3b', 'yiiT'))) {
                                $['nickName'] = data['data'][_0x5853('3c', 'hOfm')][_0x5853('3d', 'xBOf')]['nickname'];
                            } else {
                                await notify[_0x5853('3e', 'iXc(')]($[_0x5853('3f', 'eneF')] + _0x5853('40', 'R@!i') + $[_0x5853('41', 'jOae')], _0x5853('42', '6vu1') + $[_0x5853('43', 'yiiT')] + '\x20' + $['UserName'] + _0x5853('44', '*NiB'));
                            }
                        }
                        continue;
                    }
                }
                $[_0x5853('45', '6vu1')] = 0x0;
                $[_0x5853('46', 'B!KF')] = _0x12c29c[_0x5853('47', 'MB5#')](getUUID, _0x12c29c[_0x5853('48', '*NiB')], 0x1);
                $[_0x5853('49', 'aaCy')] = _0x12c29c[_0x5853('4a', 'iXc(')](getUUID, _0x12c29c['WZUnR']);
                await _0x12c29c[_0x5853('4b', '3aH5')](joy_pk);
                if (_0x12c29c['arYDj']($[_0x5853('45', '6vu1')], 0x0)) {
                    message += '\x0a【京东账号' + $[_0x5853('4c', 'N4zy')] + '】' + ($['nickName'] || $[_0x5853('4d', 'X1Fw')]) + _0x5853('4e', 'eneF') + $['bean'] + _0x5853('4f', 'aaCy');
                }
            }
        }
    }
    if (_0x12c29c[_0x5853('50', 'aaXB')](message, '')) {
        if (_0x12c29c[_0x5853('51', 'DAz#')] !== _0x12c29c['EBYdg']) {
            if ($['isNode']()) {
                await notify[_0x5853('52', 'X1Fw')]($['name'], message, '', '\x0a');
            } else {
                if (_0x12c29c['iTUmI'](_0x12c29c[_0x5853('53', 'yiiT')], _0x12c29c[_0x5853('54', 'xBOf')])) {
                    $[_0x5853('55', 'B!KF')](_0x12c29c['RuLNa']);
                } else {
                    $[_0x5853('56', 'iig#')]($[_0x5853('57', '^$%4')], _0x12c29c[_0x5853('58', 'X1Fw')], message);
                }
            }
        } else {
            _0x12c29c[_0x5853('59', '*NiB')](resolve);
        }
    }
})()['catch'](_0x5a41d0 => {
    $['log']('', '❌\x20' + $[_0x5853('5a', '6vu1')] + _0x5853('5b', '^XAk') + _0x5a41d0 + '!', '');
})[_0x5853('5c', 'j%MH')](() => {
    $['done']();
});

async function joy_pk() {
    var _0x4a70c5 = {
        'KGogv': function (_0x3e4877, _0xe35dd) {
            return _0x3e4877 > _0xe35dd;
        },
        'aDisu': function (_0x2f829c) {
            return _0x2f829c();
        },
        'sFUog': 'CookiesJD',
        'haZkL': _0x5853('5d', 'u6y]'),
        'JNEem': _0x5853('5e', 'pr@U'),
        'Tccpi': function (_0x5c0845, _0x582390, _0x29146a) {
            return _0x5c0845(_0x582390, _0x29146a);
        },
        'KaOMV': _0x5853('5f', '*NiB'),
        'qDQSU': function (_0xa9f345, _0x5eafa9, _0x145a50) {
            return _0xa9f345(_0x5eafa9, _0x145a50);
        },
        'VXrDL': _0x5853('60', 'hOfm'),
        'lFoZF': function (_0x3ca4b9, _0x25bc0d, _0x430487, _0x8d942e) {
            return _0x3ca4b9(_0x25bc0d, _0x430487, _0x8d942e);
        },
        'KZZXc': _0x5853('61', '6vu1'),
        'TpfPF': '去上传pk码',
        'VGODO': function (_0x547521, _0x4fc2bd) {
            return _0x547521 !== _0x4fc2bd;
        },
        'znXlc': _0x5853('62', '3aH5'),
        'jDVzv': function (_0x3bbe2d, _0x55e4a9) {
            return _0x3bbe2d === _0x55e4a9;
        },
        'TflNA': 'NqxQu',
        'VacTN': '发起挑战',
        'ryhBk': _0x5853('63', '0GPR'),
        'tjGTA': function (_0x264677, _0x42a94c, _0x447977, _0x57c05c, _0x13b21e) {
            return _0x264677(_0x42a94c, _0x447977, _0x57c05c, _0x13b21e);
        },
        'jXfeM': _0x5853('64', 'QmNE'),
        'UZqOJ': function (_0x20b75e, _0x2062b7) {
            return _0x20b75e > _0x2062b7;
        },
        'UJbXR': function (_0x2f8d6f, _0x53278d) {
            return _0x2f8d6f !== _0x53278d;
        },
        'JYnoG': _0x5853('65', ')Q@K'),
        'xPvWM': function (_0x34c24c, _0x9e5aab) {
            return _0x34c24c < _0x9e5aab;
        },
        'EPKJp': function (_0x5e5c45, _0x1b2d51) {
            return _0x5e5c45 !== _0x1b2d51;
        },
        'ezVIO': function (_0x4a2517, _0x44dc03) {
            return _0x4a2517 === _0x44dc03;
        },
        'WUPRm': _0x5853('66', 'u6y]'),
        'DGJIg': function (_0x2f72ab, _0x22a54e) {
            return _0x2f72ab === _0x22a54e;
        },
        'Iohia': _0x5853('67', 'n@*7'),
        'cIvcu': function (_0x59ac39, _0x408310) {
            return _0x59ac39 !== _0x408310;
        },
        'pnkrc': _0x5853('68', '6]Jc'),
        'fVogn': function (_0x5d6451, _0x55ddc8, _0x25c53f, _0x37422c, _0xf346fe) {
            return _0x5d6451(_0x55ddc8, _0x25c53f, _0x37422c, _0xf346fe);
        },
        'RYYap': _0x5853('69', 'n@*7')
    };
    $[_0x5853('6a', 'iig#')] = null;
    $[_0x5853('6b', 'DAz#')] = null;
    $['userScore'] = null;
    $[_0x5853('6c', 'QmNE')] = ![];
    await _0x4a70c5[_0x5853('6d', 'yiiT')](joyFunc, _0x4a70c5[_0x5853('6e', 'suSI')], '&client=m&url=pengyougou.m.jd.com');
    await _0x4a70c5[_0x5853('6f', 'j%MH')](joyFunc, _0x4a70c5['VXrDL'], '');
    if ($[_0x5853('70', '6]Jc')] && $['userPin']) {
        await _0x4a70c5[_0x5853('71', 'suSI')](task, 0x0, _0x4a70c5[_0x5853('72', 'hOfm')], $['userPin']);
        if ($['userScore']) {
            await getCodeList($[_0x5853('73', 'gt@$')]);
            await getAuthorCodeList($['userScore']);
            $[_0x5853('74', '^XAk')](_0x4a70c5[_0x5853('75', 'eneF')]);
            await updateCode({'code': $['userPin'], 'score': $[_0x5853('76', 'OrsW')]});
            if ($[_0x5853('77', 'WZ94')][_0x5853('78', 'OrsW')] > 0x0) {
                if (_0x4a70c5[_0x5853('79', '6]Jc')](_0x4a70c5['znXlc'], _0x5853('7a', 'gt@$'))) {
                    for (const _0x4d3d69 of $[_0x5853('77', 'WZ94')]) {
                        if ($['noChange']) {
                            if (_0x4a70c5[_0x5853('7b', '18i!')](_0x4a70c5['TflNA'], _0x4a70c5[_0x5853('7c', 'nYD%')])) {
                                continue;
                            } else {
                                if (data) {
                                    data = JSON[_0x5853('7d', 'PXOB')](data);
                                    if (_0x4a70c5[_0x5853('7e', 'slhw')](data['data'][_0x5853('7f', 'QmNE')], 0x0)) {
                                        $['codeList'] = data[_0x5853('80', 'j%MH')];
                                    } else {
                                        $['codeList'] = [];
                                    }
                                }
                            }
                        }
                        $[_0x5853('81', '$R*i')](_0x4a70c5[_0x5853('82', 'aaXB')]);
                        await task(0x0, _0x4a70c5[_0x5853('83', 'pr@U')], $['userPin'], _0x5853('84', 'aYw#') + _0x4d3d69[_0x5853('85', 'B!KF')] + _0x5853('86', '7)0l'));
                        await $[_0x5853('87', 'MB5#')](0x5dc);
                        await _0x4a70c5[_0x5853('88', 'aaXB')](task, 0x0, _0x4a70c5[_0x5853('89', 'X1Fw')], $['userPin'], _0x5853('8a', 'xBOf') + _0x4d3d69[_0x5853('8b', '^XAk')]);
                    }
                } else {
                    console[_0x5853('8c', '*NiB')](error);
                }
            }
            if (_0x4a70c5[_0x5853('8d', 'pr@U')]($['codeList'][_0x5853('8e', '6]Jc')], 0x0)) {
                if (_0x4a70c5[_0x5853('8f', 'xBOf')](_0x5853('90', 'j%MH'), _0x4a70c5[_0x5853('91', '8CR[')])) {
                    uuid = v['toString'](0x24);
                } else {
                    for (let _0x375d0a = 0x0; _0x4a70c5[_0x5853('92', 'suSI')](_0x375d0a, $[_0x5853('93', '3aH5')][_0x5853('94', 'ywpN')]); _0x375d0a++) {
                        if (_0x4a70c5[_0x5853('95', 'n@*7')]($[_0x5853('96', 'S%tm')][_0x375d0a][_0x5853('97', 'OrsW')], $[_0x5853('98', '0GPR')])) {
                            if (_0x4a70c5[_0x5853('99', 'eneF')](_0x4a70c5['WUPRm'], _0x4a70c5[_0x5853('9a', '^$%4')])) {
                                if ($[_0x5853('6c', 'QmNE')]) {
                                    if (_0x4a70c5['DGJIg']('laeeg', _0x4a70c5['Iohia'])) {
                                        _0x4a70c5[_0x5853('9b', 'WZ94')](resolve);
                                    } else {
                                        continue;
                                    }
                                }
                                $[_0x5853('9c', 'r86s')](_0x4a70c5[_0x5853('9d', 'eneF')]);
                                await _0x4a70c5[_0x5853('9e', 'xBOf')](task, 0x0, _0x4a70c5[_0x5853('9f', 'N4zy')], $[_0x5853('a0', 'PXOB')], _0x5853('a1', 'nYD%') + $['codeList'][_0x375d0a][_0x5853('a2', 'n@*7')] + '&relation=1');
                                await $[_0x5853('a3', '6*mD')](0x5dc);
                                await _0x4a70c5['tjGTA'](task, 0x0, _0x4a70c5[_0x5853('a4', 'DAz#')], $['userPin'], _0x5853('a5', '6*mD') + $[_0x5853('a6', '7)0l')][_0x375d0a][_0x5853('a7', 'iXc(')]);
                            } else {
                                let _0xd89426 = $[_0x5853('a8', 'fh3Z')](_0x4a70c5[_0x5853('a9', 'aYw#')]) || '[]';
                                _0xd89426 = JSON['parse'](_0xd89426);
                                cookiesArr = _0xd89426['map'](_0x4ace39 => _0x4ace39['cookie']);
                                cookiesArr['reverse']();
                                cookiesArr[_0x5853('aa', '6*mD')](...[$[_0x5853('ab', '*NiB')](_0x4a70c5['haZkL']), $['getdata'](_0x4a70c5[_0x5853('ac', 'DAz#')])]);
                                cookiesArr[_0x5853('ad', ')Q@K')]();
                                cookiesArr = cookiesArr['filter'](_0xd8ec24 => !!_0xd8ec24);
                            }
                        }
                    }
                }
            } else {
                if (_0x4a70c5[_0x5853('ae', 'xBOf')](_0x4a70c5[_0x5853('af', '6vu1')], _0x4a70c5[_0x5853('b0', 'hOfm')])) {
                    $[_0x5853('b1', '3ovi')](err);
                } else {
                    $[_0x5853('b2', '6*mD')](_0x5853('b3', 'MB5#'));
                }
            }
            await _0x4a70c5[_0x5853('b4', '6vu1')](task, 0x0, _0x4a70c5[_0x5853('b5', '^XAk')], $['userPin'], '');
        }
    }
}

function task(_0x4983e1, _0x5a58aa, _0x14c51c, _0x4fc86e) {
    var _0x34681d = {
        'CvXnN': function (_0x34636e, _0x1603a5) {
            return _0x34636e === _0x1603a5;
        },
        'BYjtQ': _0x5853('b6', '^$%4'),
        'UvNhB': 'AsCsJ',
        'Vyhjt': 'launchBattle',
        'vfeBC': '今日次数已耗尽',
        'GxIaU': function (_0x61618f, _0x178c84) {
            return _0x61618f !== _0x178c84;
        },
        'DSQeR': _0x5853('b7', 'S%tm'),
        'YCDtr': function (_0x37686c, _0x154f98) {
            return _0x37686c > _0x154f98;
        },
        'VUTIK': _0x5853('b8', 'N4zy'),
        'dbGVn': _0x5853('b9', 'QmNE'),
        'Lbecz': function (_0x43ca9b, _0xb1c257) {
            return _0x43ca9b < _0xb1c257;
        },
        'ixonk': 'sBbcY',
        'bjnan': 'fceNe'
    };
    return new Promise(_0x52767c => {
        var _0x55390a = {
            'SaqwY': function (_0x303980, _0x4b745d) {
                return _0x34681d[_0x5853('ba', 'MB5#')](_0x303980, _0x4b745d);
            },
            'RBLEq': _0x5853('bb', 'PXOB'),
            'wAqmS': function (_0x20ae70, _0x11dd5f) {
                return _0x34681d[_0x5853('bc', 'j%MH')](_0x20ae70, _0x11dd5f);
            },
            'JVpUs': _0x34681d['BYjtQ'],
            'ItRqD': _0x34681d[_0x5853('bd', '3ovi')],
            'Ctcfj': _0x5853('be', 'iig#'),
            'KxBQD': _0x34681d[_0x5853('bf', 'B!KF')],
            'iDYJa': _0x5853('c0', 'B!KF'),
            'Htcim': _0x34681d[_0x5853('c1', 'u6y]')],
            'BamMS': function (_0x1e3bdd, _0x1cd860) {
                return _0x34681d[_0x5853('c2', 'b#ja')](_0x1e3bdd, _0x1cd860);
            },
            'xVokl': _0x5853('c3', 'aaCy'),
            'JMJZA': _0x34681d['DSQeR'],
            'TmlKW': function (_0x355416, _0x3f731c) {
                return _0x34681d[_0x5853('c4', 'N4zy')](_0x355416, _0x3f731c);
            },
            'uYsth': _0x34681d[_0x5853('c5', 'X1Fw')],
            'fxzuQ': _0x34681d['dbGVn'],
            'qXiYe': function (_0x1a21cd, _0x405755) {
                return _0x34681d[_0x5853('c6', '3aH5')](_0x1a21cd, _0x405755);
            },
            'LhwCm': _0x34681d[_0x5853('c7', 'pr@U')],
            'ElfvO': _0x34681d[_0x5853('c8', '*NiB')],
            'IHVip': function (_0x1cfb36, _0x1ae88c, _0x146f66, _0x1531cf, _0x2ee2e9) {
                return _0x1cfb36(_0x1ae88c, _0x146f66, _0x1531cf, _0x2ee2e9);
            },
            'FUDfj': 'sendBoxReward',
            'jjkvR': function (_0x2d4f8d, _0x44ead0) {
                return _0x2d4f8d === _0x44ead0;
            },
            'TUefZ': 'JING_BEAN',
            'SuIGv': function (_0x24009c) {
                return _0x24009c();
            }
        };
        $[_0x5853('c9', 'hOfm')](taskUrl(_0x4983e1, _0x5a58aa, _0x14c51c, _0x4fc86e), async (_0x20b241, _0x35051f, _0x2a6175) => {
            if (_0x55390a[_0x5853('ca', 'jOae')] !== _0x5853('cb', 'r86s')) {
                $['done']();
            } else {
                try {
                    if (_0x20b241) {
                        $[_0x5853('cc', '6]Jc')](_0x20b241);
                    } else {
                        if (_0x55390a['wAqmS']('LqqlR', _0x55390a[_0x5853('cd', 'DAz#')])) {
                            if (_0x2a6175) {
                                _0x2a6175 = JSON[_0x5853('ce', 'DAz#')](_0x2a6175);
                                if (_0x2a6175[_0x5853('cf', 'n@*7')]) {
                                    switch (_0x5a58aa) {
                                        case _0x5853('d0', 'MB5#'):
                                            $['userScore'] = _0x2a6175[_0x5853('d1', 'eneF')];
                                            break;
                                        case _0x55390a[_0x5853('d2', '3ovi')]:
                                            if (_0x55390a[_0x5853('d3', 'pr@U')](_0x2a6175[_0x5853('d4', 'yiiT')][_0x5853('d5', 'WZ94')], 0x2)) {
                                                $[_0x5853('d6', 'n@*7')](_0x55390a[_0x5853('d7', '%9]O')]);
                                            }
                                            if (_0x2a6175[_0x5853('d8', 'MB5#')][_0x5853('d9', '3ovi')] === 0x3 && JSON[_0x5853('da', 'b#ja')](_0x2a6175)[_0x5853('db', 'xBOf')](_0x55390a[_0x5853('dc', 'iig#')])) {
                                                if (_0x55390a['BamMS']('FlHdd', _0x55390a[_0x5853('dd', 'aYw#')])) {
                                                    $['noChange'] = !![];
                                                } else {
                                                    $[_0x5853('9c', 'r86s')](error);
                                                }
                                            }
                                            break;
                                        case _0x55390a[_0x5853('de', '$R*i')]:
                                            if (_0x55390a[_0x5853('df', '0GPR')](_0x2a6175[_0x5853('e0', '*NiB')][_0x5853('e1', 'jOae')], 0x1)) {
                                                if (_0x55390a[_0x5853('e2', 'j%MH')](_0x2a6175[_0x5853('e3', '$R*i')][_0x5853('e4', 'QmNE')]['fromScore'], _0x2a6175[_0x5853('e5', 'N4zy')][_0x5853('e6', '*NiB')][_0x5853('e7', '*NiB')])) {
                                                    $['log']('\x20\x20\x20\x20\x20\x20\x20└\x20挑战赢了，当前共获得胜利' + _0x2a6175[_0x5853('e8', '3aH5')]['pkResult']['fromWinNum'] + '场');
                                                } else {
                                                    $[_0x5853('e9', 'nYD%')](_0x5853('ea', 'WZ94') + _0x2a6175[_0x5853('e8', '3aH5')][_0x5853('eb', '18i!')][_0x5853('ec', 'b#ja')] + '场');
                                                }
                                            } else {
                                                $[_0x5853('d6', 'n@*7')](_0x2a6175['data']['msg']);
                                            }
                                            break;
                                        case _0x55390a['uYsth']:
                                            if (_0x2a6175['data'][_0x5853('ed', 'iXc(')]) {
                                                list = [];
                                                _0x2a6175[_0x5853('ee', 'b#ja')]['awards']['filter'](_0x47302f => {
                                                    if (_0x55390a['SaqwY'](_0x47302f['received'], 0x0)) {
                                                        list['push'](_0x47302f);
                                                    }
                                                });
                                                if (_0x55390a[_0x5853('ef', 'YgEB')](list[_0x5853('f0', 'iig#')], 0x0)) {
                                                    $['log'](_0x55390a[_0x5853('f1', '%9]O')]);
                                                    for (const _0x2586aa of list) {
                                                        if (_0x55390a[_0x5853('f2', 'n@*7')](_0x2586aa['wins'], _0x2a6175[_0x5853('f3', '0GPR')][_0x5853('f4', '6]Jc')]) || _0x2586aa[_0x5853('f5', ')Q@K')] === _0x2a6175[_0x5853('f3', '0GPR')]['totalWins']) {
                                                            if (_0x55390a['wAqmS'](_0x55390a[_0x5853('f6', 'slhw')], _0x55390a['ElfvO'])) {
                                                                console[_0x5853('cc', '6]Jc')](_0x20b241);
                                                            } else {
                                                                await _0x55390a[_0x5853('f7', 'j%MH')](task, 0x0, _0x5853('f8', '8CR['), $[_0x5853('f9', 'u6y]')], _0x5853('fa', '^XAk') + _0x2586aa['id']);
                                                                await $['wait'](0x5dc);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            break;
                                        case _0x55390a['FUDfj']:
                                            if (_0x55390a[_0x5853('fb', 'PXOB')](_0x2a6175['datas']['length'], 0x0)) {
                                                for (const _0x214214 of _0x2a6175[_0x5853('fc', '%9]O')]) {
                                                    if (_0x55390a[_0x5853('fd', '^$%4')](_0x5853('fe', 'r86s'), _0x5853('ff', 'b#ja'))) {
                                                        _0x2a6175 = JSON['parse'](_0x2a6175);
                                                        if (_0x55390a[_0x5853('100', '$R*i')](_0x2a6175[_0x5853('101', 'xBOf')], _0x55390a['RBLEq'])) {
                                                            $[_0x5853('102', 'DAz#')] = ![];
                                                            return;
                                                        }
                                                        if (_0x55390a['wAqmS'](_0x2a6175[_0x5853('103', 'b#ja')], '0') && _0x2a6175[_0x5853('104', 'fh3Z')][_0x5853('105', 'jOae')](_0x55390a[_0x5853('106', 'yiiT')])) {
                                                            $[_0x5853('107', 'aYw#')] = _0x2a6175['data'][_0x5853('108', '8CR[')][_0x5853('109', 'WZ94')][_0x5853('10a', 'slhw')];
                                                        }
                                                    } else {
                                                        if (_0x55390a[_0x5853('10b', 'eneF')](_0x214214[_0x5853('10c', '^$%4')], _0x55390a[_0x5853('10d', '8CR[')])) {
                                                            $['log'](_0x5853('10e', 'aaXB') + _0x214214[_0x5853('10f', 'aYw#')] + '个京豆');
                                                            $[_0x5853('110', 'aYw#')] += _0x214214[_0x5853('111', 'jOae')];
                                                        }
                                                    }
                                                }
                                            }
                                            break;
                                        default:
                                            console[_0x5853('112', 'iXc(')](JSON[_0x5853('113', 'jOae')](_0x2a6175));
                                            break;
                                    }
                                } else {
                                    console[_0x5853('114', 'QmNE')](JSON[_0x5853('115', 'aaXB')](_0x2a6175));
                                }
                            } else {
                                $['log'](_0x5853('116', '7)0l'));
                            }
                        } else {
                            console[_0x5853('117', 'yiiT')](_0x20b241);
                        }
                    }
                } catch (_0x265561) {
                    $[_0x5853('118', 'PXOB')](_0x265561);
                } finally {
                    _0x55390a[_0x5853('119', 'gt@$')](_0x52767c);
                }
            }
        });
    });
}

function updateCode(_0x27274d) {
    var _0x20edeb = {
        'GfRFw': _0x5853('11a', 'j%MH'), 'zKvds': function (_0x192214, _0x50b155) {
            return _0x192214 !== _0x50b155;
        }, 'IVAXg': 'btyHs', 'WZWFA': function (_0x55e5b5) {
            return _0x55e5b5();
        }, 'YvOKQ': _0x5853('11b', 'xBOf'), 'poFPj': _0x5853('11c', 'u6y]')
    };
    if (_0x20edeb[_0x5853('11d', 'N4zy')](au, '')) {
        url = _0x20edeb['poFPj'];
    } else {
        url = 'https://api.r2ray.com/jd.pk/update';
    }
    let _0x4a9c1b = {
        'url': url,
        'headers': {'Content-Type': _0x5853('11e', 'X1Fw')},
        'body': JSON['stringify'](_0x27274d)
    };
    return new Promise(_0xb51b56 => {
        var _0x54f536 = {
            'qiRIX': _0x20edeb[_0x5853('11f', '^XAk')], 'gsUMj': function (_0x44ffbc, _0x196e17) {
                return _0x20edeb[_0x5853('120', '%9]O')](_0x44ffbc, _0x196e17);
            }, 'tvZOO': _0x20edeb[_0x5853('121', 'slhw')], 'uLaGP': function (_0x57c759) {
                return _0x20edeb['WZWFA'](_0x57c759);
            }
        };
        if (_0x5853('122', 'QmNE') !== _0x20edeb[_0x5853('123', 'yiiT')]) {
            $['codeList'] = [];
        } else {
            $[_0x5853('124', 'nYD%')](_0x4a9c1b, (_0x152ceb, _0x5eb84b, _0x4d94f4) => {
                var _0x3ff27a = {'rUFRQ': _0x54f536['qiRIX']};
                if (_0x54f536[_0x5853('125', 'eneF')]('VLSoE', _0x54f536['tvZOO'])) {
                    try {
                        if (_0x152ceb) {
                            console['log'](_0x152ceb);
                        } else {
                            _0x4d94f4 = JSON['parse'](_0x4d94f4);
                            if (_0x4d94f4 && _0x4d94f4[_0x5853('126', '6vu1')] === 0xc8) {
                                $[_0x5853('127', '18i!')](_0x5853('128', 'YgEB') + _0x4d94f4['msg']);
                            }
                        }
                    } catch (_0x3b0ad5) {
                        $[_0x5853('129', '3aH5')](_0x3b0ad5);
                    } finally {
                        _0x54f536[_0x5853('12a', 'suSI')](_0xb51b56);
                    }
                } else {
                    $[_0x5853('12b', 'xBOf')]($[_0x5853('12c', '0GPR')], _0x3ff27a['rUFRQ'], message);
                }
            });
        }
    });
}

function getCodeList(_0x4ee313) {
    var _0x27317a = {
        'inOvb': _0x5853('12d', 'aYw#'), 'VyfCF': function (_0x118660, _0x373478) {
            return _0x118660 === _0x373478;
        }, 'XYPHl': _0x5853('12e', '0GPR'), 'fNZMZ': function (_0x1d4931, _0x920de7) {
            return _0x1d4931 > _0x920de7;
        }, 'zeAdQ': function (_0x40f59e, _0x28adbe) {
            return _0x40f59e !== _0x28adbe;
        }, 'mixpa': _0x5853('12f', '3aH5'), 'ATGPq': _0x5853('130', 'r86s')
    };
    if (_0x27317a[_0x5853('131', 'aaXB')](au, '')) {
        if (_0x27317a[_0x5853('132', '18i!')](_0x27317a['mixpa'], _0x5853('133', 'fh3Z'))) {
            url = _0x27317a[_0x5853('134', '%9]O')];
        } else {
            url = _0x5853('135', 'S%tm') + _0x4ee313;
        }
    } else {
        if (_0x27317a['ATGPq'] === _0x5853('136', 'gt@$')) {
            console[_0x5853('137', 'aaCy')](err);
        } else {
            url = _0x5853('138', '6]Jc');
        }
    }
    return new Promise(_0x2cc815 => {
        var _0x1d0e6a = {
            'xfJFB': function (_0x10ea4f, _0x77dd75) {
                return _0x27317a[_0x5853('139', 'nYD%')](_0x10ea4f, _0x77dd75);
            }, 'JMZFV': 'avIfq', 'aIajp': _0x27317a[_0x5853('13a', 'aaCy')], 'XEdkS': function (_0x440b09, _0x47e50e) {
                return _0x27317a[_0x5853('13b', 'QmNE')](_0x440b09, _0x47e50e);
            }
        };
        $[_0x5853('13c', 'N4zy')]({'url': url}, (_0x5d0493, _0x6162b1, _0x4f3a31) => {
            try {
                if (_0x5d0493) {
                    console[_0x5853('13d', ')Q@K')](_0x5d0493);
                } else {
                    if (_0x4f3a31) {
                        if (_0x1d0e6a[_0x5853('13e', '6]Jc')](_0x1d0e6a[_0x5853('13f', '6vu1')], _0x1d0e6a[_0x5853('140', 'n@*7')])) {
                            console[_0x5853('141', 'fh3Z')](_0x5d0493);
                        } else {
                            _0x4f3a31 = JSON[_0x5853('142', 'pr@U')](_0x4f3a31);
                            if (_0x1d0e6a[_0x5853('143', 'pr@U')](_0x4f3a31[_0x5853('144', 'aaXB')][_0x5853('f0', 'iig#')], 0x0)) {
                                $[_0x5853('145', 'hOfm')] = _0x4f3a31['data'];
                            } else {
                                $[_0x5853('a6', '7)0l')] = [];
                            }
                        }
                    }
                }
            } catch (_0x53bf3a) {
                console[_0x5853('e9', 'nYD%')](_0x53bf3a);
            } finally {
                _0x2cc815();
            }
        });
    });
}

function getAuthorCodeList(_0x26d21a) {
    var _0x1e82ac = {
        'NobiL': function (_0x1777d6, _0x8dc610) {
            return _0x1777d6 === _0x8dc610;
        }, 'GshPS': _0x5853('146', 'b#ja'), 'wNvRy': function (_0x1ed3f1, _0x4577e5) {
            return _0x1ed3f1 !== _0x4577e5;
        }
    };
    return new Promise(_0x2e2c98 => {
        var _0x5ab4e0 = {
            'FxRrB': function (_0xb136bb, _0x491fcd) {
                return _0x1e82ac[_0x5853('147', 'slhw')](_0xb136bb, _0x491fcd);
            },
            'UmKnK': _0x1e82ac[_0x5853('148', '^$%4')],
            'VBxlu': function (_0xe5c1a0, _0x3cb78d) {
                return _0xe5c1a0 === _0x3cb78d;
            },
            'DLTdM': _0x5853('149', 'aYw#'),
            'unLqN': _0x5853('14a', 'gt@$'),
            'JPYOk': function (_0x256674, _0xd74154) {
                return _0x1e82ac['wNvRy'](_0x256674, _0xd74154);
            }
        };
        $[_0x5853('14b', 'pr@U')]({'url': _0x5853('14c', 'aYw#') + _0x26d21a}, (_0x34f8d9, _0x248263, _0x274347) => {
            var _0x4b4490 = {
                'GHsWn': function (_0x4613f, _0x3f432d) {
                    return _0x5ab4e0[_0x5853('14d', '7)0l')](_0x4613f, _0x3f432d);
                }, 'gONNX': _0x5853('14e', 'gt@$')
            };
            try {
                if (_0x34f8d9) {
                    console[_0x5853('14f', '7)0l')](_0x34f8d9);
                } else {
                    if (_0x5ab4e0[_0x5853('150', 'aaXB')] === _0x5ab4e0[_0x5853('151', '6vu1')]) {
                        for (const _0x391118 of _0x274347[_0x5853('152', 'aaXB')]) {
                            if (_0x5ab4e0['FxRrB'](_0x391118[_0x5853('153', 'iXc(')], _0x5ab4e0[_0x5853('154', 'QmNE')])) {
                                $['log']('\x20\x20\x20\x20\x20\x20\x20└\x20成功领取' + _0x391118[_0x5853('155', 'YgEB')] + _0x5853('156', ')Q@K'));
                                $[_0x5853('157', '%9]O')] += _0x391118[_0x5853('158', 'gt@$')];
                            }
                        }
                    } else {
                        if (_0x274347) {
                            _0x274347 = JSON['parse'](_0x274347);
                            if (_0x274347['data']['length'] > 0x0) {
                                $[_0x5853('159', '18i!')] = _0x274347['data'];
                            } else {
                                $['authorCodeList'] = [];
                            }
                        }
                    }
                }
            } catch (_0x59d4b1) {
                if (_0x5ab4e0['JPYOk'](_0x5853('15a', 'xBOf'), _0x5853('15b', 'R@!i'))) {
                    console[_0x5853('137', 'aaCy')](_0x59d4b1);
                } else {
                    Object['keys'](jdCookieNode)[_0x5853('15c', '18i!')](_0x55ac57 => {
                        cookiesArr[_0x5853('15d', 'YgEB')](jdCookieNode[_0x55ac57]);
                    });
                    if (process[_0x5853('15e', 'aaCy')][_0x5853('15f', 'WZ94')] && _0x4b4490['GHsWn'](process['env']['JD_DEBUG'], _0x4b4490[_0x5853('160', 'QmNE')])) console[_0x5853('161', 'slhw')] = () => {
                    };
                }
            } finally {
                _0x2e2c98();
            }
        });
    });
}

function joyFunc(_0x6776e2, _0x5275a6) {
    var _0x1813e8 = {
        'NLeFd': function (_0x2005b1, _0x473825) {
            return _0x2005b1 > _0x473825;
        },
        'AYBkN': 'WLeRT',
        'xqmJJ': _0x5853('162', 'X1Fw'),
        'NDwvR': _0x5853('163', 'R@!i'),
        'pmhsE': function (_0x4f9dc7, _0x4efe03) {
            return _0x4f9dc7 === _0x4efe03;
        },
        'DqhOU': 'zOvFU',
        'Pepah': _0x5853('164', '%9]O'),
        'WOLGe': _0x5853('165', 'xBOf'),
        'cxgrT': _0x5853('166', 'u6y]'),
        'JxxmY': function (_0x498fca, _0x378732) {
            return _0x498fca !== _0x378732;
        },
        'oxhiR': function (_0x25bf50) {
            return _0x25bf50();
        },
        'EXEZp': function (_0x554c5a, _0x5ab083) {
            return _0x554c5a + _0x5ab083;
        },
        'nXEVu': _0x5853('167', 'R@!i'),
        'ojpld': _0x5853('168', 'QmNE'),
        'eIMir': _0x5853('169', '6vu1'),
        'BEeZG': _0x5853('16a', '3aH5')
    };
    let _0x6103e8 = {
        'url': _0x5853('16b', 'jOae') + _0x6776e2 + _0x5853('16c', '%9]O') + _0x5275a6,
        'headers': {
            'Host': _0x5853('16d', '^$%4'),
            'Origin': _0x5853('16e', ')Q@K'),
            'Cookie': _0x1813e8['EXEZp'](cookie, _0x1813e8[_0x5853('16f', 'iXc(')]),
            'Connection': _0x5853('170', '18i!'),
            'Accept': _0x1813e8[_0x5853('171', '*NiB')],
            'User-Agent': _0x5853('172', '3ovi') + $[_0x5853('173', '18i!')] + _0x5853('174', 'YgEB') + $[_0x5853('175', 'nYD%')] + _0x5853('176', '3aH5'),
            'Accept-Language': _0x1813e8[_0x5853('177', 'iig#')],
            'Referer': _0x5853('178', ')Q@K'),
            'Accept-Encoding': _0x1813e8['BEeZG']
        }
    };
    return new Promise(_0x54f6eb => {
        var _0x4c4191 = {
            'eDuIy': function (_0x159ac0, _0x110874) {
                return _0x1813e8['NLeFd'](_0x159ac0, _0x110874);
            },
            'rOwvk': _0x1813e8['AYBkN'],
            'dsJzS': _0x1813e8['xqmJJ'],
            'BJUsI': _0x1813e8[_0x5853('179', 'yiiT')],
            'wQsor': function (_0x4846e1, _0x3dcc9d) {
                return _0x1813e8[_0x5853('17a', '^XAk')](_0x4846e1, _0x3dcc9d);
            },
            'TvRdf': _0x1813e8['DqhOU'],
            'NkBxP': _0x1813e8[_0x5853('17b', 'jOae')],
            'CIJpG': _0x1813e8[_0x5853('17c', 'hOfm')],
            'HswIm': _0x1813e8['cxgrT'],
            'pWFxY': function (_0x518fd6, _0xa77dd4) {
                return _0x1813e8[_0x5853('17d', 'pr@U')](_0x518fd6, _0xa77dd4);
            },
            'phwWh': _0x5853('17e', '@0nQ'),
            'YmWtT': function (_0x55238a) {
                return _0x1813e8['oxhiR'](_0x55238a);
            }
        };
        $[_0x5853('17f', '^XAk')](_0x6103e8, async (_0x5bf3c3, _0x25167a, _0x5509ab) => {
            var _0x44b58a = {
                'EPhyY': function (_0x5ee64e, _0x522c7d) {
                    return _0x4c4191[_0x5853('180', '18i!')](_0x5ee64e, _0x522c7d);
                }
            };
            try {
                if (_0x5bf3c3) {
                    if (_0x5853('181', 'PXOB') === _0x4c4191[_0x5853('182', '18i!')]) {
                        _0x5509ab = JSON['parse'](_0x5509ab);
                        if (_0x44b58a['EPhyY'](_0x5509ab[_0x5853('183', 'WZ94')][_0x5853('21', '6*mD')], 0x0)) {
                            $['authorCodeList'] = _0x5509ab['data'];
                        } else {
                            $[_0x5853('184', '@0nQ')] = [];
                        }
                    } else {
                        console['log'](_0x5bf3c3);
                    }
                } else {
                    _0x5509ab = JSON['parse'](_0x5509ab);
                    if (_0x5509ab[_0x5853('185', '18i!')]) {
                        switch (_0x6776e2) {
                            case _0x5853('186', '3aH5'):
                                console[_0x5853('187', '^$%4')](_0x5853('188', 'pr@U') + _0x5509ab[_0x5853('e8', '3aH5')]);
                                $[_0x5853('189', 'j%MH')] = _0x5509ab[_0x5853('18a', 'DAz#')];
                                break;
                            case _0x4c4191[_0x5853('18b', '6vu1')]:
                                console[_0x5853('18c', 'xBOf')]('token：' + _0x5509ab[_0x5853('f3', '0GPR')]);
                                $[_0x5853('18d', 'QmNE')] = _0x5509ab[_0x5853('e8', '3aH5')];
                                break;
                            case _0x4c4191['BJUsI']:
                                if (_0x5509ab['data']) {
                                    if (_0x4c4191[_0x5853('18e', '7)0l')](_0x4c4191[_0x5853('18f', 'N4zy')], _0x4c4191[_0x5853('190', '6*mD')])) {
                                        $[_0x5853('191', '6*mD')] = _0x5509ab[_0x5853('f3', '0GPR')];
                                    } else {
                                        if (_0x5509ab[_0x5853('192', 'u6y]')]['pkResult']) {
                                            console['log'](_0x5509ab[_0x5853('193', 'pr@U')]['pkResult']);
                                        }
                                    }
                                }
                                break;
                            default:
                                console['log'](JSON[_0x5853('da', 'b#ja')](_0x5509ab));
                                break;
                        }
                    } else {
                        if (_0x4c4191[_0x5853('194', 'r86s')](_0x4c4191[_0x5853('195', '7)0l')], _0x4c4191[_0x5853('196', 'b#ja')])) {
                            console[_0x5853('197', 'b#ja')](JSON[_0x5853('198', '^XAk')](_0x5509ab));
                        } else {
                            console['log'](JSON[_0x5853('199', 'QmNE')](_0x5509ab));
                        }
                    }
                }
            } catch (_0x3f9db3) {
                if (_0x4c4191[_0x5853('19a', 'hOfm')](_0x4c4191[_0x5853('19b', 'YgEB')], _0x4c4191[_0x5853('19c', 'r86s')])) {
                    console[_0x5853('13d', ')Q@K')](_0x3f9db3);
                } else {
                    list['push'](x);
                }
            } finally {
                if (_0x4c4191['pWFxY'](_0x4c4191['phwWh'], _0x5853('19d', '6*mD'))) {
                    _0x4c4191[_0x5853('19e', 'S%tm')](_0x54f6eb);
                } else {
                    $[_0x5853('19f', 'u6y]')](_0x5853('1a0', 'iXc(') + vo[_0x5853('1a1', 'R@!i')] + _0x5853('1a2', '6vu1'));
                    $[_0x5853('1a3', 'aaCy')] += vo[_0x5853('1a4', 'S%tm')];
                }
            }
        });
    });
}

function taskUrl(_0x58b474, _0x5a386a, _0x7894eb, _0x480e02 = '') {
    var _0x945e4 = {
        'dEUqd': _0x5853('1a5', 'xBOf'),
        'HzhoF': _0x5853('1a6', 'QmNE'),
        'fkMXM': 'jd.moxigame.cn',
        'bbWyH': _0x5853('1a7', 'MB5#'),
        'FbgUf': _0x5853('1a8', 'B!KF'),
        'QUViI': 'zh-cn',
        'ZAspV': _0x5853('1a9', 'hOfm')
    };
    let _0x4be77a = _0x58b474 ? _0x945e4[_0x5853('1aa', '3aH5')] : _0x945e4[_0x5853('1ab', 'ywpN')];
    return {
        'url': '' + _0x4be77a + _0x5a386a + _0x5853('1ac', 'hOfm') + _0x7894eb + _0x480e02,
        'headers': {
            'Host': _0x945e4[_0x5853('1ad', '7)0l')],
            'Content-Type': _0x5853('1ae', '@0nQ'),
            'Origin': _0x945e4[_0x5853('1af', 'fh3Z')],
            'Connection': _0x945e4[_0x5853('1b0', 'hOfm')],
            'Accept': _0x5853('1b1', '3aH5'),
            'User-Agent': '',
            'Accept-Language': _0x945e4[_0x5853('1b2', '6]Jc')],
            'Accept-Encoding': _0x945e4['ZAspV']
        }
    };
}

function random(_0x43b176, _0x11ebb8) {
    var _0x375bcc = {
        'toTUf': function (_0x5e70d5, _0x25bdc6) {
            return _0x5e70d5 + _0x25bdc6;
        }, 'SpnnN': function (_0x183140, _0x42341d) {
            return _0x183140 - _0x42341d;
        }
    };
    return _0x375bcc[_0x5853('1b3', 'eneF')](Math['floor'](Math[_0x5853('1b4', '6vu1')]() * _0x375bcc[_0x5853('1b5', 'hOfm')](_0x11ebb8, _0x43b176)), _0x43b176);
}

function getUUID(_0x42b3e6 = _0x5853('1b6', 'j%MH'), _0x583cf1 = 0x0) {
    var _0x5da299 = {
        'LWRjd': '京东没有返回数据', 'VDloD': function (_0x2b9749, _0x2ca8d5) {
            return _0x2b9749 === _0x2ca8d5;
        }, 'JvxVS': _0x5853('1b7', 'fh3Z'), 'ZFwgk': function (_0x3728e6, _0x2e30bc) {
            return _0x3728e6 | _0x2e30bc;
        }, 'XDhJj': function (_0x30a5f3, _0x5e792d) {
            return _0x30a5f3 * _0x5e792d;
        }, 'CwQJN': function (_0x1e1bd7, _0x198dbc) {
            return _0x1e1bd7 & _0x198dbc;
        }, 'ECMVN': function (_0x3ec0be, _0x33ed1a) {
            return _0x3ec0be === _0x33ed1a;
        }, 'nVduJ': _0x5853('1b8', '7)0l'), 'zJRkV': function (_0x3143af, _0x491867) {
            return _0x3143af !== _0x491867;
        }, 'sotFd': 'YFbtq'
    };
    return _0x42b3e6['replace'](/[xy]/g, function (_0x2a01cb) {
        var _0x45a067 = {
            'XowLh': _0x5da299[_0x5853('1b9', 'r86s')], 'tjOPI': function (_0x554772) {
                return _0x554772();
            }
        };
        if (_0x5da299[_0x5853('1ba', '^XAk')](_0x5da299[_0x5853('1bb', '3ovi')], _0x5da299[_0x5853('1bc', '^XAk')])) {
            var _0x1da190 = _0x5da299[_0x5853('1bd', 'nYD%')](_0x5da299['XDhJj'](Math['random'](), 0x10), 0x0),
                _0x53fcb3 = _0x2a01cb == 'x' ? _0x1da190 : _0x5da299[_0x5853('1be', '8CR[')](_0x1da190, 0x3) | 0x8;
            if (_0x583cf1) {
                if (_0x5da299['ECMVN'](_0x5da299[_0x5853('1bf', '6vu1')], _0x5853('1c0', '0GPR'))) {
                    uuid = _0x53fcb3[_0x5853('1c1', 'aaCy')](0x24)[_0x5853('1c2', 'yiiT')]();
                } else {
                    $[_0x5853('1c3', '$R*i')] = ![];
                    return;
                }
            } else {
                if (_0x5da299['zJRkV'](_0x5da299[_0x5853('1c4', 'u6y]')], _0x5da299['sotFd'])) {
                    $['log'](_0x45a067[_0x5853('1c5', 'u6y]')]);
                } else {
                    uuid = _0x53fcb3[_0x5853('1c6', '7)0l')](0x24);
                }
            }
            return uuid;
        } else {
            _0x45a067[_0x5853('1c7', 'b#ja')](resolve);
        }
    });
}

function checkCookie() {
    var _0x4689c8 = {
        'rgOCZ': 'https://bean.m.jd.com/bean/signIndex.action',
        'OJlED': function (_0x4f6c50, _0x40da08) {
            return _0x4f6c50 === _0x40da08;
        },
        'gSqGf': function (_0x510a61, _0x5e4989) {
            return _0x510a61 !== _0x5e4989;
        },
        'TSCQK': _0x5853('1c8', '6vu1'),
        'uNFyV': _0x5853('1c9', 'MB5#'),
        'ERDUP': _0x5853('1ca', 'S%tm'),
        'mvwvF': _0x5853('1cb', 'fh3Z'),
        'zNmJj': '*/*',
        'hzQwI': 'keep-alive',
        'xifbf': _0x5853('1cc', '^$%4'),
        'GOtEK': _0x5853('1cd', 'MB5#'),
        'WmbHd': 'https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&',
        'elQfm': 'gzip,\x20deflate,\x20br'
    };
    const _0xb9db17 = {
        'url': _0x4689c8['ERDUP'],
        'headers': {
            'Host': _0x4689c8[_0x5853('1ce', 'MB5#')],
            'Accept': _0x4689c8[_0x5853('1cf', 'hOfm')],
            'Connection': _0x4689c8[_0x5853('1d0', 'slhw')],
            'Cookie': cookie,
            'User-Agent': _0x4689c8[_0x5853('1d1', 'WZ94')],
            'Accept-Language': _0x4689c8[_0x5853('1d2', 'b#ja')],
            'Referer': _0x4689c8['WmbHd'],
            'Accept-Encoding': _0x4689c8[_0x5853('1d3', '6vu1')]
        }
    };
    return new Promise(_0x5f4679 => {
        var _0x3af004 = {
            'jaLTr': _0x4689c8[_0x5853('1d4', '6vu1')],
            'RwpGU': function (_0x5c872d, _0x5547ee) {
                return _0x5c872d | _0x5547ee;
            },
            'fSFIY': function (_0x37452a, _0x14e007) {
                return _0x37452a & _0x14e007;
            },
            'psuqm': function (_0x15c868, _0x33ab3d) {
                return _0x4689c8[_0x5853('1d5', 'DAz#')](_0x15c868, _0x33ab3d);
            },
            'UpWUA': 'WrQvg',
            'SQQcj': function (_0x5e871c, _0x4f9a38) {
                return _0x4689c8[_0x5853('1d6', 'PXOB')](_0x5e871c, _0x4f9a38);
            },
            'hfBTg': _0x5853('1d7', ')Q@K'),
            'Zqheb': '1001',
            'FFoSn': _0x4689c8[_0x5853('1d8', 'j%MH')],
            'oYDmJ': _0x4689c8[_0x5853('1d9', ')Q@K')],
            'zjbbW': function (_0x67af1b) {
                return _0x67af1b();
            }
        };
        $[_0x5853('1da', 'S%tm')](_0xb9db17, (_0x53aa28, _0xf67b4d, _0x58ac79) => {
            var _0x5a4897 = {
                'MvuNr': function (_0x2e90f1, _0x567cd9) {
                    return _0x3af004[_0x5853('1db', 'QmNE')](_0x2e90f1, _0x567cd9);
                }, 'aFMtv': function (_0x52364b, _0x51bc12) {
                    return _0x52364b * _0x51bc12;
                }, 'GeUsy': function (_0x2f6a34, _0x314a08) {
                    return _0x2f6a34 == _0x314a08;
                }, 'ecgZu': function (_0x591f95, _0x417342) {
                    return _0x3af004[_0x5853('1dc', 'xBOf')](_0x591f95, _0x417342);
                }
            };
            try {
                if (_0x53aa28) {
                    if (_0x3af004['psuqm'](_0x3af004[_0x5853('1dd', '8CR[')], _0x3af004['UpWUA'])) {
                        $['logErr'](_0x53aa28);
                    } else {
                        return format[_0x5853('1de', 'yiiT')](/[xy]/g, function (_0x32f6fb) {
                            var _0x27c39c = _0x5a4897[_0x5853('1df', 'jOae')](_0x5a4897[_0x5853('1e0', '3ovi')](Math[_0x5853('1e1', 'yiiT')](), 0x10), 0x0),
                                _0x324915 = _0x5a4897[_0x5853('1e2', '18i!')](_0x32f6fb, 'x') ? _0x27c39c : _0x5a4897[_0x5853('1e3', 'n@*7')](_0x27c39c, 0x3) | 0x8;
                            if (UpperCase) {
                                uuid = _0x324915['toString'](0x24)[_0x5853('1e4', 'nYD%')]();
                            } else {
                                uuid = _0x324915[_0x5853('1e5', 'B!KF')](0x24);
                            }
                            return uuid;
                        });
                    }
                } else {
                    if (_0x58ac79) {
                        if (_0x3af004[_0x5853('1e6', '6]Jc')](_0x3af004['hfBTg'], 'LdeoZ')) {
                            _0x58ac79 = JSON[_0x5853('1e7', 'nYD%')](_0x58ac79);
                            if (_0x58ac79['retcode'] === _0x3af004['Zqheb']) {
                                $[_0x5853('1e8', '^XAk')] = ![];
                                return;
                            }
                            if (_0x58ac79[_0x5853('1e9', '$R*i')] === '0' && _0x58ac79[_0x5853('1ea', '18i!')][_0x5853('1eb', 'ywpN')](_0x3af004[_0x5853('1ec', ')Q@K')])) {
                                $['nickName'] = _0x58ac79[_0x5853('1ed', '^XAk')]['userInfo'][_0x5853('1ee', 'iXc(')]['nickname'];
                            }
                        } else {
                            $['msg']($[_0x5853('1ef', 'jOae')], _0x5853('1f0', 'YgEB'), _0x3af004['jaLTr'], {'open-url': _0x5853('1f1', '^XAk')});
                            return;
                        }
                    } else {
                        $[_0x5853('187', '^$%4')](_0x3af004[_0x5853('1f2', 'j%MH')]);
                    }
                }
            } catch (_0x57be70) {
                $[_0x5853('1f3', '8CR[')](_0x57be70);
            } finally {
                _0x3af004[_0x5853('1f4', 'slhw')](_0x5f4679);
            }
        });
    });
};_0xodK = 'jsjiami.com.v6';

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
