import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Customer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState();
  useEffect(() => {
    console.log("useEffect");
    const url = "http://localhost:8000/api/customers/" + id;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
      });
  }, []);
  return (
    <>
      <p class="mb-4 text-lg font-bold">Details page</p>
      {customer ? (
        <div class="container mx-auto mt-8">
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div>
      ) : null}
    </>
  );
}
