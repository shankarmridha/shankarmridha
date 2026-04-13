const PlaceholderImage = ({
  label,
  className = "",
  aspectRatio = "3/4",
}: {
  label: string;
  className?: string;
  aspectRatio?: string;
}) => (
  <div
    className={`bg-sapphire flex items-center justify-center rounded-lg ${className}`}
    style={{ aspectRatio }}
  >
    <span className="font-mono text-ivory text-sm text-center px-4">{label}</span>
  </div>
);

export default PlaceholderImage;
