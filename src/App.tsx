import React, { useState, useRef } from 'react';
import { useQuery } from 'react-query';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import LocationInfoTab from './components/location-into-tab.tsx/location-info-tab';
import * as Icon from 'react-bootstrap-icons';
import { REG_DOMAIN, REG_IP } from './const';
import { IResponsData } from './const';
import { RotatingLines } from 'react-loader-spinner';
import { API_CURRENT_POSITION } from './const';
import Map from './components/map/map';
import styles from './App.module.scss';

const fetchData = async (inputValue: string = '') => {
  let valueToFetch: string = '';

  if (REG_IP.test(inputValue)) {
    valueToFetch = `&ipAddress=${inputValue}`;
  }

  if (REG_DOMAIN.test(inputValue)) {
    valueToFetch = `&domain=${inputValue}`;
  }

  const res = await fetch(`${API_CURRENT_POSITION}${valueToFetch}`);

  return (await res.json()) as IResponsData;
};

const App: React.FC = () => {
  const [valueInput, setValueInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const { data, isSuccess, isLoading } = useQuery({
    queryFn: () => fetchData(valueInput),
    queryKey: ['apiData', valueInput],
    keepPreviousData: true,
  });

  if (isLoading) {
    return (
      <div className={styles.loadingStage}>
        <RotatingLines
          strokeColor="lightblue"
          strokeWidth="3"
          animationDuration="0.75"
          width="150"
          visible
        />
      </div>
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
            placeholder="Type some ip or domain"
            className={styles.ipInput}
            ref={inputRef}
            onKeyDown={(evt: React.KeyboardEvent<HTMLSpanElement>) => {
              if (evt.key === 'Enter') {
                setValueInput(inputRef.current?.value as string);
                if (inputRef.current) {
                  inputRef.current.value = '';
                }
              }
            }}
          />
          <InputGroup.Text
            onClick={() => {
              setValueInput(inputRef.current?.value as string);
              if (inputRef.current) {
                inputRef.current.value = '';
              }
            }}
            className={styles.inputGroupText}
            id="basic-addon2"
          >
            <Icon.CaretRightFill size={30} color="white" />
          </InputGroup.Text>
        </InputGroup>

        {isSuccess && <LocationInfoTab {...data} />}
      </div>

      <div className={styles.mainWrapper}>
        {isSuccess && <Map lat={data.location.lat} lng={data.location.lng} />}
      </div>
    </>
  );
};

export default App;
