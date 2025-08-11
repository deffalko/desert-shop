import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from "./config";
import { controlsReducer } from "./features/controls/controls-slice";
import { countryReducer } from "./features/countries/countries-slice";
import { detailsReducer } from "./features/details/details-slice";
import { basketReducer } from "./features/CardBtn/addToBasket-slice";

export const store = configureStore({
  reducer: {
    controls: controlsReducer,
    countries: countryReducer,
    details: detailsReducer,
    basket: basketReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
