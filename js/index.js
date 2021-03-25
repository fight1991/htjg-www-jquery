$(function() {

  // 需求:
  // 1. 在进入对应屏幕时, 给对应屏幕加上 now 类
  // 2. 离开屏幕时, 需要将now类移除, (直接通过加类的时候排他去掉即可)
  // 初始化
  $('.box').fullpage({
    // 配置每屏的颜色
    sectionsColor: ['#004CA0', '#103674', '#004CA0', '#103674', '#004CA0'],
    // 配置内容不垂直居中
    verticalCentered: false,
    // 导航
    navigation: true,
    // afterLoad: 在完全进入某一屏幕时触发, index标记第几屏, 从1开始

    // afterLoad 动态维护一个 now 类, 进入对应屏幕时, 会加上now类
    afterLoad: function( a, index ) {
      // 在进入对应屏幕时, 给对应屏幕加上 now 类, 移除其他屏幕的 now 类
      // 注意: index拿到的1开始的, eq里面设置的是索引,0开始的
      $('.section').eq(index-1).addClass("now").siblings().removeClass("now");
    }
  });


})