import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Switch,
  BrowseRouter,
  HashRouter
} from 'react-router-dom';

require('font-awesome/css/font-awesome.css');

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
import AboutPage from './components/AboutPage.jsx';
import NotFound from './components/NotFound.jsx';

require('./components/css/main.scss');

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/news/:id" component={NewsItemPage} />
      <Route path="/news" component={NewsPage} />
      <Route path="/results" component={ResultsPage} />
      <Route path="/event/:name" component={EventPage} />
      <Route path="/wiki" component={WikiPage} />
      <Route path="/about" component={AboutPage} />
      <Route path='*' component={NotFound} />
    </Switch>
  </main>
);

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
