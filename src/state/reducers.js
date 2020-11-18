const reducers = (state, action) => {

    switch (action.type) {
        case 'set_oompas':
            return {
            ...state,
            oompas: action.oompas
            };
        case 'set_oompa':
            return {
              ...state,
              oompa: action.oompa
            };
      default:
        return state;
    }
  };
  
  export default reducers;