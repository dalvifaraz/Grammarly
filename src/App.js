import './App.css';
import Grammar from './Component/Grammar.jsx';
import Upload from './Component/Upload.jsx';
function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Grammarly Clone</h1>
        <p>Grammarly Clone helps you write mistake-free in Gmail,
          Facebook, Twitter, LinkedIn, and any other app you use.
          Even in text messages! Write Better in Seconds.</p>
      </div>

      <Grammar />


      <Upload />

      <div id="disclaimer">Copyright © 2022 Developed by SufranKhan for Daten and Wissen Pvt. Ltd.
      </div>
    </div>
  );
}

export default App;
