import './App.css';
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer.jsx";
import Landing from './Component/Landing';
import Api from './Component/Api';
import Products from './Component/Products';


import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
     <Navbar />
     <Switch>
        <Route path="/api"        component={Api}      />
        <Route path="/products"   component={Products} />
        <Route path="/"           component={Landing}  />
     </Switch> 
     <Footer />
    </div>
  );
}

export default App;
