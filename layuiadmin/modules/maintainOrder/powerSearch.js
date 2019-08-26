  /*
    ����ͨ�� layui.use �ֶμ��ز�ͬ��ģ�飬ʵ�ֲ�ͬ�����ͬʱ��Ⱦ���Ӷ���֤��ͼ�Ŀ��ٳ���
  */
  //�߼����� ����
  layui.use(['table','element','laydate','form','upload','layer','laytpl'], function(){
    var $ = layui.jquery
    ,table = layui.table
    ,upload = layui.upload
    ,laytpl = layui.laytpl
    ,form = layui.form
    ,laydate = layui.laydate
    ,element = layui.element; //Tab���л�����;
    
    var startDate = laydate.render({//��Ⱦ��ʼʱ��ѡ��  
            elem: '#starDate',//ͨ��id��html�в����start
            done: function (value, dates) {                     
                endDate.config.min ={  
	                 year:dates.year,   
	                 month:dates.month-1, //�ؼ�  
	                 date: dates.date,   
                };      
            }  
        });  
   	var endDate= laydate.render({//��Ⱦ����ʱ��ѡ��  
        elem: '#endDate',//ͨ��id��html�в����end  
        done: function (value, dates) {  
            startDate.config.max={  
                year:dates.year,   
                month:dates.month-1,//�ؼ�   
                date: dates.date,   
        }  
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
	      {field: 'taskType', title: '��������', width: 180, sort: true}
	      ,{field: 'taskTitle', title: '��������', minWidth: 120}
	      ,{field: 'currentLink', title: '��ǰ����', minWidth: 120}
	      ,{field: 'taskTime', title: '����Ҫ����ʱ��', width: 150}
	      ,{field: 'linkTime', title: '����Ҫ����ʱ��', width: 150}
	      ,{field: 'case', title: '�Ƿ�����', width: 100}
	    ]]
      ,skin: ''
//    ,size:'sm'//���Ʊ����ʽ
      ,limit:'10'
      ,data: [{
		      "taskType": "���ϴ���"
		      ,"taskTitle": "[�½���³ľ��]155-52-Ф·��ίԱ��-AP-960-1����"
		      ,"currentLink": "T2���ϴ���"
		      ,"taskTime": "2018-04-23"
		      ,"linkTime": "2018-04-23"
		      ,"case": "��"
		    },
      	{
		      "taskType": "���ϴ���"
		      ,"taskTitle": "[�½���³ľ��]155-52-Ф·��ίԱ��-AP-960-1����"
		      ,"currentLink": "T2���ϴ���"
		      ,"taskTime": "2018-04-23"
		      ,"linkTime": "2018-04-23"
		      ,"case": "��"
		    },
      	{
		      "taskType": "���ϴ���"
		      ,"taskTitle": "[�½���³ľ��]155-52-Ф·��ίԱ��-AP-960-1����"
		      ,"currentLink": "T2���ϴ���"
		      ,"taskTime": "2018-04-23"
		      ,"linkTime": "2018-04-23"
		      ,"case": "��"
		    },
      	{
		      "taskType": "���ϴ���"
		      ,"taskTitle": "[�½���³ľ��]155-52-Ф·��ίԱ��-AP-960-1����"
		      ,"currentLink": "T2���ϴ���"
		      ,"taskTime": "2018-04-23"
		      ,"linkTime": "2018-04-23"
		      ,"case": "��"
		    },
      	{
		      "taskType": "���ϴ���"
		      ,"taskTitle": "[�½���³ľ��]155-52-Ф·��ίԱ��-AP-960-1����"
		      ,"currentLink": "T2���ϴ���"
		      ,"taskTime": "2018-04-23"
		      ,"linkTime": "2018-04-23"
		      ,"case": "��"
		    }]
    });
    		 
    //������ѡ��ѡ��
    table.on('checkbox(layTable)', function(obj){
		  console.log(obj.checked); //��ǰ�Ƿ�ѡ��״̬
		  console.log(obj.data); //ѡ���е��������
		  console.log(obj.type); //�����������ȫѡ����Ϊ��all������������ǵ�ѡ����Ϊ��one
		});
		
		//��������
    form.on('submit(LAY-user-front-search)', function(data){
      var field = data.field;
      console.log(field)
      //ִ������
      table.reload('LAY-index-topSearch', {
        where: field
      });
    });
    
  });