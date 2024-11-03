const initialData = {
  items: []

}

export const itemReducer = (state = initialData, action) => {
  switch (action.type) {
    case 'LOAD_ITEMS':
      // console.log('data loading')
      return { items: action.payload }
    default:
      console.log('data loading')
      return state
  }
}