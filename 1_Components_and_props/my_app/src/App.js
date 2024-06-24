import logo from './logo.svg';
import './App.css';

function App() {

  const h1 = (
    <div>
      <h1>Header</h1>
      <p>
        Paragraph
      </p>
    </div>
  )


  return (
    <div className="App">
      {h1}
    </div>
  );
}

export default App;
