import { toast } from "react-toastify";

// get from ls
const getFromLocalStorage = () => {
  let jobsList = [];
  const storedJobList = localStorage.getItem("jobsList");
  if (storedJobList) {
    jobsList = JSON.parse(storedJobList);
  }
  return jobsList;
};

// set to ls
const setToLocalStorage = (jobDetail) => {
  // console.log(jobDetail);
  let jobsList = getFromLocalStorage();
  const isExist = jobsList.find((jobItem) => jobItem.id === jobDetail.id);
  if (isExist) {
    toast.error("already added");
  } else {
    jobsList.push(jobDetail);
    localStorage.setItem("jobsList", JSON.stringify(jobsList));
    toast.success("successfully added");
  }
};

// delete from ls
const deleteFromLocalStorage = (id) => {
  let jobsList = getFromLocalStorage();
  const filteredJobList = jobsList.filter((jobItem) => jobItem.id !== id);
  if (filteredJobList) {
    localStorage.setItem("jobsList", JSON.stringify(filteredJobList));
    toast.warn("deleted from job list");
  }
};

// export all functions
export { setToLocalStorage, getFromLocalStorage, deleteFromLocalStorage };
