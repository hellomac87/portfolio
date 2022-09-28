import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEX///9ARUjoTg49QkVOUlU6P0NSVlkpMDR1eXouNDjs7e34+PgwNzozOTzV1tbnQwDNzs/oSgCztLXnPQBaXmFvcnToSwBITVBlaWuOkZLk5eX51su+v8D98u3tf1z0tKH639XpVBSYmpv4z8KEh4nviWrraTvd3t7+9fCkpqfGx8j1vKvsbkP3ybv749rzq5bwl3zsc0ohKC2rra7pVxzugV/qYi3yo4vraj3wj3H0r5rxm4Fj28oxAAAFbUlEQVR4nO2a7XaiPBSFoYgIiIioqNX6UW1rx9pp7TvvTOf+72sgIV8Qa6e1sNas/fySQMLZJDknOdEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAlv3D/PFx/rCo246v4e7bVRiHhDh+ms/qtufczL5HYXTBicJws6/eiq7ZOE3Sow8fGh19K/5gUC58DMOLAlH8XXmkl+RvaG7Vul6fvbr7WYXeoG2dxG5SHW078LStjALnvlA0+xEX9WWEy4X0UMNmr3DGSu2em5cHmk/3t4wD8xRWnzzZdU17pGtim95QLTQWUaQTeHExjB/EU02Lv8PpKQqZUXbr8wqN9nsVrtLXuttyA7dO+khTKboMh3qBKfE3nULTuf0yhSNLK6ussG8VDZHsbMvjd/+GwFTitU6hZUotnFfhwH6fQo90dqGzDDbM21OpaPmWwHQysrAhK1RmQD0K711yERRmXNehpqxF0S/ViUZRYVJGO51CMxBN1KNwnD/nKA7ct6mVVsKLLmUvGsXRbrN5GsaySDYVVYWSt6lHYSM3x7J9qXaL1XYmrGgniYmfctd5eRVLQ3epVWi6LN6eV+H42eVIYm1R+py9xnNMzVt7LisNWAfIXRgKv2lcD6NieVEh9zbnVWh0BGtbyJCKs6emIqq4fDR5IphyWzaSkIX8nplwQNGNVqFp979EoYTPZTjF1cta6t82G5F9qTDIy4SbiS/VJmbSrb1WIfM2tShMJGvYp97KqwWXRsprPkhDugidrEajMb035xLDuV6h6R7qUjhxZTvaq6zsVikLiG3G/0IFCXtTN7DtwCEVjBc2TqPNEYXU29ShsKcuX53MjkQx0KaL5Cs2DaP/sss8XOaRgMsfvhxTaNlePQpbakyxEt9YF9bsFokiP1g3UX/ZZzGG3BV+NjymkEyBOhQmBWPs1ra4ZKfRbKn4Gc9V7s64wvhOUZjILmtdh0J1ypF3l3ZdAdl3CHe5MOi+g0IWrndHFLY7K+l7ub1p9QoPp3eR+dL5Q33odpWllZ3wX5UpbJ1c2mWdmE01MQ9JQODz0HxrHqYK/eI8qFjhO7qQ2Cn70qus4vt8aVZzEmgkVqawwwdbefqJkiALeo/6eEhzA8sj8ZB8m/vSXK9Q4VbM/GnBjmDNHR/Zg5TWNN5qcHJNQxRm+Z7aFPJMR+oR1TCYzi+fG+Zkc01afF6rre+PrkupQqNVHiAVKfQDuVhxCdnips/1ZznF43uLodhb/DR0CpWVfKUKu6yXrEZ61XGEBWTqrfgYzjIc8v4wfuf+kCn0rNLCohqFqgRDRGe6yRAfgKSplD3+TuzxRemwuMdnCpWvV6VCPgxdmtrmg4luFEUtklNU8zRheLPZ7KK38zRcodFTJVakUOzk86z+JC9gm33ZERmlXNvwdK5NKCzk4CtSyANVnhpm6RmbHSqIYEK36C9HUvpMYSlfKik0Rnb1ClkekfoVQraKFEm3juKJPpDzlhX6ppwJ1x6UnF1hUjbET52eey+uWLU8lXEZHu9F6WhGq1DdxwTGedEq3IppKDKl946UohYbA5aa/8uzJ0WhMZXDUSHF/mmFDjvQe+YK1y4/R+xLj44T6eLA6wVNmoeb3ejPD1/kY2B+fqjm0Y0Vb86y2gP9meVHWSVNQoN3kGc2mnlZf3Ksmt9iDzVNdkTzWj4DDuPfSrVeXqsx8NX2Dk3e3hmOgb+M2e/iOf6vGs7xvxbyXwz6Z4w4/Af/i0HZP8xfX//Z/9MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALzBH0hyXneWrnqNAAAAAElFTkSuQmCC"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl  font-light">FE-Engineer of TMON</h4>
        <p className="font-bold text-2xl mt-1">TMON</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt=""
          />
          {/* Texh used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            summary points summary points summary points summary points summary
            points
          </li>
          <li>
            summary points summary points summary points summary points summary
            points
          </li>
          <li>
            summary points summary points summary points summary points summary
            points
          </li>
          <li>
            summary points summary points summary points summary points summary
            points
          </li>
          <li>
            summary points summary points summary points summary points summary
            points
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
