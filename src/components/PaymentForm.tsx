import React from 'react';
import { Field, Form, Formik } from 'formik';

interface PaymentFormValues {
  fullName: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  zipCode: string;
}

const PaymentForm: React.FC = () => {
  const initialValues: PaymentFormValues = {
    fullName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    zipCode: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      <Form>
        <label htmlFor="fullName">
          Full Name
          <Field name="fullName" type="text" />
        </label>
        <label htmlFor="cardNumber">
          Card Number
          <Field name="cardNumber" type="text" />
        </label>
        <label htmlFor="expirationDate">
          Expiration
          <Field name="expirationDate" type="text" />
        </label>
        <label htmlFor="cvv">
          CVV
          <Field name="cvv" type="text" />
        </label>
        <label htmlFor="zipCode">
          Zip Code
          <Field name="zipCode" type="text" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default PaymentForm;
