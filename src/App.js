
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'; 
import { PageHeader } from 'antd';

function App() {
  return (
    <div className="App App-body">
      <Navbar />
     <div className='container'>
      <Home />
      </div>  
    </div>
  );
}
  
export default App;
