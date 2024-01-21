import logo from './logo.svg';
import './App.css';
import { Loader } from './components/Loader';
import Splash from './pages/splash';
import axios from 'axios';
import { weatherkey } from './config/key';
import { useEffect } from 'react';
import RouteMap from './route/routeMap';
import { useDispatch, useSelector } from 'react-redux';
import { updateApp } from './redux/Todo/appSlice';
console.log(weatherkey)
function App() {

  let splash = useSelector((state) => state.app.value.splash)
  let dispatch = useDispatch()
  console.log(splash)
  useEffect(() => {
    
    setTimeout(() => {
      dispatch(updateApp(false))
    }, 1000);
    return () => {

    }
  }, [])


  if (splash) {
    return <Splash />
  } else {
    return <RouteMap />
  }
}

export default App;
