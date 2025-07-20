// import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import JobsCard from './JobsCard';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

useEffect(()=>{
    axios.get("https://sever-jr-jobs-bd.vercel.app/jobs")
    .then(result => {setJobs(result.data)})
    .catch(error => console.log(error))
},[])





  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        
      {/* {jobs.map(job => (
        <div key={job._id} className="border rounded-lg shadow p-4">
          <img src={job.jobBannerUrl} alt={job.jobTitle} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-semibold mt-2">{job.jobTitle}</h2>
          <p className="text-gray-700">{job.jobDescription}</p>
          <div className="mt-2">
            <p><strong>Price Range:</strong> ${job.minimumPrice} - ${job.maximumPrice}</p>
            <p><strong>Category:</strong> {job.jobCategory}</p>
            <p><strong>Deadline:</strong> {job.deadline}</p>
            <p><strong>Posted By:</strong> {job.name} ({job.buyer_email})</p>
            <p><strong>Posted On:</strong> {job.jobPostingDate}</p>
          </div>
        </div>
      ))} */}


      {
        jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
      }
    </div>
  );
};

export default Jobs;
