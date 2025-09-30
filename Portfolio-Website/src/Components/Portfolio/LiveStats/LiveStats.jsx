import React, { useEffect, useState } from 'react';
import { Gauge } from '@mui/x-charts/Gauge'; 
import { BarChart } from '@mui/x-charts/BarChart';
import { useMediaQuery } from '@mui/material';
import GitHubCalendar from 'react-github-calendar';
import styles from './LiveStats.module.scss';

//returns LeetCode Stats
async function getLeetCodeStats() {
  const response = await fetch('https://leetcode-stats.tashif.codes/daunty0');
  const data = await response.json();
  return data;
}

const LiveStats = () => {
  const [leetcodeStats, setStats] = useState(null);

  const isSmallScreen = useMediaQuery('(max-width:500px)');

  useEffect(() => {
    getLeetCodeStats().then(setStats).catch(console.error);
  }, []);
  return (
    <div className={styles.liveStats}>
      {leetcodeStats && (
        <>
          <h1>Leetcode</h1>
          <div className={styles.leetcode}>
            <Gauge
              value={leetcodeStats.easySolved + leetcodeStats.mediumSolved + leetcodeStats.hardSolved}
              valueMin={0}
              valueMax={leetcodeStats.totalEasy + leetcodeStats.totalMedium + leetcodeStats.totalHard}
              height={200}
              innerRadius="80%"
              outerRadius="100%"
              cornerRadius="50%"
              text={({ value }) => `${value} Solved`}
              sx={{
                width: 'auto',
                [`& .MuiGauge-valueArc`]: {
                  fill: '#39D353',
                },
              }}
           />
            {!isSmallScreen && (
              <BarChart
              layout="horizontal"
              hideLegend={true}
              yAxis={[{ data: ['Easy', 'Medium', 'Hard']}]} 
              xAxis={[{ min: 0, max: 100 }]}
              height={200}
              series={[
                {label: 'Solved', color: '#39D353', data: [leetcodeStats.easySolved, leetcodeStats.mediumSolved, leetcodeStats.hardSolved], stack: 'total'},
                {label: 'Total', color: '#1E2229', data: [leetcodeStats.totalEasy, leetcodeStats.totalMedium, leetcodeStats.totalHard], stack: 'total'},
              ]}
              sx={{width: '40%'}}
              
              />
            )}
            
          </div>
        </>
      )}
      <h1>github</h1>
      <div className={styles.github}>
        <GitHubCalendar username="jdaunt0" />
      </div>
    </div>
  );
};

export default LiveStats;