import Head from 'next/head';
import { useState, useEffect } from "react";
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

export default function Governance(){
    const [connectWallet, setConnectWallet] = useState(true)
    const [connectedWallet, setConnectedWallet] = useState(false)    
    const disconnectWallet = () => {
      setConnectedWallet(false)
      setConnectWallet(true)
    }  
    const connectwallet = async () => {}

    const [displayComponent, setDisplayComponent] = useState("joindaodisplay")
    const changeDisplay = (initialdisplay) => {
        setDisplayComponent(initialdisplay)
    } 

    const [joinDaoColor, setJoinDaoColor] = useState("#073")
    const [viewProposalsColor, setViewProposalsColor] = useState("#fff")
    const [createProposalsColor, setCreateProposalsColor] = useState("#fff")
    const [voteProposalsColor, setVoteProposalsColor] = useState("#fff")

    const changeJoinColor = () => {
        setJoinDaoColor("#073")
        setViewProposalsColor("#fff")
        setCreateProposalsColor("#fff")
        setVoteProposalsColor("#fff")
    }

    const changeViewColor = () => {
        setJoinDaoColor("#fff")
        setViewProposalsColor("#073")
        setCreateProposalsColor("#fff")
        setVoteProposalsColor("#fff")
    }

    const changeCreateColor = () => {
        setJoinDaoColor("#fff")
        setViewProposalsColor("#fff")
        setCreateProposalsColor("#073")
        setVoteProposalsColor("#fff")
    }

    const changeVoteColor = () => {
        setJoinDaoColor("#fff")
        setViewProposalsColor("#fff")
        setCreateProposalsColor("#fff")
        setVoteProposalsColor("#073")
    }

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
    <Head>
   <title>CliNex Governance</title>
   <link rel="shortcut icon" href="/favicon.ico" />
   </Head>
   <div className="p-[5%] lg:pb-[50%] md:pb-[50%] pb-[100%] maindivforgovernance" style={{backgroundImage:"url(images/bg01.jpg)", backgroundAttachment:"fixed", transition:"0.5s ease-in-out"}}>

        <div className='lg:mt-[0] md:mt-[0] mt-[0.5cm]' style={{display:"block"}}>
        <div className="lg:text-[140%] md:text-[130%] text-[120%] font-[500]" style={{display:"inline-block"}}><Link href="/"><i className="fa fa-hand-point-left"></i> &nbsp; <span style={{textShadow:"2px 2px #000"}}>BACK</span></Link></div>
        <div className="text-center float-right" style={{display:"inline-block"}}>
          {connectWallet ? (<span className="bg-[#224] px-[0.5cm] py-[0.2cm] font-[600] rounded-full cursor-pointer" style={{border:"2px solid #aaa"}} onClick={connectwallet}>Connect Wallet</span>) : (<div></div>)}
          {connectedWallet ? (<span className="bg-[#228] px-[0.5cm] py-[0.2cm] font-[600] rounded-full cursor-pointer" style={{border:"2px solid #fff"}} onClick={disconnectWallet}><i className="fa fa-circle text-[#090]"></i> &nbsp; Connected</span>) : (<div></div>)}
        </div>
        </div>

        <div className='lg:mt-[0.5cm] md:mt-[0.5cm] mt-[1cm] p-[0.5cm] lg:bg-[rgba(0,0,0,0)] md:bg-[rgba(0,0,0,0)] bg-[rgba(0,0,0,0.5)] text-center rounded-xl' style={{display:"block", transition:"0.5s ease-in-out"}}>
            <img src="images/thelogo.png" width="150" style={{display:"inline-block"}} />
            <button className='px-[1cm] py-[0.2cm] bg-[#000] rounded-full font-[500] mb-[0.3cm] lg:ml-[0.5cm] md:ml-[0.5cm] ml-[0.1cm] governancemenubuttons' style={{borderBottom:`2px solid ${joinDaoColor}`, color:joinDaoColor}} onClick={(e) => changeDisplay("joindaodisplay") & changeJoinColor()}>Join DAO</button>
            <button className='px-[1cm] py-[0.2cm] bg-[#000] rounded-full font-[500] mb-[0.3cm] lg:ml-[0.5cm] md:ml-[0.5cm] ml-[0.1cm] governancemenubuttons' style={{borderBottom:`2px solid ${viewProposalsColor}`, color:viewProposalsColor}} onClick={(e) => changeDisplay("viewproposalsdisplay") & changeViewColor()}>View Proposals</button>
            <button className='px-[1cm] py-[0.2cm] bg-[#000] rounded-full font-[500] mb-[0.3cm] lg:ml-[0.5cm] md:ml-[0.5cm] ml-[0.1cm] governancemenubuttons' style={{borderBottom:`2px solid ${createProposalsColor}`, color:createProposalsColor}} onClick={(e) => changeDisplay("createproposaldisplay") & changeCreateColor()}>Create a Proposal</button>
            <button className='px-[1cm] py-[0.2cm] bg-[#000] rounded-full font-[500] mb-[0.3cm] lg:ml-[0.5cm] md:ml-[0.5cm] ml-[0.1cm] governancemenubuttons' style={{borderBottom:`2px solid ${voteProposalsColor}`, color:voteProposalsColor}} onClick={(e) => changeDisplay("voteproposaldisplay") & changeVoteColor()}>Vote for a Proposal</button>
        </div>

        <div className='mt-[1cm] lg:mx-[20%] md:mx-[10%] p-[5%] bg-[rgba(0,0,0,0.96)] rounded-xl' style={{transition:"0.5s ease-in-out"}}>
            {displayComponent === "joindaodisplay" && 
            <div data-aos="zoom-in" style={{transition:"0.5s ease-in-out"}}>
                <div className='text-center lg:text-[150%] md:text-[150%] text-[120%] font-[600]'>Become a Member</div>
                <div className='mt-[0.5cm] text-center text-[#083] font-[500]'>You must be a $CLINEX holder to be part of the DAO!</div>
                <form>
                    <div className='mt-[7%]' style={{borderBottom:"2px solid #fff"}}>
                    <label className='py-[0.2cm] px-[0.3cm] bg-[#222] rounded-md font-[500]'>Username</label>
                    <div className='mt-[0.5cm]'><input type="text" className='py-[0.2cm] bg-[rgba(0,0,0,0)] outline-none w-[100%] placeholder-[#ddd]' placeholder='Choose a username' /></div>
                    </div>
                    <div className='mt-[7%]' style={{borderBottom:"2px solid #fff"}}>
                    <label className='py-[0.2cm] px-[0.3cm] bg-[#222] rounded-md font-[500]'>Age</label>
                    <div className='mt-[0.5cm]'><input type="text" className='py-[0.2cm] bg-[rgba(0,0,0,0)] outline-none w-[100%] placeholder-[#ddd]' placeholder='Put your age' /></div>
                    </div>
                    <div className='mt-[7%]' style={{borderBottom:"2px solid #fff"}}>
                    <label className='py-[0.2cm] px-[0.3cm] bg-[#222] rounded-md font-[500]'>Bio</label>
                    <div className='mt-[0.5cm]'><input type="text" className='py-[0.2cm] bg-[rgba(0,0,0,0)] outline-none w-[100%]placeholder-[#ddd] ' placeholder='Put your bio' /></div>
                    </div>
                    <button className='p-[0.2cm] w-[100%] text-center font-[600] lg:text-[120%] md:text-[120%] mt-[7%] bg-[#222] rounded-md'>Join DAO</button>
                </form>
            </div>
            }

           {displayComponent === "viewproposalsdisplay" && 
            <div data-aos="zoom-in" style={{transition:"0.5s ease-in-out"}}>
               <div className='rounded-xl p-[5%]' style={{border:"1px solid #eee", transition:"0.3s ease-in-out"}}>All proposals will display here</div>
            </div>
            }

         {displayComponent === "createproposaldisplay" && 
            <div data-aos="zoom-in" style={{transition:"0.5s ease-in-out"}}>
                <div className='text-center lg:text-[150%] md:text-[150%] text-[120%] font-[600]'>Create a Proposal</div>
                <div className='mt-[0.5cm] text-center text-[#083] font-[500]'>Members of the DAO are allowed to create proposals!</div>
                <form>
                    <div className='mt-[7%]' style={{borderBottom:"2px solid #fff"}}>
                    <label className='py-[0.2cm] px-[0.3cm] bg-[#222] rounded-md font-[500]'>Proposal</label>
                    <div className='mt-[0.5cm]'><input type="text" className='py-[0.2cm] bg-[rgba(0,0,0,0)] outline-none w-[100%] placeholder-[#ddd]' placeholder='Please type your proposal here' /></div>
                    </div>
                    <button className='p-[0.2cm] w-[100%] text-center font-[600] lg:text-[120%] md:text-[120%] mt-[7%] bg-[#222] rounded-md'>Create Proposal</button>
                </form>
            </div>
            }

         {displayComponent === "voteproposaldisplay" && 
            <div data-aos="zoom-in" style={{transition:"0.5s ease-in-out"}}>
                <div className='text-center lg:text-[150%] md:text-[150%] text-[120%] font-[600]'>Vote for a Proposal</div>
                <div className='mt-[0.5cm] text-center text-[#083] font-[500]'>Give ID of proposal and reason for voting!</div>
                <form>
                    <div className='mt-[7%]' style={{borderBottom:"2px solid #fff"}}>
                    <label className='py-[0.2cm] px-[0.3cm] bg-[#222] rounded-md font-[500]'>Proposal ID</label>
                    <div className='mt-[0.5cm]'><input type="text" className='py-[0.2cm] bg-[rgba(0,0,0,0)] outline-none w-[100%] placeholder-[#ddd]' placeholder='Type the ID of this proposal' /></div>
                    </div>
                    <div className='mt-[7%]' style={{borderBottom:"2px solid #fff"}}>
                    <label className='py-[0.2cm] px-[0.3cm] bg-[#222] rounded-md font-[500]'>Reason</label>
                    <div className='mt-[0.5cm]'><input type="text" className='py-[0.2cm] bg-[rgba(0,0,0,0)] outline-none w-[100%] placeholder-[#ddd]' placeholder='Please give a reason for voting this proposal' /></div>
                    </div>
                    <button className='p-[0.2cm] w-[100%] text-center font-[600] lg:text-[120%] md:text-[120%] mt-[7%] bg-[#222] rounded-md'>Vote Proposal</button>
                </form>
            </div>
            }
        </div>




    </div>
  </>
  );
};

