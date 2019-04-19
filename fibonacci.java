//Recursiva tradicional
public class Fibonacci {
  
  static long fibo(int n) {
    if (n < 2) {
      return n;
    } else {
      return fibo(n - 1) + fibo(n - 2);
    }
  }  
}

//Recursiva utilizando operador ternario
public class Fibonacci {
  
  static long fibo(int n) {
    return (n < 2) ? n : fibo(n - 1) + fibo(n - 2);
  }
}

//Iterativa
public class Fibonacci {
  
  static long fibo(int n) {
    int F = 0;     // atual
    int ant = 0;   // anterior

    for (int i = 1; i <= n; i++) {

      if (i == 1) {
        F = 1;
        ant = 0;
      } else {
        F += ant;
        ant = F - ant;
      }

    }

    return F;
  }
}
