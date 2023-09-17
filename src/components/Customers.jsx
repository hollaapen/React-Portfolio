import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Customers() {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/api/customers")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setCustomers(data.customers);
      });

    //we need to add empty dependency array so that the url is hit once on initial load
  }, []);
  return (
    <>
      <div class="container mx-auto mt-8">
        <h2 class="mb-4 text-lg font-bold">Customer list</h2>

        <div class="grid grid-cols-3">
          {customers
            ? customers.map((customer) => {
                return (
                  <Link to={"/customers/" + customer.id}>{customer.name}</Link>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
