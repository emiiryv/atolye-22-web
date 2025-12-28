type Props = {
    title: string;
    subtitle?: string;
  };
  
  export default function SectionTitle({ title, subtitle }: Props) {
    return (
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-slate-400 max-w-2xl text-sm md:text-base">
            {subtitle}
          </p>
        )}
      </div>
    );
  }