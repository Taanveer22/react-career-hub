import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedJobs from "../components/FeaturedJobs";
import JobsCategory from "../components/JobsCategory";

const Home = () => {
  const categoriesData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <JobsCategory categoriesData={categoriesData}></JobsCategory>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
