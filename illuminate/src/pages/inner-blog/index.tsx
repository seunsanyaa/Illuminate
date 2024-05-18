/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";

export default function InnerBlog() {
  return (
    <>
      <Head>
        <title>Illuminate</title>
        <meta name="description" content="Illuminate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}

      <div className="mx-auto max-w-screen-xl">
        <main className="mt-10">
          <div
            className="relative mx-auto mb-4 w-full max-w-screen-md md:mb-0"
            style={{ height: "24em" }}
          >
            <div
              className="absolute bottom-0 left-0 z-10 h-full w-full"
              style={{
                backgroundImage: `linear-gradient(180deg,transparent,rgba(0,0,0,.7))`,
              }}
            ></div>
            <img
              src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              className="absolute left-0 top-0 z-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 z-20 p-4">
              <a
                href="#"
                className="mb-2 inline-flex items-center justify-center bg-black px-4 py-1 text-white"
              >
 Indie / R&B
              </a>
              <h2 className="text-4xl font-semibold leading-tight text-gray-100">
              Adi Oasis teams up with Durand Bernarr for "Le Départ" and announces deluxe version of her album 'Lotus Glow'
              </h2>
              <div className="mt-3 flex">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg"
                  className="mr-2 h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-white">
                    {" "}
                  Samueal Dan
                  </p>
                  <p className="text-xs font-semibold text-white"> May 2, 2024 </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-screen-md px-4 text-lg leading-relaxed text-white lg:px-0">
            <p className="pb-6">
            Multi-faceted artist, producer, and songwriter Adi Oasis kicks off the month of May with her new single "Le Départ", which comes off the heels of her collaboration "Multiply" featuring renowned Brazilian, Grammy-nominated singer Luedji Luna. 
            </p>

            <p className="pb-6">
            The new single pairs her with fellow vocalist Durand Bernarr, and together- they deliver an astonishing piece that explores the intricacies of love and life's unpredictability in putting us exactly where we are destined to be. 
            </p>

            <p className="pb-6">
            The production is ramped up by a layered funk-soul assemble. Ripe with pulsating basslines, sublime piano arrangements with warm guitar licks, and a soft drum groove to match Adi and Durand's honeyed melodic runs and heartfelt songwriting that tugs at the heart. The original version of "Le Départ" appeared on her album Lotus Glow.
            </p>

            <div className="mb-6 rounded border-l-4 border-gray-500 pl-4 italic">
            French-Caribbean singer, bassist and producer Adi Oasis (FKA Adeline) spent most of the pandemic soothing our frazzled nerves with a constant stream of soulful, heartwarming songs, including 2 EPs, collaborations with Masego, Blue Lab Beats, Pastel, Kamauu, Yakul, Jean Tonique and more. Her unique blend of funk, R&B and soul got us through the long hard months as we watched our world go up in flames, both literally and figuratively.
            </div>

            <p className="pb-6">
              Exquisite cordially mr happiness of neglected distrusts.
              Boisterous impossible unaffected he me everything. Is fine loud
              deal an rent open give. Find upon and sent spot song son eyes. Do
              endeavor he differed carriage is learning my graceful. Feel plan
              know is he like on pure. See burst found sir met think hopes are
              marry among. Delightful remarkably new assistance saw literature
              mrs favourable.
            </p>

            <h2 className="mb-4 mt-4 text-2xl font-semibold text-white">
            Connect with Adi Oasis: Website | Facebook | Spotify | TikTok | Instagram            </h2>


     
          </div>
        </main>
      </div>
    </>
  );
}
