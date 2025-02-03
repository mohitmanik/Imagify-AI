import axios from "axios";  // ✅ Ensure axios is imported
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [credit, setCredit] = useState(false);
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const loadCreditsData = async () => {
        try {
            const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
                headers: { token },
            });

            if (data.success) {
                setCredit(data.credits);
                setUser(data.user);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    const generateImage = async (prompt) => {
        try {
            console.log("🔹 Calling API with prompt:", prompt);  // Debug log
    
            const { data } = await axios.post(
                `${backendUrl}/api/image/generate-image`,
                { prompt },
                { headers: { token } }
            );
    
            console.log("🔹 API Response:", data); // Debug log
    
            if (data.success) {
                loadCreditsData();
                return data.resultImage;
            } else {
                toast.error(data.message);
                loadCreditsData();
                if (data.creditBalance === 0) {
                    navigate("/Buy");
                }
            }
        } catch (error) {
            console.error("❌ API Call Failed:", error.message);
            toast.error("Error generating image. Try again.");
        }
    };
    
    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        setUser(null);
    };

    useEffect(() => {
        if (token) {
            loadCreditsData();
        }
    }, [token]);

    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        backendUrl,
        token,
        setToken,
        credit,
        setCredit,
        loadCreditsData,
        logout,
        generateImage,
    };

    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;
