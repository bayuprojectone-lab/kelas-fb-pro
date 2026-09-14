document.addEventListener('DOMContentLoaded', () => {
    const materiData = [
        { title: "1. Mengenal Facebook Professional Mode", videoId: "ioffY7Y1y1k", desc: `<p>Mode Profesional Facebook adalah fitur yang mengubah profil pribadi Anda menjadi platform seperti halaman bisnis, namun tetap mempertahankan sentuhan personal. Ini adalah langkah pertama yang wajib dilakukan bagi calon creator.</p><h4>Manfaat Mode Profesional:</h4><p>- <strong>Akses ke Dashboard Profesional:</strong> Anda bisa melihat insight (reach, engagement, dan audiens) dari setiap konten yang Anda buat.<br>- <strong>Monetisasi:</strong> Membuka peluang untuk mendapatkan penghasilan melalui Stars, Reels Play, dan langganan.<br>- <strong>Jangkauan Lebih Luas:</strong> Algoritma akan lebih mudah menyebarkan konten Anda ke orang di luar daftar teman Anda.</p><h4>Cara Mengaktifkan:</h4><p>Buka profil Facebook Anda > Klik tombol menu (tiga garis) > Pilih "Mode Profesional" > Klik "Aktifkan". Setelah aktif, profil Anda akan memiliki tanda bintang dan menu Dashboard Profesional akan muncul.</p>` },
        { title: "2. Membuat Profil Profesional yang Menarik", videoId: "qL6UMmk7R8Q", desc: `<p>Profil yang profesional adalah etalase pertama yang dilihat audiens. Jika profil Anda berantakan, audiens akan ragu untuk mengikuti atau mempercayai Anda.</p><h4>Unsur Profil Profesional:</h4><p>- <strong>Foto Profil:</strong> Gunakan foto close-up wajah dengan pencahayaan yang baik. Jangan gunakan foto grup atau foto tidak jelas. Tersenyum dan tatap lensa kamera.<br>- <strong>Cover:</strong> Gunakan cover yang merepresentasikan niche/topik Anda. Bisa berupa desain grafis berisi tagline atau foto aktivitas Anda.<br>- <strong>Bio:</strong> Buat bio singkat (1-2 kalimat) yang menjelaskan siapa Anda dan apa nilai yang Anda berikan. Contoh: "Membantu UMKM naik kelas melalui digital marketing".<br>- <strong>Username:</strong> Gunakan username yang mudah diingat, misalnya @NamaAndaProfesi.</p>` },
        { title: "3. Strategi Konten & Content Planning", videoId: "i8m1f5LkRuE", desc: `<p>Konten adalah raja. Tanpa konten yang konsisten dan berkualitas, akun profesional Anda tidak akan bertumbuh. Anda perlu merencanakan konten agar tidak kehabisan ide.</p><h4>Pilar Konten:</h4><p>Bagi konten Anda menjadi 3 pilar utama:<br>1. <strong>Konten Edukasi:</strong> Memberi tahu audiens sesuatu yang bermanfaat (Tips, Tutorial, Fakta).<br>2. <strong>Konten Hiburan/Inspirasi:</strong> Membuat audiens tersenyum, tercekok, atau termotivasi (Storytelling, behind the scene).<br>3. <strong>Konten Promosi:</strong> Menjual produk/jasa tanpa terlihat memaksa (Soft selling).</p><h4>Content Calendar:</h4><p>Buat jadwal posting mingguan. Misalnya: Senin (Tips), Rabu (Inspirasi), Jumat (Promosi). Gunakan fitur Meta Business Suite untuk menjadwalkan konten secara otomatis agar tetap konsisten meskipun Anda sedang sibuk.</p>` },
        { title: "4. Membuat Facebook Reels yang Viral", videoId: "7-1jUtYC8I4", desc: `<p>Reels adalah format video pendek (15-60 detik) yang saat ini mendapatkan jangkauan paling besar di Facebook. Ini adalah senjata utama untuk mendapatkan follower baru.</p><h4>Formula Reels yang Viral:</h4><p>- <strong>Hook (3 Detik Pertama):</strong> Tangkap perhatian audiens dengan kalimat atau visual yang mencolok. Contoh: "Jangan buat kesalahan ini jika ingin viral!"<br>- <strong>Body (Nilai):</strong> Sampaikan inti pesan dengan cepat dan jelas. Gunakan teks di layar agar mudah dipahami tanpa suara.<br>- <strong>Call to Action (CTA):</strong> Akhiri dengan ajakan, misalnya "Follow untuk tips bisnis lainnya" atau "Simpan video ini!".</p><h4>Tips Tambahan:</h4><p>Gunakan musik trending, perbanyak transisi visual, dan pastikan pencahayaan video terang. Upload video Reels dengan resolusi tinggi (1080p).</p>` },
        { title: "5. Monetisasi Facebook sesuai Kebijakan", videoId: "v4-mQ0q2v1g", desc: `<p>Setelah audiens terbangun, saatnya mengubah konten menjadi penghasilan. Facebook menyediakan beberapa jalur monetisasi resmi yang patuh kebijakan.</p><h4>Jalur Monetisasi Utama:</h4><p>- <strong>Stars:</strong> Audiens bisa mengirim virtual gift (Stars) saat Anda live atau membuat video Reels. 1 Star setara dengan Rp 100+.<br>- <strong>Ads on Reels:</strong> Anda akan mendapat persentase dari iklan yang ditampilkan di antara video Reels Anda.<br>- <strong>In-Stream Ads:</strong> Iklan yang muncul di video panjang Anda (minimal 3 menit).<br>- <strong>Brand Partnership:</strong> Kolaborasi dengan brand untuk mempromosikan produk mereka dengan tarif yang Anda tentukan.</p><h4>Syarat Umum Monetisasi:</h4><p>Akun harus beroperasi minimal 30 hari, memiliki minimal 500 followers, dan memenuhi standar konten (tidak melanggar hak cipta atau pedoman komunitas). Pastikan Anda mengecek status kelayakan di menu Dashboard Profesional > Monetisasi.</p>` }
    ];

    let currentMateriIndex = 0;

    const modules = [
        { title: "DASAR FACEBOOK PRO", items: ["Mengenal Facebook Professional Mode", "Membuat profil profesional", "Mengatur nama dan username", "Mengatur foto profil", "Mengatur cover", "Mengatur bio", "Mengatur informasi profil", "Pengaturan privasi"] },
        { title: "PERSONAL BRANDING", items: ["Membuat identitas digital", "Menentukan niche", "Menentukan target audiens", "Membuat bio profesional", "Strategi membangun kepercayaan", "Meningkatkan kredibilitas"] },
        { title: "STRATEGI KONTEN", items: ["Ide konten", "Content planning", "Caption menarik", "Storytelling", "Konten edukasi", "Konten hiburan", "Konten promosi", "Content calendar"] },
        { title: "FACEBOOK REELS", items: ["Mengenal Reels", "Membuat Reels", "Ide video", "Hook video", "Caption", "Hashtag", "Strategi meningkatkan engagement", "Analisis performa Reels"] },
        { title: "MENINGKATKAN FOLLOWER", items: ["Strategi mendapatkan follower", "Meningkatkan engagement", "Membangun komunitas", "Strategi interaksi", "Kesalahan yang harus dihindari"] },
        { title: "FACEBOOK PAGE", items: ["Membuat Facebook Page", "Mengatur Page", "Membuat konten Page", "Mengelola admin", "Insight Page", "Strategi Page untuk bisnis"] },
        { title: "FACEBOOK MARKETING", items: ["Promosi produk", "Promosi jasa", "Marketplace", "Grup Facebook", "Strategi soft selling", "Strategi hard selling", "Membangun customer"] },
        { title: "MONETISASI", items: ["Mengenal monetisasi Facebook", "Persyaratan monetisasi", "Content monetization", "Stars", "Reels", "Brand partnership", "Strategi meningkatkan peluang monetisasi", "Kebijakan dan hal yang harus dihindari"] },
        { title: "ANALYTICS", items: ["Mengenal Professional Dashboard", "Membaca Insight", "Reach", "Views", "Engagement", "Followers", "Performa konten", "Evaluasi konten"] },
        { title: "STRATEGI LANJUTAN", items: ["Content strategy", "Growth strategy", "Personal branding lanjutan", "Membuat sistem konten", "Membangun audiens loyal", "Strategi jangka panjang"] }
    ];

    function showView(viewId) {
        document.querySelectorAll('.view').forEach(v => { v.classList.add('hidden-view'); v.classList.remove('fade-in'); });
        const view = document.getElementById(viewId + '-view');
        if(view) {
            view.classList.remove('hidden-view');
            view.classList.add('fade-in');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        closeMobileMenu();
        if(viewId === 'materi') { renderMateriSidebar(); updateMateriUI(); }
    }

    function toggleMobileMenu() {
        const menu = document.getElementById('mobileMenu');
        if(menu) menu.classList.toggle('hidden');
    }
    function closeMobileMenu() {
        const menu = document.getElementById('mobileMenu');
        if(menu && !menu.classList.contains('hidden')) menu.classList.add('hidden');
    }

    function renderAccordion() {
        const container = document.getElementById('accordionContainer');
        if(!container) return;
        let html = '';
        modules.forEach((mod, index) => {
            html += `<div class="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"><button type="button" data-action="toggleAccordion" data-index="${index}" class="w-full flex justify-between items-center p-6 text-left"><div class="flex items-center"><span class="bg-blue-50 text-fbblue font-bold text-sm px-3 py-1 rounded-full mr-4">MODUL ${String(index + 1).padStart(2, '0')}</span><span class="font-bold text-navy">${mod.title}</span></div><i class="fas fa-chevron-down text-gray-400 transition" id="acc-icon-${index}"></i></button><div class="accordion-content" id="acc-content-${index}"><ul class="px-6 pb-6 space-y-3 text-gray-600 text-sm pl-24">${mod.items.map(item => `<li class="flex items-center"><i class="fas fa-circle text-[6px] text-gold mr-3"></i> ${item}</li>`).join('')}</ul></div></div>`;
        });
        container.innerHTML = html;
    }

    function toggleAccordion(index) {
        const content = document.getElementById(`acc-content-${index}`);
        const icon = document.getElementById(`acc-icon-${index}`);
        if(!content || !icon) return;
        if (content.style.maxHeight && content.style.maxHeight !== '0px') { content.style.maxHeight = '0px'; icon.style.transform = 'rotate(0deg)'; } 
        else { content.style.maxHeight = content.scrollHeight + 'px'; icon.style.transform = 'rotate(180deg)'; }
    }

    function toggleFaq(index) {
        const contents = document.querySelectorAll('.faq-answer');
        const content = contents[index];
        const icon = document.getElementById(`faq-icon-${index}`);
        if(!content || !icon) return;
        if (content.style.maxHeight && content.style.maxHeight !== '0px') { content.style.maxHeight = '0px'; icon.style.transform = 'rotate(0deg)'; } 
        else { content.style.maxHeight = content.scrollHeight + 'px'; icon.style.transform = 'rotate(180deg)'; }
    }

    function renderMateriSidebar() {
        const sidebar = document.getElementById('materi-sidebar');
        if(!sidebar) return;
        let html = '';
        materiData.forEach((materi, index) => {
            html += `<div data-action="selectMateri" data-index="${index}" class="materi-sidebar-item flex items-center text-gray-500 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"><i class="far fa-circle mr-3"></i> ${materi.title}</div>`;
        });
        sidebar.innerHTML = html;
    }

    function changeMateri(direction) {
        if(direction === 'next') {
            if(currentMateriIndex < materiData.length - 1) { currentMateriIndex++; showToast('Pindah ke materi selanjutnya...', 'success'); updateMateriUI(); } 
            else { showToast('Ini sudah materi terakhir di modul ini.', 'info'); }
        } else if(direction === 'prev') {
            if(currentMateriIndex > 0) { currentMateriIndex--; showToast('Kembali ke materi sebelumnya...', 'info'); updateMateriUI(); } 
            else { showToast('Ini sudah materi pertama di modul ini.', 'info'); }
        }
    }

    function selectMateri(index) { currentMateriIndex = index; updateMateriUI(); showToast('Materi dipilih', 'info'); }

    function updateMateriUI() {
        const data = materiData[currentMateriIndex];
        const titleEl = document.getElementById('materi-title');
        const descEl = document.getElementById('materi-desc');
        const videoFrame = document.getElementById('materi-video');
        if(!titleEl || !descEl || !videoFrame) return;
        titleEl.textContent = data.title;
        descEl.innerHTML = data.desc;
        videoFrame.src = `https://www.youtube.com/embed/${data.videoId}`;
        const sidebarItems = document.querySelectorAll('.materi-sidebar-item');
        sidebarItems.forEach((item, index) => {
            const icon = item.querySelector('i');
            if(!icon) return;
            if(index === currentMateriIndex) { item.classList.add('text-navy', 'bg-blue-50', 'font-bold'); item.classList.remove('text-gray-500'); icon.className = 'fas fa-play-circle text-fbblue mr-3'; } 
            else { item.classList.remove('text-navy', 'bg-blue-50', 'font-bold'); item.classList.add('text-gray-500'); icon.className = 'far fa-circle mr-3'; }
        });
        const completeBtn = document.querySelector('.complete-btn');
        if(completeBtn) { completeBtn.classList.remove('bg-gray-400'); completeBtn.classList.add('bg-green-500', 'hover:bg-green-600'); completeBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Tandai Selesai'; }
    }

    function toggleCompleteMateri(btn) {
        if(btn.classList.contains('bg-gray-400')) { btn.classList.remove('bg-gray-400'); btn.classList.add('bg-green-500', 'hover:bg-green-600'); btn.innerHTML = '<i class="fas fa-check mr-2"></i> Tandai Selesai'; showToast('Materi dibatalkan selesai', 'info'); } 
        else { btn.classList.add('bg-gray-400'); btn.classList.remove('bg-green-500', 'hover:bg-green-600'); btn.innerHTML = '<i class="fas fa-check-double mr-2"></i> Selesai'; showToast('✓ Materi telah selesai', 'success'); }
    }

    function toggleAIChat() {
        const widget = document.getElementById('ai-chat-widget');
        const fab = document.getElementById('ai-fab');
        if(!widget || !fab) return;
        if(widget.classList.contains('active')) { widget.classList.remove('active'); fab.classList.remove('hidden'); } 
        else { widget.classList.add('active'); fab.classList.add('hidden'); }
    }

    function sendAIMessage() {
        const input = document.getElementById('ai-input');
        if(!input) return;
        const text = input.value.trim();
        if(!text) return;
        addChatMessage(text, 'user');
        input.value = '';
        const chatBody = document.getElementById('chat-body');
        if(!chatBody) return;
        const typingIndicator = document.createElement('div');
        typingIndicator.id = 'typing-indicator';
        typingIndicator.className = 'flex justify-start';
        typingIndicator.innerHTML = `<div class="chat-bubble-ai px-4 py-3 shadow-sm text-sm flex items-center space-x-1"><span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span><span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span><span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></span></div>`;
        chatBody.appendChild(typingIndicator);
        chatBody.scrollTop = chatBody.scrollHeight;
        setTimeout(() => { const typingEl = document.getElementById('typing-indicator'); if(typingEl) typingEl.remove(); addChatMessage(generateAIResponse(text), 'ai'); }, 1200);
    }

    function addChatMessage(text, sender) {
        const chatBody = document.getElementById('chat-body');
        if(!chatBody) return;
        const wrapper = document.createElement('div');
        wrapper.className = `flex ${sender === 'user' ? 'justify-end' : 'justify-start'}`;
        const bubbleClass = sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai';
        wrapper.innerHTML = `<div class="${bubbleClass} max-w-[80%] px-4 py-3 shadow-sm text-sm">${text}</div>`;
        chatBody.appendChild(wrapper);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function generateAIResponse(text) {
        text = text.toLowerCase();
        if(text.includes('reels') || text.includes('video pendek')) { return "Untuk membuat Reels yang viral, pastikan 3 detik pertama sangat menarik (Hook). Gunakan teks di layar dan audio yang sedang trending. Coba buat video dengan durasi 7-15 detik untuk retention rate tinggi. Cek Modul 04 untuk panduan lengkapnya ya!"; } 
        else if(text.includes('monetisasi') || text.includes('uang') || text.includes('penghasilan')) { return "Syarat utama monetisasi Facebook adalah akun sudah berusia minimal 30 hari dan memiliki minimal 500 followers. Anda bisa mulai dari mendapatkan Stars saat Live atau Ads on Reels. Pastikan konten Anda mematuhi Pedoman Komunitas Facebook. Pelajari detailnya di Modul 08!"; } 
        else if(text.includes('follower') || text.includes('pengikut')) { return "Strategi mendapatkan follower: 1. Konsisten upload Reels (algoritma menyukai video pendek). 2. Berinteraksi di grup publik. 3. Berkolaborasi dengan creator lain. 4. Buat konten edukasi yang bermanfaat agar orang merasa perlu mengikuti Anda."; } 
        else if(text.includes('konten') || text.includes('ide')) { return "Ide konten terbaik adalah yang menjawab masalah audiens. Coba buat 3 pilar konten: Edukasi (Tips/Tutorial), Hiburan (Behind the scene), dan Promosi (Soft selling). Apakah Anda punya niche atau topik spesifik yang ingin dibahas?"; } 
        else if(text.includes('halo') || text.includes('hai')) { return "Halo juga! Senang bisa membantu Anda. Apakah ada pertanyaan seputar Facebook Pro, seperti cara membuat Reels, syarat monetisasi, atau strategi konten? Tanyakan saja!"; } 
        else { return "Itu pertanyaan yang menarik! Dalam kelas Facebook Pro, kita membahas strategi mendalam tentang hal tersebut. Bisa tolong perinci pertanyaan Anda? Misalnya terkait Reels, Monetisasi, atau Strategi Konten?"; }
    }

    function handleRegister() {
        showToast('Pendaftaran berhasil! Silakan lanjut ke pembayaran.', 'success');
        setTimeout(() => showView('payment'), 1000);
    }

    function simulatePayment() {
        showToast('Memproses pembayaran...', 'info');
        setTimeout(() => { showToast('Pembayaran berhasil!', 'success'); showView('payment-success'); }, 1500);
    }

    function logout() { showToast('Berhasil keluar', 'success'); showView('landing'); }

    function showToast(msg, type = 'success') {
        const toast = document.getElementById('toast');
        const icon = document.getElementById('toast-icon');
        const msgEl = document.getElementById('toast-msg');
        if(!toast || !icon || !msgEl) return;
        msgEl.textContent = msg;
        if(type === 'error') icon.className = 'fas fa-times-circle text-red-400 mr-3 text-lg';
        else if(type === 'info') icon.className = 'fas fa-info-circle text-blue-400 mr-3 text-lg';
        else icon.className = 'fas fa-check-circle text-green-400 mr-3 text-lg';
        toast.style.transform = 'translateX(0)';
        setTimeout(() => { toast.style.transform = 'translateX(200%)'; }, 3000);
    }

    // Event Delegation
    document.addEventListener('click', function(e) {
        const target = e.target.closest('[data-action]');
        if (!target) return;
        e.preventDefault();
        const action = target.getAttribute('data-action');
        switch(action) {
            case 'showView': showView(target.getAttribute('data-view')); break;
            case 'toggleMobileMenu': toggleMobileMenu(); break;
            case 'handleRegister': handleRegister(); break;
            case 'simulatePayment': simulatePayment(); break;
            case 'logout': logout(); break;
            case 'toggleAIChat': toggleAIChat(); break;
            case 'sendAIMessage': sendAIMessage(); break;
            case 'changeMateri': changeMateri(target.getAttribute('data-direction')); break;
            case 'toggleCompleteMateri': toggleCompleteMateri(target); break;
            case 'selectMateri': selectMateri(parseInt(target.getAttribute('data-index'))); break;
            case 'toggleAccordion': toggleAccordion(parseInt(target.getAttribute('data-index'))); break;
            case 'toggleFaq': toggleFaq(parseInt(target.getAttribute('data-index'))); break;
        }
    });

    // Direct Listeners (Fallback)
    document.getElementById('btn-register')?.addEventListener('click', handleRegister);
    document.getElementById('btn-pay')?.addEventListener('click', simulatePayment);
    document.getElementById('btn-start-learn')?.addEventListener('click', () => showView('dashboard'));
    document.getElementById('btn-logout-1')?.addEventListener('click', logout);
    document.getElementById('btn-logout-2')?.addEventListener('click', logout);

    document.getElementById('ai-input')?.addEventListener('keydown', (e) => { if(e.key === 'Enter') sendAIMessage(); });

    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) header.classList.add('shadow-md');
        else header.classList.remove('shadow-md');
    });

    renderAccordion();
    showView('landing');
});