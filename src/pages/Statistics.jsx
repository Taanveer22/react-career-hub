import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Statistics = () => {
  const jobsData = useLoaderData();
  // console.log(jobsData);
  const [jobDetail, setJobDetail] = useState({});
  const { id } = useParams();
  // console.log(typeof id);
  const convertedId = parseInt(id);
  // console.log(typeof convertedId);

  useEffect(() => {
    const foundData = jobsData.find((jobItem) => jobItem.id === convertedId);
    if (foundData) {
      setJobDetail(foundData);
      console.log("found job", foundData);
    } else {
      console.log("no job found", convertedId);
    }
  }, [jobsData, convertedId]);

  console.log(jobDetail);

  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = jobDetail || {};

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-5">
        Job Detail Id : {id}
      </h1>
      <section className="hero bg-base-200 flex justify-around">
        <div className="hero-content">
          <div className="max-w-md space-y-3">
            <p>
              <span className="text-lg font-medium">Job Description :</span>{" "}
              <br /> {job_description}
            </p>
            <p>
              <span className="text-lg font-medium">Job Responsibility :</span>{" "}
              <br /> {job_responsibility}
            </p>
            <p>
              <span className="text-lg font-medium">
                Educational Requirements :
              </span>{" "}
              <br /> {educational_requirements}
            </p>
            <p>
              <span className="text-lg font-medium">Experiences :</span> <br />{" "}
              {experiences}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Job Description</h2>
              <hr></hr>
              <p>Salary : {salary}</p>
              <p>Job Title : {job_title}</p>
              <h2 className="card-title">Contact Information</h2>
              <hr></hr>
              <p>Phone : {contact_information?.phone}</p>
              <p>Email : {contact_information?.email}</p>
              <p>Address : {contact_information?.address}</p>
            </div>
          </div>
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </section>
    </div>
  );
};

export default Statistics;
