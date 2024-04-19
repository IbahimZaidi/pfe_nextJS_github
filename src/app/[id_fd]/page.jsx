// import Image from "next/image";

export default function ChildFormationAxe({ params }) {
  return (
    <div className=" bg-blue-500 h-100vh w-90vw flex justify-center items-center m-auto ">
      Hello from Axe de recherche : {params.id_fd}
    </div>
  );
}
