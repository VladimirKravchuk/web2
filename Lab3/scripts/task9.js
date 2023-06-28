function User(pName,pBreed,pAge) {
    this.name = pName;
    this.breed = pBreed
    this.age = pAge;
    this.says = function(age){
    	document.write("<br/>" + "Кличка: " + this.name + "; Порода: " + this.breed + "; Вік: " + this.age + "<br/>" + "Говорить: ");
    	if (this.age < 1){
    		document.write("Тяф" + "<br/>");
    	}      
    	else if (this.age > 1 && this.age < 3){
    		document.write("Гав" + "<br/>");
    	}  
    	else{
    		document.write("Ррр" + "<br/>");
    	}  
    };
}

var tom = new User("Том", "Пікінес", 0.5);
var reks = new User("Рекс", "Нім.вівчарка", 6);
var ymka = new User("Умка", "Хаскі", 2);

tom.says();
reks.says();
ymka.says();