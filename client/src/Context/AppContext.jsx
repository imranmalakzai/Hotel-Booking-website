// AppContext.js
import { createContext, useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import { toast } from "react-hot-toast";

//** Axios global config */
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URI;

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  // Global navigation
  const navigate = useNavigate();

  // App currency
  const currency = import.meta.env.VITE_CURRENCY || "$";

  // Clerk user and token
  const { user } = useUser();
  const { getToken } = useAuth();

  // App state
  const [isOwner, setIsOwner] = useState(false);
  const [showHotelReg, setShowHotelReg] = useState(false);
  const [searchedCities, setSearchedCities] = useState([]);

  // Fetch user from backend
  const fetchUser = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get("/api/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setIsOwner(data.role === "hotelOwner");
        setSearchedCities(data.recentSearchedCities || []);
      } else {
        // Retry in 5 seconds
        setTimeout(fetchUser, 5000);
      }
    } catch (error) {
      toast.error(error.message || "Failed to fetch user data");
    }
  };

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);

  // Memoized values to avoid unnecessary re-renders
  const values = useMemo(() => ({
    navigate,
    currency,
    user,
    getToken,
    isOwner,
    setIsOwner,
    showHotelReg,
    setShowHotelReg,
    axios,
    searchedCities,
  }), [
    navigate,
    currency,
    user,
    getToken,
    isOwner,
    showHotelReg,
    searchedCities,
  ]);

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
