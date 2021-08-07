import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Layout from './components/layout/layout';

function App() {
  return (
    <Router>
			<Switch>
				<Route path="/">
					<Layout/>
				</Route>
			</Switch>
    </Router>
  );
}

export default App;
