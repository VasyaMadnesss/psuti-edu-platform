export interface MenuItemType {
    id: number;
    path: string;
    label: string;
    exact?: boolean;
    icon?: React.ReactNode;
    permissions?: string[];
    children?: MenuItemType[]; // для вложенного меню
  }
  
  export type MenuOrientation = 'horizontal' | 'vertical';
  
  export interface MenuProps {
    items: MenuItemType[];
    orientation?: MenuOrientation;
    className?: string;
    onItemClick?: (item: MenuItemType) => void;
  }