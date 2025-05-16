import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center flex-col text-white  gap-4 h-[44vh]">

    <div className="flex items-center gap-2">
  <div className="text-3xl font-bold ">Get Me a Mocktail</div>
    <img 
      src="https://images.pexels.com/photos/2093089/pexels-photo-2093089.jpeg" 
      alt="Mocktail Logo" 
      className="h-15 w-15 rounded-full object-cover" 
    />
  
</div>
      <p>
        A crowndfunding platform for creators.Get funde by youn fan and followers
      </p>
      <div>
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">start Now</button>
     
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign In</button>
      </div>
    </div>
    <div className=" bg-white h-1 opacity-10"></div>
    <div className="text-white container mx-auto pb-32 pt-14 px-10">
  <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy a Mocktail</h2>
  <div className="flex gap-5 justify-around">
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="https://www.shutterstock.com/image-vector/business-person-working-on-computer-600nw-465214358.jpg" alt="" />
      <p className="font-bold text-center">Fans want to help</p>
      <p className="text-center">Your fans are available to support you</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="https://img.freepik.com/free-vector/hand-drawn-cartoon-dollar-sign-illustration_23-2150982971.jpg" alt="" />
      <p className="font-bold text-center">Fans want to contribute</p>
      <p className="text-center">Your fans are willing to contribute financially</p>
    </div>
    <div className="item space-y-3 flex flex-col items-center justify-center">
      <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="https://thumbs.dreamstime.com/b/people-icon-vector-sign-isolated-white-team-background-men-simbol-flat-style-simple-abstract-crowd-black-illustration-112280802.jpg" alt="" />
      <p className="font-bold text-center">Fans want to collaborate</p>
      <p className="text-center">Your fans are ready to collaborate with you</p>
    </div>
  </div>
</div>
      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        {/* Responsive youtube embed  */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/ojuUnfqnUI0?si=wMUv4DG3ia6Wt4zn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

          </div>
      
      </div>
    </>
  );
}
