import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Location from '../location/Location';
import '../../App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { deleteBeach } from '../../actions/beachActions';

const BeachCard = ({ beachInfo }) => {
  const dispatch = useDispatch();
  const { name, location_id, description, id } = beachInfo;

  return (
    <>
      <br />
      <div className="beach-card">
        <h2>{name}</h2>
        
        <p><Location id={location_id} /></p>
        
        <p>{description}</p>

        <Container>
          <Row>
            <Col>
              <Link to={`/beaches/${id}`}><Button variant="info">View Beach</Button></Link>            
            </Col>
            <Col>
              <Button variant="dark" onClick={() => dispatch( deleteBeach(id) )}>Delete Beach</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
    </>
  )
};

export default BeachCard;