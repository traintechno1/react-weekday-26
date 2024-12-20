import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import AboutCompany from './components/About/AboutCompany'
import AboutCustomers from './components/About/AboutCustomers'
import AboutProducts from './components/About/AboutProducts'
import AddMovie from './components/AddMovie'
import Cars from './components/Cars'
import IncrementDecrement from './components/IncrementDecrement'
import Navbar from './components/Navbar'
import SideEffect from './components/SideEffect'
import { Users } from './components/Users'
import { UserList } from './components/UserList'
import { Posts } from './components/Posts/Posts'
// Here App is a React Functional Component
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className='app-container'>
          <Routes>
            <Route path='' Component={Users} /> 
            <Route path='cars' Component={Cars} />
            <Route path='add-movie' Component={AddMovie} />
            <Route path='side-effect' Component={SideEffect} />
            <Route path='increment' Component={IncrementDecrement} />
            <Route path='users' Component={UserList} />
            <Route path='posts/:id' Component={Posts} />
            <Route path='about' Component={About}>
              <Route path='company' Component={AboutCompany} />
              <Route path='products' Component={AboutProducts} />
              <Route path='customers' Component={AboutCustomers} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
