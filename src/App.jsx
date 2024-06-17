

import { Button } from 'react-bootstrap';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  toast("hehe");

  return (
    <div>
      <Button>Hi</Button>
      

      <ToastContainer />
    </div>
   
   
  )
}

export default App
