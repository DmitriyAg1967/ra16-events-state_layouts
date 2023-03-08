import React from 'react'
import PropTypes from 'prop-types'

function IconSwitch({ onSwitch, icon }) {

  return (
    <header className='switcher'>
      <span className='material-icons' onClick={onSwitch}>{icon}</span>
    </header>
  )
}

IconSwitch.propTypes = {
  onSwitch: PropTypes.func,
  icon: PropTypes.string
}

export default IconSwitch