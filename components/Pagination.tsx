export default function Pagination({
  page,
  total,
  onChange,
}: {
  page: number;
  total: number;
  onChange: (p: number) => void;
}) {
  const totalPages = Math.ceil(total / 10);

  return (
    <div className="flex justify-between items-center mt-6">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="px-3 py-2 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span className="text-sm">
        Page {page} / {totalPages}
      </span>

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="px-3 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}