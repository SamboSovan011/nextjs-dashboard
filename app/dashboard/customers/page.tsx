import { fetchFilteredCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
import Table from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {

  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <Table customers={customers} />
  );
}