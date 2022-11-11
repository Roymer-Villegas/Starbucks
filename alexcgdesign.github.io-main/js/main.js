function login()
{
    let user=document.getElementById("Correo").value;
    let pass=document.getElementById("password").value;

    if(user=="roimer" && pass=="1234")
    {
        window.location="index.html";
        alert("Datos correctos");
    }

    else
    {
        alert("Datos incorrectos");
    }
}

const Correo = document.getElementById('Correo')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) =>{
    e.preventDefault()
    const data = {
        Correo: Correo.value,
        password: password.value
    }

    console.log(data)
})