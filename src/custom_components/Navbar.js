import React from 'react'
import react,{useState} from 'react'

export default function Navbar(props) {
  const [mode, setMode] = useState('white')
  function enableDarkMode(e){
    e.preventDefault()
  let btn = document.getElementById('edm')
    if(mode === 'white'){
   let a = document.body.style.backgroundColor ="#042743"
   document.body.style.color = "white"
   btn.textContent = "Disable Dark Mode"
   setMode(a)
    }else{
      let b = document.body.style.backgroundColor ="white"
      document.body.style.color = "black"
      btn.textContent = "Enable Dark Mode"
   setMode(b)

    }
  }
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">{props.title}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">About</a>
          </li>
       
          <li class="nav-item">
            <a class="nav-link" href="/">Contact</a>
          </li>
       
         
        </ul>
        <form class="d-flex" role="search">
          <button class="btn btn-outline-primary" type="submit" id="edm" onClick={enableDarkMode}>Enable Dark Mode</button>
        </form>
      </div>
    </div>
  </nav>
  </>
  )
}
