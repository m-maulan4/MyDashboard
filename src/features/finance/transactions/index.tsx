import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "./components/data-table";
import { columns } from "./components/colomns";
import { useGetAllTransaksiQuery } from "../financeApi";
import HeaderPage from "../../../components/HeaderPage";

export default function TransactionsPage() {
  const { data: fetchedData } = useGetAllTransaksiQuery();
  const data = fetchedData || [];

  return (
    <>
      <HeaderPage title="Transaksi" />
      <Card>
        <CardContent>
          <DataTable data={data} columns={columns} />
        </CardContent>
      </Card>
    </>
  );
}
