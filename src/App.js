import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import aws_exports from './aws-exports';
import ItemDashboard from './screens/itemDashBoard'
import {Container, Label, Form, Input, Search, Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Message } from 'semantic-ui-react'

Amplify.configure(aws_exports);


let apiName = 'ServerlessReactExampleCRUD';
let path = '/ServerlessReactExample';

class App extends Component {
  componentDidMount(){
    API.get(apiName, path).then(response => {
    console.log(response)
    }).catch(error => {
        console.log(error.response)
    });
  }
  render() {
    return (
      <Segment>
        <Menu>
           <Menu.Item name='home'> <Icon name="home"/></Menu.Item>
           <Menu.Item name='Items'/>
           <Menu.Item name='aboutUs' />
         </Menu>
         <ItemDashboard />
      </Segment>
    );
  }
}

export default App;
