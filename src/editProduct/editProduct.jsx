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
    console.log(this.state.id);
  };

  componentDidMount() {
    this.getData();
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

  onSave = async () => {
    let tempItem = {
      id: this.state.id,
      title: this.state.title,
      price: this.state.price,
      img: this.state.img,
    };
    this.setState({ item: tempItem });
    console.log(tempItem);
    await MoackApi.updateItem(this.state.id, tempItem);
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
            onClick={() => this.onSave()}
            className="ui primary button"
            type="button"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
