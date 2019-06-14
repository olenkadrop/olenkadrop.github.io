function sel(){
	var a = prompt("Введите номер телефона")
	alert("Мы перезвоним вам в течении часа")
}
var name22 = ["Алексей","Максим","Андрей","Егор","Василий","Константин","Иван","Александр","Антон","Кирилл","Артур","Никита","Марат","Владимир","Валерий","Сергей"]
var surname22 = ["Жмышенко","Андрейчиков","Пахотин","Хандашков","Певец","Блинов","Голубев","Букин","Новиков","Морозов","Миназов","Вальков","Урюпин","Вишнев","Ткаченко","Боров","Второв","Бурый","Навальный","Неверов"]
var sel22 = ["Подрочить","Минет","Минет с проглотом","Анальный секс","Вагинальный секс"]

var t0 = Math.floor(Math.random() * name22.length);
var t1 = Math.floor(Math.random() * surname22.length);
var t2 = Math.floor(Math.random() * sel22.length);
var t02 = Math.floor(Math.random() * name22.length);
var t12 = Math.floor(Math.random() * surname22.length);
var t22 = Math.floor(Math.random() * sel22.length);
var t03 = Math.floor(Math.random() * name22.length);
var t13 = Math.floor(Math.random() * surname22.length);
var t23 = Math.floor(Math.random() * sel22.length);
var t04 = Math.floor(Math.random() * name22.length);
var t14 = Math.floor(Math.random() * surname22.length);
var t24 = Math.floor(Math.random() * sel22.length);
var t05 = Math.floor(Math.random() * name22.length);
var t15 = Math.floor(Math.random() * surname22.length);
var t25 = Math.floor(Math.random() * sel22.length);
var last1 = document.getElementById("gl228").innerHTML = name22[t0] +" "+surname22[t1] +" заказал "+sel22[t2]+ "<br>" + name22[t02] +" "+surname22[t12] +" заказал "+sel22[t22]+ "<br>"+ name22[t03] +" "+surname22[t13] +" заказал "+sel22[t23]+ "<br>"+ name22[t04] +" "+surname22[t14] +" заказал "+sel22[t24]+ "<br>"+ name22[t05] +" "+surname22[t15] +" заказал "+sel22[t25]+ "<br>";


