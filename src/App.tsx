import React from 'react';

//import Example from './components/some-examples';
import State from './components/useStateComponents';
import UseEffectComponent from './components/UseEffectComponent';

const App: React.FC = () => {

  return (
    <div className="App">
      <h1>Use Effect</h1>
      <UseEffectComponent />
      
      <h1>Use State</h1>
    <State />

    </div>
  );
}

export default App;
