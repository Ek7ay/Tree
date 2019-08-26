  /*
    ����ͨ�� layui.use �ֶμ��ز�ͬ��ģ�飬ʵ�ֲ�ͬ�����ͬʱ��Ⱦ���Ӷ���֤��ͼ�Ŀ��ٳ���
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
//    ,url: layui.setter.base + 'json/console/top-search.js' //ģ��ӿ�
      ,page: true
      ,cols: [[ //������
      	{type:'checkbox'},//������ѡ
	      {field: 'phone', title: '�绰����', width: 120}
	      ,{field: 'name', title: '��ϵ��', width: 150}
	      ,{field: 'team', title: '��֯'}
	    ]]
      ,skin: 'line'
      ,size:'sm'//���Ʊ����ʽ
      ,limit:'10'
      ,id:'phoneTest'//ѡ����� ��������Ҫ��
      ,data: [{
		      "phone": "18399283472"
		      ,"name": "����"
		      ,"team": "������ͨ����ά����������ά��վ"
		    }]
    });
    
    layui.tree({
	    elem: '#layui-tree' //ָ��Ԫ��
	    ,target: '_blank' //�Ƿ���ѡ��򿪣�����ڵ㷵��href����Ч��
	    ,click: function(item){ //����ڵ�ص�
	      layer.msg('��ǰ�����ƣ�'+ item.name + '<br>ȫ��������'+ JSON.stringify(item));
	      console.log(item);
	    }
    	,nodes: [ //�ڵ�
      {
        name: '�����ļ���'
        ,id: 1
        ,alias: 'changyong'
        ,children: [
          {
            name: '����δ����������ת��'
            ,id: 11
            ,href: 'http://www.layui.com/'
            ,alias: 'weidu'
          }, {
            name: '�ö��ʼ�'
            ,id: 12
          }, {
            name: '��ǩ�ʼ�'
            ,id: 13
          }
        ]
      }, {
        name: '�ҵ�����'
        ,id: 2
        ,spread: true
        ,children: [
          {
            name: 'QQ����'
            ,id: 21
            ,spread: true
            ,children: [
              {
                name: '�ռ���'
                ,id: 211
                ,children: [
                  {
                    name: '����δ��'
                    ,id: 2111
                  }, {
                    name: '�ö��ʼ�'
                    ,id: 2112
                  }, {
                    name: '��ǩ�ʼ�'
                    ,id: 2113
                  }
                ]
              }, {
                name: '�ѷ������ʼ�'
                ,id: 212
              }, {
                name: '�����ʼ�'
                ,id: 213
              }
            ]
          }, {
            name: '��������'
            ,id: 22
            ,children: [
              {
                name: '�ռ���'
                ,id: 221
              }, {
                name: '�ѷ������ʼ�'
                ,id: 222
              }, {
                name: '�����ʼ�'
                ,id: 223
              }
            ]
          }
        ]
      }]
  });
  //�������ѡ��ѡ��
  table.on('checkbox(demo)', function(obj){
    console.log(obj)
  });
	/* �������� */
	var active = {
		pbadmin: function(){//����绰��
	    
	 	},
	  phoneBook: function(){//ѡ��绰��
	    
	  },
	  choice: function(){//ѡ�����
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