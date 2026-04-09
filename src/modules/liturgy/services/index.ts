import axios from "axios";

const LITURGY_API_BASEURL = import.meta.env.VITE_LITURGY_API_BASEURL;

export async function getDailyLiturgy() {
  
  const response = await axios.get(LITURGY_API_BASEURL);

  return response.data;
}
