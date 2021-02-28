import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails'

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList />
          <BrowserRouter>
            <CountryDetails />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
