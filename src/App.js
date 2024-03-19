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
      </main>
    </div>
  );
}

export default App;
