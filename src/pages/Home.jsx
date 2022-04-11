import React from 'react';
import { Row } from 'react-bootstrap';
import CardInfo from '../components/Home/CardInfo';
import TableCitasHoy from '../components/Home/TableCitasHoy';

const Home = () => {
  const fechaHoy = new Date().toDateString();
  // const hoy = (fechaHoy.getDate() + " "+ (fechaHoy.getMonth()+1) + " " + fechaHoy.getFullYear());
  // const hoy = `${fechaHoy.getDate()}/${(fechaHoy.getMonth()+1)}/${fechaHoy.getFullYear()}`
  // console.log(hoy);
  console.log(fechaHoy);

  return (
    <div style={{marginInline: '200px', padding: '25px'}}>
      <h3 className='mb-3'><strong>Hoy:</strong> {fechaHoy}</h3>
      <Row>
        <CardInfo 
          imagen='https://res.cloudinary.com/karma09-jm/image/upload/v1649563332/Varios/calendario_pncpzm.png'
          text='Cantidad de citas para hoy:'
          value='1'
        />

        <CardInfo 
          imagen='https://res.cloudinary.com/karma09-jm/image/upload/v1649635719/Varios/esperar_rc3saw.png'
          text='Citas pendientes:'
          value='1'
        />
        <CardInfo 
          imagen='https://res.cloudinary.com/karma09-jm/image/upload/v1649635719/Varios/comprobado_igb4ih.png'
          text='Citas atendidas:'
          value='0'
        />

      </Row>

        <div className="mt-4 bg-light" style={{borderRadius: "16px", padding: "10px"}}>
          <TableCitasHoy />
        </div>
    </div>
  )
}

export default Home;