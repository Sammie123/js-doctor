var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var listDoctor = new Doctor();
  $('#findDoctor').click(function() {
    var medicalIssue = $('#medicalIssue').val();
    listDoctor.getDoctors(medicalIssue);
    console.log(medicalIssue);
  });
});
