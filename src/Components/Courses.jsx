import React from "react";
import "./Styles/courses.css";
import { courses } from "../Constants";
import { BsArrowRight } from "react-icons/bs";

function Courses() {
    return (
        <div>
            <h1 class="page-title">Offered Courses</h1>
            <div class="content-wrapper">
                {courses.map((course, index) => (
                <div class="course-card">
                    <img src={course.image} className="course-card__image" alt="" />
                        <div class="course-card__text-wrapper">
                            <h2 class="course-card__title">{course.title}</h2>
                            <div class="course-card__post-date">{course.type}</div>
                            <div class="course-card__details-wrapper">
                                <p class="course-card__excerpt">
                                    {course.description}
                                </p>
                                <a href="#" class="course-card__read-more">
                                    Read more <BsArrowRight />
                                </a>
                            </div>
                        </div>
                </div>
                ))};
            </div>
        </div>
    );
}

export default Courses;
