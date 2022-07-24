import React from 'react';
import './App.css';

const App=()=> {
  return (
    <div>
      {/*<h1>Codetrain is awesome, react works</h1>*/}
      <WelcomeComponent name = "Using ClassJSX"/>
    </div>
  );
}

class WelcomeComponent extends React.Component {
  render(){
    return (  
        <h1>{this.props.name} react works!!!!</h1>  
    )    
  };
}

export default App;
