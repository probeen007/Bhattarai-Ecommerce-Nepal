"use client"

import { useCart } from "@/hooks/useCart";
import React, { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement, AddressElement } from "@stripe/react-stripe-js";
import { formatPrice } from "@/utils/formatPrice";
import toast from "react-hot-toast";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { Suspense } from "react";
import { useParams } from "next/navigation";
import { FaSpinner } from "react-icons/fa";

interface CheckoutFormProps {
  clientSecret: string,
  handleSetPaymentSuccess: (value: boolean) => void;
}


const CheckoutForm: React.FC<CheckoutFormProps> = ({ clientSecret, handleSetPaymentSuccess }) => {

  const { cartTotalAmount, handleClearCart, handleSetPaymentIntent } = useCart()
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false);
  const formattedPrice = formatPrice(cartTotalAmount)
  


  useEffect(() => {
    if (!stripe) {
      return;
    }

    if (!clientSecret) {
      return;
    }

    handleSetPaymentSuccess(false);
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true)

    stripe.confirmPayment({
      elements,
      redirect: 'if_required'
    }).then(result => {
      if (!result.error) {
        toast.success('Checkout Success')

        handleClearCart()
        handleSetPaymentSuccess(true);
        handleSetPaymentIntent(null);

      }

      setIsLoading(false);

    })

  }

  return (
    <Suspense fallback={<div><FaSpinner /></div>}>
      <form onSubmit={handleSubmit} id="payment-form">
        <div className="mb-6">
          <Heading title="Enter your details" />
        </div>
        <h2 className="font-semibold mt-4 mb-2">Adress Information</h2>
        <AddressElement options={{
          mode: "shipping",
          allowedCountries: ["NEP", "US", "IND"],
        }} />
        <h2 className="font-semibold mt-4 mb-2">Payment Information</h2>
        <PaymentElement id="payment-element" options={{ layout: "tabs" }} />
        <div className="py-4 text-center text-slate-700 text-3xl font-bold">
          Total : {formattedPrice}
        </div>

        <Button label={isLoading ? 'Processing' : 'Pay now'} disabled={isLoading || !stripe || !elements} OnClick={() => { }}></Button>

      </form>
    </Suspense>

  );
}

export default CheckoutForm;