import bcrypt from "bcryptjs";
import userModel from "../usermodel.js";
export const login = async (req, res) => {
  const { phone, firebaseUid } = req.body;
  console.log(phone);
  console.log(firebaseUid);
  try {
    const user = await userModel.findOne({ firebaseUid });
    console.log(user);
    if (!user) {
      const newUser = new userModel({ phone, firebaseUid });
      await newUser.save();
    }

    return res.json({ success: true });
  }
  catch (error) {
    return res.json({ success: false, message: error.message })
  }

}

export const update = async (req, res) => {
  try {
    const { name, email, phone, firebaseUid, dob, aniversary } = req.body;

    if (!firebaseUid) {
      return res.status(400).json({ message: "firebaseUid is required" });
    }

    const updatedUser = await userModel.findOneAndUpdate(
      { firebaseUid },
      { name, email, phone, dob, aniversary },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", userModel: updatedUser });

  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
    }

    )
    return res.json({ success: true, message: "Logged Out" })
  }
  catch (error) {
    return res.json({ success: false, message: error.message });
  }
}







