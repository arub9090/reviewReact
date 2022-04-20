import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import NewFooter from './components/layout/NewFooter';
function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main>
        <h1 className='text-xl'>Hello World 2 New is greate thing to add</h1>
      </main>
      <Footer />
      <NewFooter/>
      </div>
    </Router>
  );
}

export default App;
