import { IconButton, Typography, TextField, makeStyles, Button } from '@material-ui/core'
import React, { useState } from 'react'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
const useStyle = makeStyles(() => ({
  textField: {
    marginBottom: 8
  }
}))
const EnigmeFinale = (props) => {

  //It will be dirty, i'm sorry if anyone is reading this : 
  const [reponse1, setReponse1] = useState("");
  const [reponse2, setReponse2] = useState("");

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);


  function handleChange(e) {
    switch (e.currentTarget.id) {
      case '1':
        setReponse1(e.target.value);
        break;
      case '2':
        setReponse1(e.target.value);
        break;
      default: 
        break;
    }
  }

  function handleChange2(e) {
    switch (e.currentTarget.id) {
      case '2':
        setReponse2(e.target.value);
        break;
      default: 
        break;
    }
  }

  function handleSubmit(e) {
    const reponses = reponse1
    const solutions = "497751226821133319102229"
    if (reponses === solutions) {
      setVisible(true);
    }
  }

  function handleSubmit2(e) {
    const reponses = reponse2
    const solutions = "rauba capeu"
    if (reponses === solutions) {
      setVisible2(true);
    }
  }
  const classes = useStyle();
  return (

    <div style={{marginTop: 80 ,width:'100vw', height:'100vh', overflowY:'scroll', overflowX:'hidden'}}>
      <div style={{display:'flex', alignItems:'center'}} >
        <IconButton onClick={() => props.history.push('/')}>
          <ArrowBackIosRoundedIcon style={{fill: 'white'}}/>
        </IconButton>
        <Typography variant='h5' style={{fontWeight:'bold', color:'white', paddingLeft: 12}}>
            Enigme Finale
        </Typography>
      </div>
      <div style={{paddingLeft:24, width:'80%', height:'100%', displya:'flex', alignItems:'center',justifyContent:'center'}}>
        <Typography style={{fontWeight:'bold', color:"white", marginTop: 24, marginBottom: 24}}>
           Entrez toutes vos réponses d'affilés DANS L'ORDRE et sans espace, si rien ne se passe lors du clic sur valider, soit vous avez une mauvaise réponse, soit vous avez mal rempli la réponse
        </Typography>
        <TextField className={classes.textField} label='???' id="1" size="large"  onChange={handleChange} value={reponse1} />
        
        <Button variant='contained' onClick={handleSubmit}>
          Valider
        </Button>

        <div style={{ visibility: visible ? 'visible' : 'hidden'}}>
          <Typography variant='h5' style={{padding: '16px 0px', fontWeight:'bold', color:"white"}}>
            D’après l’histoire quel est l’endroit à nice où l’on dit que les chapeaux volent ?
          </Typography> 

        <TextField className={classes.textField} label="Réponse" id="2" size="large"  onChange={handleChange2} value={reponse2} />
        <Button variant='contained' onClick={handleSubmit2}>
          Valider
        </Button>

          <Typography  variant='h5' style={{padding: '16px 0px',  fontWeight:'bold', color:"white", visibility: visible2 ? 'visible' : 'hidden'}}>
            Bravo !!! Allez maintenant prendre une photo de là où tous les niçois se sont déjà assis pour finir cet Urban Safari !
          </Typography>
        
        </div>

      </div>

    </div>
  )
}

export default EnigmeFinale;