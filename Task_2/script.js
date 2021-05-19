const validate = () => {
    let hasError = false;
    let name = document.getElementById('name');
    let mail = document.getElementById('mail');
    let pass = document.getElementById('pass');
    if (name.value === '') {
        alert ('All form fields are required, insert name');
        hasError = true;
    }
    if (mail.value === '') {
        alert ('All form fields are required, insert e-mail');
        hasError = true;
    }
    if (pass.value === '') {
        alert ('All form fields are required, insert password');
        hasError = true;
    }
    if (pass.value.length < 8) {
        alert('Password field should contain at least 8 symbols');
        hasError = true;
    }
    if (!/^[a-zA-Z\s]{1,120}$/.test(name.value)) {
        alert('Name field must match a-z, A-Z');
        hasError = true;
    }
    if (!hasError) {
        console.log(`name: ${name.value}`);
        console.log(`e-mail: ${mail.value}`);
        console.log(`password: ${pass.value}`);
        alert('Form submitted!');
    }
};

