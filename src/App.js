import './App.css';

import {Routes, Route} from 'react-router-dom';
import {Layoutspage} from "./pages/Layoutspage";
import {Filterpage} from "./pages/Filterpage";
import {Homepage} from "./pages/Homepage";
import {Notfoundpage} from "./pages/Notfoundpage";
import {Layout} from "./components/Layout";

function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path='filter' element={<Filterpage/>}/>
                <Route path='layouts' element={<Layoutspage/>}/>
                <Route path='*' element={<Notfoundpage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
