$(function() {
  $('.pagination-box').pagination({
    dataSource: [1, 2, 3, 4, 5],
    prevText: '上一页',
    nextText: '下一页',
    pageSize: 5,
    callback: function(data, pagination) {
        // template method of yourself
        // var html = template(data);
        // dataContainer.html(html);
    }
  })
})