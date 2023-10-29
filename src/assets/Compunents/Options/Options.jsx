/* eslint-disable react/prop-types */



const Options = ({Option}) => {
    const {price, name, features} = Option;

    return (
        <div>
            <h2 >
                <span>price : {price}</span>
            </h2>
        </div>
    );
};

export default Options;