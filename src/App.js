import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_KEY, BASE_URL } from './constants/index';

import "./App.css";
import Card from './components/Card';

function App() {
  const [picDetails, setPicDetails] = useState(null);

  useEffect(() => {
    const fetchPic = () => {
      axios.get(`${BASE_URL}?api_key=${API_KEY}`)
        .then(res => {
          setPicDetails(res.data)
          console.log(picDetails)
        })
        .catch(err => {
          debugger
        })
    }
    fetchPic()
  }, [])




  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!

      </p> */}

      {
        picDetails && <Card picDetails={picDetails} />

      }
    </div>
  );
}

export default App;
