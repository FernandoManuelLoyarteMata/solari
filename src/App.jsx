import React from "react";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

export default function App() {
  const { catFact, refreshRandomFact } = useCatFact();
  const { catPicture } = useCatImage({ catFact });

  const handleRefresh = async () => await refreshRandomFact();

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-16 p-16 text-white bg-gradient-to-br from-emerald-600 to-yellow-700">
      <img
        src="https://whatemoji.org/wp-content/uploads/2020/07/Grinning-Cat-Emoji-1024x1024.png"
        alt=""
        className="absolute bottom-8 right-8  opacity-25 -z-0 mix-blend-screen w-[10%]"
      />
      <div className="flex flex-col gap-4 ">
        <h1 className="text-6xl font-bold tracking-tighter text-black uppercase">
          my kitten app
        </h1>
        <section className="flex w-[800px] h-[500px] bg-slate-300 shadow-lg rounded-lg overflow-hidden text-black">
          {catFact && catPicture && (
            <p
              className="text-lg tracking-tighter w-[50%] pt-16 px-8"
              name="fact"
            >
              {catFact}
            </p>
          )}
          <div name="imageWrapper" className="h-full w-[50%] relative ">
            {catPicture && (
              <img
                src={catPicture}
                alt={`image from cataas with ${catFact}`}
                className="absolute object-cover object-center w-full h-full p-4 mix-blend-screen/20"
                name="randomImage"
              />
            )}
          </div>
        </section>
        <button
          onClick={handleRefresh}
          className="grid w-48 h-10 rounded-md place-content-center bg-slate-800"
        >
          refresh
        </button>
      </div>
    </main>
  );
}
