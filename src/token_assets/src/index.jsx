import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import {AuthClient} from "@dfinity/auth-client";

const init = async () => { 

  const authClient = await AuthClient.create();

  //for authentication 
  // if(await authClient.isAuthenticated()){
  //   handleAuthenticated(authClient);
  // }else{
  //   await authClient.login({
  //     identityProvider : "https://identity.ic0.app/#authorize",
  //     onSuccess : () => {
  //       handleAuthenticated(authClient);
  //     }
  //   });
  // }

  //async function handleAuthenticated(authClient){
    //const x = authClient.getIdentity();
    //const y = x._principal.toString();
    //console.log(y);  -->Principal Id of user
    ReactDOM.render(<App />, document.getElementById("root"));
  //}
  
}

init();


