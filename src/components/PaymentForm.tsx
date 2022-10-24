import React from 'react';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { PaymentFormValues } from '../types/payment-form.interfaces';
import { validateCreditCard, validateFullName, validateExpiryDate } from '../utils/form.validators';
import styles from './PaymentForm.module.css';
import MASCOT from '../assets/mascot.png';

const PaymentForm: React.FC = () => {
  const initialValues: PaymentFormValues = {
    fullName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    zipCode: '',
  };

  // TODO: Test this function
  const validate = (values: PaymentFormValues) => {
    const errors: Partial<PaymentFormValues> = {};
    const fullNameError = validateFullName(values.fullName);
    const creditCardError = validateCreditCard(values.cardNumber);
    const expirationDateError = validateExpiryDate(values.expirationDate);

    if (fullNameError) errors.fullName = fullNameError;

    if (creditCardError) errors.cardNumber = creditCardError;

    if (expirationDateError) errors.expirationDate = expirationDateError;

    if (!values.cvv) errors.cvv = 'Required';

    if (!values.zipCode) errors.zipCode = 'Required';

    return errors;
  };

  return (
    <div className={styles.payment_form}>
      <div className={styles.header}>
        <img src={MASCOT} alt="Payment mascot" />
        <h3>Payment info</h3>
      </div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        validateOnChange={false}
        onSubmit={(values) => console.log(values)}
      >
        <Form className={styles.form}>
          <label htmlFor="fullName">Full Name</label>
          <Field name="fullName" type="text" placeholder="Your Name" />
          <ErrorMessage name="fullName" component="p" data-testid="full_name-error" />

          <label htmlFor="cardNumber">Card Number</label>
          <Field name="cardNumber" type="text" placeholder="1234 1234 1234 1234" />
          <ErrorMessage name="cardNumber" component="p" className={styles.error} data-testid="card_number-error" />

          <label htmlFor="expirationDate">Expiration</label>
          <Field name="expirationDate" type="text" placeholder="MM/YY" />
          <ErrorMessage name="expirationDate" component="p" className={styles.error} data-testid="expiration_date-error" />

          <label htmlFor="cvv">CVV</label>
          <Field name="cvv" type="text" placeholder="&#8226;&#8226;&#8226;" />
          <ErrorMessage name="cvv" component="p" className={styles.error} data-testid="cvv-error" />

          <label htmlFor="zipCode">Zip Code</label>
          <Field name="zipCode" type="text" placeholder="Your Zip" />
          <ErrorMessage name="zipCode" component="p" className={styles.error} data-testid="zip_code-error" />

          <div className={styles.footer}>
            <button type="submit">Confirm Payment</button>
            <span>You verify that this info is correct</span>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PaymentForm;
