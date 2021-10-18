import React from 'react'
import DarkMode from '../../hooks/context/DarkModeContext';

const Footer: React.FunctionComponent = () => {
    const darkMode = React.useContext(DarkMode);
    return (
        <div className={`footer text-center py-4 ${darkMode ? "text-white" : ""}`}>
            Copyright {new Date().getFullYear()}. All Rights Reserved
        </div>
    )
}

export default Footer
