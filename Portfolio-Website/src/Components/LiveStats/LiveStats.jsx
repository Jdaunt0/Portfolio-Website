import React, { useEffect, useState } from 'react';
import { Gauge } from '@mui/x-charts/Gauge'; 
import { BarChart } from '@mui/x-charts/BarChart';
import GitHubCalendar from 'react-github-calendar';
import './LiveStats.css';

//returns LeetCode Stats
async function getLeetCodeStats() {
  const response = await fetch('https://leetcode-stats.tashif.codes/daunty0');
  const data = await response.json();
  return data;
}

const LiveStats = () => {
  const [leetcodeStats, setStats] = useState(null);

  useEffect(() => {
    getLeetCodeStats().then(setStats).catch(console.error);
  }, []);
  return (
    <div className="live-stats-container">
      {leetcodeStats && (
        <>
          <div>
          {/* className="live-stats-leetcode" */}
            <Gauge
              value={leetcodeStats.easySolved + leetcodeStats.mediumSolved + leetcodeStats.hardSolved}
              valueMin={100}
              valueMax={leetcodeStats.totalEasy + leetcodeStats.totalMedium + leetcodeStats.totalHard}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="50%"
              text={({ value }) => `${value} Solved`}
              sx={{
                [`& .MuiGauge-valueArc`]: {
                  fill: '#39D353',
                },
              }}
           />

            <BarChart
              layout="horizontal"
              yAxis={[{ data: ['Easy', 'Medium', 'Hard']}]} 
              xAxis={[{ min: 0, max: 100 }]}
              height={300}
              series={[
                {label: 'Solved', color: '#39D353', data: [leetcodeStats.easySolved, leetcodeStats.mediumSolved, leetcodeStats.hardSolved], stack: 'total'},
                {label: 'Total', color: '#1E2229', data: [leetcodeStats.totalEasy, leetcodeStats.totalMedium, leetcodeStats.totalHard], stack: 'total'},
              ]}
            />
          </div>
        </>
      )}
      <div className="live-stats-github">
        <GitHubCalendar username="jdaunt0" />
      </div>
    </div>
  );
};

export default LiveStats;