export default function Loading() {
  return (
    <div className="min-h-[60vh] bg-[#f4f4f5] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-3 border-[#09090b] border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-medium text-[#71717a] tracking-wider uppercase">Loading...</span>
      </div>
    </div>
  );
}
