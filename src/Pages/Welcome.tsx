import WelcomePage from '../assets/ep.jpg';
import styled from 'styled-components';
import Love from '../assets/love1.png'


const Heading = styled.h3`
   font-family: "Dancing Script", cursive;
   color: #F0F812;

   @media screen and (max-width: 365px){
    font-size: 10px;
}
`;

const ButtonHold = styled.button`
 font-family: "Whisper", cursive;
  font-weight: 600;
`


const Welcome = () => {
  return (
    <div className="w-full h-screen relative">
      <img src={WelcomePage} alt='' className='w-full h-full object-cover absolute top-0 left-0'/>
      <div className="w-full h-full absolute top-0 left-0 flex justify-around items-center flex-col" style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
        <section className='w-[60%] h-[70%]  flex justify-around items-center max-sm:flex-col-reverse max-sm:w-[90%] max-sm:h-[80%]'>
          <div className='w-[50%] h-[100%]  max-sm:w-[80%]'>
            <img src={WelcomePage} alt="" className='w-[100%] h-[100%] object-cover ' />
          </div>
          <div className='w-[50%] h-[100%]  flex justify-center items-center flex-col max-sm:h-[60%]'>
            <section className='w-[100%] h-[15%]  flex justify-center items-center'>
              <Heading className='font-bold text-xl max-sm:text-xl'>THE NEW EP</Heading>
            </section>
            <section className='w-[100%] h-[50%]   flex justify-around items-center flex-col'>
              <div className='w-[70%] h-[80%]   flex justify-center items-center '>
                <img src={Love} alt="" className='w-[100%] h-[100%] object-cover' />
              </div>
            <Heading>OUT NOW</Heading>
            </section>
            <section className='w-[100%] h-[25%] flex justify-around items-center flex-col max-sm:hidden'>
              <div className='w-[90%] h-[40%] border border-solid border-[#F0F812] flex justify-center items-center text-[#F0F812] font-bold cursor-pointer hover:bg-[#F0F812] hover:text-black max-sm:h-[40%]'>LISTEN</div>
              <div className='w-[90%] h-[40%]  border border-solid border-[#F0F812] flex justify-center items-center text-[#F0F812] font-bold cursor-pointer hover:bg-[#F0F812] hover:text-black max-sm:h-[40%]'>WATCH</div>
            </section>
          </div>
        </section>
        <section className='w-[60%] h-[20%] flex  justify-around items-center max-sm:flex-col max-sm:w-[90%]'>
        <section className='w-[100%] h-[60%]  justify-around items-center flex-col hidden max-sm:flex '>
              <div className='w-[100%] h-[30%] border border-solid border-[#F0F812] flex justify-center items-center text-[#F0F812] font-bold cursor-pointer hover:bg-[#F0F812] hover:text-black max-sm:h-[40%]'>LISTEN</div>
              <div className='w-[100%] h-[30%]  border border-solid border-[#F0F812] flex justify-center items-center text-[#F0F812] font-bold cursor-pointer hover:bg-[#F0F812] hover:text-black max-sm:h-[40%]'>WATCH</div>
            </section>
          <ButtonHold className='w-[100%] h-[60%] bg-[#F0F812] font-bold hover:bg-yellow-600 duration-300 max-sm:h-[30%]'>ENTER SITE</ButtonHold>
        </section>
      </div>
    </div>
  );
};

export default Welcome;
