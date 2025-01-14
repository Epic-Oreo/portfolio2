import ApexCard from "./cards/apex";
import CookieUtilsCard from "./cards/cookieUtils";
import ObsidianRideCard from "./cards/obsidian";

const Page = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-20 pb-10 max-w-7xl  ">
      <ObsidianRideCard/>
      <ApexCard/>
      <CookieUtilsCard/>
    </div>
  );
};

export default Page;
