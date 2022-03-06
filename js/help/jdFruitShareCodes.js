/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
	'e288e93253774d89a74ba7ca1775bca6@c919f2f2e00141d8ad6aeebd4991d2fc@c3679844baa94eb387bc456996bbf05b@9a230ac02ca1493a8398691ecfa8a3c2@457ad657488143f9933ac01807b560f6@2baf29c630a5461fabb2852ea7d70e65',
	'e288e93253774d89a74ba7ca1775bca6@c919f2f2e00141d8ad6aeebd4991d2fc@c3679844baa94eb387bc456996bbf05b@9a230ac02ca1493a8398691ecfa8a3c2@457ad657488143f9933ac01807b560f6@2baf29c630a5461fabb2852ea7d70e65'.
	'e288e93253774d89a74ba7ca1775bca6@c919f2f2e00141d8ad6aeebd4991d2fc@c3679844baa94eb387bc456996bbf05b@9a230ac02ca1493a8398691ecfa8a3c2@457ad657488143f9933ac01807b560f6@2baf29c630a5461fabb2852ea7d70e65',
	'e288e93253774d89a74ba7ca1775bca6@c919f2f2e00141d8ad6aeebd4991d2fc@c3679844baa94eb387bc456996bbf05b@9a230ac02ca1493a8398691ecfa8a3c2@457ad657488143f9933ac01807b560f6@2baf29c630a5461fabb2852ea7d70e65',
	'e288e93253774d89a74ba7ca1775bca6@c919f2f2e00141d8ad6aeebd4991d2fc@c3679844baa94eb387bc456996bbf05b@9a230ac02ca1493a8398691ecfa8a3c2@457ad657488143f9933ac01807b560f6@2baf29c630a5461fabb2852ea7d70e65',
	'e288e93253774d89a74ba7ca1775bca6@c919f2f2e00141d8ad6aeebd4991d2fc@c3679844baa94eb387bc456996bbf05b@9a230ac02ca1493a8398691ecfa8a3c2@457ad657488143f9933ac01807b560f6@2baf29c630a5461fabb2852ea7d70e65',
	'e288e93253774d89a74ba7ca1775bca6@c919f2f2e00141d8ad6aeebd4991d2fc@c3679844baa94eb387bc456996bbf05b@9a230ac02ca1493a8398691ecfa8a3c2@457ad657488143f9933ac01807b560f6@2baf29c630a5461fabb2852ea7d70e65',
]
// 判断github action里面是否有东东农场互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
