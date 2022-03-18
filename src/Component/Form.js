import React, { useState, useEffect } from 'react';

export default function Form({setCards, getCards}) {
  const [titleState, setTitle] = useState('')
  const [descriptionState, setDescription] = useState('')
  const [doneState, setDone] = useState(false)
  const [alertCards, setAlertCards] = useState(false)

  useEffect(() => {
    let countDoneFalse = []
    getCards.forEach((card) => {
      if (card.done === false) {
        countDoneFalse.push(card.done)
        if (countDoneFalse.length > 4) {
          setAlertCards(true)
          window.alert('S\'il te plait, règle tes tâches. Tu es à 5 tâches non faites !')
        } else {
          setAlertCards(false)
        }
      }
    })
  }, [getCards])

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
        {alertCards ? <button type="submit" className="btn btn-primary disabled" >Enregistrer</button> : 
          <button type="submit" className="btn btn-primary" onClick={submitData}>Enregistrer</button>
        }
      </form>
    </>
  )
}