import axios from "axios";

export async function getDailyLiturgy() {
  const response = await axios.get("https://liturgia.up.railway.app/v2/");

  return response.data;
}
