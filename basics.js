let ageInput = document.getElementById("age");
let mySubmit = document.getElementById("mySubmit");
let hasLicense = document.getElementById("hasLicense");
let noLicense = document.getElementById("noLicense");
let ageForLiscence = document.getElementById("ageForLiscence");
let ageForNoLiscence = document.getElementById("ageForNoLiscence");
let goodLiscence = document.getElementById("goodLiscence");
let getLiscence = document.getElementById("getLiscence");

mySubmit.onclick = function(event){
    event.preventDefault()
let age = parseInt(ageInput.value);
if(age >= 16){
    ageForLiscence.innerHTML = 'You are old enough for liscence';
    ageForNoLiscence.innerHTML = '';

    if(hasLicense.checked){
        goodLiscence.innerHTML  = 'You can drive.';
        getLiscence.innerHTML  = '';
    }
    else if(noLicense.checked){
        goodLiscence.innerHTML  = '';
        getLiscence.innerHTML  = 'You dont have liscence to drive';
    }
    else{
        goodLiscence.innerHTML  = '';
        getLiscence.innerHTML  = 'You dont have liscence to drive';
    }
}
else if (age < 16 && hasLicense.checked) {
    ageForLiscence.innerHTML = '';
    ageForNoLiscence.innerHTML = '';
    goodLiscence.innerHTML = '';
    getLiscence.innerHTML = 'Your license is invalid.';
}
else{
    ageForLiscence.innerHTML = '';
    ageForNoLiscence.innerHTML = 'Your must be 16+ to have a liscence.';
    if(noLicense.checked){
        goodLiscence.innerHTML = '';
        getLiscence.innerHTML = 'You dont have liscence to drive'
    }
    else{
        goodLiscence.innerHTML = '';
        getLiscence.innerHTML = '';
    }
}
}

