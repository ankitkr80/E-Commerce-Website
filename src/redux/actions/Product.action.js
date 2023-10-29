import axios from 'axios';
const limit=3;

export const getProducts = (dispatch) => async(page, filter) =>{
  try {
    dispatch({
      type: 'loadProductRequest'
    });
    const skip = (page-1)*limit;
    const { data: { data }} = await axios.get(`/products?limit=${limit}&skip=${skip}&filters=${JSON.stringify(filter)}`);
    const pageCount = Math.ceil(data.productsCount/limit);
    dispatch({
      type: 'loadProductSuccess',
      payload: {
        products: data.products,
        pageCount
      }
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'loadProductFailed',
      payload: {}
    })
  }
}
