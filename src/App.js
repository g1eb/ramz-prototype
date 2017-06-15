import React from 'react'
import Background from './components/Background'
import Agreement from './components/Agreement'
import Output from './components/Output'
import Input from './components/Input'
import Chef from './components/Chef'

import './styles/app.css'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      'agreement': false,
      'animation': false,
    }
  }

  agree() {
    this.setState({
      'agreement': true,
    })
  }

  play() {
    this.setState({
      'animation': true,
    })
    window.setTimeout(() => {
      this.setState({
        'animation': false,
      })
    }, 1000)
  }

  getControls() {
    if ( !this.state.animation ) {
      return (
        <div>
          <Input />
          <Output />
        </div>
      )
    }
  }

  getView() {
    if ( this.state.agreement ) {
      return (
        <div>
          <Chef isCooking={this.state.animation} cook={this.play.bind(this)} />
          {this.getControls()}
        </div>
      )
    } else {
      return <Agreement onAgree={this.agree.bind(this)} />
    }
  }

  render() {
    return (
      <div>
        {this.getView()}
        <Background />
      </div>
    );
  }
}

export default App
