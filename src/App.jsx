import { useState } from 'react'
import { Header}from './components/Header'

function App() {
  //funciones del Use
  const[presupuesto,set_presupuesto] = useState(0)
      const [ValidPresupuesto, set_validPresupuesto] = useState(false);

  return (
    <>
    
      <Header
        presupuesto={presupuesto}
        set_presupuesto={set_presupuesto}
        ValidPresupuesto={ValidPresupuesto}
        set_validPresupuesto={set_validPresupuesto}
      />
    </>
  );
}

export default App
