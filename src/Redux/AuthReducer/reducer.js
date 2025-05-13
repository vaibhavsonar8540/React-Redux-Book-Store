const initialstate = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

export function reducer(state=initialstate, payload) {
  switch (payload.type) {
    default:
      return state;
  }
}
