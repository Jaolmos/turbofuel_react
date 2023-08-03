import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Box, Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FuelDispenser from './pages/FuelDispenser'
import Product from './pages/Product'
import Quantity from './pages/Quantity'
import PaymentMethod from './pages/PaymentMethod'
import Summary from './pages/Summary'


function App() {
  return (
    <Box>
      <Navbar />
      <Container padding={10}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fuel-dispenser" element={<FuelDispenser />} />
          <Route path="/product" element={<Product />} />
          <Route path="/quantity" element={<Quantity />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App
