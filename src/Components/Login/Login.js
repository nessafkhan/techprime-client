import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../Redux/apiCalls';
import LoginStyles from './Login.module.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const { isFetching, error, authenticated } = useSelector((state) => state.user);
	const navigate = useNavigate();

	const submitHandler = (event) => {
		event.preventDefault();
		login(dispatch, { email, password });
		setEmail('');
		setPassword('');
	};

	useEffect(()=>{
		if(authenticated){
			navigate('/dashboard')
		}
	},[authenticated,navigate])
	return (
		<div className={LoginStyles.form_container}>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="email" className={LoginStyles.login_lable}>
						Email
					</label>
					<input
						id="email"
						type="email"
						className={LoginStyles.login_input}
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						onChange={(e) => setPassword(e.target.value)}
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
