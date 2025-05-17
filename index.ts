// ============ Array va touple bilan ishlash ===============

// function minVal(arr: number[]): number {
//   let minimum = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (minimum > arr[i]) {
//       minimum = arr[i];
//     }
//   }
//   return minimum;
// }

// console.log(minVal([5, 4, 3, 6, 7, 0, 2, 1]));

// ============================================================

// function stringReturn(arr: string[]): string {
//   const result = arr.join(",");
//   return result;
// }

// console.log(stringReturn(["Salom", "men", "Joe", "Doe"]));

// =============================================================

// function login(arr: [string, string, boolean]) {
//   console.log(`The user ${arr[0]},
//     have been registeren on date ${arr[1]}.
//     Is online now: ${arr[2]}`);
// }

// login(["example@gmail.com", "14.05.2025", false]);

// ============================================================

// type Phone = {
//   brand: string;
//   model: string;
//   price: number;
// };

// const iPhone: Phone = {
//   brand: "Apple",
//   model: "iPhone 15 ProMax",
//   price: 1500,
// };

// const samsung: Phone = {
//   brand: "Samsung",
//   model: "Samsung galaxy S24 Ultra",
//   price: 1100,
// };

// const redmi: Phone = {
//   brand: "Redmi",
//   model: "Redmi 15 pro",
//   price: 300,
// };

// function expensive(arr: object[]) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     max = Math.max(max, arr[i].price);
//   }
//   return max;
// }

// console.log(expensive([redmi, samsung, iPhone]));

// =========================================================

// type Student = {
//   name: string;
//   grade: number;
//   isActive: boolean;
// };

// const studentSh: Student = {
//   name: "Shodiyor",
//   grade: 5,
//   isActive: true,
// };

// const studentF: Student = {
//   name: "Faxriddin",
//   grade: 6,
//   isActive: true,
// };

// const studentL: Student = {
//   name: "Lutfiddin",
//   grade: 4,
//   isActive: false,
// };
// function activeStudents(arr) {
//   let actives: object[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].isActive) {
//       actives.push(arr[i]);
//     }
//   }
//   return actives;
// }

// console.log(activeStudents([studentSh, studentF, studentL]));

// =============================================================

// ============== Union types bilan ishlash ============

// function formatPrice(price: string | number) {
//   if (typeof price == "string") {
//     return Number(price);
//   }
//   return price;
// }
// console.log(formatPrice("500"));

// ==============================================================

// function inputType(input: string | boolean) {
//   if (typeof input == "boolean") {
//     return String(input);
//   } else {
//     return input.length;
//   }
// }

// console.log(inputType("true"));

// ==================================================================

// =============== Primitive types bilan ishlash ====================

// function isOld(age: number): boolean {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isOld(18));

// ====================================================================

// function user(name: string | null | undefined): string {
//   if (typeof name == "undefined" || typeof name == "object") {
//     return "Mehmon";
//   } else {
//     return name;
//   }
// }

// console.log(user(undefined));

// =======================================================================

// function logMessage(): void {
//   console.log("Xush kelibsiz");
// }
// logMessage();

// ========================================================================

// function errorMessage(): never {
//   throw new Error("Xatolik yuz berdi");
// }

// errorMessage();

// ==========================================================================

// =================== Bonuslar =======================

// function findFibonacci(n: number): number[] {
//   const acc1 = 0;
//   const acc2 = 1;
//   let fibonArr: number[] = [acc1, acc2];

//   for (let i = 2; i < n; i++) {
//     fibonArr.push(fibonArr[i - 2] + fibonArr[i - 1]);
//   }
//   return fibonArr;
// }

// console.log(findFibonacci(10));

// ==========================================================================

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   inStock: boolean;
// }

// const product1: Product = {
//   id: 1,
//   name: "Telefon",
//   price: 500,
//   inStock: false,
// };

// const product2: Product = {
//   id: 1,
//   name: "Kartoshka",
//   price: 5,
//   inStock: false,
// };

// const product3: Product = {
//   id: 1,
//   name: "Mashina",
//   price: 10000,
//   inStock: true,
// };

// function filteredProducts(arr): object[] {
//   const expensive: object[] = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].price > 100) {
//       expensive.push(arr[i]);
//     }
//   }
//   return expensive;
// }

// console.log(filteredProducts([product1, product2, product3]));
