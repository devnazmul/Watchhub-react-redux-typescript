import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface ICart {
  products: IProduct[];
}
const initialState: ICart = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existingProduct: IProduct | undefined = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product?._id !== action?.payload?._id
      );
    },
    increaseQuantity: (state, action: PayloadAction<IProduct>) => {
      const existingProduct: IProduct | undefined = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action: PayloadAction<IProduct>) => {
      const existingProduct: IProduct | undefined = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct && existingProduct.quantity! > 1) {
        existingProduct.quantity! -= 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
