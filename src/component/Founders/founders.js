import "./founders.css"
// import img from "./image.png"

function Founders(){

    return(
        <div className="main">
            <div className="founders" style={{backgroundColor:"#E1F5FE"}}>
                <div className="div-img">
               <img src="https://10000coders.in/_next/image?url=%2Fteam_experts%2Fimage1.png&w=1920&q=75" style={{backgroundColor:"#B3E5FC"}}/>
               </div>
               <h3>Anil Kumar Ghorakavi</h3>
               <p>Founder</p>
               <p>As an entrepreneur who’s constantly finding ways to help people reach greater heights in
                 their career and an Ex-Oracle guy, I know exactly what it takes to launch a career in the
                  IT industry.</p>
            </div>

            <div className="founders" style={{backgroundColor:"#FFF3E0"}}>
                   <div className="div-img">
                   {/* <img src={img} style={{backgroundColor:"#FFCC80", }}/> */}
                   </div>
                   <h3>Rakesh Kumar</h3>
                   <p>Co-Founder</p>
                   <p>I ensure that our curriculum is up-to-date with the latest industry needs and our program 
                    delivery uses the trending tools and processes adopted by the industry.
                         </p>
            </div>

            <div  className="founders"  style={{backgroundColor:"#C5E1A5"}}>
                    <div className="div-img">
                    <img src="https://10000coders.in/_next/image?url=%2Fteam_experts%2Fimage3.png&w=1920&q=75" style={{backgroundColor:"#F1F8E9"}}/>
                    </div>
                     <h3>Praveen Kumar</h3>
                     <p>Co-Founder</p>
                     <p>I believe in supplementing education with relevant and engaging experience that would prepare
                         students for careers in the tech industry.</p>
            </div>
        </div>
    )

}
export default Founders