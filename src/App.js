import { Redirect, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CustomRoutes from './components/CustomRoutes';
import routes from './routes/route.js';

function App() {
  return (
    <div className="main">

      <Navbar navItems={routes} />

      <Switch>
        <Redirect exact from="/" to={routes[0].path} />
        <CustomRoutes routes={routes} />
      </Switch>
    </div>
  );
}

export default App;
