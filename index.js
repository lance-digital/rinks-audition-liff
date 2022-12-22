$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 送信
    $('form').submit(function () {
        var name = $('input[name="name"]').val();
        var date = $('input[name="date"]:checked').val();

        var msg = `氏名：${name}\n生年月日：${date}`;
        sendText(msg);

        return false;
    });
});