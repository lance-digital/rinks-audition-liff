$(function () {
    // 送信
    $('form').submit(function () {
        //氏名
        var name = $('input[name="name"]').val();
        //生年月日
        var year = $('input[name="year"]').val();
        var month = $('input[name="month"]').val();
        var day = $('input[name="day"]').val();
        //住んでいる地域
        var area = $('input[name="area"]').val();
        //職業
        var work = $('input[name="work"]').val();

        var msg = `氏名：${name}
            \n生年月日：${year}年${month}月${day}日
            \nお住まいの地域：${area}
            \n職業：${work}`;
        sendText(msg);
        return false;
    });
});