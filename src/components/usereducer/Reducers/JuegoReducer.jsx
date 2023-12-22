const JuegoReducer = (state = [], action) => {
  switch (action.type) {
    case "crear":
      return [...state, action.payload];
    case "eliminar":
      return state.filter((juego) => juego.id !== action.payload);

    case "editar":
      let indice = state.findIndex((juego) => juego.id === action.payload.id);
      state[indice] = action.payload;
      return [...state];

    default:
      break;
  }
};

export default JuegoReducer;
