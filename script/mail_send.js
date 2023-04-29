var title = ""
var content = ""
//
document.getElementById('button').addEventListener('click', function () {
    title = document.getElementById('title').value;
    content = document.getElementById('content').value;
    if (title != "" && content != "") {
        alert("現在このフォームからのお問い合わせは受け付けておりません。" + "\n" + "ご用件のある方はTwitterよりお問い合わせください。");
    } else {
        alert("件名と内容をご確認の上、再度送信してください。");
    }
});
