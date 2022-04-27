import React from 'react';
import { Route, Routes} from 'react-router-dom'
import { useDispatch } from 'react-redux'


import { Header } from './components';
import { Home , Cart } from './pages';
import { fetchPizzas } from './redux/actions/pizzas'

function App() {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    console.log(dispatch(fetchPizzas()))
  });

  return (
    <div className="wrapper">
        <Header/>
        <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </div>
      </div>
  );
}

export default App;