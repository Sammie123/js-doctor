var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var listDoctor = new Doctor();
  $('#findDoctor').click(function() {
    var symptoms = $('#symptoms').val();
    var showDoctor = listDoctor.getDoctors(symptoms);
    console.log(showDoctor);
    console.log(symptoms);
  });
});
