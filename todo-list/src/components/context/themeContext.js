import React, {useState} from 'react';

export const ThemesContext = React.createContext();

function ThemeProvider(props) {
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
        <ThemesContext.Provider value={state}>
            {props.children}
        </ThemesContext.Provider>
    )
    
}

export default ThemeProvider;

