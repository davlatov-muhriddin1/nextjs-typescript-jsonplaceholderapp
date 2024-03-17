import axios from "axios";

const getData = async (url: string) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/${url}`
  );
  return data;
};

export default getData;
