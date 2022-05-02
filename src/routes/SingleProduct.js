import { useParams } from "react-router-dom";
export default function SingleProduct() {
  const params = useParams();
  console.log(params);
  return <h1>SingleProduct</h1>;
}
