import PropTypes from "prop-types";

function Food(props) {
    return (
        <div> {/* 여러 요소를 감싸기 위해 div로 감쌉니다 */}
            <h1>{props.name}</h1>
            <h1>({props.rating}/5)</h1>
            <img src={props.picture} alt={props.name}/>
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image:
            "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
        rating: 4.9
    },
    {
        id: 2,
        name: "Samgyeopsal",
        image:
            "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
        rating: 4.8
    },
    {
        id: 3,
        name: "Bibimbap",
        image:
            "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
        rating: 4.8
    },
    {
        id: 4,
        name: "Doncasu",
        image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
        rating: 5.5
    },
    {
        id: 5,
        name: "Kimbap",
        image:
            "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
        rating: 4.7
    }
];

const Props = () => {
    return (
        <>
            {foodILike.map((dish) => (
                <Food key={dish.id}
                      name={dish.name}
                      picture={dish.image}
                      rating={dish.rating}
                />
            ))}
        </>
    );
};

export default Props;