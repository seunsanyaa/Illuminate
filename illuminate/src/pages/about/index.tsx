import Head from "next/head";
import AboutComponent from "~/components/about";
import Header from "~/components/header";

export default function About() {
  return (
    <>
      <Head>
        <title>Illuminate</title>
        <meta name="description" content="Illuminate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
<AboutComponent/>
      {/* <div className="flex">
        <div className="space-y-4">
          <div className="flex flex-col space-y-8  h-full w-2/3">
            

          <h2 className=" py-6 text-2xl font-bold ">About ILLUMINATE</h2>

          <p className=" text-base font-normal">
            Welcome to ILLUMINATE We are a vibrant online hub dedicated to all
            things music and entertainment. Here, we dive deep into the melodies
            that move us, the beats that make u s dance, and the stories that
            captivate us.
          </p>

          <p className=" text-base font-normal">
            At ILLUMINATE, we&apos;re passionate about exploring the
            ever-evolving landscape of music and entertainment. Whether
            you&apos;re a dedicated music aficionado, a movie buff, a theater
            lover, or simply someone looking for the next great tune to add to
            your playlist, you&apos;ve come to the right place.
          </p>

          <p className=" text-base font-normal">
            So whether you&apos;re here to read, to listen, or to join the
            conversation, we invite you to make yourself at home. Explore our
            articles, connect with fellow readers and creators, and let the
            rhythm of ILLUMINATE be your guide through the vast and wondrous
            world of music and entertainment.
          </p>
          </div>
          <p>Thank you for visiting, and we hope you enjoy your time here!</p>
        </div>

        <div className="flex-col h-full gap-6 pt-40">
          <div className={"flex gap-6 py-6"}>
            <div className="h-60 w-full">
              <Image
                alt="image"
                width={238}
                className="h-full w-full "
                objectFit="cover"
                height={292}
                src={
                  "https://res.cloudinary.com/seunsanyaa/image/upload/v1715857665/Rectangle_46_xj6tpp.png"
                }
                style={{ objectFit: "cover" }}
              />
            </div>

            <div>
              <h2 className="text-lg font-medium ">
                Anna Salman shares debut EP ‘This Summer Won’t Last’ brings sad
                girl pop to life{" "}
              </h2>

              <p className="py-2 text-base font-light">
            MAY 2,2024
              </p>
            </div>
          </div>
          <div className={"flex gap-6 py-6"}>
            <div className="h-60 w-full">
              <Image
                alt="image"
                width={238}
                className="h-full w-full "
                objectFit="cover"
                height={292}
                src={
                  "https://res.cloudinary.com/seunsanyaa/image/upload/v1715857665/Rectangle_46_xj6tpp.png"
                }
                style={{ objectFit: "cover" }}
              />
            </div>

            <div>
              <h2 className="text-lg font-medium ">
                Anna Salman shares debut EP ‘This Summer Won’t Last’ brings sad
                girl pop to life{" "}
              </h2>

              <p className="py-2 text-base font-light">
            MAY 2,2024
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
