import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-pic.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wider">SALE PRODUCTS</h1>
        <p className="text-xl md:text-2xl text-white mb-8 font-medium">
          Shop your Desired
          <br />
          Comfort Now
        </p>
        <Button
          size="lg"
          className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full"
        >
          SHOP NOW
        </Button>
      </div>
    </section>
  )
}
