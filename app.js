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
    $('#F評価').attr('src', '../Family/img/5.svg');
  } else if (sum < 20) {
    console.log('診断3');
    $('#F評価').attr('src', '../Family/img/3.svg');
  } else if (sum < 30) {
    console.log('診断2');
    $('#F評価').attr('src', '../Family/img/2.svg');
  } else if (sum < 41) {
    console.log('診断1');
    $('#F評価').attr('src', '../Family/img/1.svg');
  }
  // 送信ボタンを押したら、値をdbに入れる ---お父さん--------------------------
  // $('#Fsave').on('click', function () {
    // Add a new document in collection "cities"
    db.collection('family').doc('father').set({
      src: $('#F評価').attr('src'),
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
    db.collection('family').doc('totalF').set({
      sum: sum,
      time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
    })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  // });


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
    $('#F評価').attr('src', '../Family/img/5.svg');
  } else if (sum < 20) {
    console.log('診断3');
    $('#F評価').attr('src', '../Family/img/3.svg');
  } else if (sum < 30) {
    console.log('診断2');
    $('#F評価').attr('src', '../Family/img/2.svg');
  } else if (sum < 41) {
    console.log('診断1');
    $('#F評価').attr('src', '../Family/img/1.svg');
  }

  // 送信ボタンを押したら、値をdbに入れる ---お母さん--------------------------
    // Add a new document in collection "cities"
    db.collection('family').doc('mother').set({
      src: $('#M評価').attr('src'),
      height: $('#Mheight').val(),
      weight: $('#Mweight').val(),
      sel1: $('#Msel1').val(),
      sel2: $('#Msel2').val(),
      sel3: $('#Msel3').val(),
      sel4: $('#Msel4').val(),
      sel5: $('#Msel5').val(),
      sel6: $('#Msel6').val(),
      sel7: $('#Msel7').val(),
      sel8: $('#Msel8').val(),
      sel9: $('#Msel9').val(),
      sel10: $('#Msel10').val(),
      time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
    })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
    db.collection('family').doc('totalM').set({
      sum: sum,
      time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
    })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });


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
    $('#F評価').attr('src', '../Family/img/5.svg');
  } else if (sum < 20) {
    console.log('診断3');
    $('#F評価').attr('src', '../Family/img/3.svg');
  } else if (sum < 30) {
    console.log('診断2');
    $('#F評価').attr('src', '../Family/img/2.svg');
  } else if (sum < 41) {
    console.log('診断1');
    $('#F評価').attr('src', '../Family/img/1.svg');
  }
    // Add a new document in collection "cities"
    db.collection('family').doc('child1').set({
      src: $('#C1評価').attr('src'),
      height: $('#C1height').val(),
      weight: $('#C1weight').val(),
      sel1: $('#C1sel1').val(),
      sel2: $('#C1sel2').val(),
      sel3: $('#C1sel3').val(),
      sel4: $('#C1sel4').val(),
      sel5: $('#C1sel5').val(),
      sel6: $('#C1sel6').val(),
      sel7: $('#C1sel7').val(),
      sel8: $('#C1sel8').val(),
      sel9: $('#C1sel9').val(),
      sel10: $('#C1sel10').val(),
      time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
    })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
    db.collection('family').doc('totalC1').set({
      sum: sum,
      time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
    })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
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
    $('#F評価').attr('src', '../Family/img/5.svg');
  } else if (sum < 20) {
    console.log('診断3');
    $('#F評価').attr('src', '../Family/img/3.svg');
  } else if (sum < 30) {
    console.log('診断2');
    $('#F評価').attr('src', '../Family/img/2.svg');
  } else if (sum < 41) {
    console.log('診断1');
    $('#F評価').attr('src', '../Family/img/1.svg');
  }
// 送信ボタンを押したら、値をdbに入れる ---子ども②--------------------------
  // Add a new document in collection "cities"
  db.collection('family').doc('child2').set({
    src: $('#C2評価').attr('src'),
    height: $('#C2height').val(),
    weight: $('#C2weight').val(),
    sel1: $('#C2sel1').val(),
    sel2: $('#C2sel2').val(),
    sel3: $('#C2sel3').val(),
    sel4: $('#C2sel4').val(),
    sel5: $('#C2sel5').val(),
    sel6: $('#C2sel6').val(),
    sel7: $('#C2sel7').val(),
    sel8: $('#C2sel8').val(),
    sel9: $('#C2sel9').val(),
    sel10: $('#C2sel10').val(),
    sum: sum,
    time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
  })
  .then(() => {
    console.log('Document successfully written!');
  })
  .catch((error) => {
    console.error('Error writing document: ', error);
  });
  db.collection('family').doc('totalC2').set({
    sum: sum,
    time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
  })
  .then(() => {
    console.log('Document successfully written!');
  })
  .catch((error) => {
    console.error('Error writing document: ', error);
  });
  
});











// 送信ボタンを押したら、値をdbに入れる ---お父さん--------------------------
// $('#Fsave').on('click', function () {
//   // Add a new document in collection "cities"
//   db.collection('family').doc('father').set({
//     src: $('#F評価').attr('src'),
//     height: $('#Fheight').val(),
//     weight: $('#Fweight').val(),
//     sel1: $('#Fsel1').val(),
//     sel2: $('#Fsel2').val(),
//     sel3: $('#Fsel3').val(),
//     sel4: $('#Fsel4').val(),
//     sel5: $('#Fsel5').val(),
//     sel6: $('#Fsel6').val(),
//     sel7: $('#Fsel7').val(),
//     sel8: $('#Fsel8').val(),
//     sel9: $('#Fsel9').val(),
//     sel10: $('#Fsel10').val(),
//     // sum: Fsum,
//     time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
//   })
//     .then(() => {
//       console.log('Document successfully written!');
//     })
//     .catch((error) => {
//       console.error('Error writing document: ', error);
//     });
// });
// 送信ボタンを押したら、値をdbに入れる ---お母さん--------------------------
// $('#Msave').on('click', function () {
//   // Add a new document in collection "cities"
//   db.collection('family').doc('mother').set({
//     src: $('#M評価').attr('src'),
//     height: $('#Mheight').val(),
//     weight: $('#Mweight').val(),
//     sel1: $('#Msel1').val(),
//     sel2: $('#Msel2').val(),
//     sel3: $('#Msel3').val(),
//     sel4: $('#Msel4').val(),
//     sel5: $('#Msel5').val(),
//     sel6: $('#Msel6').val(),
//     sel7: $('#Msel7').val(),
//     sel8: $('#Msel8').val(),
//     sel9: $('#Msel9').val(),
//     sel10: $('#Msel10').val(),
//     time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
//   })
//     .then(() => {
//       console.log('Document successfully written!');
//     })
//     .catch((error) => {
//       console.error('Error writing document: ', error);
//     });
// });
// 送信ボタンを押したら、値をdbに入れる ---子ども①--------------------------
// $('#C1save').on('click', function () {
//   // Add a new document in collection "cities"
//   db.collection('family').doc('child1').set({
//     src: $('#C1評価').attr('src'),
//     height: $('#C1height').val(),
//     weight: $('#C1weight').val(),
//     sel1: $('#C1sel1').val(),
//     sel2: $('#C1sel2').val(),
//     sel3: $('#C1sel3').val(),
//     sel4: $('#C1sel4').val(),
//     sel5: $('#C1sel5').val(),
//     sel6: $('#C1sel6').val(),
//     sel7: $('#C1sel7').val(),
//     sel8: $('#C1sel8').val(),
//     sel9: $('#C1sel9').val(),
//     sel10: $('#C1sel10').val(),
//     time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
//   })
//     .then(() => {
//       console.log('Document successfully written!');
//     })
//     .catch((error) => {
//       console.error('Error writing document: ', error);
//     });
// });
// 送信ボタンを押したら、値をdbに入れる ---子ども②--------------------------
// $('#C2save').on('click', function () {
//   // Add a new document in collection "cities"
//   db.collection('family').doc('child2').set({
//     src: $('#C2評価').attr('src'),
//     height: $('#C2height').val(),
//     weight: $('#C2weight').val(),
//     sel1: $('#C2sel1').val(),
//     sel2: $('#C2sel2').val(),
//     sel3: $('#C2sel3').val(),
//     sel4: $('#C2sel4').val(),
//     sel5: $('#C2sel5').val(),
//     sel6: $('#C2sel6').val(),
//     sel7: $('#C2sel7').val(),
//     sel8: $('#C2sel8').val(),
//     sel9: $('#C2sel9').val(),
//     sel10: $('#C2sel10').val(),
//     time: firebase.firestore.FieldValue.serverTimestamp(),// 登録日時
//   })
//     .then(() => {
//       console.log('Document successfully written!');
//     })
//     .catch((error) => {
//       console.error('Error writing document: ', error);
//     });
// });





// get() を使用して単一のドキュメントの内容を取得する----------お父さん----------------------------
const F_docRef = db.collection('family').doc('father');
const data_f = [];
F_docRef.get().then((doc) => {
  if (doc.exists) {
    // console.log('Document data:', doc.data());
    data_f.push(doc.data());
    // console.log(data_f[0].src);

    $('#F評価_top').attr('src', data_f[0].src);
    $('#F評価').attr('src', data_f[0].src);
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
  // $('#sel1').value(docRef.data.sel1);
});
// ---------------------------------お父さん---------------------------
// get() を使用して単一のドキュメントの内容を取得する----------お母さん----------------------------
const M_docRef = db.collection('family').doc('mother');
const data_M = [];
M_docRef.get().then((doc) => {
  if (doc.exists) {
    // console.log('Document data:', doc.data());
    data_M.push(doc.data());
    // console.log(data_M[0].src);
    $('#M評価_top').attr('src', data_M[0].src);
    $('#M評価').attr('src', data_M[0].src);
    $('#Mheight').val(data_M[0].height);
    $('#Mweight').val(data_M[0].weight);
    $('#Msel1').val(data_M[0].sel1);
    $('#Msel2').val(data_M[0].sel2);
    $('#Msel3').val(data_M[0].sel3);
    $('#Msel4').val(data_M[0].sel4);
    $('#Msel5').val(data_M[0].sel5);
    $('#Msel6').val(data_M[0].sel6);
    $('#Msel7').val(data_M[0].sel7);
    $('#Msel8').val(data_M[0].sel8);
    $('#Msel9').val(data_M[0].sel9);
    $('#Msel10').val(data_M[0].sel10);
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}).catch((error) => {
  console.log('Error getting document:', error);
  // $('#sel1').value(docRef.data.sel1);
});
// ---------------------------------お母さん---------------------------
// get() を使用して単一のドキュメントの内容を取得する----------子ども①----------------------------
const C1_docRef = db.collection('family').doc('child1');
const data_C1 = [];
C1_docRef.get().then((doc) => {
  if (doc.exists) {
    // console.log('Document data:', doc.data());
    data_C1.push(doc.data());
    // console.log(data_C1[0].src);
    $('#C1評価_top').attr('src', data_C1[0].src);
    $('#C1評価').attr('src', data_C1[0].src);
    $('#C1height').val(data_C1[0].height);
    $('#C1weight').val(data_C1[0].weight);
    $('#C1sel1').val(data_C1[0].sel1);
    $('#C1sel2').val(data_C1[0].sel2);
    $('#C1sel3').val(data_C1[0].sel3);
    $('#C1sel4').val(data_C1[0].sel4);
    $('#C1sel5').val(data_C1[0].sel5);
    $('#C1sel6').val(data_C1[0].sel6);
    $('#C1sel7').val(data_C1[0].sel7);
    $('#C1sel8').val(data_C1[0].sel8);
    $('#C1sel9').val(data_C1[0].sel9);
    $('#C1sel10').val(data_C1[0].sel10);
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}).catch((error) => {
  console.log('Error getting document:', error);
  // $('#sel1').value(docRef.data.sel1);
});
// ---------------------------------子ども①---------------------------
// get() を使用して単一のドキュメントの内容を取得する----------子ども②----------------------------
const C2_docRef = db.collection('family').doc('child2');
const data_C2 = [];
C2_docRef.get().then((doc) => {
  if (doc.exists) {
    // console.log('Document data:', doc.data());
    data_C2.push(doc.data());
    // console.log(data_C2[0].src);
    $('#C2評価_top').attr('src', data_C2[0].src);
    $('#C2評価').attr('src', data_C2[0].src);
    $('#C2height').val(data_C2[0].height);
    $('#C2weight').val(data_C2[0].weight);
    $('#C2sel1').val(data_C2[0].sel1);
    $('#C2sel2').val(data_C2[0].sel2);
    $('#C2sel3').val(data_C2[0].sel3);
    $('#C2sel4').val(data_C2[0].sel4);
    $('#C2sel5').val(data_C2[0].sel5);
    $('#C2sel6').val(data_C2[0].sel6);
    $('#C2sel7').val(data_C2[0].sel7);
    $('#C2sel8').val(data_C2[0].sel8);
    $('#C2sel9').val(data_C2[0].sel9);
    $('#C2sel10').val(data_C2[0].sel10);
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}).catch((error) => {
  console.log('Error getting document:', error);
  // $('#sel1').value(docRef.data.sel1);
});
// ---------------------------------子ども②---------------------------




const totalF_docRef = db.collection('family').doc('totalF');
const data_totalF = [];
totalF_docRef.get().then((doc) => {
  if (doc.exists) {
    data_totalF.push(doc.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}).catch((error) => {
  console.log('Error getting document:', error);
  // $('#sel1').value(docRef.data.sel1);
});

const totalM_docRef = db.collection('family').doc('totalM');
const data_totalM = [];
totalM_docRef.get().then((doc) => {
  if (doc.exists) {
    data_totalM.push(doc.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}).catch((error) => {
  console.log('Error getting document:', error);
  // $('#sel1').value(docRef.data.sel1);
});

const totalC1_docRef = db.collection('family').doc('totalC1');
const data_totalC1 = [];
totalC1_docRef.get().then((doc) => {
  if (doc.exists) {
    data_totalC1.push(doc.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}).catch((error) => {
  console.log('Error getting document:', error);
  // $('#sel1').value(docRef.data.sel1);
});

const totalC2_docRef = db.collection('family').doc('totalC2');
const data_totalC2 = [];
totalC2_docRef.get().then((doc) => {
  if (doc.exists) {
    data_totalC2.push(doc.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}).catch((error) => {
  console.log('Error getting document:', error);
  // $('#sel1').value(docRef.data.sel1);
});

// const family_tatal = data_totalF[0].sum + data_totalM[0].sum + data_totalC1[0].sum + data_totalC2[0].sum;

console.log("ファミリートータル" + family_tatal);
console.log("ファミリートータル" + data_totalF[0].sum);

// 判定----------------------
// 1点〜4点 10門 一番良い 10点 一番悪い 40点
if (sum < 13) {
  console.log('診断5');
  $('#F評価').attr('src', '../Family/img/5.svg');
} else if (sum < 20) {
  console.log('診断3');
  $('#F評価').attr('src', '../Family/img/3.svg');
} else if (sum < 30) {
  console.log('診断2');
  $('#F評価').attr('src', '../Family/img/2.svg');
} else if (sum < 41) {
  console.log('診断1');
  $('#F評価').attr('src', '../Family/img/1.svg');
}



$('#total').val(data_C2[0].sel5);
