import React from 'react'
import "../Style/AboutStyle.css";

const About = () => {
  return (

    <>
        <div style={{backgroundColor: "#98caf8"}} class="p-5 mb-2  rounded-3 d-flex">
      <div class="container-fluid About-set-padding">
        <h1 class="display-5 fw-bold">About us</h1>
        <p class="col-md-12 fs-4">Easy-Wakeel is a platform where we provide online solutions to your legal needs and problems. On this platform, anyone with a mobile phone or a computer with internet connection can come and gets most of his legal questions answered. On Easy-Wakeel.com you dont only get legal advice but also get legal information by watching our videos on various legal topics and questions answered in Urdu and English languages. So, now you get solutions for most of your legal needs while sitting at home. That is Easy-Wakeel and we are continuously working to bring more services and comfort for people in our society.
</p>
        <p class="col-md-12 fs-4">In our society, it is very difficult for women to get legal knowledge and solution of all the legal issues they face in their daily life. They are not allowed to go on their own to find a lawyer and of course, it is considered unsafe for a woman or a young girl to go alone and visit a lawyer in the densely populated areas of the city. In this era, most of the educated people
</p>
        <button class="btn btn-primary btn-lg" type="button">Contact us</button>
      </div>
      
      
    </div>

     <div className='text-center'>
       <h1 className='mb-3'>Founders Easy-Wakeel</h1>
     </div>
    <div className='container-fluid contain'>
      
      <div class="container">
        <div class="row">
            <div class="col-lg-6 col-sm-6 col-md-6">
                <div class="card">
                    <div class="face front-face">
                        <img src="https://i.postimg.cc/wv8z61Dc/IMG-20210722-WA0003.jpg"
                            alt="" class="profile"/>
                        <div class="pt-3 text-uppercase name">
                            Faraz Shah
                        </div>
                        <div class="designation">MERN Stack Developer</div>
                    </div>
                    <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial">
                        Aim of this application was to make the people lives easier, a easy way to connect with numbers of lawyer. Helps you solving your problems
                        </div>
                        <span class="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-sm-6 col-md-6">
                <div class="card">
                    <div class="face front-face">
                        <img src="https://i.postimg.cc/1RKSQ5Xw/Afnan.png"
                            alt="" class="profile"/>
                        <div class="pt-3 text-uppercase name">
                            Afnan Hassan
                        </div>
                        <div class="designation">Front End Developer</div>
                    </div>
                    <div class="face back-face">
                        <span class="fas fa-quote-left"></span>
                        <div class="testimonial">
                            Time is the most valuable thing in this era, this application will be a time saver for many people.  
                        </div>
                        <span class="fas fa-quote-right"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}





export default About
