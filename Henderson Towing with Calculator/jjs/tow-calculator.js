side1Value = 0;
milageValue = 0;
packageValue = 0;
addition = 0;

$("#hook-up-rate").change(function(){
	packageValue = parseInt($("#hook-up-rate option:selected").val());
	calculateTow();				
});	

$("#milage").change(function(){
	milageValue = (4.5 * parseInt($("#milage option:selected").val())) - 4.5;	

	if(milageValue < 0){
		milageValue = 0;
	}

	$('#mCharge').text(milageValue);
	calculateTow();
});

$(".addition").change(function(){

	addition = $(".addition:checked").length;
	calculateTow();
});

function calculateTow(){
	total = packageValue + milageValue + (20 * addition);	
	$("#result").text("$ " + total);
}