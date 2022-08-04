import './App.css';
import pic from './pic.jpeg';
import image from './2060506.jpg';

function App() {
  return (

    <div className="App">

      <img className='image' src={pic} alt="Logo" /> 
      
      <header className="App-header">
        <h1 className='header'>
          Faiza Qadir 
        </h1>
        <h3 className='header'>
          Frontend Developer
        </h3>
        <h6 className='header'>
          faizaqadir14@gmail.com
        </h6>
      </header>

      <div className='wrapper'>
        <button type='button' className='button1'>
          Email
        </button>
        <button type='button' className='button2'>
          LinkedIn
        </button>
      </div>

      <div className='add'>
        <h3>
          About
        </h3>
        <p>
          <small>qwertyuowdawjabfqwertyuowdawjabfcbnczxncjwqwertyuowdaw</small>
        </p>

        <h3>
          Interests
        </h3>
        <p>
          <small>qwertyuowdawjabfcbnczxncjwqwertyuowdawjabfcbnczx </small>
        </p>
      </div>

      <footer >
        <img  src={image} alt="Logo" width={200} />
      </footer>

    </div>
  );
}

export default App;
