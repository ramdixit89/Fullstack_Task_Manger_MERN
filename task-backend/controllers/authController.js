const { MongoUser } = require('../models/userSchema');

// Register user
exports.registerUser = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;
    if (!fullName || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }
    // Save to MongoDB only
    const newUser = new MongoUser({ fullName, email, password, confirmPassword });
    await newUser.save();
    return res.status(201).json({
      message: 'User registered successfully',
      mongoId: newUser._id
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    // Check MongoDB only
    const user = await MongoUser.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    return res.status(200).json({
      message: 'Login successful',
      mongoId: user._id
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
