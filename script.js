// Localization Dictionary
const i18nData = {
    en: {
        nav_dashboard: "Dashboard",
        nav_add: "Add Expense",
        nav_expenses: "Expenses",
        nav_calendar: "Calendar",
        nav_reports: "Reports",
        nav_budget: "Budget",
        nav_settings: "Settings",
        lbl_monthly_money: "Monthly Money",
        lbl_spent: "Spent",
        lbl_remaining: "Remaining",
        lbl_budget_used: "Budget Used",
        title_monthly_overview: "Monthly Budget Overview",
        lbl_planned_basic: "Planned Basic Expenses:",
        lbl_additional_allowance: "Additional Spending Allowance:",
        title_smart_spending: "Smart Daily Spending",
        desc_safe_spending: "Recommended daily spending based on your remaining money and days left in the month.",
        lbl_days_left: "days remaining",
        title_todays_expenses: "Today's Expenses",
        msg_no_today: "No expenses recorded for today.",
        lbl_total_today: "Total Today:",
        lbl_todays_food: "Today's Food",
        title_fixed_expenses: "Fixed Expenses",
        lbl_hostel: "Hostel Rent",
        lbl_wifi_elec: "Wi-Fi + Electricity",
        title_add_expense: "Add New Expense",
        lbl_date: "Date",
        lbl_category: "Category",
        lbl_amount: "Amount (৳)",
        lbl_description: "Description / Note",
        btn_save_expense: "Save Expense",
        btn_cancel: "Cancel",
        title_expense_history: "Expense History",
        search_placeholder: "Search expenses...",
        opt_all_categories: "All Categories",
        th_date: "Date",
        th_category: "Category",
        th_description: "Description",
        th_amount: "Amount",
        th_actions: "Actions",
        title_category_distribution: "Category Distribution",
        title_daily_trend: "Daily Spending Trend",
        title_budget_summary: "Monthly Budget & Planned Expenses",
        lbl_total_avail_money: "Total Monthly Money Available (৳)",
        lbl_hostel_rent: "Hostel Rent (৳)",
        lbl_wifi_elec_budget: "Wi-Fi + Electricity (৳)",
        lbl_daily_food_limit: "Daily Food Budget Limit (৳)",
        btn_update_budget: "Update Budget Settings",
        title_app_settings: "App Settings & Data Management",
        title_export_data: "Export Data",
        desc_export_data: "Backup all your monthly budgets, fixed expenses, and history as JSON or CSV.",
        title_import_data: "Import Data",
        desc_import_data: "Restore data from a previously exported JSON backup file.",
        title_reset_data: "Reset Application Data",
        desc_reset_data: "Clear all local storage data and start fresh."
    },
    bn: {
        nav_dashboard: "ড্যাশবোর্ড",
        nav_add: "খরচ যোগ করুন",
        nav_expenses: "সকল খরচ",
        nav_calendar: "ক্যালেন্ডার",
        nav_reports: "রিপোর্ট",
        nav_budget: "বাজেট",
        nav_settings: "সেটিংস",
        lbl_monthly_money: "মাসিক মোট টাকা",
        lbl_spent: "খরচ হয়েছে",
        lbl_remaining: "বাকি আছে",
        lbl_budget_used: "বাজেট ব্যবহার",
        title_monthly_overview: "মাসিক বাজেট ওভারভিউ",
        lbl_planned_basic: "পূর্বনির্ধারিত মৌলিক খরচ:",
        lbl_additional_allowance: "অতিরিক্ত খরচের সুযোগ:",
        title_smart_spending: "স্মার্ট দৈনিক খরচ",
        desc_safe_spending: "বাকি টাকা এবং মাসের বাকি দিনের ওপর ভিত্তি করে প্রতিদিনের নিরাপদ খরচ।",
        lbl_days_left: "দিন বাকি",
        title_todays_expenses: "আজকের খরচ",
        msg_no_today: "আজ কোনো খরচ রেকর্ড করা হয়নি।",
        lbl_total_today: "আজ মোট:",
        lbl_todays_food: "আজকের খাবার",
        title_fixed_expenses: "স্থায়ী খরচ",
        lbl_hostel: "হোস্টেল ভাড়া",
        lbl_wifi_elec: "ওয়াইফাই + বিদ্যুৎ",
        title_add_expense: "নতুন খরচ যোগ করুন",
        lbl_date: "তারিখ",
        lbl_category: "ক্যাটাগরি",
        lbl_amount: "পরিমাণ (৳)",
        lbl_description: "বিবরণ / নোট",
        btn_save_expense: "খরচ সংরক্ষণ করুন",
        btn_cancel: "বাতিল",
        title_expense_history: "খরচের ইতিহাস",
        search_placeholder: "খরচ খুঁজুন...",
        opt_all_categories: "সকল ক্যাটাগরি",
        th_date: "তারিখ",
        th_category: "ক্যাটাগরি",
        th_description: "বিবরণ",
        th_amount: "পরিমাণ",
        th_actions: "অ্যাকশন",
        title_category_distribution: "ক্যাটাগরি অনুযায়ী বিতরণ",
        title_daily_trend: "দৈনিক খরচের ধারা",
        title_budget_summary: "মাসিক বাজেট ও পরিকল্পনা",
        lbl_total_avail_money: "এই মাসের মোট উপলব্ধ টাকা (৳)",
        lbl_hostel_rent: "হোস্টেল ভাড়া (৳)",
        lbl_wifi_elec_budget: "ওয়াইফাই + বিদ্যুৎ (৳)",
        lbl_daily_food_limit: "দৈনিক খাদ্য বাজেট সীমা (৳)",
        btn_update_budget: "বাজেট সেটিংস আপডেট করুন",
        title_app_settings: "অ্যাপ সেটিংস ও ডাটা ম্যানেজমেন্ট",
        title_export_data: "ডাটা এক্সপোর্ট",
        desc_export_data: "আপনার সকল মাসিক বাজেট ও খরচের ইতিহাস JSON বা CSV ব্যাকআপ নিন।",
        title_import_data: "ডাটা ইমপোর্ট",
        desc_import_data: "আগের ব্যাকআপ ফাইল থেকে ডাটা রিস্টোর করুন।",
        title_reset_data: "অ্যাপ ডাটা রিসেট",
        desc_reset_data: "সকল লোকাল স্টোরেজ ডাটা মুছে ফেলুন।"
    }
};

let currentLang = localStorage.getItem('taka_lang') || 'en';
let currentTheme = localStorage.getItem('taka_theme') || 'dark';

let now = new Date();
let currentYear = now.getFullYear();
let currentMonth = now.getMonth() + 1;

let appData = JSON.parse(localStorage.getItem('taka_app_data')) || {};

let categoryChartInstance = null;
let dailyChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    initThemeAndLang();
    checkFirstLaunch();
    setupNavigation();
    setupEventListeners();
    refreshUI();
});

function initThemeAndLang() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.getElementById('theme-toggle-checkbox').checked = (currentTheme === 'light');
    applyLocalization();
}

function applyLocalization() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[currentLang][key]) {
            el.textContent = i18nData[currentLang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18nData[currentLang][key]) {
            el.placeholder = i18nData[currentLang][key];
        }
    });
}

function checkFirstLaunch() {
    const monthKey = getMonthKey(currentYear, currentMonth);
    if (!appData[monthKey]) {
        document.getElementById('setup-modal').classList.remove('hidden');
    }
}

document.getElementById('setup-save-btn').addEventListener('click', () => {
    const amt = parseFloat(document.getElementById('setup-amount-input').value) || 0;
    const hostel = parseFloat(document.getElementById('setup-hostel-input').value) || 0;
    const wifi = parseFloat(document.getElementById('setup-wifi-input').value) || 0;
    const food = parseFloat(document.getElementById('setup-food-input').value) || 0;

    const monthKey = getMonthKey(currentYear, currentMonth);
    appData[monthKey] = {
        monthlyMoney: amt,
        hostelBudget: hostel,
        wifiBudget: wifi,
        dailyFoodLimit: food,
        hostelPaid: false,
        hostelPaidDate: null,
        wifiPaid: false,
        wifiPaidDate: null,
        expenses: []
    };
    saveData();
    document.getElementById('setup-modal').classList.add('hidden');
    refreshUI();
});

document.getElementById('close-setup-modal').addEventListener('click', () => {
    const monthKey = getMonthKey(currentYear, currentMonth);
    if (!appData[monthKey]) {
        appData[monthKey] = {
            monthlyMoney: parseFloat(document.getElementById('setup-amount-input').value) || 10000,
            hostelBudget: parseFloat(document.getElementById('setup-hostel-input').value) || 0,
            wifiBudget: parseFloat(document.getElementById('setup-wifi-input').value) || 0,
            dailyFoodLimit: parseFloat(document.getElementById('setup-food-input').value) || 100,
            hostelPaid: false,
            hostelPaidDate: null,
            wifiPaid: false,
            wifiPaidDate: null,
            expenses: []
        };
        saveData();
    }
    document.getElementById('setup-modal').classList.add('hidden');
    refreshUI();
});

function getMonthKey(y, m) {
    return `${y}-${m}`;
}

function getMonthData(y, m) {
    const key = getMonthKey(y, m);
    if (!appData[key]) {
        appData[key] = {
            monthlyMoney: 0,
            hostelBudget: 0,
            wifiBudget: 0,
            dailyFoodLimit: 0,
            hostelPaid: false,
            hostelPaidDate: null,
            wifiPaid: false,
            wifiPaidDate: null,
            expenses: []
        };
    }
    return appData[key];
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = item.getAttribute('data-target');
            switchView(target);
            document.querySelector('.sidebar').classList.remove('mobile-open');
        });
    });

    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('mobile-open');
    });
}

function switchView(viewName) {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-item[data-target="${viewName}"]`);
    if (activeNav) activeNav.classList.add('active');

    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    const targetSec = document.getElementById(`view-${viewName}`);
    if (targetSec) targetSec.classList.add('active');

    if (viewName === 'reports') {
        renderCharts();
    }
}

function setupEventListeners() {
    document.getElementById('theme-toggle-checkbox').addEventListener('change', (e) => {
        currentTheme = e.target.checked ? 'light' : 'dark';
        localStorage.setItem('taka_theme', currentTheme);
        document.documentElement.setAttribute('data-theme', currentTheme);
    });

    document.getElementById('lang-toggle-btn').addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'bn' : 'en';
        localStorage.setItem('taka_lang', currentLang);
        applyLocalization();
        refreshUI();
    });

    document.getElementById('prev-month-btn').addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 1) {
            currentMonth = 12;
            currentYear--;
        }
        refreshUI();
    });

    document.getElementById('next-month-btn').addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 12) {
            currentMonth = 1;
            currentYear++;
        }
        refreshUI();
    });

    const todayStr = new Date().toISOString().split('T')[0];
    document.getElementById('expense-date').value = todayStr;

    document.getElementById('expense-form').addEventListener('submit', (e) => {
        e.preventDefault();
        saveExpenseHandler();
    });

    document.getElementById('expense-cancel-btn').addEventListener('click', () => {
        resetExpenseForm();
    });

    document.getElementById('toggle-hostel-btn').addEventListener('click', () => {
        toggleFixedExpense('hostel');
    });
    document.getElementById('toggle-wifi-btn').addEventListener('click', () => {
        toggleFixedExpense('wifi');
    });

    document.getElementById('fixed-hostel-input').addEventListener('input', (e) => {
        const val = parseFloat(e.target.value) || 0;
        const data = getMonthData(currentYear, currentMonth);
        data.hostelBudget = val;
        saveData();
        refreshUIWithoutInputBlur();
    });

    document.getElementById('fixed-wifi-input').addEventListener('input', (e) => {
        const val = parseFloat(e.target.value) || 0;
        const data = getMonthData(currentYear, currentMonth);
        data.wifiBudget = val;
        saveData();
        refreshUIWithoutInputBlur();
    });

    document.getElementById('save-budget-btn').addEventListener('click', () => {
        updateBudgetSettings();
    });

    document.getElementById('search-input').addEventListener('input', renderExpenseTable);
    document.getElementById('filter-category').addEventListener('change', renderExpenseTable);

    document.getElementById('export-json-btn').addEventListener('click', exportJSON);
    document.getElementById('export-csv-btn').addEventListener('click', exportCSV);
    document.getElementById('import-btn').addEventListener('click', () => document.getElementById('import-file-input').click());
    document.getElementById('import-file-input').addEventListener('change', importJSON);
    document.getElementById('reset-app-btn').addEventListener('click', resetApp);
}

function refreshUI() {
    updateMonthDisplayHeader();
    const data = getMonthData(currentYear, currentMonth);

    document.getElementById('budget-total-money').value = data.monthlyMoney;
    document.getElementById('budget-hostel').value = data.hostelBudget;
    document.getElementById('budget-wifi').value = data.wifiBudget;
    document.getElementById('budget-daily-food').value = data.dailyFoodLimit;

    const hostelInput = document.getElementById('fixed-hostel-input');
    if (document.activeElement !== hostelInput) hostelInput.value = data.hostelBudget;

    const wifiInput = document.getElementById('fixed-wifi-input');
    if (document.activeElement !== wifiInput) wifiInput.value = data.wifiBudget;

    const fixedSpent = (data.hostelPaid ? data.hostelBudget : 0) + (data.wifiPaid ? data.wifiBudget : 0);
    const dailySpent = data.expenses.reduce((sum, item) => sum + item.amount, 0);
    const totalSpent = fixedSpent + dailySpent;
    const remainingMoney = data.monthlyMoney - totalSpent;
    const budgetUsedPercent = data.monthlyMoney > 0 ? Math.min(100, (totalSpent / data.monthlyMoney) * 100).toFixed(1) : 0;

    document.getElementById('dash-monthly-money').textContent = `৳${data.monthlyMoney.toLocaleString()}`;
    document.getElementById('dash-spent').textContent = `৳${totalSpent.toLocaleString()}`;
    document.getElementById('dash-remaining').textContent = `৳${remainingMoney.toLocaleString()}`;
    document.getElementById('dash-budget-used').textContent = `${budgetUsedPercent}%`;

    document.getElementById('progress-text-spent').textContent = `Spent: ৳${totalSpent.toLocaleString()}`;
    document.getElementById('progress-text-avail').textContent = `Available: ৳${data.monthlyMoney.toLocaleString()}`;
    document.getElementById('main-progress-fill').style.width = `${budgetUsedPercent}%`;

    const plannedBasic = data.hostelBudget + data.wifiBudget + (data.dailyFoodLimit * getDaysInMonth(currentYear, currentMonth));
    document.getElementById('dash-planned-basic').textContent = `৳${plannedBasic.toLocaleString()}`;
    document.getElementById('dash-additional-allowance').textContent = `৳${Math.max(0, data.monthlyMoney - plannedBasic).toLocaleString()}`;

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const todayDate = new Date();
    let daysRemaining = daysInMonth;
    if (currentYear === todayDate.getFullYear() && currentMonth === (todayDate.getMonth() + 1)) {
        daysRemaining = Math.max(1, daysInMonth - todayDate.getDate() + 1);
    }
    document.getElementById('dash-days-remaining').textContent = daysRemaining;
    const safeDaily = remainingMoney > 0 ? Math.round(remainingMoney / daysRemaining) : 0;
    document.getElementById('dash-safe-daily').innerHTML = `৳${safeDaily.toLocaleString()}<span class="unit">/day</span>`;

    const hostelBadge = document.getElementById('fixed-hostel-badge');
    const hostelBtn = document.getElementById('toggle-hostel-btn');
    if (data.hostelPaid) {
        hostelBadge.textContent = currentLang === 'bn' ? 'পরিশোধিত' : 'Paid';
        hostelBadge.className = 'badge paid';
        hostelBtn.textContent = currentLang === 'bn' ? 'বাতিল' : 'Undo';
    } else {
        hostelBadge.textContent = currentLang === 'bn' ? 'বাকি' : 'Unpaid';
        hostelBadge.className = 'badge unpaid';
        hostelBtn.textContent = currentLang === 'bn' ? 'পরিশোধ' : 'Mark Paid';
    }

    const wifiBadge = document.getElementById('fixed-wifi-badge');
    const wifiBtn = document.getElementById('toggle-wifi-btn');
    if (data.wifiPaid) {
        wifiBadge.textContent = currentLang === 'bn' ? 'পরিশোধিত' : 'Paid';
        wifiBadge.className = 'badge paid';
        wifiBtn.textContent = currentLang === 'bn' ? 'বাতিল' : 'Undo';
    } else {
        wifiBadge.textContent = currentLang === 'bn' ? 'বাকি' : 'Unpaid';
        wifiBadge.className = 'badge unpaid';
        wifiBtn.textContent = currentLang === 'bn' ? 'পরিশোধ' : 'Mark Paid';
    }

    renderTodayOverview(data);
    renderExpenseTable();
    renderCalendar();
    checkWarnings(data, totalSpent, remainingMoney);
}

function refreshUIWithoutInputBlur() {
    const data = getMonthData(currentYear, currentMonth);
    const fixedSpent = (data.hostelPaid ? data.hostelBudget : 0) + (data.wifiPaid ? data.wifiBudget : 0);
    const dailySpent = data.expenses.reduce((sum, item) => sum + item.amount, 0);
    const totalSpent = fixedSpent + dailySpent;
    const remainingMoney = data.monthlyMoney - totalSpent;
    const budgetUsedPercent = data.monthlyMoney > 0 ? Math.min(100, (totalSpent / data.monthlyMoney) * 100).toFixed(1) : 0;

    document.getElementById('dash-spent').textContent = `৳${totalSpent.toLocaleString()}`;
    document.getElementById('dash-remaining').textContent = `৳${remainingMoney.toLocaleString()}`;
    document.getElementById('dash-budget-used').textContent = `${budgetUsedPercent}%`;
    document.getElementById('progress-text-spent').textContent = `Spent: ৳${totalSpent.toLocaleString()}`;
    document.getElementById('main-progress-fill').style.width = `${budgetUsedPercent}%`;

    const plannedBasic = data.hostelBudget + data.wifiBudget + (data.dailyFoodLimit * getDaysInMonth(currentYear, currentMonth));
    document.getElementById('dash-planned-basic').textContent = `৳${plannedBasic.toLocaleString()}`;
    document.getElementById('dash-additional-allowance').textContent = `৳${Math.max(0, data.monthlyMoney - plannedBasic).toLocaleString()}`;
}

function updateMonthDisplayHeader() {
    const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthNamesBn = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
    const name = currentLang === 'bn' ? monthNamesBn[currentMonth - 1] : monthNamesEn[currentMonth - 1];
    document.getElementById('current-month-display').textContent = `${name} ${currentYear}`;
    document.getElementById('calendar-month-title').textContent = `${name} ${currentYear}`;
}

function getDaysInMonth(y, m) {
    return new Date(y, m, 0).getDate();
}

function toggleFixedExpense(type) {
    const data = getMonthData(currentYear, currentMonth);
    const dateStr = new Date().toISOString().split('T')[0];
    if (type === 'hostel') {
        data.hostelPaid = !data.hostelPaid;
        data.hostelPaidDate = data.hostelPaid ? dateStr : null;
    } else if (type === 'wifi') {
        data.wifiPaid = !data.wifiPaid;
        data.wifiPaidDate = data.wifiPaid ? dateStr : null;
    }
    saveData();
    refreshUI();
}

function renderTodayOverview(data) {
    const todayStr = new Date().toISOString().split('T')[0];
    const todayExpenses = data.expenses.filter(item => item.date === todayStr);

    const todayListEl = document.getElementById('today-expense-list');
    todayListEl.innerHTML = '';

    let totalToday = 0;
    let todayFoodTotal = 0;

    if (todayExpenses.length === 0) {
        todayListEl.innerHTML = `<p class="text-muted" style="font-size:0.85rem; color:var(--text-secondary);">${i18nData[currentLang].msg_no_today}</p>`;
    } else {
        todayExpenses.forEach(item => {
            totalToday += item.amount;
            if (item.category === 'Food') todayFoodTotal += item.amount;

            const div = document.createElement('div');
            div.className = 'mini-item';
            div.innerHTML = `<span><strong>${item.category}</strong> (${item.desc || ''})</span><strong>৳${item.amount}</strong>`;
            todayListEl.appendChild(div);
        });
    }

    document.getElementById('dash-today-total').textContent = `৳${totalToday}`;

    const foodLimit = data.dailyFoodLimit;
    document.getElementById('dash-today-food-count').textContent = `৳${todayFoodTotal} / ৳${foodLimit}`;
    const foodPercent = Math.min(100, (todayFoodTotal / foodLimit) * 100);
    document.getElementById('food-progress-fill').style.width = `${foodPercent}%`;

    const foodStatusEl = document.getElementById('dash-food-status');
    if (todayFoodTotal > foodLimit) {
        foodStatusEl.textContent = `⚠️ Over Budget by ৳${todayFoodTotal - foodLimit}`;
        foodStatusEl.style.color = 'var(--danger)';
    } else {
        foodStatusEl.textContent = `Remaining Today: ৳${foodLimit - todayFoodTotal}`;
        foodStatusEl.style.color = 'var(--text-secondary)';
    }
}

function checkWarnings(data, totalSpent, remainingMoney) {
    const banner = document.getElementById('warning-banner');
    const warningText = document.getElementById('warning-text');

    const todayStr = new Date().toISOString().split('T')[0];
    const todayFoodTotal = data.expenses.filter(i => i.date === todayStr && i.category === 'Food').reduce((s, i) => s + i.amount, 0);

    if (todayFoodTotal > data.dailyFoodLimit) {
        banner.classList.remove('hidden');
        warningText.textContent = `⚠️ Food budget exceeded today by ৳${todayFoodTotal - data.dailyFoodLimit}!`;
        return;
    }

    const usageRatio = data.monthlyMoney > 0 ? (totalSpent / data.monthlyMoney) : 0;
    if (usageRatio >= 1.0) {
        banner.classList.remove('hidden');
        warningText.textContent = `🔴 Monthly budget exhausted! You have spent 100% or more of your money.`;
        return;
    }
    if (usageRatio >= 0.8) {
        banner.classList.remove('hidden');
        warningText.textContent = `⚠️ You have used ${Math.round(usageRatio * 100)}% of your monthly money.`;
        return;
    }
    if (usageRatio < 0.5 && totalSpent > 0) {
        banner.classList.remove('hidden');
        warningText.textContent = `✅ You are currently well under budget. Keep it up!`;
        return;
    }

    banner.classList.add('hidden');
}

function saveExpenseHandler() {
    const date = document.getElementById('expense-date').value;
    const category = document.getElementById('expense-category').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const desc = document.getElementById('expense-desc').value;
    const editId = document.getElementById('edit-expense-id').value;

    if (!date || !amount) return;

    const [y, m] = date.split('-').map(Number);
    currentYear = y;
    currentMonth = m;
    const data = getMonthData(currentYear, currentMonth);

    if (editId) {
        const index = data.expenses.findIndex(i => i.id === editId);
        if (index !== -1) {
            data.expenses[index] = { id: editId, date, category, amount, desc };
        }
    } else {
        const newExpense = {
            id: 'exp_' + Date.now() + Math.random().toString(36.2),
            date,
            category,
            amount,
            desc
        };
        data.expenses.push(newExpense);
    }

    saveData();
    resetExpenseForm();
    switchView('dashboard');
    refreshUI();
}

function resetExpenseForm() {
    document.getElementById('expense-form').reset();
    document.getElementById('edit-expense-id').value = '';
    document.getElementById('expense-submit-btn').textContent = i18nData[currentLang].btn_save_expense;
    document.getElementById('expense-cancel-btn').classList.add('hidden');
    document.getElementById('expense-date').value = new Date().toISOString().split('T')[0];
}

function renderExpenseTable() {
    const data = getMonthData(currentYear, currentMonth);
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const filterCat = document.getElementById('filter-category').value;

    const tbody = document.getElementById('expense-table-body');
    tbody.innerHTML = '';

    let filtered = data.expenses.filter(item => {
        const matchesSearch = item.desc.toLowerCase().includes(searchQuery) || item.category.toLowerCase().includes(searchQuery) || item.amount.toString().includes(searchQuery);
        const matchesCat = filterCat === '' || item.category === filterCat;
        return matchesSearch && matchesCat;
    });

    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-secondary); padding: 2rem;">No expenses found.</td></tr>`;
        return;
    }

    filtered.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.date}</td>
            <td><strong>${item.category}</strong></td>
            <td>${item.desc || '-'}</td>
            <td>৳${item.amount.toLocaleString()}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-outline btn-sm" onclick="editExpense('${item.id}')">Edit</button>
                    <button class="btn-danger btn-sm" onclick="deleteExpense('${item.id}')">Delete</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

window.editExpense = function(id) {
    const data = getMonthData(currentYear, currentMonth);
    const item = data.expenses.find(i => i.id === id);
    if (!item) return;

    document.getElementById('edit-expense-id').value = item.id;
    document.getElementById('expense-date').value = item.date;
    document.getElementById('expense-category').value = item.category;
    document.getElementById('expense-amount').value = item.amount;
    document.getElementById('expense-desc').value = item.desc;

    document.getElementById('expense-submit-btn').textContent = currentLang === 'bn' ? 'আপডেট করুন' : 'Update Expense';
    document.getElementById('expense-cancel-btn').classList.remove('hidden');

    switchView('add-expense');
};

window.deleteExpense = function(id) {
    if (!confirm('Are you sure you want to delete this expense?')) return;
    const data = getMonthData(currentYear, currentMonth);
    data.expenses = data.expenses.filter(i => i.id !== id);
    saveData();
    refreshUI();
};

function renderCalendar() {
    const grid = document.getElementById('calendar-days-grid');
    grid.innerHTML = '';

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayIndex = new Date(currentYear, currentMonth - 1, 1).getDay();
    const data = getMonthData(currentYear, currentMonth);

    const dailySpendMap = {};
    data.expenses.forEach(item => {
        dailySpendMap[item.date] = (dailySpendMap[item.date] || 0) + item.amount;
    });

    for (let i = 0; i < firstDayIndex; i++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-day-cell other-month';
        grid.appendChild(cell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayStr = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const spent = dailySpendMap[dayStr] || 0;

        const cell = document.createElement('div');
        let statusClass = 'status-green';
        if (spent > 300) statusClass = 'status-red';
        else if (spent > 150) statusClass = 'status-yellow';

        cell.className = `calendar-day-cell ${spent > 0 ? statusClass : ''}`;
        cell.innerHTML = `
            <div class="cal-day-num">${day}</div>
            <div class="cal-day-amount">${spent > 0 ? '৳' + spent : ''}</div>
        `;

        cell.addEventListener('click', () => {
            showDayDetailsModal(dayStr, data.expenses.filter(i => i.date === dayStr));
        });

        grid.appendChild(cell);
    }
}

function showDayDetailsModal(dateStr, expenses) {
    document.getElementById('day-modal-title').textContent = `Expenses on ${dateStr}`;
    const content = document.getElementById('day-modal-content');
    content.innerHTML = '';

    if (expenses.length === 0) {
        content.innerHTML = `<p style="color:var(--text-secondary); text-align:center; padding:1rem;">No expenses recorded on this day.</p>`;
    } else {
        expenses.forEach(item => {
            const div = document.createElement('div');
            div.className = 'mini-item';
            div.innerHTML = `<span><strong>${item.category}</strong> (${item.desc || '-'})</span><strong>৳${item.amount}</strong>`;
            content.appendChild(div);
        });
    }

    document.getElementById('day-detail-modal').classList.remove('hidden');
}

document.getElementById('close-day-modal').addEventListener('click', () => {
    document.getElementById('day-detail-modal').classList.add('hidden');
});

function renderCharts() {
    const data = getMonthData(currentYear, currentMonth);

    const catTotals = {};
    data.expenses.forEach(item => {
        catTotals[item.category] = (catTotals[item.category] || 0) + item.amount;
    });

    const categories = Object.keys(catTotals);
    const amounts = Object.values(catTotals);

    const ctxCat = document.getElementById('category-chart').getContext('2d');
    if (categoryChartInstance) categoryChartInstance.destroy();

    categoryChartInstance = new Chart(ctxCat, {
        type: 'doughnut',
        data: {
            labels: categories.length > 0 ? categories : ['No Expenses'],
            datasets: [{
                data: amounts.length > 0 ? amounts : [1],
                backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#64748b']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { color: currentTheme === 'dark' ? '#f8fafc' : '#0f172a' } } }
        }
    });

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const dailyLabels = [];
    const dailyAmounts = [];
    const dailyMap = {};
    data.expenses.forEach(i => {
        const d = parseInt(i.date.split('-')[2]);
        dailyMap[d] = (dailyMap[d] || 0) + i.amount;
    });

    for (let d = 1; d <= daysInMonth; d++) {
        dailyLabels.push(d);
        dailyAmounts.push(dailyMap[d] || 0);
    }

    const ctxDaily = document.getElementById('daily-chart').getContext('2d');
    if (dailyChartInstance) dailyChartInstance.destroy();

    dailyChartInstance = new Chart(ctxDaily, {
        type: 'bar',
        data: {
            labels: dailyLabels,
            datasets: [{
                label: 'Daily Spending (৳)',
                data: dailyAmounts,
                backgroundColor: '#3b82f6',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { ticks: { color: currentTheme === 'dark' ? '#94a3b8' : '#64748b' } },
                y: { ticks: { color: currentTheme === 'dark' ? '#94a3b8' : '#64748b' } }
            },
            plugins: { legend: { display: false } }
        }
    });
}

function updateBudgetSettings() {
    const data = getMonthData(currentYear, currentMonth);
    data.monthlyMoney = parseFloat(document.getElementById('budget-total-money').value) || data.monthlyMoney;
    data.hostelBudget = parseFloat(document.getElementById('budget-hostel').value) || data.hostelBudget;
    data.wifiBudget = parseFloat(document.getElementById('budget-wifi').value) || data.wifiBudget;
    data.dailyFoodLimit = parseFloat(document.getElementById('budget-daily-food').value) || data.dailyFoodLimit;

    saveData();
    refreshUI();
    alert('Budget settings updated successfully!');
}

function saveData() {
    localStorage.setItem('taka_app_data', JSON.stringify(appData));
}

function exportJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `takatracker_backup_${currentYear}_${currentMonth}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

function exportCSV() {
    const data = getMonthData(currentYear, currentMonth);
    let csvContent = "data:text/csv;charset=utf-8,Date,Category,Description,Amount\n";
    data.expenses.forEach(i => {
        csvContent += `${i.date},"${i.category}","${i.desc || ''}",${i.amount}\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `takatracker_expenses_${currentYear}_${currentMonth}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
}

function importJSON(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const parsed = JSON.parse(event.target.result);
            appData = parsed;
            saveData();
            refreshUI();
            alert('Data imported successfully!');
        } catch (err) {
            alert('Invalid JSON file.');
        }
    };
    reader.readAsText(file);
}

function resetApp() {
    if (!confirm('Are you sure you want to reset all data? This cannot be undone.')) return;
    localStorage.removeItem('taka_app_data');
    appData = {};
    refreshUI();
    checkFirstLaunch();
}