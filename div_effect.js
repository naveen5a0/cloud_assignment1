$(document).ready(function() {
	var $default_check = $('input:radio[name=math_group]');
	$default_check.filter('[value=calculator]').prop('checked', true)
    $("input[name$='math_group']").click(function() {
        var test = $(this).val();

        
        if(test=="calculator")
        {
			$("#prime_div").hide();
			$("#calc_div").show();
			$("#palin_div").hide();
        }
        else if(test=="prime_check")
        {
        	$("#prime_div").show();
			$("#calc_div").hide();
			$("#palin_div").hide();
        }
        else
        {
        	$("#prime_div").hide();
			$("#calc_div").hide();
			$("#palin_div").show();
        }

    });
});