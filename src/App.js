import logo from "./logo.svg";
import "./App.css";

// TODO: Focus is Update & Delete
/*
    * Done * 1) need to add error codes do json server * Done
    2) need to display error codes (doesn't have to be pretty)
    3) Write promise functions.
*/
// HACK: How do I want to handle presentation?
/* 
    3) need to scheme out edit form
      a. do I have form prewritten or write it on the fly? 
      b. perhaps just have function name with comment in it?
    4) need to scheme out delete form
      a. write from scratch?
      b. have function name with comment inside saying "need to write"?

*/

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
