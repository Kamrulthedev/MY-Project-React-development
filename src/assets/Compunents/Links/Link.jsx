/* eslint-disable react/prop-types */


const Link = ({route}) => {
    return (
        <li className="mr-12" ><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;