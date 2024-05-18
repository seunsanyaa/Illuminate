import Head from "next/head";
import Header from "~/components/header";

export default function Blog() {
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
      <Head>
        <title>Illuminate</title>
        <meta name="description" content="Illuminate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}

      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.{" "}
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (

                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80" key={post.id}>
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <time dateTime={post.datetime} className="mr-8">
                      {post.date}
                    </time>
                    <div className="-ml-4 flex items-center gap-x-4">
                      <svg
                        viewBox="0 0 2 2"
                        className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      <div className="flex gap-x-2.5">
                        <img
                          src={post.author.imageUrl}
                          alt=""
                          className="h-6 w-6 flex-none rounded-full bg-white/10"
                        />
                        {post.author.name}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </article>

            ))}
          </div>
        </div>
      </div>
    </>
  );
}
