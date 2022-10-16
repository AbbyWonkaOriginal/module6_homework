function isPrime(n) {
    if (!Number.isInteger(n) || n > 1000 || n < 2) return 'данные неверны';
  
    let k = Math.sqrt(n);
    for (let i = 2; i <= k; i++) if (n % i === 0) return 'составное число';
  
    return 'простое число';
  }
  
  console.log(isPrime(63)); // Сюда вводим число