import React from 'react';
import { useFormik } from 'formik';
import { Button, Col, Row } from 'react-bootstrap';
import '../../styles/CitasForm/CitasForm.css'

const CitasForm = () => {
    const formik = useFormik({
        initialValues: {
            nombre: '',
            num_documento: '',
            telefono: '',
            fecha_cita: '',
            hora_cita: ''
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
        validate: values => {
            const errors = {};

            if(!values.nombre) {
                errors.nombre = 'Debe escribir un nombre'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
                errors.nombre = 'El nombre solo debe contener letras y espacios'
            }


            return errors;
        }
    });

    return (
        <>
            <form className='citas_form mx-auto' onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
                <Row>
                    <Col>
                        <div className='input_container'>
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type='text'
                                id='nombre'
                                name='nombre'
                                placeholder='Ej. Juan Díaz'
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className='input_container'>
                            <label htmlFor="num_documento">N° Documento</label>
                            <input
                                type='text'
                                id='num_documento'
                                name='num_documento'
                                placeholder='CC'
                                value={formik.values.num_documento}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className='input_container'>
                            <label htmlFor="telefono">Teléfono</label>
                            <input
                                type='text'
                                id='telefono'
                                name='telefono'
                                placeholder='ej. 3123456789'
                                value={formik.values.telefono}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </Col>

                    <Col>
                        <div className='input_container'>
                            <label htmlFor="fecha_cita">Fecha de la cita</label>
                            <input
                                type='date'
                                id='fecha_cita'
                                name='fecha_cita'
                                value={formik.values.fecha_cita}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className='input_container'>
                            <label htmlFor="hora_cita">Hora de la cita</label>
                            <input
                                type='time'
                                id='hora_cita'
                                name='hora_cita'
                                placeholder='12:00'
                                value={formik.values.hora_cita}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </Col>


                </Row>

                <Button type='submit' variant='success' disabled={formik.isSubmitting}>Registrar Cita</Button>
            </form>
        </>
    )
}

export default CitasForm