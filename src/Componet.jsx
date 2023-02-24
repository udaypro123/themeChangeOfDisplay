import React from 'react'
import { useState } from 'react';
import Textcompo from './Textcompo';
const Componet = () => {

    const [darktheme, setdarktheme] = useState(false);

  return (
    <>
            <div className='maindiv' style={ darktheme ? { backgroundColor: "black", color: "white" } : { backgroundColor: "white" } }>

                <div className="headerdiv">
                    <h2>Overreacted</h2>
                    <button onClick={ () => {
                        setdarktheme(!darktheme)
                    } }>TOGGLE</button>
                </div>

                <div className="bodydiv">
                    <Textcompo text="The Wet Codebase" text1="The Wet Codebase" text2="The Wet Codebase" />
                    <Textcompo text="Godbye, Clean Code" text1="The clean Codebase" text2="The Wet Codebase" />
                    <Textcompo text="My decade in review" text1="The Wet Codebase" text2="The Wet Codebase" />
                </div>
            </div>
        </>
  )
}

export default Componet;
