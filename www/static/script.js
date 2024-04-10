function openValve() {
    $.ajax("http://propane.home:8000/rest/fuelValve/open");
}

function closeValve() {
    $.ajax("http://propane.home:8000/rest/fuelValve/close");
}