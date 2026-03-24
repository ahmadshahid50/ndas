export async function POST(request) {
  try {
    const data = await request.json();

    // Basic validation
    if (
      !data.name ||
      !data.participantName ||
      !data.ndisType ||
      !data.servicesNeeded ||
      data.servicesNeeded.length === 0 ||
      !data.location ||
      !data.preferredContact
    ) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the booking request
    console.log('New Booking Request:', {
      timestamp: new Date().toISOString(),
      contactName: data.name,
      participantName: data.participantName,
      ndisType: data.ndisType,
      servicesNeeded: data.servicesNeeded,
      location: data.location,
      preferredContact: data.preferredContact,
    });

    // Return success response
    return Response.json(
      {
        success: true,
        message: 'Booking request submitted successfully. We will contact you to confirm.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking form error:', error);
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
