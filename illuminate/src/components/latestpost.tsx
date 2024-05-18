export default function LatestPost() {
  const posts = [
    {
      id: 1,
      title: "Anna Salman shares debut EP",
      href: "/inner-blog",
      description: `Anna Salman, a rising star in indie pop music, has just released her debut EP, 'This Summer Won't Last.' The album is  getting much attention from music lovers. The EP is a collection of seven…`,
      imageUrl:
        "https://res.cloudinary.com/seunsanyaa/image/upload/v1716064346/photo-1496128858413-b36217c2ce36_2_wikbtr.png",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Folk / Indie / Pop", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Auhor",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },

    {
      id: 2,
      title: "Mortal Prophets shares a haunting single",
      href: "/inner-blog",
      description: `Mortal Prophets recently launched "HANUSSEN: The 
      Enigmatic Clairvoyant," an eleven-act opera that tells 
      the story of Erik Jan Hanussen, an Austrian mystic, 
      through a blend of voices,…
      `,
      imageUrl:
        "https://res.cloudinary.com/seunsanyaa/image/upload/v1716064353/photo-1496128858413-b36217c2ce36_1_kf2ssv.png",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Electronic / Indie / Pop", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Auhor",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 3,
      title: "Estella Dawn drops visuals for new single “Big Enough” [Video]",
      href: "/inner-blog",
      description:
        "Hard working New Zealand-born experimental artist Estella Dawn continues her slew of releases with her latest drop titled . The track is an anthemic piece that slowly builds up…",
      imageUrl:
        "https://res.cloudinary.com/seunsanyaa/image/upload/v1716064357/photo-1496128858413-b36217c2ce36_io2oyx.png",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Pop / R&B", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Auhor",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];
  return (
    <>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            className="flex flex-col items-start justify-between"
            key={post.id}
          >
            <div className="relative w-full">
              <img
                src={post.imageUrl}
                alt=""
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-white">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-black hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-100"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-white">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-white">{post.author.role}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
