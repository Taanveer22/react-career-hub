import bannerPhoto from "../assets/images/user.png";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen mb-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerPhoto} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              One Step Closer To Your Dream Job
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
