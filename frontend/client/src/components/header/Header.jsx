import React from 'react'

const headStyles = {
    border: '3px solid black',
    fontSize: '40px',
    display: 'flex',
    justifyContent: 'flexEnd',
    boxShadow: '10px 5px 5px black',
    background: 'rgb(34,193,195)',
    background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
    padding: '10px'
    
}


const Header = () => {
    return (
        <div style={headStyles}>
            <img style={{height: '40px', width: '40px'}} src="https://svgsilh.com/svg/1297486.svg"></img>
            WELCOME TO DRINK MIXOLOGY!
        </div>
    )
}

export default Header