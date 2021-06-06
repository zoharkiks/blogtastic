import { React } from "react";
import { Link } from "react-router-dom";
import { dateParser } from "../helpers/date.js";
import firstLetter from "../helpers/firstLetter";
import Avatar from "@material-ui/core/Avatar";
import "../App.css";
import { useDispatch } from "react-redux";
import { fetchCategory } from "../redux/actions/categoryAction";

const Article = ({
  title,
  date,
  shortDesc,
  author,
  category,
  coverImg,
  slug,
  slugCategory,
}) => {
  const dispatch = useDispatch();

  // Fetching particular category using id
  const fetchCat = () => {
    dispatch(fetchCategory(slugCategory));
  };

  return (
    <div className="article">
      <div className="bg-[#24272B] border-l-4 px-[15px] py-4 border-[#BA274A] flex flex-col justify-center rounded-xl font-montserrat sm:space-y-5 ">
      <Link to={`/articles/${slug}`}>
        <img
          className="object-scale-down h-48 w-full"
          src={coverImg}
          alt=""
        /></Link>
        <span
          onClick={fetchCat}
          className="bg-[#F26419] text-[#F1DAC4] font-semibold text-left rounded-[10px] my-[12px] px-2 max-h-8 w-min  sm:text-xl "
        >
          <Link to={`/categories/${slugCategory}`}>#{category}</Link>
        </span>
        <h1 className="text-[#F1DAC4] font-bold text-2xl mb-2  sm:text-2xl">
          {title}
        </h1>
        <span className="text-[#F1DAC4] font-bold text-[18px] mb-4 sm:text-lg ">
          By {author}
        </span>
        <p className="text-[#F1DAC4] font-montserrat tracking-[2px] font-medium text-[14px] sm:text-xl md:truncate ">
          {shortDesc}
        </p>
        <h1 className="text-[#F1DAC4] italic text-[18px]  mt-3 sm:text-xl">{dateParser(`${date}`)}</h1>
        </div>
      </div>
  );
};

export default Article;
