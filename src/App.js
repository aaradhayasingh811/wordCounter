import './App.css';
import Navbar from './components/navbar.js'
import Form from './components/form.js'
import Footer from './components/footer.js'


function App() {
  return (
    <>
    <Navbar title="Word Counter" />
    <div className="container mt-5">
      <h2>Enter the text here..</h2>
    <Form />
    </div>
    <div className="container-fluid">
    <Footer />

    </div>
    
    </>
  );
}

export default App;
