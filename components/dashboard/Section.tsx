
export function Section({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
        {title}
      </p>
      <p className="text-white text-sm leading-relaxed">{children}</p>
    </div>
  );
}