import Image from "next/image"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "BLOG IMAGE POST",
      date: "29 AUG",
      excerpt:
        "A pair of shoes cannot move than just footsteps; it carries stories. Each scuff and crease whispers of roads traveled and moments lived. Some follow with elegance, others wear the grit of daily hustle. In every stride, shoes quietly shape the journey of their owner.",
      image: "/urban-street-scene-with-buildings.png",
    },
    {
      id: 2,
      title: "BLOG IMAGE POST",
      date: "29 AUG",
      excerpt:
        "A pair of shoes cannot move than just footsteps; it carries stories. Each scuff and crease whispers of roads traveled and moments lived. Some follow with elegance, others wear the grit of daily hustle. In every stride, shoes quietly shape the journey of their owner.",
      image: "/urban-landscape-with-buildings-and-roads.png",
    },
    {
      id: 3,
      title: "BLOG IMAGE POST",
      date: "29 AUG",
      excerpt:
        "A pair of shoes cannot move than just footsteps; it carries stories. Each scuff and crease whispers of roads traveled and moments lived. Some follow with elegance, others wear the grit of daily hustle. In every stride, shoes quietly shape the journey of their owner.",
      image: "/urban-landscape-with-buildings-and-roads.png",
    },
    {
      id: 4,
      title: "BLOG IMAGE POST",
      date: "29 AUG",
      excerpt:
        "A pair of shoes cannot move than just footsteps; it carries stories. Each scuff and crease whispers of roads traveled and moments lived. Some follow with elegance, others wear the grit of daily hustle. In every stride, shoes quietly shape the journey of their owner.",
      image: "/street-view-with-contemporary-buildings.png",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className=" text-4xl font-bold">
            <span className=" text-gray-400 ">FROM</span>
            <br />
            <span className="mt-4 text-black">THE BLOG</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-100 p-6 flex gap-4">
              {/* Blog Image */}
              <div className="flex-shrink-0">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={160}
                  height={120}
                  className="object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-black mb-2">{post.title}</h3>
                <p className="text-red-500 text-sm font-medium mb-3">{post.date}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <button className="text-black text-sm font-medium hover:text-gray-600 transition-colors">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
