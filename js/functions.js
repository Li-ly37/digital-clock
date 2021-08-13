$(function () {

  // ページが読み込まれた際に時間を設定
  setTime();


  // 動いているかどうか確認
  // $('body').fadeOut();

  // const now = new Date(); //今この瞬間を取得するjsのお決まりの単語(new Date();のこと)一気に全て取得してしまう。nowという言葉に全ての年月日が表示含まれている

  // Interval jsの組み込み。繰り返し行うというコード。実施されるまでに1秒かかる。
  //そのため、セットインターバルの上にも同じコードを入力したらタイムラグがなく実行される。だけど、同じコードを二重で書くためださい。関数で定義して登録する。

  setInterval(function () {
    // console.log(1);
    // }, 1000); //１秒毎に更新 下記へ移動したためコメントアウト

  // 1秒ごとに時間を設定
    setTime();

    // データの準備

  //   const now = new Date();
  //   // console.log(now); //全てのデータを取得
  //   // console.log(now.getFullYear()); //個別に今何年か？だけを取得出来る。
  //   // console.log(now.getMinutes());//個別に今何秒か？だけを取得出来る。
  //   // console.log(now.getDay());//個別に今何曜日か？だけを取得出来る。数字で表記。月曜日は1
  //   // console.log(now.getMonth());//個別に今月か？だけを取得出来る。0から始まるため8月は7と取得される

  //   // 年
  //   const year = now.getFullYear(); //.getFullYearは、デバイス（PC）の情報を取得している
  //   // console.log(year);

  //   // 月
  //   const month = (now.getMonth() + 1).toString().padStart(2, '0'); //-1の数字で表示されるため、理想の月が表示されるように＋1を入力する。
  //   // console.log(month);

  //   // console.log(month.toString().padStart(2, '0'));//jsは1つでも文字列が入っていると、自動で文字列の結合がされる。そのため、数字にクォーテーションを付けてもつけなくてもよい。
  //   // .padStart jsが標準で持っているもの。文字列でしか変換されない。.padStart(〇, '-')〇の桁に合わせてね。足りない場合は-で表示してね。という指示。

  //   // 月を和風月名で表記したい。配列のデータ形式は[];
  //   const monthList = ['睦月', '如月', '弥生', '卯月', '皐月', '水無月', '文月', '葉月', '長月', '神無月', '霜月', '師走'];

  //   // console.log( monthList[now.getMonth()] ); //欲しい月を数字で指定する。変数設定する。

  //   // 月の文字列の変数設定
  //   const monthStr = monthList[now.getMonth()]; //月の表示なので0スタートでOK

  //   // console.log(month);
  //   // console.log(monthStr);

  //   // 日付 dayだと曜日となることもあるためdateとする。
  //   const date = now.getDate().toString().padStart(2, '0');
  //   // console.log(date);

  //   // 時間 24時間表記
  //   const hour = now.getHours().toString().padStart(2, '0');
  //   // console.log(hour);

  //   // 分

  //   const minute = now.getMinutes().toString().padStart(2, '0');
  //   // console.log(minute);

  //   //　秒
  //   const second = now.getSeconds().toString().padStart(2, '0');
  //   // console.log(second);

  //   //　週
  //   const weekList = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', ];

  //   // console.log(weekList[now.getDay()]); //weekLisだと全て取得。[now.getDay()]を追記すると現在の情報を取得する。

  //   const weekStr = weekList[now.getDay()];
  //   // console.log(weekStr);

  //   // console.log(year, month, monthStr, date, weekStr, hour, minute, second, );

  //   // console.log(hour, minute, second, year, month, date, weekStr);

  //   // ampm
  //   let ampm = 'AM'; //取得したい言葉を書く

  //   //今何時かを取得。12よりも大きかったら{}内のコードを取得してね。
  //   if (now.getHours() >= 12) {
  //     ampm = 'PM';
  //   }
  //   // console.log(ampm);

  //   // ampm hour 0~11までの数字を取得
  //   const ampmHour = (now.getHours() % 12).toString().padStart(2, '0'); //割った余りを表示される
  //   console.log(ampmHour);

  //   // データの差し替えを行う
  //   // 時間の置き換え
  //   // $('#hour').text(hour);
  //   $('#hour').text(ampmHour);
  //   $('#minute').text(minute);
  //   $('#second').text(second);
  //   $('#year').text(year);
  //   $('#month').text(month);
  //   $('#date').text(date);
  //   $('#weekStr').text(weekStr);

  //   // 条件による置き換え

  //   // console.log(now.getSeconds() % 2);

  // // 一般的な= は　===　3つ書く
  //   if ( now.getMinutes() % 2 === 0 ) {
  //     $('body').css('background-image', 'url(images/penguin@2x.jpg)');
  //     // console.log('偶数です');

  //   } else {
  //     // console.log('奇数です');
  //     $('body').css('background-image', 'url(images/cat@2x.jpg)');
  //   };

// 時間で変更する時、
  }, 1000);

  // 関数を定義する。上記全てコメントアウトし下記に貼り付け。
  // 時間を更新する関数
  // 巻き上げ：変数が下にあっても巻き上げの作業が起こってjavasqriptの機能で１番目に設定されていると判断される。
  function setTime(){
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const monthList = ['睦月', '如月', '弥生', '卯月', '皐月', '水無月', '文月', '葉月', '長月', '神無月', '霜月', '師走'];
    const monthStr = monthList[now.getMonth()];
    const date = now.getDate().toString().padStart(2, '0');
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    const weekList = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', ];
    const weekStr = weekList[now.getDay()];
    let ampm = 'AM';
    if (now.getHours() >= 12) {
      ampm = 'PM';
    }
    const ampmHour = (now.getHours() % 12).toString().padStart(2, '0'); //割った余りを表示される
    console.log(ampmHour);
    $('#hour').text(ampmHour);
    $('#minute').text(minute);
    $('#second').text(second);
    $('#year').text(year);
    $('#month').text(month);
    $('#date').text(date);
    $('#weekStr').text(weekStr);
    if ( now.getMinutes() % 2 === 0 ) {
      $('body').css('background-image', 'url(images/penguin@2x.jpg)');
    } else {
      $('body').css('background-image', 'url(images/cat@2x.jpg)');
    };
  };
});

// 画像を1時間ごとに変更。if文にはしなくて、画像の名前に〇〇1、〇〇2と名前を付けて時間+1で画像の変化を設定するとif文より短く書ける。
// $('body').css(('background-image' + 1), ('url(images/cat@2x.jpg)' + 1));
