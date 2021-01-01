import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class ContactInfo extends React.Component{
    render(){
      return(
        <div>{this.props.contact.name}
          {this.props.contact.phone}</div>
      )
    }
  }
  
  class Contact extends React.Component{
    
    constructor(props){
      super(props);
      this.state={
        contactData:[
          {name:'Abet', phone:'010-0000-0001'},
          {name:'Betty', phone:'010-0000-0002'},
          {name:'Charile', phone:'010-0000-0003'},
          {name:'David', phone:'010-0000-0004'}
        ]
      }
    }
    render(){
      const mapToComponent = (data) =>{
        return data.map((contact,i)=>{
          return (<ContactInfo contact={contact} key={i}/>);
        });
      };
      
      return(
        <div>
          <div>Abet 010-0000-0001</div>
          <div>Betty 010-0000-0002</div>
          <div>Charile 010-0000-0003</div>
          <div>David 010-0000-0004</div>
        </div>
      );
    }
  }
  
  class App extends React.Component {
    render() {
      return (
        <Contact/>
      );
    }
  };
  
  ReactDOM.render(
    <App></App>,
    document.getElementById("root")
  );