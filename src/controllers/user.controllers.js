import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {

    /* Register user algorithm 
        --user se data collect krna h 
        --data validations 
        --user existance check in db
        --files checking 
        --file upload cloudinary 
        --user object create and entry in db
        --remove password and sensitive info to response  
    */
    const { fullName, username, email, password } = req.body;
    console.log(username);

    if ([username, email, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required.")
    }

    const existedUser = await User.findOne({
        $or: [{ email }, { username }]
    })
    console.log(existedUser);
    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists");
    }

})

export { registerUser }