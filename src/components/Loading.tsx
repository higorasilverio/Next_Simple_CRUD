import * as loadingGif from "../../public/loading.gif";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-7">
      <Image src={loadingGif} alt="loading gif image" />
    </div>
  );
};

export default Loading;
