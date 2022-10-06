import Layout from './components/layout'
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Product from './pages/product';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
