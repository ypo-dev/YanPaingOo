import MyImg from '../public/vector.png'
import AboutImg from '../public/YPO.png'
import Img1 from '../public/1.png'
import Img2 from '../public/2.png'
import Img3 from '../public/3.png'
import Img4 from '../public/4.png'
import P1 from '../public/auro.png'
import P2 from '../public/moviesproject.png'
import P3 from '../public/portfolio.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { motion } from 'framer-motion';



const Home = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t8lzply', 'template_8mwsf0l', form.current, 'user_cq1cZKRpoD19o5TelMAxy')
      .then((result) => {
        console.log(result.text);

        Toastify({
          text: "send successfully!",
          className: "info",
          close: true,
          style: {
            background: "#0caeeb",
          }
        }).showToast();

      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <section className="main">
      <div id="main" className="main-page">
        <div style={{ margin: '0', padding: '0' }} className="row">
          <div className="col-lg-6">
            <div className="text-center">
              <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .2
                  }
                },
              }}>
                <p className="mainText">
                  I am Yan Paing Oo <br />
                  PHP Laravel<br />
                  Web Developer
                </p>
              </motion.div>
              <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .3
                  }
                },
              }}>
                <p className="subText">&quot; With Creative UI/UX Design &quot;</p>
              </motion.div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                  scale: .8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: .4
                  }
                },
              }}>
                <img className="MainImg" src={MyImg.src} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="About">
        <p className="AboutTitle">ABOUT</p>
        <div className="row" style={{ margin: '0', padding: '0' }}>
          <div
            style={{ margin: '0', padding: '0' }}
            className="col-lg-6 col-md-12 col-sm-12 text-center"
          >
            
              <img src={AboutImg.src} className="aboutImg img-fluid" alt="..." />
          
            <div className="flex-container text-center">
              <div className="IconCenter">
                <a target="_blank" rel="noreferrer" className="IconSocial" href="https://github.com/ypo-dev/"><i className="fab fa-github"></i></a>
              </div>
              <div className="IconCenter">
                <a target="_blank" rel="noreferrer" className="IconSocial" href="https://twitter.com/yanpaing21"><i className="fab fa-twitter"></i></a>
              </div>
              <div className="IconCenter">
                <a target="_blank" rel="noreferrer" className="IconSocial" href="https://www.linkedin.com/in/yanpaingoo1998/"
                ><i className="fab fa-linkedin"></i
                ></a>
              </div>
            </div>
          </div>
          <div
            style={{ margin: '0', padding: '0' }}
            className="col-lg-6 col-md-12 col-sm-12"
          >
            <p className="AboutText">
              I&apos;m a Laravel Developer and interested in UI/UX Design. In front
              end, I can use VUE.js and Bootstrap. I enjoy working with coding and
              debugging errors. Full Stack web Developer is my Goal and Future.
            </p>
          </div>
        </div>
      </div>

      <div id="skills" className="clients">
        <p className="clientsTitle">SKILLS</p>
        <div style={{ margin: '0', padding: '0' }} className="row">
          <div
            className="col-lg-3 col-md-3 col-sm-6 text-center"
          >
            <img className="clientLOGO" src={Img1.src} />
          </div>
          <div
            className="col-lg-3 col-md-3 col-sm-6 text-center"
          >
            <img className="clientLOGO" src={Img2.src} />
          </div>
          <div
            className="col-lg-3 col-md-3 col-sm-6 text-center"
          >
            <img className="clientLOGO" src={Img3.src} />
          </div>
          <div
            className="col-lg-3 col-md-3 col-sm-6 text-center"
          >
            <img className="clientLOGO" src={Img4.src} />
          </div>
        </div>
      </div>
      <div id="projects">
        <p className="ProjectsTitle">PROJECTS</p>
        <div className="row" style={{ margin: '0', padding: '0', marginTop: '10%' }} >
          <div className="col-lg-4">
            <div className="cardBox card">
              <img
                src={P1.src}
                className="card-img-top"
                alt="Voice Overs by Auro"
              />
              <div className="card-body">
                <p className="card-text">VOICEOVERS By Auro <a className="ViewLink" rel="noreferrer" target="_blank" href="https://aurokarshinevoiceover.com/">view</a></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cardBox card">
              <img
                src={P2.src}
                className="card-img-top"
                alt="MoviesDownloadMM"
              />
              <div className="card-body">
                <p className="card-text">
                  Movies Download MM Project <a className="ViewLink" rel="noreferrer" target="_blank" href="http://moviesdownloadmm.42web.io/index.php">view</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cardBox card">
              <img
                src={P3.src}
                className="card-img-top"
                alt="Portfolio"
              />
              <div className="card-body">
                <p className="card-text">Portfoloi <a className="ViewLink" rel="noreferrer" target="_blank" href="http://yanpaingoo.dev/">view</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="contact">
        <p className="contactTitle">
          CONTACT
        </p>
        <div className="contactBOX">
          <form method="POST" ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label"
              >Message</label
              >
              <textarea
                name="message"
                className="form-control"
                id="textarecontact"
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" value="Send" className="btn btnContact">send</button>
          </form>
        </div>
      </div>
     
    </section>


  )

}

export default Home;