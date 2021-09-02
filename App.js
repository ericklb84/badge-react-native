import React from 'react';
import Splash from './screens/splash';
import GlobalContext from './context/globalContext';
import Main from './screens/main';



export default function App() {

  const [screen,setScreen] = React.useState(<Main/>);

  const [context,setContext] = React.useState({
    app:{
      screen:{
        screen,
        setScreen: newScreen => setScreen(newScreen)
      }
    }
  });

  return(
    <GlobalContext.Provider value={[context,setContext]}>
      { screen }
    </GlobalContext.Provider>
  );
}
