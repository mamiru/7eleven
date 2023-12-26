
<script>    
//<!-- fullPage.js 스크립트를 CDN에서 불러옵니다. -->
new fullpage('#fullpage', {
    autoScrolling: true,  // 자동 스크롤 기능 활성화
    scrollHorizontally: true,  // 수평 스크롤 활성화
    navigation: true,  // 내비게이션 (점 또는 버튼)을 표시하여 사용자가 스크롤 위치를 선택할 수 있게 함
});


	    $(document).ready(function(){
			$(".banner_slider").slick({
				autoplay:false, 
				infinite: true,
				slidesToShow:5, 
				dots:false,
				arrows:true, 
				speed:500,
				focusOnSelect: true,
				centerMode: true, /*홀수*/
                centerPadding: '120px',
				prevArrow:$("#BtnPrev"),
				nextArrow:$("#BtnNext"),
			});
	    });
</script>
