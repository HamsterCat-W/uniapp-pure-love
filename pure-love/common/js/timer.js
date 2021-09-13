const getCurrentTime = function (d) {
  let old = new Date(d);
  let now = new Date();

  //   时间戳 console.log(d.getTime());
  //   old
  let dm = old.getTime();
  let Y = old.getFullYear();
  let M = old.getMonth() + 1;
  let D = old.getDate();
  let h = old.getHours();
  let m = old.getMinutes();

  //   now
  let ndm = now.getTime();
  let nY = now.getFullYear();
  let nM = now.getMonth() + 1;
  let nD = now.getDate();
  let nh = now.getHours();
  let nm = now.getMinutes();

  if (h < 10) {
    h = `0${h}`;
  }
  if (m < 10) {
    m = `0${m}`;
  }

  if (Y == nY && M == nM && D == nD) {
    //   当日时间
    return `${h}:${m}`;
  }
  if (Y == nY && M == nM && D + 1 == nD) {
    if (M < 10) {
      M = `0${M}`;
    }
    if (D < 10) {
      D = `0${D}`;
    }
    //   前一天
    return `昨天${h}:${m}`;
  } else {
    if (M < 10) {
      M = `0${M}`;
    }
    if (D < 10) {
      D = `0${D}`;
    }
    return `${Y}-${M}-${D}`;
  }
};

export default {
  getCurrentTime,
};

// let d = new Date();
// setTimeout(() => {
//   let res = getCurrentTime(d);
//   console.log(res);
// }, 1000);
