import './App.css'
import React from 'react'
import AppBarMenu from './AppBarMenu'
import AppTabs from './AppTabs'
import initData from "./templates.json"


function App() {
  
  return (
      <div className="App">
        <AppBarMenu init = {initData} />
        <AppTabs init = {initData} />
      </div>
    );
}

export default App