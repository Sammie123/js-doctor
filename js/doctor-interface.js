var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#findDoctor').click(function() {
    var symptoms = $('#symptoms').val();
    var currentDoctor = new Doctor();
    currentDoctor.getDoctors();
    console.log(symptoms);
  });
});
