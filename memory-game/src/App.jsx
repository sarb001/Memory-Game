import React, { useEffect, useState } from 'react'
import './styles/App.css';
import Card from './Components/Card';

const images = [
      {  "img" : "/src/assets/helmet-1.png" , matched : false },  
      {  "img" : "/src/assets/potion-1.png" , matched : false },
      {  "img" : "/src/assets/ring-1.png"   , matched : false },
      {  "img" : "/src/assets/scroll-1.png" , matched : false },
      {  "img" : "/src/assets/shield-1.png" , matched : false },
      {  "img" : "/src/assets/sword-1.png"  , matched : false },
]


const App = () => {

   const  [cardData,setcardData] = useState([]);
    const [Turns,setTurns] = useState(0);
   const [choiceone,setchoiceone] = useState(null);
   const [choicetwo,setchoicetwo] = useState(null);

   const shufflecards = () => {
      const shuffledcards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((carditem) => ({...carditem , id : Math.random() }))

       setchoiceone(null);
       setchoicetwo(null);
      setcardData(shuffledcards);
      setTurns(0);
   }

    useEffect(() => {
       shufflecards();
    },[])

    //  console.log('cards are --',cardData);
     const handledata = (cardData) => {
          choiceone ? setchoicetwo(cardData) : setchoiceone(cardData);
     }


   // compare two selected cards
      useEffect(() => {    
        if(choiceone && choicetwo){


           if(choiceone.img === choicetwo.img){
             setcardData(prev => {
              return prev.map(card => {
                  if(card.img === choiceone.img){
                     return {...card , matched : true}
                  }else{
                    return card
                  }
              })
             })
             resetTurn();
           }
          else{
           setTimeout(() => resetTurn(),1000)
         }


       }
      },[choicetwo])

     console.log('cards inside Effect  --',cardData);


     const resetTurn = () => {
      setchoiceone(null);
      setchoicetwo(null);
      setTurns(prevturn => prevturn + 1);
     }

  return (
    <>
        <div className = "main-app">
            <h2>  Memory Game here -- </h2>  
            <h3> Turns - {Turns} </h3> 
            <button onClick = {shufflecards} > Start Game  </button>
              <div className="main-side">
                  {cardData.map((item) => {
                      return  <Card  handledata = {handledata}    
                       item = {item} key = {item.id} 
                       flipped = {item === choiceone || item === choicetwo || item.matched}
                       />
                  })}
              </div>

        </div>
    </>
  )
}

export default App