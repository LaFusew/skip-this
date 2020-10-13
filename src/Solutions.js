import React from 'react'
import SafariButton from './Button'
import { Button } from '@material-ui/core';
 
const reponses = [4, 9, 7, 7, 5, 12, 2, 6, 8, 2, '1, 13, 3, 3, 1, 9', 10, 22, 2, 9]


const Solutions = (props) => {

  function handleFinalClick() {
    props.history.push('/final')
  }
  return (
    <div>
      <div style={{marginTop: 72, width:'100vw', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div style={{
          boxSizing: 'border-box',
          padding: 16,
          width: '100vw',
          margin:0,
          display:'flex',
          flexWrap:'wrap',
          alignItems: 'center',
          justifyContent:'center'
        }}>
          {
            reponses.map((reponse, index) => {
              return <SafariButton key={index} number={index + 1} reponse={reponse}/>
            })
          }
          <div style={{width: 136, height: 76}}/>
      </div>
      </div>
      <div style={{width : "100vw", height:'max-content', marginTop: 8, display:'flex',  alignItems:'center', justifyContent:'center'}}>
        <Button variant='contained' style={{padding: 18, fontWeight:'bold', color:'white', background: '#575DFF', width: 244}} onClick={handleFinalClick}>
          Enigme finale
        </Button>
      </div>
    </div>
  )
}

export default Solutions;