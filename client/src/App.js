import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import JobForm from './components/JobForm';
import { getData } from './services/api';
import JobList from './components/JobList';
import JobDetail from './components/JobDetails';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const getJobsData = async() => {
      const response = await getData();
      setJobs(response);
    }
    getJobsData();
  }, [showForm])

  const handleToggleForm = () => {
    setSelectedJob(null);
    setShowForm(prevState => !prevState);
  }

  return (
    <div className='container mt-5'>

      <div className='row'>
        <div className='col-md-4'>

          <h1 className='mb-4'>Job Board</h1>
          <button className='btn btn-primary mb-3' onClick={handleToggleForm}>
           {showForm ? 'Hide Job Form' : 'Show Job Form'}
          </button>
            { showForm && <JobForm setShowForm={setShowForm}/> }
            { !showForm && <JobList jobs={jobs} setSelectedJob = {setSelectedJob}/> }
        </div>

        {
          selectedJob && 
            <div className='col-md-8'>
              <JobDetail job={selectedJob} />
            </div>
        }

      </div>
    </div>
  );
}

export default App;
