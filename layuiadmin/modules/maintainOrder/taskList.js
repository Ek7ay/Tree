  /*
    ����ͨ�� layui.use �ֶμ��ز�ͬ��ģ�飬ʵ�ֲ�ͬ�����ͬʱ��Ⱦ���Ӷ���֤��ͼ�Ŀ��ٳ���
  */
  //������
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
	      {field: 'id', title: '�������', width: 180, sort: true}
	      ,{field: 'username', title: '��������', minWidth: 120}
	      ,{field: 'email', title: '��ǰ����', minWidth: 120}
	      ,{field: 'sign', title: '����Ҫ����ʱ��', width: 140}
	      ,{field: 'sex', title: '����Ҫ����ʱ��', width: 140}
	      ,{field: 'city', title: '�Ƿ�����', width: 100}
	      ,{field: 'experience', title: 'Ԥ�����', width: 80,templet: '#warnDemo', unresize: true,align:'center'}
	      ,{field: 'handle', title: '����',fixed: 'right', width:150, align:'center', toolbar: '#barDemo'} //�����toolbarֵ��ģ��Ԫ�ص�ѡ����
	    ]]
      ,skin: ''
//    ,size:'sm'//���Ʊ����ʽ
      ,limit:'10'
      ,data: [{
		      "id": "CJ2018-03-23"
		      ,"username": "[�½���³ľ��]155-52-Ф·��ίԱ��-AP-960-1����"
		      ,"email": "T2���ϴ���"
		      ,"sex": "2018-04-23"
		      ,"city": "��"
		      ,"sign": "2018-04-23"
		      ,"experience": ""
		    },
      	{
		      "id": "CJ2018-03-23"
		      ,"username": "[�½���³ľ��]155-52-Ф·��ίԱ��-AP-960-1����"
		      ,"email": "T2���ϴ���"
		      ,"sex": "2018-04-23"
		      ,"city": "��"
		      ,"sign": "2018-04-23"
		      ,"experience": ""
		    },
      	{
		      "id": "CJ2018-03-23"
		      ,"username": "[�½���³ľ��]155-52-Ф·��ίԱ��-AP-960-1����"
		      ,"email": "T2���ϴ���"
		      ,"sex": "2018-04-23"
		      ,"city": "��"
		      ,"sign": "2018-04-23"
		      ,"experience": ""
		    },
      	{
		      "id": "CJ2018-03-23"
		      ,"username": "[�½���³ľ��]155-52-Ф·��ίԱ��-AP-960-1����"
		      ,"email": "T2���ϴ���"
		      ,"sex": "2018-04-23"
		      ,"city": "��"
		      ,"sign": "2018-04-23"
		      ,"experience": ""
		    },
      	{
		      "id": "CJ2018-03-23"
		      ,"username": "[�½���³ľ��]155-52-Ф·��ίԱ��-AP-960-1����"
		      ,"email": "T2���ϴ���"
		      ,"sex": "2018-04-23"
		      ,"city": "��"
		      ,"sign": "2018-04-23"
		      ,"experience": ""
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
    //������Ԫ��༭
    table.on('edit(layTable)', function(obj){ //ע��edit�ǹ̶��¼�����test��tableԭʼ���������� lay-filter="��Ӧ��ֵ"
		  console.log(obj.value); //�õ��޸ĺ��ֵ
		  console.log(obj.field); //��ǰ�༭���ֶ���
		  console.log(obj.data); //�����е������������  
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
    //ˢ��
    $("#reloadTable").on("click",function(){
    	//��ǰҳ��ˢ��
    	$(".layui-laypage-btn")[0].click();
    })
    //��������
    $('.js-btn-show').on("click",function(){
    	if ($('.lay-popup-form').is(":hidden")) {
    		$('.lay-popup-form').show();
    	} else{
    		$('.lay-popup-form').hide()
    	}
    })
  });