import React from 'react'
import { Table } from 'react-bootstrap'

const TableCitas = () => {
  return (
    <>
        <Table responsive='sm' className='text-center fs-5'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>N° Documento</th>
                    <th>Teléfono</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                </tr>
            </thead>
            <tbody>
                <td>1</td>
                <td>Jose Mario</td>
                <td>1067965272</td>
                <td>3122020296</td>
                <td>21/04/2022</td>
                <td>08:00</td>
            </tbody>
        </Table>
    </>
  )
}

export default TableCitas