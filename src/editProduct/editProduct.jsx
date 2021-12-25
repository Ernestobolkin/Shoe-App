import { Link } from "react-router-dom";
import React from "react";
import { MoackApi } from "../api/api";


export class EditProduct extends React.Component {
  state = {
    id: +this.props.match.params.id,
    item: "",
    title: "",
    price: "",
    img: "",
  };
  getData = async () => {
    const item = await MoackApi.getItem(this.state.id);
    this.setState({
      item: item.data,
      title: item.data.title,
      price: item.data.price,
      img: item.data.img,
    });
    console.log(item);
  };

  componentDidMount() {
    this.getData();
  }

  titleOnChange = (e) => {
    this.setState({ title: e.target.value });
  };
  priceOnChange = (e) => {
    this.setState({ price: e.target.value });
  };
  imgOnChange = (e) => {
    this.setState({ img: e.target.value });
  };

  onSave = () => {
    let tempItem = {
      id: this.state.id,
      title: this.state.title,
      price: this.state.price,
      img: this.state.img,
    };
    this.setState({ item: tempItem });
    console.log(tempItem);
    MoackApi.updateItem(this.state.id, tempItem);
    this.props.history.push("/products")
  };

  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              onChange={(e) => this.titleOnChange(e)}
              name="title"
              value={this.state.title}
            />
          </div>
          <div className="field">
            <label>Price</label>
            <input
              type="text"
              onChange={(e) => this.priceOnChange(e)}
              name="price"
              value={this.state.price}
            />
          </div>
          <div className="field">
            <label>Image</label>
            <input
              type="text"
              onChange={(e) => this.imgOnChange(e)}
              name="image"
              value={this.state.img}
            />
          </div>
          {/* <Link to="/products"> */}
            <button
              onClick={() => this.onSave()}
              className="ui button"
              type="button"
            >
              Save
            </button>
          {/* </Link> */}
        </form>
      </div>
    );
  }
}
