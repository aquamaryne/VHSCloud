import Layout from "./components/layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={'Main'} />
          <Route path="plans"     element={'Plans'} />
          <Route path="docs"      element={'Docs'} />
          <Route path="dashboard" element={'Dashboard'} />
          <Route path="login"     element={'Login'} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
