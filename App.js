import React from 'react';
import { StatusBar } from 'react-native';
import Home from './screen/Home'
const App = () => {
  return (
    <>
      <StatusBar 
        hidden
        translucent 
        barStyle='light-content' 
      />
      <Home />
    </>
    )
  }


export default App