//state argument here is not app state,
//only the state this reducer is responsible for
export default function(state = null, action) {
  //set state=null when it's not defined
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
