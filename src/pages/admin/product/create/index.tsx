import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesRequest,
  useSelectCategories,
} from '../../../../slices/admin/categorySlice';
import { ReactElement, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AuthorizedAdminLayout from '../../../../layout/admin/authorizedAdminLayout';
import { TCreateProductForm } from '../../../../type/product';
import { createProductRequest } from '../../../../slices/admin/productSlice';
import {
  getColorsRequest,
  useSelectColors,
} from '../../../../slices/admin/colorSlice';
import Form from '../../../../features/admin/product/form';
import { defaultValue } from '../utils';

const CreateProduct = (): JSX.Element => {
  const dispatch = useDispatch();

  const categories = useSelector(useSelectCategories);
  const colors = useSelector(useSelectColors);

  useEffect(() => {
    dispatch(getCategoriesRequest());
    dispatch(getColorsRequest());
  }, [dispatch]);

  const { handleSubmit, control, register, setValue } =
    useForm<TCreateProductForm>({
      defaultValues: { ...defaultValue },
      mode: 'onChange',
    });

  useEffect(() => {
    categories.length && setValue('categoryId', Number(categories[0].id));
    colors.length && setValue('colorId', Number(colors[0].id));
  }, [categories, colors, setValue]);

  const onSubmit = useCallback(
    (data: TCreateProductForm): void => {
      dispatch(createProductRequest(data));
    },
    [dispatch]
  );

  return (
    <div className="content-wrapper">
      <section className="content-header" />
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-primary">
                <Form
                  categories={categories}
                  colors={colors}
                  control={control}
                  handleSubmit={handleSubmit}
                  onSubmit={onSubmit}
                  register={register}
                />
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
