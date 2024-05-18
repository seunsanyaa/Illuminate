

const stats = [
  { label: "Active Users", value: "10,000" },
  { label: "Content Post", value: "500" },
  { label: "New Articles", value: "200" },
];
const values = [
  {
    name: "Authenticity",
    description:
`We believe in being genuine and transparent. Our reviews, interviews, and articles are crafted with honesty and integrity, ensuring our readers can trust our perspectives and insights.`  },
  {
    name: "Innovation",
    description:
"We are committed to staying at the forefront of the music and entertainment industries. By embracing new trends, technologies, and creative approaches, we continually evolve to bring fresh, relevant content to our audience."  },
  {
    name: "Inclusivity",
    description:
"We celebrate diversity and strive to create a welcoming environment for everyone. Our content reflects a wide range of voices, genres, and cultures, ensuring that every reader feels seen and valued."  },
  {
    name: "Our Community",
    description:
"At the heart of Illuminate is our community. We value the voices of our readers and contributors, encouraging discussions and exchanges that enrich our collective experience. By connecting people through shared interests and passions, we aim to create a space where everyone feels welcome and inspired."  },
  {
    name: "Join Us",
    description:
"We invite you to explore our articles, participate in conversations, and immerse yourself in the world of music and entertainment. Whether you're here to discover new artists, delve into cultural trends, or simply enjoy quality content, we are here to guide you on your journey."  },
  {
    name: "Thank You",
    description:
"Thank you for being a part of Illuminate. Together, we're changing the way people connect with music and entertainment, one story at a time."  },
];
const team = [
  {
    name: "Samuel Dan",
    role: "Author",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Seunsanyaa",
    role: "Author",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  // More people...
];
const blogPosts = [
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


export default function AboutComponent() {

  return (
    <div className="bg-black text-white" style={{ background: "#181a2a" }}>
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-whitesm:text-6xl text-4xl font-bold tracking-tight">
                    We’re changing the way people connect.
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-white sm:max-w-md lg:max-w-none">
                  At Illuminate, we believe in the transformative power of music and entertainment to bring people together. We envision a world where music and entertainment are not just consumed but experienced, shared, and celebrated. Through our diverse content, we strive to bridge the gap between artists and audiences, fostering a deeper appreciation and understanding of the creative arts.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-whitesm:text-4xl text-3xl font-bold tracking-tight">
              Our mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-white">
                Our mission is to redefine how individuals connect with the world of music, movies, and cultural events. We aim to create a vibrant community where passion meets discovery, and where every reader finds something that resonates with their soul.

                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-white">
                  <p>
                  We aim to ignite passion and curiosity through engaging content that covers the latest trends, timeless classics, and everything in between. Our goal is to inspire our readers to explore new genres, artists, and forms of entertainment, broadening their horizons and deepening their appreciation for the arts.
                  </p>
                  <p className="mt-10">
                  Our mission is to be a trusted guide in the ever-evolving landscape of music and entertainment. We strive to help our readers discover hidden gems and emerging talents, providing insightful reviews, thoughtful analyses, and engaging interviews that highlight the richness and diversity of the creative world.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base leading-7 text-white">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-white">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="https://res.cloudinary.com/seunsanyaa/image/upload/v1716064612/photo-1529156069898-49953e39b3ac_tiiwxg.png"
            alt=""
            className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-whitesm:text-4xl text-3xl font-bold tracking-tight">
              Our values
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
            At Illuminate, our core values guide everything we do. These principles shape our content, our community interactions, and our overall mission to connect people through the power of music and entertainment.

            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-white">{value.name}</dt>
                <dd className="mt-1 text-white">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-whitesm:text-4xl text-3xl font-bold tracking-tight">
              Our team
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus
              eos totam in dolorum. Nemo vel facere repellendus ut eos dolores
              similique.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img
                  className="mx-auto h-24 w-24 rounded-full"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-white">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Blog section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-whitesm:text-4xl text-3xl font-bold tracking-tight">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-white">
              Vel dolorem qui facilis soluta sint aspernatur totam cumque.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post) => (
              // <Link href={"/inner-blog"} key={post.id}>
                <article  key={post.id} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
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
              // </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
