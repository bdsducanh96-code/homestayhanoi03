/* =========================
BLOCK 7: XỬ LÝ FORM
========================= */

const form=document.getElementById("bookingForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let ten=document.getElementById("ten").value;
let checkin=document.getElementById("checkin").value;
let checkout=document.getElementById("checkout").value;
let khach=document.getElementById("khach").value;


/* =========================
BLOCK 8: TÍNH SỐ ĐÊM
========================= */

let d1=new Date(checkin);
let d2=new Date(checkout);

let nights=(d2-d1)/(1000*60*60*24);

if(nights<=0){
alert("Ngày checkout phải sau checkin");
return;
}


/* =========================
BLOCK 9: LƯU GOOGLE SHEET
========================= */

fetch(API_URL,{
method:"POST",
mode:"no-cors",
body:JSON.stringify({
ten:ten,
checkin:checkin,
checkout:checkout,
khach:khach,
dem:nights
})
});


/* =========================
BLOCK 10: TẠO MESSAGE
========================= */

let message=`Xin chào Homestay Hà Nội

Tên: ${ten}
Checkin: ${checkin}
Checkout: ${checkout}
Số khách: ${khach}
Số đêm: ${nights}`;


/* =========================
BLOCK 11: HIỂN THỊ COPY
========================= */

document.getElementById("ketqua").innerHTML=`

<p><b>Thông tin đặt phòng</b></p>

<textarea id="msgbox">${message}</textarea>

<button onclick="copyMsg()">Copy nội dung</button>

<button onclick="openZalo()">Mở Zalo gửi</button>

`;

});


/* =========================
BLOCK 12: COPY MESSAGE
========================= */

function copyMsg(){

let text=document.getElementById("msgbox");

text.select();

navigator.clipboard.writeText(text.value);

alert("Đã copy nội dung");

}


/* =========================
BLOCK 13: MỞ ZALO
========================= */

function openZalo(){

window.location.href="https://zalo.me/"+zalo;

}
