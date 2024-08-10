
import { useEffect } from 'react';
import './App.css';
import toast from 'react-hot-toast';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    toast.success('Hello');
  }, []); 

  return (
    <>
      <Footer />
    </>
  );
}

export default App;

