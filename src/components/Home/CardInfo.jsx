import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const CardInfo = (props) => {

    const {imagen, text, value } = props;

  return (
    <>
        <Card style={{width: "20rem", borderRadius: "16px"}} className='mx-auto'>
            <Card.Body>
                <Row>
                    <Col className='text-center'>
                        {/* <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1649563332/Varios/calendario_pncpzm.png" alt="logo" width={100}/> */}
                        <img src={imagen} alt="logo" width={100}/>
                    </Col>
                    <Col>
                        <Card.Text>
                            {text}
                            <br /> 
                            <strong className='fs-2'>{value}</strong>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    </>
  )
}

export default CardInfo