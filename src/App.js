import './App.css';
import { Details } from './components';
import data from './data';

// console.log(data);
function App() {
  return (
    <div className='App'>
      <header>
        <h1>Zoombang&trade; Proofs</h1>
      </header>
      <main>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.type}</h2>
              <Details products={item.products} />
            </div>
          );
        })}
        <div className='btn-container'>
          <a
            href='https://i.univbkstr.com/downloads/hi-res-jpgs.zip'
            className='btn btn-primary'
            title='Download JPGs'>
            Download Hi-Res JPGs
          </a>
          <a
            href='https://i.univbkstr.com/downloads/hi-res-pngs.zip'
            className='btn btn-primary'
            title='Download PNGs'>
            Download Hi-Res PNGs
          </a>
        </div>{' '}
      </main>
    </div>
  );
}

export default App;
