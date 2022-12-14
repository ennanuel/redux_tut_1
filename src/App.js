import Login from './components/Login';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
//import { uiActions } from './store/ui-slice';
import { sendCartData, fetchCartData } from './store/cart-actions';
import Products from './components/Products';
import Notification from './components/Notification';


function App() {
  const isLoggedIn = useSelector( state => state.auth.isLoggedIn );
  const notification = useSelector( state => state.ui.notification );
  const dispatch = useDispatch();
  const cart = useSelector( state => state.cart );
  //const apiUrl = 'https://cart-project-4ee01-default-rtdb.firebaseio.com/cartItems.json';

  useEffect( () => {

    if(!cart.changed) return;
    dispatch(fetchCartData());

  }, [cart, dispatch])

  useEffect( () => {

    if(!cart.changed) return;
    dispatch(sendCartData(cart))

    /*const sendRequest = async () => {

      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending...",
        type: 'warning'
      }))

      const res = await fetch(apiUrl, {
        method: 'PUT',
        body: JSON.stringify(cart)
      });

      const data = await res.json();

      dispatch(uiActions.showNotification({
        open: true,
        message: "Sent request to DataBase successfully!",
        type: 'success'
      }))
    };

    sendRequest().catch(err => {
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending request failed.",
        type: 'error'
      }))
    });*/

  }, [cart, dispatch])

  return <div className="App">
    { notification && <Notification type={notification.type} message={notification.message} /> }
    { !isLoggedIn && <Login /> }
    { isLoggedIn && <Products /> }
  </div>
}

export default App;
