import React from "react";
import { MoackApi } from "../api/api";
import { Link } from "react-router-dom";
import "./products.scss";
import { EditProduct } from "../editProduct/editProduct";

export class AllTheProducts extends React.Component {
  state = {
    data: [],
  };

  getData = async () => {
    const data = await MoackApi.getProductsData();
    this.setState({ data: data });
  };

  removeItem = async (id) => {
    await MoackApi.deleteItem(id);
    this.getData();
  };

  componentDidMount() {
    this.getData();
  }


  renderTheProducts = () => {
    return this.state.data.map((product) => {
      return (
        <div key={product.id} className="card">
          <div className="image" href="#">
            <img src={`${product.img}`} />
          </div>
          <div className="content">
            <div className="header">
              {product.price} <br /> {product.title}
            </div>
          </div>
          <div className="extra content btnContainer">
          <Link to={`/edit/${product.id}`} >
              <button className="ui button">Edit</button>
            </Link>
            <button onClick={() => this.removeItem(product.id)} className="ui button">
              Delete
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="ui link cards cardsContainer">
        {this.renderTheProducts()}
      </div>
    );
  }
}
