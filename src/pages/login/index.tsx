import { Suspense, useState, createElement } from 'react';

const Login = () => {
    const [currentForm, setCurrentForm] = useState<any>(null);

    const openCurrentForm = (value: string) => {
        import(`./${value}`)
            .then((module) => module.default)
            .then((element) => {
                setCurrentForm(createElement(element));
            });
    };

    return (
        <div className="col-lg-12 col-md-12  mtb_20">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel-login panel">
                        <div className="panel-heading">
                            <div className="row mb_20">
                                <div className="col-xs-6" onClick={() => openCurrentForm('loginForm')}>
                                    <a href="#" id="login-form-link">Login</a>
                                </div>
                                <div className="col-xs-6" onClick={() => openCurrentForm('registerForm')}>
                                    <a href="#" id="register-form-link">Register</a>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Suspense fallback={<div>Loading...</div>}>
                                        {currentForm}
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;