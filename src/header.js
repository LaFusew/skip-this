import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import ExploreIcon from '@material-ui/icons/Explore';

const Header = () => {
  return (
    <AppBar style={{ padding: 8, width: '100vw', background:'#575DFF'}} elevation={4} position='fixed'>
      <Toolbar>
        <ExploreIcon style={{marginRight:8}}/>
        <Typography variant="h5" variantMapping="h1">
          <strong>Nice</strong> - Urban Safari
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header