import { BsCarFrontFill } from "react-icons/bs";
import { BiSolidCalendarEvent } from "react-icons/bi";
import  "../scss/components/listItem.scss";

const ListItem = () =>  {
    return (
        <div className="listItem__container">
            <div className="listItem__container__first">
                 <div className="listItem__container__first__title">
                    <h3 className="listItem__container__first__title__highlight">Audi A5 2013 </h3>
                    <h3 className="listItem__container__first__title__normal">8T MY14 Sportback 5dr S tronic 7sp quattro 2.0T </h3>
                </div>
                 <div className="listItem__container__first__content">
                        <div className="listItem__container__first__content__data">
                            <div className="listItem__container__first__content__data__num owner">
                                Dealership
                            </div>
                            <div className="listItem__container__first__content__data__num kilo">
                                61,624
                            </div>
                            <div className="listItem__container__first__content__data__num location">
                                Sold in Canning Vale (WA)
                            </div>
                        </div>

                        <div className="listItem__container__first__content__fig">
                            <div className="listItem__container__first__content__fig__content con">
                                <div className="listItem__container__first__content__fig__content__icon">
                                   <BsCarFrontFill size={14} color={"#778899"}/>
                                </div>
                                <div>Above Average Condition</div>
                            </div>

                            <div className="listItem__container__first__content__fig__content con">
                            <div className="listItem__container__first__content__fig__content__icon">
                                <BiSolidCalendarEvent size={14} color={"#778899"}/>
                                </div>
                                <div>Above Average Condition</div>
                            </div>
                        </div>                        
                   </div>
            </div>
            
               

            <div className="listItem__container__second__buttons">
                <div className="listItem__container__second__buttons__sub">
                    <button className="listItem__container__second__buttons__sub__button">Subscribe to Reveal Price</button>
                </div>

                <div className="listItem__container__second__buttons__more">
                    <button className="listItem__container__second__buttons__more__button">See More</button>
                </div>
            </div>
            
        </div>
    )
}

export default ListItem;