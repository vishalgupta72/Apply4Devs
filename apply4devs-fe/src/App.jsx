// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CompanyList from './pages/CompanyList'
import CompanyDetails from './pages/CompanyDetails'
import { useState } from 'react'

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <Router>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />}/>
          <Route path='/companies' element={<CompanyList/>} />
          <Route path='/companiesDetails/:id' element={<CompanyDetails/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
