import { ReactElement, useCallback } from 'react';
import AuthorizedAdminLayout from '../../../../layout/admin/authorizedAdminLayout';
import { useForm } from 'react-hook-form';
import { TCreateCategory } from '../../../../type/category';
import { useDispatch } from 'react-redux';
import Input from '../../../../formElements/input';
import { createCategoryRequest } from '../../../../slices/admin/category';

const CreateCategory = (): JSX.Element => {
  const dispatch = useDispatch();
  const { handleSubmit, control, register } = useForm<TCreateCategory>({
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
    (data: TCreateCategory): void => {
      dispatch(
        createCategoryRequest({ ...data, parentId: Number(data.parentId) })
      );
    },
    [dispatch]
  );

  return (
    <div className="content-wrapper" style={{ minHeight: '1302.12px' }}>
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
                          <label htmlFor="parentCategory">
                            Parent Category
                          </label>
                          <select
                            className="custom-select rounded-0"
                            id="parentCategory"
                            {...register('parentId')}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

CreateCategory.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthorizedAdminLayout className={'asd'}>{page}</AuthorizedAdminLayout>
  );
};

export default CreateCategory;