import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import resetCSS from "../Layout/resetCSS";
import gsap from "gsap";
import pb from "../api/pocketbase";
import Swal from "sweetalert2";

@customElement("register-element")
class Register extends LitElement {
  @property({ type: Object }) valid = {
    step1: false,
    step2: false,
  };

  static styles: CSSResultGroup = [
    resetCSS,
    css`
      .container {
        position: absolute;
        inset-block-start: 50%;
        inset-inline-start: 50%;
        translate: -50% -50%;
        inline-size: 440px;
        overflow: hidden;
        /* border: 1px solid red; */
        padding: 1rem;

        & h2 {
          font-size: 3rem;
          font-weight: bold;
        }

        .line {
          block-size: 4px;
          background-color: #fff;
          margin-block: 1rem;

          & div {
            inline-size: 30%;
            block-size: 100%;
            background: orange;
          }
        }

        .wrapper {
          width: 900px;
          display: flex;
          justify-content: space-between;

          & div {
            width: 440px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          & input {
            border: 1px solid white;
            padding: 1rem;
            min-width: 200px;
            margin: 0.5rem 0;
            outline: none;
          }

          & button {
            margin-top: 1.5rem;
            background-color: dodgerblue;
            color: white;
            border: none;
            padding: 1rem;
            cursor: pointer;

            &:disabled {
              background-color: #848484;
              color: black;
              cursor: not-allowed;
            }
          }
        }
      }
    `,
  ];

  get idInput() {
    return this.renderRoot.querySelector<HTMLInputElement>("#idField")!;
  }

  get pwInput() {
    return this.renderRoot.querySelector<HTMLInputElement>("#pwField")!;
  }

  handleValidation(e: Event) {
    const target = e.currentTarget as HTMLInputElement;
    const stepKey = target.id === "idField" ? "step1" : "step2";
    this.valid[stepKey] = target.value.length > 5;

    if (target.value.length > 5) this.requestUpdate();

    // if (target.value.length > 5) {
    //   this.valid.step1 = true;
    //   this.requestUpdate();
    // } else {
    //   this.valid.step1 = false;
    // }
  }

  handleStep1() {
    const wrapper = this.renderRoot.querySelector(".wrapper");
    const line = this.renderRoot.querySelector(".line > div");
    gsap.to(wrapper, { x: -460 });
    gsap.to(line, { width: "70%" });
  }

  handleStep2() {
    pb.collection("users")
      .create({
        email: this.idInput.value,
        password: this.pwInput.value,
        passwordConfirm: this.pwInput.value,
      })
      .then(() => {
        Swal.fire({ text: "회원가입 완료! 로그인 페이지로 이동합니다!" }).then(() => {
          location.href = "/src/pages/login/";
        });
      })
      .catch(() => {
        Swal.fire({ text: "잘못된 정보를 입력하셨습니다." }).then(() => {
          location.reload();
        });
      });
  }

  render() {
    return html`
      <div class="container">
        <h2>회원가입</h2>
        <div class="line">
          <div></div>
        </div>
        <div class="wrapper">
          <div class="step-1">
            <h3>
              로그인에 사용할 <br />
              아이디를 입력해주세요.
            </h3>
            <label for="idField"></label>
            <input @input="${this.handleValidation}" type="email" id="idField" placeholder="아이디(이메일)입력" />
            <button @click="${this.handleStep1}" ?disabled=${!this.valid.step1} type="button" class="next-1">다음</button>
          </div>
          <div class="step-2">
            <h3>
              로그인에 사용할 <br />
              비밀번호를 입력해주세요.
            </h3>
            <label for="pwField"></label>
            <input @input="${this.handleValidation}" type="password" id="pwField" placeholder="비밀번호 입력" />
            <button @click="${this.handleStep2}" ?disabled=${!this.valid.step2} type="button" class="next-2">회원가입</button>
          </div>
        </div>
      </div>
    `;
  }
}
