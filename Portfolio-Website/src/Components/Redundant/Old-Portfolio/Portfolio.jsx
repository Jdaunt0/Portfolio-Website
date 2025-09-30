// import { useState } from 'react';
// import './Portfolio.css';
// import ScrollStack, { ScrollStackItem } from '../../blocks/Components/ScrollStack/ScrollStack'
// import '../../blocks/Components/ScrollStack/ScrollStack.css';
// import LiveStats from './LiveStats/LiveStats';
// import Experience from './Experience/Experience';

// const Portfolio = () => {
//   const [isCompleted, setIsCompleted] = useState(false);

//   return (
//     <div>
//       <div className='temp'>
//         hello world
//       </div>
//       <div className="portfolio-container">
//         <ScrollStack
//           itemDistance={200}
//           itemStackDistance={30}
//           stackPosition="20%"
//           baseScale={0.85}
//           rotationAmount={0}
//           blurAmount={0}
//           className="scroll-stack-demo-container"
//           onStackComplete={() => console.log('stack complete')}
//           onStackReset={() => console.log('stack reset')}
//         >
//           <ScrollStackItem>
//               <h3>Portfolio</h3>
//           </ScrollStackItem> 
//           <ScrollStackItem>
//               <h3>Portfolio</h3>
//           </ScrollStackItem>
//           <ScrollStackItem>
//               <h3>Portfolio</h3>
//           </ScrollStackItem> 

//         </ScrollStack>
//       </div>
//       <div className='temp'>
//         hello world
//       </div>
//     </div>
//   );
// };

// export default Portfolio;