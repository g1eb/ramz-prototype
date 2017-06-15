import React from 'react'

import '../styles/chef.css'

class Chef extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      'animate': false,
    }
  }

  getView() {
    if ( this.props.isCooking ) {
      return <h1>Animation</h1>
    } else {
      return (
        <div className='container'>
          <h1>chef</h1>
          <div className='btn' onClick={this.props.cook}>
            Play
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className='chef'>
        {this.getView()}
      </div>
    )
  }
}

Chef.defaultProps = {
  isCooking: false,
  cook: undefined,
}

export default Chef
