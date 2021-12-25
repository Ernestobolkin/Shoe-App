import React from "react";
import { MoackApi } from "../api/api";
import { Link } from "react-router-dom";
import "./products.scss";

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
    console.log(this.state.data);
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
              <span>{product.title}</span>
              <br />
              <span>
                Price: <span className="colordSpan"> ${product.price}</span>
              </span>
            </div>
          </div>
          <div className="extra content btnContainer">
            <Link to={`/edit/${product.id}`}>
              <button className="ui button">Edit</button>
            </Link>
            <button
              onClick={() => this.removeItem(product.id)}
              className="ui button"
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="myBtnContainer">
          <Link to="/Add">
            <button className="ui button active myBtn">Add Item</button>
          </Link>
        </div>
        <div className="containerForCards">
          <div className="ui link cards cardsContainer">
            {this.renderTheProducts()}
          </div>
        </div>
      </div>
    );
  }
}
