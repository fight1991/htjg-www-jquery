$(function(){
  $(window).scroll(function() {
    var top=$(window).scrollTop()
    console.log(top)
    if (top > 100) {
      $('.fix-header-box').css({
        'opacity': 0
      })
    } else {
      $('.fix-header-box').css({
        'opacity': 1
      })
    }
  })
})