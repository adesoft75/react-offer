import './App.css'
import React from 'react'
import AppChapters from './AppChapters'
import AppBarMenu from './AppBarMenu'
import AppAnswers from './AppAnswers';


function App() {
    return (
      <div className="App">
        <AppBarMenu />
        <AppChapters />
        <AppAnswers questons />
      </div>
    );
}

export default App