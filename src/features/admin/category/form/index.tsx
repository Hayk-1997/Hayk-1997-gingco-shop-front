import React, { memo } from 'react';
import Input from '../../../../formElements/input';
import {
  Control,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form/dist/types/form';
import { TCategory } from '../../../../type/admin/category';

interface IForm {
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: any) => void;
  control: Control<any>;
  register: UseFormRegister<any>;
  categories: TCategory[];
}
const Form: React.FC<IForm> = ({
  handleSubmit,
  onSubmit,
  control,
  register,
  categories,
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
          <div className="col-md-12">
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
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="parentCategory">Parent Category</label>
              <select
                className="custom-select rounded-0"
                id="parentCategory"
                {...register('parentId')}
              >
                {/*@TODO add category types*/}
                {categories?.map((category: any, index: number) => (
                  <option key={index} value={category.id}>
                    {category.translations.am.name}
                  </option>
                ))}
              </select>
            </div>
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

export default memo(Form);
