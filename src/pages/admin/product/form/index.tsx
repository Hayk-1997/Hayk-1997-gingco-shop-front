import React from 'react';
import Input from '../../../../formElements/input';
import SelectOption from '../../../../formElements/selectOption';
import { TCategory } from '../../../../type/admin/category';
import { TColor } from '../../../../type/color';
import UploadFile from '../../../../formElements/uploadFile';
import { TextArea } from '../../../../formElements/textArea';
import {
  Control,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form/dist/types/form';

interface IForm {
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: any) => void;
  control: Control<any>;
  register: UseFormRegister<any>;
  categories: TCategory[];
  colors: TColor[];
  hasFIleUpload?: boolean;
}

const Form: React.FC<IForm> = ({
  handleSubmit,
  onSubmit,
  control,
  register,
  categories,
  colors,
  hasFIleUpload = false,
}) => {
  console.log(control._defaultValues);

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
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="titleAM">Title Hy</label>
              <Input
                control={control}
                id="titleAM"
                name="title.am"
                rules={{ required: true }}
                type="text"
                placeholder="Title Am"
                withError={true}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="titleRu">Title Ru</label>
              <Input
                control={control}
                id="titleRu"
                name="title.ru"
                rules={{ required: true }}
                type="text"
                placeholder="Title Ru"
                withError={true}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="titleEn">Title En</label>
              <Input
                control={control}
                id="ttleEn"
                name="title.en"
                rules={{ required: true }}
                type="text"
                placeholder="Title En"
                withError={true}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <Input
                control={control}
                id="price"
                name="price"
                register={register}
                pattern={{
                  valueAsNumber: true,
                }}
                rules={{ required: true }}
                type="number"
                placeholder="price"
                withError={true}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="countInStock">Count in stock</label>
              <Input
                control={control}
                register={register}
                pattern={{
                  valueAsNumber: true,
                }}
                id="countInStock"
                name="countInStock"
                rules={{ required: true }}
                type="number"
                placeholder="stock"
                withError={true}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="parentCategory">Parent Category</label>
              <SelectOption
                rules={{ required: true }}
                control={control}
                withError={true}
                name="categoryId"
                id="parentCategory"
                className="custom-select rounded-0"
                options={
                  <>
                    {categories?.map((option: TCategory, index: number) => (
                      <option key={index} value={option.id}>
                        {option.translations.am.name}
                      </option>
                    ))}
                  </>
                }
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="colorId">Color</label>
              <SelectOption
                rules={{ required: true }}
                control={control}
                withError={true}
                name="colorId"
                id="colorId"
                className="custom-select rounded-0"
                options={
                  <>
                    {colors?.map((option: TColor, index: number) => (
                      <option key={index} value={option.id}>
                        {option.translations.am.name}
                      </option>
                    ))}
                  </>
                }
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="descriptionHy">Description Hy</label>
              <TextArea
                rows={3}
                rules={{ required: true }}
                control={control}
                withError={true}
                name="description.am"
                id="descriptionHy"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="descriptionRu">Description Ru</label>
              <TextArea
                rows={3}
                rules={{ required: true }}
                control={control}
                withError={true}
                name="description.ru"
                id="descriptionRu"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="descriptionEn">Description En</label>
              <TextArea
                rows={3}
                rules={{ required: true }}
                control={control}
                withError={true}
                name="description.en"
                id="descriptionEn"
              />
            </div>
          </div>
        </div>
        {hasFIleUpload && (
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <UploadFile
                  name="images"
                  images={control._defaultValues.images}
                />
              </div>
            </div>
          </div>
        )}
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
