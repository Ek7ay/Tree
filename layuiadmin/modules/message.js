/**

 @Name：layuiAdmin（iframe版） 消息中心
 @Author：贤心
 @Site：http://www.layui.com/admin/
 @License：LPPL
    
 */


layui.define(['admin', 'table', 'util'], function(exports){
  var $ = layui.$
  ,admin = layui.admin
  ,table = layui.table
  ,element = layui.element;
  
  var DISABLED = 'layui-btn-disabled'
  
  //区分各选项卡中的表格
//,tabs = {
//  all: {
//    text: '全部消息'
//    ,id: 'LAY-app-message-all'
//  }
//  ,notice: {
//    text: '通知'
//    ,id: 'LAY-app-message-notice'
//  }
//  ,direct: {
//    text: '私信'
//    ,id: 'LAY-app-message-direct'
//  }
//};
  
  //标题内容模板
  var tplTitle = function(d){
    return '<a href="detail.html?id='+ d.id +'">'+ d.title;
  };
  
  //全部消息
  table.render({
    elem: '#LAY-app-message-all'
    ,url: layui.setter.base + 'json/message/all.js' //模拟接口
    ,page: true
    ,cols: [[
//    {type: 'checkbox', fixed: 'left'},
      {field: 'title', title: '标题内容', minWidth: 300, templet: tplTitle}
      ,{field: 'time', title: '时间', width: 170, templet: '<div>{{ layui.util.timeAgo(d.time) }}</div>'}
    ]]
    ,skin: 'line'
  });
  
  
  exports('message', {});
});