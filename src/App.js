import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Alert from './components/layout/Alert';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Notfound from './components/pages/Notfound';
import Users from './components/pages/Users';
import TestFile from './components/testFile/TestFile';
import { AlertProvider } from './contextAPI/Alert/AlertContext';
import {GithubProvider} from './contextAPI/gitHub/GithubContext'
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
      <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main className='container mx-auto px-2 pb-12'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/testfile' element={<TestFile />} />
        <Route path='/users/:login' element={<Users />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
