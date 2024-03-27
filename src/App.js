import './App.css';
import { ButtonContainer, Details } from './components';
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
            <div style={{ borderBottom: '1px solid' }} key={index}>
              <h2>{item.type}</h2>
              <Details products={item.products} />
              {item.links ? (
                <ButtonContainer type={item.type} links={item.links} />
              ) : null}
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
