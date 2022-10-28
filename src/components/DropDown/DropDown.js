import './DropDown.scss';
import { Data } from './Data';
import { AiOutlineDown } from 'react-icons/ai'

function DropDown({dropDownTitle, dropDownDescr}) {
  return <div className="kasa-DropDown">
              {Data.map((item, index) => {
                return (
                  <div className='kasa-DropDown__item'>
                    <div className='kasa-DropDown__item__header'>
                      <h2> {item.title} </h2>
                      {/* <span><AiOutlineDown /></span> */}
                      {/* <AiOutlineUp /> */}
                    </div>
                    <div className='kasa-DropDown__item__description'>
                      <p>{item.description}</p>
                    </div>
                  </div>
                )
              })}
        
         </div>
}
//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default DropDown