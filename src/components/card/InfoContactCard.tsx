type InfoContactCardProps = {
  job: string;
  username?: string;
  email: string;
  telephone: string;
};

export default function InfoContactCard({
  job,
  username,
  email,
  telephone,
}: InfoContactCardProps) {
  return (
    <div className="space-y-1 bg-white/80 p-4 h-fit">
      <div className="-space-y-0.5">
        <h2 className="font-semibold text-neutral-800 text-3xl uppercase">
          {job}
        </h2>
        {username && <p className="text-neutral-700 text-2xl">{username}</p>}
      </div>
      <p className="text-neutral-500 text-2xl">{email}</p>
      <span className="text-neutral-900 text-xl">{telephone}</span>
    </div>
  );
}
