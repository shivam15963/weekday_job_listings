import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2>{job.companyName}</h2>
      <p>{job.jobDetailsFromCompany}</p>
      <p>Location: {job.location}</p>
      <p>Experience: {job.minExp} - {job.maxExp} years</p>
      <p>Salary: {job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode}</p>
      <p>Job Role: {job.jobRole}</p>
      <img src={job.logoUrl} alt={job.companyName} />
    </div>
  );
}

export default JobCard;
