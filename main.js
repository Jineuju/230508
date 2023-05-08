// gnb
$("#gnb").on("mouseenter", function () {
  $(".sub").stop().slideDown();
});
$("#gnb").on("mouseleave", function () {
  $(".sub").stop().slideup();
});
$("#gnb>li").on("mouseenter", function () {
  $(this).children("a").addClass("on");
});
$("#gnb>li").on("mouseenter", function () {
  $(this).children("a").removeClass("on");
});

// slide
/*
setInterval (콜백함수, 시간) : 콜백함수에 반복적으로
함수를 적용할 함수를 넣고 반복시간에 따라서 반복시간마다
콜백함수를 지정한다.

ul인 frame을 top : -300px로 위로 올려진 뒤 콜백함수로 0index
의 li를 appendTo라는 메소드로 ul의 뒤에 붙입니다.
따라서 순환하는 슬라이드처럼 되도록 하는것입니다.

동시에 css를 top:0으로 맞추도록 하면서 
부드럽게 슬라이드 되도록합니다.

단) css에 높잇값과 기준점을 잡아두어야만 부드럽게 슬라이드가
가능합니다.
*/

setInterval(function () {
  $(".frame").animate({ top: "-300px" }, function () {
    $("frame>li").eq(0).appendTo(".frame");
    $("frame").css({ top: 0 });
  });
});
