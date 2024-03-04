import './App.css'
import React from 'react'
import AppChapters from './AppChapters'
import AppBarMenu from './AppBarMenu'
import AppAnswers from './AppAnswers';


function App() {
  const questons = 
    [
      {id: 0, text: 'Использовать раздел', varAnswers: ['Да','Нет','Возможно'], defAnswer: 'Да'},
      {id: 1, text: 'Выполняем сами', varAnswers: ['Да','Нет','Возможно'], defAnswer: 'Да'},
      {id: 2, text: 'Новая система', varAnswers: ['Да','Нет','Возможно'], defAnswer: 'Нет'},
      {id: 3, text: 'Использовать раздел', varAnswers: ['Да','Нет','Возможно'], defAnswer: 'Да'}
    ]    
  const [selectedIndex, setSelectedIndex] = React.useState(1)    
    return (
      <div className="App">    
        <AppBarMenu />
        <AppChapters />
        <AppAnswers questons />       
      </div>
    );
}

export default App