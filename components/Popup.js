import React, {useEffect} from "react";

export default function Popup() {
  useEffect(()=>{
    let pop_status = localStorage.getItem('pop_status');
    if(!pop_status){
      document.getElementById('popup').style.display = 'block';
    } else {
      document.getElementById('popup').style.display = 'none';
    }
  },[])

  function closePopup(){
    localStorage.setItem('pop_status',1);
    document.getElementById('popup').style.display = 'none';
  }

  return (
      <div className="popup" id="popup">
        <div className="close" onClick={closePopup}>X</div>
        <iframe src="https://newsilkroads.us6.list-manage.com/subscribe?u=f360f7ddffa159ce86df4129e&id=f894f0003d"/>
      </div>
  )
}