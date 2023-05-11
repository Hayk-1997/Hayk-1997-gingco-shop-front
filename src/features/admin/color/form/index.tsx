import React from 'react';
import {
  Control,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form/dist/types/form';
import Input from '../../../../formElements/input';

interface IForm {
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: any) => void;
  control: Control<any>;
  register: UseFormRegister<any>;
}

const Form: React.FC<IForm> = ({
  control,
  handleSubmit,
  onSubmit,
}): JSX.Element => {

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="nameAM">Name Hy</label>
              <Input
                control={control}
                id="nameAM"
                name="name.am"
                rules={{ required: true }}
                type="text"
                placeholder="Name Am"
                withError={true}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="nameRu">Name Ru</label>
              <Input
                control={control}
                id="nameRu"
                name="name.ru"
                rules={{ required: true }}
                type="text"
                placeholder="Name Ru"
                withError={true}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="nameEn">Name En</label>
              <Input
                control={control}
                id="nameEn"
                name="name.en"
                rules={{ required: true }}
                type="text"
                placeholder="Name En"
                withError={true}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="code">Code</label>
              <Input
                control={control}
                id="code"
                name="code"
                rules={{ required: true }}
                type="color"
                placeholder="Code"
                withError={true}
              />
            </div>
            <span>{control._formValues.code}</span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
