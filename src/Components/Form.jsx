
function Form ({handle}){

    return <div  className=" bg-second h-screen w-full absolute top-0">

   
    <div  className="   flex justify-center mt-10">

        <div className="bg-white sm:w-[360px] w-[300px] h-[450px]">

    

        <form className=" relative">

            <div className="p-5  ">

            <i onClick={handle}  class="text-3xl absolute right-3 fa-solid fa-xmark"></i>
        
               <br/>
               <br/>
                <input className="py-3 border-2 border-second  rounded sm:w-[300px] w-[260px] " type="text" placeholder="Enter Your Name"></input>
                <textarea className="sm:w-[300px] w-[260px] rounded mt-3 border-2 border-second" rows={8} placeholder="Enter Title"/>
                

                    <button className="bg-second px-20 py-2 m-10"> Save</button>
            </div>




        </form>

        </div>








    </div>
    </div>
}

export default Form