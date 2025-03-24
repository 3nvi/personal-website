import React from 'react';
import axios from 'axios';
import TextareaAutosize from 'react-textarea-autosize';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Layout from '../components/Layout';
import Text from '../components/Text';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Heading from '../components/Heading';

const formFieldClasses = 'w-full border-b border-gray-200 py-2 outline-none focus:border-gray-400';

const validationSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Please enter an email to respond to'),
  subject: z
    .string()
    .max(40, 'Please enter no more than 40 characters')
    .min(1, 'Please enter a subject for your message'),
  body: z.string().min(1, 'Please enter a message'),
});

const ContactPage = () => {
  const [isMessageSent, setMessageSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid, touchedFields },
    setError,
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      subject: '',
      body: '',
    },
  });

  const onSubmit = async values => {
    try {
      await axios.post('/.netlify/functions/contact', values);
      setMessageSent(true);
    } catch (err) {
      setError('root.serverError', {
        message: err.response.data.message,
      });
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 pb-4" noValidate>
            <fieldset className="space-y-1">
              <label htmlFor="email" className="text-sm text-gray-500">
                Your email address
              </label>
              <input {...register('email')} type="email" id="email" className={formFieldClasses} />
              {errors.email && touchedFields.email && (
                <p className="text-xs text-red-600">{errors.email.message}</p>
              )}
            </fieldset>
            <fieldset className="space-y-1">
              <label htmlFor="subject" className="text-sm text-gray-500">
                Subject
              </label>
              <input
                {...register('subject')}
                type="text"
                id="subject"
                className={formFieldClasses}
              />
              {errors.subject && touchedFields.subject && (
                <p className="text-xs text-red-600">{errors.subject.message}</p>
              )}
            </fieldset>
            <fieldset className="space-y-1">
              <label htmlFor="body" className="text-sm text-gray-500">
                Message
              </label>
              <Controller
                name="body"
                control={control}
                render={({ field }) => <TextareaAutosize {...field} className={formFieldClasses} />}
              />
              {errors.body && touchedFields.body && (
                <p className="text-xs text-red-600">{errors.body.message}</p>
              )}
            </fieldset>
            {errors.root && (
              <div className="my-2">
                <p className="text-xs text-red-600">{errors.root.serverError.message}</p>
              </div>
            )}
            <div className="grid">
              <Button type="submit" disabled={isSubmitting || !isValid}>
                Send message
              </Button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default ContactPage;
