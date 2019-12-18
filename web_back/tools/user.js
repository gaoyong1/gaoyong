// // 使用user.js对项目中与用户操作有关的请求功能进行保存
var user = {
    login: function (onidert) {
        $.ajax({
            type: 'post',
            url: LOGINT,
            data: {
                user_name: onidert.data.username,
                password: onidert.data.password
            },
            success: function (res) {
                if (res.code == 200) {
                    onidert.success();
                } else {
                    onidert.fail();
                }
            }
        })

    },

    logout: function (options) {
        $.ajax({
            type: 'post',
            url: LOGINT,
            success: function (res) {
                if (res.code == 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },


    getUser: function (options) {
        $.ajax({
            url: 'http://localhost:8000/admin/getuser',
            success: function (res) {

                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    }

};

