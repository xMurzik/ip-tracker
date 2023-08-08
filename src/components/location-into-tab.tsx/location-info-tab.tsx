import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import styles from './location-info-tab.module.scss';

const LIST = ['IP ADDRES', 'LOCATION', 'TIMEZONE', 'ISP'];

const LocationInfoTab: React.FC = () => {
  return (
    <Container className={styles.mainCont}>
      <Row xs={1} md={4}>
        {LIST.map((el, id) => (
          <Col
            key={id}
            className={`${
              id !== 3 ? styles.oneElemList : styles.oneElemListLast
            }`}
          >
            <h4 style={{ whiteSpace: 'nowrap' }}>{el}</h4>
            <p>192,2323,234,123</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LocationInfoTab;
