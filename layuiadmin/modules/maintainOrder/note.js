  /*
    下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
  */

layui.use(['form','element','tree', 'layer','table'], function(){
	var $ = layui.jquery
		,form = layui.form
		,table = layui.table
		,tree = layui.tree
		,element = layui.element
    ,layer = layui.layer;
    	
    table.render({
      elem: '#LAY-note-search'
      ,height: '315'
//    ,url: layui.setter.base + 'json/console/top-search.js' //模拟接口
      ,page: true
      ,cols: [[ //标题栏
      	{type:'checkbox'},//开启多选
	      {field: 'phone', title: '电话号码', width: 120}
	      ,{field: 'name', title: '联系人', width: 150}
	      ,{field: 'team', title: '组织'}
	    ]]
      ,skin: 'line'
      ,size:'sm'//控制表格样式
      ,limit:'10'
      ,id:'phoneTest'//选择号码 操作必须要有
      ,data: [{
		      "phone": "18399283472"
		      ,"name": "赵磊"
		      ,"team": "中移铁通塔城维护中心托里维护站"
		    }]
    });
    
    layui.tree({
	    elem: '#layui-tree' //指定元素
	    ,target: '_blank' //是否新选项卡打开（比如节点返回href才有效）
	    ,click: function(item){ //点击节点回调
	      layer.msg('当前节名称：'+ item.name + '<br>全部参数：'+ JSON.stringify(item));
	      console.log(item);
	    }
    	,nodes: [ //节点
      {
        name: '常用文件夹'
        ,id: 1
        ,alias: 'changyong'
        ,children: [
          {
            name: '所有未读（设置跳转）'
            ,id: 11
            ,href: 'http://www.layui.com/'
            ,alias: 'weidu'
          }, {
            name: '置顶邮件'
            ,id: 12
          }, {
            name: '标签邮件'
            ,id: 13
          }
        ]
      }, {
        name: '我的邮箱'
        ,id: 2
        ,spread: true
        ,children: [
          {
            name: 'QQ邮箱'
            ,id: 21
            ,spread: true
            ,children: [
              {
                name: '收件箱'
                ,id: 211
                ,children: [
                  {
                    name: '所有未读'
                    ,id: 2111
                  }, {
                    name: '置顶邮件'
                    ,id: 2112
                  }, {
                    name: '标签邮件'
                    ,id: 2113
                  }
                ]
              }, {
                name: '已发出的邮件'
                ,id: 212
              }, {
                name: '垃圾邮件'
                ,id: 213
              }
            ]
          }, {
            name: '阿里云邮'
            ,id: 22
            ,children: [
              {
                name: '收件箱'
                ,id: 221
              }, {
                name: '已发出的邮件'
                ,id: 222
              }, {
                name: '垃圾邮件'
                ,id: 223
              }
            ]
          }
        ]
      }]
  });
  //监听表格复选框选择
  table.on('checkbox(demo)', function(obj){
    console.log(obj)
  });
	/* 触发弹层 */
	var active = {
		pbadmin: function(){//管理电话簿
	    
	 	},
	  phoneBook: function(){//选择电话簿
	    
	  },
	  choice: function(){//选择号码
      var checkStatus = table.checkStatus('phoneTest')
      ,data = checkStatus.data;
      layer.alert(JSON.stringify(data));
	  }      
	};
	$('#layui-note .layui-btn').on('click', function(){
	  var type = $(this).data('type');
	  active[type] && active[type].call(this);
	});
})