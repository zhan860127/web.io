var snum=0;
var num=0;
var i=0;
$(document).ready(function(){
    $(".himg").mouseenter(function(){
       $(this).animate({opacity:"1"},300);
    });
    $(".himg").mouseleave(function(){
        $(this).animate({opacity:"0"},300);
      });
 
      $(".himg").bind('click',function(e){
          if(snum!=0)
          {
            $('#i'+snum).fadeOut('slow');
            snum=0;
          }
           num= parseInt($(this).attr('id').substr(1));
          snum=25-num;
          console.log('#i'+snum);
        $('#i'+snum).fadeIn('slow');
        event.stopImmediatePropagation();
        
      });
     /* $(".himg").tap(function(){
        if(snum!=0)
        {
          $('#i'+snum).fadeOut('slow');
          snum=0;
        }
        var num= parseInt($(this).attr('id').substr(1));
        snum=25-num;
        console.log('#i'+snum);
      $('#i'+snum).fadeIn('slow');
    });*/

  });
  $(document).bind('click',function(e) {
    var target = e.target;

    if (!$(target).is('#i'+snum)&&snum!=0 &&snum!=1 ) {
        $('#i'+snum).fadeOut('fast');
        snum=0;
        event.stopImmediatePropagation();
    }
});
if(i==0)
{
$(function(){ $('#i19').click(function(){ 
    $('html,body').animate({scrollTop:$('#t').offset().top}, 500);});  
}); 
i++;
}
/*$(document).tap(function(e) {
    var target = e.target;

    if (!$(target).is('#i'+snum)&&snum!=0 ) {
        $('#i'+snum).fadeOut('slow');
        snum=0;
    }
});*/
  

  