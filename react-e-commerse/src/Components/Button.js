import React from 'react';
import { Button } from 'react-bootstrap';

const DownCartBtn =()=>{
    return(
        <>
        <div className='d-flex justify-content-center mb-5' >
            <Button className='btn btn-success' style={{marginBottom: '3rem'}}>See Cart</Button>
        </div>
        </>
    )
}

export default DownCartBtn;