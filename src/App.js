import React from "react";
import Landing from "./pages/landing/Landing";
import Navigator from "./routes/Navigator";
import { UserContextProvider } from "./context/UserContext";
function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Navigator />
      </div>
    </UserContextProvider>
  );
}

export default App;
