import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Sponsors.css';
import trueBlueITLogo from '../../assets/true-blue-it-logo.png';
import codeUpNTLogo from '../../assets/codeupnt-logo.png';
import dihLogo from '../../assets/dih-logo.png';

function Sponsors() {
    return (
        <Container className="sponsors-section mt-4">
            <h3 className="text-center">Our Sponsors</h3>
            <Row className="justify-content-center">
                <Col xs={12} sm={6} md={4} className="sponsor-item text-center mb-4">
                    <img src={trueBlueITLogo} alt="TrueBlue IT Services Logo" className="img-fluid" />
                    <p>TrueBlue IT Services</p>
                </Col>
                <Col xs={12} sm={6} md={4} className="sponsor-item text-center mb-4">
                    <img src={dihLogo} alt="Darwin Innovation Hub Logo" className="img-fluid" />
                    <p>Darwin Innovation Hub</p>
                </Col>
                <Col xs={12} sm={6} md={4} className="sponsor-item text-center mb-4">
                    <img src={codeUpNTLogo} alt="CodeUp NT Logo" className="img-fluid" />
                    <p>CodeUp NT</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Sponsors;