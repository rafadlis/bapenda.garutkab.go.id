import React from "react";

interface InvoiceItem {
  description: string;
  guests: number;
  lineTotal: number;
  perItem: number;
  quantity: number;
  title: string;
}

interface InvoiceItemRowProps {
  description: string;
  lineTotal: number;
  perItem: number;
  quantity: number;
  title: string;
}

function InvoiceItemRow({
  title,
  description,
  quantity,
  perItem,
  lineTotal,
}: InvoiceItemRowProps) {
  const formatCurrency = (amount: number): string => {
    return `Rp ${amount.toLocaleString("id-ID")}`;
  };

  return (
    <div className="border-gray-200 border-b">
      <div className="grid grid-cols-[2fr_1fr_0.5fr_1fr] items-center gap-3 px-3 py-3">
        <div>
          <p className="mb-0.5 font-semibold text-gray-800 text-xs">{title}</p>
          <p className="text-gray-500 text-xs leading-tight">{description}</p>
        </div>
        <div className="text-right text-gray-800 text-xs">
          {formatCurrency(perItem)}
        </div>
        <div className="text-center text-gray-800 text-xs">{quantity}</div>
        <div className="text-right font-semibold text-gray-800 text-xs">
          {formatCurrency(lineTotal)}
        </div>
      </div>
    </div>
  );
}

export default function HotelInvoice() {
  const invoiceData = {
    hotelName: "Hotel Garut",
    hotelAddress: "Jl. Ciledug Raya No. 45",
    hotelCity: "Garut, Jawa Barat",
    hotelPhone: "(0262) 234 567",
    invoiceDate: "December 26, 2020",
    guestName: "Ananda Niko",
    guestAddress: "Jl. Pembangunan No. 78",
    guestNumber: "Tarogong Kidul, Garut",
    items: [
      {
        title: "Deluxe Bedroom",
        description:
          "Premium room with king bed, city view, complimentary breakfast included",
        guests: 1,
        quantity: 1,
        perItem: 1_000_000,
        lineTotal: 1_000_000,
      },
      {
        title: "Presidential Suite",
        description:
          "Luxury suite with panoramic view, private lounge, premium amenities",
        guests: 1,
        quantity: 1,
        perItem: 40_000_000,
        lineTotal: 40_000_000,
      },
      {
        title: "Breakfast",
        description: "Continental breakfast buffet for 2 persons",
        guests: 1,
        quantity: 1,
        perItem: 2_000_000,
        lineTotal: 2_000_000,
      },
      {
        title: "Room & Special Massage",
        description: "60 minutes therapeutic massage ",
        guests: 1,
        quantity: 1,
        perItem: 500_000,
        lineTotal: 500_000,
      },
    ],
    subtotal: 43_500_000,
    taxVAT: 4_350_000,
    discount: 0,
    total: 47_850_000,
  };

  const formatCurrency = (amount: number): string => {
    return `Rp ${amount.toLocaleString("id-ID")}`;
  };

  return (
    <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm md:max-w-[570px]">
      <div className="bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-100 to-gray-100 p-5">
          <div className="flex items-start justify-between gap-4">
            {/* Logo and Business Info */}
            <div className="flex-1">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600">
                <div className="h-8 w-8 rotate-45 transform rounded-full border-4 border-white border-l-transparent" />
              </div>
              <h1 className="mb-2 font-bold text-base text-indigo-900 md:text-lg">
                Hotel
                <br />
                Galileo
              </h1>
              <div className="space-y-0.5 text-gray-600 text-xs">
                <p className="font-semibold">Office Address</p>
                <p>{invoiceData.hotelAddress}</p>
                <p>{invoiceData.hotelCity}</p>
                <p className="mt-1">{invoiceData.hotelPhone}</p>
              </div>
            </div>

            {/* Invoice Info */}
            <div className="flex-shrink-0 text-right">
              <h2 className="mb-1 font-bold text-2xl text-indigo-900">
                INVOICE
              </h2>
              <p className="text-gray-600 text-xs">{invoiceData.invoiceDate}</p>

              <div className="mt-4 text-gray-600 text-xs">
                <p className="font-semibold">To :</p>
                <p className="font-medium text-gray-800">
                  {invoiceData.guestName}
                </p>
                <p>{invoiceData.guestAddress}</p>
                <p>{invoiceData.guestNumber}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="p-5">
          {/* Table Header */}
          <div className="grid grid-cols-[2fr_1fr_0.5fr_1fr] gap-3 bg-indigo-900 px-3 py-2.5 font-semibold text-white text-xs">
            <div>Items Description</div>
            <div className="text-right">Unit Price</div>
            <div className="text-center">Qnt</div>
            <div className="text-right">Total</div>
          </div>

          {/* Table Items */}
          {invoiceData.items.map((item, index) => (
            <InvoiceItemRow
              description={item.description}
              key={index}
              lineTotal={item.lineTotal}
              perItem={item.perItem}
              quantity={item.quantity}
              title={item.title}
            />
          ))}

          {/* Totals Section */}
          <div className="mt-3 flex justify-end">
            <div className="w-72 space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">SUBTOTAL :</span>
                <span className="font-semibold">
                  {formatCurrency(invoiceData.subtotal)}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">
                  Pajak Jasa Perhotelan 10% :
                </span>
                <span className="font-semibold">
                  {formatCurrency(invoiceData.taxVAT)}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between rounded bg-indigo-900 p-2.5 text-white">
                <span className="font-bold text-sm">TOTAL DUE :</span>
                <span className="font-bold text-lg">
                  {formatCurrency(invoiceData.total)}
                </span>
              </div>
            </div>
          </div>

          {/* Thank you message */}
          <div className="mt-5 text-center">
            <p className="font-semibold text-indigo-900 text-sm">
              Thank you for your Business
            </p>
          </div>

          {/* Footer Info */}
          <div className="mt-6 grid grid-cols-1 gap-3 border-t pt-4 text-xs sm:grid-cols-2 md:grid-cols-3">
            <div>
              <p className="mb-2 font-semibold text-indigo-900">Questions?</p>
              <p className="text-gray-600">Email us</p>
              <p className="text-indigo-600">contact@email.us</p>
              <p className="mt-2 text-gray-600">Call us</p>
              <p className="text-indigo-600">(123) 456 789</p>
            </div>
            <div>
              <p className="mb-2 font-semibold text-indigo-900">
                Payment Info :
              </p>
              <p className="text-gray-600">Account</p>
              <p className="text-gray-800">1234 567 890</p>
              <p className="mt-2 text-gray-600">A/C Name</p>
              <p className="text-gray-800">David Boone</p>
              <p className="mt-2 text-gray-600">Bank Details</p>
              <p className="text-gray-800">Demo Bank</p>
            </div>
            <div>
              <p className="mb-2 font-semibold text-indigo-900">
                Terms & Conditions/Note:
              </p>
              <p className="text-gray-600 text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod tincidunt
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
