import React, { Component } from 'react';
// import { MuiThemeProvider } from '@material-ui/core';
// import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,co',
  'Mexico,mx',
  'Madrid,es'
];



class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {
    return (

      <React.Fragment>
        {/* <MuiThemeProvider> */}
        <Grid>
          <Col xs={12}>
            <AppBar tittle="Weather App" position="fixed">
              <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                  WeatherApp
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities}
                onSelectedLocation={this.handleSelectedLocation} ></LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className='detail'>
                  <ForecastExtended></ForecastExtended>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
        {/* </MuiThemeProvider> */}
      </React.Fragment>
    );
  }
}

export default App;