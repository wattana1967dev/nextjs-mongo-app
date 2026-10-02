export default function AppLogo() {

const subTitle = "create by codingthailand";
const dateNow = new Date();
const timeNow = <p>{dateNow.toLocaleTimeString()}</p>;
const isShowTime = true;
const isShowDate = true;

  return (
    <>
      <p style={{color: "green"}}>My Logo</p>
      {/* case1: สร้างตัวแปร text เป็น subtitle */}
      <small>{subTitle.toUpperCase()}</small>
      {/* case2: สร้างตัวแปร Date เป็น dateNow */}
      {' '}
      <small>{dateNow.toLocaleDateString()}</small>
      {/* case3: สร้างตัวแปร เพจ dateNow เป็น timeNow*/}
      {' '}
      {
        isShowTime && <div>ตอนนี้เวลา: {timeNow}</div>
      }
      <hr />
      {
        isShowDate ? <small>{dateNow.toLocaleDateString()}</small> : <small>{timeNow}</small>
      }
    </>
  );
}

{/* <> ... </> ใช้ React Flagment 
    สำหรับเปิด-ปิด แทน tag div, tag main */}