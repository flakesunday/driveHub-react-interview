
import Layout from "./components/layout";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./css/App.css";
import "./css/layout.css"

function App() {
  return (
    <div>
      {/* <div className="app-header">
        <img src={logo} alt="logo" /> <span>Drivehub</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>Car list</div>
        <div>Cart</div>
      </div>
      <div className="app-footer">FOOTER</div> */}
      <Layout/>
       
      
    </div>
  );
}

export default App;
