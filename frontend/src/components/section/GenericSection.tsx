export function GenericSection({ title }: { title: string }) {
  return (
    <div className="mt-2 flex flex-row items-center justify-between py-2 font-serif text-2xl font-bold">
      <h2>{title}</h2>
    </div>
  );
}
