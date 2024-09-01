function fetchJobs() {
    const qualification = document.getElementById("job-qualification").value;
    const jobList = document.getElementById("jobList");
    jobList.innerHTML = ""; 

    if (!qualification) {
        return; 
    }

    const jobs = {
        "10th": [
            { name: "Data Entry Operator", info: "Basic data entry jobs in government and private sectors.", url: "https://www.ncs.gov.in" },
            { name: "Railway Group D", info: "Entry-level jobs in Indian Railways.", url: "https://www.rrbcdg.gov.in" },
            { name: "Police Constable", info: "State police recruitment exams for constable posts.", url: "https://www.sarkariresult.com" },
            { name: "Peon", info: "Support staff roles in various government departments.", url: "https://www.ncs.gov.in" },
            { name: "Home Guard", info: "Recruitment for home guard positions in state police forces.", url: "https://www.sarkariresult.com" }
        ],
        "11th": [
            { name: "Part-Time Tutor", info: "Teach younger students in subjects like Math or English.", url: "https://www.tutor.com" },
            { name: "Internship in Local Businesses", info: "Intern in small local businesses to learn basics of administration.", url: "https://www.internshala.com" },
            { name: "Assistant in NGO", info: "Work as an assistant in a non-governmental organization.", url: "https://www.ngoportal.org" },
            { name: "Sales Intern", info: "Part-time sales job to understand the market and customer behavior.", url: "https://www.freshersworld.com" }
        ],
        "12th": [
            { name: "Police Constable", info: "State police recruitment exams for constable posts.", url: "https://www.sarkariresult.com" },
            { name: "Bank Clerk", info: "Bank Clerk exam for various public sector banks.", url: "https://www.ibps.in" },
            { name: "SSC CHSL", info: "Combined Higher Secondary Level Exam for various clerical positions.", url: "https://ssc.nic.in" },
            { name: "Railway Ticket Collector", info: "Recruitment for ticket collectors in Indian Railways.", url: "https://www.rrbcdg.gov.in" },
            { name: "Defence Jobs", info: "Various positions in the Indian Army, Navy, and Air Force for 12th pass candidates.", url: "https://www.joinindianarmy.nic.in" }
        ],
        "bsc": [
            { name: "Lab Assistant", info: "Jobs for lab assistants in educational and research institutions.", url: "https://www.ncs.gov.in" },
            { name: "Teaching Assistant", info: "Assistant teacher positions in schools and colleges.", url: "https://www.ctet.nic.in" },
            { name: "Quality Analyst", info: "Roles in quality control in various industries.", url: "https://www.naukri.com" },
            { name: "Pharmaceutical Sales Representative", info: "Sales jobs in the pharmaceutical industry.", url: "https://www.pharmatutor.org" },
            { name: "Field Officer", info: "Field officer roles in agricultural and environmental sectors.", url: "https://www.ncs.gov.in" }
        ],
        "msc": [
            { name: "Research Associate", info: "Research jobs in universities and research organizations.", url: "https://www.ncs.gov.in" },
            { name: "Data Scientist", info: "Data scientist positions in IT and analytics firms.", url: "https://www.naukri.com" },
            { name: "Project Coordinator", info: "Coordination roles in research and development projects.", url: "https://www.indeed.co.in" },
            { name: "Biotech Specialist", info: "Roles in biotechnology firms for research and development.", url: "https://www.biotecnika.org" },
            { name: "Environmental Scientist", info: "Positions in environmental consulting and government agencies.", url: "https://www.greenjobs.com" }
        ],
        "btech": [
            { name: "Software Developer", info: "Jobs for software developers in IT companies.", url: "https://www.linkedin.com/jobs" },
            { name: "Junior Engineer", info: "Engineering positions in public sector organizations.", url: "https://www.upsc.gov.in" },
            { name: "System Analyst", info: "Analyst roles in IT and consulting firms.", url: "https://www.monsterindia.com" },
            { name: "Network Engineer", info: "Network management positions in IT companies.", url: "https://www.indeed.co.in" },
            { name: "Product Manager", info: "Management roles in tech companies.", url: "https://www.naukri.com" }
        ],
        "mtech": [
            { name: "Senior Engineer", info: "Advanced engineering roles in private and public sectors.", url: "https://www.naukri.com" },
            { name: "Technical Consultant", info: "Consulting roles in technology firms.", url: "https://www.glassdoor.com" },
            { name: "Data Architect", info: "Design roles for data systems in large enterprises.", url: "https://www.indeed.co.in" },
            { name: "Machine Learning Engineer", info: "Specialist roles in AI and machine learning.", url: "https://www.monsterindia.com" },
            { name: "IT Project Manager", info: "Management roles in IT project delivery.", url: "https://www.linkedin.com/jobs" }
        ],
        "phd": [
            { name: "Postdoctoral Researcher", info: "Postdoctoral positions in academia and research institutes.", url: "https://www.nature.com/naturecareers" },
            { name: "Assistant Professor", info: "Teaching positions in universities and colleges.", url: "https://www.timeshighereducation.com/unijobs" },
            { name: "Research Director", info: "Senior research roles in government or private research labs.", url: "https://www.academics.com" },
            { name: "Senior Scientist", info: "High-level scientific roles in R&D organizations.", url: "https://jobs.sciencemag.org" },
            { name: "Science Policy Advisor", info: "Advisory roles in government and international agencies.", url: "https://www.un.org/jobs" }
        ]
    };

    if (jobs[qualification]) {
        jobs[qualification].forEach(job => {
            const jobElement = document.createElement("div");
            jobElement.classList.add("job-item", "mt-2", "p-2", "border", "rounded");
            jobElement.innerHTML = `<strong>${job.name}</strong>: ${job.info} <a href="${job.url}" target="_blank">Learn More</a>`;
            jobList.appendChild(jobElement);
        });
    }
    document.getElementById('qualification').addEventListener('change', function() {
        var container = document.querySelector('.container');
        if (this.value === '12th') {
            container.classList.add('full-screen-container');
        } else {
            container.classList.remove('full-screen-container');
        }
    });
    
}
