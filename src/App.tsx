import styles from './App.module.scss';
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import LocationInfoTab from './components/location-into-tab.tsx/location-info-tab';
import * as Icon from 'react-bootstrap-icons';

const App: React.FC = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.upperImage}>
        <Form.Label className={styles.labelIp} htmlFor="ipForInput">
          IP Address Tracker
        </Form.Label>
        <InputGroup className={styles.containerForInputs}>
          <Form.Control
            size="lg"
            type="text"
            id="ipForInput"
            placeholder="Type some ip"
            className={styles.ipInput}
          />
          <InputGroup.Text className={styles.inputGroupText} id="basic-addon2">
            <Icon.CaretRightFill size={30} color="white" />
          </InputGroup.Text>
        </InputGroup>
        <LocationInfoTab />
      </div>
    </div>
  );
};

export default App;
