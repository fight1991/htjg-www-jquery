$(function() {
  $('.pagination-box').pagination({
    dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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