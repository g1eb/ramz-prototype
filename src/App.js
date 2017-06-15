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
      agreement: false,
    }
  }

  agree() {
    this.setState({
      'agreement': true,
    })
  }

  getView() {
    if ( this.state.agreement ) {
      return (
        <div>
          <Chef />
          <Input />
          <Output />
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
