import React, { ReactNode, useState } from 'react';
import { changeCssRootVariebles } from '../change-css-variebles/ChangeCssRootVariebles';
import { Theme, ThemeContext } from '../context/ThemeContext';

type Props = {
  children: ReactNode;
};

const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
    changeCssRootVariebles(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
