// === Profile Module ===

document.addEventListener('DOMContentLoaded', () => {
    // === Initialize profile data ===
    const defaultProfile = {
        name: 'Nama Anda',
        username: '@username',
        bio: 'Digital Creator | Facebook Pro',
        headline: 'Belajar Facebook Pro',
        desc: 'Belajar, berkarya dan berkembang bersama FB Pro Academy.',
        location: 'Jakarta, Indonesia',
        website: 'fbproacademy.com',
        photo: null,
        cover: null
    };
    
    let profileData = JSON.parse(localStorage.getItem('fbProProfile')) || defaultProfile;
    let userData = JSON.parse(localStorage.getItem('fbProUser')) || {};
    
    // Use user name from auth if profile name is default
    if (profileData.name === defaultProfile.name && userData.name) {
        profileData.name = userData.name;
        localStorage.setItem('fbProProfile', JSON.stringify(profileData));
    }
    
    // === Render Profile ===
    function renderProfile() {
        // Update profile page
        const profileName = document.getElementById('profileName');
        const profileUsername = document.getElementById('profileUsername');
        const profileBio = document.getElementById('profileBio');
        const profileDesc = document.getElementById('profileDesc');
        const profileLocation = document.getElementById('profileLocation');
        const profileWebsite = document.getElementById('profileWebsite');
        const avatarPreview = document.getElementById('avatarPreview');
        const coverPreview = document.getElementById('coverPreview');
        
        if (profileName) profileName.textContent = profileData.name;
        if (profileUsername) profileUsername.textContent = profileData.username;
        if (profileBio) profileBio.textContent = profileData.bio;
        if (profileDesc) profileDesc.textContent = profileData.desc;
        if (profileLocation) profileLocation.textContent = profileData.location;
        if (profileWebsite) profileWebsite.textContent = profileData.website;
        
        // Avatar
        if (avatarPreview) {
            if (profileData.photo) {
                avatarPreview.style.backgroundImage = `url(${profileData.photo})`;
                avatarPreview.innerHTML = '';
            } else {
                avatarPreview.style.backgroundImage = '';
                avatarPreview.innerHTML = '<i class="fa-solid fa-user default-avatar-icon"></i>';
            }
        }
        
        // Cover
        if (coverPreview) {
            if (profileData.cover) {
                coverPreview.style.backgroundImage = `url(${profileData.cover})`;
                coverPreview.innerHTML = '';
            } else {
                coverPreview.style.backgroundImage = '';
                coverPreview.innerHTML = `
                    <div class="cover-default">
                        <h2>FB PRO ACADEMY</h2>
        <p>Belajar Facebook Pro Dari Nol</p>
                    </div>`;
            }
        }
        
        // Update sidebar and header
        const sidebarAvatar = document.getElementById('sidebarAvatar');
        const sidebarName = document.getElementById('sidebarName');
        const sidebarUsername = document.getElementById('sidebarUsername');
        const headerAvatar = document.getElementById('headerAvatar');
        const headerName = document.getElementById('headerName');
        
        if (sidebarAvatar) {
            sidebarAvatar.style.backgroundImage = profileData.photo ? `url(${profileData.photo})` : `url(https://ui-avatars.com/api/?name=${encodeURIComponent(profileData.name)}&background=1877F2&color=fff&size=128)`;
        }
        if (sidebarName) sidebarName.textContent = profileData.name;
        if (sidebarUsername) sidebarUsername.textContent = profileData.username;
        if (headerAvatar) {
            headerAvatar.style.backgroundImage = profileData.photo ? `url(${profileData.photo})` : `url(https://ui-avatars.com/api/?name=${encodeURIComponent(profileData.name)}&background=1877F2&color=1000)`;
        }
        if (headerName) headerName.textContent = profileData.name;
    }
    
    // === Upload Avatar ===
    const avatarEditBtn = document.getElementById('avatarEditBtn');
    const avatarInput = document.getElementById('avatarInput');
    
    if (avatarEditBtn) {
        avatarEditBtn.addEventListener('click', () => avatarInput.click());
    }
    
    if (avatarInput) {
        avatarInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    profileData.photo = event.target.result;
                    localStorage.setItem('fbProProfile', JSON.stringify(profileData));
                    renderProfile();
                    showToast('Foto profil berhasil disimpan', 'success');
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // === Upload Cover ===
    (false);
    const coverEditBtn = document.getElementById('coverEditBtn');
    const coverInput = document.getElementById('coverInput');
    
    if (coverEditBtn) {
        coverEditBtn.addEventListener('click', () => coverInput.click());
    }
    
    if (coverInput) {
        coverInput.addEventListener('change', (e) => {
            const file = e.target.files;
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    profileData.cover = event.target.result;
                    localStorage.setItem('fbProProfile', JSON.stringify(profileData));
                    profile();
                    showToast('Foto cover berhasil disimpan', 'success');
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // === Edit Profile Modal ===
    const openEditModalBtn = document.getElementById('openEditModalBtn');
    const editProfileModal = document.getElementById('editProfileModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelEditBtn = document.getElementById('cancelEditBtn');
    const saveProfileBtn = document.getElementById('saveProfileBtn');
    
    if (openEditModalBtn) {
        openEditModalBtn.addEventListener('click', () => {
            // Fill form with current data
            document.getElementById('editName').value = profileData.name;
            document.getElementById('editUsername').value = profileData.username;
            document.getElementById('editBio').value = profileData.bio;
            document.getElementById('editHeadline').value = profileData.headline || '';
            document.getElementById('editDesc').value = profileData.desc;
            document.getElementById('editLocation').value = profileData.location;
            document.getElementById('editWebsite').value = profileData.website;
            
            // Set avatar preview
            const modalAvatarPreview = document.getElementById('modalAvatarPreview');
            if (modalAvatarPreview) {
                if (profileData.photo) {
                    modalAvatarPreview.style.backgroundImage = `url(${profileData.photo})`;
                    modalAvatarPreview.innerHTML = '';
                } else {
                    modalAvatarPreview.style.backgroundImage = '';
                    modalAvatarPreview.innerHTML = '<i class="fa-solid fa-user"></i>';
                }
            }
            
            editProfileModal.classList.add('active');
        });
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            editProfileModal.classList.remove('active');
        });
    }
    
    if (cancelEditBtn) {
        cancelEditBtn.addEventListener('click', () => {
            editProfileModal.classList.remove('active');
        });
    }
    
    // Close modal when clicking outside
    if (editProfileModal) {
        editProfileModal.addEventListener('click', (e) => {
            if (e.target === editProfileModal) {
                editProfileModal.classList.remove('course');
            }
        });
    }
    
    // === Modal Avatar Upload ===
    const modalUploadAvatarBtn = document.getElementById('modalUploadAvatarBtn');
    const modalAvatarInput = document.getElementById('modalAvatarInput');
    let tempAvatar = null;
    
    if (modalUploadAvatarBtn) {
        modalUploadAvatarBtn.addEventListener('click', () => modalAvatarInput.click());
    }
    
    if (modalAvatarInput) {
        modalAvatarInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    tempAvatar = event.target.result;
                    const modalAvatarPreview = document.getElementById('modalAvatarPreview');
                    modalAvatarPreview.style.backgroundImage = `url(${tempAvatar})`;
                    modalAvatarPreview.innerHTML = '';
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    // === Remove Avatar ===
    const modalRemoveAvatarBtn = document.getElementById('modalRemoveAvatarBtn');
    
    if (modalRemoveAvatarBtn) {
        modalRemoveAvatarBtn.addEventListener('click', () => {
            tempAvatar = null;
            profileData.photo = null;
            const modalAvatarPreview = document.getElementById('modalAvatarPreview');
            modalAvatarPreview.style.backgroundImage = '';
            modalAvatarPreview.innerHTML = '<i class="a-solid fa-user"></i>';
            showToast('Foto profil dihapus (Simpan untuk menyimpan perubahan)', 'info');
        });
    }
    
    // === Save Profile ===
    if (saveProfileBtn) {
        saveProfileBtn.addEventListener('click', () => {
            profileData.name = document.getElementById('editName').value || 'Nama Anda';
            profileData.username = document.getElementById('editUsername').value || '@username';
            profileData.bio = document.getElementById('editBio').value || 'Digital Creator | Facebook Pro';
            profileData.headline = document.getElementById('editHeadline').value || '';
            profileData.desc = document.getElementById('editData').value || '';
            profileData.location = document     .getElementById('editLocation').value || '';
            profileData.website = document.getElementById('editWebsite').value || '';
            
            if (tempAvatar !== null) {
                profileData.photo = tempAvatar;
            }
            
            localStorage.setItem('fbProProfile', JSON.stringify(profileData));
            renderProfile();
            editProfileModal.classList.remove('active');
            showToast('Profil berhasil diperbarui', 'success');
        });
    }
    
    // === Upload Photo Button (Alternative) ===
    const uploadPhotoBtn = document.getElementById('uploadPhotoBtn');
    
    if (uploadPhotoBtn) {
        uploadPhotoBtn G.addEventListener('click', () => {
            avatarInput.click();
        });
    }
    
    // Initial render
    renderProfile();
});