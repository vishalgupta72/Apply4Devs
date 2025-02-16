import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CompanyDetails from './pages/CompanyDetails'
import { useState } from 'react'
import { useCallback } from 'react'


function debounce(func, wait){
  let timeout;
  function debounced(...args){
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
      func.apply(this, args)
    }, wait)
  }

  debounced.clearTimeout = ()=>{
    clearTimeout(timeout);
  }

  return debounced;
}

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = useCallback(
    debounce((value)=>{
      setSearchQuery(value);
    }, 300)
    ,[])

    // console.log(searchQuery)

  const [companyLength, setCompanyLength] = useState(0);
  console.log(companyLength);
  
  return (
    <>
      <Navbar setSearchQuery={handleSearch} companyLength={companyLength} />
      <Router>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} setCompanyLength={setCompanyLength} />}/>
          <Route path='/companiesDetails/:id' element={<CompanyDetails/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
