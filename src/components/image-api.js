import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const ACCESS_KEY = "AdcI7TU8-q5oR1xcgJygy_PoHhrRNSl_X2k92caE9HI";

export const getImages = async (searchQuery, currentPage) => {
  const response = await axios.get("search/photos", {
    params: {
      query: searchQuery,
      page: currentPage,
      orientation: "landscape",
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
