import { lazy, Suspense, useState, createElement, useRef } from 'react';
const LoginForm = lazy(() => import(/* webpackChunkName: "login-form" */'./loginForm'));

import cn from'classnames';
import styles from'./styles.module.scss';


const Login = () => {
    const [currentForm, setCurrentForm] = useState<JSX.Element | null>(null);
    const formName = useRef('loginForm');

    const openCurrentForm = (value: string) => {
        formName.current = value;

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
                                <div
                                    className={cn("col-xs-6", {
                                        [styles.active]: formName?.current === 'loginForm'
                                    })}
                                    onClick={() => openCurrentForm('loginForm')}
                                >
                                   <span className={styles.item}>Login</span>
                                </div>
                                <div
                                    className={cn("col-xs-6", {
                                        [styles.active]: formName?.current === 'registerForm'
                                    })}
                                    onClick={() => openCurrentForm('registerForm')}>
                                    <span className={styles.item}>Register</span>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Suspense fallback={<div>Loading...</div>}>
                                        {currentForm ?? <LoginForm />}
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