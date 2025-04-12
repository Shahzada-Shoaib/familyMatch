import logo from './logo.svg';
import photo1 from './photo1.jpg';
import Header from './components/header';
import './App.css';
import './index.css';
import HeroSection from './components/HeroSection';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={photo1} className="" alt="logo" />
        <img src={logo} className="" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Header/> */}
      <HeroSection/>
      <Content/>
     
      <div className="container flex flex-col items-center text-center space-y-4 mb-20">
        <p className='font-bold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure doloribus deserunt ipsam at nisi dignissimos<br />
          dicta voluptates quibusdam, pariatur, rem debitis laboriosam assumenda <br />
          ducimus odio magni vero doloremque eligendi.
        </p>
        <button className="border px-5 py-3 rounded-3xl bg-[#CD185B] font-bold text-white">
          Click here to find your Family's Match! &rarr;
        </button>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
