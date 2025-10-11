// team/teamData.ts

// Define a TypeScript interface for team members and groups for type safety.
export interface TeamMember {
    id: string;
    parentId: string | null;
    name: string;
    title: string;
    image?: string;
    linkedin?: string;
    x?: string;
}
// The root node's `parentId` must be `null`.
export const teamData: TeamMember[] = [
    { id: "Celesta-Team", name: "Team Celesta", title: "The Torch Bearers", parentId: null },
    { id: "fc", name: "Fest Convenors", title: "The Chief Architects", parentId:"Celesta-Team" },
    { id: "0.1", name: "Aman Aryan", title: "Visionary Leader", parentId: "fc", image: "#", linkedin: "#", x: "#" },
    { id: "0.2", name: "Yash Raj Singh", title: "Visionary Architect", parentId: "fc", image: "#", linkedin: "#", x: "#" },
    { id: "festcord", name: "Fest Coordinators", title: "The Command Centre", parentId: "Celesta-Team" },
    { id: "1.1", name: "Abhitesh Shukla", title: "Head of Operations", parentId: "festcord", image: "#", linkedin: "#", x: "#" },
    { id: "1.2", name: "Ananta Nanda", title: "The Core Strategists", parentId: "festcord", image: "#", linkedin: "#", x: "#" },
    //Group name
    { id: "Committees", name: "All Committees", title: "The Performers", parentId: "festcord" },
    //Tech Team
    { id: "tech", name: "Web & App Dev", title: "The Tech Virtuosos", parentId: "festcord" },
    { id: "tech-cord", name: "Coordinators", title: "The Digital Architects", parentId: "tech" },
    { id: "#", name: "Diptanshu Saurav", title: "Coordinator", parentId: "tech-cord", image: "/team-images/Diptanshu.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Naitik", title: "Coordinator", parentId: "tech-cord", image: "#", linkedin: "#", x: "#" },
    { id: "tech-subcord", name: "Sub Coordinators", title: "The Code Commandos", parentId: "tech" },
    { id: "#", name: "Abhinav Datta", title: "Sub Coordinator", parentId: "tech-subcord", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Pradeep Sharma", title: "Sub Coordinator", parentId: "tech-subcord", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Prashant Raj", title: "Sub Coordinator", parentId: "tech-subcord", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Rupam Dutta", title: "Sub Coordinator", parentId: "tech-subcord", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Vaibhavi Parmar", title: "Sub Coordinator", parentId: "tech-subcord", image: "#", linkedin: "#", x: "#" },
    { id: "tech-gen", name: "General Members", title: "Code Evangelist", parentId: "tech" },
    { id: "#", name: "Parv Agarwal", title: "General Member", parentId: "tech-gen", image: "/team-images/Parv.jpg", linkedin: "https://in.linkedin.com/in/parvagarwal", x: "https://x.com/parv001" },
    //Group Children names
    { id: "Committees-coord", name: "Coordinators", title: "Pillar Captains", parentId: "Committees" },
    { id: "Committees-subcoord", name: "Sub-Coordinators", title: "The Second-in-Command", parentId: "Committees" },
    { id: "Committees-general", name: "General Team", title: "The Engine Room", parentId: "Committees" },
    //All 9 Commiittees coordinators name
    //Team 1 - Hospitality
    { id: "t1", name: "Hospitality", title: "The Ambassadors of Welcome", parentId: "Committees-coord" },
    { id: "#", name: "Kumari Nisha", title: "Coordinator", parentId: "t1", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Sparsh Choudhary", title: "Coordinator", parentId: "t1", image: "/team-images/sparsh.jpeg", linkedin: "#", x: "#" },
    { id: "#", name: "Vidhan Bansal", title: "Coordinator", parentId: "t1", image: "/team-images/vidhan.jpg", linkedin: "#", x: "#" },

//Team 2 - Creative & Design
    { id: "t2", name: "Creative & Design", title: "The Visual Architects", parentId: "Committees-coord" },
    { id: "#", name: "Lohitaksha Guha", title: "Coordinator", parentId: "t2", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Rishit Dutta", title: "Coordinator", parentId: "t2", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Saurabh Sankhla", title: "Coordinator", parentId: "t2", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Tanuj Pitta", title: "Coordinator", parentId: "t2", image: "#", linkedin: "#", x: "#" },

//Team 3 - Sponsorship
    { id: "t3", name: "Sponsorship", title: "The Partnership Pioneers", parentId: "Committees-coord" },
    { id: "#", name: "Bhumi Garg", title: "Coordinator", parentId: "t3", image: "/team-images/Bhumi.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Sanit Sinha", title: "Coordinator", parentId: "t3", image: "/team-images/Sanit.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Shaurya Kumar", title: "Coordinator", parentId: "t3", image: "/team-images/Shaurya.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Yatharth Gupta", title: "Coordinator", parentId: "t3", image: "/team-images/Yatharth.jpg", linkedin: "#", x: "#" },

//Team 4 - Events
    { id: "t4", name: "Events", title: "The Experience Engineers", parentId: "Committees-coord" },
    { id: "#", name: "Aayush Sheth", title: "Coordinator", parentId: "t4", image: "/team-images/aayush.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Atharva Pawar", title: "Coordinator", parentId: "t4", image: "/team-images/Atharva.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Sreyas Kotha", title: "Coordinator", parentId: "t4", image: "/team-images/sreyas.jpg", linkedin: "#", x: "#" },

//Team 5 - Flagship
    { id: "t5", name: "Flagship", title: "The Mainstage Mavericks", parentId: "Committees-coord" },
    { id: "#", name: "Ashutosh Kanojia", title: "Coordinator", parentId: "t5", image: "/team-images/ashutosh.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Jayinaksha Vyas", title: "Coordinator", parentId: "t5", image: "/team-images/vyas.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Nakshatra Kanchan", title: "Coordinator", parentId: "t5", image: "/team-images/nakshatra.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Srikant Sahoo", title: "Coordinator", parentId: "t5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Tushar Srivastava", title: "Coordinator", parentId: "t5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Viraj Kulkarni", title: "Coordinator", parentId: "t5", image: "/team-images/viraj.jpg", linkedin: "#", x: "#" },

//Team 6 - MPR
    { id: "t6", name: "MPR", title: "The Buzz Brigade", parentId: "Committees-coord" },
    { id: "#", name: "Anvitha Pr", title: "Coordinator", parentId: "t6", image: "/team-images/Avnitha.jpeg", linkedin: "#", x: "#" },
    { id: "#", name: "Deepesh Kumar", title: "Coordinator", parentId: "t6", image: "/team-images/deepesh.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Maganjot Singh", title: "Coordinator", parentId: "t6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Shaswat Suman", title: "Coordinator", parentId: "t6", image: "/team-images/shaswat.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Taksh Bhawan", title: "Coordinator", parentId: "t6", image: "/team-images/taksh.jpg", linkedin: "#", x: "#" },

//Team 7 - RSP
    { id: "t7", name: "RSP", title: "The Engagement Gatekeepers", parentId: "Committees-coord" },
    { id: "#", name: "Ajay Kumar", title: "Coordinator", parentId: "t7", image: "/team-images/ajay.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Dhivyesh R", title: "Coordinator", parentId: "t7", image: "/team-images/dhivyesh.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Om Ronte", title: "Coordinator", parentId: "t7", image: "/team-images/om.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Raqeeb Ansari", title: "Coordinator", parentId: "t7", image: "/team-images/raqeeb.jpg", linkedin: "#", x: "#" },

//Team 8 - GL&E
    { id: "t8", name: "GL&E", title: "The Knowledge Curators", parentId: "Committees-coord" },
    { id: "#", name: "Aditya Satpute", title: "Coordinator", parentId: "t8", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Ashish Yadav", title: "Coordinator", parentId: "t8", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Devashish Vaddi", title: "Coordinator", parentId: "t8", image: "#", linkedin: "#", x: "#" },

//Team 9 - Workshop
    { id: "t9", name: "Workshop", title: "The Skill Architects", parentId: "Committees-coord" },
    { id: "#", name: "Abhijat Jha", title: "Coordinator", parentId: "t9", image: "/team-images/abhijat.jpg", linkedin: "#", x: "#" },
    { id: "#", name: "Nishant Kumar", title: "Coordinator", parentId: "t9", image: "#", linkedin: "#", x: "#" },

//All 9 Commiittees sub-coordinators name
//Team 1 - Hospitality
    { id: "st1", name: "Hospitality", title: "The Welcome Vanguard", parentId: "Committees-subcoord" },
    { id: "#", name: "Disha Mulchandani", title: "Sub-Coordinator", parentId: "st1", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Jatin Khurana", title: "Sub-Coordinator", parentId: "st1", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Kartik Sen", title: "Sub-Coordinator", parentId: "st1", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Lakshya Sharma", title: "Sub-Coordinator", parentId: "st1", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Parth Kataria", title: "Sub-Coordinator", parentId: "st1", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Saksham Thakur", title: "Sub-Coordinator", parentId: "st1", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Thati Akshay", title: "Sub-Coordinator", parentId: "st1", image: "#", linkedin: "#", x: "#" },

//Team 2 - Creative & Design
    { id: "st2", name: "Creative & Design", title: "The Design Powerhouse", parentId: "Committees-subcoord" },
    { id: "#", name: "Anura Saoji", title: "Sub-Coordinator", parentId: "st2", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Arifa", title: "Sub-Coordinator", parentId: "st2", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Aryaup Bansal", title: "Sub-Coordinator", parentId: "st2", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Avi Bharti", title: "Sub-Coordinator", parentId: "st2", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Hima Sai Chandana", title: "Sub-Coordinator", parentId: "st2", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Lavanya Bhadani", title: "Sub-Coordinator", parentId: "st2", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Leon Joel", title: "Sub-Coordinator", parentId: "st2", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Priyanshu Purohit", title: "Sub-Coordinator", parentId: "st2", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Richa Choudhary", title: "Sub-Coordinator", parentId: "st2", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Shreya Kumari", title: "Sub-Coordinator", parentId: "st2", image: "#", linkedin: "#", x: "#" },

//Team 3 - Sponsorship
    { id: "st3", name: "Sponsorship", title: "The Alliance Builders", parentId: "Committees-subcoord" },
    { id: "#", name: "Ananya Misra", title: "Sub-Coordinator", parentId: "st3", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Anurag Parashar", title: "Sub-Coordinator", parentId: "st3", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Arekar Aditya", title: "Sub-Coordinator", parentId: "st3", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Nirmit Chaurasiya", title: "Sub-Coordinator", parentId: "st3", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Shivu Gupta", title: "Sub-Coordinator", parentId: "st3", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Shreyas Das", title: "Sub-Coordinator", parentId: "st3", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Srijan Sharma", title: "Sub-Coordinator", parentId: "st3", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Surili Pathak", title: "Sub-Coordinator", parentId: "st3", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Tushar Bharti", title: "Sub-Coordinator", parentId: "st3", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Yahya Dawoodi", title: "Sub-Coordinator", parentId: "st3", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Yash Modi", title: "Sub-Coordinator", parentId: "st3", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Yashowardhan", title: "Sub-Coordinator", parentId: "st3", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Yashraj", title: "Sub-Coordinator", parentId: "st3", image: "#", linkedin: "#", x: "#" },

//Team 4 - Events
    { id: "st4", name: "Events", title: "The Action Squad", parentId: "Committees-subcoord" },
    { id: "#", name: "E V Sai Chathurya", title: "Sub-Coordinator", parentId: "st4", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Huzaim", title: "Sub-Coordinator", parentId: "st4", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Prateek Gupta", title: "Sub-Coordinator", parentId: "st4", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Prasnapriyan", title: "Sub-Coordinator", parentId: "st4", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Purushattam", title: "Sub-Coordinator", parentId: "st4", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "R Anuj", title: "Sub-Coordinator", parentId: "st4", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Sagar Soni", title: "Sub-Coordinator", parentId: "st4", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Sanjay Kanna", title: "Sub-Coordinator", parentId: "st4", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Sarthak", title: "Sub-Coordinator", parentId: "st4", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Shashi raghava", title: "Sub-Coordinator", parentId: "st4", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Soma Mishra", title: "Sub-Coordinator", parentId: "st4", image: "#", linkedin: "#", x: "#" },

//Team 5 - Flagship
    { id: "st5", name: "Flagship", title: "The Headliner Force", parentId: "Committees-subcoord" },
    { id: "#", name: "Aakash Rajput", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Anurag Ghosh", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Aryan Jain", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Ayush Kumar Gupta", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Ayush Maurya", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Ayushman Kumar", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Jaydeb Sarkar", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Kalgi Chaudhary", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Krrish Jindal", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Parnava Maitra", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Parth Agarwal", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Saad Manda", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Shaija Mathuria", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Shiv Kumar", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Tanuj Kumar Meena", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Tanushkumar Yadav", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Viraj Khinepre", title: "Sub-Coordinator", parentId: "st5", image: "#", linkedin: "#", x: "#" },

//Team 6 - MPR
    { id: "st6", name: "MPR", title: "The Hype Specialists", parentId: "Committees-subcoord" },
    { id: "#", name: "Abhijeet Singh", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Alok Kumar", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Ayush Sen", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Bighnesh Parida", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Devyansh Pandey", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Dhairya Garg", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Kavya Mahajan", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Monal", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Sahastrakruti", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Sahil", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Shashwat Tiwari", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Shikhar Verma", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Sofiya Attar", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Yogyansh", title: "Sub-Coordinator", parentId: "st6", image: "#", linkedin: "#", x: "#" },

//Team 7 - RSP
    { id: "st7", name: "RSP", title: "The Onboarding Crew", parentId: "Committees-subcoord" },
    { id: "#", name: "Abdul Hadi", title: "Sub-Coordinator", parentId: "st7", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Abhishek Kumar", title: "Sub-Coordinator", parentId: "st7", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Ankur Raj", title: "Sub-Coordinator", parentId: "st7", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "B Rohit Chowdary", title: "Sub-Coordinator", parentId: "st7", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "R Koushik Kaarunya", title: "Sub-Coordinator", parentId: "st7", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Shrishti Gupta", title: "Sub-Coordinator", parentId: "st7", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Sushreeth", title: "Sub-Coordinator", parentId: "st7", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Tumarada Saravan", title: "Sub-Coordinator", parentId: "st7", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Vamsi Krishna", title: "Sub-Coordinator", parentId: "st7", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Vidhi", title: "Sub-Coordinator", parentId: "st7", image: "#", linkedin: "#", x: "#" },

//Team 8 - GL&E
    { id: "st8", name: "GL&E", title: "The Insight Team", parentId: "Committees-subcoord" },
    { id: "#", name: "Ankit Kumar", title: "Sub-Coordinator", parentId: "st8", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Anoop Tripathi", title: "Sub-Coordinator", parentId: "st8", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Ashmit Malik", title: "Sub-Coordinator", parentId: "st8", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "S Jayaram", title: "Sub-Coordinator", parentId: "st8", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Sahil", title: "Sub-Coordinator", parentId: "st8", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Sanath Halbargi", title: "Sub-Coordinator", parentId: "st8", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Sanskar Agrawal", title: "Sub-Coordinator", parentId: "st8", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Sohom Maji", title: "Sub-Coordinator", parentId: "st8", image: "#", linkedin: "#", x: "#" },

//Team 9 - Workshop
    { id: "st9", name: "Workshop", title: "The Innovation Facilitators", parentId: "Committees-subcoord" },
    { id: "#", name: "Ayushkar Nath", title: "Sub-Coordinator", parentId: "st9", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Kunal Deore", title: "Sub-Coordinator", parentId: "st9", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Tashya Aryan", title: "Sub-Coordinator", parentId: "st9", image: "#", linkedin: "#", x: "#" },
    { id: "#", name: "Varun Kumar", title: "Sub-Coordinator", parentId: "st9", image: "#", linkedin: "#", x: "#" }
    
//All 9 Commiittees General member name















   ];