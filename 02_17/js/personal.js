;(function($,window,document,undefined){
    var personal = {
        init : function(){
            var that = this;
            that.headerFn();
            that.section1Fn();
        },
        headerFn : function(){
            var _window = $(window);
            var _header = $("#header");
            var _goTop  = $(".go-top");
            var _section1 = $("#section1");
            var _section1H = _section1.innerHeight();

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