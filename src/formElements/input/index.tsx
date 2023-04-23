import { useController, UseControllerProps } from 'react-hook-form';

interface InputProps extends UseControllerProps<any> {
  type: string;
  placeholder: string;
}

const Input = (props: InputProps) => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input
        {...field}
        className="form-control"
        placeholder={props.placeholder}
        type={props.type}
      />
      <p>{fieldState.isTouched && 'Touched'}</p>
      <p>{fieldState.isDirty && 'Dirty'}</p>
      <p>{fieldState.invalid ? 'invalid' : 'valid'}</p>
    </div>
  );
};

export default Input;
