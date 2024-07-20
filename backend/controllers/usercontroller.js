import usermodel from "../models/usermodel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const loginuser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const cheakmail = await usermodel.findOne({ email: email });
    if (!cheakmail) {
      return res.json({ success: false, message: "user not found" });
    }
    const cheakpassword = await bcrypt.compare(password, cheakmail.password);
    if (!cheakpassword) {
     return  res.json({ success: false, message: "password is incorrect" });
    }
    const token = createtoken(cheakmail._id);
    res.json({ success: true, token: token});
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "something went wrong" });
  }
};

const createtoken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const registeruser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const exits = await usermodel.findOne({ email: email });

    if (exits) {
      return res.json({ success: false, message: "User already exits" });
    }
    //validating if its email or not
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "enter valid email" });
    }
    if (password.length < 8) {
      return res.json({
        success: "false",
        message: "password should be atleast 8 characters",
      });
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const newuser = new usermodel({
      name: name,
      email: email,
      password: hashpassword,
    });
    const user = await newuser.save();
    const token = createtoken(user._id);
    res.json({ success: true, token: token, user: user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "something went wrong" });
  }
};

export { loginuser, registeruser };
