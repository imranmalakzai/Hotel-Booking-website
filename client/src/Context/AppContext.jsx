import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()
const ContextProvider = ({children}) => {
  const navigate = useNavigate();
  const name = "imran malakzai"

  const values = {
    navigate,
    name
  }








  return <AppContext value={values}>
    {children}
  </AppContext>
}


export default ContextProvider;
