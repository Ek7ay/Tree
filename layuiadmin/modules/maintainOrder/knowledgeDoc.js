  /*
    ����ͨ�� layui.use �ֶμ��ز�ͬ��ģ�飬ʵ�ֲ�ͬ�����ͬʱ��Ⱦ���Ӷ���֤��ͼ�Ŀ��ٳ���
  */
  //������
  layui.use(['element','form','layer','tree','table'], function(){
    var $ = layui.jquery
    ,layer = layui.layer
    ,form = layui.form
    ,tree = layui.tree
    ,table = layui.table
    ,element = layui.element; //Tab���л�����;
    
    layui.tree({
		  elem: '#treeDemo'
		  ,nodes: [{ //�ڵ�����
		    name: 'WLAN�豸������Ϣ�ϱ�'
		    ,children: [{
		      name: '�ڵ�A1'
		      ,spread: true //չ��
		    }]
		  },{
		    name: 'Ӧ��ͨ�Ź���'
		    ,spread: true //չ��
		    ,children: [{
		      name: '�ڵ�B1'
		      ,alias: 'bb' //��ѡ
		      ,id: '123' //��ѡ
		    }, {
		      name: '�ڵ�B2'
		    }]
		  },{
		    name: '֪ʶ�ĵ�����'
		    ,spread: true //չ��
		    ,children: [{
		      name: '����ָ��'
		      ,spread: true //չ��
		      ,alias: 'bb' //��ѡ
		      ,id: '123' //��ѡ
		    }, {
		      name: 'EMOS��������'
		    }]
		  }] 
		  ,click: function(node){
		    console.log(node) //node��Ϊ��ǰ����Ľڵ�����
		    layer.msg(node);
		  }  
		});
    
    table.render({
      elem: '#LAY-index-topSearch'
      ,height: 'full-200'
//    ,url: layui.setter.base + 'json/console/top-search.js' //ģ��ӿ�
	  	,page: { //֧�ִ��� laypage ��������в�����ĳЩ�������⣬�磺jump/elem�� - ����ĵ�
		      layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'] //�Զ����ҳ����
		      //,curr: 5 //�趨��ʼ�ڵ� 5 ҳ
		      ,groups: 5 //ֻ��ʾ 5 ������ҳ��
		      ,first: true //��ʾ��ҳ
		      ,last: true //��ʾβҳ
			}
//    ,page: true
      ,cols: [[ //������
      	{type:'checkbox'},//������ѡ
	      {field: 'title', title: '����', minWidth: 180}
	      ,{field: 'username', title: '����', width: 120}
	      ,{field: 'creater', title: '������', width: 120}
	      ,{field: 'branch', title: '����', width: 120}
	      ,{field: 'state', title: '�ĵ�״̬', width: 100}
	      ,{field: 'creatTime', title: '����ʱ��', width: 140}
	      ,{field: 'handle', title: '����',fixed: 'right', width:80, align:'center', toolbar: '#barDemo'} //�����toolbarֵ��ģ��Ԫ�ص�ѡ����
	    ]]
      ,skin: ''
//    ,size:'sm'//���Ʊ����ʽ
      ,limit:'10'
      ,data: [{
		      "title": "[�½���³ľ��]155-52-Ф·��ίԱ��"
		      ,"username": "����"
		      ,"creater": "����"
		      ,"branch": "�½����´�"
		      ,"state": "δ����"
		      ,"creatTime": "2018-04-23"
		    },{
		      "title": "[�½���³ľ��]155-52-Ф·��ίԱ��"
		      ,"username": "����"
		      ,"creater": "����"
		      ,"branch": "�½����´�"
		      ,"state": "δ����"
		      ,"creatTime": "2018-04-23"
		    },{
		      "title": "[�½���³ľ��]155-52-Ф·��ίԱ��"
		      ,"username": "����"
		      ,"creater": "����"
		      ,"branch": "�½����´�"
		      ,"state": "δ����"
		      ,"creatTime": "2018-04-23"
		    },{
		      "title": "[�½���³ľ��]155-52-Ф·��ίԱ��"
		      ,"username": "����"
		      ,"creater": "����"
		      ,"branch": "�½����´�"
		      ,"state": "δ����"
		      ,"creatTime": "2018-04-23"
		    },{
		      "title": "[�½���³ľ��]155-52-Ф·��ίԱ��"
		      ,"username": "����"
		      ,"creater": "����"
		      ,"branch": "�½����´�"
		      ,"state": "δ����"
		      ,"creatTime": "2018-04-23"
		    },{
		      "title": "[�½���³ľ��]155-52-Ф·��ίԱ��"
		      ,"username": "����"
		      ,"creater": "����"
		      ,"branch": "�½����´�"
		      ,"state": "δ����"
		      ,"creatTime": "2018-04-23"
		    },{
		      "title": "[�½���³ľ��]155-52-Ф·��ίԱ��"
		      ,"username": "����"
		      ,"creater": "����"
		      ,"branch": "�½����´�"
		      ,"state": "δ����"
		      ,"creatTime": "2018-04-23"
		    }]
    });
    //����������
	table.on('tool(layTable)', function(obj){ //ע��tool�ǹ������¼�����test��tableԭʼ���������� lay-filter="��Ӧ��ֵ"
	  var data = obj.data; //��õ�ǰ������
	  var layEvent = obj.event; //��� lay-event ��Ӧ��ֵ��Ҳ�����Ǳ�ͷ�� event ������Ӧ��ֵ��
	  var tr = obj.tr; //��õ�ǰ�� tr ��DOM����
	 
		  if(layEvent === 'del'){ //ɾ��
					layer.confirm('���ɾ����ô', function(index){
					  obj.del(); //ɾ����Ӧ�У�tr����DOM�ṹ�������»���
					  layer.close(index);
					  //�����˷���ɾ��ָ��
			    });
		  } else if(layEvent === 'edit'){ //�༭
				//do something
		
				//ͬ�����»����Ӧ��ֵ
				obj.update({
				  username: '123'
				  ,title: 'xxx'
				});
			}
		});
    //������ѡ��ѡ��
    table.on('checkbox(layTable)', function(obj){
		  console.log(obj.checked); //��ǰ�Ƿ�ѡ��״̬
		  console.log(obj.data); //ѡ���е��������
		  console.log(obj.type); //�����������ȫѡ����Ϊ��all������������ǵ�ѡ����Ϊ��one
		});
    /* �������� */
    var active = {
      choice: function(){
        layer.open({
          type: 2,
          title: 'ѡ����',
          shadeClose: true,
          shade: 0.8,
          area: ['375px', '500px'],
          content: 'http://www.layui.com/'
        }); 
      }
    };
    
    
    $('#LAY-addTaskList .js_choice').on('click', function(){
      var type = $(this).data('type');
      active[type] && active[type].call(this);
    });
    //��������
    $('.js-btn-show').on("click",function(){
    	if ($('.lay-popup-form').is(":hidden")) {
    		$('.lay-popup-form').show();
    	} else{
    		$('.lay-popup-form').hide()
    	}
    })
  });