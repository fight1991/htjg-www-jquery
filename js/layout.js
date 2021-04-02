$(function () {
  $('.aniview').AniView({
    animateThreshold: 100,
    scrollPollInterval: 20
  });
  var $tab = $('.features-tab-left')
  var $tabContent = $('.features-tab-right-item')
  $tab.click(function (e) {
    var currLi = e.target;
    $(currLi).addClass('current-show').siblings().removeClass("current-show");
    var currentIndex = $(currLi).data('index');
    if (typeof currentIndex === 'number') {
      $tabContent.eq(currentIndex).addClass('show').siblings().removeClass('show')
    }
  })
})