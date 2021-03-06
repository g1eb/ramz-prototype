import React from 'react'

import '../styles/agreement.css'

class Agreement extends React.Component {
  render() {
    return (
      <div className='agreement'>
        <div className='container'>
          <h1>Agreement component</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className='btn' onClick={this.props.onAgree}>
            I agree
          </div>
        </div>
      </div>
    )
  }
}

Agreement.defaultProps = {
  onAgree: undefined,
}

export default Agreement
