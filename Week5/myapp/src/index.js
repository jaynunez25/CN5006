import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GreetingElement from './myGreetingApp';
import GreetingElementwithProp from './myGreetingProp';

import AppColor from './AppColor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

 <AppColor heading="This is first element" lbl="Name :" color="green"/> 
 <AppColor heading="This is second element" lbl="Name :" color="blue"/> 
 <AppColor heading="This is third third element" lbl="Name :" color="Yellow"/> 

     <GreetingElement/>
  

<GreetingElementwithProp msg="Hi its Monday"/>
<GreetingElementwithProp msg="Hi its TUESDAY"/>
<GreetingElementwithProp msg="Hi its wednesday"/>
<GreetingElementwithProp msg="Hi its thursday"/>
<GreetingElementwithProp msg="Hi its friday"/>
<GreetingElementwithProp msg="Hi its saturday"/>
<GreetingElementwithProp msg="Hi its sunday"/>



    </React.StrictMode>, 

 document.getElementById('root') 
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
