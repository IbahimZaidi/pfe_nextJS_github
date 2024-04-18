// import Image from "next/image";

"use client";
import { getDataApiRoute } from "@/helperConnectFunctions/getDataUserPost";
import { useEffect, useState } from "react";

export default function Home() {
  const [countPost, setCount] = useState();
  useEffect(() => {
    getDataApiRoute().then((resolve) => {
      setCount(resolve.length);
    });
  }, []);

  return (
    <div className=" bg-green-300 h-200px w-90vw flex justify-center items-center m-auto">
      {" "}
      hello from the div the total number is :
      <button className=" bg-blue-400 w-12 h-6 flex justify-center items-center m-3 ">
        {" "}
        {countPost}
      </button>
    </div>
  );
}
