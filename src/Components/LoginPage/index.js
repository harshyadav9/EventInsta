import React, { Component } from 'react'
import { Button, Divider, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { auth, login, resetPassword,googleSignIn } from './../../helpers/auth'
var firebase = require('firebase');
var email, password;
const docsButtonStyle = {
  position: 'fixed',
  margin: '2em',
  bottom: 0,
  left: 0,
  animation: 'back-to-docs 1.5s ease-in-out infinite',
  zIndex: 6
}

const style = (
  <style>{`
    @keyframes back-to-docs {
        0% { transform: translateY(0); }
        50% { transform: translateY(0.35em); }
        100% { transform: translateY(0); }
    } 
  `}</style>
)
function handleLogin() {
  login(email, password)
    .then(() => {
      email = "";
      password = "";
    })
    .catch((error) => {
      // this.setState(setErrorMsg('Invalid username/password.'))
    })
}

export default class Login extends Component {
  // noinspection SpellCheckingInspection
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //  Firebase config
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().languageCode = 'en'
  }

  render() {
    return (
      <div>
        {style}
        <div className='login-form'>
          {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
          <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 350 }}>
              <Form size='large'
                onSubmit={handleLogin}
              >
                <Segment stacked>
                  <Header as='h2' color='teal' textAlign='center'>
                    {' '}EventInsta
                  </Header>
                  <Divider />
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    onChange={(e, { value }) => { email = value }}
                    placeholder='E-mail address'
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    onChange={(e, { value }) => { password = value }}
                    type='password'
                  />
                  <Button color='teal' icon='mail outline' fluid size='medium' content='Signin with Email' />
                  <br />
               
                </Segment>
              </Form>
              <Button color='google plus' icon='google plus' fluid size='medium' content='Sign in with Google'  onClick={googleSignIn}/>
              <Message>
                <Button
                  color='grey'
                  content='Like'
                  icon='heart'
                />

                <Button
                  basic
                  color='blue'
                  content='Fork'
                  icon='fork'
                />
              </Message>
            </Grid.Column>
          </Grid>
        </div>
        <div style={docsButtonStyle}>
        </div>
      </div>
    )
  }
}