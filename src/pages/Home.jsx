import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedJobs from "../components/FeaturedJobs";
import JobsCategory from "../components/JobsCategory";

const Home = () => {
  const { categoriesData, jobsData } = useLoaderData();
  // console.log(categoriesData);
  // console.log(jobsData);

  return (
    <div>
      <Banner></Banner>
      <JobsCategory categoriesData={categoriesData}></JobsCategory>
      <FeaturedJobs jobsData={jobsData}></FeaturedJobs>
    </div>
  );
};

export default Home;
