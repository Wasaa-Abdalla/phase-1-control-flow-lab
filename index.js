function scuberGreetingForFeet(distance) {
  if (distance<=400) {
    return 'This one is on me!'; 
  }else if (distance>2000 && distance<2500){
      return 'I will gladly take your thirty bucks.';
  }else if (distance>2500){
      return 'No can do.';
  }

}
function ternaryCheckCity(city) {
  if (city=== 'NYC') {
    return 'Ok, sounds good.'; 
  }else{
    return 'No go.';
  }
  
}
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
        return 'Thank you so much.';
      break;
      case 'not as generous':
        return 'Thank you.';
  
    default:
      return 'Bye.';
      break;
  }
}

console.log(scuberGreetingForFeet(2600));
console.log(ternaryCheckCity('NYC'));
console.log(switchOnCharmFromTip('stingy'));
