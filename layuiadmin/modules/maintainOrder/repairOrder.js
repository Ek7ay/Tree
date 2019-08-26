  /*
    下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
  */
  //待办表格
layui.use(['table','element', 'layer'], function(){
    var $ = layui.jquery
    ,table = layui.table
    ,element = layui.element; //Tab的切换功能;
    
    //标题内容模板
	  var tplTitle = function(d){
//	    return '<a lay-href="../home/detail.html?id='+ d.id +'" class="layui-table-link">'+ d.title;'</a>'
	    return '<a lay-href="maintainOrder/taskList.html" class="layui-table-link">详情页面示例</a>'
	  };
    
    table.render({
      elem: '#LAY-index-topSearch'
      ,height: '333'
      ,totalRow: true
//    ,url: layui.setter.base + 'json/console/top-search.js' //模拟接口
      ,cols: [[ //标题栏
	      {field: 'orderType', title: '单据类型',maxWidth: 160,templet:tplTitle,totalRowText: '合计'}
	      ,{field: 'tache', title: '环节', width: 160}
	      ,{field: 'backlog', title: '待办',width: 70,templet: '#backlog', unresize: true,align:'center', totalRow: true}
	      ,{field: 'early', title: '预警', width: 70,templet: '#early', unresize: true,align:'center',totalRow: true}
	      ,{field: 'overtime', title: '超时', width: 70,templet: '#overtime', unresize: true,align:'center', totalRow: true}
	    ]]
      ,skin: 'line'
      ,size:'sm'//控制表格样式
      ,data: [{
		      "orderType": "集团客户接口单"
		      ,"tache": "资源确认归档  待回复"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      		{
		      "orderType": "集团客户接口单"
		      ,"tache": "资源确认归档  待回复"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      		{
		      "orderType": "集团客户接口单"
		      ,"tache": "资源确认归档  待回复"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      {
		      "orderType": "集团客户接口单"
		      ,"tache": "资源确认归档  待回复"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      		{
		      "orderType": "集团客户接口单"
		      ,"tache": "资源确认归档  待回复"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      		{
		      "orderType": "集团客户接口单"
		      ,"tache": "资源确认归档  待回复"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      {
		      "orderType": "集团客户接口单"
		      ,"tache": "资源确认归档  待回复"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      		{
		      "orderType": "集团客户接口单"
		      ,"tache": "资源确认归档  待回复"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      		{
		      "orderType": "集团客户接口单"
		      ,"tache": "资源确认归档  待回复"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    }]
      ,done: function(res, curr, count){
      	var $mylist = $("#LAY-index-topSearch").next('.layui-table-view').find('table.layui-table');
			$mylist.dblclick(function(event){
				alert($(event.target).closest("tr")[0].outerHTML)
			});
      }
    });
    
    //刷新
    $("#reloadTable").on("click",function(){
    	//当前页的刷新
    	
    })
    
    
  });