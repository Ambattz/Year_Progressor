import MainCard from './Components/MainCard'
import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';


var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
function daysInYear(year) {
  return ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) ? 366 : 365;
}

var day = Math.floor(diff / oneDay);
var totalday = daysInYear(new Date().getFullYear());
var week = Math.floor(day / 7);
var totalweek = Math.floor(totalday / 7);
var month = now.getMonth();
var percent = Math.floor((day / totalday) * 100);

const App = () => {

  const [View, setView] = useState(false);
  const showHandler = () => {
    setView(!View);
    console.log("Toggling");
  }
  return (
    <div >
      <div className='button'>
        <Button variant="contained" size="large" color="success" onClick={showHandler}>
          Show YProgressor
        </Button>
      </div>
      {View ? <MainCard p={percent} d={day} td={totalday} w={week} tw={totalweek} m={month} /> : null}
    </div>
  );
}

export default App;
