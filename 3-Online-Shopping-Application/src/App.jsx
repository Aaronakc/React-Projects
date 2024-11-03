import React from 'react'
import MyRoutes from './MyRoutes'
import { CartItemsReducer } from './Redux/CartItemsReducer'
import { itemReducer } from './Redux/ItemsReducer'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { thunk } from 'redux-thunk'


const App = () => {

  //combining reducer
  const rootReducer=combineReducers({
    cartStore:CartItemsReducer,
    itemStore:itemReducer
  });

  const initialData={
    cartStore:{
      cart_items:localStorage.getItem('cart_items')? JSON.parse(localStorage.getItem('cart_items')):[]
    }
  }


  const store=createStore(rootReducer,initialData,applyMiddleware(thunk))
  return (
    <Provider store={store}>
     <MyRoutes/>
     </Provider>
  )
}

export default App