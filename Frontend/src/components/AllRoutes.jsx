import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure Router is imported
import Login from './Login';
import SignUp from './Signup';
import HomePage from '../pages/HomePage';
import ProductForm from './ProductForm';

export function AllRoutes() {


    
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductForm />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
