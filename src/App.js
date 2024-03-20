import './App.css';
import data from './data';

console.log(data);
function App() {
  return (
    <div className='App'>
      <header>
        <h1>ZoomBang Proofs</h1>
      </header>
      <main>
        {data.map((item, index) => {
          return (
            <details key={index}>
              <summary key={index}>{item.title}</summary>

              <div className='image-grid'>
                {item.images.map((image, index) => (
                  <div className='image-wrapper' key={index}>
                    <img src={image} alt='' />
                  </div>
                ))}
              </div>
            </details>
          );
        })}

        <div className='btn-container'>
          <a
            href='https://i.univbkstr.com/downloads/hi-res-jpgs.zip'
            className='btn btn-primary'>
            Download Hi-Res JPGs
          </a>
          <a
            href='https://i.univbkstr.com/downloads/hi-res-pngs.zip'
            className='btn btn-primary'>
            Download Hi-Res PNGs
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
