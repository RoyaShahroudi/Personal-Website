import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-between content-center">
      <Image src="/images/logo-w.svg" alt="logo" width={30} height={30}/>
    </div>
  );
};

export default Logo;
