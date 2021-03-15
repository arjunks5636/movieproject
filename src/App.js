
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login"
import ImageFrame from './ImageFrame'

function App() {
  return (
    <section className="App">
      <div className="row h-100">
        <div className="col-12 col-sm-6 p-0">
          <ImageFrame/>
        </div>
        <div className="col-12 col-sm-6 p-0 login-form-wrapper">
          <Login/>
        </div>
      </div>
    </section>
   
  );
}

export default App;
