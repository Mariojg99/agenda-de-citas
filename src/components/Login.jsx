import React from 'react';
import '../styles/CitasForm/CitasForm.css'

const Login = () => {
  return (
    <>
        <form className='w-50 mx-auto px-5'>
            <div className='logo_container text-center'>
                <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1649563332/Varios/calendario_pncpzm.png" alt="logo" width={100}/>
                <h2 className='my-2'>Agenda de Citas</h2>
            </div>
            <div className="input_container">
                <label htmlFor="usuario">Usuario</label>
                <input 
                    type="text"
                    placeholder='Ej. usuario123'
                />
            </div>
            <div className="input_container">
                <label htmlFor="contraseña">Contraseña</label>
                <input 
                    type="password"
                    id='contraseña'
                />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>

    </>
  )
}

export default Login