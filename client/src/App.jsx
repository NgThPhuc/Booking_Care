import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import AtHome from './pages/AtHome';
import AtTheHospital from './pages/AtTheHospital';
import Blog from './pages/Blog';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='home' element={<Home />} />
                    <Route path='at-home' element={<AtHome />} />
                    <Route path='at-hospital' element={<AtTheHospital />} />
                    <Route path='blogs' element={<Blog />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
