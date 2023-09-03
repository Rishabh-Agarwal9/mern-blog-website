import './App.css';
import Layout from './Layout';
import {Routes, Route} from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Routes>
      <Route path ="/" element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path ='/login' element={<LoginPage/>}/>
        <Route path ='/register' element={<RegisterPage/>}/>
      </Route>
    </Routes>
  )
}

export default App;