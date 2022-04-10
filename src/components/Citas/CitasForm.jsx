import React from 'react';
import { Form, Formik } from 'formik';
import { Button } from 'react-bootstrap';
import '../../styles/CitasForm/CitasForm.css'

const CitasForm = () => {
  return (
    <>
        <Formik
            initialValues={{
                nombre: '',
                num_documento: '',
                telefono: '',
                fecha_cita: '',
                hora_cita: ''
            }}
            onSubmit={(valores, e) => {
                e.preventDefault();
                console.log(valores);
            }}
            validate={(valores) => {
                let errores = {};

                if(!valores.nombre) {
                    errores.nombre = 'Por favor ingresa un nombre'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                    errores.nombre = 'El nombre solo puede contener letras y espacios'
                }

                return errores;
            }}
        >
            {(values, errors, handleSubmit, handleChange, handleBlur) => (

                <Form className='citas_form w-25 mx-auto' onSubmit={handleSubmit}>
                    {console.log(errors)}
                    <div className='input_container'>
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type='text'
                            id='nombre'
                            name='nombre'
                            placeholder='Ej. Juan Díaz'
                            value={values.nombre}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {/* {errors.nombre && <div className='text-red'>{errors.nombre}</div>} */}
                    <div className='input_container'>
                        <label htmlFor="num_documento">N° Documento</label>
                        <input 
                            type='text'
                            id='num_documento'
                            name='num_documento'
                            placeholder='CC'
                            value={values.num_documento}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className='input_container'>
                        <label htmlFor="telefono">Teléfono</label>
                        <input 
                            type='text'
                            id='telefono'
                            name='telefono'
                            placeholder='ej. 3123456789'
                            value={values.telefono}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className='input_container'>
                        <label htmlFor="fecha_cita">Fecha de la cita</label>
                        <input 
                            type='date'
                            id='fecha_cita'
                            name='fecha_cita'
                            value={values.fecha_cita}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className='input_container'>
                        <label htmlFor="hora_cita">Hora de la cita</label>
                        <input 
                            type='time'
                            id='hora_cita'
                            name='hora_cita'
                            placeholder='12:00'
                            value={values.hora_cita}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <Button type='submit' variant='success'>Registrar Cita</Button>
                </Form>
            )}

        </Formik>
    </>
  )
}

export default CitasForm