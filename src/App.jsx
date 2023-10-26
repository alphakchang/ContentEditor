import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ContentInput from './components/ContentInput/ContentInput';
import OutputDisplay from './components/OutputDisplay/OutputDisplay';
import Isabelle from './variant/Isabelle/Isabelle';
import Alex from './variant/Alex/Alex';

const initialState = {
  proxy: 'http://localhost:5001',
  input: ''
}

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  render() {

    const { proxy, input } = this.state;

    return (
      <Router>
        <div>
            <Navigation />
            <div className='container-lg'>
              <div className='justify-content-center'>
                <Routes>

                  <Route path='/' element={
                                  <>
                                  <ContentInput onInputChange={this.onInputChange} />
                                  <OutputDisplay proxy={proxy} content={input} />
                                  </>
                                  }/>

                  <Route path='/isabelle' element={<Isabelle />} />

                  <Route path='/alex' element={<Alex />} />

                </Routes>
              </div>
            </div>
            <Footer />
        </div>
      </Router>
    );
  }
}

export default App;