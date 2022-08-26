import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/apiCalls';
import LoginStyles from './Login.module.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { isFetching, error } = useSelector((state) => state.user);

	const emailChangeHandler = (event) => {
		setEmail(event.target.value);
	};

	const passwordChangeHandler = (event) => {
		setPassword(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		login(dispatch, { email, password });
		setEmail('');
		setPassword('');
	};
	return (
		
			<div className={LoginStyles.form_container}>
				<form onSubmit={submitHandler}>
					<div>
						<label
							htmlFor="email"
							className={LoginStyles.login_lable}
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							className={LoginStyles.login_input}
							value={email}
							onChange={emailChangeHandler}
							name="email"
						/>
					</div>

					<div>
						<label
							htmlFor="password"
							className={LoginStyles.login_lable}
						>
							Password
						</label>
						<input
							id="password"
							type="password"
							className={LoginStyles.login_input}
							value={password}
							onChange={passwordChangeHandler}
							name="password"
						/>
						{error && (
							<p className={LoginStyles.error_msg}>
								Invalid credentials
							</p>
						)}
					</div>
					<button
						disabled={isFetching}
						type="submit"
						className={LoginStyles.submit_button}
					>
						Login
					</button>
				</form>
			</div>
	);
};

export default Login;
