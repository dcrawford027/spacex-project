function initialize() {
    $.get('https://api.spacexdata.com/v4/launches/latest', function(res) {
        console.log(res);
        $('#description').html(`<p class="col lg-4">${res.details}</p>`);
        
        $('#data').html(`<h3>Specifics</h3></h4>Name: <span>${res.name}</span></h4><h4>Date: <span>${res.date_local}</span></h4><h4>Flight Number: <span>${res.flight_number}</span></h4><h4>Successful: <span>${res.success}</span></h4>`);
        
        $('#link1').attr('href', `${res.links.wikipedia}`);
        $('#link2').attr('href', `${res.links.article}`);
        $('#link3').attr('href', `${res.links.webcast}`);
    }, 'json')
}

$(document).ready(function() {

    initialize();

    $('button').click(function() {
        initialize();
    });
});