import React from 'react';
import CitasForm from '../components/Citas/CitasForm';
import TableCitas from '../components/Citas/TableCitas';

const Citas = () => {
  return (
    <>
        <CitasForm />
        <div className="mt-4 bg-light" style={{borderRadius: "16px", padding: "10px"}}>
          <TableCitas />
        </div>
    </>
  )
}

export default Citas;