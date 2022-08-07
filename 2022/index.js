const json = require('./list.json');
const fs = require('fs');
const fetch = require('node-fetch');

const records = json.result.records;

const locations = records.map(d => {
  return {
    address: d.appSchoolInfoEntity.address,
    name: d.appSchoolInfoEntity.schoolName,
    lng: d.appSchoolBaseInfoEntity.lng,
    lat: d.appSchoolBaseInfoEntity.lat,
    code: d.appSchoolBaseInfoEntity.xqbsm,
  }
})

  .filter(d => !/杭州银湖科技城硅谷小学/.test(d.name))
  .filter(d => !/杭州蕙兰未来科技城学校/.test(d.name))
  .filter(d => !/杭州师范大学附属未来科技城学校/.test(d.name))
  .filter(d => !/萧山/.test(d.name))
  .filter(d => !/萧山/.test(d.address))
  .filter(d => !/余杭/.test(d.name))
  .filter(d => !/余杭/.test(d.address))
  .filter(d => !/临安/.test(d.name))
  .filter(d => !/临安/.test(d.address))
  .filter(d => !/富阳/.test(d.name))
  .filter(d => !/富阳/.test(d.address))
  .filter(d => !/淳安/.test(d.name))
  .filter(d => !/淳安/.test(d.address))
  .filter(d => !/建德/.test(d.name))
  .filter(d => !/建德/.test(d.address))
  .filter(d => !/桐庐/.test(d.name))
  .filter(d => !/桐庐/.test(d.address))
  .filter(d => !/临平/.test(d.name))
  .filter(d => !/临平/.test(d.address))

fs.writeFileSync('./schoolLocation.json', JSON.stringify(locations));


!(async () => {

  for (let i = 0; i < locations.length; i++) {
    // 学校详细信息
    const code = locations[i].code;
    const fname = `./detail/${code}.json`;

    // 学校详细信息缓存
    if (fs.existsSync(fname) === false) {
      console.log(`fetch ${code} ing...`);
      const res = await fetch(`https://rxyj.hzedu.gov.cn/hzjyAppServer/api/AppSchoolInfo/2022/${locations[i].code}`)
      .then(d => d.json())
      
      fs.writeFileSync(fname, JSON.stringify(res));
    }
    

    
  }


  // 学区信息查询
  const schoolDistrict = {};

  for (let i = 0; i < locations.length; i++) {
    const code = locations[i].code;
    const fname = `./detail/${code}.json`;
    const json = JSON.parse(fs.readFileSync(fname));
    const sdlist = json.result.appSchoolDistrictInfoEntityList;

    schoolDistrict[code] = [];

    for(let j = 0; j < sdlist.length; j++) {
      schoolDistrict[code].push({
        name: sdlist[j].name,
      })  
    }
  }

  fs.writeFileSync('./schoolDistrict.json', JSON.stringify(schoolDistrict));
})();