import Image from "next/image";
import { BreadcrumbComponent } from "../partials/BreadcrumbComponent";
import classNames from "classnames";

export default function HeroComponent({
  url = "/img/child.jpg",
  title = "",
  topSubTitle = "",
  subTitle = "",
  blankMode = false,
  ...props
}) {
  return (
    <div
      className={classNames(
        "relative flex flex-col justify-center items-center bg-white bg-cover",
        blankMode ? "h-[300px]" : "h-[500px]"
      )}
      style={{ backgroundImage: `url(${url})` }}
    >
      <div
        className={classNames(
          "absolute inset-0 ",
          blankMode ? "bg-white" : "bg-black opacity-60"
        )}
      ></div>

      <div className="relative text-center z-10">
        <p
          className={classNames(
            "text-lg mb-4 px-2",
            blankMode ? "text-black" : "text-gray-300"
          )}
        >
          {topSubTitle}
        </p>
        <h1
          className={classNames(
            "text-5xl font-bold",
            blankMode ? "text-black" : "text-white"
          )}
        >
          {title}
        </h1>
        <p
          className={classNames(
            "text-lg mt-4",
            blankMode ? "text-black" : "text-gray-300"
          )}
        >
          {subTitle}
        </p>
        <BreadcrumbComponent
          textColor="text-white"
          Color="white"
          className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse max-lg:hidden"
        />
      </div>
    </div>
  );
}

export const HeroComponentOr = ({
  src = "/img/partner.png",
  title = "",
  subTitle = "",
  content = false,
  className,
  imgH = 400,
  imgW = 600,
  ...props
}) => {
  return (
    <div className="max-w-8xl mx-auto bg-orange-500 inline-block items-center p-8 lg:flex lg:flex-row lg:px-14 lg:items-start">
      <div className="lg:w-full lg:flex lg:flex-col">
        <BreadcrumbComponent
          textColor="text-white"
          Color="white"
          className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
        />
        <h2 className="max-w-xl lg:text-4xl mt-10 text-3xl font-bold leading-none text-white inline-block text-center lg:text-start">
          {title}
        </h2>

        <p className="mt-6 max-w-2xl text-[25] text-white lg:text-start text-center">
          {subTitle}
        </p>

        {content ?? createElement(content, { className })}
      </div>

      <Image
        src={src}
        alt="YM Majalah Logo"
        width={imgW}
        height={imgH}
        className="w-auto h-auto mt-5 lg:mt-0"
      />
    </div>
  );
};
