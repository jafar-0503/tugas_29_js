function panggilExec(){

  let data = "Belajar menimba ilmu programming bersama Niomic";
  let dataexec = new RegExp("bersama");

  console.log(dataexec.exec(data));
}
panggilExec();
