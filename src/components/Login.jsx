import React from 'react';
import '../styles/CitasForm/CitasForm.css';
import { loginEmailPassAsync } from '../actions/actionLogin';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

const Login = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => {
            dispatch(loginEmailPassAsync(values.email, values.password))
        }
    })
  return (
    <>
        <form className='w-25 mx-auto px-5 my-5'
            onSubmit={formik.handleSubmit}
        >
            <div className='logo_container text-center'>
                <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1649563332/Varios/calendario_pncpzm.png" alt="logo" width={100}/>
                <h2 className='my-2'>Agenda de Citas</h2>
            </div>
            <div className="input_container">
                <label htmlFor="usuario">Usuario</label>
                <input 
                    type="text"
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    />
            </div>
            <div className="input_container">
                <label htmlFor="contraseña">Contraseña</label>
                <input 
                    type="password"
                    id='contraseña'
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>

    </>
  )
}

export default Login