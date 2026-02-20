import React from 'react'

import Card from './components/Card';
import User from './components/User';
const App = () => {
  const jobs = [
  {
    id: 1,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
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
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
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
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_087I53sGyPiHuopG8Ew8fpBaxCPWn2Nxrg&s",
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
    brandLogo:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
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
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
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
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
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
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
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
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
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
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_087I53sGyPiHuopG8Ew8fpBaxCPWn2Nxrg&s",
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
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
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
        {jobs.map(function(elem,index){
          console.log(index);
          
          return <Card company= {elem.company} post={elem.datePosted} logo={elem.brandLogo} position={elem.post} type={elem.tag1} type2={elem.tag2} pay={elem.payPerHour} location={elem.location}/>
        })}
      </div>
    </div>

  )
}

export default App
// 2:34:11