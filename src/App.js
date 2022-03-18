import React, {useState} from 'react';
import Form from './Component/Form';
import Card from './Component/Card';

export default function App() {
  const [cards, setCards] = useState([])

  const updateDone = (id, value) => {
    setCards(cards.map(property => {
      if (property.id === id) {
        return {...property, done: value}
      }
      return property
    }))
  }

  const deleteCard = (id) => {
    setCards(cards.filter(card => card.id !== id))
  }

  let cardsParsed = []
  
  for (let i = 0; i < cards.length; i++) {
    cardsParsed.push(
      <Card 
        title={cards[i].title} 
        getCardId={deleteCard}
        getDone={updateDone}
        description={cards[i].description} 
        key={cards[i].id} 
        id={cards[i].id}
        done={cards[i].done}
      />
    )
  }
  console.log('app', cards)
  return(
    <div className="container px-5">
      <h1 className="text-center">Une TODO list incroyable !</h1>
      <div className="mb-5">
        <Form getCards={cards} setCards={setCards} />
      </div>
      <div className="row">
        {cardsParsed}
      </div>
    </div>
  )
}

