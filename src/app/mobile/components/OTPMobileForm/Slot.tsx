import React from 'react';
import cn from 'classnames';
import s from './Slot.module.scss';

interface SlotProps {
  char: string | null;
  placeholderChar: string | null;
  isActive?: boolean;
  hasFakeCaret?: boolean;
}

export const Slot = ({ char, placeholderChar, isActive, hasFakeCaret }: SlotProps) => {
  return (
    <div
      className={cn(
        s.slotWrapper, // Основной класс из SCSS модуля
        {
          [s.active]: isActive, // Условный класс, если isActive === true
        }
      )}
    >
      <div className={s.placeholder}>
        {char ?? placeholderChar}
      </div>
      {hasFakeCaret && <FakeCaret />}
    </div>
  );
}

export const FakeCaret = () => {
  return (
    <div className={s.fakeCaret} />
  );
}

export const FakeDash = () => {
  return (
    <div className={s.fakeDash} />
  );
}
