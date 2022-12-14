import React from 'react'
import './Mainmenu.css'
import useNavigation from '../../navigation/navigation';

const Mainmenu = () => {
  const {navigateToPackages, navigateToMultiplayer, navigateToSettings} = useNavigation();
  return (
    <div className='mainmenu'>
      <h1>Emoji to Movie</h1>
      <button onClick={navigateToPackages}>Single-player</button>
      <button onClick={navigateToMultiplayer}>Multiplayer</button>
      <button onClick={navigateToSettings}>Options</button>
    </div>
  ) 
}

export default Mainmenu;
