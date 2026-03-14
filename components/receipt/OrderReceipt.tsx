import RowReceipt from "./ReceiptRow";

export default function OrderReceipt() {
  const Divider = () => (
    <div className="my-3 border-black border-t border-dashed" />
  );

  return (
    <div className="mx-auto w-[320px] bg-white p-4 text-black text-sm print:w-full">
      {/* Header */}
      <div className="space-y-1 text-center">
        <p className="font-bold">Coffe Shop ABC</p>
        <p>Wed, May 27, 2020</p>
        <p>09:27:53 AM</p>
      </div>

      <Divider />
      <Divider />

      {/* Info */}
      <RowReceipt label="Metode Pembayaran" value="Cash" />
      <RowReceipt label="Nama Pelanggan" value="Sendi Sinaga" />

      <Divider />

      {/* Amount */}
      <RowReceipt label="Harga Makanan" value="Rp 100.000" />
      <RowReceipt label="Service Charge" value="Rp 5.000 " />
      <Divider />
      <RowReceipt bold label="Dasar Pengenaan Pajak" value="Rp.105.000" />
      <RowReceipt bold label="Pajak Restoran 10%" value="Rp.10.500" />
      <RowReceipt bold label="Total" value="Rp.115.500" />

      <Divider />

      <RowReceipt label="Operator" value="Ade" />

      <div className="mt-6 text-center font-bold text-lg">COFFE SHOP ABC</div>
    </div>
  );
}
