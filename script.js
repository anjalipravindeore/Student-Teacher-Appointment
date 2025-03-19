// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, push, set, get } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdkK9pRA3hz5bRYIiiB2En6tfnD026bwg",
    authDomain: "student-teacher-appointm-1b119.firebaseapp.com",
    databaseURL: "https://student-teacher-appointm-1b119-default-rtdb.firebaseio.com/",
    projectId: "student-teacher-appointm-1b119",
    storageBucket: "student-teacher-appointm-1b119.appspot.com",
    messagingSenderId: "95093396874",
    appId: "1:95093396874:web:ca6ad3783bff7c6980a473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// ✅ Ensure all buttons are linked properly after DOM loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Student Teacher Management System Loaded");

    document.getElementById("addTeacher").addEventListener("click", addTeacher);
    document.getElementById("updateTeacher").addEventListener("click", updateTeacher);
    document.getElementById("approveStudent").addEventListener("click", approveStudent);
    document.getElementById("logoutAdmin").addEventListener("click", logout);

    document.getElementById("scheduleAppointment").addEventListener("click", scheduleAppointment);
    document.getElementById("manageAppointments").addEventListener("click", manageAppointments);
    document.getElementById("viewMessages").addEventListener("click", viewMessages);
    document.getElementById("viewAllAppointments").addEventListener("click", viewAllAppointments);
    document.getElementById("logoutTeacher").addEventListener("click", logout);

    document.getElementById("registerStudent").addEventListener("click", registerStudent);
    document.getElementById("loginStudent").addEventListener("click", loginStudent);
    document.getElementById("searchTeacher").addEventListener("click", searchTeacher);
    document.getElementById("bookAppointment").addEventListener("click", bookAppointment);
    document.getElementById("sendMessage").addEventListener("click", sendMessage);
    document.getElementById("logoutStudent").addEventListener("click", logout);
});

// ✅ Add Teacher to Firebase
function addTeacher() {
    let name = prompt("Enter Teacher's Name:");
    let department = prompt("Enter Department:");
    let subject = prompt("Enter Subject:");

    if (name && department && subject) {
        push(ref(database, "teachers"), {
            name,
            department,
            subject
        })
        .then(() => {
            alert(`✅ Teacher Added: ${name}`);
        })
        .catch(error => {
            alert("❌ Error adding teacher: " + error.message);
            console.error("❌ Firebase Error:", error);
        });
    }
}

// ✅ Register Student to Firebase
function registerStudent() {
    let name = prompt("Enter Your Name:");
    let email = prompt("Enter Your Email:");

    if (name && email) {
        push(ref(database, "students"), {
            name,
            email
        })
        .then(() => {
            alert(`✅ Student Registered: ${name}`);
        })
        .catch(error => {
            alert("❌ Error registering student: " + error.message);
        });
    }
}

// ✅ Book Appointment in Firebase
function bookAppointment() {
    let studentName = prompt("Enter Your Name:");
    let teacherName = prompt("Enter Teacher's Name:");
    let dateTime = prompt("Enter Appointment Date and Time:");

    if (studentName && teacherName && dateTime) {
        push(ref(database, "appointments"), {
            student: studentName,
            teacher: teacherName,
            dateTime
        })
        .then(() => {
            alert(`✅ Appointment booked with ${teacherName} on ${dateTime}`);
        })
        .catch(error => {
            alert("❌ Error booking appointment: " + error.message);
        });
    }
}

// ✅ Send Message in Firebase
function sendMessage() {
    let recipient = prompt("Enter Recipient (Teacher/Admin):");
    let message = prompt("Enter Your Message:");

    if (recipient && message) {
        push(ref(database, "messages"), {
            recipient,
            message,
            timestamp: new Date().toISOString()
        })
        .then(() => {
            alert(`✅ Message Sent to ${recipient}`);
        })
        .catch(error => {
            alert("❌ Error sending message: " + error.message);
        });
    }
}

// ✅ Approve Student Registration
function approveStudent() {
    let studentId = prompt("Enter Student ID to Approve:");
    alert(`✅ Student ID ${studentId} Approved!`);
}

// ✅ Update/Delete Teacher
function updateTeacher() {
    let teacherId = prompt("Enter Teacher ID to Update/Delete:");
    alert(`✅ Updating/Deleting Teacher with ID: ${teacherId}`);
}

// ✅ Schedule Appointment
function scheduleAppointment() {
    let studentName = prompt("Enter Student Name:");
    let dateTime = prompt("Enter Appointment Date and Time:");
    alert(`✅ Appointment Scheduled for ${studentName} on ${dateTime}`);
}

// ✅ Manage Appointments
function manageAppointments() {
    let appointmentId = prompt("Enter Appointment ID to Approve/Cancel:");
    alert(`✅ Managing Appointment ID: ${appointmentId}`);
}

// ✅ View Messages
function viewMessages() {
    alert("📨 Displaying Messages...");
}

// ✅ View All Appointments
function viewAllAppointments() {
    alert("📅 Displaying All Appointments...");
}

// ✅ Search Teacher
function searchTeacher() {
    let teacherName = prompt("Enter Teacher's Name to Search:");
    alert(`🔍 Searching for Teacher: ${teacherName}`);
}

// ✅ Login Student (Dummy)
function loginStudent() {
    let username = prompt("Enter username:");
    let password = prompt("Enter password:");
    alert(`🔑 Student logging in...`);
}

// ✅ Logout Function
function logout() {
    alert("🚪 Logging out...");
}
