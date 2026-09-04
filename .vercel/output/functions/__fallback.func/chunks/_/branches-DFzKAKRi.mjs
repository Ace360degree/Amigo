import { jsxs, jsx } from 'react/jsx-runtime';
import { useNavigate, Link } from '@tanstack/react-router';

const heroImage = "/assets/branches-main-DLPzt1HP.png";
const branchesMobileHero = "/assets/branches-main-mobile-VJiYKeFc.png";
const branchesIllustration = "/assets/branches2a-DivqTw5x.png";
const branchImage1 = "/assets/branchesimg1a-B2RN8Vm3.png";
const branchImage2 = "/assets/branchesimg2a-hfzDJSsm.png";
const branchImage3 = "/assets/branchesimg3a-QLm7xog1.png";
const branchIcon1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAvNJREFUeAHllctLVHEUxz/3MTlJWtlgmhKko+MrMAsjF5lpPrJFGyXaBdGuTdCyh/+AEEkRgYsEpUUPgsIUsUUGFkVIOGk+ShATZPL9mJl7b+eOWuL4GN1FB4bf757f+Z3H93t+Z+B/EoVtSKSXlPIsPgZNch06zPm5+qaXe6K3NruobnKuFaVTU+IhIPvc8UmOalCrKNRVZGPs30X8Zj7Wq0A5nkrenig+SNaWaXK9vZc7ojeWz4s9DJiQJPtP7T0UyGpGEkBxu9nhjmJoIYBrh87b192cYm0oVHccmemJdC0YqDFObj//TA0bVVOezROBxKjIYnL3bvYSIUcC143STMyzWQSPJFMhKm1lBUqph4uC5CPBVpleoLKjn2YiIHCVaKUZPA6YnNc1jFYvO1mGTbI25feAzUmPRNSSDExBwxf6sCvQVIYthUtCXBsrytuiKAWp5Eg7B6UpzPk5roWUy1HTEzjm3sc7v4ka7aDmRdfGhK10bCclvH2fD5KgqvyQhFNauhd9h5F4JpM5w8Tp1DEGfZz2jtDB3/YMc16WRZM/SJXwp/pmQ/hPxEXTvhwgDHMx1CyL2kCQloRY2gRP31qOizxUl2USFNtqaYcqXQulMbvacD1SHa09VMoDitYVYsWZTdpD297j4oDs/bJvkrIaWrzo7d94ul7P6awv9pVAsxctP4ULTo2G4gwuC4G2fkiCHyKCVg4LIBDNSLknWOwmG3vz/QCNsjamx5AxqjI6McH4KueKIV/T80zFRuFYItZerDCIxmcpDBjkyaNZWDL60wi9U3wV579WOFdPpnGlRLiQprD6fHTuc9IqpJuFntCICeegc5AuGcWanBiCvV9GwDPC34aam0ya3fO6yn3L5O7LLyE0LJlfdtXK3CwJsPGs0XISKT4Yxyv7bTg06vpGqd+1E1d8DPX+AElROt7mbg6ziguXi5ixMWZseCMZZsq5HG4JxjeDhlCkhrIa6f9JvkAyzNZnVkSyrb/Pf1N+A3b69WP5uprzAAAAAElFTkSuQmCC";
const branchIcon2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAA01JREFUeAGllctvVFUcxz/nzJ0p7UwjplTLI1KVPqa0wZhocINUoDaoaFy4KeLCxAWJaQiJK2PcGqOLWhPebNgQ/gAeGwiEEB4rHm2AhlKgPAKUMi3DzNx7z+F3JlPaoe0MtL/kJud3zu/5/T2uojzptQ1s8Tx6jKHaXUQ06YxP96kB9gsbllQuY1x92cJNL8LeXIa/Bu9Qd1m+Cs2/FR67OpKcdDLMlb77iD87W/IRzhSIWtdMuKaBX5hrBlmfPx6N0SVHU7iKbGp7CYnNhmyrirKDudIXTdjC0cGgO1cSbkgywiQsCyQLW8pGyQyclYb3+KCjhUvtjfhSZN9YFn7dyt8FEZ8yVNKBC215nAHxVHkvxYfH+kmMZfg+sGxvb8JIAwTMh9YVQzSVHK+W15CcF0QF8mCaEcfbtOZ2OQMl36X/rWTxzyzP6uNaerTKd5iak4NshjWivfWzejpfkVWfN7I5E9B1ZZgmmB2mslO4tpH/RGirrIdsaDggDlWlxw/ZQNaGpfv4dXrfxIFeXc+WxAJ+i0RoDkKUtKaJeahcgBUnI0pjwpB3opJPLsRqjYoKlH7A+UyO3acH2VNkcCqzcSVBdSX7JJ7U4xRdQyOscAaO9qHFMHdG+eTiMKvljqP9KPfWP0zz6HN+lEjHRHfnxtb8bOhpGbQupmPp2xwRY1EmN6RbduZJmp8WVvG7RP6uaPjWMiT473hLDB6+XBSk3tBM8DTHp+ducKEog5oEqwSODMXr1wrWe2qq6JUJ7lNKWtYSV5bH8Rg7Rf5/ismITLZC0T4NImWwaoaSX71GdyYkYQ2bxp7x87jPZqtZHxhCyfbX6Ro4My+L7lGG7kF6lYcvRY6evc1Bl5XMhius03UhzXuSeZpmu6cn6xUV09kc28oZL+ngmzbM+3EpqtCZQXplwZl64evqqJWWtCcG6HFvtZD4qnV2R7NCJMVVgUdCjg/kU7EId1cs45CElJKBG6bwE6pZxJLQwBs7eIXsaJZvKyNc0BLr3XHWv6ZesQPRNYurWTRewFYmOeZ4dx56wK22ZVIHqUQqxcWJ+yBG3AlP8NLOdkYHOcN9bahKLuFhXlHSTi6lb6pwUIBiQmaC/HDyThzITsnPU55eAKHbKxIpv5C+AAAAAElFTkSuQmCC";
const branchIcon3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABIVJREFUeAGVVltMHGUU/v6ZXVjKpVOlXSEFFkq7uyxUU60XElPLrUCsqY1tE6NJH9UnG6tNtA8+2BiJjZqY8KJPJj40wWqiIJfGpF5qNCYksrC0FJACSsFmS7nt7uxMv393h87CQtM/WWbmv3znO+f/zjkIbDzEIT/6Ywb2CgEYwO8/hVCradgqF8Nh3ObDxH2G2GBeaQkgGjehzC/jdJYKZ24WzkUNqGYKMtsBdAU3PL/5eD6AD5v8CXaqnUyDD0aDHyP7ynE8tS7WkF1nULG/8/CXh6pgLuk4o5sY4Vzctm6qCqaECeftCK7E4jDqfRj37UCtJNIcwFyjH/FKOpfJgMrFYcPAyUgMnxFo0KFg51pGupE0eH0ak3yc5mF3sYbLJBajP5ph4n+PD8trjaCwEEUHvYiXF8Irv3cVo+TgHuiHq/GBzX1Ixo0+/GMnuB3Ia/BiMEXWwfWV1mqpCZsH3gKc5KUpY3MYthgW5ODsYgzvMe4mvfvN7ojt3ZgFFvqGUSXfm/04xdCqc/N4Ic2DJ8txjG4aWD/EYyU4Qmlqlgd1Xpjy10KWjPtZ2IRA5RnNVQmSapoHf4yhgzEUvOCQBUyVXJMv/TfwLTUfXj2g4HpwCu64jq+jMbxP0IsWTngJT0fj2O12w2U3oLZW8ZKSSSMvUVSXoII5UIkMiSRVNLOAmz0hvMK8eDGio+WZMjwq166M4U+KQwQ0tHs8SSNKvReXTQGzLwS1exABCTpwA6O0bNKji9hk/DKC75mEs1tz0ZmakoT6mfmvVmRjWYad+YjaOys4s4atuWLgqMPENzKudHtCkueOnfw7ad93Zxmf5+fgnDXRM4R9ct5XhKPFBehQJCrrzfoLjsFBQJPalqWIL5kLj3DQZHr+JrY51NTTqSKoudDG909wL3OFy4ULRO5g2E4ASQJSRUhPPjVbxamYjpvWBMXRx/urlzWLgjAVAtSojkSN0bn4q9xU+gj8cQOiZxDHLfBM5GsrcITZr03P49iqRQV1FEJ7MIy8viFpgy51/g2ndIhWt8mDE//hKplNIENUOKGXMfObqvADk/NClhPfDf2bJFZdjEaWGoOJ98bMDBblXEK/+8vwsnS8N4TqFKjeNQiPNPZEGVpZlHIsA7yTisqHMc3tLfy91h3ES1ZoS7ehi5SnYEs0R+pCShVhEUy6f7gGby5G8THnlcIAuieDaE4wEhilpHdlihnV9jpD2/5sBZ77eRSXVj2YDeMrXUf8cSaY/N6eCzfB22j4U4KJH1PgCcspUtanOw87WK/+kqy59wuKRs3fgt40D0ZuYaqyCOOagmusMeeXomjKcsBB4LeReYinyvHWQ1vw7ooOjWoTrEER9oglhtC8OnAvpFY/MAm2O99JqZqs8wI1dFWW5TQFUR2J2Ho0lLGFthFsIbKEvb1DcDK2EZ7LGw8hh50qgs3GAS8+Yl03kN7xVNkymQtj+z04kWqZafYzYW3W9GWXMhmud1jUjAIXzrOjKVbTd1HYnQNpBPAgBhKM6/bgklBwQGI6FQRlUj7ovy13AYdmoa5qlFAgAAAAAElFTkSuQmCC";
const branchIcon4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAglJREFUeAHdlM9LVFEUxz/3vWdZTUOTCUEMDtTM9BxyEYi7EDMkF1Ju3FRua1X+E/0Fuaho0SJoEVLuIujHJqqViaTJEEqtsiIoa/T9uJ07TmDje/EcRhd+4b373rnnnnO+555zYIuhkuj0dDAsinq90BL5y0UmqJNv1oEacPG1EnsRZkSkn8waXw0id5hcXzE+QrN39CDZ/9lwWGOhe9e+/4GXor/Fhqi95+awxN6WZjD7jTsR+4Gxq850cjkIGZc4G6caASVh2zaj6vRxQuFwb3qWK/pQoktPhJPt3PZDRhytUcsVHizBT77QNHxPcT+1m5GmpiUK2+MgoCEkuq9q+R1o5aIsj+KUBkq8lSrrqhPPPH7HiZgjKrOXIS/4yyBkuN9ljDhtTamyyuJvj5vmWfH4KOG7cfq9eUY9n0vVs7VOfSOvbktF0w5DdCgMX8xz3vyfOsZDx2ZIxeibESIbZanQfDVFyytcf73AZK6NYtSBfDszsqRrv5YE4uyS6TT3mc56Xcsi+LBEubuDc/tbmVg/AvTCV+aiHHRlufHjF1cHS/i+dLzkVguDW3H6BsKuOsMcEmByimuyjPUVeCWzad+z97GXuwGJHNSgn87TwyaxMzpZS16LNBmZPRRMDauzLncrARdanOaykUYLZZqOGyd2NoN7JE2hwZm0AdpG+atMT32izFbjDxesk5Usk2uNAAAAAElFTkSuQmCC";
const branchIcon5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAi9JREFUeAHtlc9rE1EQxz9vNz/qj1Y9iEYRKtTa2sSAkIOgFQUbTBH6fwjiQfwHPIknC/4HnkWsbbWXKp7aa6LUEJAqgniQ1ihustld5yVGN+kmuxXFS7/w2Hmz82Z2Zr5vVhERuWPkDgyymjDh0waTq+95yd/ETBZPHoYsNZ1uypGggpRnR7iQVNz0WTUMxbTr8kxvJYuC7TLneZhtk11J3i6WuCGiGxrgagZrrsjeEX47CMPYaa7XG5xfes1Md5AtkBJYbB+xi6OUsinyHcpAU4Vx5iiXXMUAEXFwkGvJGA+Wyyz59UaQ8XyRpAO7pcaGXo5LPbWPR1qW9qpDQzzUz/Z7vWyb20+K3JHjXlgGxrkT5DarHXWMSxDHdVo6abgpwnfPaWUoHtXzCivdzlvF6HJeyHDLbjD5+Qv3iQjXxDoyxOJ8iURfw+wwed0oevWmD3oRY0sG+VM8Ng1elC1miYhKBUeo/VWoPRAWoBmkMMGsZXO8rfAMXQUK0oenzQMGl6WxC8oj3vbzrcbdlXWWowRo6uWS/apnBZxCmmq5xH69P5lm481P2WdTC3QUpMyPYzXka4UScSIibjK1vsnE2gfKocZ/eJONqXGqY4cZ7lAGWSq2j0yKUSHHnrWPvPPre42KezoL363xZJAlEjFsvbEdkjJRax23yqO+8KpZ0v6Drhf8ZROWRS6hwT/GToD/H0BdSWN7Muv7W8kcsEnIH6uut0LZmFC2QQiExuYPDWu1duIEOoAAAAAASUVORK5CYII=";
const branchIcon6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAu5JREFUeAGlVt1LFFEU/92Z3fUDxMzNTTNSs911TbNQyl5S8yMrqLeg/oyE6EEMo8ceqoeof6Ceg0oisKAgekharRSJwA9kpV3BLWN379zbuVO7zg6zu1MeGJh7zzm/3z1nzj1nAPeijUQQHwzjl3p368Tc2IT8qG+uw0qKQ5IHK/fAiC5h72oSCdLL/yEw94O1aGgJYDploFVjBCRwhdCqmIaHQsAgk/nZFQx938JaKQLW14rL5HHMoyHk86BbSgQyApKRhY9hYeoLIpbTagMhzNCig9SM7MENxIXEW3oWCXX51QLuKvtcBKfDkAQKBahrZpI3f6Rw781XjP81kU6HG27HpBQYowjLuQCIQOqUxpfztuwoAnpeYIdCGK+pEHKHyasGisB1dRQUCW5d5gHSh+PYoXDkY3hs+gzcizpcNhXbKZFIS5vR9kKDD+5Ev9CFm/1BZI7swyGrgorEx5gDgXqh/VqX4JObW7he6YX4uEplaSUAdmtOBIqVImi0gbHRdojqatTYwSu84E8/oRy28iWcJiuBx6IwaD9gP22Gbl9PPeLvJfz9LbiaBX/2B1zA7qDBb13nCKiC1A0M2+z57AaqOmqQ7GlAnMBlMXAlhjAVM9l1LkXJNO4o5QFqbFaHWAw/FYnqRZTzTDHwQAB1dJNV23jgpNepv6jb/ATOwlCi+w614RFVVh65tUwNalpJQjhXAEiieGtWPpe8umnDnAgQT6GX0sTORPAY7mZFDvzsYdxXze5bAieLHUSjslzuC8I43oQTcClHG3FqIAg+GEKMlnoesxMJRZBOG9DWN9A1t45oEWzWuR/t/kpEfTrE1GeU0Z6RB+bgpAy9ymHPLny42IWJAuD6YAS3aisQVXlXPnbwQhHkAChdnOYwaAaLpQRG59bMeaH1NqO7ugLvKEpWRvfi+Zx5csfSLfkhz3fiRppjgmobVGWSphdolJpTj3Ncm17E7ULg/yJspA3jw2EY6rel9yDG4LLKfgPtMf5mtp20wgAAAABJRU5ErkJggg==";
const branchVisitImage = "/assets/branchesimg4a-B-kDRpvX.png";
const branchArrowIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAGRJREFUeAHNkrsNgDAMRM9MwAiMwghhAkZiFNiEEViBDRxbSRGlSBErnyed5MJ3xdnA1DDzLnKoRcw3B07UIMZN9M0dQsmSlnUVctYo5SCiR4clW/rRAlMP48wx4LWez5leuQseGAZ/JpXbd9oAAAAASUVORK5CYII=";
const stats = [
  { value: "10,000+", label: "Students Trained" },
  { value: "3", label: "Branches in Mumbai" },
  { value: "3", label: "Career-Focused Courses" },
  { value: "100%", label: "Same Training Standard" }
];
const branchShowcase = [
  {
    title: "Ghatkopar Branch",
    description: "Our Ghatkopar branch has been guiding students towards careers in aviation and technology since 2017.",
    image: branchImage1,
    cta: "Explore Ghatkopar Branch",
    link: "/ghatkopar-branch"
  },
  {
    title: "Andheri Branch",
    description: "Conveniently located for students in the western suburbs, our Andheri branch offers the same courses, practical training, and placement support that students expect from Amigo Academy.",
    image: branchImage2,
    cta: "Explore Andheri Branch",
    link: "/andheri-branch"
  },
  {
    title: "Thane Branch",
    description: "Our Thane branch provides students in the central suburbs with easy access to career-focused training, helping aspiring professionals prepare for opportunities in aviation and technology.",
    image: branchImage3,
    cta: "Explore Thane Branch",
    link: "/thane-branch"
  }
];
const experienceCards = [
  {
    title: "Industry Focussed Training",
    icon: branchIcon1
  },
  {
    title: "Experienced Faculty",
    icon: branchIcon2
  },
  {
    title: "Practical Training",
    icon: branchIcon3
  },
  {
    title: "Placement Support",
    icon: branchIcon4
  },
  {
    title: "Career Guidance",
    icon: branchIcon5
  },
  {
    title: "Same Quality at Every Branch",
    icon: branchIcon6
  }
];
function Branches() {
  const navigate = useNavigate();
  const handleBranchClick = (path) => {
    navigate({ to: path });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-white text-neutral-900", children: [
    /* @__PURE__ */ jsxs("section", { className: "hidden sm:flex relative w-full min-h-[580px] lg:h-[620px] bg-white items-center overflow-hidden border-b border-neutral-100", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 w-full lg:w-[58%] h-full", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: heroImage,
          alt: "Find an Amigo Academy Branch Near You",
          className: "w-full h-full object-cover object-left"
        }
      ) }) }),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 z-20 py-16 lg:py-0", children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl lg:max-w-[580px] text-left flex flex-col space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs sm:text-[13px] font-sans font-medium text-slate-400", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "Branches" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-4xl lg:text-[48px] font-outfit font-extrabold tracking-tight text-[#17365d] leading-snug sm:leading-[1.28] lg:leading-[1.32]", children: [
          "Find an Amigo Academy",
          /* @__PURE__ */ jsx("br", {}),
          "Branch Near You"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[#475569] font-sans font-medium text-xs sm:text-[15.5px] leading-relaxed max-w-lg", children: "With three branches across Mumbai\u2014 Ghatkopar, Andheri, and Thane\u2014 Amigo Academy makes career-focused education more accessible, with the same practical training, placement support, and career guidance at every location." }),
        /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#branch-grid",
            className: "inline-flex items-center justify-center gap-2 bg-[#DF1818] hover:bg-[#c41212] text-white font-sans font-bold text-xs sm:text-[14px] px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(223,24,24,0.3)] hover:shadow-[0_12px_24px_rgba(223,24,24,0.4)] transition-all duration-300 active:scale-95 whitespace-nowrap focus:outline-none cursor-pointer",
            children: [
              "Find Your Nearest Branch",
              /* @__PURE__ */ jsx("span", { className: "font-bold", children: "\xA0\u2794" })
            ]
          }
        ) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "sm:hidden relative w-full bg-white overflow-hidden border-b border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-[520px] overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: branchesMobileHero,
          alt: "Find an Amigo Academy Branch Near You",
          className: "absolute inset-0 w-full h-full object-cover object-[right_top]"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-y-0 left-0 z-10 px-5 flex flex-col justify-center max-w-[280px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs font-sans font-medium text-slate-400 mb-3", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-[#DF1818] transition-colors focus:outline-none", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 mx-1 select-none", children: ">" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DF1818] tracking-tight", children: "Branches" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-[28px] font-extrabold text-[#17365d] leading-[1.15] tracking-tight mb-4 font-outfit", children: [
          "Find an Amigo",
          /* @__PURE__ */ jsx("br", {}),
          "Academy Branch",
          /* @__PURE__ */ jsx("br", {}),
          "Near You"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[#475569] text-[12.5px] leading-relaxed mb-6 font-medium", children: "With three branches across Mumbai\u2014 Ghatkopar, Andheri, and Thane\u2014 Amigo Academy makes career-focused education more accessible, with the same practical training, placement support, and career guidance at every location." }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "#branch-grid",
            className: "inline-flex items-center justify-between gap-3 bg-[#e02607] hover:bg-[#c81e04] text-white font-bold text-[13.5px] px-5 py-3 rounded-full shadow-lg active:scale-95 transition-all duration-300 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Find Your Nearest Branch" }),
              /* @__PURE__ */ jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white text-xs font-extrabold", children: "\u2794" })
            ]
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-12 sm:py-16 px-6 sm:px-8 md:px-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6", children: stats.map((stat) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-[24px] border border-slate-100/90 bg-white p-6 sm:p-8 text-center shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col items-center justify-center min-h-[140px] sm:min-h-[160px]",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-3xl sm:text-[38px] font-extrabold text-[#112a46] leading-none mb-3", children: stat.value }),
          /* @__PURE__ */ jsx("div", { className: "text-xs sm:text-[13px] font-bold text-[#112a46]/80 leading-snug", children: stat.label })
        ]
      },
      stat.label
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#f0f4f9] py-16 sm:py-24 px-4 sm:px-6 md:px-8 border-t border-slate-100/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#112a46] leading-tight tracking-tight", children: [
        "Three Convenient Locations",
        /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
        "Across Mumbai"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-3xl text-sm sm:text-[15.5px] leading-relaxed text-slate-500 font-medium", children: "Choosing the right institute should never depend on how far you have to travel. That's why Amigo Academy has established branches in Ghatkopar, Andheri, and Thane, making it easier for students across Mumbai to access professional training closer to home." }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-3xl text-sm sm:text-[15.5px] leading-relaxed text-slate-500 font-medium", children: "Simply choose the branch that's most convenient for you and begin your journey with confidence." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 sm:mt-12 rounded-[28px] bg-white p-4 sm:p-6 md:p-8 shadow-[0_10px_35px_rgba(15,42,74,0.05)] border border-slate-100/80", children: /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-hidden rounded-[20px] bg-white", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: branchesIllustration,
          alt: "Three Convenient Locations Across Mumbai \u2014 Andheri, Ghatkopar, Thane",
          className: "w-full h-auto object-contain block"
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "branch-grid", className: "bg-white py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1f3658] leading-tight", children: "Our Branches" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto", children: "Explore individual branch pages for detailed course offerings, campus facilities, contact information, and location maps." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 md:grid-cols-3 gap-8", children: branchShowcase.map((branch) => /* @__PURE__ */ jsxs(
        "article",
        {
          className: "group overflow-hidden rounded-[22px] border border-[#d9e1ee] bg-white shadow-[0_10px_30px_rgba(15,42,74,0.05)] transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between",
          children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  onClick: () => handleBranchClick(branch.link),
                  className: "h-52 sm:h-56 overflow-hidden cursor-pointer",
                  children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: branch.image,
                      alt: branch.title,
                      className: "h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-7", children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    onClick: () => handleBranchClick(branch.link),
                    className: "text-[17px] sm:text-lg font-extrabold text-[#1f3658] group-hover:text-[#e31e24] transition-colors leading-snug cursor-pointer",
                    children: branch.title
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-6 text-slate-500", children: branch.description })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-6 sm:p-7 pt-0", children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleBranchClick(branch.link),
                className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#e31e24] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(227,30,36,0.18)] transition-all hover:bg-[#c8191f] active:scale-95 cursor-pointer",
                children: [
                  branch.cta,
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: branchArrowIcon,
                      alt: "",
                      "aria-hidden": "true",
                      className: "h-4 w-4 object-contain"
                    }
                  )
                ]
              }
            ) })
          ]
        },
        branch.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#eef3fa] py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-[40px] font-extrabold text-[#1f3658] leading-tight", children: [
        "The Same Amigo Experience",
        /* @__PURE__ */ jsx("br", {}),
        "at Every Branch"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-4xl text-sm sm:text-base leading-7 text-slate-500", children: "No matter which branch you choose, you'll become part of the same Amigo Academy community. Every branch follows the same training standards, offers the same career-focused programmes, and is committed to helping students build the skills and confidence needed for professional success." }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-4xl text-sm sm:text-base leading-7 text-slate-500", children: "From classroom learning and career guidance to placement support, every student receives the same commitment to quality across all our branches." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: experienceCards.map((item) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-[18px] border border-[#dde5f2] bg-white px-6 py-7 text-center shadow-[0_10px_28px_rgba(15,42,74,0.04)]",
          children: [
            /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f6e7bf]", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: item.icon,
                alt: "",
                "aria-hidden": "true",
                className: "h-6 w-6 object-contain"
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "mt-5 text-sm sm:text-[15px] font-extrabold text-[#1f3658] leading-snug", children: item.title })
          ]
        },
        item.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-20 px-4 sm:px-6 md:px-8 border-t border-neutral-100", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center text-3xl sm:text-[40px] font-extrabold text-[#1f3658] leading-tight", children: "Visit a Branch Before You Decide" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base leading-7 text-slate-500", children: "Choosing an institute is an important decision, and sometimes the best way to make that decision is by visiting in person. Meet our counsellors, explore the learning environment, ask your questions, and understand which course is right for your career goals." }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm sm:text-base leading-7 text-slate-500", children: "We're always happy to welcome students and parents for a conversation before they begin their journey with us." }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => handleBranchClick("/contact"),
              className: "mt-8 inline-flex items-center justify-center rounded-full bg-[#e31e24] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(227,30,36,0.18)] transition-all hover:bg-[#c8191f] active:scale-95 cursor-pointer focus:outline-none",
              children: [
                "Find Your Nearest Branch",
                /* @__PURE__ */ jsx("span", { className: "ml-2", children: "\u2794" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:justify-self-end", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-[22px] shadow-[0_12px_35px_rgba(15,42,74,0.08)]", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: branchVisitImage,
            alt: "Visit a branch before you decide",
            className: "h-full w-full max-w-[560px] object-cover object-center"
          }
        ) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#0b2f61] px-4 sm:px-6 md:px-8 py-20 sm:py-24 border-t border-[#0d3770] relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl text-center text-white relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-[#f5b74a]/30 bg-[#072147]/80 px-5 py-2 text-xs sm:text-[13px] font-extrabold uppercase tracking-wide text-[#f5b74a] shadow-sm mb-8", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm", children: "\u26A1" }),
        "LIMITED SEATS PER BATCH \u2014 APPLY EARLY TO SECURE YOUR SPOT"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mx-auto max-w-4xl text-3xl sm:text-4xl lg:text-[50px] font-extrabold leading-snug sm:leading-[1.3] lg:leading-[1.28] text-white tracking-tight mb-6", children: "Start Your Journey from the Branch That's Closest to You" }),
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-[#f5b74a]/30 bg-[#072147]/80 px-5 py-2 text-xs sm:text-[13px] font-extrabold text-[#f5b74a] shadow-sm mb-10", children: [
        /* @__PURE__ */ jsx("span", { className: "text-sm", children: "\u{1F3DB}\uFE0F" }),
        "Maharashtra Govt Certified \u2014 Only aviation institute in Maharashtra"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-10", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
            className: "inline-flex min-w-[230px] items-center justify-center gap-2.5 rounded-2xl bg-[#E02424] hover:bg-[#c81c1c] px-7 py-4 text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider shadow-[0_8px_25px_rgba(224,36,36,0.45)] transition-all hover:shadow-[0_12px_30px_rgba(224,36,36,0.55)] active:scale-95 cursor-pointer focus:outline-none",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-base", children: "\u2708\uFE0F" }),
              "CHECK MY ELIGIBILITY NOW"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
            className: "inline-flex min-w-[190px] items-center justify-center gap-2 rounded-2xl bg-[#E02424] hover:bg-[#c81c1c] px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-[0_8px_25px_rgba(224,36,36,0.45)] transition-all hover:shadow-[0_12px_30px_rgba(224,36,36,0.55)] active:scale-95 cursor-pointer focus:outline-none",
            children: "Start My Career"
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/919987588932",
            target: "_blank",
            rel: "noreferrer",
            className: "inline-flex min-w-[190px] items-center justify-center gap-2.5 rounded-2xl bg-[#22c55e] hover:bg-[#16a34a] px-7 py-4 text-xs sm:text-sm font-bold text-white shadow-[0_8px_25px_rgba(34,197,94,0.4)] transition-all hover:shadow-[0_12px_30px_rgba(34,197,94,0.5)] active:scale-95 cursor-pointer",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-base", children: "\u{1F4AC}" }),
              "Chat on WhatsApp"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-[13px] text-[#a3b8db] font-semibold", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#22c55e] font-extrabold", children: "\u2713" }),
          " 4.6 Google Rating"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#22c55e] font-extrabold", children: "\u2713" }),
          " 10,000+ Students Trained"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#22c55e] font-extrabold", children: "\u2713" }),
          " Certified Courses"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#22c55e] font-extrabold", children: "\u2713" }),
          " 200+ Hiring Partners"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => window.dispatchEvent(new CustomEvent("openEligibilityModal")),
          className: "inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-sans font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer",
          children: [
            /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 text-white", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3" }) }),
            /* @__PURE__ */ jsx("span", { children: "Download Brochure (PDF)" })
          ]
        }
      ) })
    ] }) })
  ] });
}
const SplitComponent = Branches;

export { SplitComponent as component };
//# sourceMappingURL=branches-DFzKAKRi.mjs.map
