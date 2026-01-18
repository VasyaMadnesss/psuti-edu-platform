import React from 'react';
import { NavLink } from 'react-router';
import { type MenuItemType } from '../../types/menu';

interface MenuItemProps {
  item: MenuItemType;
  onClick?: (item: MenuItemType) => void;
  className?: string;
}

export default function MenuItem({ item, onClick, className = '' }: MenuItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(item);
    }
  };

  return (
    <li className={`menu__item ${className}`}>
      <NavLink
        to={item.path}
        end={item.exact}
        className={({ isActive }) => 
          `menu__link ${isActive ? 'menu__link--active' : ''}`
        }
        onClick={handleClick}
      >
        {item.icon && <span className="menu-item__icon">{item.icon}</span>}
        <span className="menu__label">{item.label}</span>
      </NavLink>
      
      {/* Рекурсивный рендеринг вложенного меню */}
      {item.children && item.children.length > 0 && (
        <ul className="submenu">
          {item.children.map((child) => (
            <MenuItem key={child.id} item={child} onClick={onClick} />
          ))}
        </ul>
      )}
    </li>
  );
}