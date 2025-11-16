import { useGetOverviewQuery } from "../financeApi";
import CardWidget from "./components/CardWidget";

export default function OverViewPage() {
  const { data: widget } = useGetOverviewQuery();
  return (
    <div className="grid lg:grid-cols-4 gap-3">
      <div className="col-span-3 grid lg:grid-cols-3 gap-3 h-fit">
        <CardWidget
          type="1"
          jumlah={widget?.uangMasuk.jumlah || 0}
          title={widget?.uangMasuk.title || ""}
        />
        <CardWidget
          type="2"
          jumlah={widget?.uangKeluar.jumlah || 0}
          title={widget?.uangKeluar.title || ""}
        />
        <CardWidget type="3" jumlah={0} title="Coming Soon" />
      </div>
      <div className="grid grid-cols-1 gap-3 h-fit max-md:hidden">asdfd</div>
    </div>
  );
}
