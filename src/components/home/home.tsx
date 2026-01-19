import Block from "../block/block";
import Menu from "../menu/menu";
import type { MenuItemType } from "../../types/menu";

const Home = () => {
  const HELLO_PAGE_NAVIGATION_ITEMS: MenuItemType[] = [
    { id: 0, label: "Home", path: "/", exact: true },
    { id: 1, label: "Login", path: "/login" },
    { id: 2, label: "Register", path: "/register" },
  ];

  return (
    <Block
      type="transparent"
      innerOrientation="vertical"
      style={{ alignItems: "center" }}
    >
      <Block element="h2">
        Hello! This page is build to show the result of using blocks.
      </Block>

      <Block innerOrientation="vertical">
        <Block element="p" type="transparent">
          You can use my own created react component named "Block" to build
          different structures on this site.
        </Block>
        <Block element="p" type="transparent">
          CSS-Styles are simple and pre-made by me for this react component, so
          you should not worry about css anymore.
        </Block>
      </Block>

      <Block innerOrientation="vertical">
        <Block element="p" type="transparent">
          Currently this project is being actively developed, so this page is
          dedicated for navigation over pages without any context and global
          state of application.
        </Block>
      </Block>
      <Block
        innerOrientation="vertical"
        type="transparent"
        style={{
          alignItems: "center",
        }}
      >
        <Block element="h2" type="transparent">
          Navigation Menu
        </Block>
        <Block style={{ textAlign: "center" }}>
          <Menu items={HELLO_PAGE_NAVIGATION_ITEMS} orientation="vertical" />
        </Block>
      </Block>
    </Block>
  );
};

export default Home;
