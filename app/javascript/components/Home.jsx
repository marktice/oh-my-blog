import React from 'react'
import PropTypes from 'prop-types'

class Home extends React.Component {
  state = {
    name: null
  }

  render() {
    return (
      <React.Fragment>
        <h1>Oh My Blog</h1>
        <p>Oh hi {this.props.name}</p>
      </React.Fragment>
    )
  }
}

Home.defaultProps = {
  name: 'David'
}

Home.propTypes = {
  name: PropTypes.string
}

export default Home
