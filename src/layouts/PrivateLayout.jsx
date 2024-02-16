import { useEffect } from "react";

const PrivateLayout = ({ children, title, theme }) => {
  var themeConfig;
  useEffect(() => {
    document.title = title ?? "Giz";
  }, []);

  switch (theme) {
    case "dark":
      themeConfig = "bg-gray-800 border-gray-700 text-white";
      break;
    case "red":
      themeConfig = "bg-red-500 border-red-700 text-white";
      break;
    default:
      themeConfig = "bg-white border-gray-200 text-black";
      break;
  }

  return (
    <div
      class={`w-5/6 h-5/6 p-4 flex items-center justify-center text-center ${themeConfig} border  rounded-lg shadow sm:p-8 `}
    >
      {children}
    </div>
  );
};

export default PrivateLayout;
