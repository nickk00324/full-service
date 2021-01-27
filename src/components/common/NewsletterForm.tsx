import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 500px;
  label {
    display: block;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  input {
    height: 40px;
  }

  input[type="email"] {
    width: 75%;
    padding-left: 10px;
    font-size: 16px;
  }

  input[type="submit"] {
    background-color: black;
    -webkit-appearance: none;
    color: white;
    height: 46px;
    border: none;
    border-radius: 3px;
    font-size: 18px;
    transition: all 0.5s;
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
      background-color: #e9286e;
    }
  }

  .FormMeat {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
`
const NewsletterForm = () => {
  const [email, setEmail] = React.useState("")
  return (
    <Container>
      <div id="mc_embed_signup">
        <form
          action="https://caseybaden.us7.list-manage.com/subscribe/post?u=551babac353c1e017a5106989&amp;id=98f7aa3516"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
              
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL">Subscribe to our Newsletter </label>
            <div className="FormMeat">
              <input
                type="email"
                value={email}
                name="EMAIL"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
              />
                  
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_551babac353c1e017a5106989_98f7aa3516"
                  tabIndex={-1}
                  value=""
                />
              </div>
                  
              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  onClick={() => setEmail("")}
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
                
          </div>
        </form>
      </div>
    </Container>
  )
}

export default NewsletterForm
