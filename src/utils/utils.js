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

/**
 *
 * @param time 1398250549490
 * @returns {string} 返回YYYY-MM-DD
 */
export function formatDateToHour(time) {
  const date = new Date(time);
  const Y = date.getFullYear() + '-';
  const M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  const D = date.getDate();
  const HH = date.getHours();
  const MM = date.getMinutes();
  return `${Y+M+D}  ${HH<10?'0'+HH:HH}:${MM<10?'0'+MM:MM}`;
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
