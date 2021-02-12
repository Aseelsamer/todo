import React, { useContext } from 'react';

import { themeContext } from './components/context/themeContext';
function Settings(props) {

  const context = useContext(themeContext);
  return (
    <>
      <h1>Settings</h1>
      <label>
        Completed sort
        <input type='checkbox' onChange={context.toggleIncomplete} />
      </label>
      <br />
      <label>
        {/* Date sort
        <input type='radio' defaultChecked name='sort' onChange={context.toggleDifficulty} /> */}
        Difficulty sort
        <input type='radio' name='sort' onChange={context.toggleDifficulty} />
      </label>
      <br />
      <label>
        Number of tasks
        <input type='number'  onChange={(e)=>context.numberPages(e.target.value)} />
      </label>
    </>
  )
}


export default Settings;