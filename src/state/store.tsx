import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../state/index'

export default  configureStore({
    reducer: cartReducer
});
