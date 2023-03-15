import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";
function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(()=>{
    const unSubscribed =  auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user is loggged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }else{
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    },[]);
    return ()=>{
      unSubscribed();
    }
  },[]);

  console.log("user is : ",user);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* default case */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}
function HomePage() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}
function LoginPage() {
  return (
    <>
      <Login/>
    </>
  );
}
function CheckoutPage() {
  return (
    <>
      <Header />
      <Checkout />
    </>
  );
}
export default App;
