

$(function () {
    $(".like").click(function () {
        if($(this).html()==`<i class="bi bi-hand-thumbs-up">Like`){
            $(this).html('Like    1');
        }
        else{
            $(this).html('Like');
        }
        return false;
        // var input = $(this).find('.qty1');
        // var n1=parseInt(input.val())+ 1;
        // console.log(n1);
        //     // input.val(parseInt(input.val())+ 1);
        
        
    });

    $(".dislike").click(function () {
        var input = $(this).find('.qty2');
        input.val(parseInt(input.val()) + 1);
    });
});


$(document).ready(function () {
    // FETCHING DATA FROM JSON FILE
    $.getJSON(`http://localhost:3000/comments`, 
            function (data) {
                for(var i=0;i<data.length;i++)
                {
                    if(i==localStorage.getItem("ID"))
                    {
                        document.getElementById("questions").value=data[i-1].questions;
                    }
                }
});
})

$(document).ready(function() {
	$('button').click(function() {
		var comment = $('.commentBox').val();
		$('<li>').text(comment).prependTo('.comments');
		$('button').attr('disabled', 'true');
		$('.counter').text('140');
		$('.commentBox').val('');
	});
	
	$('.commentBox').keyup(function() {
		var commentLength = $(this).val().length;
		var charLeft =  140 - commentLength;
		$('.counter').text(charLeft);
		
		if (commentLength == 0) {
			$('button').attr('disabled', 'true');
		}
		else if (commentLength > 140) {
			$('button').attr('disabled', 'true');
		}
		else {
			$('button').removeAttr('disabled', 'true');
		}
	});
	
	$('button').attr('disabled', 'true');
	
});

// $(document).ready(function() {
// 		$('button').click(function() {
// 			var comment = $('.commentBox').val();
// 			$('<li>').text(comment).prependTo('.comments');
// 			$('button').attr('disabled', 'true');
// 			$('.counter').text('140');
// 			$('.commentBox').val('');
// });
