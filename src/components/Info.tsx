import React from 'react';

const Info: React.FC = () => {
  return (
    <div>
      <h1></h1>
    

      <h3>Free Introductory Program</h3>
      <ul>
      <li>
  Free Book as a promotional tool:{" "}
  <a href="https://example.com/book" target="_blank" rel="noopener noreferrer">
    <button className="book-button">Claim Your Free Book </button>
  </a>
</li>

      </ul>

      <h3>Basic/Novice</h3>
      <ul>
        <li>Education, Self-Study, and Instructor Led</li>
        <li>Lessons: Forex, Crypto</li>
        <li>Webinars</li>
        <li>Daily₿read Chat Group (Product Support)</li>
        <li>Signal Results</li>
        <li>Introduction Lesson to Advanced Trader</li>
      </ul>

      <h3>Advanced Trader</h3>
      <ul>
        <li>Education, Self-Study, and Instructor Led</li>
        <li>Signals (Swing/Position Trades ONLY)</li>
        <li>Futures</li>
        <li>Equities: Reverse ETFs</li>
        <li>Investment Vehicles: Index Funds, Retirement, Annuities, Life Insurance</li>
        <li>Bonds: Corporate, Government, Municipal</li>
        <li>Introduction Lesson to Pro Investor</li>
      </ul>

      <h3>Pro/Investor</h3>
      <ul>
        <li>Education, Self-Study, and Instructor Led</li>
        <li>Exclusive Indicators</li>
        <li>Options</li>
        <li>Introduction Lesson to being an Accredited Investor</li>
      </ul>

      <h3>Opportunites</h3>
      <ul>
        <li>Internship Program</li>
        <li>Cash Account</li>
        <li>Reverse Scale Education; Education = Currency; Marketing = Currency</li>
      </ul>
    </div>
  );
};

export default Info;

