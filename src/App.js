import logo from './image/logo-two.png';
import './App.css';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedin, FaSlidersH, FaRegClock } from "react-icons/fa";
import { FaLocationDot, FaPlay, FaHandshakeAngle,FaAngleRight } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { IoIosSearch, IoIosArrowForward, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GiPodiumWinner } from "react-icons/gi";
import { GrUserSettings, GrFormPrevious, GrFormNext } from "react-icons/gr";
import { IoSettingsOutline, IoMegaphoneOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineMarkEmailUnread } from "react-icons/md";


function App() {
  return (
    <div>
      {/* -start header- */}
      <header className='black'>
        <div className="bgblue">
          <div className="container">
            <div className='topheader  justify-content align-center'>
              <div className="left_add c_width">
                <ul>
                  <li>
                    <i><FaPhoneAlt></FaPhoneAlt></i>
                    <span>+0123456789</span>
                  </li>
                  <li>
                    <i><FaEnvelope></FaEnvelope></i>
                    <span>info@everb.com</span>
                  </li>
                  <li>
                    <i><FaLocationDot></FaLocationDot></i>
                    <span>28/A Street, USA</span>
                  </li>
                </ul>
              </div>
              <div className="right_social c_width">
                <ul>
                  <li><a href='' target='_blank'><i><FaFacebookF></FaFacebookF></i></a></li>
                  <li><a href='' target='_blank'><i><FaTwitter></FaTwitter></i></a></li>
                  <li><a href='' target='_blank'><i><FaLinkedin></FaLinkedin></i></a></li>
                  <li><a href='' target='_blank'><i><ImInstagram></ImInstagram></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* -end header- */}

      {/* -start nav- */}
      <div className='hr'>
        <div className='container'>
          <div className='logoheader '>
            <div className='main_logo flex justify-content'>
              <a>
                <img src={logo}></img>
              </a>
              <div className='navbar'>
                <nav className='flex'>
                  <ul className=' main_menu flex'>
                    <li><a className='active'>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Services</a></li>
                    <li><a className='ar'>portfolio<i><IoIosArrowForward></IoIosArrowForward></i></a></li>
                    <li><a>pages</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact Us</a></li>
                  </ul>
                  <div className='other flex'>
                    <div className='search'><i><IoIosSearch></IoIosSearch></i></div>
                    <div className='slide'><i><FaSlidersH></FaSlidersH></i></div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end nav- */}

      {/* -start banner- */}
      <div className='main'>
        <div className='table'>
          <div className='cell'>
            <div className='container'>
              <div className='row align-center flex'>
                <div className='col-m1'>
                  <div className='bn_text'>
                    <h1>Your Business Our Responsibility</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    <div className='btn'>
                      <a className='default'>Get Started</a>
                      <a className='play'><i><FaPlay></FaPlay></i>Watch Video</a>
                    </div>
                  </div>
                </div>
                <div className='col-m2'>
                  <div className='bn_img'>
                    <img src={require(`./image/asset 6.png`)} className='img'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end banner- */}


      {/* -start video- */}
      <div className='v-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-v'>
              <div className='v_text flex'>
                <a><i><FaPlay></FaPlay></i></a>
                <p>Watch our video and know more about us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end video- */}


      {/* -start theory- */}
      <div className='t-section'>
        <div className='container'>
          <div className='row clr flex'>
            <div className='col-t'>
              <div className='t_text'>
                <h2>My Theory is Customer Service is First</h2>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                <div className='sign'>
                  <img src={require(`./image/sign.png`)}></img>
                  <p>Babatunde Smithi</p>
                  <span>Founder and CEO</span>
                </div>
              </div>
            </div>
            <div className='t_img'>
              <img src={require(`./image/theory.png`)}></img>
            </div>
          </div>
        </div>
      </div>
      {/* -end theory- */}

      {/* -start about area- */}
      <div className='spacer'>
        <div className='container'>
          <div className='about-area'>
            <div className='row align-center flex'>
              <div className='col-a1'>
                <div className='a_img'>
                  <img src={require(`./image/about.jpeg`)}></img>
                </div>
              </div>
              <div className='col-a2'>
                <div className='a_text'>
                  <div className='a_title'>
                    <span>About Us</span>
                    <h2>The Modern Way to Make Succesful Business</h2>
                  </div>
                  <div className='a_row flex'>
                    <div className='a_col1 wd'>
                      <div className='us'>
                        <i className='one'><GiPodiumWinner></GiPodiumWinner></i>
                        <p>Award Winner</p>
                      </div>
                    </div>
                    <div className='a_col2 wd'>
                      <div className='us'>
                        <i className='two'><RiCustomerService2Fill></RiCustomerService2Fill></i>
                        <p>24/7 Support</p>
                      </div>
                    </div>
                    <div className='a_col3 wd'>
                      <div className='us'>
                        <i className='three'><FaHandshakeAngle></FaHandshakeAngle></i>
                        <p>100% Trusted</p>
                      </div>
                    </div>
                  </div>
                  <p className='ap'>Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  <div className='btn'>
                    <a className='default'>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end about area- */}


      {/* -start feature area- */}
      <div className='mb'>
        <div className='container'>
          <div className='main_ttl'>
            <span>Our Feature</span>
            <h2>Our Powerful Features</h2>
            <p>This feature is essential for any mobile app, so make sure you have it! These types of notifications can directly alert your user.</p>
          </div>
          <div className='row flex'>
            <div className='col-f'>
              <div className='card one'>
                <i><IoSettingsOutline></IoSettingsOutline></i>
                <h3>24/7 Support</h3>
                <p>When it comes after the noun, the adjective usually doesn't get a hyphen. So we say an easy to remember.</p>
              </div>
            </div>
            <div className='col-f'>
              <div className='card two'>
                <i><IoMegaphoneOutline></IoMegaphoneOutline></i>
                <h3>Marketing</h3>
                <p>When it comes after the noun, the adjective usually doesn't get a hyphen. So we say an easy to remember.</p>
              </div>
            </div>
            <div className='col-f'>
              <div className='card three'>
                <i><GrUserSettings></GrUserSettings></i>
                <h3>Auto Customized</h3>
                <p>When it comes after the noun, the adjective usually doesn't get a hyphen. So we say an easy to remember.</p>
              </div>
            </div>
            <div className='col-f'>
              <div className='card four'>
                <i><LuShieldCheck></LuShieldCheck></i>
                <h3>Full Secured</h3>
                <p>When it comes after the noun, the adjective usually doesn't get a hyphen. So we say an easy to remember.</p>
              </div>
            </div>
            <div className='col-f'>
              <div className='card five'>
                <i><FaRegClock></FaRegClock></i>
                <h3>Time Saving</h3>
                <p>When it comes after the noun, the adjective usually doesn't get a hyphen. So we say an easy to remember.</p>
              </div>
            </div>
            <div className='col-f'>
              <div className='card six'>
                <i><MdOutlineMarkEmailUnread></MdOutlineMarkEmailUnread></i>
                <h3>Email Marketing</h3>
                <p>When it comes after the noun, the adjective usually doesn't get a hyphen. So we say an easy to remember.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end feature area- */}

      {/* -start service area- */}
      <div className='service'>
        <div className='row'>
          <div className='col-s1 s-img'>
          </div>
          <div className='col-s2'>
            <div className='height'>
              <div className='s_text'>
                <h2>We Understand the User Need and Those Services for Them</h2>
                <ul>
                  <li><i><IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline></i>Building Networking</li>
                  <li><i><IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline></i>
                    Software Development</li>
                  <li><i><IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline></i>
                    Business Strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end service area- */}


      {/* -start team area- */}
      <div className='spacer'>
        <div className='container'>
          <div className='main_ttl'>
            <span>Team Member</span>
            <h2>Meet Our Expert Team Member</h2>
          </div>
          <div className='row flex'>
            <div className='col-tm'>
              <div className='tm_card'>
                <div className='tm_img'>
                  <img src={require(`./image/t1.jpeg`)}></img>
                  <div className='tm_text'>
                    <div className='tm_social'>
                      <ul>
                        <li><a><i><FaFacebookF></FaFacebookF></i></a></li>
                        <li><a><i><FaTwitter></FaTwitter></i></a></li>
                        <li><a><i><ImInstagram></ImInstagram></i></a></li>
                        <li><a><i><FaLinkedin></FaLinkedin></i></a></li>
                      </ul>
                    </div>
                    <h3>Jerry Hudson</h3>
                    <p>Business Consultant</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-tm'>
              <div className='tm_card'>
                <div className='tm_img'>
                  <img src={require(`./image/t2.jpeg`)}></img>
                  <div className='tm_text'>
                    <div className='tm_social'>
                      <ul>
                        <li><a><i><FaFacebookF></FaFacebookF></i></a></li>
                        <li><a><i><FaTwitter></FaTwitter></i></a></li>
                        <li><a><i><ImInstagram></ImInstagram></i></a></li>
                        <li><a><i><FaLinkedin></FaLinkedin></i></a></li>
                      </ul>
                    </div>
                    <h3>Juho Hudson</h3>
                    <p>Research Consultant</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-tm'>
              <div className='tm_card'>
                <div className='tm_img'>
                  <img src={require(`./image/t3.jpeg`)}></img>
                  <div className='tm_text'>
                    <div className='tm_social'>
                      <ul>
                        <li><a><i><FaFacebookF></FaFacebookF></i></a></li>
                        <li><a><i><FaTwitter></FaTwitter></i></a></li>
                        <li><a><i><ImInstagram></ImInstagram></i></a></li>
                        <li><a><i><FaLinkedin></FaLinkedin></i></a></li>
                      </ul>
                    </div>
                    <h3>Sarah Tylor</h3>
                    <p>Marketing Consultant</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-tm'>
              <div className='tm_card'>
                <div className='tm_img'>
                  <img src={require(`./image/t4.jpeg`)}></img>
                  <div className='tm_text'>
                    <div className='tm_social'>
                      <ul>
                        <li><a><i><FaFacebookF></FaFacebookF></i></a></li>
                        <li><a><i><FaTwitter></FaTwitter></i></a></li>
                        <li><a><i><ImInstagram></ImInstagram></i></a></li>
                        <li><a><i><FaLinkedin></FaLinkedin></i></a></li>
                      </ul>
                    </div>
                    <h3>Aikin Ward</h3>
                    <p>Business Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end team area- */}


      {/* -start testimonial area- */}
      <div className='testimonial'>
        <div className='row flex'>
          <div className='col-test1'>
            <div className='test_slider'>
              <div className='owl_outer'>
                <div className='owl_stage'>
                  <div className='owl_item'>
                    <div className='slide_item'>
                      <img src={require(`./image/s1.png`)}></img>
                      <h3>Adision Smith</h3>
                      <span>Designer</span>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='owl_nav'>
                <a className='prev'><span><i><GrFormPrevious></GrFormPrevious></i></span></a>
                <a className='next'><span><i><GrFormNext></GrFormNext></i></span></a>
              </div>
            </div>
          </div>
          <div className='col-test2'>
            <div className='test_img'></div>
          </div>
        </div>
      </div>
      {/* -end testimonial area- */}


      {/* -start portfolio area- */}
      <div className='portfolio spacer'>
        <div className='container'>
          <div className='main_ttl'>
            <span>Oue Feature</span>
            <h2>Our Powerful Features</h2>
            <p>This feature is essential for any mobile app, so make sure you have it! These types of notifications can directly alert your user.</p>
          </div>
          <div className='row flex'>
            <div className='col-p w-25'>
              <div className='p_item'>
                <div className='p_img'>
                  <img src={require(`./image/p1.jpeg`)}></img>
                  <div className='p_text'>
                    <h3>Online Business</h3>
                    <a className='p_btn'>Read More<i><GrFormNext></GrFormNext></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-p w-25'>
              <div className='p_item'>
                <div className='p_img'>
                  <img src={require(`./image/p2.jpeg`)}></img>
                  <div className='p_text'>
                    <h3>Digital Marketing</h3>
                    <a className='p_btn'>Read More<i><GrFormNext></GrFormNext></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-p w-50'>
              <div className='p_item'>
                <div className='p_img'>
                  <img src={require(`./image/p3.jpeg`)}></img>
                  <div className='p_text'>
                    <h3>Business Research</h3>
                    <a className='p_btn'>Read More<i><GrFormNext></GrFormNext></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-p w-25'>
              <div className='p_item'>
                <div className='p_img'>
                  <img src={require(`./image/p4.jpeg`)}></img>
                  <div className='p_text'>
                    <h3>Content Writing</h3>
                    <a className='p_btn'>Read More<i><GrFormNext></GrFormNext></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-p w-50'>
              <div className='p_item'>
                <div className='p_img'>
                  <img src={require(`./image/p5.jpeg`)}></img>
                  <div className='p_text'>
                    <h3>Virtual Assistant Service</h3>
                    <a className='p_btn'>Read More<i><GrFormNext></GrFormNext></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-p w-25'>
              <div className='p_item'>
                <div className='p_img'>
                  <img src={require(`./image/p6.jpeg`)}></img>
                  <div className='p_text'>
                    <h3>SEO Service</h3>
                    <a className='p_btn'>Read More<i><GrFormNext></GrFormNext></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end portfolio area- */}


      {/* -start progress area- */}
      <div className='progress'>
        <div className='row'>
          <div className='col-pro1 pro-img'>
          </div>
          <div className='col-pro2'>
            <div className='height'>
              <div className='pro_text'>
                <h2>We Always Try to be the Best Support to Our Clients as Possible</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
                <div className='inner'>
                  <p>Software Development</p>
                  <span>70%</span>
                  <div className='p_w'>
                    <div className='p_bar w-25'></div>
                  </div>
                </div>
                <div className='inner'>
                  <p>Digital Marketing</p>
                  <span>85%</span>
                  <div className='p_w'>
                    <div className='p_bar w-50'></div>
                  </div>
                </div>
                <div className='inner'>
                  <p>Software Development</p>
                  <span>95%</span>
                  <div className='p_w'>
                    <div className='p_bar w-75'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end progress area- */}


      {/* -start blog area- */}
      <div className='spacer'>
        <div className='container'>
        <div className='main_ttl'>
            <span>Our Blog</span>
            <h2>Our Latest Blogs</h2>
          </div>
          <div className='row flex'>
            <div className='col-bl'>
              <div className='b_card'>
                <div className='bl_img'>
                  <a><img src={require(`./image/b1.jpeg`)}></img></a>
                  <div className='b_date'>
                    <span>21 Feb</span>
                  </div>
                </div>
                <div className='b_text'>
                  <h3><a>The next genaration IT will change the world</a></h3>
                  <div className='b_info'>
                    <img src={require(`./image/bb1.png`)}></img>
                    <a><p>Aikin Ward</p></a>
                    <a className='b_btn'>Read More<i><GrFormNext></GrFormNext></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-bl'>
              <div className='b_card'>
                <div className='bl_img'>
                  <a><img src={require(`./image/b2.jpeg`)}></img></a>
                  <div className='b_date'>
                    <span>21 Feb</span>
                  </div>
                </div>
                <div className='b_text'>
                  <h3><a>Content writing demand day by day increasing</a></h3>
                  <div className='b_info'>
                    <img src={require(`./image/bb2.png`)}></img>
                    <a><p>John Smith</p></a>
                    <a className='b_btn'>Read More<i><GrFormNext></GrFormNext></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-bl'>
              <div className='b_card'>
                <div className='bl_img'>
                  <a><img src={require(`./image/b3.jpeg`)}></img></a>
                  <div className='b_date'>
                    <span>21 Feb</span>
                  </div>
                </div>
                <div className='b_text'>
                  <h3><a>Don't buy a tech gift until you read these rules image</a></h3>
                  <div className='b_info'>
                    <img src={require(`./image/bb3.png`)}></img>
                    <a><p>Sarah Tylor</p></a>
                    <a className='b_btn'>Read More<i><GrFormNext></GrFormNext></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end blog area- */}


      {/* -start contact area- */}
      <div className='pb'>
        <div className='container'>
          <div className='row flex'>
            <div className='col-ct1'>
              <div className='ct_img'>
              <img src={require(`./image/contact.jpeg`)}></img>
              </div>
            </div>
            <div className='col-ct2'>
              <div className='ct_form'>
                <div className='ct_text'>
                  <h3>We Love to Hear From You</h3>
                  <p>Feel free and share with us. We will get you</p>
                </div>
                <form>
                  <div className='row'> 
                  <div className='sub_col'>
                    <div className='form_group'>
                      <input type='text' name='name' className='f_control' placeholder='name'></input>
                    </div>
                  </div>
                  <div className='sub_col'>
                    <div className='form_group'>
                      <input type='email' name='email' className='f_control' placeholder='email'></input>
                    </div>
                  </div>
                  <div className='sub_col'>
                    <div className='form_group'>
                      <input type='text' name='subject' placeholder='subject' className='f_control'></input>
                    </div>
                  </div>
                  <div className='sub_col'>
                    <div className='form_group'>
                      <input type='text' name='message' placeholder='message' className='f_control h_con' ></input>
                    </div>
                  </div>
                  <div className='btn con_btn'>
                      <a className='default'>Send Message</a>
                    </div>
                  </div>
                </form>
                <img src={require(`./image/plan.png`)} className='con_shape'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end contact area- */}

      {/* -start news area- */}
      <div className='news'>
        <div className='container'>
          <div className='n_area'>
            <h2>Subscribe Our Newsletter</h2>
            <div className='col-n'>
             <form className='n_form'>
              <input className='n_control' type='emain' placeholder='Email'></input>
              <button>Subscribe</button>
             </form>
          </div>
          <img src={require(`./image/news.png`)} className='n_shape'></img>
        </div>
      </div>
      </div>
      {/* -end news area- */}


      {/* -start footer area- */}
      <div className='footer'>
        <div className='container'>
          <div className='row flex'>
            <div className='col_ft'>
              <div className='ft_widget'>
                <div className='ft_logo'>
                  <a><img src={logo}></img></a>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                <div className='ft_social'>
                  <a><i><FaFacebookF></FaFacebookF></i></a>
                  <a><i><FaTwitter></FaTwitter></i></a>
                  <a><i><ImInstagram></ImInstagram></i></a>
                  <a><i><FaLinkedin></FaLinkedin></i></a>
                </div>
              </div>
            </div>
            <div className='col_ft'>
              <div className='ft_widget pl-75'>
                <h3>Services</h3>
                <ul>
                  <li><a><i><FaAngleRight></FaAngleRight></i>Development</a></li>
                  <li><a><i><FaAngleRight></FaAngleRight></i>Business</a></li>
                  <li><a><i><FaAngleRight></FaAngleRight></i>Designing</a></li>
                  <li><a><i><FaAngleRight></FaAngleRight></i>Branding</a></li>
                  <li><a><i><FaAngleRight></FaAngleRight></i>Network</a></li>
                </ul>
              </div>
            </div>
            <div className='col_ft'>
            <div className='ft_widget pl-75'>
                <h3>Quick Links</h3>
                <ul>
                <li><a><i><FaAngleRight></FaAngleRight></i>Home</a></li>
                <li><a><i><FaAngleRight></FaAngleRight></i>About Us</a></li>
                <li><a><i><FaAngleRight></FaAngleRight></i>Blogs</a></li>
                <li><a><i><FaAngleRight></FaAngleRight></i>Team</a></li>
                <li><a><i><FaAngleRight></FaAngleRight></i>FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className='col_ft'>
            <div className='ft_widget pl-75'>
                <h3>Find Us</h3>
                <ul>
                <li><a><i><FaAngleRight></FaAngleRight></i>28/A Street, USA</a></li>
                <li><a><i><FaAngleRight></FaAngleRight></i>+13325845845</a></li>
                <li><a><i><FaAngleRight></FaAngleRight></i>+19932558484</a></li>
                <li><a><i><FaAngleRight></FaAngleRight></i>info@everb.com</a></li>
                <li><a><i><FaAngleRight></FaAngleRight></i>mail@everb.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='copy_area'>
          <div className='container'>
            <div className='row align-center flex'>
              <div className='col-cp start'>
                <p>©2022 Everb. All Rights Reserved by</p>
                <a> HiBootstrap.com</a>
              </div>
              <div className='col-cp end'>
                <ul>
                  <li className='first'><a>Privacy Policy</a></li>
                  <li><a>Terms & Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* -end footer area- */}


      </div>
  );
}

export default App;
