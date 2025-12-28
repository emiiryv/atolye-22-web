type TeamCardProps = {
    name: string;
    role: string;
    imageUrl?: string;
  };
  
  export default function TeamCard({ name, role, imageUrl }: TeamCardProps) {
    return (
      <div className="bg-atelierCard/80 border border-slate-800 rounded-2xl p-4 flex flex-col items-center text-center shadow-md shadow-black/40">
        <div className="h-24 w-24 rounded-full bg-slate-700 overflow-hidden mb-4">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-slate-400 text-xs">
              Fotoğraf
            </div>
          )}
        </div>
        <div className="font-medium text-sm">{name}</div>
        <div className="text-xs text-slate-400 mt-1">{role}</div>
      </div>
    );
  }