// pages/api/login.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      if (email === 'email@gmail.com' && password === 'password') {
        // Simulate a delay for the API response (replace this with actual database check)
        await new Promise(resolve => setTimeout(resolve, 1000));
  
        // Send a success response
        res.status(200).json({ success: true });
      } else {
        // Send an error response for an unsuccessful login
        res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
    } else {
      // Handle other HTTP methods
      res.status(405).end();
    }
  }
  