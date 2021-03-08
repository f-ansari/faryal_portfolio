import './App.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Introduction from './components/Introduction'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <main>
        <Switch>
          <Route exact path="/" component={Introduction} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </main>
    </div>
  )
}

export default App
