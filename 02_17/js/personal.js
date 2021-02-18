const copyright = document.querySelector(".copyright");

console.log("dd");
console.log(copyright.innerHTML);

if (copyright.innerHTML.indexOf("©")) {
  const array = copyright.innerHTML.split("©");
  const today = new Date();   
  const year = today.getFullYear();
  copyright.innerHTML = array[0] + "© " + year + array[1];
    console.log(copyright.innerHTML);
} else {
  console.log("not found © symbol");
}


;(function($,window,document,undefined){
    var personal = {
        init : function(){
            var that = this;
            that.headerFn();
            that.section1Fn();
        },
        headerFn : function(){
            var _window = $(window);
            var _winH = _window.innerHeight();
            var _header = $("#header");
            var _goTop  = $(".go-top");
            var _section1 = $("#section1");
            var _section1H = _section1.innerHeight();
            var _smoothBtn = $(".smooth-btn");
            var url = null;
            var _html = $("html");
            var _htmlBody = $("html, body");
            var _mobileBtn = $(".mobile-btn");
            var _mMenu = $(".mobile-menu");
            var _closeBtn = $(".close-btn");

            //scrolling
            _window.scroll(function(){
                var _this = $(this);
                //header
                if( _this.scrollTop() > _section1H-60 ){
                    _header.addClass("addHeader");
                }
                else{
                    _header.removeClass("addHeader");
                }
                //go-top
                if( _this.scrollTop() > 30 ){
                    _goTop.addClass("addGotop");
                }
                else{
                    _goTop.removeClass("addGotop");
                }
            })

            //smooth-scrolling
            _smoothBtn.on({
                click : function(e){
                    e.preventDefault();
                    var _this = $(this);
                    url =  _this.attr("href");
                    _htmlBody.stop().animate({ scrollTop : $(url).offset().top },800,"easeInOutQuint")
                }
            })

            //모바일 버튼 토글
            _mobileBtn.on({
                click : function(e){
                    e.preventDefault();
                    _mMenu.show();
                    _html.addClass("addScroll");
                }
            })
            _closeBtn.on({
                click : function(e){
                    e.preventDefault()
                    _mMenu.hide();
                    _html.removeClass("addScroll");
                }
            })

            //모바일 메뉴 높이 설정
            setTimeout(resizeFn,10);
            function resizeFn(){
                _mMenu.css({ height:_winH })
            }

            _window.resize(function(){
                resizeFn()
            })

        },
        section1Fn : function(){
            var cnt = 0;
            var _window = $(window);
            var _windowW = _window.innerWidth();
            var _windowH = _window.innerHeight();
            var _section1 = $("#section1");
            var _section1H = _section1.innerHeight();
            var _slideContainer = _section1.find(".slide-container");
            var _slideWrap = _section1.find(".slide-wrap");
            var _slide = _section1.find(".slide");
            var _slideW = _slide.innerWidth();
            var n = _slide.length;
            var _prevBtn = _section1.find(".prev-btn");
            var _nextBtn = _section1.find(".next-btn");

            //반응형 넓이 설정
            setTimeout(resizeFn,10);
            function resizeFn(){
                _windowW = _window.innerWidth();
                _section1H = _windowH;
                _slideW = _windowW;
                _section1.css({ height : _section1H });
                _slide.css({ width : _slideW });
                _slideWrap.css({ width : (_slideW*n)});

                _slideWrap.stop().animate({ left: -(_slideW*cnt) },500);
                mainSlideFn();
            }
            
            _window.resize(function(){
                resizeFn();
            });

            //슬라이드
            function mainSlideFn(){
                _slideWrap.stop().animate({ left: -(_slideW*cnt) },500);
                console.log(_slideW);
                
            };
            function nextCountSlideFn(){
                cnt++;
                if( cnt>n-1 ){ cnt=n-1 };
                mainSlideFn();
            };
            function prevCountSlideFn(){
                cnt--;
                if( cnt<0 ){ cnt=0 };
                mainSlideFn();
            };

            _nextBtn
            .on({
                click : function(e){
                    e.preventDefault();
                    if( !_slideWrap.is(":animated") ){
                        nextCountSlideFn();
                    }
                }
            });
            _prevBtn
            .on({
                click : function(e){
                    e.preventDefault();
                    if( !_slideWrap.is(":animated") ){
                        prevCountSlideFn();
                    }
                } 
            });
            _slideContainer
            .swipe({
                swipeLeft : function(){
                    if( !_slideWrap.is(":animated") ){
                        nextCountSlideFn();
                    }
                },
                swipeRight : function(){
                    if( !_slideWrap.is(":animated") ){
                        prevCountSlideFn();
                    }
                }
            });
        }
    }
    personal.init();
})(jQuery,window,document);