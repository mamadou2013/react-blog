import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetail';
import NotFound from './NotFound';

function App() {
  // const title = 'Welcome to the react tutorial';
  // const like = 50;
  // const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />
      <Router>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/blogs/:id" component={BlogDetails}/>
            <Route path='*' component={NotFound}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
