import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { IResponsData } from '../../const';
import styles from './location-info-tab.module.scss';

const LIST = ['IP ADDRES', 'LOCATION', 'TIMEZONE', 'ISP'];

type ILocationInfoTabProps = IResponsData;

const LocationInfoTab: React.FC<ILocationInfoTabProps> = (props) => {
  return (
    <Container className={styles.mainCont}>
      <Row xs={1} md={4}>
        {LIST.map((el, id) => {
          let value: string = '';

          switch (el) {
            case 'IP ADDRES':
              value = props.ip;
              break;
            case 'LOCATION':
              value = props.location.city;
              break;
            case 'TIMEZONE':
              value = props.location.timezone;
              break;
            case 'ISP':
              value = props.isp;
              break;
          }

          return (
            <Col
              key={id}
              className={`${
                id !== 3 ? styles.oneElemList : styles.oneElemListLast
              }`}
            >
              <h4 style={{ whiteSpace: 'nowrap' }}>{el}</h4>
              <p className={styles.textIntoElem}>{value}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default LocationInfoTab;
