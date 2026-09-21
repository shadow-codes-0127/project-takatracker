# ৳ TakaTracker

A modern, responsive personal monthly expense tracking web application built for students and individuals to manage their budgets, daily food limits, fixed bills, and spending habits efficiently using Bangladeshi Taka (৳).

![TakaTracker Preview](https://img.shields.io/badge/Status-Active-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chart.js&logoColor=white)

---

## ✨ Features

- **💰 Monthly Budget & Overview:** Set your total monthly available money, track spent vs. remaining funds, and monitor overall budget usage percentages.
- **🏠 Fixed Expenses Management:** Easily configure and toggle fixed monthly payments like Hostel Rent and Wi-Fi + Electricity (supports *Unpaid ➔ Paid* status with history tracking and auto-inclusion into monthly totals).
- **🍛 Daily Food Budget Tracker:** Special tracking for daily food expenses with a visual progress bar and automatic alerts when exceeding your daily limit (e.g., ৳100/day).
- **📊 Smart Daily Spending Calculator:** Dynamically calculates your recommended "Safe Daily Spending" amount based on your remaining money and days left in the month.
- **📅 Interactive Monthly Calendar:** A calendar view of the month where each day displays total spending with color-coded status badges (Green = Within budget, Yellow = Close to limit, Red = Over budget). Click any day to inspect specific transaction logs.
- **📈 Visual Reports & Charts:** Built-in category distribution donut chart and daily spending trend bar charts powered by Chart.js.
- **🌐 Multi-Language Support:** Instant toggle between **English** and **বাংলা (Bengali)** across the entire interface.
- **🌗 Dark / Light Mode:** Fully responsive, clean dashboard design with smooth dark and light theme switching.
- **💾 Data Persistence & Backup:** Remembers all your expenses and budgets securely in your browser's `localStorage`. Includes options to **Export as JSON/CSV**, **Import backups**, or reset data.

---

## 🛠️ Project Structure

```text
taka-tracker/
├── index.html       # Main application markup & structure
├── style.css        # Modern responsive styling & themes
├── script.js        # Core logic, calculations, i18n, and local storage
└── README.md        # Project documentation
