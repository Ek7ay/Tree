  /*
    ����ͨ�� layui.use �ֶμ��ز�ͬ��ģ�飬ʵ�ֲ�ͬ�����ͬʱ��Ⱦ���Ӷ���֤��ͼ�Ŀ��ٳ���
  */
  //������
  layui.use(['table','element'], function(){
    var $ = layui.jquery
    ,table = layui.table
    ,element = layui.element; //Tab���л�����;
    

    table.render({
      elem: '#LAY-index-topSearch'
      ,height: 'full-200'
//    ,url: layui.setter.base + 'json/console/top-search.js' //ģ��ӿ�
      ,page: true
      ,cols: [[ //������
      	//{type:'checkbox'},//������ѡ
	      {field: 'ticket', title: '��������', width: 180, sort: true}
	      ,{field: 'recipientType', title: '����������', width: 120}
	      ,{field: 'recipientName', title: '����������', width: 120}
	      ,{field: 'ticketResult', title: '����������', width: 140}
	      ,{field: 'runningState', title: 'ִ��״̬', width: 140}
	      ,{field: 'runningName', title: 'ִ��������', width: 100}
	      ,{field: 'ticketNews', title: '����ʩ����Ϣ'}
	      ,{field: 'dateline', title: '����ʱ��',width:150}
	    ]]
      ,size:'sm'//���Ʊ����ʽ
      ,limit:'10'
      ,data: [{
		      "ticket": "�ɵ�"
		      ,"recipientType": "ϵͳ"
		      ,"recipientName": "IOM"
		      ,"ticketResult": "�ɹ�"
		      ,"runningState": "ִ�����"
		      ,"runningName": "ϵͳ"
		      ,"ticketNews": "����鿴��ϸ"
		      ,"dateline": "2018-09-01 12:21:34"
		    }] 
    })
});