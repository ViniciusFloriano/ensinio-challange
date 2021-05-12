import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Loading from './components/Loading';
import NavBar from './components/NavBar';
import { TranslationContext } from './context/TranslationContext';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';

const Routes: React.FC = () => {
  const { loading, error } = useContext(TranslationContext);

  return (
    <BrowserRouter>
      <Switch>
        {loading && <Route component={Loading} path="*" />}
        {error && <Route component={ErrorPage} path="*" />}
        {!loading && !error && (
          <Route exact path="/">
            <NavBar />
            <Home />
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
