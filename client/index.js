import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Switch,
  BrowseRouter,
  HashRouter
} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

require('font-awesome/css/font-awesome.css');
require('./components/css/main.scss');

// components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

// pages
import HomePage from './components/HomePage.jsx';
import NewsPage from './components/NewsPage.jsx';
import NewsItemPage from './components/NewsItemPage.jsx';
import ResultsPage from './components/ResultsPage.jsx';
import EventPage from './components/EventPage.jsx';
import WikiPage from './components/WikiPage.jsx';
import WikiContentPage from './components/WikiContentPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import NotFound from './components/NotFound.jsx';

var ReactGA = require('react-ga');
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
      <Route path='*' component={NotFound} />
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

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));
