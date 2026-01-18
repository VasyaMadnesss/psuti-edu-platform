import { type MenuItemType } from '../types/menu';

export const MENU_ITEMS: MenuItemType[] = [
  { 
    id: 0, 
    path: '/home', 
    label: 'Home', 
    exact: true 
  },
  { 
    id: 3, 
    path: '/content', 
    label: 'Content', 
    exact: false 
  },
  { 
    id: 4, 
    path: '/profile', 
    label: 'Profile', 
    exact: true 
  },
];