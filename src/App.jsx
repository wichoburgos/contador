import { useState} from "react";

function App() {

  const [cuenta, setCuenta] = useState(999999999999999);

  const handleClic= () => {
  
    setCuenta(cuenta + 1);

 };

  return (
    <div className="App">
      <h3>contador</h3>
      <hr/>
      
      <h2 className="text-center">{cuenta}</h2>
      <hr/>
      <div style={{display: "flex", justifyContent:"flex-end", marginRight:"5px",}}>
      <button type="button"className="btn btn-primary" onClick={handleClic} >+1</button>
      </div>
      <hr/>
      <div>
      <button type="button" class="btn btn-dark">cerrar la ventana</button>
      </div>
      </div>
  );
}

export default App;
