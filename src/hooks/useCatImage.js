import { useState, useEffect } from "react";

export function useCatImage({ catFact }) {
  const [catPicture, setCatPicture] = useState(null);

  useEffect(() => {
    if (!catFact) return;
    const firstWordOfFact = catFact.split(" ", 3).join(" ");
    console.log(firstWordOfFact);
    fetch(`https://cataas.com/cat/says/${firstWordOfFact}`)
      .then((res) => res.blob())
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setCatPicture(imageUrl);
      });
  }, [catFact]);

  return { catPicture };
}
