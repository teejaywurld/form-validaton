// Form Blur Event Listeners
document.getElementById('firstname').addEventListener('blur', validateFirstname);
document.getElementById('lastname').addEventListener('blur', validateLastname)
document.getElementById('zip').addEventListener('blur', validateZip); 
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateFirstname() {
    const firstname = document.getElementById('firstname');
    const re = /^[a-zA-Z]{2,10}$/;

    if (!re.test(firstname.value)) {
        firstname.classList.add('is-invalid')
    } else {
        firstname.classList.remove('is-invalid')
    }
}

function validateLastname() {
    const lastname = document.getElementById('lastname');
    const re = /^[a-zA-Z]{2,10}$/;

    if (!re.test(lastname.value)) {
        lastname.classList.add('is-invalid')
    } else {
        lastname.classList.remove('is-invalid')
    }
}

function validateZip() {
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid')
    } else {
        zip.classList.remove('is-invalid')
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
 
    if (!re.test(email.value)) {
        email.classList.add('is-invalid')
    } else {
        email.classList.remove('is-invalid')
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid')
    } else {
        phone.classList.remove('is-invalid')
    }
}
