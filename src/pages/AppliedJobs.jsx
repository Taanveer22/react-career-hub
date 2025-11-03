import { useEffect, useState } from "react";
import { deleteFromLocalStorage, getFromLocalStorage } from "../utilities";
import JobCard from "../components/JobCard";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const lsJobs = getFromLocalStorage();
    setJobs(lsJobs);
  }, []);
  // console.log(jobs);
  const handleDeleteFromAppliedJobs = (id) => {
    deleteFromLocalStorage(id);
    const lsJobs = getFromLocalStorage();
    setJobs(lsJobs);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-5">
        Total Applied Jobs : {jobs.length}
      </h2>
      <div className="grid gap-6 grid-cols-1">
        {jobs.map((jobItem) => (
          <JobCard
            key={jobItem.id}
            jobItem={jobItem}
            handleDeleteFromAppliedJobs={handleDeleteFromAppliedJobs}
          ></JobCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
