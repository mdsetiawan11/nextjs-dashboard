import { fetchCustomers, fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import React from "react";

export default async function page() {
  return <CustomersTable />;
}
