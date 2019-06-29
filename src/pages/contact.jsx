import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import AutosizeableTextarea from 'react-textarea-autosize';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Text from '../components/Text';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Grid from '../components/Grid';
import Column from '../components/Column';
import Container from '../components/Container';

const commonFormElementStyles = ({ theme }) => css`
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 0.5rem 0;
  width: 100%;
  font-size: 1rem;
  border-bottom: 1px solid ${theme.colors.lightgrey};
  outline: none;
  color: ${theme.colors.black};

  &:focus {
    border-bottom: 1px solid ${theme.colors.grey};
  }
`;

const FormControl = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.grey};
`;

const Input = styled(({ form, field, ...rest }) => <input {...field} {...rest} />)`
  ${commonFormElementStyles}
`;

const Textarea = styled(({ form, field, ...rest }) => (
  <AutosizeableTextarea {...field} {...rest} />
))`
  ${commonFormElementStyles}
`;

const FormError = styled.p`
  font-size: 0.8rem;
  margin-top: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.danger};
`;

const SuccessBox = styled.div`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  margin-top: ${({ theme }) => theme.spacing.lg};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

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

  const sendMessage = values => {
    alert(values);

    setMessageSent(true);
  };

  return (
    <Layout>
      <SEO title="Contact" />

      <Container contentJustification="center">
        <Grid>
          <Column centered tablet={12} computer={8} largeMonitor={6}>
            <Heading size="small">Get in touch</Heading>
            <Text>
              If you still wanna get in touch with me after seeing my face in the landing page, then
              please fill this form and I'll get back to you within a few hours. Alternatively, you
              can email me directly at{' '}
              <a href="mailto:agg.arvanitakis@gmail.com">agg.arvanitakis@gmail.com</a>.
            </Text>
            {isMessageSent ? (
              <SuccessBox>Your message has been sent!</SuccessBox>
            ) : (
              <Formik
                initialValues={initialValues}
                onSubmit={sendMessage}
                validationSchema={validationSchema}
              >
                {({ isSubmitting, isValid }) => (
                  <Form novalidate>
                    <FormControl>
                      <Label htmlFor="email">Your email address</Label>
                      <Field component={Input} type="email" name="email" id="email" />
                      <ErrorMessage component={FormError} name="email" />
                    </FormControl>
                    <FormControl>
                      <Label htmlFor="subject">Subject</Label>
                      <Field component={Input} type="text" name="subject" id="subject" />
                      <ErrorMessage component={FormError} name="subject" />
                    </FormControl>
                    <FormControl>
                      <Label htmlFor="body">Message</Label>
                      <Field component={Textarea} type="number" name="body" id="body" />
                      <ErrorMessage component={FormError} name="body" />
                    </FormControl>
                    <Button fullWidth type="submit" disabled={isSubmitting || !isValid}>
                      Send message
                    </Button>
                  </Form>
                )}
              </Formik>
            )}
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ContactPage;
