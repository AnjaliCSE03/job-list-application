


const JobList = ({jobs, setSelectedJob}) => {

    return(

        <div>
            <h2 className="mt-3 mb-4">Job Listing</h2>
            <ul className="list-group">
                {
                    jobs && jobs.map(job => (
                        <li className="list-group-item" key = {job._id}>
                            <a href="#" onClick={() => setSelectedJob(job)} className="text-decoration-none">
                                {job.title} - {job.company}
                            </a>                           
                        </li>
                    ))
                }
            </ul>
        </div>

    )

}

export default JobList;