import React from "react";
import { MoackApi } from "../api/api";

export class AddProduct extends React.Component {
  state = {
    id: "",
    title: "",
    price: "",
    img: "",
  };

  setIdByData = async () => {
    const item = await MoackApi.getProductsData();
    const id = +item[item.length - 1].id + 1;
    this.setState({ id });
  };

  componentDidMount() {
    this.setIdByData();
  }
  onChangeHandle = (e) => {
    switch (e.target.name) {
      case "title":
        this.setState({ title: e.target.value });
        break;
      case "price":
        this.setState({ price: e.target.value });
        break;
      case "image":
        this.setState({ img: e.target.value });
        break;
      default:
        console.log("somthing went wrong");
        break;
    }
  };

  AddItem = async () => {
    await MoackApi.AddItem(this.state);
    this.props.history.push("/products");
  };

  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              onChange={(e) => this.onChangeHandle(e)}
              name="title"
              value={this.state.title}
            />
          </div>
          <div className="field">
            <label>Price</label>
            <input
              type="number"
              onChange={(e) => this.onChangeHandle(e)}
              name="price"
              value={this.state.price}
            />
          </div>
          <div className="field">
            <label>Image</label>
            <input
              type="text"
              onChange={(e) => this.onChangeHandle(e)}
              name="image"
              value={this.state.img}
            />
          </div>
          <button
            onClick={() => this.AddItem()}
            className="ui primary button"
            type="button"
          >
            Add Item
          </button>
        </form>
      </div>
    );
  }
}
