// 创建地图实例 
const map = new BMapGL.Map("container");
// 创建点坐标 
const cpoint = new BMapGL.Point(120.147496, 30.283416);
// 初始化地图，设置中心点坐标和地图级别 
map.centerAndZoom(cpoint, 15);
//开启鼠标滚轮缩放
map.enableScrollWheelZoom(true);


if (/showXZ=1/.test(location.href)) {
  var dist = new BMapGL.DistrictLayer({
    name: '(杭州市)',
    kind: 2,
    fillColor: '#5e8bff',
    fillOpacity: 0.1
  });
  map.addDistrictLayer(dist);
}

const colors = ['1890ff', '52c41a', 'ff4d4f', 'faad14', 'd8062d', '6c8be3', '47196e', '462f37', '0dc8a6', '417829', '15d358', 'ab7d96', '0abf4e', 'e2379b', '1c2f79'];
const icons = colors.map(color => {
  return new BMapGL.Icon(
    // `data:image/svg+xml,%3Csvg t='1659796753263' class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' p-id='5625' width='23' height='23'%3E%3Cpath d='M512 113.8c-188.5 0-341.3 152.9-341.3 341.7 0 94.3 38.2 179.7 100 241.6L512 938.7l241.4-241.6c64.2-64.2 100.1-151.1 100-241.6-0.1-188.8-152.9-341.7-341.4-341.7z m107.5 448.9c-28.5 28.5-67.1 44.5-107.5 44.6-40.4-0.1-79-16.2-107.5-44.7-28.5-28.5-44.4-67.1-44.3-107.2-0.1-40.2 15.8-78.7 44.3-107.2 28.5-28.5 67.1-44.5 107.5-44.6 40.4 0.1 79 16.2 107.5 44.7 28.5 28.5 44.4 67.1 44.3 107.2 0.1 40.1-15.8 78.7-44.3 107.2z' fill='%23${color}' p-id='5626'%3E%3C/path%3E%3C/svg%3E`,
    `data:image/svg+xml,%3Csvg t='1659799262542' class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' p-id='6540' width='23' height='23'%3E%3Cpath d='M523.401221 970.105263c14.672431-29.333363 16.765207-92.806576 69.29159-205.954476 62.875277-135.40952 240.600272-190.557623 247.108576-409.241239 0 0 6.968255-347.205372-324.104343-354.70257h-0.103489c-2.380245 0-4.599508-0.206978-7.163733-0.206978v0.402457C171.101893 21.169236 184.302482 356.806845 184.302482 356.806845 178.806069 525.493807 371.467967 657.821657 430.951107 766.08258c22.928548 41.729038 58.045793 155.405882 69.636553 207.219341' fill='%23${color}' p-id='6542'%3E%3C/path%3E%3C/svg%3E`,
    new BMapGL.Size(23, 23),
  )
});
const smallIcons = colors.map(color => {
  return new BMapGL.Icon(
    // `data:image/svg+xml,%3Csvg t='1659796753263' class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' p-id='5625' width='23' height='23'%3E%3Cpath d='M512 113.8c-188.5 0-341.3 152.9-341.3 341.7 0 94.3 38.2 179.7 100 241.6L512 938.7l241.4-241.6c64.2-64.2 100.1-151.1 100-241.6-0.1-188.8-152.9-341.7-341.4-341.7z m107.5 448.9c-28.5 28.5-67.1 44.5-107.5 44.6-40.4-0.1-79-16.2-107.5-44.7-28.5-28.5-44.4-67.1-44.3-107.2-0.1-40.2 15.8-78.7 44.3-107.2 28.5-28.5 67.1-44.5 107.5-44.6 40.4 0.1 79 16.2 107.5 44.7 28.5 28.5 44.4 67.1 44.3 107.2 0.1 40.1-15.8 78.7-44.3 107.2z' fill='%23${color}' p-id='5626'%3E%3C/path%3E%3C/svg%3E`,
    `data:image/svg+xml,%3Csvg t='1659799262542' class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' p-id='6540' width='10' height='10'%3E%3Cpath d='M523.401221 970.105263c14.672431-29.333363 16.765207-92.806576 69.29159-205.954476 62.875277-135.40952 240.600272-190.557623 247.108576-409.241239 0 0 6.968255-347.205372-324.104343-354.70257h-0.103489c-2.380245 0-4.599508-0.206978-7.163733-0.206978v0.402457C171.101893 21.169236 184.302482 356.806845 184.302482 356.806845 178.806069 525.493807 371.467967 657.821657 430.951107 766.08258c22.928548 41.729038 58.045793 155.405882 69.636553 207.219341' fill='%23${color}' p-id='6542'%3E%3C/path%3E%3C/svg%3E`,
    new BMapGL.Size(10, 10),
  )
});

const isTopOnly = /isTopOnly=1/.test(location.href);
const showLabel = /showLabel=1/.test(location.href);
const collectDistrictName = new Set();

function isTop(name, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (name.indexOf(arr[i]) > -1) return true;
  }
  return false;
}

!(async () => {
  const slocations = await fetch('../2022/schoolLocation.json').then(d => d.json());
  const schoolDistrct = await fetch('../2022/schoolDistrict.json').then(d => d.json());
  const schoolDistrictConvert = await fetch('../2022/schoolDistrictConvert.json').then(d => d.json());

  const top = await fetch('../2022/topSchool.json').then(d => d.json());

  let iconIndex = 0;
  slocations.map(async item => {

    if (isTopOnly && !isTop(item.name, top)) return;
    // if (iconIndex > 2) return;

    // 学校标记
    const schoolIcon = icons[iconIndex % colors.length];
    // 学校对应的小区标记，用较小的 icon
    const schoolSmallIcon = smallIcons[iconIndex % colors.length];

    // 标记学校
    var point = new BMapGL.Point(item.lng, item.lat);
    var marker = new BMapGL.Marker(point);
    marker.setIcon(schoolIcon);
    marker.setTitle(item.name);
    marker.setLabel(item.name);
    map.addOverlay(marker);

    if (isTopOnly && showLabel) {
      var point = new BMapGL.Point(item.lng, item.lat);
      var content = item.name;
      var label = new BMapGL.Label(content, {       // 创建文本标注
        position: point,                          // 设置标注的地理位置
        offset: new BMapGL.Size(5, 5)           // 设置标注的偏移量
      });
      label.setStyle({                              // 设置label的样式
        color: '#000',
        fontSize: '7px',
        border: '1px solid #1E90FF'
      })
      map.addOverlay(label);
    }

    // 学区信息
    const sd = schoolDistrct[item.code];
    for (let i = 0; i < sd.length; i++) {
      const name = sd[i].name;
      const p = schoolDistrictConvert[name];

      // 收集当前的小区名称
      collectDistrictName.add(name);
      
      // 添加小区标准标记基础上得偏移
      // 避免一个小区对应多个学区时，相同标记都挤在一起
      const n1 = 0.0004 * Math.random() - 0.0002;
      const n2 = 0.0004 * Math.random() - 0.0002;
      var point = new BMapGL.Point(Number(p.lng) + n1, Number(p.lat) + n2);
      var marker = new BMapGL.Marker(point);
      marker.setIcon(schoolSmallIcon);
      marker.setTitle(name);
      marker.setLabel(name);
      map.addOverlay(marker);
    }

    iconIndex++;
    console.log('collectDistrictName => ', collectDistrictName);
  })

  
})(); 
