export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.phone) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('New Contact Inquiry:', {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    return Response.json(
      {
        success: true,
        message: 'Contact form submitted successfully. We will get back to you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
