// Initialize data
const classroomData = {
    'A1L03': { hallNo: 'A1L03', program: 'First Year CSE B', benches: 45, projector: 'working', cpu: 'working', status: 'available' },
    'A1L04': { hallNo: 'A1L04', program: 'First Year AIML', benches: 45, projector: 'faulty', cpu: 'working', status: 'occupied' },
    'B1L05': { hallNo: 'B1L05', program: 'First Year EEE', benches: 42, projector: 'working', cpu: 'faulty', status: 'available' },
};

// Section Navigation
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
}

// Modal Functions
function openModal(title = 'Add New Classroom') {
    const modal = document.getElementById('modal');
    document.getElementById('modalTitle').textContent = title;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

// Add New Classroom
function addNewClassroom() {
    openModal('Add New Classroom');
}

// Edit Classroom
function editClassroom(hallNo) {
    openModal('Edit Classroom - ' + hallNo);
    const data = classroomData[hallNo];
    if (data) {
        document.getElementById('hallNumber').value = data.hallNo;
        document.getElementById('program').value = data.program;
        document.getElementById('benches').value = data.benches;
        document.getElementById('projectorStatus').value = data.projector;
        document.getElementById('cpuStatus').value = data.cpu;
        document.getElementById('currentStatus').value = data.status;
    }
}

// Add Equipment
function addEquipment() {
    openModal('Add New Equipment');
}

// View Equipment Details
function viewEquipmentDetails(id) {
    showNotification('Viewing details for ' + id);
}

// Battery Functions
function replaceBattery(classroom) {
    showNotification('Battery replacement scheduled for ' + classroom);
}

function scheduleBatteryReplacement(classroom) {
    showNotification('Replacement scheduled for ' + classroom);
}

function addBatteryRecord() {
    showNotification('Recording new battery change...');
}

function viewBatteryLog(classroom) {
    showNotification('Viewing battery log for ' + classroom);
}

// Maintenance Functions
function scheduleService() {
    openModal('Schedule Maintenance Service');
}

// Report Functions
function generateReport(type) {
    const reportTypes = {
        'classroom-status': 'Classroom Status Report generated successfully!',
        'equipment-health': 'Equipment Health Report generated successfully!',
        'maintenance-schedule': 'Maintenance Schedule Report generated successfully!',
        'battery-status': 'Battery Status Report generated successfully!'
    };
    showNotification(reportTypes[type] || 'Report generated!');
}

// Notification System
function showNotification(message) {
    const notification = document.getElementById('notification');
    document.getElementById('notificationText').textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Form Submission
document.getElementById('formData')?.addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification('Classroom data saved successfully!');
    closeModal();
    this.reset();
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Search functionality
document.getElementById('searchInput')?.addEventListener('keyup', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const tableRows = document.querySelectorAll('.data-table tbody tr');
    tableRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Classroom Infrastructure Management System Loaded');
    showNotification('Welcome to RAMCO Institute Classroom Management System!');
});

// Add responsive menu toggle
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}
