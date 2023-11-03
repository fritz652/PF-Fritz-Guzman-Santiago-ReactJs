import { useFetch } from "../utils/hooks/useFetch";

const FetchUno = () => {
  let { data } = useFetch("https://jsonplaceholder.typicode.com/albums");
  console.log(data);
  return <div></div>;
};

export default FetchUno;
