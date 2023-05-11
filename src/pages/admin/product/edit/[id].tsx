import { useForm } from 'react-hook-form';
import { TUpdateProductForm } from '../../../../type/product';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesRequest,
  useSelectCategories,
} from '../../../../slices/admin/categorySlice';
import {
  getColorsRequest,
  useSelectColors,
} from '../../../../slices/admin/colorSlice';
import { ReactElement, useCallback, useEffect } from 'react';
import {
  getProductsByIdRequest,
  useSelectProduct,
} from '../../../../slices/admin/productSlice';
import AuthorizedAdminLayout from '../../../../layout/admin/authorizedAdminLayout';
import { useRouter } from 'next/router';
import { defaultValue, resolveProductFormValues } from '../utils';
import Form from '../../../../features/admin/product/form';

const EditProduct = (): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();

  const categories = useSelector(useSelectCategories);
  const colors = useSelector(useSelectColors);
  const product = useSelector(useSelectProduct);

  useEffect(() => {
    if (router.query.id) {
      dispatch(getCategoriesRequest());
      dispatch(getColorsRequest());
      dispatch(getProductsByIdRequest(router.query.id as string));
    }
  }, [dispatch, router.query.id]);

  const { handleSubmit, control, reset, register } =
    useForm<TUpdateProductForm>({
      defaultValues: { ...defaultValue },
      mode: 'onChange',
    });

  useEffect(() => {
    if (categories && colors && product) {
      reset(resolveProductFormValues(product));
    }
  }, [categories, colors, product, reset]);

  const onSubmit = useCallback((data: TUpdateProductForm): void => {
    //
  }, []);

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
                  hasFIleUpload={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

EditProduct.getLayout = function getLayout(page: ReactElement) {
  return <AuthorizedAdminLayout>{page}</AuthorizedAdminLayout>;
};

export default EditProduct;
