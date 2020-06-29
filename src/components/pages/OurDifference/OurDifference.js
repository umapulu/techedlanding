import React from 'react';
import '../Pages.css';

function ourDifference() {
    return (
        <div>
            <h1>Industry level standards with project-based learning</h1>
            <p>Our practical course offerings are carefully created with
                 each student in mind. We offer a variety of personalized 
                 project-based courses for your needs</p>

         <div  className = {'adjacent3list'}> 
            <div className = {'adjacent3'}>
                <img src = "/logo192.png" alt = "" height = "100" width = "100"/>
                <h3>Collaborative Learning</h3>
               
                <p>Each of our plans includes group 
                    sessions to mimic real software 
                    engineering teams and encourage 
                    learning amongst students.
                </p>
            </div>
            <div className = {'adjacent3'}>
                <img src = "/logo192.png" alt = "" height = "100" width = "100">
                    
                </img>
                <h3>Project-Based Material</h3>
               
                <p> Every course contains coding projects 
                    throughout to ensure that each student 
                    actively learns and engages with the content.
                </p>
            </div>
            <div className = {'adjacent3'}>
                <img src = "/logo192.png" alt = "" height = "100" width = "100"/>
                <h3>Practical Skills and Content</h3>
                
                <p>Our goal is to provide students 
                    with relevant skills so each 
                    offering is created with applicability 
                    and practicality in mind
                </p>
            </div>
        </div>

            <h1>Courses</h1>
            <p>Each course is designed to take approximately 40 hours to complete but depends on student pace</p>
            <div className = {'lightblue'}>
                <h2>Scratch Coding </h2>
                <p>Topics Covered: Data Structures, Conditional Statements, Loops, Functions, Classes</p>
                <p>Summary: This course provides an overview of the AP Computer Science A syllabus and  material. 
                It consists of coding projects every class session to ensure that skills are being  practiced,
                    as well as homework problems. The course concludes in a capstone project which  is 
                    personalized to the student and designed in collaboration with their assigned tutor </p>
            </div>
            <h2> Java Programming Fundamentals</h2>
            <p>Topics Covered: Data Structures, Conditional Statements, Loops, Functions, Classes</p>
            <p>Summary: This course provides an overview of the AP Computer Science A syllabus and  material. 
            It consists of coding projects every class session to ensure that skills are being  practiced,
                as well as homework problems. The course concludes in a capstone project which  is 
                personalized to the student and designed in collaboration with their assigned tutor </p>
            <div className = {'lightblue'}>
                <h2>C++ Programming </h2>
                <p>Topics Covered: Data Structures, Conditional Statements, Loops, Functions, Classes</p>
                <p>Summary: This course provides an overview of the AP Computer Science A syllabus and  material. 
                It consists of coding projects every class session to ensure that skills are being  practiced,
                    as well as homework problems. The course concludes in a capstone project which  is 
                    personalized to the student and designed in collaboration with their assigned tutor </p>
            </div>
            <h2>Python Data Analytics </h2>
            <p>Topics Covered: Data Structures, Conditional Statements, Loops, Functions, Classes</p>
            <p>Summary: This course provides an overview of the AP Computer Science A syllabus and  material. 
            It consists of coding projects every class session to ensure that skills are being  practiced,
                as well as homework problems. The course concludes in a capstone project which  is 
                personalized to the student and designed in collaboration with their assigned tutor </p>
            
                
                
                
        </div>
    );
}

export default ourDifference;