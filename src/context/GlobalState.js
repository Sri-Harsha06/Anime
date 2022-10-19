import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  const addToWatchlist = (anime) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: anime });
  };

  const removeFromWatchlist = (mal_id) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: mal_id });
  };

  const addToWatched = (anime) => {
    dispatch({ type: "ADD_TO_WATCHED", payload: anime });
  };

  const moveToWatchlist = (anime) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: anime });
  };

  const removeFromWatched = (mal_id) => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: mal_id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addToWatchlist,
        removeFromWatchlist,
        addToWatched,
        moveToWatchlist,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
