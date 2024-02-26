import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-user' element={<AddForm/>}/>
        <Route path='/update/:id' element={<UpdateForm/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
