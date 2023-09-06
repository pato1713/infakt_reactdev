import { useEffect, useReducer } from "react";
import { Nullable } from "../utils/types";

enum FetchActionType {
  LOADING = "loading",
  SUCCESS = "fetched",
  ERROR = "error",
}

interface FAction<T> {
  type: FetchActionType;
  payload?: T;
  error?: Error;
}

interface FState<T> {
  data: Nullable<T>;
  loading: boolean;
  error: Nullable<Error>;
}

function useFetch<T>(url: string, options?: RequestInit) {
  const fReducer = (state: FState<T>, action: FAction<T>): FState<T> => {
    switch (action.type) {
      case FetchActionType.LOADING:
        return { ...state, loading: true };
      case FetchActionType.SUCCESS:
        return { ...state, loading: false, data: action.payload ?? null };
      case FetchActionType.ERROR:
        return { ...state, loading: false, error: action.error ?? null };
    }
  };

  const [state, dispatch] = useReducer(fReducer, {
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: FetchActionType.LOADING });

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json()) as T;

        dispatch({ type: FetchActionType.SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: FetchActionType.ERROR, error: error as Error });
      }
    };

    fetchData();
  }, [url, options]);

  return state;
}

export default useFetch;
