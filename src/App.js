import { BrowserRouter, Route } from 'react-router-dom'
import Search from './components/Search'
import User from './components/User'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Search} />
        <Route path="/user" component={User} />
      </BrowserRouter>
    </div>
  )
}

export default App
