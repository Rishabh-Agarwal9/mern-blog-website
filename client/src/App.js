import './App.css';
import Header from './Header';
import Layout from './Layout';
import Post from './Post';
import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path ="/" element={<Layout/>}>
        <Route index element={<Post/>}/>
        <Route path ='/login' element={<div>login</div>}/>
      </Route>
    </Routes>
  )
}

export default App