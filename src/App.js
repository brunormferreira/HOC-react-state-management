import logo from './logo.svg';
import './App.css';

import WithExamplesProvider from './hoc';
import { useExamples } from './hoc/index';

function App() {
  const {
    data: { arr },
    actions: { customlog, insertValues },
  } = useExamples();

  const add = (data) => {
    insertValues(data);
    customlog('Items added:', data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <button
          className="mt-2"
          onClick={() => customlog('Funny log from HOC:', arr)}
        >
          Funny log arr
        </button>
        <button className="mt-2" onClick={() => add(['Banana', 'Apple'])}>
          Insert Items on arr
        </button>
      </header>
    </div>
  );
}

export default WithExamplesProvider(App);
