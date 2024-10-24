import React from 'react';
import aboutImg from '../assets/dd1.jpg';
import NextjsBtn from "../components/ui/NextjsBtn";
import {motion} from "framer-motion";

const About = (props) => (
  <section id='about' className={"bg-green-200"}>
    <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: .3 }}
        className="container mx-auto flex items-center justify-between gap-5 py-10">
      <motion.div
        className='flex flex-col gap-5 text-center lg:text-start w-full max-w-[800px]'
        variants={{
          offscreen: {
            x: -500,
          },
          onscreen: {
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.9
            }
          }
        }}
      >
        <h3 className='md:text-2xl text-black-100 ff-shojumaru mb-0'>All about us</h3>
        <h2 className={`text-yellow uppercase text-4xl lg:text-6xl font-bold ff-roundy-rainbows mt-0`}>&#36;Droge</h2>
        <div className='flex lg:hidden justify-center'>
          <img
              src={aboutImg}
              alt="Hero Image"
              width={400}
          />
        </div>
        <p className={"tracking-wide"}>Introducing DROGE the Dragon + Doge combination! Get ready to dive into the world of hilarious memes and
          witty humor like never before.</p>
        <p className={"tracking-wide"}>Join the strong community of DROGE like you&apos;ve never been before. With DROGE, be prepared to experience
          a meme-filled extravaganza on Twitter that will keep you coming back for more. So, buckle up and let the meme
          mania begin!</p>
        <p className={"tracking-wide"}>#DROGE #ElonMusk #DOGE #SOL #SOLANA #DRAGON</p>
        <p className={"tracking-wide"}>Contract Address: BBeZSVTCWMQemzZd1qQuoa4G7ifDhodaC9qvZ6o9nH11</p>
        <div className='flex flex-wrap justify-center md:justify-start gap-3'>
          <a href="/">
            <NextjsBtn
                text='Buy on RAYDIUM'
                classname='border-2 border-red me-2'/>
          </a>
          <a href="/">
            <NextjsBtn
                text='View Chart'
                classname='border-2 border-red me-2'/>
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={{
          offscreen: {
            x: 500,
          },
          onscreen: {
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.9
            }
          }
        }}
        className='hidden lg:flex justify-center w-full max-w-[400px]'>
      <img
          src={aboutImg}
          className={"w-full"}
          alt="Hero Image"
      />
    </motion.div>
    </motion.div>
  </section>
);

export default About;