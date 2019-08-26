  /*
    ����ͨ�� layui.use �ֶμ��ز�ͬ��ģ�飬ʵ�ֲ�ͬ�����ͬʱ��Ⱦ���Ӷ���֤��ͼ�Ŀ��ٳ���
  */
  //������
layui.use(['table','element', 'layer'], function(){
    var $ = layui.jquery
    ,table = layui.table
    ,element = layui.element; //Tab���л�����;
    
    //��������
    table.render({
      elem: '#LAY-index-topSearch'
      ,height: 400
//    ,url: layui.setter.base + 'json/console/top-search.js' //ģ��ӿ�
      ,page: true
      ,cols: [[ //������
	      {field: 'id', title: 'ID', width: 80, sort: true}
	      ,{field: 'username', title: '�û���', width: 120}
	      ,{field: 'email', title: '����', minWidth: 150}
	      ,{field: 'sign', title: 'ǩ��', minWidth: 160}
	      ,{field: 'sex', title: '�Ա�', width: 80}
	      ,{field: 'city', title: '����', width: 100}
	      ,{field: 'experience', title: '����', width: 80, sort: true}
	    ]]
      ,skin: 'line'
      ,size:'sm'//���Ʊ����ʽ
      ,limit:'10'
      ,data: [{
		      "id": "10001"
		      ,"username": "�Ÿ�"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "��"
		      ,"city": "�㽭����"
		      ,"sign": "����ǡ��һ������"
		      ,"experience": "116"
		      ,"ip": "192.168.0.8"
		      ,"logins": "108"
		      ,"joinTime": "2016-10-14"
		    }, {
		      "id": "10002"
		      ,"username": "���"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "��"
		      ,"city": "�㽭����"
		      ,"sign": "����ǡ��һ������"
		      ,"experience": "12"
		      ,"ip": "192.168.0.8"
		      ,"logins": "106"
		      ,"joinTime": "2016-10-14"
		      ,"LAY_CHECKED": true
		    },{
		      "id": "10001"
		      ,"username": "�Ÿ�"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "��"
		      ,"city": "�㽭����"
		      ,"sign": "����ǡ��һ������"
		      ,"experience": "116"
		      ,"ip": "192.168.0.8"
		      ,"logins": "108"
		      ,"joinTime": "2016-10-14"
		    }, {
		      "id": "10002"
		      ,"username": "���"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "��"
		      ,"city": "�㽭����"
		      ,"sign": "����ǡ��һ������"
		      ,"experience": "12"
		      ,"ip": "192.168.0.8"
		      ,"logins": "106"
		      ,"joinTime": "2016-10-14"
		      ,"LAY_CHECKED": true
		    },{
		      "id": "10001"
		      ,"username": "�Ÿ�"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "��"
		      ,"city": "�㽭����"
		      ,"sign": "����ǡ��һ������"
		      ,"experience": "116"
		      ,"ip": "192.168.0.8"
		      ,"logins": "108"
		      ,"joinTime": "2016-10-14"
		    }, {
		      "id": "10002"
		      ,"username": "���"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "��"
		      ,"city": "�㽭����"
		      ,"sign": "����ǡ��һ������"
		      ,"experience": "12"
		      ,"ip": "192.168.0.8"
		      ,"logins": "106"
		      ,"joinTime": "2016-10-14"
		      ,"LAY_CHECKED": true
		    },{
		      "id": "10001"
		      ,"username": "�Ÿ�"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "��"
		      ,"city": "�㽭����"
		      ,"sign": "����ǡ��һ������"
		      ,"experience": "116"
		      ,"ip": "192.168.0.8"
		      ,"logins": "108"
		      ,"joinTime": "2016-10-14"
		    }, {
		      "id": "10002"
		      ,"username": "���"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "��"
		      ,"city": "�㽭����"
		      ,"sign": "����ǡ��һ������"
		      ,"experience": "12"
		      ,"ip": "192.168.0.8"
		      ,"logins": "106"
		      ,"joinTime": "2016-10-14"
		      ,"LAY_CHECKED": true
		    },{
		      "id": "10001"
		      ,"username": "�Ÿ�"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "��"
		      ,"city": "�㽭����"
		      ,"sign": "����ǡ��һ������"
		      ,"experience": "116"
		      ,"ip": "192.168.0.8"
		      ,"logins": "108"
		      ,"joinTime": "2016-10-14"
		    }, {
		      "id": "10002"
		      ,"username": "���"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "��"
		      ,"city": "�㽭����"
		      ,"sign": "����ǡ��һ������"
		      ,"experience": "12"
		      ,"ip": "192.168.0.8"
		      ,"logins": "106"
		      ,"joinTime": "2016-10-14"
		      ,"LAY_CHECKED": true
		    }]
      ,done: function(res, curr, count){
      	var $mylist = $("#LAY-index-topSearch").next('.layui-table-view').find('table.layui-table');
				$mylist.dblclick(function(event){
					alert($(event.target).closest("tr")[0].outerHTML)
				});
      }
    });
    //��ӳ��ù���
    $('.js-add-btn').on("click",function(){
    	layer.open({
    		title:'��ӳ��ù���'
        ,type: 2
        ,area: ['320px', '340px']//���
        ,content: '../maintainOrder/comTree.html'
        ,btn: '�ر�'
        ,btnAlign: 'c' //��ť����
        ,shade: 0 //����ʾ����
        ,yes: function(){
          layer.closeAll();
        }
     });
    })
    
    //�����ù���
    $("#manageBtn").on("click",function(){
    	$(this).addClass('none').siblings("#fulfillBtn").removeClass('none');
			var editHtml='';
    		
     	$('.js-manage .manage-a').each(function(i,e){
			    var manText = $(this).text();
						editHtml= "<span class='editInput'><input type='text' value='" + manText + "' /><i class='layui-icon layui-del'>&#x1006;</i></span>";
			    		
			    $('.manageBox').append(editHtml);
			    $(this).remove();
			});
			$('.js-add-btn').hide();
			$(".layui-del").on('click',function(){
	    	$(this).parent().remove();
	    })
    });
    $("#fulfillBtn").on("click",function(){
    	$(this).addClass('none').siblings("#manageBtn").removeClass('none');
			var editHtml='';
    		
     	$('.js-manage .editInput input').each(function(i,e){
			    var iptVal = $(this).val();
						editHtml= "<a class='manage-a' lay-href='javascript:;'>" + iptVal + "</a>";
			    		
			    $('.manageBox').append(editHtml);
			    $(this).parent('.editInput').remove();
			});
			$('.js-add-btn').show();
    });
    
  });