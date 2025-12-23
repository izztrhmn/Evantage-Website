
const contactform = document.querySelector('.contact-form');


contactform.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData ={
        name:nama.value,
        email:email.value,
        company:company.value,
        contactno:contactno.value,
        // subject:subject.value,
        message:Message.value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function (){
        console.log(xhr.responseText);
        if (xhr.responseText=='success'){
            alert('Email Sent');
            nama.value='';
            email.value='';
            company.value='';
            contactno.value='';
            // subject.value='';
            Message.value='';
        }else{
            alert('Something went wrong!')
        }
    }

    xhr.send(JSON.stringify(formData));

})

