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
        var area = $('input[name="area"]').val();
        var work = $('input[name="work"]').val();

        var msg = `氏名：${name}\n生年月日：${date}\nお住まいの地域：${area}\n職業：${work}`;
        sendText(msg);

        return false;
    });
});