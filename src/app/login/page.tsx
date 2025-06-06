import { Formik, Form, Field, ErrorMessage } from 'formik';

type FormValues = {
  email: string;
  password: string;
};

export default function Loginpage() {
  const initialValues: FormValues = { email: '', password: '' };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-red-700">Login</h2>

      <Formik
        initialValues={initialValues}
        validate={(values: FormValues) => {
          const errors: Partial<FormValues> = {};
          if (!values.email) errors.email = 'Email required';
          if (!values.password) errors.password = 'Password required';
          return errors;
        }}
        onSubmit={(values: FormValues, { setSubmitting }) => {
          console.log('Form data:', values);
          setSubmitting(false);
        }}
      >
        {() => (
          <Form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1 text-gray-700">Email</label>
              <Field
                type="text"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-600 mt-1"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-gray-700">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-sm text-red-600 mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition duration-200"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
