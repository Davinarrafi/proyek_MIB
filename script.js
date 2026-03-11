// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function showPage(id, btn) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
    btn.classList.add('active');
}

// ─── CHART DEFAULTS ───────────────────────────────────────────────────────────
Chart.defaults.font.family = "'DM Sans', sans-serif";
Chart.defaults.color = '#8A909E';

const palette = ['#4F7EF7', '#34C98F', '#F76B4F', '#A78BF5', '#FBBF24'];

const baseOpts = (extra = {}) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, ...extra.plugins },
    ...extra
});

// ─── HOME CHARTS ──────────────────────────────────────────────────────────────
new Chart(document.getElementById('h-financeChart'), {
    type: 'doughnut',
    data: {
        labels: ['Rawat Jalan', 'Rawat Inap', 'Farmasi', 'Loket & Lain'],
        datasets: [{ data: [350, 432, 264, 154], backgroundColor: palette, borderWidth: 0 }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, padding: 14 } } }
    }
});

new Chart(document.getElementById('h-waitChart'), {
    type: 'bar',
    data: {
        labels: ['Poli Gigi', 'Poli Anak', 'Kandungan', 'Poli Dalam', 'Poli Mata'],
        datasets: [{ label: 'Menit', data: [15, 25, 45, 30, 20], backgroundColor: '#4F7EF7', borderRadius: 5 }]
    },
    options: {
        ...baseOpts(),
        indexAxis: 'y',
        scales: { x: { grid: { display: false } }, y: { grid: { display: false } } }
    }
});

new Chart(document.getElementById('h-staffChart'), {
    type: 'bar',
    data: {
        labels: ['Gigi', 'Anak', 'Kandungan', 'Dalam'],
        datasets: [{ label: 'Pasien/Dokter', data: [4, 8, 6, 10], backgroundColor: '#A78BF5', borderRadius: 5 }]
    },
    options: {
        ...baseOpts(),
        scales: {
            y: { beginAtZero: true, grid: { color: '#F0EDE8' } },
            x: { grid: { display: false } }
        }
    }
});

new Chart(document.getElementById('h-patientChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        datasets: [{
            data: [400, 300, 550, 450, 600, 700],
            borderColor: '#34C98F',
            backgroundColor: 'rgba(52,201,143,0.12)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#34C98F',
            pointRadius: 4
        }]
    },
    options: {
        ...baseOpts(),
        scales: {
            y: { beginAtZero: true, grid: { color: '#F0EDE8' } },
            x: { grid: { display: false } }
        }
    }
});

// ─── SERVICE QUALITY CHARTS ───────────────────────────────────────────────────
new Chart(document.getElementById('s-satisfactionChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        datasets: [{
            data: [4.1, 4.0, 4.2, 4.3, 4.4, 4.5],
            borderColor: '#A78BF5',
            backgroundColor: 'rgba(167,139,245,0.12)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#A78BF5',
            pointRadius: 5
        }]
    },
    options: {
        ...baseOpts(),
        scales: {
            y: { min: 3.5, max: 5, grid: { color: '#F0EDE8' } },
            x: { grid: { display: false } }
        }
    }
});

new Chart(document.getElementById('s-newPatientChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        datasets: [{
            data: [400, 300, 550, 450, 600, 700],
            borderColor: '#34C98F',
            backgroundColor: 'rgba(52,201,143,0.12)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#34C98F',
            pointRadius: 5
        }]
    },
    options: {
        ...baseOpts(),
        scales: {
            y: { beginAtZero: true, grid: { color: '#F0EDE8' } },
            x: { grid: { display: false } }
        }
    }
});

new Chart(document.getElementById('s-waitChart'), {
    type: 'bar',
    data: {
        labels: ['Poli Gigi', 'Poli Anak', 'Poli Kandungan', 'Poli Dalam', 'Poli Mata'],
        datasets: [
            {
                label: 'Waktu Tunggu (Menit)',
                data: [15, 25, 45, 30, 20],
                backgroundColor: ['#34C98F', '#34C98F', '#F76B4F', '#FBBF24', '#34C98F'],
                borderRadius: 5
            },
            {
                label: 'Target (30 menit)',
                data: [30, 30, 30, 30, 30],
                type: 'line',
                borderColor: '#F76B4F',
                borderDash: [6, 4],
                borderWidth: 2,
                pointRadius: 0,
                fill: false,
                tension: 0
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: true, position: 'bottom', labels: { boxWidth: 10, padding: 14 } } },
        scales: {
            y: { beginAtZero: true, grid: { color: '#F0EDE8' } },
            x: { grid: { display: false } }
        }
    }
});

// ─── FINANCE CHARTS ───────────────────────────────────────────────────────────
new Chart(document.getElementById('f-pieChart'), {
    type: 'doughnut',
    data: {
        labels: ['Rawat Jalan', 'Rawat Inap', 'Farmasi', 'Loket & Lain'],
        datasets: [{ data: [350, 432, 264, 154], backgroundColor: palette, borderWidth: 0, hoverOffset: 6 }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, padding: 16 } } }
    }
});

new Chart(document.getElementById('f-revenueChart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        datasets: [{
            label: 'Total Pendapatan (Juta Rp)',
            data: [940, 795, 1040, 1085, 1150, 1200],
            backgroundColor: ['#4F7EF7','#F76B4F','#4F7EF7','#4F7EF7','#4F7EF7','#4F7EF7'],
            borderRadius: 5
        }]
    },
    options: {
        ...baseOpts(),
        scales: {
            y: { beginAtZero: false, min: 700, grid: { color: '#F0EDE8' } },
            x: { grid: { display: false } }
        }
    }
});