import { ChevronRightIcon } from "@heroicons/react/24/outline";

export const BreadcrumbComponent = ({
  Color = "black",
  textColor = "text-black",
  className = "",
  ...props
}) => {
  return (
    <ol className={className} {...props}>
      <li className="inline-flex items-center">
        <a
          href="#"
          className={
            ("inline-flex items-center text-sm font-medium hover:text-blue-600",
            textColor)
          }
        >
          Home
        </a>
      </li>
      <li>
        <div className="flex items-center">
          <ChevronRightIcon className="h-5 w-5 mr-2" color={Color} />
          <a
            href="#"
            className={
              ("ms-1 text-sm font-medium hover:text-blue-600 md:ms-2",
              textColor)
            }
          >
            Detail
          </a>
        </div>
      </li>
      <li aria-current="page">
        <div className="flex items-center">
          <ChevronRightIcon className="h-5 w-5 mr-2" color={Color} />
          <span
            className={
              ("ms-1 text-sm font-medium text-black md:ms-2", textColor)
            }
          >
            Details
          </span>
        </div>
      </li>
    </ol>
  );
};
