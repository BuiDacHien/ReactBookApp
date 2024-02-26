import { Carousel } from "./Components/Carousel";
import { Heros } from "./Components/Heros";
import { LibraryServices } from "./Components/LibraryServices";
import { TopBooks } from "./TopBooks";

export const HomePage = () => {
  return (
    <>
      <TopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </>
  );
};
