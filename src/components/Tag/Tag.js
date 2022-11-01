import PropTypes from "prop-types";
import '../Tag/Tag';
import '../Tag/Tag.scss';
import Api from '../../Utils/api.json'

function Tag(item) {
  return (
    <>
      {
        Api.map((item) => {
          return (
            <div className="kasa-Tag" key={item.id}>
              <p>{item.tags}</p>
            </div>
          )
        })
      }
    </>
  );
};


Tag.protoTypes = {
  TagTitle: PropTypes.string,
}
//syntaxe prévue dans l'ES6 qui nous épargnera d'utiliser les accolades au moment de l'import
export default Tag