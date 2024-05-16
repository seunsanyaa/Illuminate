import Image from "next/image";

export default function LatestPost() {
  return (
    <>
      <div
        className="w-full basis-1/2"
        
      >
        <div className={"flex gap-6"}>
          <div className="w-full h-80">
            <Image
              alt="image"
              width={238}
              className="w-full h-full "
          objectFit="cover"
              height={292}
              src={
                "https://res.cloudinary.com/seunsanyaa/image/upload/v1715857665/Rectangle_46_xj6tpp.png"
              }
              style={{objectFit:'cover'}}
            />
          </div>

          <div>
            <p className="text-sm font-light w-2/3 py-3">
              FOLK, INDIE, MUSIC INDUSTRY, NEW MUSIC, POP, SINGER/SONGWRITER
            </p>

            <h2 className="text-lg font-medium w-2/3 ">
            Anna Salman shares debut  EP ‘This Summer 
Won’t Last’ brings sad girl pop to life             </h2>

            <p className="text-base font-light py-2">NATALIE PATRICK . MAY 2,2024 .NO COMMENTS </p>
            <p className="text-base font-normal py-3 w/23">
              Anna Salman, a rising star in indie pop music, has just released
              her debut EP, &apos;This Summer Won&apos;t Last.&apos; The album is  getting much
              attention from music lovers. The EP is a collection of seven…{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
