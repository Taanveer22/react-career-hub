import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const JobCard = ({ jobItem, handleDeleteFromAppliedJobs }) => {
  const { pathname } = useLocation();
  // console.log(pathname);
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = jobItem;
  return (
    <div className="card bg-gray-300 shadow-sm h-80 relative">
      <div>
        <figure>
          <img className="w-28 pt-5" src={logo} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <h2 className="text-lg opacity-70">{company_name}</h2>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{remote_or_onsite}</div>
            <div className="badge badge-outline">{job_type}</div>
          </div>

          <div className="card-actions justify-between">
            <div>Location : {location}</div>
            <div>Salary : {salary}</div>
          </div>

          <Link to={`/statistics/${id}`}>
            <button className="btn btn-primary w-1/4">View Statistics</button>
          </Link>
        </div>
      </div>

      {pathname === "/appliedJobs" && (
        <div
          onClick={() => handleDeleteFromAppliedJobs(id)}
          className="absolute -top-5 -right-5 text-red-500 p-3 rounded-full bg-gray-500"
        >
          <FaTrash size={30}></FaTrash>
        </div>
      )}
    </div>
  );
};

JobCard.propTypes = {
  jobItem: PropTypes.object,
  handleDeleteFromAppliedJobs: PropTypes.func,
};

export default JobCard;
