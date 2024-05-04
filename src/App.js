import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchJobs } from './services/jobService';
import JobCard from './components/jobCard';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const jobList = await fetchJobs();
      setJobs(jobList);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Job Listings</h1>
      <div className="job-container">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
}

export default App;
