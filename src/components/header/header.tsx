/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useNavigate } from "react-router";
import Menu from "../menu/menu";
import useMenu from "../../hooks/useMenu";
import { MENU_ITEMS } from "../../config/main-menu";
import Block from "../block/block";
// import { type MenuItemType } from "../../types/menu";

export default function Header() {
  // const navigate = useNavigate();
  const { menuItems } = useMenu(MENU_ITEMS);

  // const handleMenuItemClick = (item: MenuItemType) => {
  //   // Можно добавить дополнительную логику
  // };

  return (
    <>
      <header>
        <Block
          innerOrientation="horizontal"
          type="transparent"
          style={{ alignItems: "center" }}
        >
          <img
            src="https://www.psuti.ru/sites/default/files/field/attachments/2024/04/logo_pguti_blue.svg"
            style={{
              height: "70px",
              width: "auto",
            }}
          ></img>
          <h1 className="header__title">Educational Platform</h1>
        </Block>
        <Menu
          items={menuItems}
          orientation="horizontal"
          // onItemClick={handleMenuItemClick}
          className="menu--main"
        />
      </header>
    </>
  );
}
