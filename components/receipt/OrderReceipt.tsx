import RowReceipt from "./ReceiptRow";

export default function OrderReceipt() {
    const Divider = () => (
        <div className="my-3 border-t border-dashed border-black" />
    );

    return (
        <div className="mx-auto w-[320px] bg-white p-4 text-sm text-black print:w-full">
            {/* Header */}
            <div className="text-center space-y-1">
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
            <Divider/>
            <RowReceipt label="Dasar Pengenaan Pajak" value="Rp.105.000" bold />
            <RowReceipt label="Pajak Restoran 10%" value="Rp.10.500" bold />
            <RowReceipt label="Total" value="Rp.115.500" bold />




            <Divider />

            <RowReceipt label="Operator" value="Ade" />

            <div className="mt-6 text-center font-bold text-lg">COFFE SHOP ABC</div>
        </div>
    );
}
