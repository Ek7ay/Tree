  /*
    ����ͨ�� layui.use �ֶμ��ز�ͬ��ģ�飬ʵ�ֲ�ͬ�����ͬʱ��Ⱦ���Ӷ���֤��ͼ�Ŀ��ٳ���
  */
  //������
layui.use(['table','element', 'layer'], function(){
    var $ = layui.jquery
    ,table = layui.table
    ,element = layui.element; //Tab���л�����;
    
    //��������ģ��
	  var tplTitle = function(d){
//	    return '<a lay-href="../home/detail.html?id='+ d.id +'" class="layui-table-link">'+ d.title;'</a>'
	    return '<a lay-href="maintainOrder/taskList.html" class="layui-table-link">����ҳ��ʾ��</a>'
	  };
    
    table.render({
      elem: '#LAY-index-topSearch'
      ,height: '333'
      ,totalRow: true
//    ,url: layui.setter.base + 'json/console/top-search.js' //ģ��ӿ�
      ,cols: [[ //������
	      {field: 'orderType', title: '��������',maxWidth: 160,templet:tplTitle,totalRowText: '�ϼ�'}
	      ,{field: 'tache', title: '����', width: 160}
	      ,{field: 'backlog', title: '����',width: 70,templet: '#backlog', unresize: true,align:'center', totalRow: true}
	      ,{field: 'early', title: 'Ԥ��', width: 70,templet: '#early', unresize: true,align:'center',totalRow: true}
	      ,{field: 'overtime', title: '��ʱ', width: 70,templet: '#overtime', unresize: true,align:'center', totalRow: true}
	    ]]
      ,skin: 'line'
      ,size:'sm'//���Ʊ����ʽ
      ,data: [{
		      "orderType": "���ſͻ��ӿڵ�"
		      ,"tache": "��Դȷ�Ϲ鵵  ���ظ�"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      		{
		      "orderType": "���ſͻ��ӿڵ�"
		      ,"tache": "��Դȷ�Ϲ鵵  ���ظ�"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      		{
		      "orderType": "���ſͻ��ӿڵ�"
		      ,"tache": "��Դȷ�Ϲ鵵  ���ظ�"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      {
		      "orderType": "���ſͻ��ӿڵ�"
		      ,"tache": "��Դȷ�Ϲ鵵  ���ظ�"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      		{
		      "orderType": "���ſͻ��ӿڵ�"
		      ,"tache": "��Դȷ�Ϲ鵵  ���ظ�"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      		{
		      "orderType": "���ſͻ��ӿڵ�"
		      ,"tache": "��Դȷ�Ϲ鵵  ���ظ�"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      {
		      "orderType": "���ſͻ��ӿڵ�"
		      ,"tache": "��Դȷ�Ϲ鵵  ���ظ�"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      		{
		      "orderType": "���ſͻ��ӿڵ�"
		      ,"tache": "��Դȷ�Ϲ鵵  ���ظ�"
		      ,"backlog": "12"
		      ,"early": "33"
		      ,"overtime": "1"
		    },
      		{
		      "orderType": "���ſͻ��ӿڵ�"
		      ,"tache": "��Դȷ�Ϲ鵵  ���ظ�"
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
    
    //ˢ��
    $("#reloadTable").on("click",function(){
    	//��ǰҳ��ˢ��
    	
    })
    
    
  });