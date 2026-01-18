import { useState, useCallback } from "react";
import { type MenuItemType } from "../types/menu";

// Вспомогательная функция для поиска максимального ID во всем дереве
const findMaxIdInTree = (items: MenuItemType[]): number => {
  let maxId = 0;
  const traverse = (nodes: MenuItemType[]) => {
    nodes.forEach((node) => {
      maxId = Math.max(maxId, node.id);
      if (node.children) {
        traverse(node.children);
      }
    });
  };
  traverse(items);
  return maxId;
};

export default function useMenu(initialItems: MenuItemType[]) {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>(initialItems);

  const addMenuItem = useCallback(
    (newItem: Omit<MenuItemType, "id">, parentId?: number) => {
      setMenuItems((prev) => {
        const maxTreeId = findMaxIdInTree(prev);

        if (!parentId) {
          return [...prev, { ...newItem, id: maxTreeId + 1 }];
        }

        // Для вложенного меню
        const addToChildren = (items: MenuItemType[]): MenuItemType[] => {
          return items.map((item) => {
            if (item.id === parentId) {
              const children = item.children || [];
              return {
                ...item,
                children: [...children, { ...newItem, id: maxTreeId + 1 }],
              };
            }
            if (item.children) {
              return { ...item, children: addToChildren(item.children) };
            }
            return item;
          });
        };

        return addToChildren(prev);
      });
    },
    []
  );

  const removeMenuItem = useCallback((id: number) => {
    setMenuItems((prev) => {
      const removeFromChildren = (items: MenuItemType[]): MenuItemType[] => {
        return items
          .filter((item) => item.id !== id)
          .map((item) => ({
            ...item,
            children: item.children
              ? removeFromChildren(item.children)
              : undefined,
          }));
      };
      return removeFromChildren(prev);
    });
  }, []);

  const updateMenuItem = useCallback(
    (id: number, updates: Partial<MenuItemType>) => {
      setMenuItems((prev) => {
        const updateInChildren = (items: MenuItemType[]): MenuItemType[] => {
          return items.map((item) => {
            if (item.id === id) {
              return { ...item, ...updates };
            }
            if (item.children) {
              return { ...item, children: updateInChildren(item.children) };
            }
            return item;
          });
        };
        return updateInChildren(prev);
      });
    },
    []
  );

  return {
    menuItems,
    addMenuItem,
    removeMenuItem,
    updateMenuItem,
    setMenuItems,
  };
}
