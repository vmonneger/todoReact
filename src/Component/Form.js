import React, { useState } from 'react';

export default function Form({setCards}) {
  const [titleState, setTitle] = useState('')
  const [descriptionState, setDescription] = useState('')
  const [doneState, setDone] = useState(false)

  const inputTitle = (e) => {
    setTitle(title => e.target.value)
  }

  const inputDescription = (e) => {
    setDescription(desc => e.target.value)
  }

  const submitData = (e) => {
    e.preventDefault();
    
    const dataCard = {
      id: Math.floor(Math.random() * 1000),
      title: titleState,
      description: descriptionState,
      done: doneState
    }

    setCards(prev => [...prev, dataCard])
  }

  return  (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Le titre de ta TODO</label>
          <input onChange={inputTitle} type="text" className="form-control" id="title" aria-describedby="text" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">La description de ta TODO</label>
          <input onChange={inputDescription} type="text" className="form-control" id="description" aria-describedby="text" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={submitData}>Enregistrer</button>
      </form>
    </>
  )
}