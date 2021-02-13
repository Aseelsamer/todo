import React, { useContext } from 'react';
import  {SettingsContext} from './context/settings';

function Settings(props) {

  const context = useContext(SettingsContext);
  return (
    <>
      <h1>Settings</h1>
      <label>
        Completed sort
        <input type='checkbox' onChange={context.toggleIncomplete} />
      </label>
      <br />
      <label>
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