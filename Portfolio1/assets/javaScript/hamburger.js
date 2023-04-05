$(function(){
  $('.p-hamburger__button').click(function(){
    $('.barTop, .barMiddle, .barBottom').toggleClass('open');
    $('header,main,footer').toggleClass('close');
  });
});


// $(function(){
//   $('.p-hamburger__button').click(function(){
//     $('.barTop, .barMiddle, .barBottom').toggleClass('open');
//     $('header,main,footer').toggleClass('close');
//   });
//   if($('header,main,footer').hasClass('close')){
//     $('header,main,footer').addClass('fixed')
//   }
// });