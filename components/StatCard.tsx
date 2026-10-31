export type StatCardProps = {
  value: string;
  label: string;
};

/* Renders a <dt>/<dd> pair, so it must sit inside a <dl> */
export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex flex-col-reverse rounded-[28px] bg-surface p-7">
      <dt className="mt-2 text-[17px] text-muted">{label}</dt>
      <dd className="text-[56px] font-semibold leading-none tracking-[-0.03em] md:text-[64px]">
        {value}
      </dd>
    </div>
  );
}
