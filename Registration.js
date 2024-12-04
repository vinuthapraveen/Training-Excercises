const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue))
    {
        setError(email, 'Provide a valid email address');
    }else{
        setSuccess(email);
    }
    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};


function populate(s1,s2)
{
    var s1=document.getElementById(s1);
    var s2=document.getElementById(s2);
    s2.innerHTML="";
    if(s1.value=="kerala")
{
    var optionArray=['trivandrum|Trivandrum','kollam|Kollam','pathanamthitta|Pathanamthitta','alappuzha|Alappuzha'];
}
else if(s1.value=="tamilnadu")
{
    var optionArray=['tamil|Tamil1','tamil2|Tamil2','tamil3|Tamil3','tamil4|Tamil4'];
}
else if(s1.value=="karnataka")
{
    var optionArray=['kar1|Kar1','kar2|Kar2','kar3|Kar3','kar4|Kar4'];
}
for(var option in optionArray)
{
    var pair=optionArray[option].split("|");
    var newoption=document.createElement("option");
     
    newoption.value=pair[0];
    newoption.innerHTML=pair[1];
    s2.options.add(newoption)
}
}