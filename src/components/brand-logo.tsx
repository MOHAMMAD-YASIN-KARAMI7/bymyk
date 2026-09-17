import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src="/logo-face.png"
        alt="MYK"
        width={256}
        height={256}
        className={cn("size-11 sm:size-12", markClassName)}
      />
    </span>
  );
}
