/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useNavigate } from "react-router";
import Menu from "../menu/menu";
import useMenu from "../../hooks/useMenu";
import { MENU_ITEMS } from "../../config/main-menu";
import { type MenuItemType } from "../../types/menu";

export default function Header() {
  // const navigate = useNavigate();
  const { menuItems } = useMenu(MENU_ITEMS);

  const handleMenuItemClick = (item: MenuItemType) => {
    // Можно добавить дополнительную логику
  };

  return (
    <>
      <header>
        <h1 className="header__title">PSUTI Educational Platform</h1>
        <Menu
          items={menuItems}
          orientation="horizontal"
          onItemClick={handleMenuItemClick}
          className="menu--main"
        />
      </header>
    </>
  );
}
