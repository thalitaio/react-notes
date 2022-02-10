import React from "react";

const Header = ({ handleToggleDarkMode }) => {
    return(
        <div className="header">
            <h1>Minhas Notas  &#128125;</h1>
            <button onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className="save">Alterar Visualização</button>
        </div>
    );
};

export default Header;