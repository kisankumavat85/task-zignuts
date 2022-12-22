import { useState } from "react";

import AuthContext from "./contexts/auth-context";
import Routes from "./routes";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Routes />
    </AuthContext.Provider>
  );
};

export default App;
