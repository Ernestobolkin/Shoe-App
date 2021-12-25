import axios from "axios";

const mokeApi = axios.create({
  baseURL: "https://61c6179cc003e70017b79a02.mockapi.io/",
});

export class MoackApi {
  static getProductsData = async () => {
    const { data } = await mokeApi.get("shoes");
    return data;
  };

  static deleteItem = async (id) => {
    await mokeApi.delete("shoes/" + id);
  };

  static getItem = async (id) => {
    return await mokeApi.get("shoes/" + id);
  };
  
  static updateItem = async (id,item)=>{
    await mokeApi.put(`shoes/${id}`,item)
  }
}
  // static updateItem(item) {
  //   const index = DATA.findIndex(x => x.id === item.id);
  //   if (index === -1) {
  //     throw new Error("Item not found with id=" + item.id)
  //   }
  //   DATA[index] = item;
  // }