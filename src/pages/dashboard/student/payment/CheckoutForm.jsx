import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState('')

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return;
        }

        // console.log(card);

      const {error, paymentMethod} = await stripe.createPaymentMethod({type : 'card', card})
      if(error){
        console.log(error)
        setCardError(error.message)
      }else{
        console.log(paymentMethod);
        setCardError('')
      }

        

    }

    return (
      <>
      
      
    <form onSubmit={handleSubmit} className='border'>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className='btn btn-outline btn-sm my-4' disabled={!stripe}>
        Pay
      </button>
    </form>
    <p className='text-red-600 pl-4'>{cardError}</p>

    </>
    );
};

export default CheckoutForm;