const INITIALSTATE = {
  carts: [],
};
export const cartreducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "ADD":
      const item = action.payload;
      let itExists = false;
      const newCarts = state.carts.map((tempItem) => {
        if (tempItem.id == item.id) {
          itExists = true;
          if (!tempItem?.quantity) {
            tempItem.quantity = 0;
          }
          tempItem.quantity = tempItem.quantity + 1;
        }
        return tempItem;
      });
      if (itExists) {
        return {
          ...state,
          carts: newCarts,
        };
      }
      return {
        ...state,
        carts: [...state.carts, item],
      };

    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    case "RMV_ONE":
      const ITEMINEX_DEC = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[ITEMINEX_DEC].quantity >= 1) {
        const dltitem = (state.carts[ITEMINEX_DEC].quantity -= 1);

        return {
          ...state,
          carts: [...state.carts],
        };
      }

    default:
      return state;
  }
};
