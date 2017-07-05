import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  HashRouter,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// stylesheets
import './components/css/main.scss';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

// pages
import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';
import NewsItemPage from './components/NewsItemPage';
import ResultsPage from './components/ResultsPage';
import EventPage from './components/EventPage';
import WikiContentPage from './components/WikiContentPage';
import WikiPage from './components/WikiPage';
import AboutPage from './components/AboutPage';

const ReactGA = require('react-ga');

ReactGA.initialize('UA-92008867-1');

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/news/:id" component={NewsItemPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/results" component={ResultsPage} />
      <Route path="/event/:name" component={EventPage} />
      <Route path="/wiki/:name" component={WikiContentPage} />
      <Route path="/wiki" component={WikiPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="*" component={NotFound} />
    </Switch>
  </main>
);

const history = createHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname + location.hash });
  ReactGA.pageview(location.pathname + location.hash);
});

const App = () => (
  <div className="container">
    <Header />
    <Main />
    <Footer />
  </div>
);

/* global document */
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));
