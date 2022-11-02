import PropTypes from "prop-types";
import '../Tag/Tag';
import '../Tag/Tag.scss';

function Tag({tags}) {
  return (
    <>
      {
        tags.map((item, index) => {
          return (
            <div className="kasa-Tag" key={index} >
              <p>{item}</p>
            </div>
          )
        })
      }
    </>
  );
};

Tag.protoTypes = {
  item: PropTypes.array.isRequired,
}
//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default Tag