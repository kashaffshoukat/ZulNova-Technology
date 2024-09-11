import { _API } from "./_API";

const apiUrl = import.meta.env.VITE_SAEEDAN_BASE_URL;

//Auth
export const ShowPortfolio = async () => {
  const mLogin = await _API(`${apiUrl}/showPortfolio`, "get", []);
  return mLogin;
};
