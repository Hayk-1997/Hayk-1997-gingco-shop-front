import { memo } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

interface InputProps extends UseControllerProps<any> {
  type: string;
  placeholder: string;
  withError?: boolean;
  id?: string;
}

const Input = (props: InputProps): JSX.Element => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input
        {...field}
        className="form-control"
        placeholder={props.placeholder}
        type={props.type}
        {...(props.id && { id: props.id })}
      />
      {props.withError && <p>{fieldState.error && 'invalid'}</p>}
    </div>
  );
};

export default memo(Input);
