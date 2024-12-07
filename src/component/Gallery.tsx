"use client";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Jump from "./Jump";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImgDialog from "./ImgDialog";
import { useLayoutEffect, useState } from "react";
import imgList from "../section/gallery/ImgList";
import gallery from "../images/gallery.svg";
import CalcWinSize from "./CalcWinSize";

const Gallery = () => {
  const useWindowSize = (): string => {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      const updateSize = (): void => {
        setSize(window.innerWidth);
      };

      window.addEventListener("resize", updateSize);
      updateSize();

      return () => window.removeEventListener("resize", updateSize);
    }, []);
    if (1024 <= size) {
      return "l";
    } else if (768 <= size && size < 1024) {
      return "m";
    } else {
      return "s";
    }
  };

  return (
    <>
      <section
        id="gallery"
        className="text-black bg-gradient-to-bl from-orange-100 via-white to-orange-100 py-12 pb-24 flex flex-col"
      >
        <div className="container flex mx-auto flex-col items-center px-5">
          <div className="flex flex-col w-11/12 items-center border-b-8 border-orange-300 pb-2 mb-6 md:mb-14">
            <img
              src={gallery}
              alt=""
              width={CalcWinSize() === "s" ? 190 : 380}
            ></img>
          </div>
          <div>
            <div className="flex flex-col">
              {/* <div className="flex flex-row md:text-4xl text-xl pt-10 justify-center text-yellow-400">
                <AutoAwesomeIcon fontSize="inherit" />
                <div className=" text-black md:px-6 px-2  md:pb-8 pb-3">
                  講師の作品
                </div>
                <AutoAwesomeIcon fontSize="inherit" />
              </div> */}

              <div className="w-full flex flex-row">
                {useWindowSize() === "l" && (
                  <Box sx={{ width: 900, height: 1700, overflowY: "visible" }}>
                    <ImageList variant="masonry" cols={5} gap={8}>
                      {imgList.map((item) => (
                        <ImageListItem key={item}>
                          <ImgDialog src={item} alt={""} />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Box>
                )}
                {useWindowSize() === "m" && (
                  <Box sx={{ width: 600, height: 500, overflowY: "scroll" }}>
                    <ImageList variant="masonry" cols={4} gap={3}>
                      {imgList.map((item) => (
                        <ImageListItem key={item}>
                          <ImgDialog src={item} alt={""} />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Box>
                )}
                {useWindowSize() === "s" && (
                  <Box sx={{ width: 300, height: 500, overflowY: "scroll" }}>
                    <ImageList variant="masonry" cols={3} gap={3}>
                      {imgList.map((item) => (
                        <ImageListItem key={item}>
                          <ImgDialog src={item} alt={""} />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Box>
                )}
              </div>
            </div>
            {/* <div className="text-center">
              <ConstructionIcon fontSize="inherit" />
              工事中
              <ConstructionIcon fontSize="inherit" />
            </div> */}
            {/* <div className="flex flex-row md:text-4xl text-xl pt-10 justify-center text-yellow-400">
              <AutoAwesomeIcon fontSize="inherit" />
              <div className=" text-black md:px-6 px-2 md:pb-8 pb-3">
                レッスンの様子
              </div>
              <AutoAwesomeIcon fontSize="inherit" />
            </div>
            <div className="flex flex-row md:text-4xl text-xl pt-10 justify-center text-yellow-400">
              <AutoAwesomeIcon fontSize="inherit" />
              <div className=" text-black md:px-6 px-2 md:pb-8 pb-3">
                生徒の作品
              </div>
              <AutoAwesomeIcon fontSize="inherit" />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;
