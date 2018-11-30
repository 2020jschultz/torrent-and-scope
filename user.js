//Type your code inside this function
function User(tracker, torrent){

  let myTracker = tracker;
  let myTorrent = torrent;
  
  let state = "seed";
  
  let downloadSpeed= 0;
  
  let uploadSpeed = 0;
  

  //Type all of your code in here.

function startDownload(){

}
function updateTracker(){
  function Tracker(){
    function average(list){
      let sum = 0;
      for(let i = 0; i < list.length; i++){
        sum = sum + list [i];
      
      }
      return sum / list.length
    }
  }
}
function checkProgress(){
  function TorrentFile(){
    function average(list){
      let sum = 0;
      for(let i = 0; i < list.length; i++){
        sum = sum + list[i];
      }
      return sum / list.length;
    }
  }
}
function leech(){
  downloadSpeed = Math.random();
  return downloadSpeed;
}
function seed(){
  uploadSpeed = Math.random(0, 10);
  downloadSpeed = Math.random (10, 25);
  return uploadSpeed;
  return downloadSpeed;
}
}
