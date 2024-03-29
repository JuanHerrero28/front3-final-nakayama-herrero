import { createContext, useContext, useReducer } from "react";

export const initialState = { theme: false, favs: [] };

export const ContextGlobal = createContext();

const odontologoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITES":
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favs: state.favs.filter(
          (odontologo) => odontologo.id !== action.payload
        ),
      };

    case "REMOVE_ALL":
      return { ...state, favs: [] };
    case "CHANGE_MODE":
      return { ...state, theme: !state.theme };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(odontologoReducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
