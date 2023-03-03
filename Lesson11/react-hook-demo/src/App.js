import './App.css';
import ExUseContext from './components/ExUseContext';
import ExUseEffect from './components/ExUseEffect';
import ExUseReducer from './components/ExUseReducer';
import ExUseRef from './components/ExUseRef';
import ExUseState from './components/ExUseState';

function App() {
  return (
    <div className="App">
      <ExUseState />
      <ExUseEffect />
      <ExUseContext />
      <ExUseRef/>
      <ExUseReducer />
    </div>
  );
}

export default App;
