const signup = (req, res) => {
  try {

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
}

const login = (req, res) => {
  try {

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
}



module.exports = {
  login, signup
}