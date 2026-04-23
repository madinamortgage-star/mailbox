export async function POST(req: Request) {
  const Stripe = (await import('stripe')).default;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  try {
    const { priceId } = await req.json() as { priceId: string };

    if (!priceId) {
      return Response.json({ error: 'priceId is required' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: 'https://mybizmailbox.biz/success',
      cancel_url: 'https://mybizmailbox.biz/cancel',
      billing_address_collection: 'required',
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error('[checkout]', err);
    return Response.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
