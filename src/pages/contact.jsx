import React from 'react';
import axios from 'axios';
import AutosizeableTextarea from 'react-textarea-autosize';
import { Form as FormikForm, Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Layout from '../components/Layout';
import Text from '../components/Text';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Heading from '../components/Heading';

const FormError = ({ children }) => <p className="mt-1 text-xs text-red-600">{children}</p>;

const Input = ({ form, field, ...rest }) => (
  <input
    {...field}
    {...rest}
    className="w-full border-0 border-b border-gray-200 py-2 outline-none focus:border-gray-400"
  />
);

const Textarea = ({ form, field, ...rest }) => (
  <AutosizeableTextarea
    {...field}
    {...rest}
    className="w-full border-0 border-b border-gray-200 py-2 outline-none focus:border-gray-400"
  />
);

const initialValues = {
  email: '',
  subject: '',
  body: '',
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Please enter an email to respond to'),
  subject: yup
    .string()
    .max(40, 'Please enter no more than 40 characters')
    .required('Please enter a subject for your message'),
  body: yup.string().required('Please enter a message'),
});

const ContactPage = () => {
  const [isMessageSent, setMessageSent] = React.useState(false);

  const sendMessage = async (values, { setSubmitting }) => {
    try {
      await axios.post('/.netlify/functions/contact', values);
      setSubmitting(false);
      setMessageSent(true);
    } catch (err) {
      alert(err);
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO title="Contact" />

      <div className="mx-auto flex max-w-xl flex-grow flex-col justify-center">
        <Heading size="small">Get in touch</Heading>
        <Text>
          If you want to get in touch with me after all you've seen, then please fill this form and
          I'll get back to you within a few hours. Alternatively, feel free to email me directly at{' '}
          <a className="text-blue-600" href="mailto:contact@aggelosarvanitakis.me">
            contact@aggelosarvanitakis.me
          </a>
          .
        </Text>
        {isMessageSent ? (
          <div className="mt-4 rounded bg-gray-700 px-4 py-8 text-center text-white">
            Your message has been sent!
          </div>
        ) : (
          <Formik
            initialValues={initialValues}
            onSubmit={sendMessage}
            validationSchema={validationSchema}
          >
            {({ isSubmitting, isValid }) => (
              <FormikForm className="space-y-12 pb-4" noValidate>
                <fieldset>
                  <label htmlFor="email" className="text-sm text-gray-500">
                    Your email address
                  </label>
                  <Field component={Input} type="email" name="email" id="email" />
                  <ErrorMessage component={FormError} name="email" />
                </fieldset>
                <fieldset>
                  <label htmlFor="subject" className="text-sm text-gray-500">
                    Subject
                  </label>
                  <Field component={Input} type="text" name="subject" id="subject" />
                  <ErrorMessage component={FormError} name="subject" />
                </fieldset>
                <fieldset>
                  <label htmlFor="body" className="text-sm text-gray-500">
                    Message
                  </label>
                  <Field component={Textarea} type="number" name="body" id="body" />
                  <ErrorMessage component={FormError} name="body" />
                </fieldset>
                <div className="grid">
                  <Button type="submit" disabled={isSubmitting || !isValid}>
                    Send message
                  </Button>
                </div>
              </FormikForm>
            )}
          </Formik>
        )}
      </div>
    </Layout>
  );
};

export default ContactPage;
