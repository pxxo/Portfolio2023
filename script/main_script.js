const swiper = new Swiper(".swiper", {
    direction: "vertical" /* この行を追加 */,
    // ページネーションが必要なら追加
    pagination: {
        el: ".swiper-pagination"
    }
});