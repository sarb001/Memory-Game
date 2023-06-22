import React from 'react'
import '../styles/App.css';

const Card = ({item ,handledata ,flipped}) => {

   const handleclick = () => {
        handledata(item);
   }

  return (
    <>
          <div className="card">
              <div className = {flipped ? "flipped" : ""}>
                    <img  className = 'front'     src = {item.img} alt = "front image" />
                    <img  className = 'back'    onClick = {handleclick}  src = "/src/assets/cover.png" 
                    alt = "back image" />
              </div>
              </div>
    </>
  )
}

export default Card