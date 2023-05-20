import React, { ReactElement, useCallback, useEffect } from 'react';
import AuthorizedAdminLayout from '../../../../layout/admin/authorizedAdminLayout';
import { useForm } from 'react-hook-form';
import { TCreateCategoryForm } from '../../../../type/admin/category';
import { useDispatch, useSelector } from 'react-redux';
import {
  createCategoryRequest,
  getCategoriesRequest,
  useSelectCategories,
} from '../../../../slices/admin/categorySlice';
import Form from '../../../../features/admin/category/form';

const CreateCategory = (): JSX.Element => {
  const dispatch = useDispatch();

  const categories = useSelector(useSelectCategories);

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, [dispatch]);

  const { handleSubmit, control, register } = useForm<TCreateCategoryForm>({
    defaultValues: {
      parentId: null,
      name: {
        am: '',
        ru: '',
        en: '',
      },
    },
    mode: 'onChange',
  });

  const onSubmit = useCallback(
    (data: TCreateCategoryForm): void => {
      dispatch(
        createCategoryRequest({ ...data, parentId: Number(data.parentId) })
      );
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
                <li className="breadcrumb-item active">Create Category</li>
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
                <Form
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  register={register}
                  categories={categories}
                  control={control}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

CreateCategory.getLayout = function getLayout(page: ReactElement) {
  return <AuthorizedAdminLayout>{page}</AuthorizedAdminLayout>;
};

export default CreateCategory;
