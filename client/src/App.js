import React from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route  } from 'react-router-dom'
import Launch from './components/Launch'
import './App.css';
import logo from './logo.jpg';
import Launches from './components/launches'
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

class App extends React.Component {
  render(){
  return (
    <ApolloProvider client={client}>
      <Router>
    <div className="container">
      <img src={logo} alt="SpaceX" style={{ width:300, height:120, display:'block', margin: 'auto' }} />
      
      <Route exact path="/" component={Launches}/>
      <Route exact path="/launch/:flight_number" component={Launch}/>

    </div>
    </Router>
  </ApolloProvider>
  );
  }
}

export default App;
