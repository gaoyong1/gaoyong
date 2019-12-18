var article = {
    moban: function (options) {
        $.ajax({
            url: GET_CATE,
            success: function (res) {
                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    },
    tianjia: function (options) {
        $.ajax({
            type: 'POST',
            url: ADD,
            data: options.lone,
            success: function (res) {
                console.log(res);

                if (res.code === 200) {
                    // 页面刷新
                    options.success();
                } else {
                    options.ledn();
                }
            }
        })
    },
    bianji: function (options) {
        $.ajax({
            type: 'POST',
            url: EDIT,
            data: options.lone,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.ledn();
                }
            }
        })
    },
    shanchu: function (options) {
        $.ajax({
            type: 'POST',
            url: DELETE,
            data: {
                id: options.id
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                }
            }

        })
    }

}