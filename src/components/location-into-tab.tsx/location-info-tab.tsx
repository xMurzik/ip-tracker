import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const LocationInfoTab: React.FC = () => {
  return (
    <ListGroup horizontal="md">
      <ListGroup.Item>This ListGroup</ListGroup.Item>
      <ListGroup.Item>renders horizontally</ListGroup.Item>
      <ListGroup.Item>on lg</ListGroup.Item>
      <ListGroup.Item>and above!</ListGroup.Item>
    </ListGroup>
  );
};

export default LocationInfoTab;
