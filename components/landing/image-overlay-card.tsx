type ImageOverlayCardProps = {
  title: string;
  body: string;
  image: string;
  isLight: boolean;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
  imageClassName?: string;
  overlayClassName?: string;
};

export function ImageOverlayCard({
  title,
  body,
  image,
  isLight,
  className,
  contentClassName,
  titleClassName,
  bodyClassName,
  imageClassName,
  overlayClassName,
}: ImageOverlayCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] border ${
        isLight ? "border-black/8 bg-black/[0.03]" : "border-white/12 bg-white/[0.04]"
      } ${className ?? ""}`}
    >
      <div
        className={`absolute inset-0 bg-cover bg-center opacity-70 grayscale contrast-125 transition-transform duration-700 ease-out group-hover:scale-105 ${
          imageClassName ?? ""
        }`}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div
        className={`absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,20,0.08)_0%,rgba(7,18,20,0.86)_72%,rgba(7,18,20,0.96)_100%)] ${
          overlayClassName ?? ""
        }`}
      />
      <div className={`relative flex min-h-[18rem] flex-col justify-end p-6 text-white md:p-8 ${contentClassName ?? ""}`}>
        <h3
          className={`max-w-[14ch] text-[1.5rem] font-medium leading-[1.02] tracking-[-0.04em] text-white ${
            titleClassName ?? ""
          }`}
        >
          {title}
        </h3>
        <p className={`mt-3 max-w-[28rem] text-[0.98rem] leading-7 text-white/72 ${bodyClassName ?? ""}`}>
          {body}
        </p>
      </div>
    </article>
  );
}
