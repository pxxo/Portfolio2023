// スムーススクロールの対象となるリンクをすべて取得
const smoothScrollLinks = $('a[href^="#"]');

// リンクがクリックされたときの処理
smoothScrollLinks.on('click', function (e) {
    // デフォルトのスクロール処理を無効化
    e.preventDefault();

    // スクロール先の要素を取得
    const targetEl = $($(this).attr('href'));

    // スクロール先の要素が存在しない場合は処理を中断
    if (!targetEl.length) return;

    // アニメーションでスクロール位置を滑らかに変更
    $('html, body').animate({
        scrollTop: targetEl.offset().top
    }, 1000);
});