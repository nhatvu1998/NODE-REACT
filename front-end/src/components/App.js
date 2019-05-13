import React, { Component } from 'react';
import './App.css';
import HeadTitle from './HeadTitle';
import Product from './Product';
import axios from 'axios';
import AddData from './AddData';

const getProductData = () => {
  return axios.get('/getData01')
  .then((res) => res.data)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:null,
    }
  }
  
  componentWillMount() {
    if(this.state.data === null){
      getProductData().then((res) => {
        this.setState({data:res});
      })
    }
  }
  
  printData = () => {
    if(this.state.data !== null){
      return this.state.data.map((value, key) => {
        return <Product key={key} product_name={value.product_name} product_price={value.product_price} image={value.image} />
      })
    }
  }

  render() {
      axios.get('/getData01')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    return (
      <div>
      <HeadTitle/>
      <AddData/>
      <hr/>
      <div className="container">
        <div className="row">
          {this.printData()}
          
        </div>
      </div>
      </div>
    );
  }
}

export default App;
