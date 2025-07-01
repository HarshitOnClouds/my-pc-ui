import { useEffect } from "react";

export default function Google() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=11ab09d544afe4d69";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full h-full flex justify-center p-5">
      <div className="gcse-search"></div>
    </div>
  );
}
