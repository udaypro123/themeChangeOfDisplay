import React from 'react'

const Textcompo = (props) => {
    return (
        <div>
            <h3>{ props.text } </h3>
            <p className='para'>{ props.text1 } </p>
            <p>{ props.text2 } </p>

        </div>
    )
}

export default Textcompo;
