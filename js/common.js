$(function(){
  var $root = $("html,body");
  var $backTop = $('.back-top');
  var $fixHeaderBox = $('.fix-header-box');
  // 动态设置html根字体大小
  // getCurrentFontSize();
  // window.addEventListener('resize', function () {
  //   getCurrentFontSize();
  // })
  // 初始化视口动画
  $('.aniview').AniView({
    animateThreshold: 100,
    scrollPollInterval: 20
  });
  // 返回顶部按钮的显示与隐藏
  $(window).scroll(function() {
    var top = $(window).scrollTop();
    top > 200 ? $backTop.fadeIn() : $backTop.fadeOut();
    if (top > 100) {
      $fixHeaderBox.css({
        'opacity': 0
      });
    } else {
      $fixHeaderBox.css({
        'opacity': 1
      });
    }
  })
  // 点击按钮返回
  $backTop.click(function(){
    $root.animate({scrollTop:0},500);
    top = 0;
  });
  // 如果有锚点添加动画
  var hash = location.hash
  if (hash) {
    var $hash = $(hash);
    var pos = $hash.offset().top;
    $root.animate({ scrollTop: pos - 30 }, 1000);
  }




  // 动态设置根字体大小函数
  function getCurrentFontSize () {
    $html = document.querySelector('html');
    $html.style.fontSize = (document.documentElement.clientWidth / 1920) * 100 +'px';
    console.log($html.style.fontSize)
  }
})
