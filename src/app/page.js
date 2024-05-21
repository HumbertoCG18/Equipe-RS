import GoogleMapReact from "src/components/GoogleMap.js";
import axios from "axios";
import { createRoot } from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './globals.css';

export default function Home() {

   // new line start
   function getData() {
     axios({
       method: "GET",
       url:"/profile",
     })
     .then((response) => {
       const res =response.data
       setProfileData(({
         profile_name: res.name,
         about_me: res.about}))
     }).catch((error) => {
       if (error.response) {
         console.log(error.response)
         console.log(error.response.status)
         console.log(error.response.headers)
         }
     })}
  //end of new line 
  
  return (
    <div>
      <h1>Teste</h1>
      <GoogleMapReact />
    </div>
  );
}
