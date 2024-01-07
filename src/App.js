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
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kochi?unitGroup=metric&key=7R68K38G6VC25U6NEDH8TY62E&contentType=json`).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    setTimeout(() => {
      dispatch(updateApp(false))
    }, 3400);
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
