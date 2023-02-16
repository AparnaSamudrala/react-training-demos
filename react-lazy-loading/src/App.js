import React, { Suspense, lazy } from "react";
import ErrorDemo from "./ErrorDemo";
import PropDataTypesDemo from "./PropDataTypesDemo";
//import ComponentA from "./components/ComponentA";
// import Home from './Home';
// import About from './About';
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
// export const EmpContext = React.createContext()
// function App(){//   return(//     <div>//       <EmpContext.Provider value={'Satish'}>//         <ComponentA />//       </EmpContext.Provider>//     </div>//   )// }
// export default App;
class App extends React.Component {
  render() {
    return (
      <div>
        
        {/* <h1>Lazy Loading</h1>
        <Suspense fallback={<div>Please wait..home is loading</div>}>
          
          <Home />
        </Suspense>
        <Suspense fallback={<div>Please wait..about is loading</div>}>
          
          <About />
        </Suspense> */}
        <ErrorDemo/>
        <PropDataTypesDemo/>
      </div>
    );
  }
}
export default App;
