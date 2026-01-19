import { type MenuItemType } from '../types/menu';

export const MENU_ITEMS: MenuItemType[] = [
  { 
    id: 0, 
    path: '/', 
    label: 'Home', 
    exact: true 
  },
  { 
    id: 1, 
    path: '/content', 
    label: 'Content', 
    exact: false 
  },
  { 
    id: 2, 
    path: '/profile', 
    label: 'Profile', 
    exact: true 
  },
];