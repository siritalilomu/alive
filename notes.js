// input your birthday and it will tell you how long you lived
// create-react-app alive
// cd alive
// yarn add react-bootstrap
// yarn start

//  1
// rename the src to src-default
// create new folder src
// inside src create index.js


// ##  src/index.js  ##
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>alive</div>, document.getElementById('root')
)

//  2
// create components folder in src
// create file App.js in components folder
//
// ##  src/components/App.js ##
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>alive component</div>
    )
  }
}

export default App;


// go back to index .js make it look like this
// ##  src/index.js  ##
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />, document.getElementById('root')
)


//  3
// importing bootstrap into App.js
import { Form, FormControl, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Form inline>
          <h2>Enter Your Birthday</h2>
          <FormControl type='date'>
          </FormControl>
          <Button>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;

//  google getting strated with bootstrap
//   copy the CDN and pasted it on the public/index.html above the title tag


//  4
// create App.css file in the components folder
.App {
  padding: 5%;
  text-align: center;
  font-size: 1rem;
}
// than you need to import the css into the App.js file
import './App.css';
// than add the className='App' into the 1st div


//  5
//  Now lets make it dynamic by adding strated
//  Create the constructor

constructor() {
  super();
  this.state = {
    newDate: ''
  }
}
//  than hooked up a onChange to the FormControl
<FormControl
  type='date'
  onChange={ event => this.setState({ newDate: event.target.value })}
>


//  6
//  create a helper function called changeBirthday()

changeBirthday() {
  console.log(this.state);
}

//  console log it so you can see what happen when you click the button
<Button onClick={() => this.changeBirthday()}>

//  its working
//  now lets hook it up

//  we need a birthday key
birthday: '1990-06-21'
//
changeBirthday() {
  console.log(this.state);
  this.setState({ birthday: this.state.newDate });
}

// Lets make it show up on the scree
//  create aliveStats.js in the components folder
import React, { Component } from 'react';

//  we are using props to pass the data from parent to child
class AliveStats extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.date}</h3>
      </div>
    )
  }
}

export default AgeStats;

//  now go to App.js and import aliveStats
import AliveStats from './aliveStats';

// add the stats below the button
<AliveStats date={this.state.birthday} />
// now it show render the birthday you hard coded

timeSince(date) {
  let today = new Date().getTime();
  let otherDay = new Date(date).getTime();
  let difference = Math.abs(today - otherDay);

  return `${difference} milliseconds`
}

// below the <h3> add
// <div>
//   <h3>{this.props.date}</h3>
  <h4>Congrats on {this.timeSince(this.props.date)}!</h4>
// </div>

//  now lets convert milliseconds into days months and years
let days = Math.floor(difference / (1000*3600*24));
let years = Math.floor(days/365);
days -= years*365;
let months = Math.floor(days/365);
days -= months*31

return `${years} years, ${months} months, and ${days} days`

//  Lets add a photo
// download a photo from internet
//  create assets folder in the src folder
// drag the photo into the assests folder
// now import it into aliveStats
import partyPopper from '../assets/party-popper.jpg';

// create an img tag below the h4
<img src={partyPopper} alt='party-popper' className='party-popper' />

// go into App.css to chage the img size
.party-popper {
  width: 300px;
  height: 300px;
}

// now lets make it only hows the picture whe you click Submit
// go into App.js
// this.state = {
//   newDate: '',
//   birthday: '1990-06-21',
  showStats: false
// }
// </Button>
{
  this.state.showStats ?
  <AliveStats date={this.state.birthday} />
  :
  <div></div>
}
// </Form>

// changeBirthday() {
//   console.log(this.state);
//   this.setState({
//     birthday: this.state.newDate,
    showStats: true
//   });
// }


// add animations
// go into App.css
.fade {
  animation-name: fade-in;
  animation-duration: 2s;
}

.alive-stats {
  opacity: 100;
}

@keyframes fade-in {
  from { opacity: 0 }
  to { opacity: 20 }
}

// now go into App.js
// warp the aliveStats in a div with the className
// </Button>
// {
//   this.state.showStats ?
  <div className='fade alive-stats'>
    <AliveStats date={this.state.birthday} />
  </div>
//   :
//   <div></div>
// }
// </Form>
