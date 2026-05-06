export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.name || !data.email) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('New Pricing Enquiry:', {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      enquiryType: data.enquiryType,
      message: data.message,
    });

    return Response.json(
      {
        success: true,
        message: 'Enquiry submitted successfully. We will send you pricing information shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Enquiry form error:', error);
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
