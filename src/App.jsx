import { useState } from 'react'
import Logo from './assets/logo-text.svg'
import LogoBlack from './assets/logo-dark.svg'
import Mockup from './assets/MacBook Pro and iPhone 15 Pro Mockup.svg'
import './App.css'
import wipo from './assets/wipo.jpg'
import inapi from './assets/inapi.jpg'
import cati from './assets/cati.jpg'
import time from './assets/time.svg'
import research from './assets/research.svg'
import translation from './assets/translate.svg'
import document from './assets/document.svg'
import image from './assets/imageGen.svg'
import pdf  from './assets/pdf.svg'
import abstract  from './assets/abstract.svg'
import database from './assets/database.svg'
import creation from './assets/creation.svg'
import prof1 from './assets/prof1.png'
import gra1 from './assets/gra-1.svg'
import gra2 from './assets/gra-2.svg'
import FAQ from './components/FAQ'
import RevealX from './components/RevealX'
import AnimatedButton from './components/AnimatedButton'
import Reveal from './components/Reveal'
import AnimatedHeader from './components/AnimatedHeader'

function App() {
  const [month, setMonth] = useState(true)
  const [faqs, setFaqs] = useState([
    {
      question: "FAQ",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: true
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false
    },
    {
      question:
        "How many questions does it take to makes a succesful FAQ Page?",
      answer: "This many!",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>  

    
    <header className='max-w-[1200px] z-50 w-[80%] left-1/2 translate-x-[-50%] p-2.5 rounded-full flex items-center mx-auto fixed mt-8 bg-[rgb(44,44,44)]/20 backdrop-blur-[200px]'>
      <div className="logo"><img src={Logo} alt="" /></div>
      <nav className='mx-auto'>
        <ul className='flex gap-8 items-center text-white'>
          <li><a href='#' className='font-semibold'>Home</a></li>
          <li><a href='#About' className='font-semibold'>About</a></li>
          <li><a href='#Services' className='font-semibold'>Services</a></li>
          <li><a href='#Process' className='font-semibold'>Process</a></li>
          <li><a href='#Contact' className='font-semibold'>Contact</a></li>
        </ul>
      </nav>
      <AnimatedButton>

      <button className='bg-white rounded-full p-3 px-6  text-black font-bold text-lg'>Sign In</button>
      </AnimatedButton>
    </header>
    
    <main>
      <section className="landing m-5  text-center rounded-3xl" >
        <div className="landing-content py-52">
          <Reveal>
            <h1 className='text-white font-bold text-[86px] text-center leading-[110px]'>
            Empowering inventors with our guidance towards success.
            </h1>
          </Reveal>
          <Reveal>
          <p className='text-white text-center max-w-[750px] mx-auto mt-5 text-lg'>
          we specialize in guiding inventors to success. Our expert team provides comprehensive support through every step of the patent process, ensuring your innovations are protected and positioned for growth.
          </p>
          </Reveal>
          <div className="flex justify-center mt-7 mb-10 gap-5">
            <AnimatedButton>

          <button className='bg-white rounded-full p-3 px-6  text-black font-bold'>Get Started</button>
            </AnimatedButton>
            <AnimatedButton>
          <button className='border-white border rounded-full p-3 px-6 border-white text-white font-bold'>How It Works</button>
            </AnimatedButton>

          </div>
          <Reveal>

          <img className='mx-auto ' src={Mockup} alt="" />
          </Reveal>
        </div>
      </section>
      <section className='text-black my-12'>
        <div className="container mx-auto p-5">
          <h2 className='text-sm uppercase border w-fit font-bold text-center mx-auto p-2 px-3 text-primary border-primary font-semibold  rounded-full mb-5'>Our Collaborations
          </h2>
            <p className='text-5xl font-bold capitalize text-center mx-auto leading-[60px] bg-gradient-to-b from-primary  to-dark-blue  text-transparent bg-clip-text'>We work with world's top companies <br /> to share your patent</p>
            <div className="grid-3 py-10 gap-5">
            <Reveal >

              <div className="box rounded-3xl">
                <img className='rounded-xl object-cover h-80 w-full' src={wipo} alt="" />
                <h3 className='text-2xl font-bold text-black uppercase py-3'>Wipo</h3>
                <p>The world's number one source for global intellectual property (patents, industrial designs, copyright, trademarks etc.) information, resources ...</p>
                <button className='mt-4 text-primary font-semibold underline'>See More
                </button>
              </div>
            </Reveal>
            <Reveal delay={0.5}>

              <div className="box rounded-3xl">
                
                <img className='rounded-xl object-cover h-80 w-full' src={inapi} alt="" />
                <h3 className='text-2xl font-bold text-black uppercase py-3'>inapi</h3>
                <p>is the National Algerian Institute of Industrial Property. It is responsible for overseeing and protecting industrial property rights in Algeria. This includes patents and other related matters.</p>
                <button className='mt-4 text-primary font-semibold underline'>See More
                </button>
              </div>
            </Reveal>
            <Reveal delay={0.75}>

              <div className="box rounded-3xl">
                <img className='rounded-xl object-cover h-80 w-full' src={cati} alt="" />
                <h3 className='text-2xl font-bold text-black uppercase py-3'>cati</h3>
                <p>Centre d'Appui à la Technologie et l'Innovation (CATI). Le CATI est une structure d'accompagnement des enseignants, des chercheurs et des étudiants en Bechar.</p>
                <button className='mt-4 text-primary font-semibold underline'>See More
                </button>
              </div>
              </Reveal>
              
            </div>
        </div>
      </section>
      <section className='mt-32 overflow-hidden bg-beige m-5 p-7 py-16 rounded-3xl'>
        <div className="container mx-auto p-5">
          <div className="flex justify-between">
            <RevealX>

            <h2 className='text-5xl   font-bold text-dark-blue leading-[60px]'>Why Choose <br /> <span className='text-primary'>Patenter</span></h2>
            </RevealX>
            <p className='max-w-[500px] font-medium text-lg text-dark-blue'>We specialize in guiding inventors to success. Our expert team provides comprehensive support through every step of the patent process, ensuring your innovations are protected and positioned for growth.</p>
          </div>
          <div className="grid-3 justify-between gap-5 py-10">
          <Reveal className="h-full">

            <div className="box rounded-3xl text-center p-6 bg-dark-blue">
              <img className='mx-auto' src={time} alt="" />
              <h3 className='text-2xl font-semibold text-white capatilize py-3'>Efficient Process Time</h3>
              <p className='text-white '>On average, users spend about 3 months from the start of their project to filing their patent application with us. This is 50% faster than traditional methods, ensuring your innovation is quickly and efficiently protected.</p>
            </div>
            </Reveal>
          <Reveal delay={0.5}>

            <div className="box rounded-3xl text-center  p-6 bg-dark-blue">
              <img className='mx-auto' src={database} alt="" />
              <h3 className='text-2xl font-semibold text-white capatilize py-3'>Patent Inspiration Database</h3>
              <p className='text-white'>Explore our vast database of patents to spark your creativity and guide your innovation journey. to inspire and guide your innovation journey. Discover successful patents, gain valuable insights.</p>
            </div>
            </Reveal>
          <Reveal delay={0.75}>

            <div className="box rounded-3xl text-center  p-6 bg-dark-blue">
              <img className='mx-auto' src={creation} alt="" />
              <h3 className='text-2xl font-semibold text-white capatilize py-3'>Creation and Protection Patent</h3>
              <p className='text-white'>Our platform not only guides you through the patent process but also helps you create and protect your patent. From drafting detailed patent forms to ensuring your invention is safeguarded.</p>
            </div>
            </Reveal>

          </div>
        </div>
      </section>
      <section className='mt-12 bg-dark-blue text-white m-5 p-7 py-16 rounded-3xl'>
        <div className="container mx-auto p-5">
          <div className="flex justify-between">
            <RevealX>
            <h2 className='text-5xl w-full basis-1/2 font-bold leading-[60px]'>Recognize Your <span className='text-beige'>Success</span> <br /> and Keep working to <br /> Accomplish More.</h2>
            </RevealX>
            <div className="grid-2 gap-4 basis-1/3">
              <div className="static">
                <h3 className='font-bold text-3xl'>400+ <br /> <span className='text-beige   text-2xl'>our inventors</span></h3>
                <p className='pt-2'>Over 400 users have registered on the platform.</p>
              </div>
              <div className="static">
                <h3 className='font-bold text-3xl'>500+ <br /> <span className='text-beige   text-2xl'>Projects Completed</span></h3>
                <p className='pt-2'>the total number of patent projects successfully completed using our platform.</p>
              </div>
              <div className="static">
                <h3 className='font-bold text-3xl'>5000 <br /> <span className='text-beige   text-2xl'>our inventors</span></h3>
                <p className='pt-2'> The number of times resources have been downloaded from our platform.</p>
              </div>
              <div className="static">
                <h3 className='font-bold text-3xl'>15min <br /> <span className='text-beige   text-2xl'>our inventors</span></h3>
                <p className='pt-2'>The average time users spend from starting a project to filing a patent application</p>
              </div>
            </div>
          </div>
         
        </div>
      </section>
      <section className='text-black my-12'>
        <div className="container mx-auto p-5">
          <h2 className='text-sm uppercase border w-fit font-bold text-center mx-auto p-2 px-3 text-primary border-primary font-semibold  rounded-full mb-5'>OUR FEATURES
          </h2>
            <p className='text-5xl font-bold capitalize text-center mx-auto leading-[60px] bg-gradient-to-b from-primary  to-dark-blue  text-transparent bg-clip-text'>Invent Smarter Not Harder <br /> with Patenter</p>
            <div className="grid-3 py-10 gap-7">
              <Reveal>

              <div className="box min-h-72 rounded-3xl p-5 text-center" style={{background:"linear-gradient(180deg, #0851BF 0%, #4891FF 100%)"}}>
                <img className='mx-auto' src={research} alt="" />
                <h3 className='text-2xl font-bold text-white  py-2 mt-5'>Research Patent</h3>
                <p className='text-white'>Our website offers AI-powered patent research, providing users with comprehensive insights into the patent landscape relevant to their field.</p>
                
              </div>
              </Reveal>
              <Reveal delay={0.5}>

              <div className="box min-h-72 rounded-3xl p-5 text-center" style={{background:" linear-gradient(180deg, #0851BF 0%, #882BFF 100%)"}}>
                <img className='mx-auto' src={translation} alt="" />
                <h3 className='text-2xl font-bold text-white  py-2 mt-5'>Translation</h3>
                <p className='text-white'>Our website offers AI-powered patent research, providing users with comprehensive insights into the patent landscape relevant to their field.</p>
                
              </div>
              </Reveal>
              <Reveal delay={0.75}>

              <div className="box min-h-72 rounded-3xl p-5 text-center" style={{background:"linear-gradient(180deg, #3B55E6 0%, #0D1321 100%)"}}>
                <img className='mx-auto' src={image} alt="" />
                <h3 className='text-2xl font-bold text-white  py-2 mt-5'>Generate Design</h3>
                <p className='text-white'>Our website also features an AI-powered patent design generation tool, enabling users to create professional and precise designs for patent applications effortlessly.</p>
                
              </div>
              </Reveal>
              <Reveal delay={1}>

              <div className="box min-h-72 rounded-3xl p-5 text-center" style={{background:"linear-gradient(180deg, #0851BF 0%, #4891FF 100%)"}}>
                <img className='mx-auto' src={document} alt="" />
                <h3 className='text-2xl font-bold text-white  py-2 mt-5'>Speelling Correction</h3>
                <p className='text-white'>Our website offers an advanced AI-powered spelling correction service designed to enhance your writing accuracy and efficiency.</p>
                
              </div>
              </Reveal>
              <Reveal delay={1.25}>

              <div className="box min-h-72 rounded-3xl p-5 text-center" style={{background:" linear-gradient(180deg, #0851BF 0%, #882BFF 100%)"}}>
                <img className='mx-auto' src={pdf} alt="" />
                <h3 className='text-2xl font-bold text-white  py-2 mt-5'>Download in PDF</h3>
                <p className='text-white'>Our website offers a PDF donwload feature for AI-powered analysis, ensuring thorough review and quality enhancement of your documents.</p>
                
              </div>
              </Reveal>
              <Reveal delay={1.5}>

              <div className="box min-h-72 rounded-3xl p-5 text-center" style={{background:"linear-gradient(180deg, #3B55E6 0%, #0D1321 100%)"}}>
                <img className='mx-auto' src={abstract} alt="" />
                <h3 className='text-2xl font-bold text-white  py-2 mt-5'>Generate Abstract</h3>
                <p className='text-white'>Our website offers an AI-powered abstract generation feature that creates concise summaries of your uploaded documents.</p>
                
              </div>
              </Reveal>
              
              
              
            </div>
        </div>
      </section>
      <section className='text-white bg-primary  m-5 p-7 py-16 rounded-3xl'>
        <div className="container  p-5">
        <RevealX>

        <h2 className='text-sm uppercase  w-fit font-bold p-2 px-3  font-semibold border rounded-full mb-3'>HOW IT WORKS
          </h2>
          

            <p className='text-5xl font-bold capitalize  leading-[60px] '>Connect Your Innovation <br /> to the World </p>
            <p className='max-w-[700px] my-3'>Unlock the full potential of your ideas and connect with a global audience through our streamlined patent process. Our platform is designed to make protecting your innovation easy and effective, guiding you from initial concept to patent filing with expert support every step of the way.</p>

              <button className='bg-beige rounded-full p-3 px-6 my-4 text-white font-semibold'>Get Started</button>
          </RevealX>

              <div className="flex my-5 gap-4">
                <div className="box basis-1/4">
                  <p>01</p>
                  <h3 className="font-bold my-3 text-xl text-white">Sign Up</h3>
                </div>
                <div className="box basis-1/4">
                  <p>02</p>
                  <h3 className="font-bold my-3 text-xl text-white">Submit Your Idea</h3>
                </div>
                <div className="box basis-1/4">
                  <p>03</p>
                  <h3 className="font-bold my-3 text-xl text-white">Receive Guidance</h3>
                </div>
                <div className="box basis-1/4">
                  <p>04</p>
                  <h3 className="font-bold my-3 text-xl text-white">File Your Patent</h3>
                </div>
              </div>
        </div>
      </section>
      <section className='text-white bg-beige  m-5 p-7  text-center py-12 rounded-3xl'>
        <div className="container  p-5">
        <h2 className='text-sm uppercase  w-fit font-bold  mx-auto text-center p-2 px-3  font-semibold border rounded-full mb-3'>OUR TESTEMONIALS
          </h2>
            <p className='text-5xl font-bold capitalize   leading-[60px] '>What Inventors have Said </p>
              <div className="flex my-16 gap-4">
                <div className="box basis-1/3">
                  <div className="text flex rounded-3xl bg-dark-blue p-6 min-h-48 relative">
                    <p className="my-auto">"Thanks to the seamless experience and expert advice, I was able to secure my patent in record time. The support from start to finish was outstanding."</p>
                    <span className='bg-dark-blue w-4 h-4 rotate-45 -bottom-2 absolute left-12'></span>
                  </div>
                  <div className="profile my-6 flex gap-4">
                    <img src={prof1} alt="" />
                    <div className="content text-start">
                      <h3 className='text-dark-blue font-bold text-lg'>Ghallel Nasro</h3>
                      <p className='text-sm'>Engineer of computer</p>

                    </div>
                  </div>
                </div>
                <div className="box basis-1/3">
                  <div className="text flex rounded-3xl bg-dark-blue p-6 min-h-48 relative">
                    <p className="my-auto">"Thanks to the seamless experience and expert advice, I was able to secure my patent in record time. The support from start to finish was outstanding."</p>
                    <span className='bg-dark-blue w-4 h-4 rotate-45 -bottom-2 absolute left-12'></span>
                  </div>
                  <div className="profile my-6 flex gap-4">
                    <img src={prof1} alt="" />
                    <div className="content text-start">
                      <h3 className='text-dark-blue font-bold text-lg'>Ghallel Nasro</h3>
                      <p className='text-sm'>Engineer of computer</p>

                    </div>
                  </div>
                </div>
                <div className="box basis-1/3">
                  <div className=" flex rounded-3xl bg-dark-blue p-6 min-h-48 relative">
                    <p className="my-auto">"Thanks to the seamless experience and expert advice, I was able to secure my patent in record time. The support from start to finish was outstanding."</p>
                    <span className='bg-dark-blue w-4 h-4 rotate-45 -bottom-2 absolute left-12'></span>
                  </div>
                  <div className="profile my-6 flex gap-4">
                    <img src={prof1} alt="" />
                    <div className="content text-start">
                      <h3 className='text-dark-blue font-bold text-lg'>Ghallel Nasro</h3>
                      <p className='text-sm'>Engineer of computer</p>

                    </div>
                  </div>
                </div>

                
                
              </div>
        </div>
      </section>
      <section className='text-white bg-dark-blue  m-5 p-7  text-center py-12 rounded-3xl'>
        <div className="container  p-5">
        <h2 className='text-sm uppercase  w-fit font-bold  mx-auto text-center p-2 px-3  font-semibold border rounded-full mb-3'>OUR PRICING
          </h2>
            <p className='text-5xl font-bold capitalize   leading-[60px] '>A Plan for Every need </p>
            <p className='text-gray-500 my-4'>We collaborate closely with our clients, fostering tight-knit partnerships.</p>
            <div className="bg-white relative  my-8 w-1/2 rounded-full mx-auto text-gray-500 p-1">
                <span className={`absolute rounded-full z-0 top-1 transform duration-300 ease-in-out bg-primary w-1/2 h-[calc(100%-8px)] ${month?" left-1":" right-1"}`}></span>
                <button className={`relative z-1 font-semibold w-1/2 h-12 ${month?"text-white":""}`} onClick={()=>setMonth(true)}>Monthly</button>
                <button className={`relative z-1 font-semibold w-1/2 h-12  rounded-full ${month?"":"text-white"}`} onClick={()=>setMonth(false)}>Annualy (Save 10%)
                </button>
            </div>
              <div className="flex my-16 gap-8">
                <div className="box relative basis-1/3 text-center min-h-[600px] border border-gray-800 rounded-3xl p-8 py-10 flex flex-col" style={{background:"url(./assets/gra-1.svg)"}}>
                <img className='absolute left-1/2 -translate-x-1/2 -z-0' src={gra1} alt="" />
                  <h3 className='font-bold text-3xl text-white'>BASIC</h3>
                  <p className='text-beige text-lg font-semibold my-3'>Up to 100 Patents</p>
                  <h4 className='font-semibold relative z-1 text-6xl my-5'>{month? "2000" : "60000"} <span className='text-3xl'>Dzd</span></h4>
                  <hr className='border-gray-800 my-10 relative z-1'/>
                  <p className='text-white relative z-1'>Great for individual  who want to Save Time 
                  Creating multiple Patents</p>
                  <button className='bg-primary relative z-1 py-3.5  b-5 px-20 rounded-full text-lg font-semibold mt-auto '> Request Now</button>
                </div>
                <div className="box relative basis-1/3 text-center min-h-[600px]  bg-primary  rounded-3xl p-8 py-10 flex flex-col" >
                {/* <img className='absolute left-1/2 -translate-x-1/2 -z-0' src={gra1} alt="" /> */}
                  <h3 className='font-bold text-3xl text-white uppercase'>Professional</h3>
                  <p className='text-beige text-lg font-semibold my-3'>Up to 200 Patents</p>
                  <h4 className='font-semibold relative z-1 text-6xl my-5'>{month? "7000" : "80000"} <span className='text-3xl'>Dzd</span></h4>
                  <hr className='border-white my-10 relative z-1'/>
                  <p className='text-white relative z-1'>ideal for small businesses or individuals looking to establish a simple online presence.
                  </p>
                  <button className='bg-white text-primary relative z-1 py-3.5  b-5 px-20 rounded-full text-lg font-semibold mt-auto '> Request Now</button>
                </div>
                <div className="box relative basis-1/3 text-center min-h-[600px] border border-gray-800 rounded-3xl p-8 py-10 flex flex-col" style={{background:"url(./assets/gra-1.svg)"}}>
                <img className='absolute left-1/2 -translate-x-1/2 -z-0' src={gra2} alt="" />
                  <h3 className='font-bold text-3xl text-white uppercase'>Premium</h3>
                  <p className='text-beige text-lg font-semibold my-3'>Up to 300 Patents</p>
                  <h4 className='font-semibold relative z-1 text-6xl my-5'>{month?"9000":"100000"} <span className='text-3xl'>Dzd</span></h4>
                  <hr className='border-gray-800 my-10 relative z-1'/>
                  <p className='text-white relative z-1'>for businesses with more complex needs and larger budgets. 
                  </p>
                  <button className='bg-primary relative z-1 py-3.5  b-5 px-20 rounded-full text-lg font-semibold mt-auto '> Let's Talk</button>
                </div>

                
                
              </div>
        </div>
      </section>
      <section className='text-black my-12'>
        <div className="container mx-auto p-5">
          <h2 className='text-sm uppercase border w-fit font-bold text-center mx-auto p-2 px-3 text-primary border-primary font-semibold  rounded-full mb-5'>FAQ
          </h2>
            <p className='text-5xl font-bold capitalize text-center mx-auto leading-[60px] bg-gradient-to-b from-primary  to-dark-blue  text-transparent bg-clip-text'>Your Guide for Inventing
             <br /> and Understanding</p>
            <div className="faqs mx-auto my-10">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
        </div>
      </section>
      <section className="landing m-5  text-center rounded-3xl" >
        <div className="landing-content py-44">
          <h2 className='text-white font-bold text-6xl text-center leading-[80px]'>
          Start Your Patent journey <br /> and be a Part of the Future
          </h2>
          <p className='text-white text-center max-w-[750px] mx-auto mt-5 text-lg'>
          Bring your ideas to life. Take the first step towards securing your innovations. Sign up and let us guide you through the patent process with ease and expertise.
          </p>
        <AnimatedButton >
          <div className="flex justify-center mt-7 mb-10 gap-5">
            <button className='bg-white rounded-full p-3 px-6  text-black font-bold'>Get Started</button>
          </div>
      </AnimatedButton>


          
        </div>
      </section>
      <footer className=" px-8 py-12 justify-between items-center">
        <div className="flex  justify-between items-center">

        <div className="box flex-col flex gap-5 basis-1/2">
          <p className='py-4 text-4xl leading-[46px]  font-semibold text-black'>Turn your creative concepts into protected assets. <br /> Sign up now and receive comprehensive  assistance every step of the way.</p>
          <div className="flex flex-col gap-3">
            <p className='text-gray-700 text-lg py-2'>Get in touch</p>
            <div className="link"><a className='text-2xl text-black font-semibold' href="tel:+213675020430">+213675020430</a></div>
            <div className="link"><a className='text-2xl text-black font-semibold' href="mail:nasro@gmail.com">nasro@gmail.com</a></div>
          </div>
        </div>
        <div className="box basis-1/3 flex flex-col gap-8 ">
          <div className="bg-black rounded-3xl p-6 max-w-[500px]">
            <p className='text-white text-lg'>Follow Us </p>
          </div>
          <div className="bg-primary/30 text-center  rounded-3xl p-8 px-16">
            <h3 className='text-black text-4xl font-semibold'>Ready to Be a part of the history?</h3>
            <p className='py-4'>Let's start with a conversation about how we can help you!</p>
            <button className='rounded-full bg-primary text-white font-semibold text-lg p-4 w-full'> Get in Touch</button>
          </div>
        </div>
        </div>
        <div className="flex py-4 items-center justify-between">
          <img src={LogoBlack} alt="" />
          <p className="text-gray-700 ">© 2024 Patenter · All rights reserved.</p>
        </div>
      </footer> 
    </main>
      
    </>
  )
}

export default App
