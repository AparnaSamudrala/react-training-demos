function ConditionalRenderingDemo(){
    //using method 1
    /* let element = null;
  let isLoggedIn = false;
  if (isLoggedIn) {
    element = <h2>Welcome Admin</h2>;
  } else {
    element = <h2>Please Login</h2>;
  }
  return <>{element}</>; */

  //Also shortly can use this sample
  let isLoggedIn = false;
  return isLoggedIn ? <h2>Welcome Admin</h2> : <h2>Please Login Page</h2>;

  
}



    


export default ConditionalRenderingDemo;