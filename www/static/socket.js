const socket = io();

socket.on('fuelValveStatus', (state) => {
    console.log("Recieved socket message 'fuelValveStatus' state: "+state);

    if (state == 1) {
        $('#propaneValveStatus').fadeOut(250, ()=>{
            $('#propaneValveStatus').text("Open").addClass("bg-success").removeClass("bg-danger").fadeIn();
        });
    } else {
        $('#propaneValveStatus').fadeOut(250, ()=>{
            $('#propaneValveStatus').text("Closed").addClass("bg-danger").removeClass("bg-success").fadeIn();
        });
    }
})