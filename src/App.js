import Header from './components/Header';
import './App.css';
import Sidebar from "./components/Sidebar"
import File from "./components/File"

function App() {
  return (
    <div className="">
      {/* header */}
     <Header/>

     {/* sidebar */}
     <div className='app__body'>
     <Sidebar/>

     {/* file */}
     <File/>
     </div>
    </div>
  );
}

export default App;
