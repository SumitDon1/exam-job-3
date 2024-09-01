function fetchExams() {
    const qualification = document.getElementById("qualification").value;
    const examList = document.getElementById("examList");
    examList.innerHTML = ""; 

    if (!qualification) {
        return; 
    }

    const exams = {
        "10th": [
            { name: "SSC MTS", info: "Multi-Tasking Staff exam conducted by SSC.", age: "18-25 years", url: "https://ssc.nic.in" },
            { name: "Railway Group D", info: "Entry-level jobs in Indian Railways.", age: "18-33 years", url: "https://www.rrbcdg.gov.in" },
            { name: "State Police Constable", info: "State-level police constable recruitment exams.", age: "18-22 years", url: "https://www.sarkariresult.com" },
            { name: "Army Soldier (General Duty)", info: "Entry-level soldier positions in the Indian Army.", age: "17.5-21 years", url: "https://joinindianarmy.nic.in" },
            { name: "Home Guard", info: "Recruitment for Home Guard positions in various states.", age: "18-35 years", url: "https://www.ncs.gov.in" }
        ],
        "11th": [
            { name: "Junior Science Talent Search Examination (JSTSE)", info: "State-level talent search examination for science students.", age: "14-16 years", url: "https://www.edudel.nic.in" },
            { name: "NTSE", info: "National Talent Search Examination for scholarship.", age: "15-18 years", url: "https://ncert.nic.in" },
            { name: "Olympiad Exams", info: "Various Olympiad exams in subjects like Math, Science, etc.", age: "14-18 years", url: "https://sofworld.org" },
            { name: "KVPY", info: "Kishore Vaigyanik Protsahan Yojana for research careers.", age: "16-18 years", url: "http://kvpy.iisc.ernet.in" }
        ],
        "12th": [
            { name: "SSC CHSL", info: "Combined Higher Secondary Level Exam for clerical positions.", age: "18-27 years", url: "https://ssc.nic.in" },
            { name: "NDA Exam", info: "National Defence Academy entrance exam for 12th pass candidates.", age: "16.5-19.5 years", url: "https://www.nda.nic.in" },
            { name: "IBPS Clerk", info: "Clerical exam for public sector banks in India.", age: "20-28 years", url: "https://www.ibps.in" },
            { name: "Railway Loco Pilot", info: "Assistant Loco Pilot exam in Indian Railways.", age: "18-28 years", url: "https://www.rrbcdg.gov.in" }
        ],
        "bsc": [
            { name: "IBPS PO", info: "Probationary Officer exam for various public sector banks.", age: "20-30 years", url: "https://www.ibps.in" },
            { name: "UPSC CDS", info: "Combined Defence Services exam conducted by UPSC.", age: "19-25 years", url: "https://www.upsc.gov.in" },
            { name: "SSC CGL", info: "Combined Graduate Level Exam for recruitment in government departments.", age: "18-32 years", url: "https://ssc.nic.in" },
            { name: "Indian Forest Service (IFS)", info: "Exam for recruitment to forestry services conducted by UPSC.", age: "21-32 years", url: "https://www.upsc.gov.in" },
            { name: "NABARD Grade A & B", info: "Officer recruitment exam for the National Bank for Agriculture and Rural Development.", age: "21-30 years", url: "https://www.nabard.org" }
        ],
        "msc": [
            { name: "NET Exam", info: "National Eligibility Test for teaching and research.", age: "No upper age limit for Assistant Professorship; JRF: max 30 years", url: "https://ugcnet.nta.nic.in" },
            { name: "CSIR NET", info: "Council of Scientific and Industrial Research NET exam.", age: "No upper age limit for Lectureship; JRF: max 28 years", url: "https://csirnet.nta.nic.in" },
            { name: "GATE", info: "Graduate Aptitude Test in Engineering for M.Tech admissions and PSU jobs.", age: "No age limit", url: "https://gate.iitb.ac.in" },
            { name: "ICMR JRF", info: "Junior Research Fellowship for biomedical research.", age: "Max 28 years", url: "https://www.icmr.nic.in" },
            { name: "Agricultural Research Scientist (ARS)", info: "Recruitment for scientists in the agricultural sector.", age: "21-32 years", url: "https://www.asrb.org.in" }
        ],
        "btech": [
            { name: "GATE", info: "Graduate Aptitude Test in Engineering for M.Tech admissions and PSU jobs.", age: "No age limit", url: "https://gate.iitb.ac.in" },
            { name: "IES", info: "Indian Engineering Services exam conducted by UPSC.", age: "21-30 years", url: "https://www.upsc.gov.in" },
            { name: "ISRO Scientist/Engineer", info: "Recruitment for scientists/engineers in ISRO.", age: "Max 35 years", url: "https://www.isro.gov.in" },
            { name: "BARC OCES/DGFS", info: "Training program for scientific officers at Bhabha Atomic Research Centre.", age: "26-28 years", url: "https://www.barc.gov.in" },
            { name: "IAS Exam", info: "Indian Administrative Service exam conducted by UPSC.", age: "21-32 years", url: "https://www.upsc.gov.in" }
        ],
        "mtech": [
            { name: "Senior Software Engineer", info: "Develop and manage complex software projects.", age: "No age limit", url: "https://www.hackerrank.com" },
            { name: "Research Scientist", info: "Lead research and development in scientific organizations.", age: "No age limit", url: "https://www.nature.com/naturecareers" },
            { name: "Technical Project Manager", info: "Manage technical teams and projects.", age: "No age limit", url: "https://www.projectmanagement.com" },
            { name: "Product Manager", info: "Oversee the development of products from inception to market.", age: "No age limit", url: "https://www.productmanagementtoday.com" }
        ],
        "phd": [
            { name: "Professor", info: "Teach and conduct research in universities.", age: "No age limit", url: "https://chroniclevitae.com" },
            { name: "Principal Scientist", info: "Lead research groups in R&D departments.", age: "No age limit", url: "https://www.indeed.com" },
            { name: "Chief Technical Officer", info: "Oversee all technical aspects of an organization.", age: "No age limit", url: "https://angel.co" },
            { name: "Data Science Lead", info: "Lead data-driven projects in tech companies.", age: "No age limit", url: "https://towardsdatascience.com" }
        ]
    };

    if (exams[qualification]) {
        exams[qualification].forEach(exam => {
            const examItem = document.createElement("div");
            examItem.className = "exam-item";
            examItem.innerHTML = `
                <h3>${exam.name}</h3>
                <p>${exam.info} (Age: ${exam.age})</p>
                <a href="${exam.url}" target="_blank">Learn More</a>
            `;
            examList.appendChild(examItem);
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
