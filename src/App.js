import { Dashboard, Workspace, Plan, Complete } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workspace/:inputValue" element={<Workspace />} />
          <Route path="/plan/:workspaceName/:inputValue" element={<Plan />} />
          <Route
            path="/complete/:workspaceName/:inputValue"
            element={<Complete />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
