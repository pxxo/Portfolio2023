var title = ""
var content = ""

document.getElementById('button').addEventListener('click', function () {
    title = document.getElementById('title').value;
    content = document.getElementById('content').value;
    if (title != "" && content != "") {
        console.log(title);
        console.log(content);
    } else {
        alert("件名と内容をご確認の上、再度送信してください。");
    }
});