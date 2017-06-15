import React from 'react'
import Background from './components/Background'
import Output from './components/Output'
import Input from './components/Input'

import './styles/app.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Input />
        <Output />
        <Background />
      </div>
    );
  }
}

export default App
