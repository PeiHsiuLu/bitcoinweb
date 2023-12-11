import React, { useState } from 'react';

const DCACalculator = ({ onDateChange }) => {
    
const today = new Date().toISOString().slice(0, 10); // 獲取今天的日期
    const [investmentAmount, setInvestmentAmount] = useState('');
    const [frequency, setFrequency] = useState('daily');
    const [startDate, setStartDate] = useState('2021-01-01');
    const [endDate, setEndDate] = useState(today); // 使用今天的日期作為預設值

  const handleInvestmentChange = (e) => {
    setInvestmentAmount(e.target.value);
  };

  const handleFrequencyChange = (e) => {
    setFrequency(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting:', { investmentAmount, frequency, startDate, endDate });
    onDateChange(startDate, endDate); // 這裡呼叫回調函數通知 App 組件
    // 你可以在這裡添加計算邏輯或發送數據到後端
  };

  return (
    <div className="calculator-container">
      <form onSubmit={handleSubmit}>
        <fieldset className="calculator-fieldset">
          <legend>神奇的DCA計算器</legend>
          <div className="form-group">
            <label htmlFor="investmentAmount">投入金額(台幣)</label>
            <input
              id="investmentAmount"
              type="number"
              className="form-control"
              value={investmentAmount}
              onChange={handleInvestmentChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="frequency">頻率 </label>
            <select
              id="frequency"
              className="form-control"
              value={frequency}
              onChange={handleFrequencyChange}
            >
              <option value="daily">每天</option>
              <option value="weekly">每周</option>
              <option value="every_two_weeks">每兩個星期</option>
              <option value="monthly">每個月</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="startDate">開始日期 </label>
            <input
              id="startDate"
              type="date"
              className="form-control"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">結束日期</label>
            <input
              id="endDate"
              type="date"
              className="form-control"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
          <button type="submit" className="output">輸出結果</button>
        </fieldset>
      </form>
    </div>
  );
};

export default DCACalculator;
