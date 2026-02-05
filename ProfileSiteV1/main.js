
// Set the date we're counting down to
var countDownDate = new Date("March 23, 2026 00:01:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




/*------------------------------------------

function updateDateTime(){
    const now = new Date();
    const dateTimeElement = document.getElementById('current-datetime');

    // Options for date formatting (optional)
    const dateOptions = {
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    }

    // Format the date and time
        const formattedDate = now.toLocaleDateString(undefined, dateOptions);
        const formattedTime = now.toLocaleTimeString();

        // Update the HTML element
        dateTimeElement.innerHTML = ` ${formattedDate}, || Time: ${formattedTime}`;
    }

    // Call the function immediately to display the time on page load
    updateDateTime();

    // Update the time every second
    setInterval(updateDateTime, 1000); 

---------------------------*/







         