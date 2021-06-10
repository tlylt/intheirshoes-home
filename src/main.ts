import './style.css'
import htpImgUrl1 from '../assets/4.png'
import htpImgUrl2 from '../assets/5.png'
import htpImgUrl3 from '../assets/6.png'
import htpArrow from "../assets/arrow.svg"
import rEdu from "../assets/Educators_Guide.png"
import rEdu1 from "../assets/Educators_Guide1.png"

document.getElementById('htp-1')?.setAttribute('src', htpImgUrl1)
document.getElementById('htp-2')?.setAttribute('src', htpImgUrl2)
document.getElementById('htp-3')?.setAttribute('src', htpImgUrl3)
document.getElementById('htp-arrow-1')?.setAttribute('src', htpArrow)
document.getElementById('htp-arrow-2')?.setAttribute('src', htpArrow)

document.getElementById('r-play')?.setAttribute('src', rEdu1)
document.getElementById('r-edu')?.setAttribute('src', rEdu)