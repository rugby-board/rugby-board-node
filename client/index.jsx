import Router from 'preact-router';
import { h, render } from 'preact';
import { createHashHistory } from 'history';

// stylesheets
import './css/main.scss';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import NewsItemPage from './pages/NewsItemPage';
import ResultsPage from './pages/ResultsPage';
import EventPage from './pages/EventPage';
import WikiContentPage from './pages/WikiContentPage';
import WikiPage from './pages/WikiPage';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';

// setup Google Analytics

/* eslint-disable no-undef */
ga('create', 'UA-92008867-1', 'auto');

const changeRoute = (e) => {
  ga('send', 'pageview', {
    page: e.url,
  });
};

// main router
const Main = () => (
  <Router history={createHashHistory()} onChange={changeRoute}>
    <HomePage path="/" />
    <NewsItemPage path="/news/:id" />
    <NewsPage path="/news" />
    <ResultsPage path="/results" />
    <EventPage path="/event/:name" />
    <WikiContentPage path="/wiki/:name" />
    <WikiPage path="/wiki" />
    <AboutPage path="/about" />
    <NotFound path="*" />
  </Router>
);

// main app
const App = () => (
  <div className="container">
    <Header />
    <Main />
    <Footer />
  </div>
);

// render to body
render(<App />, document.body);
