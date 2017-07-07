import Router from 'preact-router';
import { h, render } from 'preact';
import { createHashHistory } from 'history';

// stylesheets
import './css/main.scss';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import AdminPage from './pages/AdminPage';
import NotFound from './pages/NotFound';

// main router
const Main = () => (
  <Router history={createHashHistory()}>
    <AdminPage path="/" />
    <AdminPage path="/:name" />
    <NotFound path="*" />
  </Router>
);

// main app
const App = () => (
  <div className="container">
    <Main />
  </div>
);

// render to body
render(<App />, document.body);
