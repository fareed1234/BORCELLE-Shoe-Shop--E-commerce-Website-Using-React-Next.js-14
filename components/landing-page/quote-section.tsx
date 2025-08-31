export function QouteSection() {
  return (
    <section className="relative h-96 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/qoute.jpg)",
          opacity: 0.5,
        }}
      />

      {/* Content Overlay */}
      <div className="relative h-full flex items-center">
        <div className="container justify-items-center mx-auto px-4 text-center">
            <div className="text-center font-bold text-white">
                <h3 className="mb-8">Enter Quote here</h3>
                <p>Written by: fareed</p>
            </div>
          
          </div>
        </div>
      
    </section>
  )
}
