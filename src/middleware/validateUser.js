const validateUser = (req, res, next) => {
    const { name, email } = req.body;
  
    // Check if name and email are provided
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
  
    // Validate email format using a simple regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
  
    // If validation passes, move to the next middleware or controller
    next();
  };
  
  module.exports = validateUser;