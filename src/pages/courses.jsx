import React from "react";

function PageCourse() {
    return (
        <div className="pagecourse" >
            <h2>
                In the past several years, I have learned courses related to algorithm, data structrue. machine learning and etc.
                Below is the courses and corrsponding grades.
            </h2>
            <br/>
            <table className="tableCourse">
                <tr>
                    <th>Courses</th>
                    <th>Grades</th>
                </tr>
                <tr>
                    <th>Data structrue</th>
                    <th>A</th>
                </tr>
                <tr>
                    <th>Machine Learing</th>
                    <th>A</th>
                </tr>
                <tr>
                    <th>Algorithm Design</th>
                    <th>A</th>
                </tr>
                <tr>
                    <th>Data Mining</th>
                    <th>A</th>
                </tr>
                <tr>
                    <th>Human Information Processing</th>
                    <th>A</th>
                </tr>
                <tr>
                    <th>Cloud Computing</th>
                    <th>A</th>
                </tr>
                <tr>
                    <th>Conputer Network</th>
                    <th>A-</th>
                </tr>
                <tr>
                    <th>Database Management</th>
                    <th>B+</th>
                </tr>
                <tr>
                    <th>Information privacy and security</th>
                    <th>A</th>
                </tr>
                <tr>
                    <th>Information storage and retrieve</th>
                    <th>A</th>
                </tr>


            </table>

        </div>
    );
}

export default PageCourse;