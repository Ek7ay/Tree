  /*
    ����ͨ�� layui.use �ֶμ��ز�ͬ��ģ�飬ʵ�ֲ�ͬ�����ͬʱ��Ⱦ���Ӷ���֤��ͼ�Ŀ��ٳ���
  */
  //������
  layui.use(['element','laydate','form','upload','layer','laytpl'], function(){
    var $ = layui.jquery
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
    
    //ָ�������ϴ����ļ�����
    upload.render({
      elem: '#test-upload-type1'
      ,url: '/upload/'
      ,accept: 'file' //��ͨ�ļ�
      ,done: function(res){
        console.log(res)
      }
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
      },
      executor: function(){
        layer.open({
          type: 2,
          title: 'ѡ�������',
          shadeClose: true,
          shade: 0.5,
          area: ['555px', '90%'],
          content: 'executor.html',
          btn: ['ȷ��','ȡ��'],
          yes: function(index, layero){
		        var iframeWin = window[layero.find('iframe')[0]['name']]; //�õ�iframeҳ�Ĵ��ڶ���ִ��iframeҳ�ķ�����iframeWin.method();
            //������Ȩ�ύ����
            var flag = iframeWin.doSetSelectedNode();
            return flag;
			    },
			    btn2: function(index){
		        layer.close(index);
			    }
        }); 
      },
      powerSearch: function(){
        layer.open({
          type: 2,
          title: '�߼���ѯ',
          shadeClose: true,
          shade: 0.5,
          area: ['80%', '500px'],
          content: 'powerSearch.html'
          ,btn: ['ȷ��']
          ,yes: function(index){
          	//do someing
            layer.close(index);
            
          }
        }); 
      }
    };
    
    
    $('#LAY-addTaskList .js_choice').on('click', function(){
      var type = $(this).data('type');
      active[type] && active[type].call(this);
    });
    
  });