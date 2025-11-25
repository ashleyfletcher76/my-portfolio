import type { ReactNode } from 'react';

type AboutSectionProps = {
  text: string;
  image: ReactNode;
  imageOnLeft?: boolean;
};

export function AboutSection({ text, image, imageOnLeft = false }: AboutSectionProps) {
  const textBlock = (
    <div className="space-y-2 text-[20px] leading-relaxed">
      <p>{text}</p>
    </div>
  );

  const imageBlock = <div className="flex justify-center">{image}</div>;

  return (
    <section className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 sm:grid-cols-2">
      {imageOnLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </section>
  );
}
