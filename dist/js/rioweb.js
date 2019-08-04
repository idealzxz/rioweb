if($(window).width()>991){
	$(".fhNav").hover(function(){},function(){
		$(".bottomLine").css("width",parseFloat($(".selectedNav").eq(0).width())+"px");
		$(".bottomLine").css("left",parseFloat($(".selectedNav").eq(0)[0].offsetLeft)+"px");
	})
	$(".nav li").hover(function(){
		$(".bottomLine").css("width",parseFloat($(this).width())+"px");
		$(".bottomLine").css("left",parseFloat($(this)[0].offsetLeft)+"px");
	});
	$(".nav li").on("click",function(){
		$(".nav li").removeClass("selectedNav");
		$(this).addClass("selectedNav");
		$(".bottomLine").css("width",parseFloat($(this).width())+"px");
		$(".bottomLine").css("left",parseFloat($(this)[0].offsetLeft)+"px");
	})

}

$(".hamburger").click(function(){
	$(this).toggleClass("is-active");
});

var certifySwiper = new Swiper('#certify .swiper-container', {
	watchSlidesProgress: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,autoplay:true,
	loopedSlides: 5,
	autoplay: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		//clickable :true,
	},
	on: {
		progress: function(progress) {
			for (i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i);
				var slideProgress = this.slides[i].progress;
				modify = 1;
				if (Math.abs(slideProgress) > 1) {
					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
				}
				translate = slideProgress * modify * 260 + 'px';
				scale = 1 - Math.abs(slideProgress) / 5;
				zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
				slide.css('zIndex', zIndex);
				slide.css('opacity', 1);
				if (Math.abs(slideProgress) > 3) {
					slide.css('opacity', 0);
				}
			}
		},
		setTransition: function(transition) {
			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i)
				slide.transition(transition);
			}

		}
	}

})
