import React from 'react';
import { Button, Container } from 'react-bootstrap';
import image from './play.png';

const Home = () => {
    return (
        <>
            <div style={{ width: '100vw', backgroundColor: 'darkgray', display: 'flex', flexDirection: 'column', height: '20rem', justifyContent: 'center', alignItems: 'center', position: 'relative', bottom: '8px' }}>
                <Button style={{ backgroundColor: 'transparent', width: '20rem', height: '4rem' }}><h3>Get Our Latest Album</h3></Button>
                <Button style={{ backgroundColor: 'transparent', border: 'none', width: '18rem' }} ><img src={image} alt='' style={{ height: '5rem' }} /></Button>
            </div>


            <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height:'115vh' }}>
                <h2>Tour</h2>
                <div className='d-flex justify-content-evenly align-items-center' style={{ width: '45vw', padding: '26px 0px', borderBottom: '2px solid black' }}>
                    <span>July-16</span>
                    <span>DETROIT, MI</span>
                    <span>DTE ENERGY MUSIC THEATRE</span>
                    <Button>BUY TICKETS</Button>
                </div>
                <div className='d-flex justify-content-evenly align-items-center' style={{ width: '45vw', padding: '26px 0px', borderBottom: '2px solid black' }}>
                    <span>July-19</span>
                    <span>TORONTO,ON</span>
                    <span>BUDWEISER STAGE</span>
                    <Button>BUY TICKETS</Button>
                </div>
                <div className='d-flex justify-content-evenly align-items-center' style={{ width: '45vw', padding: '26px 0px', borderBottom: '2px solid black' }}>
                    <span>July-22</span>
                    <span>
                        BRISTOW, VA</span>
                    <span>
                        BRISTOW, VA</span>
                    <Button>BUY TICKETS</Button>
                </div>
                <div className='d-flex justify-content-evenly align-items-center' style={{ width: '45vw', padding: '26px 0px', borderBottom: '2px solid black' }}>
                    <span>July-29</span>
                    <span>
                        PHOENIX, AZ</span>
                    <span>AK-CHIN PAVILION</span>
                    <Button>BUY TICKETS</Button>
                </div>
                <div className='d-flex justify-content-evenly align-items-center' style={{ width: '45vw', padding: '26px 0px', borderBottom: '2px solid black' }}>
                    <span>Aug-6</span>
                    <span>LAS VEGAS, NV</span>
                    <span>T-MOBILE ARENA</span>
                    <Button>BUY TICKETS</Button>
                </div>
                <div className='d-flex justify-content-evenly align-items-center' style={{ width: '45vw', padding: '26px 0px', borderBottom: '2px solid black' }}>
                    <span>Aug-14</span>
                    <span>CONCORD, CA</span>
                    <span>CONCORD, CA</span>
                    <Button>BUY TICKETS</Button>
                </div>

            </Container>
        </>
    )
}
export default Home;