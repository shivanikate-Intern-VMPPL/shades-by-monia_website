import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F7F4EE] flex flex-col items-center justify-center px-6 text-center">
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#D9A441] font-mono mb-4">
        // 404 SANCTUARY NOT FOUND
      </span>
      <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl text-[#D9A441] font-light mb-4">
        404
      </h1>
      <p className="font-serif text-2xl sm:text-3xl text-[#F7F4EE] mb-4">
        This space does not exist.
      </p>
      <p className="text-xs sm:text-sm text-[#75726D] max-w-md mb-8 font-light">
        The architectural page you were searching for has either been relocated or remains an unbuilt concept.
      </p>
      <MagneticButton href="/" variant="gold" size="lg">
        RETURN TO SANCTUARY
      </MagneticButton>
    </div>
  );
}
