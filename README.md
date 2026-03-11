# Tech Conference Event Registration System

## Overview
This project is a web-based event registration system built using **React with Vite**.  
It simulates how modern event platforms allow users to view event information, register for an event, review their registration details, and confirm their participation.

The system guides users through a structured multi-step registration process and stores the registration information in the browser's **local storage** so that the data persists even after refreshing or reopening the application.

This project demonstrates how to build a **multi-page application using client-side routing** and how to manage and persist user data in a frontend application.

---

## Features

The application includes the following core features:

- View conference information
- Register for the event through a form
- Review submitted registration details
- Confirm event registration
- Save registration data using **localStorage**
- Detect returning users who have already registered
- Cancel or edit registration information
- Navigate between pages using **React Router**

---

## Event Information

**Event Name:** Tech Innovation Conference 2026  
**Date:** March 25–26, 2026  
**Location:** Kigali Convention Center  

The conference brings together developers, designers, entrepreneurs, and technology enthusiasts to explore modern innovations such as Artificial Intelligence, Blockchain, and Startup development.

---

## Application Workflow

The system follows a multi-step user journey:

### 1. Event Information Page
The home page introduces the conference and displays:
- Event name
- Date and location
- Conference description
- Key speakers
- Register button

Clicking the **Register** button takes the user to the registration form.

---

### 2. Registration Form Page
Users fill in their registration details, including:

- Full Name
- Email Address
- Phone Number
- Organization / Institution
- Ticket Type (Standard, VIP, Student)
- Dietary Requirements
- Additional Notes

The form is connected to React state to keep track of user input.

---

### 3. Registration Review Page
Before submitting their registration, users can review all the information they entered.

From this page, users can:

- Confirm their registration
- Edit their information
- Cancel their registration

---

### 4. Confirmation Page
After confirming their details, the user sees a confirmation message indicating that their registration was successful.

The system then saves the registration data in **local storage**.

---

### 5. Returning User Page
When a user returns to the application after registering, the system checks the browser's **local storage**.

If registration data already exists, the user is redirected to a page showing their submitted registration details instead of registering again.

This simulates real-world event platforms that remember registered participants.


## Author
Monia Nijimbere
