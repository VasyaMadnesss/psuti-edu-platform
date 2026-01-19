import {
  forwardRef,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

import "./block.css";

interface BlockProps extends ComponentPropsWithoutRef<"div"> {
  element?: ElementType;
  additionalClass?: string;

  type?: "transparent" | "filled";
  innerOrientation?: 'vertical' | 'horizontal';
}

const Block = forwardRef<HTMLElement, BlockProps>(
  (
    {
      element: Element = "div",
      children,
      additionalClass = "",
      type = "filled",
      innerOrientation = 'vertical',
      ...props
    },
    ref
  ) => {
    const baseClass = "block";
    // Формируем массив классов
    const classes = [
      baseClass,
      `${baseClass}--${type}`,
      `${baseClass}--${innerOrientation}`,
    ];

    // Добавляем пользовательские классы
    if (additionalClass) {
      classes.push(additionalClass);
    }

    // Фильтруем пустые значения и объединяем в строку
    const classString = classes.filter(Boolean).join(" ").trim();

    return (
      <Element ref={ref} className={classString} {...props}>
        {children}
      </Element>
    );
  }
);

// для лучшей отладки
Block.displayName = "Block";

export default Block;
