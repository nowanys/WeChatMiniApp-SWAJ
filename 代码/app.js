//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 获取本地用信息
    // wx.getStorage({
    //   key: 'userInfo',
    //   success: function (res) {
    //     this.globalData.userInfo = res.data
    //   },
    // })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        // if (res.authSetting['scope.userInfo']) {
        //   // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        //   wx.getUserInfo({
        //     success: res => {
        //       // 可以将 res 发送给后台解码出 unionId
        //       this.globalData.userInfo = res.userInfo

        //       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        //       // 所以此处加入 callback 以防止这种情况
        //       if (this.userInfoReadyCallback) {
        //         this.userInfoReadyCallback(res)
        //       }
        //     }
        //   })
        // }
      }
    })
  },
  globalData: {
    /** 
    行业类型
    @param id   类型id
    @param name 类型名称  
    */
    industryType: [
      { id: "1001", name: "仓储物流" },
      { id: "1002", name: "城镇燃气" },
      { id: "1003", name: "人员密集场所" },
      { id: "1004", name: "危险化学品" },
      { id: "1005", name: "工贸" },
      { id: "1006", name: "非煤矿山" },
      { id: "1007", name: "煤矿" },
      { id: "1008", name: "烟花爆竹" },
      { id: "1009", name: "民爆" },
      { id: "1010", name: "道路交通" },
      { id: "1011", name: "水上交通" },
      { id: "1012", name: "建筑施工" }
    ],
    /** 
    隐患大类
    @param id   大类id
    @param name 大类名称  
    */
    dangerType1: [
      { id: "2001", name: "其他" },
      { id: "2002", name: "基础管理" },
      { id: "2003", name: "现场管理" }
    ],
    /** 
    隐患小类
    @param id       小类id
    @param superId  对应大类id
    @param name     小类名称  
    */
    dangerType2: [
      { id: "3001", superId: "2001", name: "其他" },
      { id: "3002", superId: "2002", name: "资质证照" },
      { id: "3003", superId: "2002", name: "安全生产管理机构及人员" },
      { id: "3004", superId: "2002", name: "安全生产责任制" },
      { id: "3005", superId: "2002", name: "安全生产管理制度" },
      { id: "3006", superId: "2002", name: "安全操作规程" },
      { id: "3007", superId: "2002", name: "教育培训" },
      { id: "3008", superId: "2002", name: "安全生产管理档案" },
      { id: "3009", superId: "2002", name: "安全生产投入" },
      { id: "3010", superId: "2002", name: "应急管理" },
      { id: "3011", superId: "2002", name: "特种设备基础管理" },
      { id: "3012", superId: "2002", name: "职业卫生基础管理" },
      { id: "3013", superId: "2002", name: "相关方基础管理" },
      { id: "3014", superId: "2002", name: "其他基础管理" },
      { id: "3015", superId: "2003", name: "特种设备现场管理" },
      { id: "3016", superId: "2003", name: "生产设备设施及工艺" },
      { id: "3017", superId: "2003", name: "场所环境" },
      { id: "3018", superId: "2003", name: "从业人员操作行为" },
      { id: "3019", superId: "2003", name: "消防安全" },
      { id: "3020", superId: "2003", name: "用电安全" },
      { id: "3021", superId: "2003", name: "职业卫生现场安全" },
      { id: "3022", superId: "2003", name: "有限空间现场安全" },
      { id: "3023", superId: "2003", name: "辅助动力系统" },
      { id: "3024", superId: "2003", name: "相关方现场管理" },
      { id: "3025", superId: "2003", name: "其他现场管理" },
    ],
    /** 
    存在问题
    @param id   问题id
    @param name 问题名称  
    */
    problemType: [
      { id: "4001", name: "其他" }
    ],
    /** 
    潜在隐患
    @param id   事故id
    @param name 事故名称  
    */
    dangerType: [
      { id: "5001", name: "火药爆炸" },
      { id: "5002", name: "物体打击" },
      { id: "5003", name: "车辆伤害" },
      { id: "5004", name: "机械伤害" },
      { id: "5005", name: "起重伤害" },
      { id: "5006", name: "触电" },
      { id: "5007", name: "淹溺" },
      { id: "5008", name: "灼烫" },
      { id: "5009", name: "火灾" },
      { id: "5010", name: "高处坠落" },
      { id: "5011", name: "坍塌" },
      { id: "5012", name: "冒顶片帮" },
      { id: "5013", name: "透水" },
      { id: "5014", name: "放炮" },
      { id: "5015", name: "瓦斯爆炸" },
      { id: "5016", name: "锅炉爆炸" },
      { id: "5017", name: "容器爆炸" },
      { id: "5018", name: "其他爆炸" },
      { id: "5019", name: "中毒和窒息" },
      { id: "5020", name: "其他伤害" },
    ],
    // 用户信息
    userInfo: null
  }
})