var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      console.log(result);
      // var arrayDoctors = [];
      for (i = 0; i < result.data.length; i++) {
        var example = result.data[i].practices[0].name;
        console.log(example)
        // arrayDoctors.push(example)
        $('.showDoctor').append("<h4>" + result.data[i].practices[0].name + "</h2>" + result.data[i].practices[0].visit_address.street + "<br>" + result.data[i].practices[0].visit_address.city + ", " + result.data[i].practices[0].visit_address.state + ", " + result.data[i].practices[0].visit_address.zip);
      }
    })
   .fail(function(error){
      console.log("fail");
    });
};
exports.doctorModule = Doctor;
