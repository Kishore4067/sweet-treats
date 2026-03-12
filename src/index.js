import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Blogs from './pages/Blogs';
import { useState } from 'react';

function App() {
  // Cart state lifted here
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cartItems={cartItems} />}>
          <Route index element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="NoPage" element={<NoPage cartItems={cartItems} setCartItems={setCartItems} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);