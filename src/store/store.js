import { reducers } from "../reducers";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: reducers
})

export {store}