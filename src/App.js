import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_KEY, BASE_URL } from './constants/index';
import styled from 'styled-components'
import "./App.css";
import Card from './components/Card';
import Cal from './components/Calendar'
import Calendar from 'react-calendar'


const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  
`

function App() {
  const [picDetails, setPicDetails] = useState(null);
  const [date, setDate] = useState(null);



  useEffect(() => {
    const fetchPic = () => {
      axios.get(`${BASE_URL}?date=${date}&api_key=${API_KEY}`)
        .then(res => {
          setPicDetails(res.data)
          // console.log(date)
        })
        .catch(err => {
          // console.log(date)
          // debugger
        })
    }
    fetchPic()
  }, [])

  function onChange(value, date) {
    console.log('value', value)
    console.log('date', date)
    setDate(value)
  }

  // const onChange = (date) => {
  //   setDate(date)
  //   console.log(date)
  // }
  // const onChange = date => setDate(date)

  return (
    <StyledApp className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!

      </p> */}

      {/* <Calendar
        onChange={onChange}
        value={date}
      /> */}
      <Cal
        date={date}
        setDate={setDate}
      />
      {/* <Cal date={date} changeDate={changeDate}/> */}
      {
        picDetails && <Card picDetails={picDetails} />

      }
    </StyledApp>
  );
}

export default App;
