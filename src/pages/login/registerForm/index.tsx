import { memo } from 'react';
import Input from '../../../formElements/input';
import { useForm } from 'react-hook-form';

type FormValues = {
    username: string;
    password: string;
    email: string;
    confirmPassword: string;
};

const RegisterForm = () => {
    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            username: "",
            password: "",
            email: "",
            confirmPassword: ""
        },
        mode: "onChange"
    });

    const onSubmit = (data: FormValues) => {
        console.log('data', data);
        fetch("http://localhost:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(async (res) => {
            if (res.status === 200) {
              console.log('OK!!!')
            } else {
                console.log('ERROR!!!')
            }
        });
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <Input
                    control={control}
                    name="username"
                    rules={{ required: true }}
                    type="text"
                    placeholder="username"
                />
            </div>
            <div className="form-group">
                <Input
                    control={control}
                    name="email"
                    rules={{ required: true }}
                    type="text"
                    placeholder="email"
                />
            </div>
            <div className="form-group">
                <Input
                    control={control}
                    name="password"
                    rules={{ required: true }}
                    type="password"
                    placeholder="password"
                />
            </div>
            <div className="form-group">
                <Input
                    control={control}
                    name="confirmPassword"
                    rules={{ required: true }}
                    type="password"
                    placeholder="confirmPassword"
                />
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <button className="form-control btn btn-login">
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default memo(RegisterForm);
