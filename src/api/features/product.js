import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    categories: [],
    products: [],
    loading: true,
  },
  reducers: {
    addCategories(state, action) {
      state.categories = action.payload;
    },
    addProducts(state, action) {
      state.products = action.payload;
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    deleteProduct(state, action) {
      let productId = action.payload;
      const updatedProducts = state.products.filter(
        (product) => product._id !== productId
      );
      state.products = updatedProducts;
    },
    updateProduct(state, action) {
      let productId = action.payload.id;
      let updatedProduct = action.payload.data;
      const updatedProducts = state.products.map((product) =>
        product._id === productId ? { ...product, ...updatedProduct } : product
      );
      state.products = updatedProducts;
    },
    load(state) {
      state.loading = true;
    },
    unload(state) {
      state.loading = false;
    },
  },
});

export const {
  addCategories,
  addProducts,
  addProduct,
  deleteProduct,
  updateProduct,
  load,
  unload,
} = productSlice.actions;

export default productSlice.reducer;
