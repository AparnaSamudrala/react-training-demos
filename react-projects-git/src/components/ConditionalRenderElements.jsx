function ConditionalRenderElements() {
    let element = null;
    let isLoggedInEle = false;
    isLoggedInEle
      ? (element = <h2>Welcome Admin</h2>)
      : (element = <h2>Login Page Rendered Using Conditional Elements</h2>);
    return <>{element}</>;
}

export default ConditionalRenderElements;