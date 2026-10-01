export default function AppLogo() {

const subTitle = "create by codingthailand";
const dateNow = new Date();
const timeNow = <p>{dateNow.toLocaleTimeString()}</p>;

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
      {timeNow}
    </>
  );
}

{/* <> ... </> ใช้ React Flagment 
    สำหรับเปิด-ปิด แทน tag div, tag main */}