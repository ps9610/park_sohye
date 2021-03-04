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
                that.section3Fn();
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
            var _titleBtn1 = $("#section2 .title-btn1");
            var _titleBtn2 = $("#section2 .title-btn2");
            var _rightContent1= $("#section2 .right-content1");
            var _rightContent2= $("#section2 .right-content2");
            var t = false;

            _titleBtn1.on("click", function(){
                if( t===false ){
                    t=true;
                    var _this = $(this);
                    _this.removeClass("addUp");
                    _this.addClass("addDown");
                    _rightContent1.stop().animate({ marginTop : -161 },500);
                }
                else{
                    t=false;
                    console.log(t);
                    var _this = $(this);
                    _this.removeClass("addDown");
                    _this.addClass("addUp");
                    _rightContent1.stop().animate({ marginTop :0 },500);
                }
                
            })
            _titleBtn2.on("click", function(){
                if( t===false ){
                    t=true;
                    var _this = $(this);
                    _this.removeClass("addUp");
                    _this.addClass("addDown");
                    _rightContent2.stop().animate({ marginTop : -100 },500);
                }
                else{
                    t=false;
                    console.log(t);
                    var _this = $(this);
                    _this.removeClass("addDown");
                    _this.addClass("addUp");
                    _rightContent2.stop().animate({ marginTop :0 },500);
                }
                
            })
        },

        section3Fn : function(){
            var _window = $(window);
            var _windowW = _window.innerWidth()
            var cnt = 0;
            var _slideContainer = $("#section3 .slide-container");
            var _slideContainerW = _slideContainer.innerWidth();
            var _slideWrap = $("#section3 .slide-wrap");
            var _slide = $("#section3 .slide");
            var _slideWRate = 0.230294272;
            var _slideHRate = 1.3146400456;
            var _slideMargin = 0.58245935+"%";
            var n = _slide.length;
            var _slideW = _slide.css({ width : (_slideContainerW*_slideWRate) });
            var _slideH = _slide.innerWidth()*_slideHRate;
            var _slideWrapW = _slideWrap.innerWidth();
            var _slideTitle = $("#section3 .slide-title")
            var _slideContent = $("#section3 .slide-content")

            //resize function
            setTimeout(resizeFn,10);
            function resizeFn(){
                _slideW = _slide.css({ width : (_slideContainerW*_slideWRate) });
                _slideH = _slide.innerWidth()*_slideHRate;
                _slideWrapW = _slideWrap.innerWidth();

                if(_windowW<1025){
                    _slideWrapW = _slideWrap.css({ width : _slideContainerW });
                    _slideW = _slide.css({ width : _slideContainerW*0.8 });
                    _slideH = _slide.innerWidth()*_slideHRate;
                }

                _slide.css({ width : _slideW, height : _slideH });
                _slideWrap.css({ width : _slideWrapW });
            }
            _window.resize(function(){
                resizeFn();
            })

            function mainSlideFn(){
                _slideWrap.stop().animate({ left : -(_slide.innerWidth()+30)*cnt },500)
                console.log(_slide.innerWidth()+30)
            }
            
            function nextSlideFn(){
                cnt++;
                if(cnt>n-4)cnt=n-4;
                mainSlideFn();
            }

            function prevSlideFn(){
                cnt--;
                if(cnt<0)cnt=0;
                mainSlideFn();
            }
            
            if(_windowW>1024){
                _slideContainer.swipe({
                    swipeLeft : function(e){
                        e.preventDefault();
                        if( !_slideWrap.is(":animated") ){
                            nextSlideFn();
                        }
                    },
                    swipeRight : function(e){
                        e.preventDefault();
                        if( !_slideWrap.is(":animated") ){
                            prevSlideFn();
                        }
                    }
                })
            }

            //mouseover시 content 보이기
            _slideTitle.each(function(){
                var _this = $(this);
                _this.mouseenter(function(){
                    _slideContent.removeClass("addContent");
                    _this.siblings().addClass("addContent");
                }),
                _this.mouseleave(function(){
                    _slideContent.removeClass("addContent");
                    _this.siblings().removeClass("addContent");
                })                
            })
        }
    }

    personal.init();
})(jQuery,window,document);