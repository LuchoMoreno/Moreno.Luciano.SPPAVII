import React, {useState} from 'react';

// formulario inicial.
const frmInicialRegistro = {
    username: '',
    password: '',
};

const URLRegistro = "http://localhost:3500/api/users";

const Registro = () => {


    const [form, setForm] = useState(frmInicialRegistro);

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

        realizarPeticionRegistro(form);
        setForm(frmInicialRegistro);
    }

    const realizarPeticionRegistro = (form) => {

        const options = {
          method: "POST",
          headers: { "Content-type": "application/json;charset=utf-8"},
          body: JSON.stringify(form)
        }
    
        const registrarse = async () => {
      
          try {
            const res = await fetch(URLRegistro, options);
            const nuevaRespuesta = await res.json();
            alert("Se ha registrado con éxito");
          } catch (error) {
      
            console.log("error");
      
          }
      
        }
        registrarse();        
      }

    return (  

        <div className="contenedor-form">

            <form onSubmit={handlerSubmit}>

                <div className="divColumna">
                    <input type="text" name="username" placeholder="Ingrese su username" onChange={handlerChange} value={username} />
                    <input type="password" name="password" placeholder="Ingrese su password" onChange={handlerChange} value={password} />
                </div>

                <input type="submit" value={"Registrarse"} onClick={handlerSubmit} />


            </form>

        </div>

    );
}
 
export default Registro;