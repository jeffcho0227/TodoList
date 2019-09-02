import React, { useState } from 'react';

const Form = () => {
  const [enterTitle, setTitle] = useState('');
  const [enterLocation, setLocation] = useState('');
  const [enterTimeInterval, setTimeInterval] = useState('');
  const [enterNote, setNote] = useState('');
  // const stateRef = useRef(state)


  return (
    <div>
      <input onChange={ e => setTitle(e.target.value)} value={enterTitle} name='Title' type="text"/>
      <input onChange={ e => setLocation(e.target.value)} value={enterLocation} name='Location' type="text"/>
      <input onChange={ e => setTimeInterval(e.target.value)} value={enterTimeInterval} name='TimeInterval' type="text"/>
      <input onChange={ e => setNote(e.target.value)} value={enterNote} name='Note' type="text"/>
    </div>
  )
}

export default Form;

/*

* only use hooks in functional 
* can only use hooks in the roote of that component
* can not use hooks for loop, if statment, or in other functions

*/