import logo from './logo.svg';
import './App.css';
import MarkdownEditor from './components/markdownEditor/markdownEditor';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header/>
       <MarkdownEditor />
    </div>
  );
}

export default App;
