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
                /* that.section3Fn(); */
                /* that.section4Fn(); */
                that.footerFn();
        },

        headerFn : function(){
            var _window = $(window);
            var _winH = _window.innerHeight();
            var _header = $("#header");
            var _goTop  = $(".go-top");
            var _smoothBtn = $(".smooth-btn");
            var url = null;
            var _html = $("html");
            var _htmlBody = $("html, body");
            var _mobileBtn = $(".mobile-btn");
            var _mMenu = $(".mobile-menu");
            var _closeBtn = $(".close-btn");
            var _delta = null;
            var _wheelEvent = $(".wheel_event");
            var n = ("#secion").length;
            var _footer = $("#footer");
            var _section2 = $("#section2");
            var _section4 = $("#section4");

            //scrolling
            _window.scroll(function(){
                var _this = $(this);
                //header
                if( _this.scrollTop() > 30 ){
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
                            if(idx<n-1){
                                if(idx==n-2){
                                    _htmlBody.stop().animate({scrollTop : _footer.offset().top},800,"easeInOutExpo");
                                }
                                else{
                                    _htmlBody.stop().animate({scrollTop : _this.next().offset().top},800,"easeInOutExpo");
                                }
                            }
                        }
                        else{//스크롤 올리면 
                            if(idx>0){
                                if(idx==n-1){
                                    _htmlBody.stop().animate({scrollTop : _section4.offset().top},800,"easeInOutExpo");
                                }
                                else{
                                    _htmlBody.stop().animate({scrollTop : _this.prev().offset().top},800,"easeInOutExpo");
                                }
                            }
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
            var _section1 = $("#section1");
            var _window = $(window);
            var _windowH = _window.innerHeight();
            var _textH2 = $("#section1 h2");
            var _textH3 = $("#section1 h3");
            var _textP = $("#section1 p");
            var _goDown = $("#section1 .go-down");
            
            setTimeout(resizeFn,10);
            function resizeFn(){
                _section1.css({height : _windowH});
            }
            _window.resize(()=>{
                resizeFn();
            })
            
            function animateFn(){
                _textH2.stop().animate({ opacity : 1 },1000,function(){
                    _textH3.stop().animate({ opacity : 1 },1500,function(){
                        _textP.stop().animate({ opacity : 1 },1500,function(){
                            _goDown.stop().animate({ opacity : 1 },1000)
                        })
                    })
                })
            }
            
            setTimeout(animateFn, 1000);
        },

        section2Fn : function(){
            var _section2 = $("#section2");
            var _leftWrap = $("#section2 .left-wrap");
            var _rightWrap = $("#section2 .right-wrap");
            var _window = $(window);
            var _windowW = _window.innerWidth();

            if(_windowW > 680){
                function animateFn(){
                    _leftWrap.stop().animate({ opacity:1, marginLeft:0 },800,function(){
                        _rightWrap.stop().animate({ opacity:1, marginRight:0 },800);
                    });
                }
            }
            else {
                function animateFn(){
                    _leftWrap.stop().animate({ opacity:1 },800,function(){
                        _rightWrap.stop().animate({ opacity:1 },800);
                    });
                }
            }

            _window.scroll(function(){
                var _this = $(this);
                if(_this.scrollTop() >= _section2.offset().top-200){
                    animateFn();
                }
            })
        },

        section3Fn : function(){

        },

        section4Fn : function(){
        },

        footerFn : function(){
            var tool = $("#footer .tool");
            var iEmail = $("#footer .i-email");
            
            iEmail.mouseenter(()=>{
                tool.addClass("addTool");
            })
            iEmail.mouseleave(()=>{
                tool.removeClass("addTool");
            })
        }
    }

    personal.init();
})(jQuery,window,document);