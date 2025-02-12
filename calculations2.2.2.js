function increaseBalance(x, y) {
    x += y;
    return ++x; // инкрементируем перед возвратом
  }
  
  function decreaseBalance(x, y) {
  x -= y;   
  return --x; // декрементируем перед возвратом
  }
  
  function divideBalanceByAccounts(x, y) {
    x /= y;
    return ++x; // инкрементируем перед возвратом
  }
  
  function getRestAfterDivision(x, y) {
    x %= y;
    return x;
    // Оператор %= выполняет операцию взятия остатка от деления и присваивает результат переменной. 
    // Однако его использование внутри increaseBalance и decreaseBalance не имеет смысла, 
    // так как остаток от деления не связан с увеличением или уменьшением баланса.
  }
  

  console.log(increaseBalance(3000, 700));
  console.log(decreaseBalance(3000, 700));
  console.log(divideBalanceByAccounts(3000, 2));
  console.log(getRestAfterDivision(7000, 3));
  