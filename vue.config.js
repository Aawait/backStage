module.exports = {
  configureWebpack: {
    resolve: {
      // 设置文件别名
      alias: {
        assets: "@/assets",
        components: "@/components",
        views: "@/views",
        network: "@/network",
        router: "@/router"
      },
    },
    devServer: {
      open: true,
      host: "127.0.0.1",
      port: 8080,
      disableHostCheck: true, // 忽略host检查，不会出现hot-reload失效

      // mock.js写临时接口测试的地方
      before(app) {
        // 模拟一个登录的接口
        const token = "aaabbbccc";
        app.get("/api/login", (req, res) => {
         
          const { username, password } = req.query;
          if (
            (username === "admin" && password === "123456") ||
            (username === "cici" && password === "123456")
          ) {
            res.json({
              code: 1,
              message: "登陆成功",
              token: token + "username" + username,
            });
          } else {
            res.json({
              code: 0,
              message: "用户名或密码错误，登陆失败",
            });
          }
        });


        
        // 返回home首页tab栏需要的数据
        app.get('/api/menu',(req,res)=>{
            res.json({
                status: "ok",
                data: [
                    {
                        id:0,
                        name: "welcome",
                        icon: "el-icon-star-off",
                        child:[
                            {
                                id: 0,
                                name: "首页",
                                icon: "el-icon-s-home",
                                path: "/home/welcome"
                            }
                        ]
                    },
                  {
                    id: 1,
                    name: "用户管理",
                    icon: "el-icon-user",
                    child: [
                      {
                        id: 1,
                        name: "用户列表",
                        path: "/home/users",
                        icon: "el-icon-setting"
                      },
                    ],
                  },
                  {
                    id: 2,
                    name: "员工管理",
                    icon: "el-icon-s-custom",
                    child: [
                      {
                        id: 2,
                        name: "员工列表",
                        path: "/home/rote",
                        icon: "el-icon-setting"
                      },
                    ],
                  },
                  {
                    id: 3,
                    name: "商品管理",
                    icon: "el-icon-goods",
                    child: [
                      {
                        id: 4,
                        name: "商品列表",
                        path: "/home/product",
                        icon: "el-icon-setting"
                      },
                      {
                        id: 5,
                        name: "分类参数",
                        path: "/home/params",
                        icon: "el-icon-setting"
                      },
                      {
                        id: 6,
                        name: "商品分类",
                        path: "/home/classify",
                        icon: "el-icon-setting"
                      },
                    ],
                  },
                  {
                    id: 4,
                    name: "订单管理",
                    icon: "el-icon-s-order",
                    child: [],
                  },
                  {
                    id: 5,
                    name: "数据统计",
                    icon: "el-icon-s-data",
                    child: [],
                  },
                ],
              });
        })

         
        // 返回用户界面需要的数据
        app.get('/api/user',(req,res)=>{

            const list = [{
                                "id": 10,
                                "UserName": "vivi5",
                                "Password": "123456",
                                "CreateTime": "2021-6-9 星期三 22:42:00",
                                "RoleName": "",
                                "Mobile": "18888888888",
                                "Email": "405328555@qq.com",
                                "MgState": "yes"
                            }, {
                                "id": 9,
                                "UserName": "vivi4",
                                "Password": "123456",
                                "CreateTime": "2021-6-9 星期三 22:42:00",
                                "RoleName": "",
                                "Mobile": "18888888888",
                                "Email": "405328555@qq.com",
                                "MgState": "yes"
                            }, {
                                "id": 8,
                                "UserName": "vivi3",
                                "Password": "123456",
                                "CreateTime": "2021-6-9 星期三 22:42:00",
                                "RoleName": "",
                                "Mobile": "18888888888",
                                "Email": "405328555@qq.com",
                                "MgState": "yes"
                            }, {
                                "id": 7,
                                "UserName": "vivi2",
                                "Password": "555555",
                                "CreateTime": "2021-6-9 星期三 22:42:00",
                                "RoleName": "",
                                "Mobile": "13312311231",
                                "Email": "55@qq.com",
                                "MgState": "yes"
                            }, {
                                "id": 6,
                                "UserName": "vivi",
                                "Password": "333333",
                                "CreateTime": "2021-6-9 星期三 22:42:00",
                                "RoleName": "",
                                "Mobile": "13388888888",
                                "Email": "33@qq.com",
                                "MgState": "yes"
                            }, {
                                "id": 5,
                                "UserName": "cici5",
                                "Password": "222222",
                                "CreateTime": "2021-6-9 星期三 22:42:00",
                                "RoleName": "",
                                "Mobile": "13845644564",
                                "Email": "22@qq.com",
                                "MgState": "yes"
                            }, {
                                "id": 4,
                                "UserName": "cici4",
                                "Password": "123456",
                                "CreateTime": "2021-6-9 星期三 22:42:00",
                                "RoleName": "",
                                "Mobile": "",
                                "Email": "",
                                "MgState": "yes"
                            }, {
                                "id": 3,
                                "UserName": "cici3",
                                "Password": "",
                                "CreateTime": "2021-6-9 星期三 22:42:00",
                                "RoleName": "",
                                "Mobile": "13812341235",
                                "Email": "888888@qq.com",
                                "MgState": "yes"
                            }, {
                                "id": 2,
                                "UserName": "cici2",
                                "Password": "",
                                "CreateTime": "2021-6-9 星期三 22:42:00",
                                "RoleName": "",
                                "Mobile": "13812341888",
                                "Email": "288888@qq.com",
                                "MgState": "yes"
                            }, {
                                "id": 1,
                                "UserName": "cici",
                                "Password": "123456",
                                "CreateTime": "2021-6-9 星期三 22:42:00",
                                "RoleName": "超级管理员",
                                "Mobile": "13602221234",
                                "Email": "223456@qq.com",
                                "MgState": "no"
                            }]

            const {pageNum , pageSize} = req.query
            const total = userlist.length
            const userlist = list.slice(pageNum,pageSize)
            res.json({
              status: 200,
              data: userlist,
              message: "获取数据成功"
              
            })
        })
      },
    },
  },
};