import React, { useState, useEffect } from 'react';

// formulario inicial.
const frmInicialLogin = {
    username: '',
    password: '',
};

const URLLogin = "http://localhost:3500/api/login";

const Login = () => {


    const [form, setForm] = useState(frmInicialLogin);

    const {username, password} = form;

     const handlerChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

   
    const handlerSubmit = (e) => {

        e.preventDefault();

        if (username.trim() === "" || password.trim() === "") {
            alert("Datos incompletos");
            return;
        }

        realizarPeticion(form);

    }



    const realizarPeticion = (form) => {

        const options = {
          method: "POST",
          headers: { "Content-type": "application/json;charset=utf-8"},
          body: JSON.stringify(form)
        }
    
        const recogerToken = async () => {
      
          try {
            const res = await fetch(URLLogin, options);
            const nuevaRespuesta = await res.json();
            console.log(username,password);
            localStorage.setItem("token", nuevaRespuesta.token);

      
          } catch (error) {
      
            console.log("error");
      
          }
      
        }
      
        recogerToken();        
      }




    return (

        <div className="contenedor-form">

            <form onSubmit={handlerSubmit}>

                <div className="divColumna">
                    <input type="text" name="username" placeholder="Ingrese su username" onChange={handlerChange} value={username} />
                    <input type="password" name="password" placeholder="Ingrese su password" onChange={handlerChange} value={password} />
                </div>

                <input type="submit" value={"Ingresar"} onClick={handlerSubmit} />


            </form>

        </div>

    );
}

export default Login;