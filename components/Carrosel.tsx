'use client';

export default function Carousel() {
  return (
    <div className="relative mt-24 w-full overflow-hidden xl:h-180 lg:h-150 md:h-120 sm:h-82 h-68">
      <video
        className="w-full h-full object-cover"
        src="/assets/banners/Bg-Video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}
