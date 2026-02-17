import React from 'react'

import Card from './components/Card';
import User from './components/User';
const App = () => {
  const jobs = [
  {
    id: 1,
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$45/hr",
    location: "Mumbai, India"
  },
  {
    id: 2,
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "2 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$70/hr",
    location: "Bangalore, India"
  },
  {
    id: 3,
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    payPerHour: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$65/hr",
    location: "Delhi, India"
  },
  {
    id: 5,
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    payPerHour: "$60/hr",
    location: "Remote, India"
  },
  {
    id: 6,
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "6 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$75/hr",
    location: "Pune, India"
  },
  {
    id: 7,
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "2 weeks ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: "$40/hr",
    location: "Chennai, India"
  },
  {
    id: 8,
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "1 day ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: "$68/hr",
    location: "Noida, India"
  },
  {
    id: 9,
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "3 days ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: "$80/hr",
    location: "Remote, India"
  },
  {
    id: 10,
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: "$50/hr",
    location: "Gurgaon, India"
  }
];
console.log(jobs);

  return (
    <div>
      <div className="parent">
        {jobs.map(function(elem){
          return <Card company= {elem.company} post={elem.datePosted} logo={elem.brandLogo}/>
        })}
      </div>
    </div>

  )
}

export default App
// 2:34:11