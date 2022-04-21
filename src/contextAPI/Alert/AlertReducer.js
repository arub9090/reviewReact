const AlertReducer=(state, action)=>{

    switch (action.type) {
        case 'SET_ALERT':
            return{
                ...state,
                alert: action.payload,
            };
        case 'REMOVE_ALERT':
          return {
              ...state,
              alert: action.payload,
          }
        default:
          return state
      }
}

export default AlertReducer;