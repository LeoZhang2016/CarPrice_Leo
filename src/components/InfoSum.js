/*
 * @Descripttion: 
 * @version: 
 * @Author: smile
 * @Date: 2023-11-11 19:39:38
 * @LastEditors: smile
 * @LastEditTime: 2023-11-12 17:09:11
 */
import "../scss/components/infoSum.scss";
import { FaList} from "react-icons/fa"
import { GiPriceTag } from "react-icons/gi";
import { BsSpeedometer2, BsCalendarPlus } from "react-icons/bs";
import { RiFileListLine } from "react-icons/ri";
import { CgDisplayGrid } from "react-icons/cg";

import { BsList, BsFillGrid3X3GapFill } from "react-icons/bs";

const InfoSum = () =>  {

    return (
        <div className="infoSum__container container">            
            <div className="infoSum__container__title">Audi A5 Stats:</div>
                  <div  className="infoSum__container__subpart">
                     <div className="infoSum__container__subpart__icon">
                        <FaList size={14} color={"#778899"}/>
                     </div>
                     <div className="infoSum__container__subpart__content">Record: 146</div>
                  </div>


                  <div  className="infoSum__container__subpart">
                     <div className="infoSum__container__subpart__icon">
                     <GiPriceTag size={14} color={"#778899"}/>
                     </div>
                     <div className="infoSum__container__subpart__content">Subscribe to Reveal Price</div>
                  </div>
                  <div  className="infoSum__container__subpart">
                  <div className="infoSum__container__subpart__icon">
                        <BsSpeedometer2 size={14} color={"#778899"}/>
                     </div>
                     <div className="infoSum__container__subpart__content">AVG KM： 83,983 kms</div>
                  </div>
                  <div  className="infoSum__container__subpart">
                  <div className="infoSum__container__subpart__icon">
                        <BsCalendarPlus size={14} color={"#778899"}/>
                     </div>
                     <div className="infoSum__container__subpart__content">Avg Age: 95 months</div>
                  </div>

                  <div  className="infoSum__container__subpart">
                     <div className="infoSum__container__subpart__toggle">
                        <BsList size={20} color={"#778899"} className="infoSum__container__subpart__toggle__sub"/>
                     </div>
                     <div  className="infoSum__container__subpart__toggle">
                     <BsFillGrid3X3GapFill size={20} color={"#778899"}  className="infoSum__container__subpart__toggle__sub"/>
                     </div>
                  </div>
            </div>
  
    )
}

export default InfoSum;