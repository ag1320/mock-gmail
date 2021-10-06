import './App.css';
import { Component } from 'react';
import EmailList from './EmailList'
import Email from './Email'
import SendButton from './SendButton'

class App extends Component{
  constructor(){
    super();
    this.state = {
      emails: []
    }
    //bind handle change this
  }
  async componentDidMount(){
    let response = await fetch('http://localhost:3001/emails/');
    let emails = await response.json();
    this.setState({emails})
    console.log(this.state.emails)
  }

  handleChange(value){
    //change state based on event target value
  }

  render(){
    return (
      <div>
        <EmailList emails = {this.state.emails}/>
        <Email emails = {this.state.emails}/>
        <hr/>
        <SendButton handleChange = {this.handleChange}/>
      </div>
    );
  }
}

export default App;
