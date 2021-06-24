// $(function () {
//     var dtToday = new Date();

// const { get } = require("mongoose");

//     var month = dtToday.getMonth() + 1;
//     var day = dtToday.getDate();
//     var year = dtToday.getFullYear();
//     if (month < 10)
//         month = '0' + month.toString();
//     if (day < 10)
//         day = '0' + day.toString();

//     var maxDate = year + '-' + month + '-' + day;
//     $('#txtDate').attr('min', maxDate);
//     $('#endDate').attr('min', maxDate);
// });
// const mongoose = require('mongoose');
// const con = require("./db/connection")
// const registrations = require("./models/registrations")
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




// ======================================================FORMS================================================================
var Form1 = document.getElementById("form1");
var Form2 = document.getElementById("form2");
var Form3 = document.getElementById("form3");
var Form4 = document.getElementById("form4");
var Form5 = document.getElementById("form5");
var Form6 = document.getElementById("form6");
var Form7 = document.getElementById("form7");
var Form8 = document.getElementById("form8");

var venueCarousel = document.getElementById("venueCarousel");

var Next1 = document.getElementById("next1");
var Next2 = document.getElementById("next2");
var Next3 = document.getElementById("next3");
var Next4 = document.getElementById("next4");
var Next5 = document.getElementById("next5");
var Next6 = document.getElementById("next6");
var Next7 = document.getElementById("next7");


var Prev1 = document.getElementById("prev1");
var Prev2 = document.getElementById("prev2");
var Prev3 = document.getElementById("prev3");
var Prev4 = document.getElementById("prev4");
var Prev5 = document.getElementById("prev5");
var Prev6 = document.getElementById("prev6");
var Prev7 = document.getElementById("prev7");

var pass = true;
var pass2 = true;

var progress = document.getElementById("progress");
Next1.onclick = function () {
    Form1.style.left = "-2000px";
    Form2.style.left = "0px";
    progress.style.width = "160px";
}

// Next3.onclick = function () {
//     Form3.style.left = "-2000px";
//     Form4.style.left = "0px";
//     progress.style.width = "320px";
// }
// Next4.onclick = function () {
//     Form4.style.left = "-2000px";
//     Form5.style.left = "0px";
//     venueCarousel.style.left = "0px";
//     progress.style.width = "400px";
// }
// Next5.onclick = function () {
//     Form5.style.left = "-2000px";
//     venueCarousel.style.left = "-2000px";
//     Form6.style.left = "0px";
//     progress.style.width = "480px";
// }
Next6.onclick = function () {
    Form6.style.left = "-2000px";
    Form7.style.left = "0px";
    progress.style.width = "560px";
}
Next7.onclick = function () {
    Form7.style.left = "-2000px";
    Form8.style.left = "0px";
    progress.style.width = "640px";
}
Prev1.onclick = function () {
    Form2.style.left = "2000px";
    Form1.style.left = "0px";
    progress.style.width = "80px";
}
Prev2.onclick = function () {
    Form3.style.left = "2000px";
    Form2.style.left = "0px";
    progress.style.width = "160px";
}
Prev3.onclick = function () {
    Form4.style.left = "2000px";
    Form3.style.left = "0px";
    progress.style.width = "240px";
}
Prev4.onclick = function () {
    Form5.style.left = "2000px";
    venueCarousel.style.left = "2000px";
    Form4.style.left = "0px";
    progress.style.width = "320px";
    pass = true;

}
Prev5.onclick = function () {
    Form6.style.left = "2000px";
    Form5.style.left = "0px";
    venueCarousel.style.left = "0px";
    progress.style.width = "400px";
}
Prev6.onclick = function () {
    Form7.style.left = "2000px";
    Form6.style.left = "0px";
    progress.style.width = "480px";
    pass2 = true;
}
Prev7.onclick = function () {
    Form8.style.left = "2000px";
    Form7.style.left = "0px";
    progress.style.width = "560px";
}
// function test(name) {
//     if (name == "chrome") {
//         document.getElementById("temp").hidden = false;
//     }
// }


// ======================================================EVENT LOCATION=================================================

Loc1 = document.getElementById("loc1");
Loc2 = document.getElementById("loc2");
Des = document.getElementById("des");
Loc1.onclick = function () {
    Des.hidden = true;
}
Loc2.onclick = function () {
    Des.hidden = false;
}

var city = 'Ahmedabad';
if (document.getElementById("loc1").checked) {
    city = 'Ahmedabad';
}
if (document.getElementById("loc2").checked) {
    city = document.getElementById("dest").value;
}




// =======================================================EVENT TYPE===================================================

Social = document.getElementById("Social");
Corporate = document.getElementById("Corporate");
Activation = document.getElementById("Activation");
Sports = document.getElementById("Sports");
Academic = document.getElementById("Academic");
Virtual = document.getElementById("Virtual");

var eventType = "Social";

document.getElementById("eventType").oninput = function () {
    if (document.getElementById("eventType").value == "Social") {
        Social.hidden = false;
        Corporate.hidden = true;
        Activation.hidden = true;
        Sports.hidden = true;
        Academic.hidden = true;
        Virtual.hidden = true;
        eventType = "Social";
    } else if (document.getElementById("eventType").value == "Corporate") {
        Social.hidden = true;
        Corporate.hidden = false;
        Activation.hidden = true;
        Sports.hidden = true;
        Academic.hidden = true;
        Virtual.hidden = true;
        eventType = "Corporate";
    } else if (document.getElementById("eventType").value == "Activation") {
        Social.hidden = true;
        Corporate.hidden = true;
        Activation.hidden = false;
        Sports.hidden = true;
        Academic.hidden = true;
        Virtual.hidden = true;
        eventType = "Activation";
    } else if (document.getElementById("eventType").value == "Sports") {
        Social.hidden = true;
        Corporate.hidden = true;
        Activation.hidden = true;
        Sports.hidden = false;
        Academic.hidden = true;
        Virtual.hidden = true;
        eventType = "Sports";
    } else if (document.getElementById("eventType").value == "Academic") {
        Social.hidden = true;
        Corporate.hidden = true;
        Activation.hidden = true;
        Sports.hidden = true;
        Academic.hidden = false;
        Virtual.hidden = true;
        eventType = "Academic";
    } else if (document.getElementById("eventType").value == "Virtual") {
        Social.hidden = true;
        Corporate.hidden = true;
        Activation.hidden = true;
        Sports.hidden = true;
        Academic.hidden = true;
        Virtual.hidden = false;
        eventType = "Virtual";
    }
}
temp = document.getElementById("temp");
// $(document).ready(function(event) {
// $('#eventType select').on('mouseenter','option',function() {
//         alert('yeah');
//         temp.hidden=false;
//         // this refers to the option so you can do this.value if you need..
//     });
// });

var subEventType = "Wedding";

Next2.onclick = function () {
    Form2.style.left = "-2000px";
    Form3.style.left = "0px";
    progress.style.width = "240px";
    console.log(eventType.toString());
    subEventType = document.getElementById(eventType.toString()).value;
    // console.log(subEventType);
}

// =======================================================EVENT DATE==================================================

var St = document.getElementById("endDate");
St.onclick = function () {
    var stDate = document.getElementById("txtDate").value;
    // console.log(stDate);
    $('#endDate').attr('min', stDate);
    // $('#endDate').attr('value', stDate);

}
var Tx = document.getElementById("txtDate");
Tx.onclick = function () {
    document.getElementById("form3").reset();
}


// ========================================================BUDGET & INVITEES==========================================================

var next3 = document.getElementById("next3");
next3.addEventListener('click', setBudgetRange);

var stDate;
var endDate;

var price;


var minVenue = 1000000;
var maxVenue = 125000;

var budgetParams1 = "city=" + city + "&type=Open&price=1000000";
var budgetParams2 = "city=" + city + "&type=Closed&price=1000000";

venues(budgetParams1);
venues(budgetParams2);

var invitee = 50;

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value;
    price = this.value - (200 * invitee) - 15000;
    // console.log(`price : ${price}`);
}


var invitee_slider = document.getElementById("invitees");
var persons = document.getElementById("persons");
persons.innerHTML = invitee_slider.value;

invitee_slider.oninput = function () {
    persons.innerHTML = this.value;
    invitee = invitee_slider.value;
    slider.min = minVenue + 15000 + (200 * invitee);
    slider.value = slider.min;
    output.innerHTML = slider.value;
    price = slider.value - (200 * invitee) - 15000;
}




var minCaterer = 10000;

var minTheme = 15000;

function setBudgetRange() {

    stDate = document.getElementById("txtDate").value;
    endDate = document.getElementById("endDate").value;

    setMinBudget();

    Form3.style.left = "-2000px";
    Form4.style.left = "0px";
    progress.style.width = "320px";

}

function venues(params) {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/venues', true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.getResponseHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onprogress = function () {
        console.log('Fetching in progress')
    }

    xhr.onloadend = function () {
        if (this.status === 200) {
            console.log('Filtering Results 5')
            console.log(this.response);
            let obj1 = JSON.parse(this.response);
            var temp = 10000000;
            for (i = 0, len = obj1.length; i < len; i++) {
                if (obj1[i].price < temp)
                    temp = obj1[i].price;
                // if (obj1[i].price > maxVenue)
                //     maxVenue = obj1[i].price;
            }
            if (temp < minVenue)
                minVenue = temp;
            console.log(`minvenue=${minVenue}`);
        } else {
            console.log('Some error occured in venues');
        }
    }
    console.log(params);
    xhr.send(params);

}

function setMinBudget() {
    // slider = document.getElementById("myRange");
    // output = document.getElementById("demo");

    // invitee_slider = document.getElementById("invitees");
    // persons = document.getElementById("persons");
    // persons.innerHTML = invitee_slider.value;

    slider.min = minVenue + 10000 + 15000;
    slider.value = slider.min;
    price = slider.min - (200 * invitee) - 15000;
    console.log(`slider.min=${slider.min}`);
    output.innerHTML = slider.value;
}






// ====================================================VENUE============================================

var next4 = document.getElementById("next4");
next4.addEventListener('click', filterVenues);
var venueCarousel = document.getElementById("venueCarouselInnerDiv");
var params = "";
// var city = 'Ahmedabad';
// var location = document.form1.loc;

// location[0].addEventListener('change', locationChange);
// location[1].addEventListener('change', locationChange);

// locationChange(){
//     if(this.value === 'Local')
//     city = 'Ahmedabad';
//     else
//     {
//         dest = document.getElementById("dest");
//         city = dest.value.toString();
//     }
// }

// if(document.getElementById("loc1").checked)
// {
//     city = 'Ahmedabad'; 
// }
// if(document.getElementById("loc2").checked)
// {
//     city = document.getElementById("dest").value; 
// }

var budget;

var venueList;

var ven = document.form5.ven;

ven[0].oninput = function () {
    type = 'Open';
    price = document.getElementById("myRange").value - (200 * invitee) - 15000;
    filterVenues();
}

ven[1].oninput = function () {
    type = 'Closed';
    price = document.getElementById("myRange").value - (200 * invitee) - 15000;
    filterVenues();
}

// ven[0].addEventListener('change', venueChange);
// ven[1].addEventListener('change', venueChange);

// function venueChange() {
//     if (ven[0].checked) {
//         type = 'Open';
//         params = "city=" + city + "&type=" + type + "&price=" + price;

//         filterVenues();
//     } else {
//         type = 'Closed';
//         params = "city=" + city + "&type=" + type + "&price=" + price;
//         filterVenues();
//     }
//     // console.log(type);
// }



var type = 'Open';



// var price = 100000
// var capacity;
// "capacity": capacity,


function filterVenues() {



    // var price = 100000
    // var capacity;

    // "capacity": capacity,
    if (document.getElementById("loc1").checked) {
        city = 'Ahmedabad';
    }
    if (document.getElementById("loc2").checked) {
        city = document.getElementById("dest").value;
    }
    console.log('event listened');

    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/venues', true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.getResponseHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onprogress = function () {
        console.log('Fetching in progress')
    }

    xhr.onloadend = function () {
        if (this.status === 200) {
            console.log('Filtering Results')

            let obj = JSON.parse(this.response);
            venueList = obj;

            // let obj = this.response;
            var str = "";
            str += `<div class="carousel-item active">
            <div class="row">
              <!-- <div class="col-lg-12">
                
              </div> -->
              <div class="col-lg-6">
                <img src="${obj[0].img_src}" class="d-block w-100" alt="...">
              </div>
              <div class="col-lg-6">
                <h3 style="margin-top: 2%;">${obj[0].name}</h3>
                <p>${obj[0].address}</p>
                <p>Capacity: ${obj[0].capacity} Price: ${obj[0].price}</p>
                <p>Rating: 4.0</p>
                <input type="radio" value="${obj[0].name}" name="venue" checked>
              </div>
            </div>
            </div>`;
            var i;

            for (i = 1, len = obj.length; i < len; i++) {
                str += `<div class="carousel-item">
                            <div class="row">
                                <div class="col-lg-6">
                                    <img src="${obj[i].img_src}" class="d-block w-100" alt="...">
                                </div>
                                <div class="col-lg-6">
                                    <h3 style="margin-top: 2%;">${obj[i].name}</h3>
                                    <p>${obj[i].address}</p>
                                    <p>Capacity: ${obj[i].capacity} Price: ${obj[i].price}</p>
                                    <p>Rating: 4.0</p>
                                    <input type="radio" value="${obj[i].name}" name="venue">
                                </div>
                            </div>
                        </div>`;
            }
            // for(key in obj){
            //     str += `<div class="carousel-item active">
            //     <div class="row">
            //       <!-- <div class="col-lg-12">

            //       </div> -->
            //       <div class="col-lg-6">
            //         <img src="./Images/AMD/AMDID/hyatt.jpg" class="d-block w-100" alt="...">
            //       </div>
            //       <div class="col-lg-6">
            //         <h3 style="margin-top: 2%;">${obj[key].name}</h3>
            //         <p>17/A, Ashram Rd, Usmanpura, Ahmedabad, Gujarat 380014 PH: 07940171234</p>
            //         <p>Capacity: 500 Price: 70000</p>
            //         <p>Rating: 4.0</p>
            //         <input type="radio" value="Hyatt" name="venue">
            //       </div>
            //     </div>
            //   </div>`
            // }
            str += `<button class="carousel-control-prev" id="b1" type="button" data-bs-target="#venueCarousel"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" id="b2" type="button" data-bs-target="#venueCarousel"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>`;
            venueCarousel.innerHTML = str;
            Form4.style.left = "-2000px";
            Form5.style.left = "0px";
            venueCarousel.style.left = "0px";
            progress.style.width = "400px";

            // var minPrice = 10000000;
            // var maxPrice = 0;

            // for (i = 0, len = obj.length; i < len; i++) {
            //     if (obj[i].price < minPrice)
            //         minPrice = obj[i].price;
            //     if (obj[i].price > maxPrice)
            //         maxPrice = obj[i].price;
            // }

            var slider1 = document.getElementById("venueRange");
            var output1 = document.getElementById("venue_budget");

            if (pass) {
                budget = price + 15000 + (200 * invitee);
                console.log(`budget = ${budget}`)
                if (price < maxVenue)
                    slider1.max = price;
                else
                    slider1.max = maxVenue;
                slider1.value = slider1.max;
                pass = false;
            }
            slider1.min = minVenue;


            output1.innerHTML = slider1.value;


        } else {
            console.log('Some error occured');
        }
    }
    params = "city=" + city + "&type=" + type + "&price=" + price;
    console.log(params);
    xhr.send(params);
}

var slider1 = document.getElementById("venueRange");
var output1 = document.getElementById("venue_budget");


slider1.oninput = function () {

    output1.innerHTML = this.value;
    price = this.value;
    filterVenues();
}



// ==================================================CATERER=======================================================

var next5 = document.getElementById("next5");
var cateringCarousel = document.getElementById("cateringCarouselInnerDiv");
var params1 = "";

next5.addEventListener('click', filterCaterers);

var ppp;
var venuePrice;
var venueName;
var catererList;



function filterCaterers() {

    console.log(venueList);

    var venues = document.form5.venue;
    console.log(venues);
    console.log(venues.length);
    var len = venues.length;
    if (len === undefined)
        len = 1;
    if (len > 1) {
        for (i = 0; i < len; i++) {
            console.log(venues[i].checked);
            if (venues[i].checked === true) {
                ppp = (budget - venueList[i].price - 15000) / invitee;
                venuePrice = venueList[i].price;
                venueName = venueList[i].name;
                break;
            }
        }
    } else {
        ppp = (budget - venueList[0].price - 15000) / invitee
        venuePrice = venueList[0].price;
        venueName = venueList[0].name;
    }


    const xhr1 = new XMLHttpRequest();

    xhr1.open('GET', '/caterers', true);
    // xhr1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    // xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr1.getResponseHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr1.onprogress = function () {
        console.log('Fetching in progress')
    }

    xhr1.onloadend = function () {
        if (this.status === 200) {
            console.log('Filtering Results')

            let obj1 = JSON.parse(this.response);
            // console.log(obj1)

            catererList = obj1;

            // let obj = this.response;
            var str1 = "";
            str1 += `<div class="carousel-item active">
            <div class="row">
              <div class="col-lg-12">
                <h3 style="margin-top: 2%;">${obj1[0].name}</h3>
                <p style="padding: 0 3%;">${obj1[0].description}</p>
                <input type="radio" value="${obj1[0].name}" name="caterer" checked>
              </div>
            </div>
          </div>`;
            var i;
            for (i = 1, len = obj1.length; i < len; i++) {
                str1 += `<div class="carousel-item">
                <div class="row">
                  <div class="col-lg-12">
                    <h3 style="margin-top: 2%;">${obj1[i].name}</h3>
                    <p style="padding: 0 3%;">${obj1[i].description}</p>
                    <input type="radio" value="${obj1[i].name}" name="caterer">
                  </div>
                </div>
              </div>`;
            }

            str1 += `<button class="carousel-control-prev" id="b3" type="button" data-bs-target="#cateringCarousel"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" id="b4" type="button" data-bs-target="#cateringCarousel"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>`;
            // console.log(str1);
            cateringCarousel.innerHTML = str1;
            Form5.style.left = "-2000px";
            Form6.style.left = "0px";
            cateringCarousel.style.left = "0px";
            progress.style.width = "480px";
        } else {
            console.log('Some error occured');
        }
    }
    xhr1.send();
    setCatererPrices();

}

function setCatererPrices() {


    const xhr1 = new XMLHttpRequest();
    ppp = Math.floor(ppp);
    console.log(`ppp = ${ppp}`)
    xhr1.open('POST', '/caterer_prices', true);
    xhr1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr1.getResponseHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr1.onprogress = function () {
        console.log('Fetching in progress')
    }

    xhr1.onloadend = function () {
        if (this.status === 200) {
            console.log('Filtering Results')
            let obj1 = JSON.parse(this.response);
            console.log(obj1);
            var str = `<div style="margin-top: 13px;">
           <label for="normal">Select price per person</label>
           <select name="ppp" id="ppp">
             <option value="${obj1[0].price}" selected>${obj1[0].price}</option>`;
            var len = obj1.length;
            if (len === undefined)
                len = 1;
            console.log(len)
            for (i = 1; i < len; i++) {
                str += `<option value="${obj1[i].price}">${obj1[i].price}</option>`;
            }
            str += `</select>
            </div>`;
            document.getElementById("catererppp").innerHTML = str;
            console.log(str);


        }
    }
    var par = "";
    par = "price=" + ppp;
    console.log(par);
    xhr1.send(par);
}

// var slider2 = document.getElementById("catererRange");
// var output2 = document.getElementById("caterer_budget");
// output2.innerHTML = slider2.value;

// slider2.oninput = function () {
//     output2.innerHTML = this.value;
// }


// =============================================================THEME========================================================

theme1 = document.getElementById("theme1");
theme2 = document.getElementById("theme2");
norm = document.getElementById("norm");
cust = document.getElementById("cust");

theme1.onclick = function () {
    cust.hidden = true;
    norm.hidden = false;
}
theme2.onclick = function () {
    norm.hidden = true;
    cust.hidden = false;
}

var slider3 = document.getElementById("themeRange");
var output3 = document.getElementById("theme_budget");

var next6 = document.getElementById("next6");

next6.addEventListener('click', filterThemes);


var catererName;
var caterers;
var food = "";
var themesArr;


function filterThemes() {

    ppp = document.getElementById("ppp").value;
    // console.log(ppp);
    caterers = document.form6.caterer;
    if (document.form6.veg.checked) {
        food = "Vegetarian ";
        if (document.form6.non_veg.checked) {
            food += " Non-Vegetarian ";
        }
        if (document.form6.jain.checked) {
            food += " Jain";
        }
    }
    else if(document.form6.non_veg.checked) {
        food = " Non-Vegetarian ";
    }
    

    console.log(food);

    for (i = 0; i < caterers.length; i++) {
        if (caterers[i].checked) {
            catererName = catererList[i].name;
            // console.log(caterers[i].value);
            break;
        }
    }

    if (pass2)
    {
        var themePrice = budget - venuePrice - (ppp * invitee);
        price = themePrice;
    }
        

    // console.log(budget);
    // console.log(venuePrice);
    // console.log(ppp * invitee);

    const xhr1 = new XMLHttpRequest();
    xhr1.open('POST', '/themes', true);
    xhr1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr1.getResponseHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr1.onprogress = function () {
        console.log('Fetching in progress')
    }

    xhr1.onloadend = function () {
        if (this.status === 200) {
            console.log('Filtering Results')
            let obj1 = JSON.parse(this.response);
            themesArr = obj1;
            console.log(obj1);
            var str = `<label for="normal">Select Theme</label>
            <select name="theme-type" id="normal">
              <option value="ct" selected hidden>Theme</option>`;
            var len = obj1.length;
            if (len === undefined)
                len = 1;
            console.log(len);
            var maxTheme = 0;
            str += `<option value="${obj1[0].theme}" selected>${obj1[0].theme} (price: ₹${obj1[0].price})</option>`;
            if (maxTheme < obj1[i].price)
                maxTheme = obj1[i].price;
            for (i = 1; i < len; i++) {
                str += `<option value="${obj1[i].theme}">${obj1[i].theme} (price: ₹${obj1[i].price})</option>`;
                if (maxTheme < obj1[i].price)
                    maxTheme = obj1[i].price;
            }

            slider3.min = minTheme;

            if (pass2) {
                slider3.max = maxTheme;
                slider3.value = maxTheme;
                pass2 = false;
            }
            output3.innerHTML = slider3.value;
            str += `</select>`;
            document.getElementById("norm").innerHTML = str;
            console.log(str);
            // setThemeRange();

        }
    }
    var par = "";
    par = "price=" + price;
    console.log(par);
    xhr1.send(par);
}


slider3.oninput = function () {
    price = this.value;
    output3.innerHTML = this.value;
    filterThemes();
}

//========================================================EXTRA FACILITIES=============================================

var next7 = document.getElementById("next7");

next7.addEventListener('click', getTheme);

var themeType;
var themeDesc;
var themePrice;
var themeProfit;

var themes;

var extraFacilities = "";
var extraDesc;

function getTheme() {
    themes = document.form7.theme;
    if (themes[0].checked) {
        themeType = "Normal";
        themeDesc = document.getElementById("normal").value;
        for(var i=0; i<themesArr.length;i++)
        {
            if(themesArr[i].theme === themeDesc)
            {
                themePrice = themesArr[i].price;
            }
        }
        themeProfit = 0.1 * themePrice;
    
    } else {
        themeType = "Custom";
        themeDesc = document.getElementById("custom").value;
        themePrice = "According to the description."
        themeProfit = "Variable";
    }
}

var submit = document.getElementById("submit");

submit.addEventListener('click', submitForm);

function submitForm() {

    if (document.getElementById("celeb").checked) {
        extraFacilities += " Celebrity Appearance | ";
    }
    if (document.getElementById("dancers").checked) {
        extraFacilities += " Dancers ";
    }
    if (document.getElementById("music").checked) {
        extraFacilities += " DJ, Musicians and Band | ";
    }
    if (document.getElementById("stay").checked) {
        extraFacilities += " Guest Stays | ";
    }
    if (document.getElementById("invitations").checked) {
        extraFacilities += " Invitation cards | ";
    }
    if (document.getElementById("ad").checked) {
        extraFacilities += " Advertisement | ";
    }
    if (document.getElementById("photo").checked) {
        extraFacilities += " Photoshoot and video recording | ";
    }
    if (document.getElementById("eq").checked) {
        extraFacilities += " Electronics or sports equipments | ";
    }
    extraDesc = document.getElementById("description").value;
    if(extraFacilities === "")
    extraFacilities = "-";
    if(extraDesc === "")
    extraDesc = "-"
    const xhr1 = new XMLHttpRequest();
    xhr1.open('POST', '/submit', true, "/json-handler");
    // xmlhttp.setRequestHeader("Content-Type", "application/json");
    xhr1.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr1.setRequestHeader('Content-Type', 'application/json');
    // xhr1.setRequestHeader('contentType', 'application/json');
    xhr1.getResponseHeader('Content-Type', 'application/json');

    xhr1.onprogress = function () {
        // console.log('Fetching in progress')
    }

    xhr1.onloadend = function () {

    }

    var cost = venuePrice + (ppp * invitee);
    var totalCost = "₹ " + cost + " + Extra Facilites(if any) and Decoration + Taxes";
    var venueProfit = venuePrice * 0.1;
    var pppProfit = ppp * 0.1;

    var params = {
        "eventLoc": city,
        "eventType": eventType,
        "subEventType": subEventType,
        "stDate": stDate,
        "endDate": endDate,
        "invitees": invitee,
        "venue": venueName,
        "venuePrice": venuePrice,
        "venueProfit": venueProfit,
        "caterer": catererName,
        "food": food,
        "ppp": ppp,
        "pppProfit": pppProfit,
        "themeType": themeType,
        "themeDesc": themeDesc,
        "themePrice": themePrice,
        "themeProfit": themeProfit,
        "extraFacilities": extraFacilities,
        "extraDesc": extraDesc,
        "totalCost": totalCost
    };

    var par = JSON.stringify(params);
    console.log(par);
    xhr1.send(par);

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
