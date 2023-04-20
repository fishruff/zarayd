
import './App.css';
import Header from './Components/Header';
import CatalogBlock from './HOC/CatalogBlock';
import Footer from './HOC/Footer';
import MainBlock from './HOC/MainBlock';
import PromoBlock from './HOC/PromoBlock';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainBlock/>
      <CatalogBlock/>
      <PromoBlock/>
      <Footer/>
    </div>
  );
}

export default App;
