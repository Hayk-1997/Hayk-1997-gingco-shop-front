import { memo } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

interface ISelectOption extends UseControllerProps<any> {
  withError?: boolean;
  id?: string;
  options: Array<any>;
  className?: string;
}

const SelectOption = (props: ISelectOption): JSX.Element => {
  const { field, fieldState } = useController(props);

  return (
    <>
      <select
        {...field}
        {...(props.id && { id: props.id })}
        className={props.className && props.className}
      >
        {/*@TODO add types*/}
        {props.options?.map((option: any, index: number) => (
          <option key={index} value={option.id}>
            {option.translations[0].name}
          </option>
        ))}
      </select>
      {props.withError && <p>{fieldState.error && 'invalid'}</p>}
    </>
  );
};

export default memo(SelectOption);
