import { FieldErrors, FieldValues } from 'react-hook-form';

export const checkIsFormSubmitDisabled = <T extends FieldValues>(
  errors: FieldErrors<T>,
  dirtyFields: Partial<Record<keyof T, boolean>>
): boolean => {
  return (
    Object.keys(errors).filter((key) => key !== 'root').length > 0 ||
    Object.keys(dirtyFields).length === 0
  );
};
