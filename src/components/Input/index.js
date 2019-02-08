import React from 'react'
import PropTypes from 'prop-types'

// Styles
import './Input.scss'

const Input = ({
  icon,
  placeholder,
  type,
  label
}) => (
  <div className="input">
    {
      label && (
        <label className="label">{label}</label>
      )
    }

    <div className="input-wrapper">
      {
        icon && (
          <span className="icon">
            <img src={require(`../../assets/icons/${icon}.svg`)} alt={icon} />
          </span>
        )
      }
      <input type={type} placeholder={placeholder} />
    </div>
  </div>
)

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string
}

export default Input
