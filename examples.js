//Grayscale 메뉴 마우스오버시 이미지 흑백처리
var GrayScaleFix = (function() {
	var needToFix = /(MSIE 10)|(Trident.*rv:11\.0)|( Edge\/[\d\.]+$)/.test(navigator.userAgent);

	function replaceImage(image) {
		var tmpImage = new Image();
		tmpImage.onload = function() {
			var imgWrapper = document.createElement('span'),
				svgTemplate = 
				'<svg xmlns="http://www.w3.org/2000/svg" id="svgroot" viewBox="0 0 '+tmpImage.width+' '+tmpImage.height+'" width="100%" height="100%">' +
					'<defs>' +
					'<filter id="gray">' +
						'<feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0" />' +
					'</filter>' +
					'</defs>' +
					'<image filter="url(&quot;#gray&quot;)" x="0" y="0" width="'+tmpImage.width+'" height="'+tmpImage.height+'" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+tmpImage.src+'" />' +
				'</svg>';
			
			imgWrapper.innerHTML = svgTemplate;
			imgWrapper.className = 'grayscale-fix';
			image.parentNode.insertBefore(imgWrapper, image);

			image.style.cssText += 'visibility:hidden;display:block';
			imgWrapper.querySelector('svg').style.position = 'absolute';
			imgWrapper.style.cssText = 'display:inline-block;position:relative;';
			imgWrapper.appendChild(image);
		};
		tmpImage.src = image.src;
	}

	function replaceAll() {
		var images = document.querySelectorAll('img.grayscale');
		for(var i = 0; i < images.length; i++) {
			replaceImage(images[i]);
		}
	}

	if(needToFix) {
		document.addEventListener('DOMContentLoaded', replaceAll);
	}

	return {
		replace: replaceImage,
		refresh: replaceAll
	};
}());

$(function() {
    $("#top").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});

$(function(){
    $(".gnb>.lang_switch").mouseenter(function(){
        $(this).toggleClass("active");
    });
    $(".gnb>.lang_switch").mouseleave(function(){
        $(this).toggleClass("active");
    });
  });
  
  $(function(){
    $(".submenu>.sublang_switch").mouseenter(function(){
        $(this).toggleClass("active");
    });
    $(".submenu>.sublang_switch").mouseleave(function(){
        $(this).toggleClass("active");
    });
  });
  

  $(function(){
    $(".section.brand>.text-box_wrap>.text-box").mouseenter(function(){
        $(this).toggleClass("active");
    });
    $(".section.brand>.text-box_wrap>.text-box").mouseleave(function(){
        $(this).toggleClass("active");
    });
  });

    
  $(function(){
    $(".submenu>.sublang_switch").mouseenter(function(){
        $(this).addClass("grayout");
    });
    $(".submenu>.sublang_switch").mouseleave(function(){
        $(this).addClass("grayscale");
    });
  });
  
    $(".gnb>li").mouseenter(function(){
        let index = $(this).index();
        $(".sub_box").stop().slideDown();
        $(".sub_box>ul").eq(index).show().siblings("ul").hide(500);
    });

    $(".sub_box").mouseleave(function(){
        let index = $(this).index();
        $(".sub_box").slideUp(100);
        $(".sub_box>ul").eq(index).hide().siblings("ul").hide(300);
    });

    
    $(".language>span").click(function(){
        let index = $(this).index();
        $(".language > li").stop().slideDown();
        $(".language > li").eq(index).show().siblings("ul").hide(500);
    });

    $(".info_area").mouseleave(function(){
        let index = $(this).index();
        $(".language > li").stop().slideUp();
        $(".language > li").eq(index).show().siblings("ul").hide(500);
    });


    $(".mobileView.action--open > .icon--menu").click(function(){
        let index = $(this).index();
        $("#ml-menu").stop().slideUp();
        $("#ml-menu").eq(index).show().siblings("mo_wrap").hide(300);
    });

    $(".mobileView.action--close").click(function(){
        let index = $(this).index();
        $("#ml-menu").stop().slideDown();
        $("#ml-menu").eq(index).stop().hide(300);
    });

    $(".bxslider").bxSlider({
          auto: true, /* 자동재생 */
          speed: 300, /* 이미지 넘어가는 속도 transition duration */
          pager: true, /* 도트 출력 false */
          controls: true, /* 화살표 출력 */
          captions: false /* 이미지 타이틀 속성 텍스트 하단에 출력 */
      });

      const top_btn = document.getElementById('top_btn');

      const checkScroll=()=>{
      
          let pageOffset = window.pageYOffset;
          if(pageYOffset !== 0){
              top_btn.classList.add('show');  
          }else{
              top_btn.classList.remove('show'); 
          }
      }
      
      const movetop_btn=()=>{
          if(window.pageYOffset > 0 ){
              window.scrollTo({top:0, behavior:"smooth"});
          }
      }
      
      window.addEventListener('scroll', checkScroll);
      top_btn.addEventListener('click',moveTop_btn);