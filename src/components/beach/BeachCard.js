import React from 'react';
import { Link } from 'react-router-dom';
import Location from '../location/Location';
import '../../App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const BeachCard = ({ beachInfo, locationInfo }) => {
  return (
    <>
      <br />
      <div className="beach-card">
        <h2>{beachInfo.name}</h2>
        
        {locationInfo &&
          <p><Location {...locationInfo} /></p>
        }
        
        <p>{beachInfo.description}</p>

        <Container>
          <Row>
            <Col>
              <Link to={`/beaches/${beachInfo.id}`}><Button variant="info">View Beach</Button></Link>            
            </Col>
            <Col>
              <Button variant="dark" onClick={() => console.log(`Beach #${beachInfo.id} deleted!`)}>Delete Beach</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
    </>
  )
};

export default BeachCard;