import { _API } from "./_API";

const apiUrl = import.meta.env.VITE_SAEEDAN_BASE_URL;

//Auth
export const GetAllBlog = async () => {
    const mLogin = await _API(`${apiUrl}/showAllBlogs`, "get", []);
    return mLogin;
};
