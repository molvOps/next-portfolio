import Image from "next/image";

function Intro() {
  return (
    <div className="flex flex-col items-center justify-between mx-[30px] my-10 md:flex-row md:my-[40px]">
      
      <div className="w-full leading-[1.1] md:text-left md:w-auto">
        <h1 className="md:text-[60px] max-md:text-[2.5rem]  md:text-white  md:leading-normal">
          Hi, I am{" "}
          <span className="max-md:text-[3rem] md:text-[60px]  text-yellow-500">
            molvOps
          </span>
        </h1>

        <p className="text-base leading-[1.1] max-md:text-[1.3rem] md:text-[40px] mt-[30px] md:mt-[15px] font-bold md:font-extrabold text-white">
          An Innovative Software Engineer
        </p>

        <p className="text-[18px] mt-3 font-extralight md:font-normal text-white">
          Focused on clean code and advanced solutions, constantly exploring new
          technologies to build next-gen applications.
        </p>
      </div>

      <div
        id="img"
        className="mb-4 md:mb-0 md:ml-5 flex justify-center md:justify-end"
      >
        <Image
          src="/molvOps.png"
          alt="profilepic"
          width={300}
          height={300}
          className="border-[5px] md:border-2 border-[rgb(145,135,2)] md:border-[rgb(224,172,0)] rounded-full w-[300px] h-[300px] max-w-[250px] md:max-w-[300px] max-h-[250px] md:max-h-[300px] object-cover mt-10 md:mt-5 md:mr-5 shadow-[-20px_0px_100px_rgba(224,172,0,0.5)]"
        />
      </div>
    </div>
  );
}

export default Intro;