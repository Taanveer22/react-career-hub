import PropTypes from "prop-types";
const JobCard = ({ jobItem }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = jobItem;
  return (
    <div>
      <div className="card bg-gray-300 shadow-sm h-80">
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

          <button className="btn btn-primary w-1/4">View Deatails</button>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  jobItem: PropTypes.object,
};

export default JobCard;
