import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import {Head, Link} from "@inertiajs/inertia-react";
import FeaturedMovies from "../../../views/components/FeaturedMovies";
import PropType from 'prop-types';
import MovieCard from "../../../views/components/MovieCard";

export default function Dashboard(){


    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    };
    return(
            <Authenticated>
            {/*anything we write inside this tag it will be put on main tag in index*/}
            <Head>
                <title>Dashboard</title>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <div className="gap-[30px] __scroll-selector">
                    <Flickity class="gap-[30px]" options={flickityOptions}>
                    {[1,2,3,4].map(i => (
                        <FeaturedMovies key={i}
                                        slug="the-batman"
                                        name={`Batman Vs Superman Season ${i}`}
                                        category="Action"
                                        rating={i+1}
                                        thumbnail="/images/featured-1.png"/>
                    ))}
                    </Flickity>

                </div>
            </div>
            <div className="mt-5">
                <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <div className="__scroll-selector">
                        <Flickity className="gap-[30px]" options={flickityOptions}>
                        {[1,2,3,4,5,6].map(i => (
                            <MovieCard key={i}
                                       thumbnail="/images/browse-1.png"
                                       name={`Cat Season ${i}`}
                                       slug="cat"
                                       category="Comedy"
                            />
                        ))}
                        </Flickity>
                    </div>
                </div>
        </Authenticated>
    );
};
