import { useTheme } from '../../../hooks/useTheme';
import SvgIcon from '../../../assets/icons/global/SvgIcon';
import { Theme } from '../../../context/ThemeContext';

import s from './Header.module.scss';


const Header = () => {
  const theme = useTheme();

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <SvgIcon id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <SvgIcon id="change-theme" />
        </div>
      </div>
    </header>
  );
};

export default Header;
