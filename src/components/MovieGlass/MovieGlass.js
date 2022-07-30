import { Link } from 'react-router-dom';
import config from '~/config';
import { useProgressiveImage, useSlug } from '~/hooks';
import { StarSolidIcon } from '~/components/Icons';
import PropTypes from 'prop-types';

const MovieGlass = ({ data }) => {
    const slug = useSlug(data.title);
    const loaded = useProgressiveImage(
        `${config.movieDB.image}${data.backdrop_path}`,
    );

    return (
        <Link
            to={`/movie/${slug}?id=${data.id}`}
            className="relative w-full aspect-video bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
            style={{
                backgroundImage: `url(${loaded})`,
            }}
        >
            <div className="absolute left-0 bottom-0 flex items-center w-full px-4 py-2 bg-white bg-opacity-10 backdrop-blur">
                <h4 className="flex-1 font-medium text-white text-sm line-clamp-1">
                    {data.title}
                </h4>
                <div className="relative mx-4 w-[1px] h-5 bg-gradient-to-b from-transparent via-white to-transparent"></div>
                <div className="flex gap-1 text-xs text-white">
                    <StarSolidIcon />
                    <span>{(data?.vote_average ?? 0).toFixed(1)}</span>
                </div>
            </div>
        </Link>
    );
};

MovieGlass.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
        backdrop_path: PropTypes.string,
        id: PropTypes.number,
    }).isRequired,
};

export default MovieGlass;
