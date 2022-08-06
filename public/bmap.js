// 创建地图实例 
const map = new BMapGL.Map("container");
// 创建点坐标 
const cpoint = new BMapGL.Point(120.147496,30.283416);
// 初始化地图，设置中心点坐标和地图级别 
map.centerAndZoom(cpoint, 15);
//开启鼠标滚轮缩放
map.enableScrollWheelZoom(true);     


const colors = ['1890ff', '52c41a', 'ff4d4f', 'faad14'];
const icons = colors.map(color => {
  return new BMapGL.Icon(
    // `data:image/svg+xml,%3Csvg t='1659796753263' class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' p-id='5625' width='23' height='23'%3E%3Cpath d='M512 113.8c-188.5 0-341.3 152.9-341.3 341.7 0 94.3 38.2 179.7 100 241.6L512 938.7l241.4-241.6c64.2-64.2 100.1-151.1 100-241.6-0.1-188.8-152.9-341.7-341.4-341.7z m107.5 448.9c-28.5 28.5-67.1 44.5-107.5 44.6-40.4-0.1-79-16.2-107.5-44.7-28.5-28.5-44.4-67.1-44.3-107.2-0.1-40.2 15.8-78.7 44.3-107.2 28.5-28.5 67.1-44.5 107.5-44.6 40.4 0.1 79 16.2 107.5 44.7 28.5 28.5 44.4 67.1 44.3 107.2 0.1 40.1-15.8 78.7-44.3 107.2z' fill='%23${color}' p-id='5626'%3E%3C/path%3E%3C/svg%3E`,
    `data:image/svg+xml,%3Csvg t='1659799262542' class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' p-id='6540' width='23' height='23'%3E%3Cpath d='M347.539026 980.373665a164.892367 43.626335 0 1 0 329.784735 0 164.892367 43.626335 0 1 0-329.784735 0Z' fill='%23${color}' p-id='6541'%3E%3C/path%3E%3Cpath d='M523.401221 970.105263c14.672431-29.333363 16.765207-92.806576 69.29159-205.954476 62.875277-135.40952 240.600272-190.557623 247.108576-409.241239 0 0 6.968255-347.205372-324.104343-354.70257h-0.103489c-2.380245 0-4.599508-0.206978-7.163733-0.206978v0.402457C171.101893 21.169236 184.302482 356.806845 184.302482 356.806845 178.806069 525.493807 371.467967 657.821657 430.951107 766.08258c22.928548 41.729038 58.045793 155.405882 69.636553 207.219341' fill='%23${color}' p-id='6542'%3E%3C/path%3E%3C/svg%3E`,
    new BMapGL.Size(23, 23), 
  )
});


!(async () => {
  fetch('../2022/schoolLocation.json').then(d => d.json()).then(d => {

    console.log(d);
    d.map(item => {
      var point = new BMapGL.Point(item.lng, item.lat);   
      var marker = new BMapGL.Marker(point);
      marker.setIcon(icons[0]);
      marker.setTitle(item.name);
      marker.setLabel(item.name);
      map.addOverlay(marker);   

      fetch(`../2022/detail/${item.code}.json`).then(d => d.json()).then(d => {
        
      })
    })
  })
})(); 
