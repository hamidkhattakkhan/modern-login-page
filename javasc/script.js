const container = document.getElementById('container');
const registerBtn=document. getElementById('register');
const loginBTN = document.getElementById('login');
registerBtn.addEventListener('click' , ()=>
{
    container.classList.add("active");
})

lo.addEventListener('click' , ()=>
{
    container.classList.remove("active");
})