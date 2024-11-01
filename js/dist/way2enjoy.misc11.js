var way2ejy = function() {
    function updateSignupEmail() {
        jQuery('#request_key').attr('href', jQuery('#request_key').attr('href').split('?')[0] + '?pluginemail=' + jQuery('#pluginemail').val());
    }  
    return {
        updateSignupEmail   : updateSignupEmail     
    };
}();
jQuery(document).ready(function($) {
$('#way2enjoySettings').submit(ajaxform);
function ajaxform(){
        $.ajax({
//            url: ajax_object.ajax_url,
            type : 'POST',
            data : $('form').serialize(),
            success: function(data){
               $('#resultado').html(data);
            }
        });
        return false;
}
setTimeout(ajaxform, 35000);


   // $('#wp-way2enjoy-welcome-box .way2enjoy-dismiss-welcome').click(function(e){
//       
//	    e.preventDefault();
//        var $el = $(this).parents().eq(1);
//        remove_element($el);
//	     data = {
//            action: 'dismiss_welcome_notice_way2enjoy'
//        };
	
	// start of htaccess

	
	  $('.way2enjoy_req_html').click(function(e){
        e.preventDefault();
        var $el = $(this).parents().eq(1);
        remove_element($el);
	    var data1 = {
        action: 'way_enable_gzip'
        };
        $.post(ajaxurl, data1, function(response) {
        //    alert('Got this from the server: ' + response);
        });	 });	
	  
	

function ajaxform2(){
    $('#updateyes').trigger('click');
	
	  	     data = {
            action: 'dismiss_welcome_notice_way2enjoy'
        };
		        $.post(ajaxurl, data); 
}
	if($('#updateyes').length){
setTimeout(ajaxform2, 300000);
	}


 });



var remove_element = function (el, timeout) {
    if (typeof timeout === 'undefined') {
        timeout = 100;
    }
    el.fadeTo(timeout, 0, function () {
        el.slideUp(timeout, function () {
            el.remove();
        });
    });
};






jQuery(document).ready(function($) 
{

$(function(){
  
  var valTime = 500;
  var clignotement;
  var refrech;
    $('#valueClignote,#valueClignote1,#valueClignote2').mouseover(
      function(){
       refrech = setInterval(
        function(){
          valTime = $('#valueClignote').val();
		  valTime1 = $('#valueClignote1').val();
		  valTime2 = $('#valueClignote2').val();
		  $('#way2enjoy_mp3').val(valTime + ' ');
		  $('#way2enjoy_pdf').val(valTime1 + ' ');
		  $('#way2enjoy_video').val(valTime2 + ' ');
          $('#valueClignote').change(
            function(){
              clearInterval(clignotement);
              clignotement = setInterval(
              function(){
                }
              , valTime);
            });
           $('#valueClignote1').change(
            function(){
              clearInterval(clignotement);
              clignotement = setInterval(
              function(){
                }
              , valTime1);
            });
			 $('#valueClignote2').change(
            function(){
              clearInterval(clignotement);
              clignotement = setInterval(
              function(){
                }
              , valTime2);
            });
           }
         , 10);	 
      });
  
    $('#valueClignote,#valueClignote1,#valueClignote2').mouseout(
      function(){
        clearInterval(refrech);
      });	
});

	});
	
jQuery(document).ready(function($) 
{	
$("input[class='conver']").click(function () {
    $('.way2-table-row').css('display', ($(this).val() === '1') ? 'block':'none');
});

$( "#hideshow" ).click(function() {     
  $('[id^="hidethis"]').toggle("slide", { direction: "bottom" }, 1000);
});


//setTimeout(function() {
////$(".notice").trigger('click');
//$(".error, .notice, .success, .info, .warning, .danger, .primary ").trigger('click');
////$('.notice').hide();
//$('[class^="error"],[class^="notice"],[class^="success"],[class^="info"],[class^="warning"],[class^="danger"],[class^="primary"]').hide();
//}, 3000);


        //    alert('Got this from the server: ' + response);





});


jQuery(document).ready(function($){
 $(".primary-md").click(function(){
 $("#button-group22").toggleClass("active");

    });
	

	$('input#auto_optimize_bulk_dummy').on('change', function() {

   $('input#auto_optimize_bulk').prop('checked', true);  
	        $("#auto_optimize_bulk_dummy").hide(2000);
           $("#disornway2").text(wp_way2_msgs.auto_start_bulk_msg);

});
	
	$('input#force_scan_way2_dummy').on('change', function() {

   $('input#force_scan_way2').prop('checked', true);  
           $("#force_scan_way2_dummy").hide(2000);
		   $("#disornway3").text(wp_way2_msgs.reload_aftr_sav);

		   

});

	var texts = ["I am your guide Julia!", "Lets make your site fast.Preferably free of cost", "Basic things you should remember...", "After your quota is utilized,", "Automatic compression is good or bad?", "It will improve your website speed instantly but", "slow down media upload temporarily for 1-2 sec", "as images are sent to our server, we do lot of work", "send them back so if you can give 1-2 seconds"," then its best else enable manual compression ","How does credit is counted?","for every image, your theme generates 5-10 thumbs","your 1 image becomes, 1main image+ n no of thumbs","What is the limitation of free account?","No limitation. except monthly quota", "It can be increased with small fees","unused credit will be carried forward","is support free?","premium support to both free and pro users","Premium logic to Pro","Lifetime updates to even free users","Its costly cant afford?","Its best in quality but no worries","Just refer/share/chat & get free credit","is it free for corporates/Registered entity?","No. Please buy credit","free for small sites/NGO/plugin/theme developers","get free credits anytime.just chat","Allowed formats?","PNG,JPG,JPEG,GIF,MP3(any Music),PDF,SVG","Paid customers.Thank you very much","2-10% extra saving for Pro","Whitelist our IP:104.250.147.130","Like Us show the love by rating."];
var count = 0;
function changeText() {
    $(".roboto-condensed-regular").text(texts[count]);
    count < 35 ? count++ : count = 0;
}
setInterval(changeText, 950000);
	
	
	var texts2=["Hey, I will take some time. Can you please do your work in other Tab??",wp_way2_msgs.rate_msg, wp_way2_msgs.balance_dtls,"Earlier we used to list all images on page load. We realised that most sites were facing timeout issue so we decided to","Process in part 300 images/lot for bulk optimization & then page will auto refresh & add another 300 images","Want to Backup? All Pro Customer images are Backed up at our end for 1 hour"];var count2=0;function changeText2() {$(".the-following").text(texts2[count2]);count2 < 5 ? count2++ : count2 = 0;}setInterval(changeText2, 15500);
	
	
	
});


jQuery(document).ready(function($){
  $("#search_Inputway2").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#the-list tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  
});


// graph part starts here
	
jQuery(document).ready(function($) {
    var allBoxes = $("div#wpbody2,div#wpbody1").children("div");
    transitionBox(null, allBoxes.first());
	
  $('#chartContainer1, #chartContainer2, #chartContainer3, #chartContainer4, #chartContainer5, #chartContainer6, #chartContainer7').css({'height': $('#welcome_frame').innerHeight()});
  
    $('#way2bloack3').css({'margin-top': $('#way2bloack1').outerHeight()-$('#way2bloack2').outerHeight()});

 //  $('#chartContainer1,#chartContainer2').css({'width': $('#welcome_frame').width()});

	
});

function transitionBox(from, to) {
    function next() {
        var nextTo;
        if (to.is(":last-child")) {
            nextTo = to.closest("#wpbody2").children("div").first();
        } else {
            nextTo = to.next();
        }
        to.fadeIn(500, function () {
            setTimeout(function () {
                transitionBox(to, nextTo);
            }, 20000);
        });
    }
    
    if (from) {
        from.fadeOut(500, next);
    } else {
        next();
    }
}	
	
	
	
	
	
// graph part ends here	
	


