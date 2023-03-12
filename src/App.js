import Body from "./Components/Body";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./Components/Header";
import {Provider} from "react-redux";
import "./App.css";
import store from "./Utiles/ReduxStore";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([{
    path:"/",
    element: <Body />,
    children:[
      {
        path: "/",
        element:<MainContainer />
      },
      {path:"watch",
    element : <WatchPage/>},
    ]
  }]);
  return (
    <Provider store={store}>
    <div className="App">
   <Header />
<RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;
