/* union type 합집합 */
let str: "name" | "age" | "address";

// 파이프라인
// str = "name";

// type CompanyB = {
//   ceo: string;
//   특징: string;
// };

// type Company = CompanyA & CompanyB;
// type _Company = CompanyA | CompanyB;

interface CompanyA {
  companyName: string;
  since: number;
}

interface Company extends CompanyA {
  ceo: string;
  특징: string;
}

const company1: Company = {
  companyName: "8b-studio",
  since: 2022,
  ceo: "심선범",
  특징: "1인 개발 체제",
};

const company2: Company = {
  companyName: "apple",
  since: 2010,
  ceo: "steve",
  특징: "잘나가는 아이폰",
};

/* intersection type 교집합 */
