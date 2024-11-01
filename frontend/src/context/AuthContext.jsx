import { createContext, useState } from "react";
export const AuthenticationContext = createContext(null);

function AuthContext({ children }) {
  const [userDetails, setUserDetails] = useState(null);
  return (
    <AuthenticationContext.Provider value={{userDetails,setUserDetails}}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthContext;
