var moving;
var vm = new Vue({
    el: "#app",
    data: {
    	intervel: 2000,
    },
    methods: {
    	/**
		 * 向上滚动效果
		 * @param {Object} rollContainer 滚动区域
		 * @param {Object} interval 滚动间隔时间
		 */
    	rollTop: function (rollContainer, interval) {
	    	rollContainer.hover(function () {
		        clearInterval(moving);//当鼠标在滚动区域中时,停止滚动
		    }, function () {
		    	clearInterval(moving);//当鼠标在滚动区域中时,停止滚动
		    	moving = null;
		        moving=setInterval(function () {
		            var field = rollContainer.find('.item:first'); //此变量不可放置于函数起始处,li:first取值是变化的
		            var h=field.height();//取得每次滚动高度
		            field.animate({marginTop: -h + 'px'}, 600, function () {//通过取负margin值,隐藏第一行
		                field.css('marginTop', 0).appendTo(rollContainer);//隐藏后,将该行的margin值置零,并插入到最后,实现无缝滚动
		            })
		        },interval)//滚动间隔时间取决于_interval
		    }).trigger('mouseleave');//函数载入时,模拟执行mouseleave,即自动滚动
		   
		    
		},
		/**
		 * 开始滚动操作
		 */
		startRoll: function () {
			var that = this;
			var wrap = $('.content');
			if (that.intervel) {
				that.rollTop(wrap, that.intervel);
			}
		}
    }
});



