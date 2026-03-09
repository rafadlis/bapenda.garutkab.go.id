interface ReceiptRowProps {
    label: string;
    value: string;
    bold?: boolean;
}
export default function RowReceipt({ label, value, bold = false }: ReceiptRowProps) {
    return (
        <div className="flex justify-between items-start whitespace-pre-line">
            <span>{label}</span>
            <span className={bold ? "font-bold" : ""}>{value}</span>
        </div>
    );
}
