import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';

const JobsContainer = () => {
  const {getJobs, jobs, isLoading, page, totalJobs} = useAppContext()

  useEffect(() => {
    getJobs()
  }, [])  
  if(isLoading){
    return <Loading center />
  }

  if(jobs.length === 0){
    return <Wrapper>
      <h2>No job to display...</h2>
    </Wrapper>
  }
}

export default JobsContainer