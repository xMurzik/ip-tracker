import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import LocationInfoTab from './components/location-into-tab.tsx/location-info-tab';
import * as Icon from 'react-bootstrap-icons';
import { REG_DOMAIN, REG_IP } from './const';
import { IResponsData } from './const';
import { API_CURRENT_POSITION } from './const';
import Map from './components/map/map';
import { RotatingLines } from 'react-loader-spinner';
import styles from './App.module.scss';

const App: React.FC = () => {
  const [valueInput, setValueInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IResponsData | null>(null);
  const [error, setError] = useState(false);

  const fetchData = async (inputValue: string = '') => {
    let valueToFetch: string = '';

    if (REG_IP.test(inputValue)) {
      valueToFetch = `&ipAddress=${inputValue}`;
    }

    if (REG_DOMAIN.test(inputValue)) {
      valueToFetch = `&domain=${inputValue}`;
    }

    try {
      const res = await fetch(`${API_CURRENT_POSITION}${valueToFetch}`);

      const ans: IResponsData = await res.json();
      setIsLoading(false);
      setValueInput('');
      setData(ans);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading || data === null) {
    return (
      <div className={styles.loadingStage}>
        <RotatingLines
          strokeColor="lightblue"
          strokeWidth="5"
          animationDuration="0.75"
          width="150"
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return (
      <button
        onClick={() => {
          setError(false);
          fetchData();
        }}
      >
        Try again?
      </button>
    );
  }

  return (
    <>
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
            value={valueInput}
            onChange={(evt) => setValueInput(evt.target.value)}
          />
          <InputGroup.Text
            onClick={() => {
              if (
                !REG_IP.test(valueInput) === false &&
                !REG_DOMAIN.test(valueInput) === false
              ) {
                console.log('asd');
                return;
              }
              fetchData(valueInput);
            }}
            className={styles.inputGroupText}
            id="basic-addon2"
          >
            <Icon.CaretRightFill size={30} color="white" />
          </InputGroup.Text>
        </InputGroup>
        <LocationInfoTab {...data} />
      </div>

      <div className={styles.mainWrapper}>
        <Map lat={data.location.lat} lng={data.location.lng} />
      </div>
    </>
  );
};

export default App;
