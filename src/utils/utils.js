export function arrayCheck(array) {
  if (array===null){
    array=[];
  }
  return array;
}

/**
 *
 * @param time 1398250549490
 * @returns {string} 返回YYYY-MM-DD
 */
export function formatDate(time) {
  const date = new Date(time);
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  const D = date.getDate();
  return Y+M+D;
}



export function getTodayDate() {
  const date = new Date();
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  const D = date.getDate();
  return Y+M+D;
}


export function getLastMonthDate() {
  const time = new Date().getTime()-30*24*60*60*1000;
 return formatDate(time);
}
