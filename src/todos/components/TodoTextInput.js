'use strict'

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  render() {
    return (
      <input className={
        classnames({
          edit: this.props.editing,
          newTodo: this.props.newTodo
        })}
        type="text"
        placeholder={this.props.placeholder}
        value={this.state.text}
        />
    )
  }
}

TodoTextInput.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}

export default TodoTextInput