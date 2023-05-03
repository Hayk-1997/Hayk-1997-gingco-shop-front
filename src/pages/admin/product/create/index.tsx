import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  useSelectCategories,
} from '../../../../slices/admin/categorySlice';
import { ReactElement, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../../formElements/input';
import AuthorizedAdminLayout from '../../../../layout/admin/authorizedAdminLayout';
import { TCreateProduct } from '../../../../type/product';
import { createProductRequest } from '../../../../slices/admin/productSlice';
import { defaultValue } from './utils';
import TextArea from '../../../../formElements/textArea';
import SelectOption from '../../../../formElements/selectOption';

const CreateProduct = (): JSX.Element => {
  const dispatch = useDispatch();

  const categories = useSelector(useSelectCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const { handleSubmit, control, register, setValue } = useForm<TCreateProduct>(
    {
      defaultValues: { ...defaultValue },
      mode: 'onChange',
    }
  );

  useEffect(() => {
    categories.length && setValue('categoryId', categories[0].id);
  }, [categories]);

  const onSubmit = useCallback(
    (data: TCreateProduct): void => {
      dispatch(createProductRequest(data));
    },
    [dispatch]
  );

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Create</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Create Product</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-primary">
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
                          <label htmlFor="parentCategory">
                            Parent Category
                          </label>
                          <SelectOption
                            rules={{ required: true }}
                            control={control}
                            withError={true}
                            name="categoryId"
                            id="parentCategory"
                            className="custom-select rounded-0"
                            options={categories}
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
                            options={categories}
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
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

CreateProduct.getLayout = function getLayout(page: ReactElement) {
  return <AuthorizedAdminLayout>{page}</AuthorizedAdminLayout>;
};

export default CreateProduct;
