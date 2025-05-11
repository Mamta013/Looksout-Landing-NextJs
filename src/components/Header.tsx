/*import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-[86px] flex justify-center items-center border-b border-[#648EF7] px-40 z-10 bg-[#2B63D9]">
      <div className="w-[1280px] h-[46px] flex justify-between items-center px-8">
        
        <div className="w-[160px] h-[40px] bg-white flex items-center justify-center font-semibold text-blue-700 text-xl rounded">
          Lookscout
        </div>

        
        <div className="flex items-center gap-6">
          <button className="text-white font-semibold text-[15px] leading-[22px]">
            Docs
          </button>
          <button className="text-white font-semibold text-[15px] leading-[22px]">
            API
          </button>
          <button className="text-white font-semibold text-[15px] leading-[22px]">
            Pricing
          </button>
          <button className="bg-[#437EF7] text-white font-semibold text-[15px] leading-[22px] px-[18px] py-[12px] rounded-[6px] shadow-sm">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;*/

import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <span className={styles.logoText}>
            <img src="/logos/brand-icon.svg" alt="Lookscout" style={{ height: 24, verticalAlign: 'middle', marginRight: 8 }} />
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 22, verticalAlign: 'middle' }}>Lookscout</span>
          </span>
        </div>
        <nav className={styles.navContainer}>
          <div className={styles.navLinks}>
            <a className={styles.navButton} href="#">Home</a>
            <a className={styles.navButton} href="#">Our Products</a>
            <a className={styles.navButton} href="#">Resources</a>
            <a className={styles.navButton} href="#">Contacts</a>
          </div>
        </nav>
        <div className={styles.actionContainer}>
          <button className={styles.navButton}>Log in</button>
          <button className={styles.primaryAction}>Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

