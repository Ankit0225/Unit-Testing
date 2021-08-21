$(function () {

    let kminput = $('#km')
    let mininput = $('#min')
    let calculatebutton = $('#calculate_fare')
    let fareDiv = $('#fare')
    let rateButton = $('#getrates')
    let DivRate = $('#rates')


    calculatebutton.click(function () {
         $.post('/calculate_fare',{
             km: kminput.val(),
             min: mininput.val()
         }, function (Data) {
             fareDiv.text('Fare : ' + Data.fare)
         })
    }) 
    rateButton.click(function () {
        $.get('/rate', function (data) {
            let prettyDatarate = `
            Fixed Fare = Rs. ${data.fixed} for ${data.minkm} KM
            <br>
            Fare (Distance) = Rs. ${data.perkm} / KM
            <br>
            Fare (Waiting) = Rs. ${data.perMin} / min (after first ${data.freemin} min)
            `
            DivRate.html(prettyDatarate)
        })
    })

})