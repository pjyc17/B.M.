import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import MultiCarouselPage from './MultiCarouselPage';



export default function TimeLog(props) {
  // const [userHasMeetingList, setUserHasMeetingList] = useState('');
  const hatSpeakTime = [40000, 22000, 10000, 8004, 3000, 2800]// 순서는 정렬을 해서12/34/56 높은 순으로 3줄로 표현
  const speakTime = hatSpeakTime.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0); // 유저가 발언한 시간의 총 합 -> 초단위로 받음 reduce에 관한 -> 발언시간을 회의 참가 시간으로 변경

  // https://react.vlpt.us/basic/16-useEffect.html -> 언마운트 마운트
  // useEffect (() => {
  //   if (props.user)
  //   setUserHasMeetingList(props.user.userHasMeetingList)
  // });


  function calHour(SToH) {
    return parseInt(SToH / 3600);
  }
  function calMin(SToM) {
    return parseInt((SToM % 3600) / 60)
  }
  function calSec(SToS) {
    return parseInt((SToS % 60)%60)
  }
  function numRender() {
    const result = [];
    for (let i = 0; i < hatSpeakTime.length; i++) {
      result.push(
      <li key={`모자${i}`}>
        <img src={require(`./img/모자${i}.png`)} alt=""></img>
        <p>Time Log : {calHour(hatSpeakTime[i]) } h {calMin(hatSpeakTime[i])} m {calSec(hatSpeakTime[i])}s</p>
      </li>);
    }
    return result;
  };
  return (
    <Grid item container xs={10} rowSpacing={5}>
      <Grid item xs={12}>
        <Grid className="timeLog">
          <h1>Time Log : {calHour(speakTime)}h {calMin(speakTime)}m {calSec(speakTime)}s</h1>
          {/* <h1>{userHasMeetingList[0].id}</h1> */}
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid className="Card">
          <h3> 모자 별 시간 </h3>
          <ul>
            {numRender()}
          </ul>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        {MultiCarouselPage()}
      </Grid>
    </Grid>
  )
}