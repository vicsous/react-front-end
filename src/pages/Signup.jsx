import { signup } from '../store/userSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as Yup from 'yup';

const Spinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-24 h-24 border-t-4 border-purple-300 border-solid rounded-full animate-spin"></div>
  </div>
);

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email')
      .required('Required field'),
    username: Yup.string()
      .min(5, 'Must be at least 5 char. long')
      .max(32, 'Must be less than 32 char. long')
      .matches(/^[A-Za-z0-9]+$/, 'Only letters and numbers are allowed')
      .required('Required field'),
    password: Yup.string()
      .min(6, 'Password too short')
      .required('Required field'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must be the same')
      .required('Required field')
  });

  const handleSubmit = (values) => {
    setLoading(true);
    alert(JSON.stringify(values))
    dispatch(signup(values))
      .then(data => {
        localStorage.setItem('accessToken', data.payload.accessToken);
      })
      .catch(e => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
      setLoading(false)
    setLoading(false)
    }
  
  const user = useSelector(state => state.user);

  return (
    <>
    {loading ? <Spinner /> : (
		  <section className="bg-gray-50 dark:bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Sign Up
							</h1>
							{user?.error && <div className="text-red-500 mb-4">{user.error}</div>}

							<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
							<Form className="space-y-4 md:space-y-6" action="#">
								<div>
									<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
									<Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" ></Field>
									<ErrorMessage name="email" component="div" className="text-red-500" />
								</div>
								<div>
									<label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
									<div className="flex">
										<span className="font-italic text-lg inline-flex items-center px-3 text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
											@
										</span>
										<Field type="text" name="username" id="username" className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john02"></Field>
									</div>
									<ErrorMessage name="username" component="div" className="text-red-500" />
								</div>
								<div>
									<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
									<Field type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></Field>
									<ErrorMessage name="password" component="div" className="text-red-500" />
								</div>
								<div>
									<label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
									<Field type="password" name="confirmPassword" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></Field>
									<ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
								</div>
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<Field id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" ></Field>
									</div>
									<div className="ml-3 text-sm">
										<label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
									</div>
								</div>
								<button type="submit" disabled={loading} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
								<p className="text-sm font-light text-gray-500 dark:text-gray-400">
									Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
								</p>
							</Form>
							</Formik>
						</div>
					</div>
				</div>
			</section>
    )}
  </>
  );
}

export default Signup;
