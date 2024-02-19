const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    nic: String,
    password: String
  });
  
  const User = mongoose.model('User', userSchema);
  