import MenuItem from './menu-item';
import { type MenuProps } from '../../types/menu';

export default function Menu({ 
  items, 
  orientation = 'horizontal', 
  className = '',
  onItemClick 
}: MenuProps) {
  const menuClasses = [
    'menu',
    `menu--${orientation}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <nav className={menuClasses} aria-label="Main navigation">
      <ul className="menu__list">
        {items.map((item) => (
          <MenuItem 
            key={item.id} 
            item={item} 
            onClick={onItemClick}
          />
        ))}
      </ul>
    </nav>
  );
}
