var log = document.getElementById("log");
var reg = document.getElementById("reg");
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var container1 = document.getElementById("con");

log.onclick = function () {
  container1.style.height = "585px";
  container1.style.width = "700px";
  // form2.hidden = true;
  //form1.hidden = false;
  form1.style.left = "0px";
  form2.style.left = "2000px";

}
reg.onclick = function () {
  container1.style.width = "1050px";
  container1.style.height = "779px";
  //form1.hidden = true;
  //form2.hidden = false;
  form2.style.left = "0px";
  form1.style.left = "-2000px";

}
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
