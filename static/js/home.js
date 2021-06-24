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
