import { FaUserCheck , FaUserTie} from "react-icons/fa";
import { AiOutlineSchedule, AiOutlineCalculator, AiOutlineFileText } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { Assi, ai, arrowdown,arrowup, asse, awais, cyber, data, dsa, math, moeez, sultan, zee } from "../assets";


export const features = [
    {
        id: 1,
        class: 'A',
        icon: FaUserCheck ,
        to: "/attendance",
        title: "Attandance",
        description: "Track your class attendance.",
    },
    {
        id: 2,
        class: 'B',
        icon: AiOutlineSchedule,
        to: "/schedule",
        title: "Schedule",
        description: "Access your class schedule and weekly timetable.",
    },
    {
        id: 3,
        class: 'C',
        icon: AiOutlineCalculator,
        to: "/calculator",
        title: "Calculator",
        description: "Perform attendance and results calculations.",
    }
];

export const Feature2 =[
    {
        id: 4,
        class: 'D',
        icon: IoChatboxEllipsesOutline,
        title: "Apply For Leave",
        description: "Connect with faculty and department for updates and communication",
    },
    {
        id: 6,
        class: 'E',
        icon: AiOutlineFileText,
        title: "Results",
        description: "Monitor your academic progress and view results.",
    },
    {
        id: 5,
        class: 'F',
        icon: GrAnnounce,
        title: "Announcment",
        description: "Stay informed about class announcements and upcoming events.",
    },
]

export const QA = [
    {
        id:"q!",
        title: "What is MetaLink?",
        ans : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        arrowDown : arrowdown,
        arrowUp : arrowup
    },
    {
        id:"q2",
        title: "Do I need a designer to use Metalink?",
        ans : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        arrowDown : arrowdown,
        arrowUp : arrowup
    },
    {
        id:"q3",
        title: "What do i need to start selling?",
        ans : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        arrowDown : arrowdown,
        arrowUp : arrowup
    },
    {
        id:"q4",
        title: "What happens when i recieve order?",
        ans : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
        arrowDown : arrowdown,
        arrowUp : arrowup
    }
]

export const courses = [
    {
        id: 1,
        title: "Data Structures And Algorithms",
        type : "Programming",
        description: "Lorem ipsum dolor sit amet ",
        image: dsa
    },
    {
        id: 2,
        title: "Assembley Language",
        type : "Programming",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: asse
    },
    {
        id: 3,
        title: "Generative AI",
        type : "Programming",
        description: "Lorem ipsum dolor sit amet amet consectetur .",
        image: ai
    },
    {
        id: 4,
        title: "Infromation Security",
        type : "Programming",
        description: "Lorem ipsum dolor sit amet consectetur .",
        image: cyber
    },
    {
        id: 5,
        title: "Linear Algebra",
        type : "Mathamatics",
        description: "Lorem ipsum dolor sit amet consectetur ",
        image: math
    },
    {
        id: 6,
        title: "Database Systems",
        type : "Programming",
        description: "Lorem ipsum dolor sit amet consectetur.",
        image: data
    },
]

export const team = [
    {
        id: 1,
        Name: "Muhammad Abdullah",
        title: "Web Developer",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        img: Assi
    },
    {
        id: 2,
        Name: "Sultan Mehmood",
        title: "Python Developer",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        img: sultan
    },
    {
        id: 3,
        Name: "Moeez Ahmad",
        title: "Contributor",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        img: moeez
    },
    {
        id: 3,
        Name: "ZeeShan Abid",
        title: "Contributor",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        img: zee
    },
    {
        id: 5,
        Name: "Awais liaquat",
        title: "Contributor",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        img: awais
    },
    {
        id: 6,
        Name: "Noor Ali",
        title: "Contributor",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        img: FaUserTie
    }
]

export const attendance_data = [
    {
        id: 1,
        name: "Muhammad Abdullah",
        roll: "F22607010",
        status: "A",
        img: Assi,
    },
    {
        id: 2,
        name: "Moeez Ahmed",
        roll: "F22607020",
        status: "P",
        img: moeez,
    },
]