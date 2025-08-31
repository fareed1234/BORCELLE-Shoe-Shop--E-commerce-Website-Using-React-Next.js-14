export function SneakersCollectionSection() {
  return (
    <section className="relative h-96 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/offers.jpg)",
          opacity: 0.8,
        }}
      />

      {/* Content Overlay */}
      <div className="relative h-full flex items-center">
        <div className="container justify-items-center mx-auto px-4 text-center">
            <div></div>
          <div className="max-w-md bg-orange-300 p-8 rounded-lg">
            <p className="text-sm font-bold text-white mb-6 tracking-wide">SNEAKERS COLLECTION</p>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 leading-tight">
              ENTIRE SHOES SAVE <span className=" text-white">UPTO</span>
              <br />
              RS.4000
            </h2>
            <button className="mt-4 border-4 border-white text-white font-bold px-6 py-2 hover:bg-white hover:text-orange-300 transition-colors duration-300">
              SEE THE COLLECTION
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
