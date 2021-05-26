// 家族合計
// const family_tatal = family_sumF + family_sumM + family_sumC1 + family_sumC2;
// console.log(family_tatal);





  // saveボタンを押したら合計点を出す---------------------
  // 質問を一つの配列にする
  // 文字を数字に変換

// お父さん-----------------------------------------------

$('#Fsave').on('click', function () {
  const array = [];
  let i = 1;
  while (i < 11) {
    const ans = Number($('#' + `Fsel${i}`).val());
    // console.log(ans);
    // console.log(typeof ans);
    array.push(ans);
    i++;
  }
  // console.log(array);

  // 配列の中身を足し算
  let sum = 0;
  let k = 0;
  while (k < array.length) {
    sum = sum + array[k];
    k++;
  }
  console.log(sum); //合計点

  // 判定----------------------
  // 1点〜4点 10門 一番良い 10点 一番悪い 40点
  
  if (sum < 13) {
    console.log('診断5');
    $('#F評価').children('img').attr('src', '../Family/img/5.svg');
  } else if (sum < 23) {
    console.log('診断4');
    $('#F評価').children('img').attr('src', '../Family/img/4.svg');
  } else if (sum < 28) {
    console.log('診断3');
    $('#F評価').children('img').attr('src', '../Family/img/3.svg');
  } else if (sum < 35) {
    console.log('診断2');
    $('#F評価').children('img').attr('src', '../Family/img/2.svg');
  } else if (sum < 41) {
    console.log('診断1');
    $('#F評価').children('img').attr('src', '../Family/img/1.svg');
  }
});

// お母さん-----------------------------------------------
$('#Msave').on('click', function () {
  const array = [];
  let i = 1;
  while (i < 11) {
    const ans = Number($('#' + `Msel${i}`).val());
    // console.log(ans);
    // console.log(typeof ans);
    array.push(ans);
    i++;
  }
  // console.log(array);

  // 配列の中身を足し算
  let sum = 0;
  let k = 0;
  while (k < array.length) {
    sum = sum + array[k];
    k++;
  }
  console.log(sum); //合計点
  const family_sumF = sum;

  // 判定----------------------
  // 1点〜4点 10門 一番良い 10点 一番悪い 40点
  if (sum < 13) {
    console.log('診断5');
    $('.評価').children('img').attr('src', '../Family/img/5.svg');
  } else if (sum < 23) {
    console.log('診断4');
    $('.評価').children('img').attr('src', '../Family/img/4.svg');
  } else if (sum < 28) {
    console.log('診断3');
    $('.評価').children('img').attr('src', '../Family/img/3.svg');
  } else if (sum < 35) {
    console.log('診断2');
    $('.評価').children('img').attr('src', '../Family/img/2.svg');
  } else if (sum < 41) {
    console.log('診断1');
    $('.評価').children('img').attr('src', '../Family/img/1.svg');
  }
});
// 子ども1-----------------------------------------------
$('#C1save').on('click', function () {
  const array = [];
  let i = 1;
  while (i < 11) {
    const ans = Number($('#' + `C1sel${i}`).val());
    // console.log(ans);
    // console.log(typeof ans);
    array.push(ans);
    i++;
  }
  // console.log(array);

  // 配列の中身を足し算
  let sum = 0;
  let k = 0;
  while (k < array.length) {
    sum = sum + array[k];
    k++;
  }
  console.log(sum); //合計点
  const family_sumF = sum;

  // 判定----------------------
  // 1点〜4点 10門 一番良い 10点 一番悪い 40点
  if (sum < 13) {
    console.log('診断5');
    $('.評価').children('img').attr('src', '../Family/img/5.svg');
  } else if (sum < 23) {
    console.log('診断4');
    $('.評価').children('img').attr('src', '../Family/img/4.svg');
  } else if (sum < 28) {
    console.log('診断3');
    $('.評価').children('img').attr('src', '../Family/img/3.svg');
  } else if (sum < 35) {
    console.log('診断2');
    $('.評価').children('img').attr('src', '../Family/img/2.svg');
  } else if (sum < 41) {
    console.log('診断1');
    $('.評価').children('img').attr('src', '../Family/img/1.svg');
  }
});
// 子ども2-----------------------------------------------
$('#C2save').on('click', function () {
  const array = [];
  let i = 1;
  while (i < 11) {
    const ans = Number($('#' + `C2sel${i}`).val());
    // console.log(ans);
    // console.log(typeof ans);
    array.push(ans);
    i++;
  }
  // console.log(array);

  // 配列の中身を足し算
  let sum = 0;
  let k = 0;
  while (k < array.length) {
    sum = sum + array[k];
    k++;
  }
  console.log(sum); //合計点
  const family_sumF = sum;

  // 判定----------------------
  // 1点〜4点 10門 一番良い 10点 一番悪い 40点
  if (sum < 13) {
    console.log('診断5');
    $('.評価').children('img').attr('src', '../Family/img/5.svg');
  } else if (sum < 23) {
    console.log('診断4');
    $('.評価').children('img').attr('src', '../Family/img/4.svg');
  } else if (sum < 28) {
    console.log('診断3');
    $('.評価').children('img').attr('src', '../Family/img/3.svg');
  } else if (sum < 35) {
    console.log('診断2');
    $('.評価').children('img').attr('src', '../Family/img/2.svg');
  } else if (sum < 41) {
    console.log('診断1');
    $('.評価').children('img').attr('src', '../Family/img/1.svg');
  }
});



























// The core Firebase JS SDK is always required and must be listed first




// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// Your web app's Firebase configuration



// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBr-SK7_M-dnsl7MRCFzyPk-vyyAizUe28",
  authDomain: "family210525.firebaseapp.com",
  projectId: "family210525",
  storageBucket: "family210525.appspot.com",
  messagingSenderId: "442599796881",
  appId: "1:442599796881:web:c321b054ffa7d95fc74f30"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// cloud firestoreの場所を定義 4人分
// var db_f = firebase.firestore().collection('father')
// var db_m = firebase.firestore().collection('mother')
// var db_c1 = firebase.firestore().collection('child1')
// var db_c2 = firebase.firestore().collection('child2')
firebase.analytics();

var db = firebase.firestore();

// 日時をいい感じの形式にする関数
function convertFromFirestoreTimestampToDatetime(timestamp) {
  const _d = timestamp ? new Date(timestamp * 1000) : new Date();
  const Y = _d.getFullYear();
  const m = (_d.getMonth() + 1).toString().padStart(2, '0');
  const d = _d.getDate().toString().padStart(2, '0');
  const H = _d.getHours().toString().padStart(2, '0');
  const i = _d.getMinutes().toString().padStart(2, '0');
  const s = _d.getSeconds().toString().padStart(2, '0');
  return `${Y}/${m}/${d} ${H}:${i}:${s}`;
}

// 送信ボタンを押したら、値をdbに入れる--------------------------
$('#Fsave').on('click', function () {
  // Add a new document in collection "cities"
  db.collection('family').doc('father').set({

    height: $('#Fheight').val(),
    weight: $('#Fweight').val(),
    sel1: $('#Fsel1').val(),
    sel2: $('#Fsel2').val(),
    sel3: $('#Fsel3').val(),
    sel4: $('#Fsel4').val(),
    sel5: $('#Fsel5').val(),
    sel6: $('#Fsel6').val(),
    sel7: $('#Fsel7').val(),
    sel8: $('#Fsel8').val(),
    sel9: $('#Fsel9').val(),
    sel10: $('#Fsel10').val(),
    time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
  })
    .then(() => {
      console.log('Document successfully written!');
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
});

// get() を使用して単一のドキュメントの内容を取得する

const docRef = db.collection('family').doc('father');
const data_f = [];
docRef.get().then((doc) => {
  if (doc.exists) {
    console.log('Document data:', doc.data());
    data_f.push(doc.data());
    // console.log(data_f[0].Fsel1);


    $('#Fheight').val(data_f[0].height);
    $('#Fweight').val(data_f[0].weight);

    $('#Fsel1').val(data_f[0].sel1);
    $('#Fsel2').val(data_f[0].sel2);
    $('#Fsel3').val(data_f[0].sel3);
    $('#Fsel4').val(data_f[0].sel4);
    $('#Fsel5').val(data_f[0].sel5);
    $('#Fsel6').val(data_f[0].sel6);
    $('#Fsel7').val(data_f[0].sel7);
    $('#Fsel8').val(data_f[0].sel8);
    $('#Fsel9').val(data_f[0].sel9);
    $('#Fsel10').val(data_f[0].sel10);
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}).catch((error) => {
  console.log('Error getting document:', error);
});
// $('#sel1').value(docRef.data.sel1);


  // const data = {
  //   // nameはfirebaseのフィールド名
  //   height: $('#height').val(),
  //   weight: $('#weight').val(),
  //   sel1: $('#sel1').val(),
  //   sel2: $('#sel2').val(),
  //   sel3: $('#sel3').val(),
  //   sel4: $('#sel4').val(),
  //   sel5: $('#sel5').val(),
  //   sel6: $('#sel6').val(),
  //   sel7: $('#sel7').val(),
  //   sel8: $('#sel8').val(),
  //   sel9: $('#sel9').val(),
  //   sel10: $('#sel10').val(),
  //   time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
  // };
  // // dbにデータを入れる
  // db_f.add(data);
  // 空白にする
  // $('#text').val('');

// $('#sel1').value(dataArray[dataArray.length - 1].data.sel1);



// // 単一のドキュメントを作成または上書きするには、set()

// //  データ受信処理のコード    最後に保存したデータを取得する-----------------------------------
// // snapshotの中、docに欲しい物が入ってる。
// // onSnapshot オンライン上のデータベースでデータの追加・削除・変更が行われたタイミングで{}内が動いてリアルタイムに反映できる
// // querySnapshot chat10の中身全部が入っているところ
// db_f.orderBy('time', 'asc').onSnapshot(function (querySnapshot) {
//   const dataArray = [];
//   // docの中の下記が欲しいからforEachでdocの回数分処理する
//   querySnapshot.docs.forEach(function (doc) {
//     // data→name, text, timeやらが入ってる
//     // ↑２つを dataオブジェクトにする
//     const data = {
//       // id→ドキュメント名（ランダム英数字のやつ）
//       id: doc.id,
//       // data()の中には配列dataのname,text,timeのが入っている
//       data: doc.data(),
//     };
//     // dataオブジェクトをdataArray配列(javasprictの形の配列)に追加(修正や変更はpushじゃない）
//     dataArray.push(data);
//   });
//   console.log(dataArray);
//   console.log(dataArray[dataArray.length - 1].data.sel1);
//   db_f_last.add(dataArray);

// });


// $("#sel1").val(dataArray[dataArray.length - 1].data.sel1);

// イベント名	イベントを発生させるタイミング	取得が推奨されるパラメータ	パラメータ説明
// login	ユーザーがログインしたとき	method	ログイン方法（Email Address、Goog

// 最終データをwebを開いた時に反映させる
// データは空っぽではない設定
  // $('#sel1').value(dataArray[dataArray.length - 1].data.sel1);















