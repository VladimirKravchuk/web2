class Sesion {
  constructor(params = {}) {
    Object.assign(this, {
      pName: null, 
      marks: 10, 
      result: false
    }, { ...params }); 
  }

  static sortDefault(a, b) {
    return (a.result - b.result) * 10 + a.pName.localeCompare(b.pName); 
  }; 
}
Sesion.prototype.toString = function () {
  return `${this.pName} (${this.marks} балів), ${this.result ? 'Зараховано' : 'Не зараховано'}`;
}; 


const sesionList = [
  { pName: 'Математика', marks: 95, result: true},
  { pName: 'Фізкультура', marks: 48, result: false },
  { pName: 'Право', marks: 89, result: true },
  { pName: 'Культурологія', marks: 40, result: false}
].map(sesionDef => new Sesion(sesionDef));

const addToSesionList = sesionDef => { //При більше 60 балів = зараховано й коли назва предметів збігається, то бали додаються
  const ses = sesionList.find(ses => ses.pName === sesionDef.pName); 
  if (sesionDef.marks<60) return sesionList.push(new Sesion(sesionDef)); 
  sesionDef.result = true;
  if (!ses) return sesionList.push(new Sesion(sesionDef)); 
  ses.marks += sesionDef.marks; 
}; 

const printSesionList = () => sesionList.forEach(
  (ses, i) => console.log(`${i + 1}. ${ses}`)
); 

sesionList.sort(Sesion.sortDefault);
printSesionList();
console.log('---'); 

addToSesionList({ pName: 'Історія', marks: 85 });
addToSesionList({ pName: 'Англійська', marks: 18 });

sesionList.sort(Sesion.sortDefault);
printSesionList();
console.log('---'); 











/*
const average = sesionDef => {
  var total = 0;
  for(var i = 0; i < sesionList.length; i++) {
      total += sesionDef.marks;
  }
  var avg = total / sesionList.length;
  console.log(avg)
} */