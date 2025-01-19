import ImageCard from "./image-card";
import { Button } from "./ui/button";
import Container from "@/components/container";

const JoinSection = () => {
  return (
    <Container className="container flex flex-col lg:flex-row items-center py-20 mt-7 mb-20 gap-x-20 gap-y-10">
      <div className="w-full md:w-80">
        <ImageCard src={"/images/isabella.jpg"} className="w-full shadow-[0_0_20px_0_rgba(34,34,34,0.05)]" />
      </div>
      <div className="space-y-5 flex flex-col max-w-xl">
        <h3 className="text-xl text-primary font-medium">JOIN CODE SPACE!!</h3>
        <p className="text-gray-800 text-2xl sm:text-3xl">
          Be a part of our ever growing community by joining our Telegram
          channel and getting periodic updates.
        </p>
        <Button className="w-fit">Join the community</Button>
      </div>
    </Container>
  );
};

export default JoinSection;
