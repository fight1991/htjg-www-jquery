$(function() {

  // 需求:
  // 1. 在进入对应屏幕时, 给对应屏幕加上 now 类
  // 2. 离开屏幕时, 需要将now类移除, (直接通过加类的时候排他去掉即可)
  // 初始化
  $('.box').fullpage({
    // 配置每屏的颜色
    sectionsColor: ['#004CA0', '#103674', '#004CA0', '#0F3574', '#004EA0', '#0F3574'],
    navigationTooltips: ['智慧交通新生态的引领者', '关于我们', '智慧交通生态布局', '城市级智慧停车解决方案', '人车生活服务平台解决方案', '新闻资讯'],
    // 配置内容不垂直居中
    verticalCentered: false,
    // 导航
    navigation: true,
    // navigationColor: 'red',
    // 左右滑块的箭头的背景颜色
    controlArrowColor: 'rgba(255,255,255,.6)',
    // afterLoad: 在完全进入某一屏幕时触发, index标记第几屏, 从1开始

    // afterLoad 动态维护一个 now 类, 进入对应屏幕时, 会加上now类
    afterLoad: function( a, index ) {
      // 在进入对应屏幕时, 给对应屏幕加上 now 类, 移除其他屏幕的 now 类
      // 注意: index拿到的1开始的, eq里面设置的是索引,0开始的
      $('.section').eq(index-1).addClass("now").siblings().removeClass("now");
    }
  });

  // 初始化swiper
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,//可选选项，自动滑动
    autoHeight: true,
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slideToClickedSlide: true,
  })
})