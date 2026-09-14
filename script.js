// State management
let appState = {
    stage: 1,
    date: '',
    time: '',
    location: '',
    details: '',
    rejectionCount: 0
};

// Location translations
const locationNames = {
    cafe: '☕ Кафе',
    walk: '🚶 Прогулка',
    cinema: '🎬 Кино',
    restaurant: '🍽️ Ресторан'
};

const detailsMap = {
    // Cafe options
    italian: 'Итальянская кухня',
    asian: 'Азиатская кухня',
    georgian: 'Грузинская кухня',
    russian: 'Русская кухня',
    international: 'Интернациональная кухня',
    desserts: 'Десерты и напитки',
    
    // Walk options
    oak_park: 'Парк Панфилова (Дубовый парк)',
    ala_too: 'Площадь Ала-Тоо',
    issyk_kul: 'Озеро Иссык-Куль',
    mall: 'ТЦ Караван',
    city_center: 'Центр города',
    botanical: 'Ботанический сад',
    
    // Cinema options
    romance: 'Романтический фильм',
    comedy: 'Комедия',
    action: 'Боевик',
    thriller: 'Триллер',
    drama: 'Драма',
    fantasy: 'Фэнтези',
    
    // Restaurant options
    fine_dining: 'Французская кухня',
    japanese: 'Японская кухня',
    steakhouse: 'Стейк-хаус',
    korean: 'Корейская кухня',
    central_asian: 'Среднеазиатская кухня',
    seafood: 'Морепродукты'
};

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeStage1();
});

// Stage 1: Initial Question
function initializeStage1() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    yesBtn.addEventListener('click', () => {
        appState.stage = 3;
        showStage(3);
    });

    noBtn.addEventListener('click', () => {
        appState.rejectionCount++;
        if (appState.rejectionCount === 1) {
            appState.stage = 2;
            showStage(2);
        } else {
            appState.stage = 7;
            showStage(7);
        }
    });
}

// Stage 2: Second Chance
function initializeStage2() {
    const yesBtn2 = document.getElementById('yesBtn2');
    const noBtn2 = document.getElementById('noBtn2');

    yesBtn2.addEventListener('click', () => {
        appState.stage = 3;
        showStage(3);
    });

    noBtn2.addEventListener('click', () => {
        appState.stage = 7;
        showStage(7);
    });
}

// Stage 3: Date Selection
function initializeStage3() {
    const nextDateBtn = document.getElementById('nextDateBtn');
    const dateInput = document.getElementById('dateInput');

    nextDateBtn.addEventListener('click', () => {
        if (dateInput.value) {
            appState.date = dateInput.value;
            appState.stage = 4;
            showStage(4);
        } else {
            alert('Пожалуйста, выбери дату!');
        }
    });

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
}

// Stage 4: Time Selection
function initializeStage4() {
    const nextTimeBtn = document.getElementById('nextTimeBtn');
    const timeInput = document.getElementById('timeInput');

    nextTimeBtn.addEventListener('click', () => {
        if (timeInput.value) {
            appState.time = timeInput.value;
            appState.stage = 5;
            showStage(5);
        } else {
            alert('Пожалуйста, выбери время!');
        }
    });
}

// Stage 5: Location Selection
function initializeStage5() {
    const locationBtns = document.querySelectorAll('.location-btn');

    locationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove selection from all buttons
            locationBtns.forEach(b => b.classList.remove('selected'));
            
            // Add selection to clicked button
            btn.classList.add('selected');
            
            const location = btn.dataset.location;
            appState.location = location;

            // Show appropriate sub-stage based on location
            setTimeout(() => {
                if (location === 'cafe') {
                    appState.stage = '5a';
                    showStage('5a');
                } else if (location === 'walk') {
                    appState.stage = '5b';
                    showStage('5b');
                } else if (location === 'cinema') {
                    appState.stage = '5c';
                    showStage('5c');
                } else if (location === 'restaurant') {
                    appState.stage = '5d';
                    showStage('5d');
                }
            }, 300);
        });
    });
}

// Stage 5a: Cafe Options
function initializeStage5a() {
    const optionBtns = document.querySelectorAll('#stage5a .option-btn');

    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            appState.details = btn.dataset.option;
            showTicket();
            appState.stage = 6;
            showStage(6);
        });
    });
}

// Stage 5b: Walk Options
function initializeStage5b() {
    const optionBtns = document.querySelectorAll('#stage5b .option-btn');

    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            appState.details = btn.dataset.option;
            showTicket();
            appState.stage = 6;
            showStage(6);
        });
    });
}

// Stage 5c: Cinema Options
function initializeStage5c() {
    const optionBtns = document.querySelectorAll('#stage5c .option-btn');

    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            appState.details = btn.dataset.option;
            showTicket();
            appState.stage = 6;
            showStage(6);
        });
    });
}

// Stage 5d: Restaurant Options
function initializeStage5d() {
    const optionBtns = document.querySelectorAll('#stage5d .option-btn');

    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            appState.details = btn.dataset.option;
            showTicket();
            appState.stage = 6;
            showStage(6);
        });
    });
}

// Stage 6: Ticket Display
function initializeStage6() {
    const downloadBtn = document.getElementById('downloadBtn');
    const shareBtn = document.getElementById('shareBtn');

    downloadBtn.addEventListener('click', downloadTicket);
    shareBtn.addEventListener('click', shareTicket);
}

// Stage 7: Rejection
function initializeStage7() {
    const restartBtn = document.getElementById('restartBtn');

    restartBtn.addEventListener('click', () => {
        // Reset state
        appState = {
            stage: 1,
            date: '',
            time: '',
            location: '',
            details: '',
            rejectionCount: 0
        };
        showStage(1);
    });
}

// Show/Hide Stages
function showStage(stageNum) {
    // Hide all stages
    const allStages = document.querySelectorAll('.stage');
    allStages.forEach(stage => stage.classList.remove('active'));

    // Show current stage
    const currentStage = document.getElementById(`stage${stageNum}`);
    if (currentStage) {
        currentStage.classList.add('active');
    }

    // Initialize stage-specific event listeners
    if (stageNum === 2) {
        initializeStage2();
    } else if (stageNum === 3) {
        initializeStage3();
    } else if (stageNum === 4) {
        initializeStage4();
    } else if (stageNum === 5) {
        initializeStage5();
    } else if (stageNum === '5a') {
        initializeStage5a();
    } else if (stageNum === '5b') {
        initializeStage5b();
    } else if (stageNum === '5c') {
        initializeStage5c();
    } else if (stageNum === '5d') {
        initializeStage5d();
    } else if (stageNum === 6) {
        initializeStage6();
    } else if (stageNum === 7) {
        initializeStage7();
    }
}

// Display Ticket
function showTicket() {
    const ticketDate = document.getElementById('ticketDate');
    const ticketTime = document.getElementById('ticketTime');
    const ticketLocation = document.getElementById('ticketLocation');
    const ticketDetails = document.getElementById('ticketDetails');

    // Format date
    const dateObj = new Date(appState.date);
    const formattedDate = dateObj.toLocaleDateString('ru-RU', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    ticketDate.textContent = formattedDate;
    ticketTime.textContent = appState.time;
    ticketLocation.textContent = locationNames[appState.location];
    ticketDetails.textContent = detailsMap[appState.details];
}

// Download Ticket
function downloadTicket() {
    const ticket = document.querySelector('.ticket');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Fill background
    ctx.fillStyle = '#f5f5f5';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add text
    ctx.fillStyle = '#764ba2';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('💖 БИЛЕТ НА СВИДАНИЕ 💖', canvas.width / 2, 50);

    // Add details
    ctx.fillStyle = '#333';
    ctx.font = '20px Arial';
    ctx.textAlign = 'left';
    
    const y = 120;
    const lineHeight = 80;
    
    ctx.fillText(`📅 Дата: ${document.getElementById('ticketDate').textContent}`, 50, y);
    ctx.fillText(`🕐 Время: ${appState.time}`, 50, y + lineHeight);
    ctx.fillText(`📍 Место: ${locationNames[appState.location]}`, 50, y + lineHeight * 2);
    ctx.fillText(`✨ Выбор: ${detailsMap[appState.details]}`, 50, y + lineHeight * 3);

    // Convert to image and download
    canvas.toBlob(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'date-ticket.png';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });
}

// Share Ticket
function shareTicket() {
    const text = `Я пригласила тебя на свидание! 💕\n\n📅 Дата: ${document.getElementById('ticketDate').textContent}\n🕐 Время: ${appState.time}\n📍 Место: ${locationNames[appState.location]}\n✨ Выбор: ${detailsMap[appState.details]}\n\nЭто будет лучшее свидание в нашей жизни! ✨`;

    if (navigator.share) {
        navigator.share({
            title: 'Приглашение на свидание',
            text: text
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            alert('Билет скопирован в буфер обмена! 📋');
        });
    }
}

// Format time display
function formatTime(time) {
    return time;
}

// Log all data when ticket is shown
function logDateData() {
    console.log('=== ДАТА СВИДАНИЯ ===');
    console.log('Дата:', document.getElementById('ticketDate').textContent);
    console.log('Время:', appState.time);
    console.log('Место:', locationNames[appState.location]);
    console.log('Детали:', detailsMap[appState.details]);
    console.log('====================');
}
