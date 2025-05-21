
import './App.css'
import Card from './Componet/Card'
import Ex404 from './Componet/Exception/Ex404';
import Dashboard from './Componet/Dashboard';
import Navbar from './Componet/Navbar';
import Content from './Componet/Content';
import ReactMain from './Componet/React/ReactMain';
import Language from './Componet/Language';
import { Routes,Route } from 'react-router-dom';
import MainComponent from './Componet/MainComponent';

function App() {
  

  return (
    <div className='main_container'>
         
      <Routes>
        <Route path='/' element={<MainComponent/>}>
        {/* <Route index element = {<Dashboard/>}/> */}
        <Route path='/learning' element={<Language/>}/>
        {/* <Route exact path ='/react' element = {<ReactMain/>}/>

        <Route path='/spring-boot' element={<ReactMain/>}/>
        <Route path='*' element = {<Ex404/>}/> */}
                <Route path ='/react/:type' element = {<Content/>}/>
        </Route>
      </Routes>


    </div>
  )
}

export default App
