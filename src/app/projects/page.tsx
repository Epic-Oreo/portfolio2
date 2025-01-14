import ApexCard from "./cards/apex";
import CookieUtilsCard from "./cards/cookieUtils";
import ObsidianRideCard from "./cards/obsidian";

const Page = () => {
  return (
    <div className="flex flex-col gap-20 pb-10">
      <ObsidianRideCard/>
      <ApexCard/>
      <CookieUtilsCard/>
    </div>
  );
};

export default Page;
