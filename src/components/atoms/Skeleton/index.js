import { Skeleton as BaseSkeleton, RepeatSkeletonBox } from "./style";
import propTypes from "prop-types";

function Skeleton({ repeat, ...otherProps }) {

    if (!repeat) return <BaseSkeleton {...otherProps} />
    else return <RepeatSkeletonBox>
        {Array.from(Array(repeat)).map((_, key) => (<BaseSkeleton key={key} {...otherProps} />))}
    </RepeatSkeletonBox>
}

Skeleton.propTypes = {
    ...BaseSkeleton.propTypes,
    repeat: propTypes.number
}


export default Skeleton
