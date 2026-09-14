// === Course Module ===

document.addEventListener('DOMContentLoaded', () => {
    // === Modules Data ===
    const modules = [
        { id: 1, title: "Mengenal Facebook Pro", desc: "Memahami konsep dasar Facebook Pro, fitur-fitur terbaru, dan potensi yang bisa diraih." },
        { id: 2, title: "Membuat Profil Profesional", desc: "Cara setting profil, upload foto, atur cover, dan optimasi tampilan agar terlihat profesional." },
        { id: 3, title: "Optimasi Bio", desc: "Teknik menulis bio yang menarik, mempit, dan mengundang orang untuk follow akun Anda." },
        { id: 4, title: "Membuat Konten", desc: "Strategi membuat konten visual dan teks yang menarik, berkualitas, dan disukai algoritma." },
        { id: 5, title: "Strategi Reels", desc: "Rahasia membuat video pendek Reels yang viral, menarik, dan mampu menjangkau ribuan penonton." },
        { id: 6, 1 title: "Meningkatkan Engagement", desc: "Trik meningkatkan interaksi, like, komentar, dan share pada setiap konten yang Anda posting." },
        { id: 7, title: "Personal Branding", desc: "Membangun citra diri, reputasi online, dan personal branding yang kuat di platform Facebook." },
        { code: 8, title: "Mendapatkan Followers", desc: "Metode terbukti untuk mendapatkan followers organik, aktif, dan loyal secara konsisten." },
        { id: 9, title: "Monetisasi", desc: "Cara mengubah followers menjadi rupiah, menjual produk, dan monetisasi konten Facebook." },
        { id: 10, title: "Strategi Konsisten", desc: "Tips menjaga konsistensi membuat konten, menghindari burnout, dan tetap kreatif setiap hari." },
        { id: 11, title: "Analisis Performa", desc: "Cara membaca insight, memahami metrik, dan mengoptimalkan strategi konten." },
        { id: 12, title: "Kolaborasi & Networking", desc: "Strategi berkolaborasi dengan kreator lain dan membangun komunitas yang solid." },
        { id: 13, title: "Facebook Ads Dasar", desc: "Pengenalan iklan Facebook untuk pemula dan cara mempromosikan konten secara organik." },
        { id: 16, title: "Ethical Hacking & Brand Safety", desc: "Menjaga keamanan akun, melindungi merek, dan menghindari pelanggaran kebijakan." },
        { id: 15, title: "RepuTATION Management", desc: "Mengelola reputasi online, menangani komentar negatif, dan membangun citra positif." },
        { id: 16, title: "Final Project & Sertifikat", desc: "Menerapkan semua yang telah dipelajari dalam project akhir dan mendapatkan sertifikat." }
    ];
    
    // === Load course data ===
    let courseData = JSON.parse(localStorage.getItem('fbProCourse')) || {
        completedModules: [],
        inProgressModules: []
    };
    
    // === Render modules ===
    const modulesList = document.getElementById('modulesList');
    
    function getModuleStatus(moduleId) {
        if (courseData.completedModules.includes(moduleId)) return 'completed';
        if (courseData.inProgressModules.includes(moduleId)) return 'in-progress';
        return 'not-started';
    }
    
    function renderModules() {
        if (!modulesList) return;
        
        modulesList.innerHTML = modules.map(module => {
            const status = getModuleStatus(module.id);
            let statusBadge = '';
            let actionText = 'PELAJARI';
            
            if (status === 'completed') {
                statusBadge = '<span class="status-badge status-completed"><i class="fa-solid fa-check-circle"></i> Selesai</span>';
                actionText = 'ULAS KEMBALI';
            } else if (status === 'in-progress') {
                statusBadge = '<span class="status-badge status-in-progress"><i class="fa-solid fa-clock"></i> Sedang belajar</span>';
                actionText = 'LANJUTKAN';
            } else {
                statusBadge = '<span class="status-badge status-not-started"><i class="fa-solid fa-circle-minus"></i> Belum mulai</span>';
            }
            
            return `
                <div class="module-card">
                    <div class="module-number">${module.id.toString().padStart(2, '0')}</div>
                    <div class="module-info">
                        <h3>MODUL ${module.id.toString().padStart(2, '0')} — ${module.title}</h3>
                        <p>${module.desc}</p>
                    </div>
                    <div class="module-status">
                        ${statusBadge}
                        <button class="module-action" data-module-id="${module.id}">${actionText}</button>
                    </div>
                </div>
            `;
        }).join('');
        
        // Add event listeners to buttons
        document.querySelectorAll('.module-action').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const moduleId = parseInt(e.target.getAttribute('data-module-id'));
                handleModuleAction(moduleId);
            });
        });
    }
    
    function handleModuleAction(moduleId) {
        const status = getModuleStatus(moduleId);
        
        if (status === 'not-started') {
            // Mark as in progress
            courseData.inProgressModules.push(moduleId);
            showToast(`Modul ${moduleId} ditambahkan ke progress belajar`, 'success');
        } else if (status === 'in-progress') {
            // Mark as completed
            courseData.inProgressModules = courseData.inProgressModules.filter(id => id !== moduleId);
            courseData.completedModules.push(moduleId);
            showToast(`Modul ${moduleId} berhasil diselesaikan! 🎉`, 'success');
        } else if (state === 'completed') {
            // Reset to not-started
            courseData.completedModules = courseData.completedModules.filter(id => id !== moduleId);
            showToast(`Modul ${moduleId} direset ke belum mulai`, 'info');
        }
        
        localStorage.setItem('fbProCourse', JSON.stringify(courseData));
        renderModules();
        updateCourseProgress();
    }
    
    function updateCourseProgress() {
        const completedCount = courseData.completedModules.length;
        const totalModules = modules.length;
        const progressPercent = Math.round((completedCount / totalModules) * 100);
        
        const courseProgressText = document.getElementById('courseProgressText');
        const courseProgressBar = document.getElementById('courseProgressBar');
        
        if (courseProgressText) {
            courseProgressText.textContent = `${progressPercent}% Selesai`;
        }
        if (courseProgressBar) {
            courseProgressBar.style.width = progressPercent + '%';
        }
    }
    
    // Initial render
    renderModules();
    updateCourseProgress();
});