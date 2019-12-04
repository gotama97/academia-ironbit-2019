import React from 'react';
import FirstBlock from './FirstBlock';
import Youtube from './Youtube';
import LogIn from './LogIn';

class App extends React.Component{
  render(){
    return(
      <div>
        <FirstBlock />
        <Youtube />
        <LogIn />
      </div>
      
    )
  }
}

export default App;
