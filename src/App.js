import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
