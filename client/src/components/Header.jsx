import { PiHandshakeFill } from 'react-icons/pi';
import { MdOutlineSchedule } from 'react-icons/md';
import { TiThMenu } from 'react-icons/ti';
import { FaFacebook, FaSearch, FaTiktok, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [activeLink, setActiveLink] = useState('all');
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className='header-container'>
            <div className='header-content d-flex justify-content-between align-items-center'>
                <div className='logo-section d-flex align-items-center gap-2'>
                    <TiThMenu
                        className='menu-icon'
                        onClick={() => setShowSidebar(!showSidebar)}
                    />
                    <img
                        src='/assets/logo.svg'
                        alt='logo'
                        className='logo-img'
                    />
                    <h3 className='fw-bold mb-0'>BookingCare</h3>
                </div>

                <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
                    <div className='sidebar-content'>
                        <ul>
                            <li>
                                <Link to='/'>Trang chủ</Link>
                            </li>
                            <li>
                                <Link to='/features'>Cẩm nang</Link>
                            </li>
                            <li>
                                <Link to='/cooperation'>Liên hệ hợp tác</Link>
                            </li>
                            <li>
                                <Link to='/business-health'>
                                    Sức khỏe doanh nghiệp
                                </Link>
                            </li>
                            <li>
                                <Link to='/clinic-conversion'>
                                    Chuyển đổi số Phòng khám
                                </Link>
                            </li>
                            <li>
                                <Link to='/recruitment'>Tuyển dụng</Link>
                            </li>

                            <li className='section-title'>VỀ BOOKINGCARE</li>
                            <li>
                                <Link to='/for-patients'>
                                    Dành cho bệnh nhân
                                </Link>
                            </li>
                            <li>
                                <Link to='/for-doctors'>Dành cho bác sĩ</Link>
                            </li>
                            <li>
                                <Link to='/about'>Vai trò của BookingCare</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Liên hệ</Link>
                            </li>
                            <li>
                                <Link to='/faq'>Câu hỏi thường gặp</Link>
                            </li>
                            <li>
                                <Link to='/terms'>Điều khoản sử dụng</Link>
                            </li>
                            <li>
                                <Link to='/complaints'>
                                    Quy trình hỗ trợ giải quyết khiếu nại
                                </Link>
                            </li>
                            <li>
                                <Link to='/rules'>Quy chế hoạt động</Link>
                            </li>

                            <li className='social-icons'>
                                <a href='#'>
                                    <FaFacebook />
                                </a>
                                <a href='#'>
                                    <FaYoutube />
                                </a>
                                <a href='#'>
                                    <FaTiktok />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='nav-section'>
                    <div className='d-flex align-items-center gap-4'>
                        <Link
                            className={`nav-link ${
                                activeLink === 'all' ? 'active' : ''
                            }`}
                            onClick={() => setActiveLink('all')}
                            to='/home'
                        >
                            Tất cả
                        </Link>
                        <Link
                            className={`nav-link ${
                                activeLink === 'home' ? 'active' : ''
                            }`}
                            onClick={() => setActiveLink('home')}
                            to='/at-home'
                        >
                            Tại nhà
                        </Link>
                        <Link
                            className={`nav-link ${
                                activeLink === 'hospital' ? 'active' : ''
                            }`}
                            onClick={() => setActiveLink('hospital')}
                            to='/at-hospital'
                        >
                            Tại viện
                        </Link>
                        <Link
                            className={`nav-link ${
                                activeLink === 'health' ? 'active' : ''
                            }`}
                            onClick={() => setActiveLink('health')}
                            to='/blogs'
                        >
                            Sống khỏe
                        </Link>
                        <div className='search-container'>
                            <input
                                type='text'
                                placeholder='Tìm gói khám tổng quát'
                            />
                            <FaSearch className='search-icon' />
                        </div>
                    </div>
                </div>

                <div className='action-section d-flex align-items-center gap-3'>
                    <div className='action-item'>
                        <PiHandshakeFill className='action-icon' />
                        <span>Hợp tác</span>
                    </div>
                    <div className='action-item'>
                        <MdOutlineSchedule className='action-icon' />
                        <span>Lịch hẹn</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
