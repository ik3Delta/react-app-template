'use strict'

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import TodoItem from '../../../src/todos/components/TodoItem'

function setup () {
  const props = {
    todo: {
      id: 0,
      text: 'Use Redux',
      completed: false,
    },
    completeTodo: sinon.spy (),
  }
  const component = shallow (
    <TodoItem {...props} />
  )

  return {
    props: props,
    component: component,
  }
}

describe ('TodoItem component', () => {
  it ('should render correctly', () => {
    const { component } = setup ()
    expect(component.type()).to.equal('li')
    const div = component.children('div')
    expect(div).to.have.length(1)
    expect(div.children('input')).to.have.length(1)
    expect(div.children('input').prop('checked')).to.be.false
    expect(div.children('label')).to.have.length(1)
    expect(div.children('label').children().text()).to.equal('Use Redux')
    expect(div.children('button')).to.have.length(1)
  })

  it ('should call completeTodo() when onChange is fired', () => {
    const { component, props } = setup()
    const input = component.find ('input')
    input.simulate ('change')
    expect(props.completeTodo.called).to.be.true
  })
})
