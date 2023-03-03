import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Categories from './components/Categories';
import About from './components/About';
import Program from './components/Program';
import Kids from './components/Kids';
import BlockChain from './components/BlockChain';
import NotFound from './components/NotFound';
import Course from './components/Course';
import CourseItem from './components/CourseItem';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/categories' element={<Categories/>}>
            <Route path='program' element={<Program/>}></Route>
            <Route path='kid' element={<Kids/>}></Route>
            <Route path='blockchain' element={<BlockChain/>}></Route>
          </Route>
          <Route path='/course/*' element={<Course/>}>
            <Route path=':id' element={<CourseItem></CourseItem>}></Route>
          </Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
