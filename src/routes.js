import React from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

export default (
    <Switch>
        <Route path='/' component={About} exact />
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
    </Switch>
)