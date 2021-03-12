import './style/App.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Introduction from './pages/Introduction'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <Nav />

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
