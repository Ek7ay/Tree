  /*
    ����ͨ�� layui.use �ֶμ��ز�ͬ��ģ�飬ʵ�ֲ�ͬ�����ͬʱ��Ⱦ���Ӷ���֤��ͼ�Ŀ��ٳ���
  */
  //������
layui.use(['element','form','table','jqZtreeCore'], function(){
    var $ = layui.jquery
    ,table = layui.table
    ,form = layui.form
    ,jqZtreeCore = layui.jqZtreeCore
    ,element = layui.element; //Tab���л�����;
  
	//Ȩ�ޱ༭��
	var setting1 = {
		data: {
			simpleData: {
				enable: true
			}
		},
		check: {
	        enable: true,   //��ѡ���ѡ��
			autoCheckTrigger: true,   //�¼��ص�����
			chkStyle: "checkbox",   //��ѡ������(checkbox �� radio��
			chkboxType: { "Y": "", "N": "" }   //��ѡ checkbox ���ڸ��ӽڵ�Ĺ�����ϵ
    	},
    	callback: {}
	};
	
	var zNodes =[
		{ id:1, pId:0, name:"���ڵ�1 - չ��", open:true,noR:true},
		{ id:11, pId:1, name:"���ڵ�11 - �۵�"},
		{ id:111, pId:11, name:"Ҷ�ӽڵ�111"},
		{ id:112, pId:11, name:"Ҷ�ӽڵ�112"},
		{ id:113, pId:11, name:"Ҷ�ӽڵ�113"},
		{ id:114, pId:11, name:"Ҷ�ӽڵ�114"},
		{ id:12, pId:1, name:"���ڵ�12 - �۵�"},
		{ id:121, pId:12, name:"Ҷ�ӽڵ�121"},
		{ id:122, pId:12, name:"Ҷ�ӽڵ�122"},
		{ id:123, pId:12, name:"Ҷ�ӽڵ�123"},
		{ id:124, pId:12, name:"Ҷ�ӽڵ�124"},
		{ id:13, pId:1, name:"���ڵ�13 - û���ӽڵ�", isParent:true},
		{ id:3, pId:0, name:"���ڵ�3 - û���ӽڵ�", isParent:true}
	];
	
	//���Ķ����ɱ༭ѡ����
	$.fn.zTree.init($("#readTree"), setting1, zNodes);
	$.fn.zTree.init($("#editTree"), setting1, zNodes);
	
	
    table.render({
      elem: '#LAY-Auditing'
      ,height: 'full-200'
//    ,url: layui.setter.base + 'json/console/top-search.js' //ģ��ӿ�
      ,page: true
      ,cols: [[ //������
	      {field: 'id', title: '�����', width: 200, sort: true}
	      ,{field: 'username', title: '��˽��', minWidth: 120}
	      ,{field: 'email', title: '������', minWidth:200}
	      ,{field: 'sign', title: '���ʱ��', width: 140}
	    ]]
      ,skin: ''
      ,limit:'10'
      ,data: [{
	      "id": "CJ2018-03-23"
	      ,"username": "[�½���³ľ��]155-52-Ф·��ίԱ��-AP-960-1����"
	      ,"email": "T2���ϴ���"
	      ,"sign": "2018-04-23"
	    }]
    });
});