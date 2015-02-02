// Adding effect of smooth scrolling back to top of the page
$(".back-to-top").click(function () {
    $('body').animate({ scrollTop:$("#brand").offset().top}, 1500);
});
