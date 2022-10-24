import React from "react";

function PageCourse() {
    return (
        <div className="pagecourse">
            <p>
                In the past several years, I have learned courses related to algorithm, data structrue. machine learning and etc.
                Below is the courses and corrsponding grades.
            </p>
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


            </table>

        </div>
    );
}

export default PageCourse;