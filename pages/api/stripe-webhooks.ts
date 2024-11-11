import { buffer } from "micro"
import { NextApiRequest, NextApiResponse } from "next"
import { Stripe } from "stripe"


export const config = {
    api: {
        bodyParser: false
    }
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2024-06-20'
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const buf = await buffer(req)
    const sig = req.headers['stripe-signature']

    if (!sig) {
        return res.status(400).send("Missing the stripe signature");
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(
            buf,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (err) {
        return res.status(400).send("webhook error" + err);
    }

    switch (event.type) {
        case "charge.succeeded":
            const charge: any = event.data.object as Stripe.Charge;

            if (typeof charge.payment_intent === "string") {
                await prisma?.order.update({
                    where: { paymentIntentId: charge.payment_intent },
                    data: { status: "complete", adress: charge.shipping?.adress },
                });
            }
            break;
        default: console.log("unhandled event type:" + event.type);
    }
    res.json({ recieved: true });

}


