import jwt from "jsonwebtoken"

const generateAccessToken = async (userId,role) => {

    try {
        const accessToken = await jwt.sign({ id: userId ,role}, process.env.ACCESS_TOKEN_KEY, { expiresIn: '15h' })
        return accessToken;
    } catch (error) {
        console.error("Error generating access token:", error);
        throw new Error("Could not generate acesstoken token");
    }
}

export default generateAccessToken