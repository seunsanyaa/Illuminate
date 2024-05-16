export default function Banner() {
  return (
    <>
      <div
        className="flex items-center justify-between w-full h-80"
        style={{
          backgroundImage:
            `url("https://res.cloudinary.com/seunsanyaa/image/upload/v1715855722/itw54tinn9vqsdztzxey.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-y-5 px-16 " >
          <p className="w-2/3 font-medium text-black text-base">INDIE, INDIE ROCK, MAINSTAGE, NEW MUSIC, POP </p>

          <h2 className="w-2/3 font-semibold text-black text-2xl">
            Iain T. McKelvey drops the dark glamour of “There Goes Hollywood”
          </h2>

          <p className="w-2/3 font-semibold text-black text-base"> 
            <span>NATALIE PATRICK </span>. <span>MAY 2,2024</span>
          </p>



          <button className="bg-black p-4 text-white"> 
          READ MORE....
          </button>
        </div>
        
      </div>
    </>
  );
}
