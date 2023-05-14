import { ReactElement, useCallback } from 'react';
import AuthorizedAdminLayout from '../../../../layout/admin/authorizedAdminLayout';
import Form from '../../../../features/admin/color/form';
import { useForm } from 'react-hook-form';
import { TCreateColorForm } from '../../../../type/color';
import { defaultValue } from '../utils';
import { useDispatch } from 'react-redux';
import { createColorRequest } from '../../../../slices/admin/colorSlice';

const CreateColor = (): JSX.Element => {
  const dispatch = useDispatch();
  const { handleSubmit, control, watch, register } = useForm<TCreateColorForm>({
    defaultValues: { ...defaultValue },
    mode: 'onChange',
  });

  watch(['code']);

  const onSubmit = useCallback(
    (data: TCreateColorForm): void => {
      dispatch(createColorRequest(data));
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

CreateColor.getLayout = function getLayout(page: ReactElement) {
  return <AuthorizedAdminLayout>{page}</AuthorizedAdminLayout>;
};

export default CreateColor;
