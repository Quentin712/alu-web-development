{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;  
}

/* .background {
  bacground: red !important;
  width: 100%;
  height: 100vh;
} */

section{
  background: linear-gradient(rgba(41, 48, 61, 0), rgba(7, 22, 41, 1)), url("images/bg.jpg");
  /* filter: grayscale(100%); */
  height: 100vh;
  color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
}
section #people{
  display: flex;
  align-items: center;
  gap: 20px;
}

#people .person img{
  border-radius: 100%;
}
section > div:nth-of-type(2) > div{
  display: felx;
  gap: 20px;
}
