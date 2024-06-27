import './App.css'
import React from 'react'
import AppBarMenu from './AppBarMenu'
import AppTabs from './AppTabs'
import initData from "./templates.json"


function App() {
  
  //data = require('fs')           //считываем файл настроек
  /* const data = fs.readFileSync('D:\ReactJS\react-offer-1\public\static\json\templates.json')
  const initJson = JSON.parse(data) */

  return (
      <div className="App">
        <AppBarMenu init = {initData} />
        <AppTabs init = {initData} />
      </div>
    );
}

export default App