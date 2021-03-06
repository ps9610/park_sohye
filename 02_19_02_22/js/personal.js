// copyright 리얼타임 년도 설정하기
const copyright = document.querySelector(".copyright");

//console.log("dd");
//console.log(copyright.innerHTML); 연결 잘 됐는지 확인하기

if (copyright.innerHTML.indexOf("©")) {
  const array = copyright.innerHTML.split("©"); 
  const today = new Date(); //현재 년,월,일 다 가져오는 함수
  const year = today.getFullYear(); //현재 년도만 가져옴
  copyright.innerHTML = array[0] + "© " + year + array[1];
    //console.log(copyright.innerHTML);
} else {
  console.log("not found © symbol");
}

;(function($,window,document,undefined){
    var personal = {
        init : function(){
            var that = this;
            that.headerFn();
            that.section1Fn();
            that.section2Fn();
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
            var _delta = null;
            var _wheelEvent = $(".wheel_event");

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
                //휠마우스 이벤트
                /* _wheelEvent.each(function(idx){
                    var _this = $(this);
                    _this.on("mousewheel DOMMouseScroll",function(e){
                        e.preventDefault();
                        if(e.detail){
                            _delta = e.detail*(-40);
                        }
                        else{
                            _delta = e.originalEvent.wheelDelta;
                        }

                            if(_delta<0){//스크롤 내리면
                                _header.addClass("addWheel");
                            }
                            else{//스크롤 올리면 
                                _header.removeClass("addWheel");
                            }
                    })
                }) */
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
        },

        section2Fn : function(){
            var _titleBtn = $(".title-btn1");
            var _rightContent1= $(".right-content1");
            var t = false;

            _titleBtn.on("click", function(){
                if( t===false ){
                    t=true;
                    var _this = $(this);
                    _this.removeClass("addUp");
                    _this.addClass("addDown");
                    _rightContent1.css({ marginTop : -161 });
                }
                else{
                    t=false;
                    console.log(t);
                    var _this = $(this);
                    _this.removeClass("addDown");
                    _this.addClass("addUp");
                    _rightContent1.css({ marginTop :0 });
                }
                
            })
        }
    }
    personal.init();
})(jQuery,window,document);