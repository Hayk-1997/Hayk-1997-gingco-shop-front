import { memo } from 'react';

const LoginForm = () => {
    return (
        <form id="login-form" action="#" method="post">
            <div className="form-group">
                <input type="text" name="username" id="username1" tabIndex={1} className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
                <input type="password" name="password" id="password" tabIndex={2} className="form-control" placeholder="Password" />
            </div>
            <div className="form-group text-center">
                <input type="checkbox" tabIndex={3} name="remember" id="remember" />
                <label htmlFor="remember"> Remember Me</label>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="login-submit" id="login-submit" tabIndex={4} className="form-control btn btn-login" defaultValue="Log In" />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <a href="#" tabIndex={5} className="forgot-password">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default memo(LoginForm);