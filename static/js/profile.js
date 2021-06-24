try {
    const profile_img = document.getElementById("profile_img");
    const dropdown = document.getElementById("dropdown");
    profile_img.onclick = () => {
        dropdown.style.display = "flex";
    }
    dropdown.onmouseleave = () => {
        dropdown.style.display = "none";
    }
} catch (error) {

}

showEvents = document.getElementById("showEvents");
showEvents.addEventListener('click', yourEvents);

var pass = true;

function yourEvents() {
    if (pass) {
        const xhr1 = new XMLHttpRequest();
        xhr1.open('POST', '/events', true, "/json-handler");
        // xmlhttp.setRequestHeader("Content-Type", "application/json");
        xhr1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr1.setRequestHeader('Content-Type', 'application/json');
        // xhr1.setRequestHeader('contentType', 'application/json');
        xhr1.getResponseHeader('Content-Type', 'application/json');

        xhr1.onprogress = function () {
            // console.log('Fetching in progress')
        }

        xhr1.onloadend = function () {

            let obj1 = JSON.parse(this.response);
            console.log(obj1);
            events = document.getElementById("events");
            showEvents.innerHTML = 'Hide';
            var str = `<h2>Your Events</h2>`
            for (i = 0; i < obj1.length; i++) {
                str += `<div class="row">
            <div class="col-md-6">
              <h5>Event Location:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].eventLoc}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Event Type:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].eventType}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Event Type:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].subEventType}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Start Date:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].stDate}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>End Date:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].endDate}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Invitees:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].invitees}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Venue:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].venue}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Venue Price:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].venuePrice}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Caterer:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].caterer}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Food:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].food}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Price per Person:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].ppp}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Event Theme:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].themeType}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Theme Description:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].themeDesc}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Extra Facilities:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].extraFacilities}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Extra Facilities Description:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].extraDesc}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h5>Total Cost:</h5>
            </div>
            <div class="col-md-6">
              <h5>${obj1[i].totalCost}</h5>
            </div>
          </div>
          <hr>`
            }
            events.innerHTML = str;
        }
        pass = false;
        xhr1.send();
    }
    else{
      pass = true;
      showEvents.innerHTML = 'Show My';
      events = document.getElementById("events");
      events.innerHTML = "";

    }
}

// ==============================================SUBSCRIBE=====================================================

var btn1 = document.getElementById("btn1");

btn1.addEventListener('click', subscribe);

function subscribe(){

    email = document.getElementById("subs").value;
    document.getElementById("subs").value = "";

    const xhr1 = new XMLHttpRequest();
    xhr1.open('POST', '/subscribe', true, "/json-handler");
    // xmlhttp.setRequestHeader("Content-Type", "application/json");
    xhr1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr1.setRequestHeader('Content-Type', 'application/json');
    // xhr1.setRequestHeader('contentType', 'application/json');
    xhr1.getResponseHeader('Content-Type', 'application/json');

    xhr1.onprogress = function () {
        // console.log('Fetching in progress')
        document.getElementById("subs").value = "";
    }

    xhr1.onloadend = function () {
        
    }
    var params = {
        "email": email
    };
    var par = JSON.stringify(params);
    console.log(par);
    xhr1.send(par);
}
