//#region data陣列
let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  },
  // {
  //   "id": 3,
  //   "name": "綠島自由行套裝行程",
  //   "imgUrl": "images/photo-1477894387642-00a731c511b3@2x.png",
  //   "area": "台北",
  //   "description": "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
  //   "group": 8,
  //   "price": 1280,
  //   "rate": 9.3
  // },
  // {
  //   "id": 4,
  //   "name": "清境高空觀景步道二日遊",
  //   "imgUrl": "images/photo-1526772662000-3f88f10405ff@2x.png",
  //   "area": "台中",
  //   "description": "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
  //   "group": 12,
  //   "price": 2580,
  //   "rate": 8.2
  // },
  // {
  //   "id": 5,
  //   "name": "南庄度假村露營車二日遊",
  //   "imgUrl": "images/photo-1598954467835-3b0b6fe3be70@2x.png",
  //   "area": "台中",
  //   "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
  //   "group": 2,
  //   "price": 2480,
  //   "rate": 9.2
  // },
  // {
  //   "id": 6,
  //   "name": "山林悠遊雙人套票",
  //   "imgUrl": "images/photo-1517760444937-f6397edcbbcd@2x.png",
  //   "area": "台中",
  //   "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
  //   "group": 1,
  //   "price": 880,
  //   "rate": 9.3
  // },
  // {
  //   "id": 7,
  //   "name": "漁樂碼頭釣魚體驗套票",
  //   "imgUrl": "images/photo-1490556505947-f833c3a09659@2x.png",
  //   "area": "台中",
  //   "description": "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
  //   "group": 5,
  //   "price": 1280,
  //   "rate": 8.2
  // },
  // {
  //   "id": 8,
  //   "name": "熊森公園親子二日遊套票",
  //   "imgUrl": "images/photo-1535726858289-9ffe2dff6f52@2x.png",
  //   "area": "高雄",
  //   "description": "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
  //   "group": 3,
  //   "price": 2480,
  //   "rate": 8.6
  // }
];
//#endregion


const addTicketBtn = document.querySelector('#jsAddTicketBtn');
const userSelectArea = document.querySelector('#jsUserSelect');
const selectAreaList = document.querySelector('#jsSpotList');
const searchItemNums = document.querySelector('#jsSearchItemNums');

const ticketStar = document.querySelector('#ticketStar');
const ticketPrice = document.querySelector('#ticketPrice');
const ticketAmount = document.querySelector('#ticketAmount');

userSelectArea.addEventListener('change',updateArea);
addTicketBtn.addEventListener('click', addTicket);
ticketStar.addEventListener('input',limitAlert);
ticketPrice.addEventListener('input',limitAlert);
ticketAmount.addEventListener('input',limitAlert);

let spotList = "";
let filterData = data;
showTicket(data);

//#region 網頁初始狀態
function showTicket(spotData){
  spotList = "";
  spotData.forEach(function(item){
    let spotItem = `
      <div class="col-md-4 mb-5">
        <a class="spotListItem card h-100" href="#">
          <div class="spotRegionTag">${item.area}</div>
          <img src="${item.imgUrl}" class="card-img-top" alt="...">
          <div class="card-body mb-3">
            <div class="spotReginStar bgPrimary">${item.rate}</div>
            <h5 class="spotTitle card-title">${item.name}</h5>
            <p class="spotDescribe card-text">${item.description}</p>
          </div>
          <div class="card-footer textPrimary d-flex justify-content-between align-items-center">
            <p class="">
              <i class="fas fa-exclamation-circle"></i>
              剩下最後 ${item.group} 組
            </p>
            <p class="d-flex align-items-center">TWD<span class="fontSizeL ms-2">$${item.price}</span></p>
          </div>
        </a>
      </div>
    `;
    spotList += spotItem;
  });
  selectAreaList.innerHTML = spotList;
  searchItemNums.textContent = `${spotData.length}`;
}
//#endregion

//#region 搜尋篩選
function updateArea(){
  spotList = "";
  // 使用者選擇"全部區域""
  if(userSelectArea.value == "全部地區"){
    showTicket(data);
    return;
  }else{
    // 根據使用者選擇的區域篩選資料[]
    filterData = data.filter(item => item.area == userSelectArea.value);
    showTicket(filterData);
  }
}
//#endregion

//#region 新增套票
function addTicket(){
  let newTicket = {
    id: data.length,
    name: document.querySelector('#ticketName').value,
    imgUrl: document.querySelector('#ticketImgUrl').value,
    area: document.querySelector('#ticketSpotRegion').value,
    description: document.querySelector('#ticketDescribe').value,
    group: document.querySelector('#ticketAmount').value,
    price: document.querySelector('#ticketPrice').value,
    rate: document.querySelector('#ticketStar').value
  };
  data.unshift(newTicket);
  showTicket(data);
  document.querySelector('#ticketName').value = "";
  document.querySelector('#ticketImgUrl').value = "";
  document.querySelector('#ticketSpotRegion').value = "";
  document.querySelector('#ticketDescribe').value = "";
  document.querySelector('#ticketAmount').value = "";
  document.querySelector('#ticketPrice').value = "";
  document.querySelector('#ticketStar').value = "";
}
//#endregion

//#region 限制用鍵盤輸入套票星級
function limitAlert(e){
  if((e.target.id == 'ticketStar') && (e.target.value < 1 || e.target.value > 10)){
    alert(`${this.name}區間為 1 - 10 分，請重新輸入星級!`);
    e.target.value = "";  
  }
  else if(e.target.value < 1){
    alert(`${this.name}必須大於 0 ，請重新輸入!`);
    e.target.value = "";
  }
}
//#endregion







