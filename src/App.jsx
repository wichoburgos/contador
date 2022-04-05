import { useState} from "react";

function App() {

  const [cuenta, setCuenta] = useState(0);
  const [paso,setPaso] =useState("1");

  const handleClic= () => {
  
    setCuenta(cuenta + paso);

 };

 const handleClic1= () => {
  
  setCuenta(cuenta - paso);

};

const handleClic2= () => {
  
  setCuenta(cuenta - cuenta);

};

const handleInputChange= (e) => {
  if (isNaN(e.target.value)) {
    return;
  }
  setPaso(Number (e.target.value));

};



  return (
    <div className="App">
      <h3>contador</h3>
      <hr/>
      
      <h2 className="text-center">{cuenta}</h2>
      <hr/>
      <div style={{display: "flex", justifyContent:"flex-end", marginRight:"5px",}}>
        <label>
          paso
        <input id="paso"
         name="paso"
          type="text"
           onChange={handleInputChange}
            value={paso}
         style={{
          marginLeft: "5px",
          width:"60px"}}
          />
          
          
        </label>
      <button type="button"className="btn btn-primary" onClick={handleClic} >suma</button>
      <hr/>
      <button type="button"className="btn btn-primary" onClick={handleClic2} >reinicio</button>
      <button type="button"className="btn btn-primary" onClick={handleClic1} >resta</button>
      </div>
      
      <hr/>
      <div>
      <button type="button" class="btn btn-dark">:)     </button>
      </div>
      
      
      </div>
      

      
  );
}

export default App;
