import{p as v}from"./Header-CpvqJSKz.js";import{g as m}from"./getPbImageURL-C7XpzPdk.js";function y(){document.body.insertAdjacentHTML("beforeend",`
     <div class="container">
      <div class="buttonGroup">
        <button type="button" class="cancel">취소</button>
        <button type="button" class="modify">수정</button>
      </div>
    </div>
  `),f()}async function f(){const n=new URLSearchParams(location.search).get("product"),t=await v.collection("products").getOne(n),{brand:a,description:o,price:e,discount:i}=t,s=`
    <div class="wrapper">
      <div class="brand">
        <label for="brand">브랜드</label>
        <input type="text" id="brand" value="${a}" />
      </div>

      <div class="visual">
        <img src="${m(t)}" alt="" />
      </div>

      <div class="desc">
        <label for="description">상품 설명</label>
        <input type="text" id="description" value="${o}"  />
      </div>

      <div class="price">
        <label for="price">가격</label>
        <input type="text" id="price" value="${e}" />
      </div>

      <div class="discount">
        <label for="discount">할인율</label>
        <input type="text" id="discount" value="${i}" />
      </div>

      <div class="real-price">${e-e*i*.01}원</div>
    </div>
  `;document.querySelector(".container").insertAdjacentHTML("afterbegin",s),g(t,n)}function g(d,n){const{price:t,discount:a}=d,o=document.querySelector("#price"),e=document.querySelector("#discount"),i=document.querySelector(".cancel"),s=document.querySelector(".modify");function p(){let c=t,r=a;c=o.value,r=e.value;const u=c*(r*.01),l=c-u;document.querySelector(".real-price").textContent=l.toLocaleString()+"원"}function b(){const c=document.querySelector("#brand").value,r=document.querySelector("#price").value,u=document.querySelector("#discount").value,l=document.querySelector("#description").value;v.collection("products").update(n,{brand:c,price:r,discount:u,description:l}).then(()=>{location.href="/src/pages/product/"}).catch(()=>{console.error("...")})}o.addEventListener("input",p),e.addEventListener("input",p),i.addEventListener("click",()=>history.back()),s.addEventListener("click",b)}y();
