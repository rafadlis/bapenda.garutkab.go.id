interface ReceiptRowProps {
  bold?: boolean;
  label: string;
  value: string;
}
export default function RowReceipt({
  label,
  value,
  bold = false,
}: ReceiptRowProps) {
  return (
    <div className="flex items-start justify-between whitespace-pre-line">
      <span>{label}</span>
      <span className={bold ? "font-bold" : ""}>{value}</span>
    </div>
  );
}
