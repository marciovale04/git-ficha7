import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import FilmesTable from './pages/FilmesTable';
import FilmesCard from './pages/FilmesCard';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  return (

    <BrowserRouter>

      <NavigationBar />

      <div style={{ minHeight: '80vh' }}>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/filmes-table"
            element={<FilmesTable />}
          />

          <Route
            path="/filmes-card"
            element={<FilmesCard />}
          />

          <Route
            path="/contacts"
            element={<Contacts />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/signup"
            element={<Signup />}
          />

        </Routes>

      </div>

      <Footer />

    </BrowserRouter>
  );
}

export default App;