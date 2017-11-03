import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AliveStats from './aliveStats';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate: '',
      birthday: '1990-06-21',
      showStats: false
    }
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({
      birthday: this.state.newDate,
      showStats: true
    });
  }

  render() {
    return (
      <div className='App'>
        <Form inline>
          <h2>Enter Your Birthday</h2>
          <FormControl
            type='date'
            onChange={ event => this.setState({ newDate: event.target.value })}
          >
          </FormControl>
          <Button onClick={() => this.changeBirthday()}>
            Submit
          </Button>
          {
            this.state.showStats ?
            <div className='fade alive-stats'>
              <AliveStats date={this.state.birthday} />
            </div>
            :
            <div></div>
          }
        </Form>
      </div>
    )
  }
}

export default App;
