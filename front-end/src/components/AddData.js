import React, { Component } from 'react'
import axios from 'axios'

const addProductAction = (product_name, product_price, image) => {
  return axios.post('/add', {product_name, product_price, image})
  .then((resp) => resp.data)
}

export default class AddData extends Component {
  constructor(props) {
    super(props);
    this.state={
      product_name:'',
      product_price:'',
      image:'',
    }
  }
  
  handleClick = () => {
    console.log(JSON.stringify(this.state));
    var product_name = this.state.product_name;
    var product_price = this.state.product_price;
    var image = this.state.image;
    addProductAction(product_name,product_price,image).then((response)=> {
      console.log(response);
    }); 
  }
  
  isChange= (event) => {
    var name = event.target.name;
    var value = event.target.value;
    console.log(name);
    console.log(value);
    this.setState({[name]:value})
  }
  render() {
    return (
      <div className="container">.
        <div className="row">
          <div className="col-12">
            <hr />
          </div>
          <div className="col-8 mx-auto">
            <form>
              <div className="form-group">
                <label htmlFor="product_name">Tên sản phẩm</label>
                <input onChange={(event) => this.isChange(event)} className="form-control" type="text" name="product_name" aria-describedby="name_text" placeholder="Nhập tên sản phẩm" /><small className="form-text text-muted" id="helpId">Nhập text</small>
              </div>
              <div className="form-group">
                <label htmlFor="product_price">Giá sản phẩm</label>
                <input onChange={(event) => this.isChange(event)} className="form-control" type="text" name="product_price" aria-describedby="name_text" placeholder="Nhập giá sản phẩm" /><small className="form-text text-muted" id="helpId">Nhập text</small>
              </div>
              <div className="form-group">
                <label htmlFor="image">Đường link ảnh</label>
                <input  onChange={(event) => this.isChange(event)} className="form-control" type="text" name="image" aria-describedby="name_text" placeholder="Nhập ảnh sản phẩm" /><small className="form-text text-muted" id="helpId">Nhập link ảnh</small>
              </div>
              <button onClick={() => this.handleClick()} className="btn btn-primary btn-block" type="reset">Thêm mới</button>
            </form>
          </div>
        </div>
      </div>

    )
  }
}
