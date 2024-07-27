import { useParams } from "react-router-dom";

function CustomerDetails() {
  let params = useParams();
  return <div>{params.customerId}</div>;
}

export default CustomerDetails;
