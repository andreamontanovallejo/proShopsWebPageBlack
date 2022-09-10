import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.module.scss'
import './index.css'
import CustomRoute from './HOC/CustomRoute'
import Dashboard from './HOC/Layouts/Dashboard'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <CustomRoute isPrivate={false} path="/" component={Dashboard} />
      </BrowserRouter>
    )
  }
}
