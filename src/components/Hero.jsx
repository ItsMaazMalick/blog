import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-center w-full h-full">
      {/* LEFT */}
      <div className="flex flex-col flex-1 gap-6 md:gap-16">
        <h2 className="text-xl lg:text-6xl font-bold">
          Helping You Choose The Right Marketing Tools
        </h2>
        <p className="text-sm lg:text-xl">
          Get Expert Online marketing Tips Delivered Right To your Inbox!
        </p>
      </div>
      {/* RIGHT */}
      <div className="relative flex-1">
        <Image
          src={
            "https://school.net.pk/wp-content/uploads/2024/03/happy-young-man-using-laptop-computer-removebg-preview.png"
          }
          alt="Hero Image"
          fill
        />
      </div>
    </div>
  );
}
