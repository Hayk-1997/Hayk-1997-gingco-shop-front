import { memo } from 'react';

const RegisterForm = () => {
    return (
        <form action="#" method="post">
            <div className="form-group">
                <input type="text" name="username" id="username" tabIndex={1} className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
                <input type="email" name="email" id="email" tabIndex={1} className="form-control" placeholder="Email Address" />
            </div>
            <div className="form-group">
                <input type="password" name="password" id="password2" tabIndex={2} className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="password" name="confirm-password" id="confirm-password" tabIndex={2} className="form-control" placeholder="Confirm Password" />
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <input type="submit" name="register-submit" id="register-submit" tabIndex={4} className="form-control btn btn-register" defaultValue="Register Now" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default memo(RegisterForm);