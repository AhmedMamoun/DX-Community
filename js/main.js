$('.navbar-nav li a').click(function () {

    $("html , body").animate({
        
        scrollTop: $('#' + $(this).data('value')).offset().top 
    }, 1500);
    });

 // شرحها : https://bit.ly/2XShMqX   


//********************************************************************** */
// عشان تعمل الهووم اكتف تعمل اية ؟

$('#main-nav ul li') .on('click', function(){

    $(this).addClass('active').siblings().removeClass('active');
    });
//Featured work     
$('.Featured-work ul li') .on('click', function(){
$(this).parent().addClass('active').siblings().removeClass('active');

    });
// اختار العنصر ثم قاله * ساعه م اتك عليك نفذ الاتي
// حط كلاس اكتف للي شبة
// امسح الاكتف من ال ايقونه ال كانت علية
