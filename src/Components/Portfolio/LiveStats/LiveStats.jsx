import React, { useEffect, useState } from 'react';
import { Gauge } from '@mui/x-charts/Gauge'; 
import { BarChart } from '@mui/x-charts/BarChart';
import { useMediaQuery } from '@mui/material';
import GitHubCalendar from 'react-github-calendar';
import style from './LiveStats.module.scss'
import GitHubLogo from '../../../assets/GitHub_Logo.png'
import LeetCodeLogo from '../../../assets/LeetCode_Logo.png'

//returns LeetCode Stats
async function getLeetCodeStats() {
  const response = await fetch('https://leetcode-stats.tashif.codes/daunty0');
  const data = await response.json();
  return data;
}

const LiveStats = () => {
  const [leetcodeStats, setStats] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width:1300px)');

  useEffect(() => {
    getLeetCodeStats().then(setStats).catch(console.error);
  }, []);

  return (
    <div className={style.liveStats} id="liveStats">
        <div className={style.logoContainer}>
          <a href="https://leetcode.com/u/Daunty0/" target="_blank" rel="noopener noreferrer">
            <img src={LeetCodeLogo} className={style.logo}/>
          </a>
          <a href="https://github.com/Jdaunt0" target="_blank" rel="noopener noreferrer">
            <img src={GitHubLogo} className={style.logo}/>
          </a>
        </div>
        <div className={style.content}>
          <div className={style.leetcode}>
            <div className={style.container}>
              {leetcodeStats && (
                <>
                  <Gauge
                      value={leetcodeStats.easySolved + leetcodeStats.mediumSolved + leetcodeStats.hardSolved}
                      valueMin={0}
                      valueMax={leetcodeStats.totalEasy + leetcodeStats.totalMedium + leetcodeStats.totalHard}
                      innerRadius="80%"
                      outerRadius="100%"
                      cornerRadius="50%"
                      text={({ value }) => `${value} Solved`}
                      sx={{
                        height: '100%',
                        width: isSmallScreen ? '100%' : '40%',
                        [`& .MuiGauge-valueArc`]: {
                        fill: '#39D353',
                      }, 
                    }}
                  />
                  {!isSmallScreen && (
                    <BarChart
                      layout="horizontal"
                      hideLegend={true}
                      yAxis={[{ data: ['Easy Leetcode Problems', 'Medium Leetcode Problems', 'Hard Leetcode Problems']}]} 
                      xAxis={[{ min: 0, max: 100 }]}
                      series={[
                        {label: 'Solved', color: '#39D353', data: [leetcodeStats.easySolved, leetcodeStats.mediumSolved, leetcodeStats.hardSolved], stack: 'total'},
                        {label: 'Total', color: '#1E2229', data: [leetcodeStats.totalEasy, leetcodeStats.totalMedium, leetcodeStats.totalHard], stack: 'total'},
                      ]}
                      sx={{
                        height: '100%',
                        width: '60%',
                      }}           
                    />
                  )}
                </>
              )}
            </div>
          </div>
          <div className={style.github}>
            <div className={style.container}>
              <GitHubCalendar username="jdaunt0" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default LiveStats