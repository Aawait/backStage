export default {
    id: [
        {
            required: true,
            message: "必须输入id",
            trigger: "blur"
        },
        {
            type: 'number',
            message: "id为数字类型",
            trigger: "blur"
        }
    ],
    UserName: [
        {
            required: true,
            message: "必须输入用户名",
            trigger: "blur"
        },
        {
            min: 2,
            max: 10,
            message: "用户名长度为2-10的字节",
            trigger: "blur"
        }
    ],
    Password: [
        {
            required: true,
            message: "必须填写密码",
            trigger: "blur"
        },
        {
            min: 6,
            max: 12,
            message: "密码长度为6-12的字节",
            trigger: "blur"
        }
    ],
    Mobile: [
        {
            type: 'number',
            message: "手机号码格式错误",
            trigger: "blur"
        }
    ],
    Email: [
        {
            type: 'string',
            message: "电子邮箱格式错误",
            trigger: "blur"
        }
    ]
}