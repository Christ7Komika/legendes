export default function Album() {
  return (
    <div className="bg-zinc-100 px-2 py-[80px]">
      <div className="space-y-4 mb-4">
        <h2 className="mx-auto font-bold text-3xl text-center tracking-widest">
          ALBUM
        </h2>
        <span className="block bg-black mx-auto mt-4 w-[60px] h-[1px]" />
      </div>
      <div className="space-y-1">
        <p className="text-lg text-center">L’ALBUM LEGENDES</p>
        <p className="text-center">
          sera bientôt disponible dans son intégralité
        </p>
        <p className="text-center">
          Restez à l’écoute pour sa sortie imminente
        </p>
      </div>
    </div>
  );
}
