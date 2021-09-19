// 防抖
const debounce = function (fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(fn, delay);
  };
};

// 节流
const throttle = function (fn, delay) {
  let valid = true;
  return function () {
    //休息时间
    if (!valid) {
      return false;
    }

    valid = false;
    setTimeout(() => {
      fn();
      valid = true;
    }, delay);
  };
};

export default {
  debounce,
  throttle,
};
