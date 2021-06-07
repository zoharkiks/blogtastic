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
  slugCategory2,
  category2,
}) => {
  const dispatch = useDispatch();

  // Fetching particular category using id
  const fetchCat = () => {
    dispatch(fetchCategory(slugCategory));
    dispatch(fetchCategory(slugCategory2));

  };

  return (
    <div className="article">
      <div className="bg-[#24272B]  border-l-4 px-[15px] py-6 border-[#BA274A] flex flex-col justify-center rounded-xl font-montserrat sm:space-y-5 ">
        <div className="flex justify-center">
        <Link to={`/articles/${slug}`}>
          <img
            className="object-scale-down h-48   sm:h-56 rounded-lg"
            src={coverImg}
            alt=""
          />
        </Link>
        </div>
       
        <span
          onClick={fetchCat}
          className="bg-[#F26419] text-[#F1DAC4] font-semibold text-left rounded-[10px] my-[12px] px-2 max-h-8 w-min  sm:text-xl sm:px-4  "
        >
          <Link to={`/categories/${slugCategory}`}>#{category}</Link>
        </span>
        {slugCategory2 ? (
          <span
            onClick={fetchCat}
            className="bg-[#066f8a] text-[#F1DAC4] font-semibold text-left rounded-[10px] my-[12px] px-2 max-h-8 w-min  sm:text-xl sm:px-4 "
          >
            <Link to={`/categories/${slugCategory2}`}>#{category2}</Link>
          </span>
        ) : (
          ""
        )}
        <h1 className="text-[#F1DAC4] font-bold text-2xl mb-2 py-1  sm:text-3xl">
          {title}
        </h1>
        <span className="text-[#F1DAC4] font-bold text-[18px] mb-4 sm:text-xl  ">
          By {author}
        </span>
        <p className="text-[#F1DAC4] font-montserrat tracking-[2px] font-medium text-[14px] sm:text-xl md:truncate ">
          {shortDesc}
        </p>
        <h1 className="text-[#F1DAC4] italic text-[18px]  mt-3 sm:text-xl">
          {dateParser(`${date}`)}
        </h1>
      </div>
    </div>
  );
};

export default Article;
