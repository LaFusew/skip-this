import { IconButton, Typography } from '@material-ui/core'
import React from 'react'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

const EnigmeFinale = (props) => {
 
  return (
    <div style={{marginTop: 72 ,width:'100vw', height:'100vh', overflow:'hidden'}}>
      <div style={{display:'flex', alignItems:'center'}} >
        <IconButton onClick={() => props.history.push('/')}>
          <ArrowBackIosRoundedIcon style={{fill: 'white'}}/>
        </IconButton>
        <Typography variant='h5' style={{fontWeight:'bold', color:'white', paddingLeft: 12}}>
            Enigme Finale
        </Typography>
      </div>
      <div style={{paddingLeft:24, width:'100%', height:'100%', displya:'flex', alignItems:'center',justifyContent:'center'}}>
        <Typography>
           Formulaire de l'énigme finale en cours de finition
        </Typography>
      </div>
    </div>
  )
}

export default EnigmeFinale;