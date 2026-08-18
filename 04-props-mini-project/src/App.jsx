import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/Card'
const App = () => {
const jobOpenings = [
  {
    companyName: "Google",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.27.1/icons/google.svg",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Mumbai, India",
  },
  {
    companyName: "Amazon",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.27.1/icons/amazon.svg",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Bengaluru, India",
  },
  {
    companyName: "Microsoft",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.27.1/icons/microsoft.svg",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Hyderabad, India",
  },
  {
    companyName: "Meta",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.27.1/icons/meta.svg",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Mumbai, India",
  },
  {
    companyName: "Apple",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.27.1/icons/apple.svg",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Bengaluru, India",
  },
  {
    companyName: "Netflix",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.27.1/icons/netflix.svg",
    datePosted: "4 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Remote, India",
  },
  {
    companyName: "NVIDIA",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.27.1/icons/nvidia.svg",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Pune, India",
  },
  {
    companyName: "Adobe",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.27.1/icons/adobe.svg",
    datePosted: "3 weeks ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Noida, India",
  },
  {
    companyName: "Salesforce",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.27.1/icons/salesforce.svg",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$46/hour",
    location: "Hyderabad, India",
  },
  {
    companyName: "Oracle",
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@16.27.1/icons/oracle.svg",
    datePosted: "10 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$49/hour",
    location: "Pune, India",
  },
];


  return (
    <div className='parent'>
    {jobOpenings.map(function(elem) {
      
      return <Card 
        key={elem.companyName}
        company={elem.companyName}
        brandLogo={elem.brandLogo}
        datePosted={elem.datePosted}
        post={elem.post}
        tag1={elem.tag1}
        tag2={elem.tag2}
        pay={elem.pay}
        location={elem.location}/>
        

    })}


    </div>
  )
}

export default App
