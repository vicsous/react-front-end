// import { signup } from "../store/userSlice";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
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
    username: '',
    password: '',
    confirmPassword: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('E-mail inválido')
      .required('Campo obrigatório'),
    username: Yup.string()
      .min(2, 'O nome de usuário deve ter pelo menos 2 caracteres')
      .max(30, 'O nome de usuário deve ter no máximo 30 caracteres')
      .required('Campo obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Campo obrigatório'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
      .required('Campo obrigatório')
  });

  const handleSubmit = (values) => {
    setLoading(true);
    /*
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
      */
  }

  const user = useSelector(state => state.user);

  return (
    <>
    {loading ? <Spinner /> : (
      <div className="flex justify-center items-center h-screen bg-gray-800">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
          <h1 className="text-2xl font-bold text-center">Signup</h1>
          {user?.error && <div className="text-red-500 mb-4">{user.error}</div>}

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>

            <Form form novalidate="" action="" className="space-y-6">
              <div className="space-y-1 text-sm">
                <label for="email" className="block text-gray-400">Email</label>
                <Field type="text" placeholder="example@mail.com" id="email" name="email" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-100 focus:border-violet-400 text-gray-700" />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>

              <div className="space-y-1 text-sm">
                <label for="password" className="block text-gray-400">Password</label>
                <Field type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-100 focus:border-violet-400 text-gray-700" />
                <ErrorMessage name="password" component="div" className="text-red-500" />
              </div>
              
              <div className="space-y-1 text-sm">
                <label for="confirmPassword" className="block text-gray-400">Confirm password</label>
                <Field type="password" name="confirmPassword" id="confirmPassword" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 text-gray-100 focus:border-violet-400 text-gray-700" />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
              </div>

              <button disabled={loading} type="submit" className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
                {loading ? 'Carregando...' : 'Entrar'}
              </button>
            </Form>
          </Formik>

          <p className="text-xs text-center sm:px-6 text-gray-400">Already have an account?
            <a rel="noopener noreferrer" href="#" className="underline text-gray-100">Log In</a>
          </p>
        </div>
      </div>
    )}
  </>
  );
}

export default Signup;
