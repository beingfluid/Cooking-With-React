import Counter from "./Counter";
import CounterHooks from "./CounterHooks";
import React, {useState} from "react";

export const ThemeContext = React.createContext();

function App () {
  console.log( "Render App" );
  const [ theme, setTheme ] = useState( 'green' );
  return (
    <ThemeContext.Provider value={{backgroundColor:theme}}>
      Counter
      <Counter initialCount={ 0 } />
      CounterHooks
      <CounterHooks initialCount = { 0 } />
        
      <button onClick={ () => setTheme( prevTheme => {
          return prevTheme === 'green' ? 'blue' : 'green';
      } ) } > 
        Toggle Theme
      </button>

    </ThemeContext.Provider>
  );
}

export default App;
