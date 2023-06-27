import React from 'react';
import SectionHeader from '../../../../components/sectionHeader/SectionHeader';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
    return (
        <section className='container mx-auto'>
            <SectionHeader>Payment</SectionHeader>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </section>
    );
};

export default Payment;