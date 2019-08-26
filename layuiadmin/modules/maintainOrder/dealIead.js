
layui.use(['form','laydate','element','upload','layer','table'], function(){
	var $ = layui.jquery
		,element = layui.element;
		
		
		/**
		 * 单击列表单击: 改变样式
		 */
		var itemClickHandler = function(){
			$(this).parent('.item-box').find('.item').removeClass('selected-item');
			$(this).addClass('selected-item');
		}
		/**
		 * 左边列表项移至右边
		 */
		var leftMoveRight = function(){
			var spanVal = $(this).text(),
				strVal = $('#right-box .layui-textarea').val()+ spanVal;
				
			$('#right-box .layui-textarea').val(strVal);
		}
		/**
		 * 加为我的常用处理意见
		 */
		var rightMoveLeft = function(){
			var textVal = $('#right-box .layui-textarea').val();
			
			$('#left-box').append("<span class='item'>"+textVal+"</span>");
			initItemEvent();
		}

		/**
		 * 初始化列表项选择事件
		 */
		function initItemEvent(){
			// 左边列表项单击、双击事件
			$('#left-box').find('.item').unbind('click');
			$('#left-box').find('.item').unbind('dblclick');
			$('#left-box').find('.item').each(function(){
				$(this).on("click", itemClickHandler);
				$(this).on('dblclick', leftMoveRight);
			});
		}
		/**
		 * 初始化添加、移除、获取值按钮事件
		 */
		function initBtnEvent(){
			var leftBox = $('#left-box');
			var rightBox = $('#right-box');

			// 添加一项
			$('#add-one').on('click', function(){
				leftBox.find('.selected-item').trigger('dblclick'); // 触发双击事件
			});
			// 移除所有项
			$('#remove-all').on('click', function(){
				rightBox.find('.layui-textarea').val('');
			});
			//添加为我的处理意见
			$('#add-idea').on('click',rightMoveLeft);
			//删除我的处理意见
			$('#del-idea').on('click', function(){
				leftBox.find('.selected-item').remove();
			});
		}

		initItemEvent();
		initBtnEvent();	
})
		