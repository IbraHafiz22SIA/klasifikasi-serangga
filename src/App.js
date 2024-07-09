import logo from './logo.svg';
import './App.css';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import FileInput from './FileInput';
import Header from './Header';
import Data from './Data';
import Lecture from './Lecture';
import Team from './Team';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutUs />
      <FileInput />
      <Data />
      <Lecture />
      <Team />
    </div>
  );
}

export default App;
