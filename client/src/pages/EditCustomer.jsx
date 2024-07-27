import { useParams } from "react-router-dom";

function EditCustomer() {
  let params = useParams();
  return <div>{params.customerId}</div>;
}

export default EditCustomer;
