
export function getShuntDesc(detail, number = 1) {
  if (detail[`oneSuper${number}`] === '1') {
    return '一表生有分流' + (detail[`oneSuperTime${number}`] ? `最迟落户时间：${detail.[`oneSuperTime${number}`]}` : '');
  } else if (detail[`localShunt${number}`] === '1') {
    return '户籍生有分流，一表生无分流';
  } else if (detail[`otherProvShunt${number}`] === '1') {
    return '随迁子女有分流，户籍生无分流'
  } else if (detail[`otherProvShunt${number}`] === '2') {
    return '无分流'
  } else {
    return '户籍生无分流';
  }
}
