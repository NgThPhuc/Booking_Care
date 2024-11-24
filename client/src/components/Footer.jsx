const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                {/* Cột thông tin công ty */}
                <div className='company-section'>
                    <h3>Công ty Cổ phần Công nghệ BookingCare</h3>
                    <div className='info-item'>
                        <i className='fas fa-map-marker-alt'></i>
                        <span>
                            Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng
                            Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam
                        </span>
                    </div>
                    <div className='info-item'>
                        <i className='fas fa-shield-alt'></i>
                        <span>
                            ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày
                            16/03/2015
                        </span>
                    </div>
                    <div className='info-item'>
                        <i className='fas fa-phone'></i>
                        <span>024-7301-2468 (7h30 - 18h)</span>
                    </div>
                    <div className='info-item'>
                        <i className='fas fa-envelope'></i>
                        <span>support@bookingcare.vn (7h30 - 18h)</span>
                    </div>

                    <div className='office-hcm'>
                        <h4>Văn phòng tại TP Hồ Chí Minh</h4>
                        <div className='info-item'>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>
                                Tòa nhà H3, 384 Hoàng Diệu, Phường 6, Quận 4,
                                TP.HCM
                            </span>
                        </div>
                    </div>

                    <div className='app-download'>
                        <span>
                            Tải ứng dụng BookingCare cho điện thoại hoặc máy
                            tính bảng:{' '}
                        </span>
                        <div className='download-links'>
                            <a href='#'>Android</a>
                            <span>-</span>
                            <a href='#'>iPhone/iPad</a>
                            <span>-</span>
                            <a href='#'>Khác</a>
                        </div>
                    </div>
                </div>

                {/* Cột liên kết */}
                <div className='links-section'>
                    <div className='logo d-flex gap-2'>
                        <img
                            src='/assets/logo.svg'
                            alt='logo'
                            className='logo-img'
                        />
                        <h5 className='fw-bold mb-0'>BookingCare</h5>
                    </div>
                    <div className='quick-links'>
                        <a href='#'>Liên hệ hợp tác</a>
                        <a href='#'>Chuyển đổi số</a>
                        <a href='#'>Chính sách bảo mật</a>
                        <a href='#'>Quy chế hoạt động</a>
                        <a href='#'>Tuyển dụng</a>
                        <a href='#'>Điều khoản sử dụng</a>
                        <a href='#'>Câu hỏi thường gặp</a>
                        <a href='#'>Sức khỏe doanh nghiệp</a>
                    </div>
                </div>

                {/* Cột đối tác */}
                <div className='partners-section'>
                    <h4>Đối tác bảo trợ nội dung</h4>
                    <div className='partner-items'>
                        {/* Thêm các partner items ở đây */}
                    </div>
                </div>
            </div>

            <div className='footer-bottom'>
                <div className='copyright'>© 2024 BookingCare.</div>
                <div className='social-links'>
                    <a href='#' className='social-icon'>
                        <i className='fab fa-tiktok'></i>
                    </a>
                    <a href='#' className='social-icon'>
                        <i className='fab fa-facebook'></i>
                    </a>
                    <a href='#' className='social-icon'>
                        <i className='fab fa-youtube'></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
