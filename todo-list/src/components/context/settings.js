import React, { useState } from 'react';
export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [incomplete, setIncomplete] = useState(true);
  const [difficulty, setDifficulty] = useState('');
  const [pages, setPages] = useState(3);


  const toggleIncomplete = () => {
    setIncomplete(incomplete ? false : true)
  }
  const toggleDifficulty= ()=>{
    setDifficulty(difficulty ? false : true)
  }
  const numberPages = (n)=>{
    setPages(n)
  }
  const state = {
    incomplete,
    toggleIncomplete,
    difficulty,
    toggleDifficulty,
    pages,
    numberPages
  }
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;