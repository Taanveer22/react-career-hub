import PropTypes from "prop-types";
import JobCard from "./JobCard";
const FeaturedJobs = ({ jobsData }) => {
  // console.log(jobsData);
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mb-5">Featured Jobs</h1>
      <p className="text-base font-medium text-center opacity-70 mb-5">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
        {jobsData.map((jobItem) => (
          <JobCard key={jobItem.id} jobItem={jobItem}></JobCard>
        ))}
      </div>
    </div>
  );
};
FeaturedJobs.propTypes = {
  jobsData: PropTypes.array.isRequired,
};
export default FeaturedJobs;
