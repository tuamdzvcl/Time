function updateCountdown() {
    const now = new Date();
    
    // Lấy thời gian hiện tại ở múi giờ VN (chuyển đổi thành string rồi parse lại)
    const vnTimeString = now.toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' });
    const vnTime = new Date(vnTimeString);
    
    // Lấy thời điểm cuối ngày (23:59:59.999) của ngày hiện tại ở Việt Nam
    const endOfDayVn = new Date(vnTime);
    endOfDayVn.setHours(23, 59, 59, 999);
    
    // Tính thời gian chênh lệch (mili giây)
    const diff = endOfDayVn.getTime() - vnTime.getTime();
    
    if (diff <= 0) {
        // Đã hết ngày
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('message').textContent = 'Ngày hôm nay đã kết thúc!';
        return;
    }
    
    // Tính toán số giờ, phút, giây còn lại
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Cập nhật giao diện với số 0 ở trước nếu số nhỏ hơn 10
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    document.getElementById('message').textContent = 'Hãy cố gắng hoàn thành công việc hôm nay nhé!';
}

// Cập nhật đếm ngược mỗi giây
setInterval(updateCountdown, 1000);

// Khởi chạy lần đầu tiên ngay lập tức để không bị delay 1s
updateCountdown();
