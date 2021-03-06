import http from '../utils/http.js'

class Api {
  login() {
    return http.request("POST", "/api/login", {
      openid: document.cookie.split('=')[1]
    })
  }
  setInfo(punch_time: number) {
    // `punch_time`：0为6: 30 - 7: 00，1为7: 00 - 7: 30，2为7: 30 - 8: 00
    return http.request("POST", '/api/set-info', {
      openid: document.cookie.split('=')[1],
      punch_time: punch_time
    })
  }
  punch() {
    return http.request("POST", '/api/punch', {
      openid: document.cookie.split('=')[1],
      punch_time: 0
    })
  }
}

export default new Api()
