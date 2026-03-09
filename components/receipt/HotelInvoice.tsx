import React from "react";

interface InvoiceItem {
    title: string;
    description: string;
    guests: number;
    quantity: number;
    perItem: number;
    lineTotal: number;
}

interface InvoiceItemRowProps {
    title: string;
    description: string;
    quantity: number;
    perItem: number;
    lineTotal: number;
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
        <div className="border-b border-gray-200">
            <div className="grid grid-cols-[2fr_1fr_0.5fr_1fr] gap-3 py-3 px-3 items-center">
                <div>
                    <p className="font-semibold text-gray-800 mb-0.5 text-xs">
                        {title}
                    </p>
                    <p className="text-xs text-gray-500 leading-tight">
                        {description}
                    </p>
                </div>
                <div className="text-right text-gray-800 text-xs">
                    {formatCurrency(perItem)}
                </div>
                <div className="text-center text-gray-800 text-xs">
                    {quantity}
                </div>
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
                perItem: 1000000,
                lineTotal: 1000000,
            },
            {
                title: "Presidential Suite",
                description:
                    "Luxury suite with panoramic view, private lounge, premium amenities",
                guests: 1,
                quantity: 1,
                perItem: 40000000,
                lineTotal: 40000000,
            },
            {
                title: "Breakfast",
                description: "Continental breakfast buffet for 2 persons",
                guests: 1,
                quantity: 1,
                perItem: 2000000,
                lineTotal: 2000000,
            },
            {
                title: "Room & Special Massage",
                description: "60 minutes therapeutic massage ",
                guests: 1,
                quantity: 1,
                perItem: 500000,
                lineTotal: 500000,
            },
        ],
        subtotal: 43500000,
        taxVAT: 4350000,
        discount: 0,
        total: 47850000,
    };

    const formatCurrency = (amount: number): string => {
        return `Rp ${amount.toLocaleString("id-ID")}`;
    };

    return (
        <div className=" mx-auto w-full max-w-[360px] md:max-w-[570px] bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-white">
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-100 to-gray-100 p-5">
                    <div className="flex justify-between items-start gap-4">
                        {/* Logo and Business Info */}
                        <div className="flex-1">
                            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-3">
                                <div className="w-8 h-8 border-4 border-white rounded-full border-l-transparent transform rotate-45"></div>
                            </div>
                            <h1 className="text-base md:text-lg font-bold text-indigo-900 mb-2">
                                Hotel
                                <br />
                                Galileo
                            </h1>
                            <div className="text-xs text-gray-600 space-y-0.5">
                                <p className="font-semibold">Office Address</p>
                                <p>{invoiceData.hotelAddress}</p>
                                <p>{invoiceData.hotelCity}</p>
                                <p className="mt-1">{invoiceData.hotelPhone}</p>
                            </div>
                        </div>

                        {/* Invoice Info */}
                        <div className="text-right flex-shrink-0">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-1">
                                INVOICE
                            </h2>
                            <p className="text-xs text-gray-600">
                                {invoiceData.invoiceDate}
                            </p>

                            <div className="mt-4 text-xs text-gray-600">
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
                    <div className="grid grid-cols-[2fr_1fr_0.5fr_1fr] gap-3 bg-indigo-900 text-white py-2.5 px-3 font-semibold text-xs">
                        <div>Items Description</div>
                        <div className="text-right">Unit Price</div>
                        <div className="text-center">Qnt</div>
                        <div className="text-right">Total</div>
                    </div>

                    {/* Table Items */}
                    {invoiceData.items.map((item, index) => (
                        <InvoiceItemRow
                            key={index}
                            title={item.title}
                            description={item.description}
                            quantity={item.quantity}
                            perItem={item.perItem}
                            lineTotal={item.lineTotal}
                        />
                    ))}

                    {/* Totals Section */}
                    <div className="mt-3 flex justify-end">
                        <div className="w-72 space-y-1.5">
                            <div className="flex justify-between text-xs">
                                <span className="text-gray-600">
                                    SUBTOTAL :
                                </span>
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
                            <div className="bg-indigo-900 text-white p-2.5 flex justify-between items-center mt-2 rounded">
                                <span className="font-bold text-sm">
                                    TOTAL DUE :
                                </span>
                                <span className="font-bold text-lg">
                                    {formatCurrency(invoiceData.total)}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Thank you message */}
                    <div className="mt-5 text-center">
                        <p className="text-sm font-semibold text-indigo-900">
                            Thank you for your Business
                        </p>
                    </div>

                    {/* Footer Info */}
                    <div className="mt-6 grid grid-cols-3 gap-4 text-xs border-t pt-4">
                        <div>
                            <p className="font-semibold text-indigo-900 mb-2">
                                Questions?
                            </p>
                            <p className="text-gray-600">Email us</p>
                            <p className="text-indigo-600">contact@email.us</p>
                            <p className="text-gray-600 mt-2">Call us</p>
                            <p className="text-indigo-600">(123) 456 789</p>
                        </div>
                        <div>
                            <p className="font-semibold text-indigo-900 mb-2">
                                Payment Info :
                            </p>
                            <p className="text-gray-600">Account</p>
                            <p className="text-gray-800">1234 567 890</p>
                            <p className="text-gray-600 mt-2">A/C Name</p>
                            <p className="text-gray-800">David Boone</p>
                            <p className="text-gray-600 mt-2">Bank Details</p>
                            <p className="text-gray-800">Demo Bank</p>
                        </div>
                        <div>
                            <p className="font-semibold text-indigo-900 mb-2">
                                Terms & Conditions/Note:
                            </p>
                            <p className="text-xs text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
