import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { BsMastodon } from "react-icons/bs";
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    <hr />
      <div className="footer">
      <footer className="text-center text-lg-start">
          <div className="container p-4 pb-0">
            <section className>
              <div className="row ">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <ul style={{ listStyle: 'none' }}>
                  <li style={{paddingBottom: '10px' }}>Imprint</li>
                  <li style={{paddingBottom: '10px' }}>Cookie Policy</li>
                  <li style={{paddingBottom: '10px' }}>Privacy Policy</li>
                  <li style={{fontWeight: 'bold' , paddingBottom: '10px'}}>Gnosis Token Sale TOS </li>
                </ul>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 ">
                <ul style={{ listStyle: 'none' }}>
                  <li style={{fontWeight: 'bold', paddingBottom: '10px'}}>Conditional Tokens</li>
                  <li style={{fontWeight: 'bold', paddingBottom: '10px'}}>Protocol</li>
                  <li style={{fontWeight: 'bold', paddingBottom: '10px'}}>Safe</li>
                  <li style={{fontWeight: 'bold', paddingBottom: '10px'}}>GnosisDAO </li>
                </ul>               </div>

                <hr className="w-100 clearfix d-md-none" />

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <ul style={{ listStyle: 'none' }}>
                  <li style={{fontWeight: 'bold', paddingBottom: '10px'}}>Developer</li>
                  <li style={{fontWeight: 'bold', paddingBottom: '10px'}}>OpenEthereum</li>
                  <li style={{fontWeight: 'bold', paddingBottom: '10px'}}>Careers</li>
                  <li style={{fontWeight: 'bold', paddingBottom: '10px'}}>Blog</li>
                </ul>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <ul style={{ listStyle: 'none', paddingBottom: '10px' }}>
                  <li><BsMastodon size={'2em'} style={{paddingBottom: '10px' }}/></li>
                  <li><SiDiscord size={'2em'} style={{paddingBottom: '10px' }}/></li>
                  <li><AiFillTwitterCircle size={'2em'} style={{paddingBottom: '10px' }}/></li>
                  <li><BsGithub size={'2em'} style={{paddingBottom: '10px' }}/> </li>
                </ul>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer