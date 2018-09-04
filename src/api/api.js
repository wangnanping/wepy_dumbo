import wepy from 'wepy'

let _config = {
  serverUrl: 'https://douban.uieee.com'
}

function testFun(url,method,paraData, cb) {
  requestApi(url, method, paraData, cb)
}

module.exports = {
  testFun
}
//调用API 统一方法
function requestApi(ApiName, method, _data, cb) {
  wepy.request({
    url: _config.serverUrl + ApiName,
    header: {
      'Content-Type': 'application/xml'
    },
    data: _data,
    method: method,
    success: function (res) {
      typeof cb == "function" && cb(null, res)
    },
    fail: function () {
      typeof cb == "function" && cb(res)
    }
  })
}
