

export async function POST(request: Request) {
  // Ensure the request is of type POST
  if (request.method === 'POST') {
    try {
      // Parse the request body to get the email
      const data = await request.json();
      const { email } = data;

      // Simple email validation
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return new Response(JSON.stringify({ message: 'Please provide a valid email address.' }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }

      // Here, implement your logic to handle the email, e.g., storing it in a database
      console.log(email)

      // Respond with a success message
      return new Response(JSON.stringify({ message: 'Email successfully submitted!' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      // Handle any errors that occur during the request
      return new Response(JSON.stringify({ message: 'An error occurred.' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } else {
    // Method not allowed
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
