$('#sparkButton').on("click", () => {
    if ($("#lidStatus").text().indexOf("Closed")) {
        console.log("Closed Text")
    }
})

$("#startFuel").on("click", () => {
    $('#fuelSpinner').fadeIn();
    $("#startFuel").prop("disabled", true).prop("aria-disable", true)
    
    setTimeout(() => {
        $('#fuelSpinner').fadeOut();
        $('#startFuel').prop('disabled', false).prop("aria-disable", false);
        $('#propaneValveStatus').fadeOut(250, ()=>{
            $('#propaneValveStatus').text("Open").addClass("bg-success").removeClass("bg-danger").fadeIn();
        });
    }, 1800)
});


$("#stopFuel").on("click", () => {
    $('#fuelSpinner').fadeIn();
    $("#stopFuel").prop("disabled", true).prop("aria-disable", true)
    
    setTimeout(() => {
        $('#fuelSpinner').fadeOut();
        $('#stopFuel').prop('disabled', false).prop("aria-disable", false);
        $('#propaneValveStatus').fadeOut(250, ()=>{
            $('#propaneValveStatus').text("Closed").addClass("bg-danger").removeClass("bg-success").fadeIn();
        });
    }, 1800)
});


function openValve() {
    $.ajax("http://propane.home:8000/rest/fuelValve/open");
}

function closeValve() {
    $.ajax("http://propane.home:8000/gpio/26/off");
}