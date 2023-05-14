import { ReactElement, useCallback, useEffect } from 'react';
import AuthorizedAdminLayout from '../../../../layout/admin/authorizedAdminLayout';
import Form from '../../../../features/admin/color/form';
import { useForm } from 'react-hook-form';
import { TCreateColorForm } from '../../../../type/color';
import { defaultValue, resolveColorFormValues } from '../utils';
import { useRouter } from 'next/router';
import {
  getColorByIdRequest,
  useSelectColor,
} from '../../../../slices/admin/colorSlice';
import { useDispatch, useSelector } from 'react-redux';

const EditColor = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  const color = useSelector(useSelectColor);

  const { handleSubmit, control, reset, register } = useForm<TCreateColorForm>({
    defaultValues: { ...defaultValue },
    mode: 'onChange',
  });

  useEffect(() => {
    if (router.query.id) {
      dispatch(getColorByIdRequest(router.query.id as string));
    }
  }, [dispatch, router.query.id]);

  useEffect(() => {
    if (color) {
      reset(resolveColorFormValues(color));
    }
  }, [color, reset]);

  const onSubmit = useCallback((data: TCreateColorForm): void => {
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

EditColor.getLayout = function getLayout(page: ReactElement) {
  return <AuthorizedAdminLayout>{page}</AuthorizedAdminLayout>;
};

export default EditColor;
