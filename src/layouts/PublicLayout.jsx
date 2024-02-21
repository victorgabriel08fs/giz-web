import { useEffect } from "react";

const PublicLayout = ({ children, title, theme }) => {
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
    <div className="flex items-center justify-center h-screen bg-slate-700">
      {children}
    </div>
  );
};

export default PublicLayout;
