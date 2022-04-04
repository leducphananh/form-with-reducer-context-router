import { lazy, Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import routes from './routes/route.js';

const CustomRoutes = lazy(() => import('./components/CustomRoutes'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="main">
        <Navbar navItems={routes} />

        <Switch>
          <Redirect exact from="/" to={routes[0].path} />
          <CustomRoutes routes={routes} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
