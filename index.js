$(function () {
    // 送信
    $('form').submit(function () {
        //氏名
        var name = $('input[name="name"]').val();
        //生年月日
        var year = $('#year').val();
        var month = $('#month').val();
        var day = $('#day').val();
        //住んでいる地域
        var area = $('#area').val();
        //職業
        var work = $('#work').val();

        //生年月日
        const birthday = {
            year: $year,
            month: $month,
            date: $date
        };
        var today = new Date();
        
        //今年の誕生日
        var thisYearsBirthday = new Date(today.getFullYear(), birthday.month-1, birthday.date);
        
        //年齢処理
        var age = today.getFullYear() - birthday.year;
        if(today < thisYearsBirthday){
            age--;
        }
        
        var msg = `氏名：${name}\n生年月日：${year}年${month}月${day}日\n年齢：${age}歳\nお住まいの地域：${area}\n職業：${work}`;

        sendText(msg);
        return false;
    });

    $('#upfile').change(function(e){
        var file = e.target.files[0];
        var reader = new FileReader();
        if(file.type.indexOf('image') < 0){
          alert("画像ファイルを指定してください。");
          return false;
        }
        reader.onload = (function(file){
          return function(e){
            $('#upimage').attr('src', e.target.result);
            $('#upimage').attr('title', file.name);
          };
        })(file);
        reader.readAsDataURL(file);
      });
});