import Header from './components/Header';
import './App.css';
import Form from './components/Form';
import WhiteBackground from './components/WhiteBackground';
import BlueBackground from './components/BlueBackground';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <BlueBackground/>
      <WhiteBackground/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
