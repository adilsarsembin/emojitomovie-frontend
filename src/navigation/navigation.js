import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToPackages = () => {
    navigate("/packages");
  };

 const navigateToMultiplayer = () => {
  navigate("/multiplayer");
};

 const navigateToSettings = () => {
  navigate("/settings");
};

 const navigateToQuickGame = () => {
  navigate("/quickgame");
};

 const navigateToHome = () => {
  navigate("/home");
};

 const navigateToRegistration = () => {
  navigate("/registration");
};

 const navigateToGame = () => {
  navigate("/game");
};

 const navigateToLogin = () => {
  navigate("/login");
};

 const navigateToMainMenu = () => {
  navigate("/mainmenu");
};

  return {
    navigateToPackages,
    navigateToGame,
    navigateToLogin,
    navigateToHome,
    navigateToMainMenu,
    navigateToMultiplayer,
    navigateToQuickGame,
    navigateToRegistration,
    navigateToSettings
  }
}

export default useNavigation;