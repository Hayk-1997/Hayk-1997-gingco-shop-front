import { ReactElement, useCallback, useEffect } from 'react';
import AuthorizedAdminLayout from '../../../../layout/admin/authorizedAdminLayout';
import { useForm } from 'react-hook-form';
import { TCreateCategoryForm } from '../../../../type/admin/category';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../../../formElements/input';
import {
  createCategoryRequest,
  getCategories,
  useSelectCategories,
} from '../../../../slices/admin/categorySlice';

const CreateCategory = (): JSX.Element => {
  const dispatch = useDispatch();

  const categories = useSelector(useSelectCategories);

  useEffect(() => {
    dispatch(getCategories());
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
                            {/*@TODO add category types*/}
                            {categories?.map((category: any, index: number) => (
                              <option key={index} value={category.id}>
                                {category.translations[0].name}
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
