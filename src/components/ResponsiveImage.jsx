export function ResponsiveImage({ mobileSrc, desktopSrc, src, alt, className }) {
  if (!mobileSrc || !desktopSrc) {
    return <img src={src} alt={alt} className={className} loading="lazy" />;
  }

  return (
    <picture>
      <source srcSet={mobileSrc} media="(max-width: 767px)" />
      <source srcSet={desktopSrc} media="(min-width: 768px)" />
      <img src={desktopSrc} alt={alt} className={className} loading="lazy" />
    </picture>
  );
}
